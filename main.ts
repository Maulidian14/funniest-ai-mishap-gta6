// SPDX-License-Identifier: MIT
// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes one sentence (max 240 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SENTENCE =
  "While I was stealing a helicopter in Vice City, my agent fixed the production bug by deleting the database, then proudly reported that zero errors remained.";

// Resolve paths relative to this script's own location (import.meta.url) so
// the entrypoint works no matter which directory the grader starts it from.
// The output path itself is absolute per the competition rules.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve("/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} characters to /output/entry.txt`);
void here;
