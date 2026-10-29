#!/usr/bin/env node
// Generate a PDF of all story slides (one page per slide, with its illustration).
// Usage: node scripts/generate-pdf.mjs [output.pdf]
// Requires the npm devDependencies of this package (see package.json).

import { createRequire } from "node:module";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const STORY = require("../story.js");

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(process.argv[2] ?? join(ROOT, "amazing-halloween-slides.pdf"));

const BG = rgb(0.055, 0.03, 0.045);
const ORANGE = rgb(1.0, 0.45, 0.09);
const TEXT = rgb(0.92, 0.88, 0.83);
const MUTED = rgb(0.69, 0.64, 0.58);
const CHOICE = rgb(1.0, 0.72, 0.45);

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const M = 42;
const CW = PAGE_W - 2 * M;

function orderNodes() {
  const order = [];
  const seen = new Set();
  const dfs = (id) => {
    if (seen.has(id)) return;
    seen.add(id);
    order.push(id);
    for (const c of STORY[id].choices ?? []) dfs(c.next);
  };
  dfs("start");
  return order;
}

// StandardFonts use WinAnsi (CP1252): map the few glyphs used by the story that
// are outside CP1252, and fail loudly if a future edit adds an unsupported one.
const GLYPH_MAP = { "▶": "»", "↺": "«" };
const WINANSI_EXTRA = new Set(
  "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ".split("")
);
function sanitize(text) {
  let out = "";
  for (const ch of text) {
    const code = ch.codePointAt(0);
    const ok =
      code === 0x0a || code === 0x09 ||
      (code >= 0x20 && code !== 0x7f) ||
      (code >= 0xa0 && code <= 0xff) ||
      WINANSI_EXTRA.has(ch) ||
      ch in GLYPH_MAP;
    if (!ok) throw new Error(`Unsupported glyph in story text: U+${code.toString(16).toUpperCase()} (${ch})`);
    out += GLYPH_MAP[ch] ?? ch;
  }
  return out;
}

