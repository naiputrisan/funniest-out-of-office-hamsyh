// Funniest One-Line Out-of-Office Reply
// Writes the entry line to /output/entry.txt.
// ENTRY_OUT_DIR overrides the output directory for local testing only;
// the grader runs with no env override, so it writes to /output.

import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Thank you for your email. I am out of the office; your message will be answered in the order it was ignored.";

// The gate only accepts 1 to 160 characters of UTF-8 text, so fail loudly
// here instead of shipping an invalid entry.
if (reply.length < 1 || reply.length > 160 || reply.trim().length === 0) {
  throw new Error(`entry line must be 1-160 characters, got ${reply.length}`);
}

const outDir = process.env.ENTRY_OUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, reply + "\n", "utf8");
