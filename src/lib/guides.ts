import { gettingStartedGuides } from "@/content/guides/getting-started";
import { levelingGuides } from "@/content/guides/leveling";
import { gearGuides } from "@/content/guides/gear";
import { petGuides } from "@/content/guides/pets";
import { gardeningGuides } from "@/content/guides/gardening";
import { goldGuides } from "@/content/guides/gold";
import { strategyGuides } from "@/content/guides/strategy";
import { pvpGuides } from "@/content/guides/pvp";
import { systemsGuides } from "@/content/guides/systems";
import { categories } from "@/content/categories";
import type { Block, CategoryId, Guide } from "./types";

export const allGuides: Guide[] = [
  ...gettingStartedGuides,
  ...levelingGuides,
  ...gearGuides,
  ...petGuides,
  ...gardeningGuides,
  ...goldGuides,
  ...strategyGuides,
  ...pvpGuides,
  ...systemsGuides,
];

const bySlug = new Map(allGuides.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return bySlug.get(slug);
}

export function guidesInCategory(id: CategoryId): Guide[] {
  return allGuides.filter((g) => g.category === id);
}

export function relatedGuides(guide: Guide): Guide[] {
  return (guide.related ?? [])
    .map((slug) => bySlug.get(slug))
    .filter((g): g is Guide => Boolean(g));
}

/* ------------------------------------------------------------------ */
/* Build-time content validation: fails the build on broken internal   */
/* guide links, duplicate slugs, or related-slugs that don't exist.    */
/* ------------------------------------------------------------------ */

function* stringsOf(block: Block): Generator<string> {
  if (typeof block === "string") {
    yield block;
    return;
  }
  if ("sub" in block) yield block.sub;
  else if ("list" in block) yield* block.list;
  else if ("steps" in block) yield* block.steps;
  else if ("callout" in block) {
    if (block.callout.title) yield block.callout.title;
    yield* block.callout.body;
  } else if ("table" in block) {
    yield* block.table.headers;
    for (const row of block.table.rows) yield* row;
    if (block.table.caption) yield block.table.caption;
  }
}

function validateContent(): void {
  const problems: string[] = [];

  const seen = new Set<string>();
  for (const g of allGuides) {
    if (seen.has(g.slug)) problems.push(`Duplicate guide slug: ${g.slug}`);
    seen.add(g.slug);
    if (!categories.some((c) => c.id === g.category)) {
      problems.push(`Guide ${g.slug} has unknown category ${g.category}`);
    }
    for (const rel of g.related ?? []) {
      if (!bySlug.has(rel)) {
        problems.push(`Guide ${g.slug} relates to missing slug: ${rel}`);
      }
    }
    const texts: string[] = [...g.tldr, g.blurb];
    for (const section of g.sections) {
      texts.push(section.title);
      for (const block of section.blocks) texts.push(...stringsOf(block));
    }
    for (const text of texts) {
      for (const match of text.matchAll(/\]\(\/guides\/([a-z0-9-]+)/g)) {
        if (!bySlug.has(match[1])) {
          problems.push(`Guide ${g.slug} links to missing guide: ${match[1]}`);
        }
      }
    }
  }

  if (problems.length > 0) {
    throw new Error(`Content validation failed:\n${problems.join("\n")}`);
  }
}

validateContent();
