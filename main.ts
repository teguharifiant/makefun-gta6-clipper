// Entry for make.fun bounty "Clip GTA 6 for the most YouTube views"
// (gta6-clipper-01): copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads the YouTube address of the
// clip. The video itself is the entry — the house reads its views
// through the YouTube Data API — so this program does nothing else.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read the address first so a malformed VIDEO.json fails loudly here,
// before the gate ever sees it, instead of silently copying bad JSON.
const video = JSON.parse(readFileSync(join(BOT_DIR, "VIDEO.json"), "utf8")) as { url?: unknown };
if (typeof video.url !== "string" || !video.url.startsWith("https://")) {
  console.error("VIDEO.json has no https url field");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "VIDEO.json"), join(OUTPUT_DIR, "VIDEO.json"));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${OUTPUT_DIR} (url: ${video.url})`);
