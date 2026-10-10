// End-to-end checks of the Lingua web build: branding, six languages, sessions, progress and the practice areas.
import { test, expect } from "@playwright/test";

const LANGS = ["en", "de", "es", "it", "fr", "ne"];
const PAIRS = [ // [interface, known, target]
  ["en", "en", "de"], ["de", "de", "en"], ["es", "es", "it"], ["it", "it", "fr"], ["fr", "fr", "es"], ["ne", "ne", "de"],
  ["en", "en", "it"], ["en", "en", "fr"], ["en", "en", "ne"], ["de", "de", "ne"],
];

/** Fails the test on any page error or console error. */
function watchErrors(page) {
  const errors = [];
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  page.on("console", (m) => { if (m.type() === "error" && !/favicon|ERR_|404/.test(m.text())) errors.push("console: " + m.text()); });
  return errors;
}
async function preset(page, profile) {
  await page.addInitScript((p) => {
    if (!sessionStorage.getItem("seeded")) {
      localStorage.setItem("lingua.v1", JSON.stringify({ profile: { onboarded: true, level: "b", minutes: 10, ...p } }));
      sessionStorage.setItem("seeded", "1");
    }
  }, profile);
}
async function mainText(page) { return (await page.locator("#main").innerText()).trim(); }
async function expectClean(page) {
  const txt = await page.locator("body").innerText();
  expect(txt).not.toMatch(/\bundefined\b|\bNaN\b|\[object Object\]/);
  expect(txt).not.toMatch(/Bhasha/);
  expect(txt).not.toMatch(/\b(numTip|lang|sit|lvl|sk|st|t)_[a-z]{2,}\b/); // untranslated interface keys
}

test("first visit: Lingua branding, onboarding, powered-by footer", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("/");
  await expect(page).toHaveTitle(/^Lingua/);
  await expect(page.locator(".brand b")).toHaveText("lingua");
  await expect(page.locator('[data-a="obSkip"], [data-a="obNext"]').first()).toBeVisible();
  const sheetText = await page.locator("#layer").innerText();
  expect(sheetText).toMatch(/Lingua/);
  await page.locator('[data-a="obSkip"]').first().click();
  await expect(page.locator("footer.powered")).toContainText("Powered by Ing.-Büro Sachit Shrestha");
  await expect(page.locator("footer.powered img")).toHaveAttribute("src", /team-nepal-solutions/);
  await expectClean(page);
  expect(errors).toEqual([]);
});

for (const [ui, known, target] of PAIRS) {
  test(`all tabs render: interface ${ui}, ${known} → ${target}`, async ({ page }, info) => {
    const errors = watchErrors(page);
    await preset(page, { ui, known, target });
    await page.goto("/");
    await expect(page.locator("#pairBtn")).toBeVisible();
    for (const r of ["home", "learn", "words", "speak", "travel", "progress"]) {
      await page.locator(`.tab[data-r="${r}"]`).click();
      await expect(page.locator(`.tab[data-r="${r}"]`)).toHaveAttribute("aria-current", "page");
      expect((await mainText(page)).length).toBeGreaterThan(20);
      await expectClean(page);
      if (r === "home") await page.screenshot({ path: info.outputPath(`home-${ui}-${known}-${target}.png`), fullPage: true });
    }
    expect(errors).toEqual([]);
  });
}

