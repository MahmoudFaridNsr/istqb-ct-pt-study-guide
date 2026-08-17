# Exam strategy — CT-PT

Everything in this file comes from the ISTQB® *Exam Structure Tables* (v1.16), the *Exam Structures
and Rules* (v1.2), the CT-PT syllabus (2018) and the official CT-PT Sample Exam. Nothing here is
guesswork about the paper.

---

## 1. The numbers

| | |
| --- | --- |
| Questions | **40** |
| Points | **40** — one point per question |
| Pass mark | **65% = 26 points** |
| Time | **90 minutes** |
| Time with the non-native-language allowance | **113 minutes** (+25%) |
| Entry requirement | **Foundation Level Core certificate** |

### K-level distribution

| K-level | Questions | Suggested time each | Total |
| --- | --- | --- | --- |
| K1 — Remember | 2 | 1 min | 2 min |
| K2 — Understand | 25 | 2 min | 50 min |
| K3 — Apply | 4 | 3 min | 12 min |
| K4 — Analyze | 9 | 4 min | 36 min |
| **Total** | **40** | | **100 min** |

> **Note the discrepancy.** The per-K-level timings sum to **100 minutes**, but the exam is
> **90 minutes**, and a footer line in the same table says *"TOTAL 60 minutes for 40 questions"*.
> Three different numbers appear in one official table. **Plan against 90 minutes** (113 with the
> language allowance) — that is the figure in the authoritative summary row.

### Chapter distribution

| Chapter | Questions | Points | K1 | K2 | K3 | K4 | Teaching | Points per teaching hour |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 — Basic Concepts | 6 | 6 | 1 | 5 | 0 | 0 | 60 min | **6.0** |
| 2 — Performance Measurement Fundamentals | 4 | 4 | 1 | 3 | 0 | 0 | 55 min | **4.4** |
| 3 — Performance Testing in the SDLC | 7 | 7 | 0 | 5 | 0 | 2 | 195 min | 2.2 |
| 4 — Performance Testing Tasks | **20** | **20** | 0 | 10 | 4 | 6 | 475 min | 2.5 |
| 5 — Tools | 3 | 3 | 0 | 2 | 0 | 1 | 90 min | 2.0 |
| **Total** | **40** | **40** | **2** | **25** | **4** | **9** | **875 min** | |

---

## 2. The arithmetic that should shape your study

**You cannot pass without Chapter 4.** A perfect score on Chapters 1, 2, 3 and 5 is **20 marks**.
The pass mark is **26**. You need **at least 6 marks from Chapter 4** even in the best case, and
realistically you should be targeting 14–17 of its 20.

**Three sensible target profiles:**

| Profile | Ch1 | Ch2 | Ch3 | Ch4 | Ch5 | Total |
| --- | --- | --- | --- | --- | --- | --- |
| Comfortable pass | 5 | 4 | 5 | 14 | 3 | **31** |
| Bare pass | 5 | 3 | 4 | 12 | 2 | **26** |
| Ch4-weak (fails) | 6 | 4 | 7 | 6 | 3 | **26** — only just, with everything else perfect |

**Cheapest marks first.** Chapters 1 and 2 give **10 marks for 115 teaching minutes**. Chapter 5
gives **3 marks for 90 minutes**, and two of those three are pure list recall. That is **13 of the
26 you need** from material you can cover in a few evenings.

**Most expensive marks.** Chapter 3 costs **195 minutes for 7 marks**. Learn its two decisive
tables (the architecture risk grid and the activity map) thoroughly, read the lifecycle sections
once carefully, and move on.

---

## 3. Time budget in the room

At **90 minutes for 40 questions** you have **2 minutes 15 seconds per question** on average. But
the questions are not equal:

| Type | Count | Suggested pace | Running total |
| --- | --- | --- | --- |
| K1 and simple K2 (definitions, protocol groups, tool types) | ~20 | 60–75 seconds | ~22 min |
| Harder K2 (activity mapping, failure modes, communication) | ~7 | 2 minutes | ~36 min |
| K3 (script scenarios) | 4 | 2.5 minutes | ~46 min |
| K4 (scenario analysis, calculations) | 9 | 4 minutes | ~82 min |
| **Review** | | | **~8 min spare** |

**With the 25% language allowance (113 minutes) you gain 23 minutes** — roughly a minute per
question. Use it on the K4 items, not on re-reading the easy ones.

**Practical rules:**

