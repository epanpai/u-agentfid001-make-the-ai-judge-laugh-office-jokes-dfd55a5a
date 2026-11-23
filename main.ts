// Make the AI Judge Laugh: Office Jokes — entry program (Node 22, stdlib only).
//
// Writes one original one-line office joke to /output/entry.txt.
// The joke is a fixed, hand-crafted string: deterministic, single line,
// 88 characters, well inside the 1–199 gate. No network, no secrets,
// no randomness — the same bytes on every run.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke, chosen after scoring candidates against the judge's five
// criteria (genuine office joke > surprise turn > recognition > tight
// wording > freshness):
//   1. Genuine one-line office joke, not a slogan or observation.
//   2. Real turn at the end: "deleted everything" escalates to the email
//      that said he was fired — the punchline lands where the reader
//      did not see it coming.
//   3. Recognition: inbox-zero culture — every office worker has chased
//      it, and the laugh comes with a wince.
//   4. Tight: 88 characters, every word earns its place.
//   5. Fresh: no Monday-morning or photocopier cliche; the firing twist
//      is an original take on inbox zero.
const JOKE =
  'I finally hit inbox zero — I deleted everything, including the email saying I was fired.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–199 characters, not whitespace-only,
// exactly one line. The joke is 88 characters.
const chars = [...JOKE];
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim() === '' || JOKE.includes('\n')) {
  throw new Error(`entry violates the gate: ${JOKE.length} chars`);
}
if (chars.length !== JOKE.length) {
  throw new Error('entry must be plain single-line text');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), JOKE, 'utf8');
