import test from "node:test";
import assert from "node:assert/strict";
import { S } from "../../www/js/i18n.js";

const UI = ["en", "de", "es", "it", "fr", "ne"];
test("every interface language has every string", () => {
  for (const l of UI) for (const k of Object.keys(S.en)) assert.ok(typeof S[l][k] === "string" && S[l][k].length, `${l}.${k}`);
});
test("placeholders are kept in every translation", () => {
  for (const l of UI) for (const [k, v] of Object.entries(S.en)) for (const ph of v.match(/\{\w+\}/g) || []) assert.ok(S[l][k].includes(ph), `${l}.${k} lacks ${ph}`);
});
test("no Bhasha branding remains in the interface", () => {
  for (const l of UI) for (const [k, v] of Object.entries(S[l])) assert.ok(!/Bhasha/.test(v), `${l}.${k}`);
});
test("all six languages have names in every interface language", () => {
  for (const l of UI) for (const x of UI) assert.ok(S[l]["lang_" + x], `${l}.lang_${x}`);
});
