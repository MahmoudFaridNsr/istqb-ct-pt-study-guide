# ISTQB® CT-PT — Complete Study Guide

Chapter-by-chapter study guides for the **ISTQB® Certified Tester Foundation Level Specialist —
Performance Testing (CT-PT), Syllabus 2018**, plus the prerequisites, background material and study
plans that make the syllabus click instead of just being memorised.

Five guides, **105 practice questions** and **249 flashcards**. Every learning objective explained,
every official sample-exam question kept and mapped to the objective it tests — with a deliberately
tight practice set (all 40 official questions plus the strongest syllabus-derived items per
objective) so you cover the whole syllabus in less time.

> **Unofficial.** Not affiliated with, endorsed by, accredited by or sponsored by the ISTQB®.
> ISTQB® is a registered trademark of the International Software Testing Qualifications Board.
> See [`NOTICE.md`](NOTICE.md) for full copyright and attribution, and
> [`docs/COPYRIGHT-RISK.md`](docs/COPYRIGHT-RISK.md) before publishing a fork.

---

## The exam in one table

| | |
| --- | --- |
| **Questions** | 40 |
| **Points** | 40 (one point per question) |
| **Time** | 90 minutes (113 with the 25% non-native-language allowance) |
| **Pass mark** | 65% = **26 points** |
| **K-levels** | K1 = 2 · K2 = 25 · K3 = 4 · K4 = 9 |
| **Syllabus** | Version 2018, released 9 December 2018 |
| **Entry requirement** | Foundation Level Core certificate |
| **Produced by** | ASTQB and GTB |

---

## The guides

Each guide is a self-contained `.docx` with a cover page, live table of contents and seven sections:
**1** syllabus explanation per objective · **2** key concepts · **3** tables and summaries ·
**4** question bank with answers · **5** exam tricks · **6** flashcards · **7** revision notes.

| # | Chapter | Read | Edit | Exam Qs | Points | Teaching | Pts/hr | Practice Qs | Cards |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Basic Concepts | [PDF](guides/pdf/01-basic-concepts.pdf) | [docx](guides/01-basic-concepts.docx) | 6 | 6 | 60 min | **6.0** | 17 | 45 |
| 2 | Performance Measurement Fundamentals | [PDF](guides/pdf/02-performance-measurement-fundamentals.pdf) | [docx](guides/02-performance-measurement-fundamentals.docx) | 4 | 4 | 55 min | **4.4** | 13 | 35 |
| 3 | Performance Testing in the Software Lifecycle | [PDF](guides/pdf/03-performance-testing-in-the-software-lifecycle.pdf) | [docx](guides/03-performance-testing-in-the-software-lifecycle.docx) | 7 | 7 | 195 min | 2.2 | 20 | 45 |
| 4 | Performance Testing Tasks | [PDF](guides/pdf/04-performance-testing-tasks.pdf) | [docx](guides/04-performance-testing-tasks.docx) | **20** | **20** | 475 min | 2.5 | 45 | 94 |
| 5 | Tools | [PDF](guides/pdf/05-tools.pdf) | [docx](guides/05-tools.docx) | 3 | 3 | 90 min | 2.0 | 10 | 30 |
| | **Total** | | | **40** | **40** | 875 min | | **105** | **249** |

The `.docx` files keep the live table of contents (right-click → *Update Field* in Word). The PDFs
are for reading on GitHub or on a phone. **The PDFs in `guides/pdf/` are regenerated from the
`.docx` with LibreOffice** (see [`tools/README.md`](tools/README.md)); after a content change they
are stale until that step is run.

**Where the points are.** Chapter 4 alone is **20 of the 40 points — exactly half the paper**. A
perfect score on every other chapter is only **20 marks**, and the pass mark is **26**: you cannot
pass CT-PT without Chapter 4. At the other end, Chapters 1 and 2 together deliver **10 marks for
115 minutes** of teaching material — the cheapest marks in the syllabus. Chapter 3 is the worst
ratio (**7 points for 195 minutes**) and is where most people over-invest.

