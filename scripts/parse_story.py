#!/usr/bin/env python3
"""Parse the Halloween markdown story into a JSON structure for the web app.

Text of each PAGE is kept verbatim (only markdown emphasis is converted to
HTML tags, characters are untouched). Choice blocks are attached to the page
that precedes them.
"""
import json
import re
import sys

MD_PATH = sys.argv[1] if len(sys.argv) > 1 else "story.md"
OUT_PATH = sys.argv[2] if len(sys.argv) > 2 else "story.json"

with open(MD_PATH, encoding="utf-8") as f:
    raw = f.read()

# Normalize line endings
raw = raw.replace("\r\n", "\n")

# Split into PAGE blocks. A page block starts at a line **PAGE N**
page_re = re.compile(r"^\*\*PAGE\s+(\d+)\s*\*\*\s*$", re.M)
matches = list(page_re.finditer(raw))

blocks = {}  # page_number -> list of text chunks (in order of appearance)
for i, m in enumerate(matches):
    num = int(m.group(1))
    end = matches[i + 1].start() if i + 1 < len(matches) else len(raw)
    body = raw[m.end():end]
    blocks.setdefault(num, []).append(body)

def md_to_html(text):
    """Convert minimal markdown (bold, italic) to HTML without altering characters."""
    # escape nothing: text is trusted story content; keep characters as-is
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text, flags=re.S)
    text = re.sub(r"(?<!\w)\*([^*\n]+?)\*(?!\w)", r"<em>\1</em>", text)
    return text

def clean_body(body):
    """Remove structural markers (--- separators, ### section headers, OU lines
    stay inside choice parsing), split into paragraphs."""
    lines = []
    for line in body.split("\n"):
        s = line.strip()
        if s == "---":
            continue
        if re.match(r"^#{1,6}\s", s):
            continue
        lines.append(line)
    text = "\n".join(lines).strip()
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    paras = [p for p in paras if not re.match(r"^\*\*\s*SI\s+CHOIX", p, re.I)]
    return [md_to_html(p).replace("\n", "<br>") for p in paras]

CHOICE_RE = re.compile(r"^\s*(?:#{1,6}\s*)?\*{0,2}\s*CHOIX\s+([A-Z0-9.]+)\s*:?\s*\*{0,2}\s*$", re.M | re.I)

def parse_choices(body):
    """Extract choice options from a body containing CHOIX markers separated by OU."""
    # Find positions of CHOIX markers
    markers = list(CHOICE_RE.finditer(body))
    if not markers:
        return []
    # Text before first marker belongs to the page itself
    choices = []
    for i, m in enumerate(markers):
        label = m.group(1).upper()
        end = markers[i + 1].start() if i + 1 < len(markers) else len(body)
        chunk = body[m.end():end]
        # cut at first structural line (--- separator or section header)
        cut = re.search(r"^\s*(---|#{1,6}\s)", chunk, re.M)
        if cut:
            chunk = chunk[:cut.start()]
        # remove trailing OU separator
        chunk = re.sub(r"\n\s*OU\s*\n?\s*$", "", chunk, flags=re.I).strip()
        paras = [p.strip() for p in re.split(r"\n\s*\n", chunk) if p.strip()]
        html = [md_to_html(p).replace("\n", "<br>") for p in paras]
        choices.append({"id": label, "text": html})
    return choices

# Pages that contain a choice block at their end (marker comes after the page text,
# inside the same block because next PAGE starts later)
CHOICE_PAGES = {12: {"A": 13, "B": 50},
                19: {"A.1": 20, "A.2": 34},
                23: {"A.1.1": 24, "A.1.2": 28},
                37: {"A.2.1": 38, "A.2.2": 44},
                55: {"B.1": 56, "B.2": 73},
                58: {"B.1.1": 59, "B.1.2": 65},
                76: {"B.2.1": 77, "B.2.2": 81}}

FIN_PAGES = {27, 33, 43, 49, 64, 72, 80, 86}

slides = []
for num in sorted(blocks):
    chunks = blocks[num]
    body = "\n".join(chunks)
    choices = []
    page_paras = []
    if num in CHOICE_PAGES:
        # split body at first CHOIX marker: before = page text, after = choices
        m = CHOICE_RE.search(body)
        page_part = body[:m.start()]
        choice_part = body[m.start():]
        page_paras = clean_body(page_part)
        choices = parse_choices(choice_part)
        # attach targets
        for c in choices:
            c["next"] = CHOICE_PAGES[num].get(c["id"])
            if c["next"] is None:
                raise SystemExit(f"No target for choice {c['id']} on page {num}")
    else:
        page_paras = clean_body(body)
    slides.append({
        "id": num,
        "text": page_paras,
        "choices": choices,
        "fin": num in FIN_PAGES,
        "image": f"assets/img/page-{num:02d}.jpg",
    })

# Linear next for non-choice pages
for i, s in enumerate(slides):
    if not s["choices"] and not s["fin"]:
        # find next slide id greater than current
        nxt = next((t["id"] for t in slides if t["id"] > s["id"]), None)
        s["next"] = nxt
    else:
        s["next"] = None

with open(OUT_PATH, "w", encoding="utf-8") as f:
    json.dump({"start": 1, "slides": slides}, f, ensure_ascii=False, indent=1)

print(f"OK: {len(slides)} slides -> {OUT_PATH}")
for s in slides:
    kind = "FIN" if s["fin"] else (f"choices {[c['id'] for c in s['choices']]}" if s["choices"] else f"next={s['next']}")
    print(f"  page {s['id']:2d}: {len(s['text'])} paras, {kind}")
