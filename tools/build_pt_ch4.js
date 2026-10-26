const fs = require("fs");
const R = require("./render");
const { d, render, buildDoc, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak, table, box, NAVY, GREY, CW, FONT } = R;
const { BorderStyle, ShadingType } = d;

const out = process.argv[2] || "ISTQB_PT_Chapter4_Complete_Study_Guide.docx";

const s1 = require("./pt_ch4_content1")();
const s2 = require("./pt_ch4_content2")();
const s3 = require("./pt_ch4_content3")();

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
  title("CHAPTER 4"),
  title("Performance", 46),
  title("Testing Tasks", 46),
  new Paragraph({ spacing: { after: 160 }, children: [] }),
  sub("Complete Study Guide"),
  rule(),
  table({
    head: ["Chapter fact", "Value"],
    widths: [3.6, 10.4],
    rows: [
      ["**Syllabus sections covered**", "4.1 Planning (4.1.1–4.1.3) · 4.2 Analysis, Design and Implementation (4.2.1–4.2.8) · 4.3 Execution · 4.4 Analyzing Results and Reporting"],
      ["**Learning objectives**", "13 examinable (PTFL-4.1.1 – PTFL-4.4.1) — more than the other four chapters combined"],
      ["**Recommended teaching time**", "475 minutes — more than Chapters 1, 2, 3 and 5 together (400 minutes)"],
      ["**Questions in the exam**", "**20 of 40 questions · 20 of 40 points — exactly half the paper.** K1 = 0 · **K2 = 10** · **K3 = 4** · **K4 = 6**. Every objective is guaranteed; **seven objectives get two questions each**"],
      ["**Exam format**", "40 questions · 40 points · **90 minutes** (113 with the 25% non-native-language allowance) · pass mark 65% = **26 points**"],
      ["**Keywords**", "concurrency · load profile · load generation · operational profile · ramp-down · ramp-up · system of systems · system throughput · test plan · think time · virtual user"],
      ["**Official sample-exam questions**", "**#18 – #37**. Eight of them use the **regional health-records scenario** introduced in Chapter 3"],
    ],
  }),
  new Paragraph({ spacing: { after: 400 }, children: [] }),
  small("Built exclusively from the ISTQB® CT-PT 2018 syllabus, the official Sample Exam"),
  small("(questions and answers), and the ISTQB® exam structure tables."),
  new Paragraph({ spacing: { after: 120 }, children: [] }),
  small("Study this single file to master Chapter 4 — half the exam."),
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
    "**Section 1** explains all thirteen learning objectives in syllabus order — read it once, slowly, over more than one sitting. **Section 2** compresses the same material into recall-ready notes. **Section 3** holds the tables you should be able to reproduce from memory; **table 3.2 (protocol groups)**, **table 3.5 (who hears what)**, **table 3.7 (the K4 arithmetic)** and **table 3.8 (script hazards)** carry the most marks. **Section 4** is the question bank — attempt every question with the green answer box covered, then read the rationale even when you were right. **Section 5** converts that into exam tactics. **Section 6** is for daily spaced repetition. **Section 7** is what you read on the morning of the exam.",
    "**What makes Chapter 4 unusual: it is half the exam.** Twenty of the forty questions and twenty of the forty points live here, along with **all four K3 questions** and **six of the nine K4 questions**. The pass mark is **26 of 40** — so a perfect score on every other chapter still leaves you **six marks short**. Realistically, **Chapter 4 deserves about half your total study time**.",
    "**Where the marks actually are.** **Seven objectives are worth two marks each** — **4.1.3 · 4.2.1 · 4.2.2 · 4.2.6 · 4.2.7 · 4.2.8 · 4.3.1** — which is **14 of the 20 marks**, and most of that is **K2 recall**: protocol groups, think time, script structure, ramp-up, environment fidelity. The remaining six marks come one each from the analytical objectives **4.1.1 · 4.1.2 · 4.2.3 · 4.2.4 · 4.2.5 · 4.4.1**. **Learn the seven two-mark objectives first.**",
    "**Three marks come from a single worked scenario.** Objectives **4.2.3, 4.2.4 and 4.2.5** are all examined on the same emergency-room-doctors problem: what is **missing from the operational profile**, what is the **proper load profile**, and what is the **highest concurrency**. The arithmetic is plain multiplication — **2500 doctors × 10 accesses × 6 updates = 150,000 transactions a day** — but two things trip people up: the load-profile option figures are **band totals, not hourly rates**, and **concurrency counts sessions, not the transactions inside them** (**2,000**, not 12,000). Table 3.7 works it through line by line.",
    "**Two option sets are reused.** Sample Exam **#20 and #21** offer an **identical four options**, once for business stakeholders and once for technical ones; **#22 and #23** do the same for protocols. Do not assume the second answer must be a different letter.",  ],
}));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(...render(s1));
body.push(...render(s2));
body.push(...render(s3));

const doc = buildDoc({
  headerLeft: "ISTQB® Certified Tester Performance Testing (CT-PT, 2018)",
  headerRight: "Chapter 4 — Complete Study Guide",
  footer: "Built only from the CT-PT 2018 syllabus and official sample exam",
  cover,
  blocks: body,
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("written:", out, buf.length, "bytes");
});