**Where the K3 and K4 questions are.** Nine questions are **K4** and four are **K3**. All four K3
questions and six of the nine K4 questions are in **Chapter 4**; the other three K4 questions are
**PTFL-3.3.1**, **PTFL-3.4.1** and **PTFL-5.2.1**. Every one of them is a **scenario** question,
and eight of them share a single scenario — a regional patient health-records system.

**The two-mark objectives.** Seven objectives carry two questions each and are mostly K2 recall:
**PTFL-1.2 · 4.1.3 · 4.2.1 · 4.2.2 · 4.2.6 · 4.2.7 · 4.2.8 · 4.3.1 · 5.1.1** (and **PTFL-3.1**).
Learning those first is the fastest route to the pass mark.

---

## Start here

| If you… | Read |
| --- | --- |
| have never run a load test and the words *think time*, *ramp-up*, *correlation* are fuzzy | [`docs/PREREQUISITES.md`](docs/PREREQUISITES.md) |
| want the background videos, tools, books and articles, mapped chapter by chapter | [`docs/RESOURCES.md`](docs/RESOURCES.md) |
| want a day-by-day plan with dates | [`docs/STUDY-PLAN.md`](docs/STUDY-PLAN.md) |
| want the exam mechanics, scoring maths and question formats | [`docs/EXAM-STRATEGY.md`](docs/EXAM-STRATEGY.md) |
| are forking or publishing this | [`NOTICE.md`](NOTICE.md) then [`docs/COPYRIGHT-RISK.md`](docs/COPYRIGHT-RISK.md) |

**You still need the official documents.** They are free. Download them before you start —
[`docs/RESOURCES.md`](docs/RESOURCES.md) has the links. They are deliberately **not** committed to
this repository.

---

## How to use a guide

1. **Section 1 once, slowly.** It walks the learning objectives in syllabus order, quotes the
   wording that gets examined, and flags the misunderstanding attached to each one.
2. **Sections 2 and 3 to compress.** Then rebuild the chapter's key table on blank paper. If you
   can reproduce the eight performance testing types (Ch1), the architecture risk grid (Ch3) and
   the protocol groups (Ch4) from memory, you have already secured a large share of the paper.
3. **Section 4 with the answer box covered.** Read the rationale even when you were right — the
   reasoning is the transferable part, not the answer letter.
4. **Section 5 before the exam.** Distractor patterns, keyword→answer mappings, elimination rules.
5. **Section 6 daily.** Spaced repetition; three clean passes per chapter.
6. **Section 7 the night before.** One-page summary, last-minute sheet, exam-day checklist.

---

## The ten things that decide the most marks

A cross-chapter distillation. If you learn nothing else, learn these.

1. **Load = up to the expected maximum. Stress = at or beyond. Scalability = future. Spike = a
   sudden burst, then back to a steady state.** The official exam asks this quartet **twice**,
   with an identical option set both times.
2. **Connectivity risk means mobile and embedded. Memory-leak risk means virtualized,
   client-server, mobile and embedded** — never cloud (it *scales to compensate*) and never
   mainframe (*higher level languages that provide their own memory management*).
3. **Risk identification belongs to test planning. Ordering test cases into procedures belongs to
   test implementation.** Both official Chapter 3 activity questions turn on this.
4. **Transaction response time + think time = elapsed time**, and **system throughput =
   [virtual users] ÷ ([processing time] + [think time])** — the only formula in the syllabus.
5. **Concurrency counts simultaneous sessions, not the transactions inside them.** In the official
   scenario the answer is **2,000**, not 12,000.
6. **A load-profile option's figures are band totals, not hourly rates.** Check any option by
   summing its bands against the daily total (**2500 × 10 × 6 = 150,000**).
7. **Correlation carries context identifiers between requests; parameterization varies the data.**
   *Incorrect correlation or lack of correlation is the main reason recorded scripts fail to play
   back.* **Caching flatters results; locking punishes them.**
8. **Performance is a non-linear function of the environment.** The further from production, the
   less reliable the projections and the higher the risk — and **the load generators themselves
   must be monitored**.
