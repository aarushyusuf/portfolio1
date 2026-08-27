// ============================================================
// LOCAL-ONLY WORK ENTRIES — NEVER DEPLOYED
//
// Anything in this array shows up when you run the site on your own
// machine and is invisible on aarushyusuf.dev.
//
// HOW IT WORKS
// Git tracks this file but is told to ignore your edits to it, via:
//
//     git update-index --skip-worktree app/data/work.local.ts
//
// So the version GitHub and Vercel see is this empty one, while your
// machine keeps whatever you put here. `git status` will show the file
// as clean even after you change it — that is expected, not a bug.
//
// TO STOP HIDING IT (i.e. to actually publish these entries):
//     git update-index --no-skip-worktree app/data/work.local.ts
//   then commit as normal.
//
// CAUTION: because git ignores your edits, this content is NOT backed
// up anywhere. If you wipe this folder, it is gone. Keep a copy
// elsewhere if it matters.
// ============================================================

import type { WorkItem } from "./work";

export const localWork: WorkItem[] = [];
