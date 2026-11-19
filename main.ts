// The World in One Day — entry for make.fun's news-image-20261119 bounty,
// "Sum up 19 November's world news in one image".
//
// The repository holds entry.png beside this file: a front-page poster that
// sums up Thursday 19 November 2026 — the Trump–Xi–Putin meeting at the APEC
// summit in Shenzhen, Anthropic's record IPO, the Democrats taking the US
// House, US–Iran fire in the Gulf, the GTA VI launch, Voyager 1 reaching one
// light-day from Earth, and a record $190.4M Van Gogh. This program copies
// that image to the output directory untouched, so both graded runs write
// exactly the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

copyFileSync(source, target);

const { size } = statSync(target);
console.log(`wrote ${target}: ${size} bytes`);
