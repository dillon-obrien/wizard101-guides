import { categoryById } from "@/content/categories";
import { allGuides } from "./guides";
import { readingMinutes } from "./text";
import type { CategoryId, Difficulty, Guide } from "./types";

/** Lightweight, serializable guide summary safe to ship to client components. */
export interface GuideMeta {
  slug: string;
  title: string;
  blurb: string;
  category: CategoryId;
  catName: string;
  catEmoji: string;
  difficulty: Difficulty;
  minutes: number;
  tags: string[];
}

export function toMeta(g: Guide): GuideMeta {
  const cat = categoryById.get(g.category);
  return {
    slug: g.slug,
    title: g.title,
    blurb: g.blurb,
    category: g.category,
    catName: cat?.name ?? g.category,
    catEmoji: cat?.emoji ?? "📖",
    difficulty: g.difficulty,
    minutes: readingMinutes(g),
    tags: g.tags,
  };
}

export const allGuideMetas: GuideMeta[] = allGuides.map(toMeta);
