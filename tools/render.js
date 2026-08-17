// Shared renderer: turns a block list into docx-js elements, styled like the
// ISTQB Agile chapter study-guide PDFs.
const d = require("docx");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow,
  TableCell, WidthType, ShadingType, BorderStyle, PageBreak, Header, Footer, PageNumber,
  TableOfContents, LevelFormat, convertMillimetersToTwip,
} = d;

const NAVY = "1F3864", BLUE = "2E5C9A", LIGHT = "EAF0F8", RULE = "B9C6DA", GREY = "5A5A5A";
const GREEN = "1E6B3A", GREENBG = "E8F3EC", AMBER = "8A5A00", AMBERBG = "FDF3E0";
const ZEBRA = "F4F7FC";
const FONT = "Calibri";
const CW = 9638; // content width in DXA for A4 with 2cm margins

// ---------- inline markup: **bold**  _italic_ ----------
function runs(text, base = {}) {
  const out = [];
  let bold = !!base.bold, ital = !!base.italics, buf = "";
  const flush = () => {
    if (buf) {
      out.push(new TextRun({ ...base, text: buf, bold: bold || undefined, italics: ital || undefined }));
      buf = "";
    }
  };
  const s = String(text);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*" && s[i + 1] === "*") { flush(); bold = !bold; i++; continue; }
    if (s[i] === "_") { flush(); ital = !ital; continue; }
    buf += s[i];
  }
  flush();
  return out.length ? out : [new TextRun({ ...base, text: "" })];
}

const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};
const gridBorders = {
  top: { style: BorderStyle.SINGLE, size: 3, color: RULE },
  bottom: { style: BorderStyle.SINGLE, size: 3, color: RULE },
  left: { style: BorderStyle.SINGLE, size: 3, color: RULE },
  right: { style: BorderStyle.SINGLE, size: 3, color: RULE },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 3, color: RULE },
  insideVertical: { style: BorderStyle.SINGLE, size: 3, color: RULE },
};
function boxBorders(color) {
  return {
    top: { style: BorderStyle.SINGLE, size: 6, color },
    bottom: { style: BorderStyle.SINGLE, size: 6, color },
    left: { style: BorderStyle.SINGLE, size: 6, color },
    right: { style: BorderStyle.SINGLE, size: 6, color },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 3, color },
    insideVertical: { style: BorderStyle.NONE, size: 0, color },
  };
}

