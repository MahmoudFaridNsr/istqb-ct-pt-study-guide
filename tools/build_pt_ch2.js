const fs = require("fs");
const R = require("./render");
const { d, render, buildDoc, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak, table, box, NAVY, GREY, CW, FONT } = R;
const { BorderStyle, ShadingType } = d;

const out = process.argv[2] || "ISTQB_PT_Chapter1_Complete_Study_Guide.docx";

const s1 = require("./pt_ch2_content1")();
const s2 = require("./pt_ch2_content2")();
const s3 = require("./pt_ch2_content3")();

// ---------------- cover ----------------
const title = (t, size = 56) => new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 100 },
  children: [new TextRun({ text: t, bold: true, size, color: NAVY, font: FONT })],
});
const sub = (t, size = 26) => new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 90 },
  children: [new TextRun({ text: t, size, color: "2E5C9A", font: FONT })],
});
const rule = () => new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 200, after: 260 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: NAVY, space: 1 } },
  children: [new TextRun({ text: "", size: 2 })],
});
const small = (t) => new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 80 },
  children: [new TextRun({ text: t, size: 17, color: GREY, font: FONT })],
});

const cover = [
  new Paragraph({ spacing: { after: 900 }, children: [] }),
  sub("ISTQB® Certified Tester"),
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 90 },
    children: [new TextRun({ text: "Foundation Level Specialist — ", size: 26, color: "2E5C9A", font: FONT }),
               new TextRun({ text: "Performance Testing", size: 26, bold: true, color: "2E5C9A", font: FONT }),
               new TextRun({ text: " (CT-PT, Syllabus 2018)", size: 26, color: "2E5C9A", font: FONT })],
  }),
  rule(),
  title("CHAPTER 2"),
  title("Performance Measurement", 46),
  title("Fundamentals", 46),
  new Paragraph({ spacing: { after: 160 }, children: [] }),
  sub("Complete Study Guide"),
  rule(),
  table({
    head: ["Chapter fact", "Value"],
    widths: [3.6, 10.4],
    rows: [
      ["**Syllabus sections covered**", "2.1 Typical Metrics Collected in Performance Testing · 2.2 Aggregating Results from Performance Testing · 2.3 Key Sources of Performance Metrics · 2.4 Typical Results of a Performance Test"],
      ["**Learning objectives**", "4 examinable (PTFL-2.1.1 – PTFL-2.4.1)"],
      ["**Recommended teaching time**", "55 minutes — the **shortest chapter in the syllabus**, at 4.4 marks per teaching hour"],
      ["**Questions in the exam**", "**4 of 40 questions · 4 of 40 points.** K1 = 1 · **K2 = 3** · K3 = 0 · K4 = 0. **One question per learning objective — every one guaranteed**"],
      ["**Exam format**", "40 questions · 40 points · **90 minutes** (113 with the 25% non-native-language allowance) · pass mark 65% = **26 points**"],
      ["**Keywords**", "measurement · metric"],
      ["**Official sample-exam questions**", "**#7 – #10**, in learning-objective order"],
    ],
  }),
  new Paragraph({ spacing: { after: 400 }, children: [] }),
  small("Built exclusively from the ISTQB® CT-PT 2018 syllabus, the official Sample Exam"),
  small("(questions and answers), and the ISTQB® exam structure tables."),
  new Paragraph({ spacing: { after: 120 }, children: [] }),
  small("Study this single file to master Chapter 2."),
];

// ---------------- body ----------------
const body = [];
body.push(new Paragraph({
  heading: d.HeadingLevel.HEADING_1,
  shading: { type: ShadingType.CLEAR, fill: NAVY, color: "auto" },
  spacing: { after: 200 },
  children: [new TextRun({ text: "Contents", bold: true, size: 32, color: "FFFFFF", font: FONT })],
}));
body.push(new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }));
body.push(new Paragraph({
  spacing: { before: 200 },
  children: [new TextRun({ text: "The page numbers above are filled in by Word: right-click the table of contents and choose \"Update Field\" → \"Update entire table\".", size: 17, italics: true, color: GREY, font: FONT })],
}));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(box({
  title: "How to use this guide",
  body: [
    "**Section 1** explains all four learning objectives in syllabus order — read it once, slowly. **Section 2** compresses the same material into recall-ready notes. **Section 3** holds the tables you should be able to reproduce from memory; **table 3.1 (metric classification)** and **table 3.2 (the three metric sources)** are the two that pay directly. **Section 4** is the question bank — attempt every question with the green answer box covered, then read the rationale even when you were right. **Section 5** converts that into exam tactics. **Section 6** is for daily spaced repetition. **Section 7** is what you read on the morning of the exam.",
    "**What makes Chapter 2 unusual:** it is the **shortest chapter in the syllabus — 55 teaching minutes — yet it carries 4 guaranteed marks**, one per learning objective, giving it the **second-best points-per-minute return** after Chapter 1. There is **no selectable group**, so every objective appears on every paper. The chapter is almost entirely **vocabulary and classification**: where a number comes from, which bucket it belongs to, and what it is for.",
    "**Two facts that decide half the chapter:** first, every metric belongs to exactly one of **three environments** — **technical**, **business** or **operational** — and **network latency** (the subject of the official question) sits under **resource utilization** in the **technical** group. Second, the three metric sources are separated by a single verb each: **performance test tools create the load**, **monitoring tools watch the system live and in production**, and **log analysis tools scan server logs and compile metrics**.",
    "**A warning about the K1 question.** PTFL-2.4.1 is labelled _typical results of a performance test_, but the official exam tested it by asking which failure a **spike test** would find. Revise the **eight types from Chapter 1** before you sit this chapter — §2.4 borrows their vocabulary wholesale.",
    "**Suggested schedule:** Day 1 — Section 1 in full, then Section 3 tables 3.1 and 3.2. Day 2 — Section 2, plus rebuilding the metric classification table from blank paper. Day 3 — Section 4 Part A (all four official questions) and Part B for PTFL-2.1. Day 4 — Section 4 Part B for the remaining objectives, plus Section 5. Day 5 onwards — Section 6 flashcards daily, Section 7 the night before.",
  ],
}));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(...render(s1));
body.push(...render(s2));
body.push(...render(s3));

const doc = buildDoc({
  headerLeft: "ISTQB® Certified Tester Performance Testing (CT-PT, 2018)",
  headerRight: "Chapter 2 — Complete Study Guide",
  footer: "Built only from the CT-PT 2018 syllabus and official sample exam",
  cover,
  blocks: body,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("written:", out, buf.length, "bytes");
});