function wrap(text, font, size, width) {
  const lines = [];
  for (const para of sanitize(text).split("\n")) {
    if (para.trim() === "") {
      lines.push("");
      continue;
    }
    let line = "";
    for (const word of para.split(/\s+/)) {
      const candidate = line ? line + " " + word : word;
      if (font.widthOfTextAtSize(candidate, size) <= width) {
        line = candidate;
      } else {
        if (line) lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);
  }
  return lines;
}

async function drawWrapped(page, text, x, yTop, width, font, size, leading, color) {
  let y = yTop;
  for (const line of wrap(text, font, size, width)) {
    y -= leading;
    if (line) {
      page.drawText(line, { x, y, size, font, color });
    }
  }
  return y;
}

async function drawImageFit(page, jpgBytes, cx, yTop, maxW, maxH) {
  const img = await page.doc.embedJpg(jpgBytes);
  const s = Math.min(maxW / img.width, maxH / img.height);
  const w = img.width * s;
  const h = img.height * s;
  const x = cx - w / 2;
  page.drawImage(img, { x, y: yTop - h, width: w, height: h });
  page.drawRectangle({ x, y: yTop - h, width: w, height: h, borderColor: ORANGE, borderWidth: 1.2 });
  return yTop - h;
}

function contentHeight(node, width, font, size, leading) {
  let h = 0;
  const paras = node.text.split("\n");
  for (const para of paras) {
    const lines = para.trim() === "" ? [""] : wrap(para, font, size, width);
    h += lines.length * leading;
  }
  h += (paras.length - 1) * leading * 0.4;
  const choices = node.choices ?? [];
  if (choices.length) {
    h += leading * 1.6;
    for (const c of choices) h += wrap(c.label, font, size, width - 14).length * leading;
  }
  if (node.ending) h += leading * 2.2;
  return h;
}

async function main() {
  const order = orderNodes();
  if (order.length !== Object.keys(STORY).length) {
    throw new Error("story tree mismatch: some nodes are unreachable");
  }

  const doc = await PDFDocument.create();
  doc.setTitle("Amazing Halloween — Toutes les slides (PDF)");
  doc.setAuthor("adrien-image");
  doc.setSubject("Histoire interactive d'Halloween — export PDF de toutes les slides");
  doc.setCreator("scripts/generate-pdf.mjs");

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontI = await doc.embedFont(StandardFonts.HelveticaOblique);

  const loadImage = async (rel) => readFileSync(join(ROOT, rel));

  // Cover
  {
    const page = doc.addPage([PAGE_W, PAGE_H]);
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: BG });
    page.drawText("Amazing Halloween", {
      x: PAGE_W / 2 - fontB.widthOfTextAtSize("Amazing Halloween", 30) / 2,
      y: PAGE_H - 90, size: 30, font: fontB, color: ORANGE,
    });
    const sub = "Une soirée d'Halloween spéciale — l'histoire complète en PDF";
    page.drawText(sub, {
      x: PAGE_W / 2 - font.widthOfTextAtSize(sub, 14) / 2,
      y: PAGE_H - 120, size: 14, font, color: TEXT,
    });
    const sub2 = "Toutes les slides du site : textes, illustrations, choix et les 6 fins";
    page.drawText(sub2, {
      x: PAGE_W / 2 - fontI.widthOfTextAtSize(sub2, 10.5) / 2,
      y: PAGE_H - 136, size: 10.5, font: fontI, color: MUTED,
    });
    await drawImageFit(page, await loadImage("assets/img/slide-00-intro.jpg"), PAGE_W / 2, PAGE_H - 172, 400, 300);
    const link = "Site : https://adrien-image.github.io/Amazing-halloween/";
    page.drawText(link, {
      x: PAGE_W / 2 - font.widthOfTextAtSize(link, 9) / 2,
      y: 46, size: 9, font, color: MUTED,
    });
  }

  // Sommaire
  {
    const page = doc.addPage([PAGE_W, PAGE_H]);
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: BG });
    page.drawText("Sommaire", { x: M, y: PAGE_H - 70, size: 22, font: fontB, color: ORANGE });
    let y = PAGE_H - 110;
    order.forEach((id, idx) => {
      const n = STORY[id];
      let label = `${idx + 1}. ${n.title}`;
      if (n.ending) label += `   — ${n.ending}`;
      for (const line of wrap(label, font, 11, CW)) {
        page.drawText(line, { x: M, y, size: 11, font, color: n.ending ? ORANGE : TEXT });
        y -= 16;
      }
      y -= 4;
    });
    const foot = "Amazing Halloween — version PDF";
    page.drawText(foot, { x: PAGE_W / 2 - font.widthOfTextAtSize(foot, 9) / 2, y: 36, size: 9, font, color: MUTED });
  }

  const drawHeader = (page, i, total, node, suffix = "") => {
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: BG });
    page.drawText(`SLIDE ${i} / ${total}${suffix}`, { x: M, y: PAGE_H - 46, size: 9, font: fontB, color: ORANGE });
    let ts = 15;
    const title = sanitize(node.title);
    while (fontB.widthOfTextAtSize(title, ts) > CW - 160 && ts > 10) ts -= 0.5;
    page.drawText(title, { x: M, y: PAGE_H - 64, size: ts, font: fontB, color: TEXT });
    if (node.ending) {
      const ending = sanitize(node.ending);
      const ew = fontB.widthOfTextAtSize(ending, 9) + 16;
      page.drawRectangle({ x: PAGE_W - M - ew, y: PAGE_H - 54, width: ew, height: 18, color: ORANGE });
      page.drawText(ending, { x: PAGE_W - M - ew + 8, y: PAGE_H - 48.5, size: 9, font: fontB, color: BG });
    }
  };

  const drawFooter = (page, i, total) => {
    const foot = `Amazing Halloween — slide ${i}/${total}`;
    page.drawText(foot, { x: PAGE_W / 2 - font.widthOfTextAtSize(foot, 8) / 2, y: 30, size: 8, font, color: MUTED });
  };

  for (let idx = 0; idx < order.length; idx++) {
    const id = order[idx];
    const node = STORY[id];
    const i = idx + 1;
    const total = order.length;
    const choices = node.choices ?? [];

    let page = doc.addPage([PAGE_W, PAGE_H]);
    drawHeader(page, i, total, node);

    let fs = 10;
    let leading = fs * 1.38;
    let maxImgH = 285;
    while (maxImgH >= 150 && contentHeight(node, CW, font, fs, leading) > PAGE_H - 84 - maxImgH - 22 - 56) {
      maxImgH -= 15;
    }
    if (contentHeight(node, CW, font, fs, leading) > PAGE_H - 84 - maxImgH - 22 - 56) {
      fs = 9;
      leading = fs * 1.35;
    }

    const yAfterImg = await drawImageFit(page, await loadImage(node.image), PAGE_W / 2, PAGE_H - 84, CW, maxImgH);
    const top = yAfterImg - 22;

    if (contentHeight(node, CW, font, fs, leading) <= top - 56) {
      let y = await drawWrapped(page, node.text, M, top, CW, font, fs, leading, TEXT);
      if (choices.length) {
        y -= leading * 0.7;
        page.drawText("Choix :", { x: M, y: y - leading, size: fs, font: fontB, color: ORANGE });
        y -= leading;
        for (const c of choices) {
          y = await drawWrapped(page, "» " + c.label, M + 12, y, CW - 12, fontI, fs, leading, CHOICE);
        }
      }
      if (node.ending) {
        y -= leading * 0.9;
        page.drawText(sanitize(node.ending), { x: M, y: y - leading, size: fs + 1, font: fontB, color: ORANGE });
      }
      drawFooter(page, i, total);
      continue;
    }

    // Long slide: flow text across continuation pages
    let y = top;
    const flowLine = (line, f, size, color, x = M) => {
      if (y < 56) {
        drawFooter(page, i, total);
        page = doc.addPage([PAGE_W, PAGE_H]);
        drawHeader(page, i, total, node, " (suite)");
        y = PAGE_H - 84;
      }
      y -= leading;
      if (line) page.drawText(line, { x, y, size, font: f, color });
    };
    for (const para of node.text.split("\n")) {
      if (para.trim() === "") {
        y -= leading * 0.6;
        continue;
      }
      for (const line of wrap(para, font, fs, CW)) flowLine(line, font, fs, TEXT);
    }
    if (choices.length) {
      y -= leading * 0.7;
      for (const c of choices) {
        for (const line of wrap("» " + c.label, fontI, fs, CW - 12)) flowLine(line, fontI, fs, CHOICE, M + 12);
      }
    }
    if (node.ending) {
      y -= leading * 0.9;
      flowLine(sanitize(node.ending), fontB, fs + 1, ORANGE);
    }
    drawFooter(page, i, total);
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, await doc.save());
  console.log(`PDF written: ${OUT} (${order.length} slides)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
