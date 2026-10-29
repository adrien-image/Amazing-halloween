"use strict";
// Runs every *.test.js file in this directory and aggregates exit codes.
// Usage: npm test   (or: node tests/run_all.js)
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname).filter((f) => f.endsWith(".test.js")).sort();
if (files.length === 0) {
  console.error("No test files found in " + __dirname);
  process.exit(1);
}

let failed = 0;
for (const f of files) {
  console.log("\n=== " + f + " ===");
  const r = spawnSync(process.execPath, [path.join(__dirname, f)], { stdio: "inherit" });
  if (r.status !== 0) failed++;
}

console.log("\n" + (failed === 0 ? "All " + files.length + " suite(s) passed." : failed + " of " + files.length + " suite(s) FAILED."));
process.exit(failed === 0 ? 0 : 1);