9. **Ramp-up exists to reach a steady state before measuring. Spike tests exercise transient
   states**, where *monitoring averages may be very misleading*.
10. **The 90th percentile is the usual reporting goal, and 100% compliance is not recommended** —
    *the resources required may be too large and the net effect to the users will often be minor*.

---

## Repository layout

```
istqb-ct-pt-study-guide/
├── README.md                   ← you are here
├── NOTICE.md                   ← third-party copyright, attribution, takedown contact
├── LICENSE                     ← CC BY-NC-SA 4.0, scoped to original material only
├── .gitignore                  ← blocks official ISTQB® PDFs from ever being committed
├── guides/
│   ├── *.docx                  ← the five chapter study guides (editable source)
│   └── pdf/                    ← same five, rendered — readable in-browser on GitHub
├── docs/
│   ├── PREREQUISITES.md        ← what to know before Chapter 4 stops hurting
│   ├── RESOURCES.md            ← videos, tools, books, articles — mapped to chapters
│   ├── STUDY-PLAN.md           ← 4-week and 10-day schedules
│   ├── EXAM-STRATEGY.md        ← scoring maths, question formats, time budget
│   └── COPYRIGHT-RISK.md       ← read before making a fork public
└── tools/                      ← the generators; the guides are built, not hand-written
    ├── render.js               ← shared renderer, owns all styling
    ├── pt_ch<N>_content1|2|3.js ← chapter content as typed blocks
    ├── build_pt_ch<N>.js       ← per-chapter entry point
    └── verify.sh               ← page / question / flashcard / markup checks
```

**The guides are generated.** To fix a typo, edit the relevant `tools/pt_ch<N>_content*.js` and
rebuild — see [`tools/README.md`](tools/README.md) for the build and verification commands. Do not
hand-edit the `.docx` files; the next rebuild will overwrite them.

---

## A note on three inconsistencies in the official documents

These are real, they are in ISTQB®'s own files, and knowing about them prevents confusion:

1. **PTFL-4.1.3 is K4 in the syllabus and in the Sample Exam Answers, but K3 in the Exam Structure
   Tables (v1.16).** The Chapter 4 arithmetic in the structure table (K2 = 10, K3 = 4, K4 = 6)
   only balances if its two questions are counted as K3.
2. **The K-level timings in the CT-PT structure table sum to 100 minutes**, while the exam is
   **90 minutes**.
3. **A footer line in the same table reads "TOTAL 60 minutes for 40 questions"**, contradicting
   both of the above.

The authoritative figures are the summary row of the Exam Structure Tables:
**40 questions · 40 points · 26 to pass · 90 minutes · 113 minutes with the language allowance.**

---

## Sources

Everything in the guides is traceable to the official ISTQB® documents — no external knowledge was
used in the guide content itself:

- ISTQB® *Certified Tester Foundation Level Specialist Syllabus — Performance Testing*, Version
  2018, 9 December 2018 (ASTQB and GTB)
- ISTQB® *CT-PT Sample Exam — Questions*, Version 2018, 9 December 2018
- ISTQB® *CT-PT Sample Exam — Answers*, Version 2018, 9 December 2018
- ISTQB® *Exam Structure Tables*, v1.16
- ISTQB® *Exam Structures and Rules*, v1.2

Copyright © International Software Testing Qualifications Board and the named authors. Used under
the ISTQB® conditions of use for non-commercial extracts with acknowledgement — full notice in
[`NOTICE.md`](NOTICE.md).

The external learning resources in [`docs/RESOURCES.md`](docs/RESOURCES.md) belong to their
creators, who are credited individually there and in [`NOTICE.md`](NOTICE.md).

---

## Contributing

Corrections are welcome — especially anywhere a guide diverges from the official syllabus wording.
Open an issue with the chapter, the section and the syllabus reference. Please do **not** submit
pull requests that add more verbatim official exam content; see
[`docs/COPYRIGHT-RISK.md`](docs/COPYRIGHT-RISK.md) for why.
