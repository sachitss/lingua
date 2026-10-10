// Regression tests for issues found in the independent code review of 0.2.0.
import test from "node:test";
import assert from "node:assert/strict";
import { coreWord, newProgress, applyGrade, nextInterval, buildSession, voiceGender, isMastered, DAY } from "../../www/js/core.js";
import { ITEMS, WORDS, BY } from "../../www/js/content.js";
import { S } from "../../www/js/i18n.js";

const T0 = Date.UTC(2026, 9, 10, 8);

test("number tips exist for Italian and French in every interface language", () => {
  for (const ui of ["en", "de", "es", "it", "fr", "ne"]) for (const l of ["it", "fr"]) assert.ok(S[ui]["numTip_" + l], `${ui}.numTip_${l}`);
});

test("articles are removed per language only", () => {
  assert.equal(coreWord("I am here as a tourist.", "en"), "I am here as a tourist");
  assert.equal(coreWord("Un billete para Pokhara, por favor.", "es"), "Un billete para Pokhara, por favor");
  assert.equal(coreWord("S'il vous plaît", "fr"), "S'il vous plaît");
  assert.equal(coreWord("se souvenir", "fr"), "souvenir");
  assert.equal(coreWord("l'acqua", "it"), "acqua");
  assert.equal(coreWord("die Küche", "de"), "Küche");
  assert.equal(coreWord(BY.g3.fr, "fr"), BY.g3.fr.replace(/[!.?]/g, "").trim());
});

test("a word answered correctly once is not pulled into today's session before it is due", () => {
  const prog = { g1: applyGrade(newProgress(), 3, T0 - DAY, "mcq") };
  const tasks = buildSession({ items: ITEMS, words: WORDS, prog, profile: { target: "it", known: "en", level: "b", minutes: 20, prio: {} },
    now: T0, wotdId: "g2", dueIds: [], accuracy: null, readId: "rd1", rand: () => 0.4 });
  assert.ok(!tasks.some((t) => t.id === "g1"), "g1 is not due yet");
});

test("the button preview matches the interval actually stored", () => {
  const p = applyGrade(newProgress(), 1, T0, "type");
  const t = T0 + 5 * 60e3, preview = nextInterval(p, 2, t);
  applyGrade(p, 2, t, "type");
  assert.ok(Math.abs(preview - p.ivl) < 1e-9, `preview ${preview} vs stored ${p.ivl}`);
});

test("female voices named Paulina or Lucia are not classed as male", () => {
  assert.equal(voiceGender("Microsoft Paulina Online (Natural) - Spanish (Mexico)"), "f");
  assert.notEqual(voiceGender("Lucia"), "m");
  assert.equal(voiceGender("Paul"), "m");
});

test("multiple-choice reverse cards are not counted as active recall", () => {
  const p = newProgress(); let t = T0;
  for (const ty of ["reverse", "reverse", "reverse", "reverse"]) { applyGrade(p, 3, t, ty); t += 8 * DAY; }
  assert.equal(isMastered(p), false);
});
