# Copyright risk — read this before making a fork public

This is a plain-language assessment, not legal advice. Its purpose is to let you decide, with your
eyes open, what to publish.

**Summary:** keeping this repository **private** carries essentially no risk. Publishing the
`guides/` and `docs/` directories carries **low** risk. Publishing `tools/` **as it stands** carries
**materially higher** risk, because the content files hold the official sample-exam questions and
rationale as plain, searchable text.

---

## 1. What the ISTQB® actually permits

The CT-PT syllabus states its own condition of use on page 2:

> This document may be copied in its entirety, or extracts made, if the source is acknowledged.

The sample exam documents carry an equivalent condition. Both are permissive by the standards of
certification bodies — more permissive than the CT-AI family's wording, which restricts extracts to
**non-commercial** use. But "extracts … if the source is acknowledged" still has limits, and the
two that matter are:

1. **An extract is not a substitute.** Reproducing enough of a work that a reader no longer needs
   the original stops being an extract, whatever it is labelled.
2. **Acknowledgement must be real.** A generic footer is weaker than naming the exact document,
   version and date — which is what this repository does.

---

## 2. What this repository contains, by risk

| Content | Risk | Why |
| --- | --- | --- |
| The **chapter structure**, the seven-section format, the mnemonics, the comparison tables, the derived practice questions, the study plans, all Markdown documentation | **None** | Original work. Licensed by the maintainer under CC BY-NC-SA 4.0 |
| **Quoted syllabus wording** inside explanation and commentary | **Low** | Extracts with acknowledgement, in the context of explanation — the core of the permitted use |
| **Learning objective statements** quoted verbatim | **Low** | Short, factual, individually acknowledged, and published by ISTQB® in multiple places |
| **Exam structure data** — question counts, K-levels, timings | **Low** | Factual data from a public document, reproduced with attribution |
| The **40 official sample-exam questions with their options**, in `guides/` and `tools/` | **Moderate** | This is the largest verbatim block in the repository. It is permitted as an extract with acknowledgement, but it is also the part a rights holder is most likely to object to |
| The **official answer rationale**, quoted at length | **Moderate** | Same reasoning |
| The **original ISTQB® PDFs** | **High — so they are not here** | Blocked by `.gitignore`. Redistributing whole documents is not an extract |

---

## 3. Why `tools/` is riskier than `guides/`

Inside a `.docx`, text is at least compressed and is not indexed by search engines. Inside
`tools/pt_ch<N>_content2.js` it is **plain text that GitHub renders directly and search engines
index**. The same words, in a form that is far easier to scrape and republish.

**If you publish this repository, do one of the following:**

- **Option A — keep `tools/` private.** Publish `guides/`, `docs/`, `README.md`, `NOTICE.md` and
  `LICENSE` only. The guides remain fully usable; only the ability to rebuild them is withheld.
- **Option B — trim Part A of each `*_content2.js`.** Replace the verbatim official question stems
  and options with a reference — *"Official Sample Exam #22 — see the ISTQB® CT-PT Sample Exam"* —
  keeping your own commentary. The build still works; the guides lose Part A.
- **Option C — publish as is, and accept the moderate risk.** Defensible under the syllabus's own
  wording, and the takedown route in `NOTICE.md` §4 exists precisely for this.

---

## 4. Things that would move this from low risk to high

Do **not** do any of these in a public fork:

- **Commit the official PDFs.** They are excluded by `.gitignore` for a reason. Removing that
  exclusion is the single fastest way to attract a takedown.
- **Sell it, or bundle it with anything sold.** The syllabus's condition is silent on commerce, but
  the sample exam's is not, and the whole shape of this material is a study aid, not a product.
- **Advertise it as training.** The syllabus permits Accredited Training Providers to build courses
  from it *only after accreditation*. Describing a fork as a "course" or "training" invites exactly
  the objection the ISTQB® reserves.
- **Imply endorsement.** No ISTQB®, ASTQB or GTB logo, no "official", no "approved", no
  "accredited". The disclaimer at the top of `README.md` exists to make the opposite explicit.
- **Strip the attribution.** `NOTICE.md` is the thing that keeps the extracts within the permitted
  use. A fork without it is a fork without a defence.
- **Add more verbatim official content.** The current volume is defensible. Adding a second sample
  exam set, or the syllabus glossary in full, changes the character of the repository from
  commentary to reproduction.

---

## 5. Third-party material other than ISTQB®

[`docs/RESOURCES.md`](RESOURCES.md) links to books, tools and writing owned by others. Those links
are safe: **linking is not reproduction**. The rules are simply:

- **Link, never mirror.** Do not commit PDFs, transcripts, slides or extracts of any linked work.
- **Credit by name.** Every creator is named in `NOTICE.md` §2.
- **Use trademarks nominatively.** Tool and publisher names identify the products; they do not imply
  endorsement, and no tool listed is endorsed by the ISTQB® or by this repository.

---

## 6. If someone objects

`NOTICE.md` §4 sets out the route: open an issue, or contact the maintainer through GitHub, and the
material comes down promptly and in good faith. That commitment is genuine and should be honoured
by any fork.

The underlying judgement is simple: **this material exists to help people pass an exam whose
syllabus is deliberately published for that purpose. Nothing in it is worth a dispute.** If a rights
holder asks, remove it.

---

## 7. Recommended default

If you are unsure, this is the safe configuration:

```
Public:   README.md · NOTICE.md · LICENSE · docs/ · guides/
Private:  tools/
Never:    the official ISTQB® PDFs (already blocked by .gitignore)
```

That publishes everything a reader needs, keeps the searchable verbatim text out of the index, and
leaves you able to rebuild the guides from a private clone.
