import { categoryById } from "@/content/categories";
import { faqs } from "@/content/faq";
import { glossary } from "@/content/glossary";
import { schools } from "@/content/schools";
import { worlds } from "@/content/worlds";
import { allGuides } from "./guides";
import { slugify } from "./text";

export interface SearchDoc {
  /** Display title */
  title: string;
  /** Where it lives */
  href: string;
  /** Result group label */
  type: "Guide" | "School" | "World" | "Glossary" | "FAQ";
  /** Small context line under the title */
  context: string;
  /** Lowercased haystack for matching */
  keywords: string;
}

export function buildSearchIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const g of allGuides) {
    const cat = categoryById.get(g.category);
    docs.push({
      title: g.title,
      href: `/guides/${g.slug}`,
      type: "Guide",
      context: `${cat?.emoji ?? ""} ${cat?.name ?? ""} · ${g.blurb}`,
      keywords: [g.title, g.blurb, g.tags.join(" "), cat?.name ?? ""]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const s of schools) {
    docs.push({
      title: `${s.emoji} School of ${s.name}`,
      href: `/schools/${s.slug}`,
      type: "School",
      context: s.tagline,
      keywords: `${s.name} school ${s.archetype} ${s.tagline}`.toLowerCase(),
    });
  }

  for (const w of worlds) {
    docs.push({
      title: `${w.emoji} ${w.name}`,
      href: `/worlds#${slugify(w.name)}`,
      type: "World",
      context: `Levels ${w.levels} · ${w.blurb}`,
      keywords: `${w.name} world levels ${w.levels} ${w.blurb}`.toLowerCase(),
    });
  }

  for (const e of glossary) {
    docs.push({
      title: e.term,
      href: `/glossary#${slugify(e.term)}`,
      type: "Glossary",
      context: e.def,
      keywords: `${e.term} ${(e.also ?? []).join(" ")} ${e.def}`.toLowerCase(),
    });
  }

  for (const f of faqs) {
    docs.push({
      title: f.q,
      href: `/faq#${slugify(f.q)}`,
      type: "FAQ",
      context: f.category,
      keywords: `${f.q} ${f.category} ${f.a.join(" ")}`.toLowerCase(),
    });
  }

  return docs;
}
