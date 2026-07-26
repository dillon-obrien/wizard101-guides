import type { Block, Guide, Section } from "./types";

/** Turn a heading into a URL-safe anchor id. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function blockWords(block: Block): number {
  const count = (s: string) => s.split(/\s+/).filter(Boolean).length;
  if (typeof block === "string") return count(block);
  if ("sub" in block) return count(block.sub);
  if ("list" in block) return block.list.reduce((n, s) => n + count(s), 0);
  if ("steps" in block) return block.steps.reduce((n, s) => n + count(s), 0);
  if ("callout" in block)
    return block.callout.body.reduce((n, s) => n + count(s), 0);
  if ("table" in block)
    return block.table.rows.flat().reduce((n, s) => n + count(s), 0);
  return 0;
}

/** Approximate reading time in whole minutes (never less than 1). */
export function readingMinutes(guide: Guide): number {
  const words =
    guide.tldr.reduce((n, s) => n + s.split(/\s+/).length, 0) +
    guide.sections.reduce(
      (n, sec) => n + sec.blocks.reduce((m, b) => m + blockWords(b), 0),
      0,
    );
  // ~180 wpm: guide prose is dense with tables and steps, which read slower.
  return Math.max(1, Math.ceil(words / 180));
}

export interface TocItem {
  id: string;
  title: string;
}

/** Section anchor ids, de-duplicated in order. */
export function tocFor(sections: Section[]): TocItem[] {
  const seen = new Map<string, number>();
  return sections.map((s) => {
    const base = slugify(s.title);
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return { id: n === 0 ? base : `${base}-${n + 1}`, title: s.title };
  });
}