// ---------- element builders ----------
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    shading: { type: ShadingType.CLEAR, fill: NAVY, color: "auto" },
    spacing: { before: 240, after: 200 },
    children: [new TextRun({ text, bold: true, size: 32, color: "FFFFFF", font: FONT })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 260, after: 110 },
    children: runs(text, { bold: true, size: 25, color: NAVY, font: FONT }),
  });
}
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 80 },
    children: runs(text, { bold: true, size: 21, color: BLUE, font: FONT }),
  });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after === undefined ? 110 : opts.after, line: 264 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    indent: opts.indent,
    children: runs(text, { size: opts.size || 19, font: FONT, color: opts.color, italics: opts.italics }),
  });
}
function lead(text) {
  return new Paragraph({
    spacing: { after: 160, line: 264 },
    alignment: AlignmentType.JUSTIFIED,
    children: runs(text, { size: 19, font: FONT, color: GREY, italics: true }),
  });
}
function ul(items) {
  return items.map((t) => new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60, line: 264 },
    children: runs(t, { size: 19, font: FONT }),
  }));
}
function ol(items) {
  return items.map((t) => new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 60, line: 264 },
    children: runs(t, { size: 19, font: FONT }),
  }));
}
function cell(text, o = {}) {
  return new TableCell({
    width: { size: o.w, type: WidthType.DXA },
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: "auto" } : undefined,
    margins: { top: 70, bottom: 70, left: 90, right: 90 },
    children: (Array.isArray(text) ? text : [text]).map((t) => new Paragraph({
      spacing: { after: 0, line: 250 },
      children: runs(String(t), { size: o.fs || 17, font: FONT, bold: o.bold, color: o.color }),
    })),
  });
}
function table({ head, rows, widths, fs }) {
  const total = widths.reduce((a, b) => a + b, 0);
  const cols = widths.map((w) => Math.round((w / total) * CW));
  const trs = [];
  if (head) {
    trs.push(new TableRow({
      tableHeader: true,
      children: head.map((t, i) => cell(t, { w: cols[i], fill: NAVY, bold: true, color: "FFFFFF", fs: fs })),
    }));
  }
  rows.forEach((r, ri) => {
    trs.push(new TableRow({
      children: r.map((t, i) => cell(t, { w: cols[i], fill: ri % 2 === 1 ? ZEBRA : undefined, fs: fs })),
    }));
  });
  return new Table({ columnWidths: cols, width: { size: CW, type: WidthType.DXA }, borders: gridBorders, rows: trs });
}
function box({ title, body, kind }) {
  let bg = LIGHT, fg = NAVY;
  if (kind === "warn") { bg = AMBERBG; fg = AMBER; }
  if (kind === "ok") { bg = GREENBG; fg = GREEN; }
  const kids = [];
  if (title) kids.push(new Paragraph({ spacing: { after: 60 }, children: runs(title, { bold: true, size: 19, color: fg, font: FONT }) }));
  (Array.isArray(body) ? body : [body]).forEach((b) =>
    kids.push(new Paragraph({ spacing: { after: 40, line: 258 }, alignment: AlignmentType.JUSTIFIED, children: runs(b, { size: 18, font: FONT }) })));
  return new Table({
    columnWidths: [CW], width: { size: CW, type: WidthType.DXA }, borders: boxBorders(fg),
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: CW, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: bg, color: "auto" },
        margins: { top: 120, bottom: 120, left: 160, right: 160 },
        children: kids,
      })],
    })],
  });
}
function question(q) {
  const out = [];
  out.push(new Paragraph({
    keepNext: true, spacing: { before: 200, after: 60 },
    children: runs(`Q${q.n}. ${q.tag}`, { bold: true, size: 19, color: NAVY, font: FONT }),
  }));
  if (q.scenario) out.push(new Paragraph({
    keepNext: true, spacing: { after: 70, line: 264 }, alignment: AlignmentType.JUSTIFIED,
    children: runs(q.scenario, { size: 18, font: FONT, italics: true }),
  }));
  const stemParts = (Array.isArray(q.stem) ? q.stem : [q.stem])
    .flatMap((s) => String(s).split("\n"))
    .map((s) => s.trim())
    .filter(Boolean);
  stemParts.forEach((s) => out.push(new Paragraph({
    keepNext: true, spacing: { after: 60, line: 264 },
    children: runs(s, { size: 19, font: FONT }),
  })));
  const letters = "abcdefghij";
  q.opts.forEach((o, i) => {
    const L = letters[i];
    const ok = q.correct.includes(L);
    out.push(new Paragraph({
      keepNext: true, spacing: { after: 40, line: 258 }, indent: { left: 300, hanging: 160 },
      children: runs(`${L}) ${o}${ok ? "   ✔" : ""}`, { size: 18, font: FONT, bold: ok, color: ok ? GREEN : undefined }),
    }));
  });
  out.push(new Table({
    columnWidths: [CW], width: { size: CW, type: WidthType.DXA }, borders: boxBorders(GREEN),
    rows: [
      new TableRow({
        children: [new TableCell({
          width: { size: CW, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: GREENBG, color: "auto" },
          margins: { top: 90, bottom: 60, left: 140, right: 140 },
          children: [new Paragraph({ spacing: { after: 0 }, children: runs(`Correct answer: ${q.correct.join(", ")}   |   ${q.meta}`, { bold: true, size: 18, color: GREEN, font: FONT }) })],
        })],
      }),
      new TableRow({
        children: [new TableCell({
          width: { size: CW, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: GREENBG, color: "auto" },
          margins: { top: 60, bottom: 90, left: 140, right: 140 },
          children: [new Paragraph({ spacing: { after: 0, line: 258 }, alignment: AlignmentType.JUSTIFIED, children: runs(`**Why:** ${q.why}`, { size: 18, font: FONT }) })],
        })],
      }),
    ],
  }));
  out.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  return out;
}
function flashcards(cards) {
  const rows = [];
  cards.forEach(([front, back], i) => {
    rows.push(new TableRow({
      children: [
        cell("FRONT", { w: 900, fill: NAVY, bold: true, color: "FFFFFF", fs: 16 }),
        cell(`${i + 1}. ${front}`, { w: CW - 900, fill: "F5F8FC", bold: true, fs: 18 }),
      ],
    }));
    rows.push(new TableRow({
      children: [
        cell("BACK", { w: 900, fill: LIGHT, bold: true, fs: 16 }),
        cell(back, { w: CW - 900, fs: 17 }),
      ],
    }));
  });
  return new Table({ columnWidths: [900, CW - 900], width: { size: CW, type: WidthType.DXA }, borders: gridBorders, rows });
}

