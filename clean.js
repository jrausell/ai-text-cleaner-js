// Replace the typographic characters chat models add with plain keyboard ones.
// Returns the cleaned text and how many characters of each kind were changed.
const RULES = [
  ["Curly double quotes", /[\u201C\u201D\u201E\u201F]/g, '"'],
  ["Curly single quotes / apostrophes", /[\u2018\u2019\u201A\u201B]/g, "'"],
  ["Em dashes", /[ \t]*[\u2014\u2015][ \t]*/g, " - "],
  ["En dashes", /\u2013/g, "-"],
  ["Ellipsis characters", /\u2026/g, "..."],
  ["Non-breaking and odd-width spaces", /[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " "],
  ["Invisible characters", /[\u200B-\u200D\u2060\uFEFF\u00AD]/g, ""],
];

export function cleanText(text) {
  const counts = [];
  let out = text;
  for (const [label, re, replacement] of RULES) {
    let n = 0;
    out = out.replace(re, () => { n++; return replacement; });
    counts.push({ label, count: n });
  }
  return { text: out, counts };
}