- **Answer every question.** There is no negative marking.
- **Do the cheap questions first.** Chapters 1, 2 and 5 are 13 questions and should take under 20
  minutes. Banking them early removes time pressure from the K4 items.
- **Read the health-records scenario once.** It appears in **eight questions** (#16, #17, #18–#21,
  #26–#28, #31, #37). Extract the two facts that matter — **millions of records** and **three
  seconds, particularly for patients with critical allergies and preconditions** — and stop
  re-reading it.
- **Flag and move on.** If a K4 calculation is not resolving in 90 seconds, mark it, finish the
  paper, and come back with the remaining time.

---

## 4. Question formats used by the official sample exam

| Format | Where it appears | How to handle it |
| --- | --- | --- |
| **Straight definition** ("Which is the best description of X testing?") | Ch1 ×2, Ch4 ×2 (protocols), Ch5 ×2 | Answer from the table; do not reason around it |
| **Identical option set, asked twice** | Ch1 #2/#3, Ch4 #20/#21, Ch4 #22/#23 | Do not assume the second answer is a different letter |
| **Activity or level mapping** ("When should X occur?") | Ch1 #4, Ch3 #11/#12 | Place the named task on the process or level ladder |
| **Cause → symptom** ("What result will you see?") | Ch1 #6 | Ask *when does it hurt* — always, under load, over time, or in error handling |
| **Multiple selection from a numbered list** | Ch3 #13/#14 | Work by **exclusion**, not inclusion |
| **Scenario + "what is missing / still needed"** | Ch4 #26, Ch5 #40 | Tick off what the stem has settled; the unmentioned item is the answer |
| **Scenario + calculation** | Ch4 #27, #28 | Compute the daily total first, then test each option against it |
| **Scenario + audience** | Ch4 #20/#21 | Money and milestones → business; steps and schedules → technical |
| **Scenario + reporting judgement** | Ch4 #37 | Report honestly against the stated objective; recommend tuning; never invent a threshold |

---

## 5. Elimination rules that work across the paper

1. **Strike the option that inverts a syllabus qualifier.** *Comparable to* not *matching*;
   *representative of* production, not production itself; *statistically identical within a
   specified tolerance*, not bit-identical.
2. **Strike the option that is incomplete.** Production testing without mitigation plans; a risk
   list without how the tests mitigate the risks.
3. **Strike the option whose content the stem has already confirmed.** Especially in the tool
   selection question.
4. **Strike the option that is a real concept in the wrong place.** Most distractors are genuine
   syllabus content, moved one level, one activity or one category away.
5. **Strike anything demanding 100% compliance**, or accepting a percentage the requirements never
   stated.
6. **When two options survive, choose the one that repeats syllabus wording.**

---

## 6. The calculation you should be able to do cold

The official Chapter 4 calculation, in five lines:

```
Total people        = 1000 + 1000 + 500          = 2,500 doctors
Per person per day  = 10 accesses × 6 updates    = 60 transactions
Daily total         = 2,500 × 60                 = 150,000 transactions

Per person per hour = 10 accesses ÷ 10-hour shift = 1 access → 6 transactions

Headcount by hour   7 h at   500 → 7 × 500 × 6   =  21,000
                   11 h at 1,000 → 11 × 1000 × 6 =  66,000
                    3 h at 1,500 → 3 × 1500 × 6  =  27,000
                    3 h at 2,000 → 3 × 2000 × 6  =  36,000
                                          check  = 150,000 ✔

Peak concurrency    = the largest headcount       = 2,000  (not 12,000)
```

Two things to internalise: **the option figures are band totals, not hourly rates**, and
**concurrency counts sessions, not the transactions inside them**.

---

## 7. Exam-day checklist

- [ ] Bring photo ID and your **Foundation Level Core** certificate details if required by your
      exam provider.
- [ ] Confirm whether you qualify for the **25% non-native-language allowance** — it is 23 extra
      minutes and must usually be requested when booking, not on the day.
- [ ] Re-read Section 7 of each guide the night before; do not learn anything new.
- [ ] In the first two minutes, note on your scratch paper: **26 to pass**, **Ch4 = 20 marks**,
      **load / stress / scalability / spike**, **connectivity = mobile + embedded**,
      **throughput = users ÷ (processing + think)**.
- [ ] Answer Chapters 1, 2 and 5 questions first if the paper lets you navigate freely.
- [ ] Leave nothing blank.
