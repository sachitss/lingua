// Content integrity for the six Lingua languages.
import test from "node:test";
import assert from "node:assert/strict";
import { ITEMS, WORDS, READ } from "../../www/js/content.js";
import { DIALOGS, GRAMMAR, grammarQuiz } from "../../www/js/practice.js";
import { blankable } from "../../www/js/core.js";

const LANGS = ["en", "de", "es", "it", "fr", "ne"];

test("item ids are unique", () => {
  assert.equal(new Set(ITEMS.map((i) => i.id)).size, ITEMS.length);
});

test("every item exists in all six languages", () => {
  for (const it of ITEMS) for (const l of LANGS) assert.ok(it[l] && String(it[l]).trim(), `${it.id} missing ${l}`);
});

test("every word with an example has it in all six languages", () => {
  for (const it of ITEMS.filter((i) => i.ex)) for (const l of LANGS) assert.ok(it.ex[l], `${it.id} example missing ${l}`);
});

test("most Italian and French words can be blanked in their example (context learning)", () => {
  for (const l of ["it", "fr"]) {
    const withEx = WORDS.filter((w) => w.ex && w.ex[l]);
    const share = withEx.filter((w) => blankable(w, l)).length / withEx.length;
    assert.ok(share >= 0.7, `${l}: only ${(share * 100).toFixed(0)} % blankable`);
  }
});

test("reading texts are aligned sentence by sentence in all six languages", () => {
  for (const r of READ) {
    const n = r.text.en.length;
    for (const l of LANGS) {
      assert.equal(r.text[l].length, n, `${r.id} ${l} sentence count`);
      assert.ok(r.title[l], `${r.id} title ${l}`);
      for (const q of r.q) { assert.ok(q.q[l], `${r.id} question ${l}`); for (const o of q.o) assert.ok(o[l], `${r.id} option ${l}`); }
    }
  }
});

test("dialogue lines exist in all six languages", () => {
  for (const d of DIALOGS) for (const line of d.lines) for (const l of LANGS) assert.ok(line[l], `${line.id} ${l}`);
});

test("grammar topics exist for every learning language and are explained in every interface language", () => {
  for (const l of LANGS) assert.ok(GRAMMAR.filter((g) => g.lang === l).length >= 2, `grammar for ${l}`);
  for (const g of GRAMMAR) for (const ui of LANGS) {
    assert.ok(g.title[ui], `${g.id} title ${ui}`);
    assert.ok(g.rule[ui], `${g.id} rule ${ui}`);
  }
});

test("every grammar topic generates practice questions", () => {
  for (const g of GRAMMAR.filter((x) => x.lang !== "ko")) {
    const qs = grammarQuiz(g, ITEMS, 8, () => 0.3);
    assert.ok(qs.length >= 3, `${g.id}: ${qs.length} questions`);
    for (const q of qs) { assert.ok(q.o.includes(q.a), `${g.id}: answer among options`); assert.ok(q.q.includes("___")); }
  }
});
