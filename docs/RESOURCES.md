# Resources — CT-PT

Everything here is **external** to this repository. Nothing is hosted, mirrored or transcribed; all
works belong to their creators and publishers, credited in [`NOTICE.md`](../NOTICE.md).

The guides themselves are built **only** from the official ISTQB® documents. This file is for the
background that makes the syllabus make sense — and for the official documents you must download
yourself.

---

## 1. The official documents — download these first

All of them are free. **They are not committed to this repository.**

| Document | Where to get it |
| --- | --- |
| **CT-PT Syllabus, Version 2018** | ISTQB® syllabi page — <https://www.istqb.org/certifications/performance-testing> · also published by the **ASTQB** (<https://astqb.org>) and the **GTB** (<https://www.german-testing-board.info>), who produced it |
| **CT-PT Sample Exam — Questions** | Same pages, under sample exams |
| **CT-PT Sample Exam — Answers** | Same pages. **The most valuable single document after the syllabus** — the rationale shows how the exam board reasons |
| **ISTQB® Exam Structure Tables** | <https://www.istqb.org> — the source of every question-count and K-level figure in this repository |
| **ISTQB® Exam Structures and Rules** | <https://www.istqb.org> — pass marks, timing, and the 25% non-native-language allowance |
| **ISTQB® Glossary of Terms used in Software Testing** | <https://glossary.istqb.org> — the syllabus's own reference for definitions |
| **ISTQB® Foundation Level (Core) Syllabus** | <https://www.istqb.org> — the formal entry requirement, and the source of the test process CT-PT assumes |

> If a link has moved, search the ISTQB® site for "Performance Testing" rather than relying on a
> deep link. Member boards also republish these documents in translation.

---

## 2. The four books the syllabus itself cites

These are the syllabus's own references, listed in its Section 6. Only the first two are
performance-specific.

| Work | Why the syllabus cites it | Maps to |
| --- | --- | --- |
| **Ian Molyneaux, *The Art of Application Performance Testing*** (O'Reilly, 2009) | Cited for **the principles and practical aspects of performance testing** | **Chapter 1**, especially §1.1 |
| **Microsoft Corporation, *Performance Testing Guidance for Web Applications*** (Microsoft, 2007) | Cited alongside Molyneaux for the same purpose. Freely readable online | **Chapter 1**, **Chapter 4** |
| **Graham Bath and Judy McKay, *The Software Test Engineer's Handbook*** (Rocky Nook, 2014) | Cited for **further examples of load profiles** | **PTFL-4.2.4** |
| **Anderson and Krathwohl (eds.), *A Taxonomy for Learning, Teaching and Assessing*** (Allyn & Bacon, 2001) | The source of the **K-level** taxonomy | The K1–K4 scheme in §0.4 |

**If you read only one:** Molyneaux. It is short, it is written by a practitioner, and its framing of
*why* performance testing is different from functional testing is the framing the syllabus adopts.

---

## 3. Standards referenced

| Standard | What it gives you | Maps to |
| --- | --- | --- |
| **ISO/IEC 25010** (part of the **ISO/IEC 25000 SQuaRE** family) | The product quality model that classifies **performance efficiency** as a non-functional characteristic with **time behavior, resource utilization and capacity** | **PTFL-1.1.1** |
| **ISO/IEC 7498-1** | The **OSI** basic reference model — the seven layers, of which **5 to 7** matter for performance testing | **PTFL-4.2.1** |

You do not need to buy either. Summaries of the ISO 25010 quality model are widely available, and
the OSI layer names are enough.

---

## 4. Background reading, mapped to chapters

None of this is examinable. All of it makes the syllabus easier to hold in your head.

### Chapter 1 — Basic Concepts

- **Molyneaux**, chapters on why applications fail under load, for the **failure modes** of §1.5.
- Any solid write-up of **load versus stress versus soak testing** — but check every definition
  against the syllabus, because the industry uses these words more loosely than ISTQB® does. In
  particular the industry's *soak test* is the syllabus's **endurance testing**.

### Chapter 2 — Performance Measurement Fundamentals

- **Brendan Gregg**'s writing on systems performance and the **USE method** (utilisation,
  saturation, errors) — <https://www.brendangregg.com>. It is far deeper than CT-PT requires, but
  it makes the **technical environment** metric list feel like a system rather than a list.
