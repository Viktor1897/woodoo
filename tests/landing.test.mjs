import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { bookingUrl, locations } from "../src/content/home.ts";

// Exercise the HTML a visitor receives before React hydrates the page.
const html = readFileSync(new URL("../out/index.html", import.meta.url), "utf8");
const sections = html.match(/<section\b[^>]*>[\s\S]*?<\/section>/g) ?? [];

test("the opening has one booking link and leads directly into the haircut gallery", () => {
  const links = [...sections[0].matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)];
  assert.deepEqual(links.map((match) => match[1]), [bookingUrl]);
  assert.match(sections[1], /id="galeria"/);
});

test("the initial salon list offers a booking link for every location", () => {
  const finder = sections.find((section) => section.includes('id="lokalizacje"'));
  const list = finder?.match(/<ul\b([^>]*)>([\s\S]*?)<\/ul>/);
  assert.ok(list, "Expected the salon list in the static export");
  assert.doesNotMatch(list[1], /\bhidden\b/);
  for (const location of locations) {
    assert.ok(list[2].includes(`href="${location.bookingUrl}"`), location.name);
  }
});
