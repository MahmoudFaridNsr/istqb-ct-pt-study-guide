const fs = require("fs");
const R = require("./render");
const { d, render, buildDoc, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak, table, box, NAVY, GREY, CW, FONT } = R;
const { BorderStyle, ShadingType } = d;

const out = process.argv[2] || "ISTQB_PT_Chapter3_Complete_Study_Guide.docx";

const s1 = require("./pt_ch3_content1")();
const s2 = require("./pt_ch3_content2")();
const s3 = require("./pt_ch3_content3")();

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
  title("CHAPTER 3"),
  title("Performance Testing in", 44),
  title("the Software Lifecycle", 44),
  new Paragraph({ spacing: { after: 160 }, children: [] }),
  sub("Complete Study Guide"),
  rule(),
  table({
    head: ["Chapter fact", "Value"],
    widths: [3.6, 10.4],
    rows: [
      ["**Syllabus sections covered**", "3.1 Principal Performance Testing Activities · 3.2 Categories of Performance Risks for Different Architectures · 3.3 Performance Risks Across the Software Development Lifecycle · 3.4 Performance Testing Activities"],
      ["**Learning objectives**", "4 examinable (PTFL-3.1.1 – PTFL-3.4.1) — including the **first two K4 objectives** on the paper"],
      ["**Recommended teaching time**", "195 minutes — 2.2 marks per teaching hour, the **lowest ratio in the syllabus**"],
      ["**Questions in the exam**", "**7 of 40 questions · 7 of 40 points.** K1 = 0 · **K2 = 5** · K3 = 0 · **K4 = 2**. Every objective is guaranteed; **PTFL-3.2 gets three questions** and **PTFL-3.1 gets two**"],
      ["**Exam format**", "40 questions · 40 points · **90 minutes** (113 with the 25% non-native-language allowance) · pass mark 65% = **26 points**"],
      ["**Keywords**", "metric · risk · software development lifecycle · test log"],
      ["**Official sample-exam questions**", "**#11 – #17**. Questions #16 and #17 introduce the **regional health-records scenario** that recurs throughout Chapter 4"],
    ],
  }),
  new Paragraph({ spacing: { after: 400 }, children: [] }),
  small("Built exclusively from the ISTQB® CT-PT 2018 syllabus, the official Sample Exam"),
  small("(questions and answers), and the ISTQB® exam structure tables."),
  new Paragraph({ spacing: { after: 120 }, children: [] }),
  small("Study this single file to master Chapter 3."),
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
    "**Section 1** explains all four learning objectives in syllabus order — read it once, slowly. **Section 2** compresses the same material into recall-ready notes. **Section 3** holds the tables you should be able to reproduce from memory; **table 3.1 (the architecture risk grid)** and **table 3.2 (which activity owns this task)** carry five of the seven marks between them. **Section 4** is the question bank — attempt every question with the green answer box covered, then read the rationale even when you were right. **Section 5** converts that into exam tactics. **Section 6** is for daily spaced repetition. **Section 7** is what you read on the morning of the exam.",
    "**What makes Chapter 3 unusual:** it is where the paper **stops being recall and starts being analysis**. The first two **K4** questions on the exam live here, and both are **scenario** items built on the regional health-records project that also supplies eight of Chapter 4's questions. The chapter is also the **worst points-per-hour investment in the syllabus** — **7 marks for 195 teaching minutes** — so study it thoroughly but do not let it crowd out Chapter 4.",
    "**Three facts that decide five of the seven marks:** first, **PTFL-3.2 is worth three marks** and two of its questions are **multiple-selection** items answered from one table — **connectivity risk means mobile and embedded**, and **memory-leak risk means virtualized, client-server, mobile and embedded**. Second, **PTFL-3.1 is worth two marks**, and both official questions name a **task** and ask which **activity** owns it — **risk identification belongs to test planning**, **ordering test cases into procedures belongs to test implementation**. Third, the third PTFL-3.2 mark was spent not on architectures at all but on **languages**: **C and C++ require you to monitor memory use; Python does not**.",
    "**The two K4 answer patterns.** For **PTFL-3.3.1**, a timing question is won by the option that spans the **whole lifecycle** and says **repeatedly** — because risks **change in both impact and likelihood**. For **PTFL-3.4.1**, an approach question is won by the option that pairs an **early static review** with a **later dynamic test** — a single technique is almost always incomplete.",
    "**Suggested schedule:** Day 1 — Section 1 for PTFL-3.1 and 3.2, then Section 3 tables 3.1 and 3.2. Day 2 — Section 1 for the two K4 objectives, plus Section 2. Day 3 — rebuild the architecture risk grid from blank paper, then Section 4 Part A (all seven official questions). Day 4 — Section 4 Part B, plus Section 5. Day 5 onwards — Section 6 flashcards daily, Section 7 the night before.",
  ],
}));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(...render(s1));
body.push(...render(s2));
body.push(...render(s3));

const doc = buildDoc({
  headerLeft: "ISTQB® Certified Tester Performance Testing (CT-PT, 2018)",
  headerRight: "Chapter 3 — Complete Study Guide",
  footer: "Built only from the CT-PT 2018 syllabus and official sample exam",
  cover,
  blocks: body,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("written:", out, buf.length, "bytes");
});
