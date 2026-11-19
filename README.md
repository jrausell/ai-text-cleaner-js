# AI Text Cleaner

A minimal, dependency-free AI text cleaner. Paste text from ChatGPT, Claude or Gemini
and it replaces the typographic characters those models add with plain keyboard
characters, showing how many of each kind it changed. Everything runs in the browser.

Live page: https://jrausell.github.io/ai-text-cleaner-js/

## What it replaces

| Found | Becomes |
|---|---|
| Curly double quotes (U+201C, U+201D, U+201E, U+201F) | `"` |
| Curly single quotes / apostrophes (U+2018, U+2019, U+201A, U+201B) | `'` |
| Em dash (U+2014, U+2015), with surrounding spaces | ` - ` |
| En dash (U+2013) | `-` |
| Ellipsis (U+2026) | `...` |
| Non-breaking and odd-width spaces (U+00A0, U+2000-U+200A, U+202F, U+205F, U+3000) | space |
| Zero-width space/joiners, word joiner, BOM, soft hyphen | removed |

## Files

- `index.html` - the page
- `clean.js` - `cleanText(text)` returns `{ text, counts }`

A fuller version with Markdown and emoji removal and per-character options is on
srchtool.com.

## License

MIT