function render(blocks) {
  const out = [];
  blocks.forEach((b) => {
    if (b.h1) out.push(h1(b.h1));
    else if (b.h2) out.push(h2(b.h2));
    else if (b.h3) out.push(h3(b.h3));
    else if (b.p) out.push(p(b.p));
    else if (b.lead) out.push(lead(b.lead));
    else if (b.ul) out.push(...ul(b.ul));
    else if (b.ol) out.push(...ol(b.ol));
    else if (b.table) { out.push(b.table.title ? h3(b.table.title) : null); out.push(table(b.table)); out.push(new Paragraph({ spacing: { after: 120 }, children: [] })); }
    else if (b.box) { out.push(box(b.box)); out.push(new Paragraph({ spacing: { after: 120 }, children: [] })); }
    else if (b.q) out.push(...question(b.q));
    else if (b.flash) { out.push(flashcards(b.flash)); }
    else if (b.pagebreak) out.push(new Paragraph({ children: [new PageBreak()] }));
    else if (b.spacer) out.push(new Paragraph({ spacing: { after: b.spacer }, children: [] }));
  });
  return out.filter(Boolean);
}

function buildDoc({ headerLeft, headerRight, footer, cover, blocks }) {
  const doc = new Document({
    styles: {
      default: {
        document: { run: { font: FONT, size: 19, color: "1A1A1A" }, paragraph: { spacing: { line: 264 } } },
        heading1: { run: { font: FONT, size: 32, bold: true, color: "FFFFFF" } },
        heading2: { run: { font: FONT, size: 25, bold: true, color: NAVY } },
        heading3: { run: { font: FONT, size: 21, bold: true, color: BLUE } },
      },
    },
    numbering: {
      config: [
        { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 340, hanging: 200 } } } }] },
        { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 380, hanging: 240 } } } }] },
      ],
    },
    sections: [
      { // cover — no header/footer
        properties: { page: { margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
        children: cover,
      },
      {
        properties: { page: { margin: { top: 1247, bottom: 1134, left: 1134, right: 1134 } } },
        headers: {
          default: new Header({
            children: [new Paragraph({
              tabStops: [{ type: "right", position: CW }],
              border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
              children: [new TextRun({ text: headerLeft, size: 15, color: GREY, font: FONT }),
                         new TextRun({ text: `\t${headerRight}`, size: 15, color: GREY, font: FONT })],
            })],
          }),
        },
        footers: {
          default: new Footer({
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
              children: [new TextRun({ text: `${footer}  ·  Page `, size: 15, color: GREY, font: FONT }),
                         new TextRun({ children: [PageNumber.CURRENT], size: 15, color: GREY, font: FONT })],
            })],
          }),
        },
        children: blocks,
      },
    ],
  });
  return doc;
}

module.exports = { d, render, buildDoc, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TableOfContents, PageBreak, runs, table, box, NAVY, BLUE, GREY, LIGHT, CW, FONT, p, h1, h2 };
