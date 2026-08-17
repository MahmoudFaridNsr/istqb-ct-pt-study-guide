#!/usr/bin/env bash
# Verify a built guide: renders to PDF and reports page count, question count,
# flashcard count, blank pages and stray inline markup.
set -e
f="$1"
soffice --headless --convert-to pdf --outdir guides/pdf "$f" >/dev/null 2>&1
pdf="guides/pdf/$(basename "${f%.docx}").pdf"
python3 - "$pdf" <<'PY'
import pdfplumber, re, sys
p = pdfplumber.open(sys.argv[1])
pages = [(pg.extract_text() or "").strip() for pg in p.pages]
t = "\n".join(pages)
print("file      ", sys.argv[1])
print("pages     ", len(pages))
print("questions ", t.count("Correct answer"))
print("flashcards", t.count("FRONT"))
print("blank     ", [i+1 for i, x in enumerate(pages) if len(x) < 250])
stray = [l for l in t.split("\n") if '*' in l or re.search(r'(?<![A-Za-z0-9])_|_(?![A-Za-z0-9])', l)]
print("stray mkup", len(stray))
for l in stray[:10]: print("   >", l[:130])
PY
