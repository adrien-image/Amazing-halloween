"use strict";
// Structural validation of the story tree and the static assets referenced by index.html.
// Run with: node tests/story.test.js   (or `npm test` to run all suites)
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
let checks = 0;
let failures = 0;

function check(cond, msg) {
  checks++;
  if (!cond) {
    failures++;
    console.error("  ✗ " + msg);
  }
}

const STORY = require(path.join(ROOT, "story.js"));

// --- story tree ---
check(!!STORY.start, "a 'start' node exists");
const ids = Object.keys(STORY);
for (const [key, node] of Object.entries(STORY)) {
  check(!!node && node.id === key, key + ": id matches its key");
  check(typeof node.title === "string" && node.title.length > 0, key + ": has non-empty title");
  check(typeof node.image === "string" && node.image.length > 0, key + ": has non-empty image");
  check(typeof node.text === "string", key + ": text is a string (empty allowed on the home slide)");
  check(!/[<>]/.test(node.title || ""), key + ": title contains no raw HTML");
  check(!/[<>]/.test(node.text || ""), key + ": text contains no raw HTML");
  check(Array.isArray(node.choices) && node.choices.length > 0, key + ": has at least one choice");
  const labels = new Set();
  for (const c of node.choices || []) {
    check(!!c && typeof c.label === "string" && c.label.length > 0, key + ": choice has a label");
    check(!/[<>]/.test((c && c.label) || ""), key + ": choice label contains no raw HTML");
    check(!!c && typeof c.next === "string" && !!STORY[c.next], key + ": choice next '" + (c && c.next) + "' exists");
    check(!labels.has(c.label), key + ": no duplicate choice label");
    labels.add(c.label);
  }
  check(typeof node.image === "string" && node.image.indexOf(":") === -1, key + ": image is a local relative path");
  check(fs.existsSync(path.join(ROOT, node.image)), key + ": image file exists (" + node.image + ")");
}

// every node reachable from start
const seen = new Set();
const queue = ["start"];
while (queue.length) {
  const id = queue.shift();
  if (seen.has(id)) continue;
  seen.add(id);
  for (const c of STORY[id].choices) queue.push(c.next);
}
for (const id of ids) check(seen.has(id), "node '" + id + "' is reachable from 'start'");

// endings
const endings = ids.filter((id) => STORY[id].ending);
check(endings.length >= 1, "at least one ending exists (found " + endings.length + ": " + endings.join(", ") + ")");
for (const id of endings) {
  check(STORY[id].ending.length > 0, id + ": ending badge has text");
  check(/^FIN !/.test(STORY[id].ending), id + ": ending badge starts with 'FIN !'");
  check(STORY[id].choices.some((c) => c.next === "start"), id + ": ending offers a replay path to 'start'");
}

// no "Choix A/B..." prefixes left in choice labels
for (const [key, node] of Object.entries(STORY)) {
  for (const c of node.choices || []) {
    check(!/^(CHOIX )?[A-Z](\.\d+)* — /.test(c.label || ""), key + ": choice label has no 'Choix X' prefix (" + (c.label || "") + ")");
  }
}

// --- index.html static checks ---
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
for (const ref of ["style.css", "story.js", "app.js"]) {
  check(html.indexOf(ref) !== -1 && fs.existsSync(path.join(ROOT, ref)), "index.html references existing " + ref);
}
check(/http-equiv="Content-Security-Policy"/i.test(html), "index.html declares a CSP");
check(!/\son[a-z]+\s*=/i.test(html), "index.html has no inline event handlers");
check(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(html), "index.html has no inline <script> blocks");
const imgMatch = html.match(/<img[^>]*\ssrc="([^"]+)"/);
check(!!imgMatch && fs.existsSync(path.join(ROOT, imgMatch[1])), "index.html initial image exists");

if (failures === 0) {
  console.log("story.test.js: OK (" + checks + " checks, " + ids.length + " nodes, " + endings.length + " endings)");
} else {
  console.error("story.test.js: " + failures + " FAILURE(S) / " + checks + " checks");
}
process.exit(failures === 0 ? 0 : 1);
