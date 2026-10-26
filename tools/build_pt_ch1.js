const fs = require("fs");
const R = require("./render");
const { d, render, buildDoc, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak, table, box, NAVY, GREY, CW, FONT } = R;
const { BorderStyle, ShadingType } = d;

const out = process.argv[2] || "ISTQB_PT_Chapter1_Complete_Study_Guide.docx";

const s1 = require("./pt_ch1_content1")();
const s2 = require("./pt_ch1_content2")();
const s3 = require("./pt_ch1_content3")();

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
  title("CHAPTER 1"),
  title("Basic Concepts", 46),
  new Paragraph({ spacing: { after: 160 }, children: [] }),
  sub("Complete Study Guide"),
  rule(),
  table({
    head: ["Chapter fact", "Value"],
    widths: [3.6, 10.4],
    rows: [
      ["**Syllabus sections covered**", "1.1 Principles of Performance Testing · 1.2 Types of Performance Testing · 1.3 Testing Types in Performance Testing · 1.4 The Concept of Load Generation · 1.5 Common Performance Efficiency Failure Modes and Their Causes"],
      ["**Learning objectives**", "5 examinable (PTFL-1.1.1 – PTFL-1.5.1)"],
      ["**Recommended teaching time**", "60 minutes — **6 marks per teaching hour, the best return in the syllabus**"],
      ["**Questions in the exam**", "**6 of 40 questions · 6 of 40 points.** K1 = 1 · **K2 = 5** · K3 = 0 · K4 = 0. Every objective is guaranteed; **PTFL-1.2 gets two questions**"],
      ["**Exam format**", "40 questions · 40 points · **90 minutes** (113 with the 25% non-native-language allowance) · pass mark 65% = **26 points**"],
      ["**Keywords**", "capacity testing · concurrency testing · efficiency · endurance testing · load generation · load testing · performance testing · scalability testing · spike testing · stress testing"],
      ["**Official sample-exam questions**", "**#1 – #6**, in learning-objective order"],
    ],
  }),
  new Paragraph({ spacing: { after: 400 }, children: [] }),
  small("Built exclusively from the ISTQB® CT-PT 2018 syllabus, the official Sample Exam"),
  small("(questions and answers), and the ISTQB® exam structure tables."),
  new Paragraph({ spacing: { after: 120 }, children: [] }),
  small("Study this single file to master Chapter 1."),
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
    "**Section 1** explains all five learning objectives in syllabus order — read it once, slowly. **Section 2** compresses the same material into recall-ready notes. **Section 3** holds the tables you should be able to reproduce from memory; **table 3.1 (the eight types)** and **table 3.3 (static versus dynamic)** are the two that pay directly. **Section 4** is the question bank — attempt every question with the green answer box covered, then read the rationale even when you were right. **Section 5** converts that into exam tactics. **Section 6** is for daily spaced repetition. **Section 7** is what you read on the morning of the exam.",
    "**What makes Chapter 1 unusual:** it is the **cheapest chapter on the paper**. Six marks for **60 minutes** of recommended teaching gives **6 marks per teaching hour** — Chapter 4, by contrast, gives **2.5**. Everything here is **K1 and K2**: definition, recall and recognition. There is **no analysis and no calculation**, and **no selectable group**, so all five objectives appear on every paper.",
    "**Two facts that decide a third of the chapter:** first, the official exam asks for the **best description** of a performance testing type **twice**, using an **identical set of four options** both times — **load, stress, scalability, spike**. Second, the K1 question maps a **dynamic activity to a test level**, and every distractor is a genuine activity placed one level away. Two tables, three marks.",  ],
}));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(...render(s1));
body.push(...render(s2));
body.push(...render(s3));

const doc = buildDoc({
  headerLeft: "ISTQB® Certified Tester Performance Testing (CT-PT, 2018)",
  headerRight: "Chapter 1 — Complete Study Guide",
  footer: "Built only from the CT-PT 2018 syllabus and official sample exam",
  cover,
  blocks: body,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("written:", out, buf.length, "bytes");
});