- Anything on **why averages hide problems and percentiles do not**. §2.2 and §4.4 both depend on
  the intuition.

### Chapter 3 — Performance Testing in the Software Lifecycle

- The **ISTQB® Foundation Level (Core) Syllabus** chapter on the test process — **PTFL-3.1.1** is
  that process, and it is worth 2 marks.
- The **ISTQB® Foundation Level Agile Tester Syllabus**, cited by CT-PT for the iterative and
  incremental treatment in §3.4.

### Chapter 4 — Performance Testing Tasks

- **Alexander Podelko** — a syllabus co-author, and the source of the **workload modelling**
  material. His writing and conference talks on **throughput versus concurrency**, **open versus
  closed systems** and **why user counts are a poor measure of load** are the clearest expansion of
  §4.2.5 available, and the **60x example** in the syllabus is his argument in miniature.
- **Bath and McKay**, for further **load profile** examples.
- The documentation of any one load tool, read as far as the **correlation** and
  **parameterization** sections. This is the fastest way to make §4.2.7 concrete.

### Chapter 5 — Tools

- The **Computer Measurement Group (CMG)** — <https://www.cmg.org> — acknowledged by the syllabus
  for its contribution.
- Tool documentation for the three tool *categories*, not for any one product. See below.

---

## 5. Tools you can practise with

**The syllabus names no tool as required, and neither this repository nor the ISTQB® endorses any of
these.** They are listed only because an hour of hands-on work makes the K3 objectives obvious.

| Tool | Licence model in the syllabus's terms | Useful for |
| --- | --- | --- |
| **Apache JMeter** (Apache Software Foundation) | **Open source** | Recording at the protocol level; seeing **correlation** fail and then fixing it; **think time** and its effect on throughput |
| **k6** (Grafana Labs) | **Open source**, with a commercial cloud offering | Scripted (programmed) load generation; the **initialization / main / clean-up** structure is explicit |
| **Gatling** (Gatling Corp) | **Open source**, with a commercial offering | Scenario composition — several scripts combined into one **load profile** |
| **LoadRunner** (Micro Focus / OpenText) | **Traditional seat/site**, and cloud variants | The tool family the syllabus's vocabulary (**load generator, load management console, points of presence, IP spoofing**) is drawn from |

**A one-evening exercise that is worth 4 marks.** Record a login-then-search script against any
local web application. Run it once. Then:

1. Run it again without parameterizing the session identifier — watch it fail after login. That is
   **correlation** (**PTFL-4.2.7**, and official question #31).
2. Run the same search term twice — watch the second run return far faster. That is **caching**
   (official question #32).
3. Add a think time, then remove it — watch throughput change. That is
   **users ÷ (processing + think)** (**PTFL-4.2.5**).
4. Run two virtual users against the same record with an update — watch them queue. That is
   **locking** (**PTFL-4.2.7**).

---

## 6. Practice questions

- **The official CT-PT Sample Exam** is the only source whose questions are guaranteed to reflect
  the real paper's style and difficulty. **Take it cold before you study**, and again at the end.
- **Section 4 of each guide in this repository** reproduces all 40 official questions with their
  official rationale, and adds 153 further questions derived from the syllabus text.
- Be sceptical of third-party CT-PT question banks. Many were written against the industry's loose
  vocabulary rather than the syllabus's, and several circulate with wrong answers for the
  **capacity versus scalability** and **spike versus stress** distinctions.

---

## 7. Where the guides in this repository come from

Every sentence in the five chapter guides is traceable to one of:

- the **CT-PT syllabus (2018)**,
- the **CT-PT Sample Exam questions and answers**,
- the **ISTQB® Exam Structure Tables (v1.16)**, or
- the **ISTQB® Exam Structures and Rules (v1.2)**.

**No external knowledge was used in the guide content itself.** Where a guide says something the
syllabus does not, it says so explicitly — for example, the three documented inconsistencies in the
official exam structure table, noted in the root [`README.md`](../README.md) and in the Chapter 4
guide.