/** Answers whatever the current task asks, preferring wrong-but-valid input so every branch is exercised. */
async function answerTask(page) {
  const has = async (sel) => (await page.locator(sel).count()) > 0;
  if (await has('[data-a="reveal"]')) await page.locator('[data-a="reveal"]').first().click();
  if (await has('[data-a="grade"][data-g="3"]')) { await page.locator('[data-a="grade"][data-g="3"]').first().click(); return "grade"; }
  if (await has('[data-a="pick"]')) { await page.locator('[data-a="pick"]').first().click(); }
  else if (await has("#typeIn")) { await page.locator("#typeIn").fill("test"); await page.locator('[data-a="checkType"]').first().click(); }
  else if (await has('[data-a="dontKnow"]')) { await page.locator('[data-a="dontKnow"]').first().click(); }
  else if (await has('[data-a="mleft"]')) {
    const n = await page.locator('[data-a="mleft"]').count();
    for (let i = 0; i < n; i++) { await page.locator('[data-a="mleft"]').nth(0).click().catch(() => {}); await page.locator('[data-a="mright"]').nth(0).click().catch(() => {}); }
  } else if (await has('[data-a="oans"]')) {
    while (await has('[data-a="oans"]')) await page.locator('[data-a="oans"]').first().click();
    if (await has('[data-a="ocheck"]')) await page.locator('[data-a="ocheck"]').first().click();
  } else if (await has('[data-a="rpick"]')) {
    while (await has('[data-a="rpick"]:not([disabled])')) { await page.locator('[data-a="rpick"]:not([disabled])').first().click(); if (await has('[data-a="nextTask"]')) break; }
  } else if (await has("textarea")) { await page.locator("textarea").first().fill("Una frase di prova."); if (await has('[data-a="writeDone"]')) await page.locator('[data-a="writeDone"]').first().click(); }
  if (await has('[data-a="nextTask"]')) { await page.locator('[data-a="nextTask"]').first().click(); return "next"; }
  return "other";
}

for (const target of ["it", "fr", "ne"]) {
  test(`a daily session runs in ${target} and stores FSRS progress`, async ({ page }) => {
    const errors = watchErrors(page);
    await preset(page, { ui: "en", known: "en", target });
    await page.goto("/");
    await page.locator('[data-a="startSession"]').first().click();
    for (let i = 0; i < 25; i++) {
      if (!(await page.locator('[data-a="finish"]').count()) === false) break;
      if (await page.locator('[data-a="finish"]').count()) break;
      await answerTask(page);
      await expectClean(page);
    }
    const D = await page.evaluate(() => JSON.parse(localStorage.getItem("lingua.v1")));
    const recs = Object.values(D.prog[target] || {});
    expect(recs.length).toBeGreaterThan(2);
    expect(recs.every((p) => typeof p.s === "number" && typeof p.d === "number")).toBe(true);
    expect(errors).toEqual([]);
  });
}

test("switching the learning language keeps progress in the other language", async ({ page }) => {
  await preset(page, { ui: "en", known: "en", target: "fr" });
  await page.goto("/");
  await page.locator('[data-a="startSession"]').first().click();
  for (let i = 0; i < 6; i++) await answerTask(page);
  const before = await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem("lingua.v1")).prog.fr || {}).length);
  expect(before).toBeGreaterThan(0);
  await page.locator('[data-a="pause"], [data-a="pauseSession"]').first().click().catch(() => {});
  await page.locator("#pairBtn").click();
  await page.locator('[data-a="setp"][data-k="target"][data-v="it"]').click();
  await page.locator('[data-a="closeSheet"]').first().click({ position: { x: 5, y: 5 } }).catch(() => {});
  await expect(page.locator("#pairBtn")).toContainText(/Italian/);
  await page.locator("#pairBtn").click();
  await page.locator('[data-a="setp"][data-k="target"][data-v="fr"]').click();
  const after = await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem("lingua.v1")).prog.fr || {}).length);
  expect(after).toBe(before);
});

for (const target of ["it", "fr"]) {
  test(`numbers, grammar and conversations work in ${target}`, async ({ page }) => {
    const errors = watchErrors(page);
    await preset(page, { ui: target, known: "en", target });
    await page.goto("/");
    await page.locator('.tab[data-r="learn"]').click();
    const gr = page.locator('[data-a="gr_open"]');
    expect(await gr.count()).toBeGreaterThanOrEqual(4);
    await gr.first().click();
    await expectClean(page);
    expect(await mainText(page)).toMatch(/___|[a-zàèéìòù]/i);
    await page.locator('.tab[data-r="learn"]').click();
    const cv = page.locator('[data-a="cv_open"]');
    expect(await cv.count()).toBeGreaterThanOrEqual(6);
    await cv.first().click();
    await expectClean(page);
    await page.locator('.tab[data-r="learn"]').click();
    await page.locator('[data-a="n_open"]').first().click();
    await expectClean(page);
    expect(await mainText(page)).toMatch(target === "it" ? /zero|uno|due/ : /zéro|un|deux/);
    expect(errors).toEqual([]);
  });
}
