# tools/ — guide generators

The five study guides in `../guides/` are **generated**, not hand-written. This directory holds the
source. Fix a typo once here, rebuild, and every affected guide is corrected consistently.

> ⚠️ **These files contain official ISTQB® sample-exam questions and rationale as plain text.**
> Inside a `.docx` that content is at least compressed and not indexed; here it is searchable source
> that GitHub renders directly. **Do not publish this directory in a public repository** without
> first reading [`../docs/COPYRIGHT-RISK.md`](../docs/COPYRIGHT-RISK.md) and trimming Part A of each
> `*_content2.js`.

---

## Layout

| File | Role |
| --- | --- |
| `render.js` | Shared renderer. Turns a typed block list into `docx` document elements. Owns all styling |
| `pt_ch<N>_content1.js` | Chapter *N*, Sections 1–3 — syllabus explanation, key concepts, tables |
| `pt_ch<N>_content2.js` | Chapter *N*, Section 4 — the question bank |
| `pt_ch<N>_content3.js` | Chapter *N*, Sections 5–7 — exam tricks, flashcards, revision notes |
| `build_pt_ch<N>.js` | Chapter *N* entry point — cover page, TOC, header/footer, assembly |
| `verify.sh` | Renders a built guide to PDF and reports page, question and flashcard counts, blank pages and stray markup |

## Build

```bash
npm install docx
node build_pt_ch4.js "../guides/04-performance-testing-tasks.docx"
```

Rebuild everything:

```bash
npm install docx
for n in 1 2 3 4 5; do
  case $n in
    1) t="01-basic-concepts";;
    2) t="02-performance-measurement-fundamentals";;
    3) t="03-performance-testing-in-the-software-lifecycle";;
    4) t="04-performance-testing-tasks";;
    5) t="05-tools";;
  esac
  node "build_pt_ch${n}.js" "../guides/${t}.docx"
done
```

Regenerate the PDF renders (needs LibreOffice):

```bash
soffice --headless --convert-to pdf --outdir ../guides/pdf ../guides/*.docx
```

---

## Content model

Each `content*.js` exports a function returning an array of typed blocks. `render.js` maps each
block to document elements, so content files never touch formatting.

| Block | Renders as |
| --- | --- |
| `{ h1: "…" }` | Section heading, navy banner, TOC level 1 |
| `{ h2: "…" }` | Sub-heading, TOC level 2 |
| `{ h3: "…" }` | Minor heading, blue |
| `{ p: "…" }` | Body paragraph |
| `{ lead: "…" }` | Small italic grey note |
| `{ ul: [...] }` / `{ ol: [...] }` | Bulleted / numbered list |
| `{ table: { title, head, widths, rows } }` | Table. `widths` are centimetres, summing to ~14 |
| `{ box: { title, body, kind } }` | Callout. `kind`: default (blue), `warn` (amber), `ok` (green). `body` may be a string or an array of strings |
| `{ q: { n, tag, meta, stem, opts, correct, why, scenario } }` | Question with green answer box |
| `{ flash: [[front, back], …] }` | Two-column flashcard table |
| `{ pagebreak: true }` · `{ spacer: N }` | Page break · vertical space (twips) |

### Inline markup

`**bold**` and `_italic_`, parsed by a character-scanning toggle in `runs()`. Nesting works
(`**bold with _italics_ inside**`).

**Gotcha:** a single `*` renders literally. If you paste text using `*emphasis*`, convert it first —
and note the ordering, because a naive replace will corrupt `**bold**`:

```python
import re
s = src.replace('**', '\x00')                                   # protect bold
s = re.sub(r'\*([^*\n]{1,600}?)\*', lambda m: '_'+m.group(1)+'_', s)
s = s.replace('\x00', '**')                                     # restore bold
```

For a literal asterisk — a footnote marker, say — use `†` instead. Backslash escaping is not
supported.

### Question blocks

- `correct` is an array of option letters — `["b"]`, or `["b", "d"]` for multiple-response items
- `stem` may contain `\n`; each line becomes its own paragraph
- `scenario` renders as an italic preamble above the stem, and may contain `\n`
- `why` is the rationale printed inside the green box

Shared scenarios (the regional health-records project, the emergency-room doctors, the two
presentation option sets) are declared as module-level constants at the top of
`pt_ch3_content2.js` and `pt_ch4_content2.js` so the wording stays identical across questions.

---

## Verifying a build

```bash
cd ..
./tools/verify.sh guides/04-performance-testing-tasks.docx
```

It prints:

```
file       guides/pdf/04-performance-testing-tasks.pdf
pages      83
questions  70
flashcards 95
blank      []
stray mkup 0
```

**How to read it:**

- **questions** counts occurrences of *Correct answer* — it should match the question count in the
  root `README.md` table.
- **flashcards** counts occurrences of *FRONT*, which is **one more** than the number of cards,
  because the Section 6 lead paragraph contains the word. Subtract one.
- **blank** must be `[]`. A blank page usually means a table ended exactly at a page boundary and
  its trailing spacer spilled over; add a short closing box to the preceding section to shift it.
- **stray mkup** must be `0`. Anything else means a literal `*` or an unpaired `_` reached the PDF.

Current expected values:

| Guide | Pages | Questions | Flashcards (reported) |
| --- | --- | --- | --- |
| 01-basic-concepts | 42 | 34 | 46 |
| 02-performance-measurement-fundamentals | 38 | 30 | 36 |
| 03-performance-testing-in-the-software-lifecycle | 44 | 35 | 46 |
| 04-performance-testing-tasks | 83 | 70 | 95 |
| 05-tools | 33 | 24 | 31 |

---

## Attribution

`render.js`, the block model and all commentary, derived questions, tables and flashcards are
original work under CC BY-NC-SA 4.0 (see [`../LICENSE`](../LICENSE)). Quoted ISTQB® syllabus wording
and sample-exam content embedded in the `content*.js` files remains © International Software Testing
Qualifications Board — see [`../NOTICE.md`](../NOTICE.md).
