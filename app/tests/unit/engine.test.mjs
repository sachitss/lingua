// FSRS scheduling, recall-based mastery and session building.
import test from "node:test";
import assert from "node:assert/strict";
import { newProgress, applyGrade, nextInterval, itemState, isMastered, migrateProgress, coreWord, answerOk, buildSession, DAY } from "../../www/js/core.js";
import { ITEMS, WORDS } from "../../www/js/content.js";

const T0 = Date.UTC(2026, 9, 10, 8);

test("FSRS first intervals follow the default parameters", () => {
  assert.ok(Math.abs(nextInterval(newProgress(), 3, T0) - 3.7145) < 0.01);
  assert.ok(Math.abs(nextInterval(newProgress(), 4, T0) - 13.8206) < 0.01);
  assert.equal(nextInterval(newProgress(), 1, T0), 10 / (24 * 60));
});

test("good reviews grow the interval; a lapse shrinks stability and resets the streak", () => {
  const p = newProgress(); let t = T0, last = 0;
  for (let i = 0; i < 4; i++) { applyGrade(p, 3, t, "type"); assert.ok(p.ivl > last); last = p.ivl; t += p.ivl * DAY; }
  const s = p.s; applyGrade(p, 1, t, "type");
  assert.ok(p.s < s); assert.equal(p.rStreak, 0); assert.equal(itemState(p, t + 1), "learning");
});

test("a single correct answer never moves an item past learning", () => {
  const p = applyGrade(newProgress(), 4, T0, "type");
  assert.equal(itemState(p, T0 + 1000), "learning");
});

test("recognition alone never reaches mastered", () => {
  const p = newProgress(); let t = T0;
  for (let i = 0; i < 8; i++) { applyGrade(p, 3, t, "mcq"); t += p.ivl * DAY; }
  assert.equal(isMastered(p), false);
  assert.notEqual(itemState(p, t - 1000), "mastered");
});

test("mastered needs three recalls in two exercise types over seven days", () => {
  const p = newProgress(); let t = T0;
  applyGrade(p, 3, t, "mcq"); t += 2 * DAY;
  applyGrade(p, 3, t, "type"); t += 4 * DAY;
  applyGrade(p, 3, t, "translate"); assert.equal(isMastered(p), false); t += 6 * DAY;
  applyGrade(p, 3, t, "type");
  assert.equal(itemState(p, t + 1000), "mastered");
});

test("old SM-2 progress gets a stability and difficulty", () => {
  const old = { reps: 3, ease: 2.2, ivl: 12, due: T0, lapses: 1, seen: T0 - 30 * DAY, ok: 5, bad: 1, pron: [] };
  const p = migrateProgress({ ...old });
  assert.equal(p.s, 12); assert.ok(p.d > 5 && p.d < 7); assert.equal(p.ok, 5);
});

test("articles are stripped for Italian and French answers", () => {
  assert.equal(coreWord("l'acqua"), "acqua");
  assert.equal(coreWord("lo zaino"), "zaino");
  assert.equal(coreWord("les yeux"), "yeux");
  assert.ok(answerOk("pain", { fr: "le pain" }, "fr"));
  assert.ok(answerOk("acqua", { it: "l'acqua" }, "it"));
});

test("a session can be built for every learning language and known language", () => {
  for (const target of ["en", "de", "es", "it", "fr", "ne"]) for (const known of ["en", "de", "ne"]) {
    if (known === target) continue;
    const tasks = buildSession({ items: ITEMS, words: WORDS, prog: {}, profile: { target, known, level: "b", minutes: 20, prio: {} },
      wotdId: "g1", dueIds: [], accuracy: null, readId: "rd1", rand: () => 0.4 });
    assert.ok(tasks.length >= 5, `${known}→${target}`);
  }
});
