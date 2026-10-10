import test from "node:test";
import assert from "node:assert/strict";
import { numWords, numDigits, curriculumNumbers } from "../../www/js/numbers.js";

const CASES = {
  de: { 21: "einundzwanzig", 101: "hunderteins", 1000000: "eine Million" },
  en: { 21: "twenty-one", 347: "three hundred and forty-seven" },
  es: { 21: "veintiuno", 100: "cien", 101: "ciento uno", 1000: "mil" },
  it: { 1: "uno", 21: "ventuno", 23: "ventitré", 28: "ventotto", 103: "centotré", 108: "centotto", 188: "centottantotto",
    1000: "mille", 2000: "duemila", 21000: "ventunomila", 23000: "ventitremila", 1000000: "un milione",
    347521: "trecentoquarantasettemilacinquecentoventuno" },
  fr: { 21: "vingt et un", 70: "soixante-dix", 71: "soixante et onze", 80: "quatre-vingts", 81: "quatre-vingt-un",
    91: "quatre-vingt-onze", 200: "deux cents", 201: "deux cent un", 2000: "deux mille", 80000: "quatre-vingt mille",
    200000: "deux cent mille", 1000000: "un million" },
  ne: { 21: "एक्काइस", 100000: "एक लाख" },
};

for (const [lang, cases] of Object.entries(CASES)) {
  test(`numbers in ${lang}`, () => { for (const [n, w] of Object.entries(cases)) assert.equal(numWords(+n, lang), w, `${lang} ${n}`); });
}

test("every curriculum number has words in all six languages", () => {
  for (const lang of ["en", "de", "es", "it", "fr", "ne"]) for (const n of curriculumNumbers()) assert.ok(numWords(n, lang));
});

test("digit grouping follows each language", () => {
  assert.equal(numDigits(25000, "de"), "25.000");
  assert.equal(numDigits(25000, "it"), "25.000");
  assert.equal(numDigits(25000, "fr"), "25 000");
  assert.equal(numDigits(25000, "en"), "25,000");
  assert.equal(numDigits(1000000, "ne"), "10,00,000");
});
