const fs = require("fs");
const R = require("./render");
const { d, render, buildDoc, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak, table, box, NAVY, GREY, CW, FONT } = R;
const { BorderStyle, ShadingType } = d;

const out = process.argv[2] || "ISTQB_PT_Chapter5_Complete_Study_Guide.docx";

const s1 = require("./pt_ch5_content1")();
const s2 = require("./pt_ch5_content2")();
const s3 = require("./pt_ch5_content3")();

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
  title("CHAPTER 5"),
  title("Tools", 46),
  new Paragraph({ spacing: { after: 160 }, children: [] }),
  sub("Complete Study Guide"),
  rule(),
  table({
    head: ["Chapter fact", "Value"],
    widths: [3.6, 10.4],
    rows: [
      ["**Syllabus sections covered**", "5.1 Tool Support · 5.2 Tool Suitability"],
      ["**Learning objectives**", "2 examinable (PTFL-5.1.1 – PTFL-5.2.1)"],
      ["**Recommended teaching time**", "90 minutes — 2.0 marks per teaching hour"],
      ["**Questions in the exam**", "**3 of 40 questions · 3 of 40 points.** K1 = 0 · **K2 = 2** · K3 = 0 · **K4 = 1**. Both objectives are guaranteed; **PTFL-5.1 gets two questions**"],
      ["**Exam format**", "40 questions · 40 points · **90 minutes** (113 with the 25% non-native-language allowance) · pass mark 65% = **26 points**"],
      ["**Keywords**", "load generator · load management · monitoring tool · performance testing tool"],
      ["**Official sample-exam questions**", "**#38 – #40** — the last three questions on the paper. #40 reuses the **health-records scenario**"],
    ],
  }),
  new Paragraph({ spacing: { after: 400 }, children: [] }),
  small("Built exclusively from the ISTQB® CT-PT 2018 syllabus, the official Sample Exam"),
  small("(questions and answers), and the ISTQB® exam structure tables."),
  new Paragraph({ spacing: { after: 120 }, children: [] }),
  small("Study this single file to master Chapter 5."),
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
    "**Section 1** explains both learning objectives in syllabus order — read it once, slowly. **Section 2** compresses the same material into recall-ready notes. **Section 3** holds the tables you should be able to reproduce from memory; **table 3.1 (the three tool types separated by verb)** and **table 3.4 (the four selection factors as a checklist)** carry all three marks between them. **Section 4** is the question bank — attempt every question with the green answer box covered, then read the rationale even when you were right. **Section 5** converts that into exam tactics. **Section 6** is for daily spaced repetition. **Section 7** is what you read on the morning of the exam.",
    "**What makes Chapter 5 unusual:** it is the **smallest chapter on the paper — three marks — but two of those three rest on two lists of three**. The **three tool types** (load generator · load management console · monitoring tool) and the **three licence models** (seat/site with full ownership · cloud-based pay-as-you-go · open source) answer both **PTFL-5.1** questions outright. In the final hours before the exam, this is the **best effort-to-mark ratio available anywhere in the syllabus**.",
    "**Two facts that decide the two K2 marks.** First, the three tool types are separated by a single verb each: the generator **simulates users and collects metrics**, the console **starts, stops, aggregates and reports**, and the monitor **supervises, records and analyzes** — the SUT, the load generators, and production after release. Second, **pay-as-you-go means paying only for the number of virtual users and instances that you actually use** — and **not all cloud-based tools are pay-as-you-go**.",
    "**The K4 mark is an elimination puzzle, not a judgement call.** Question #40 confirms **compatibility**, **understandability** and **monitoring** in the scenario text, leaving **scalability** as the only unaddressed factor — so the answer is **the ability of the tool to meet your requirements for concurrent virtual users**. Read the scenario as a four-item checklist and answer with the box the stem never ticks. Note also that **project schedule** and **record/playback capability** are not among the four factors at all.",  ],
}));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(...render(s1));
body.push(...render(s2));
body.push(...render(s3));

const doc = buildDoc({
  headerLeft: "ISTQB® Certified Tester Performance Testing (CT-PT, 2018)",
  headerRight: "Chapter 5 — Complete Study Guide",
  footer: "Built only from the CT-PT 2018 syllabus and official sample exam",
  cover,
  blocks: body,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("written:", out, buf.length, "bytes");
});
