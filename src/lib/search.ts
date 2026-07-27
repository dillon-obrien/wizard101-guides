import { categoryById } from "@/content/categories";
import { faqs } from "@/content/faq";
import { glossary } from "@/content/glossary";
import { playbookBySlug } from "@/content/playbooks";
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
  type: "Guide" | "School" | "World" | "Tool" | "Glossary" | "FAQ";
  /** Small context line under the title */
  context: string;
  /** Lowercased haystack for matching */
  keywords: string;
}

const TOOL_DOCS: SearchDoc[] = [
  {
    title: "Damage Calculator",
    href: "/tools/damage-calculator",
    type: "Tool",
    context: "Stack blades, traps, pierce and crits — see the exact hit",
    keywords: "damage calculator tool blades traps feint crit pierce resist math",
  },
  {
    title: "Training Point Planner",
    href: "/tools/training-points",
    type: "Tool",
    context: "Levels + Zeke + named givers — count your points",
    keywords: "training point planner tool calculator zeke points count",
  },
  {
    title: "Level Advisor",
    href: "/tools/level-advisor",
    type: "Tool",
    context: "Your world, gear standard, and next milestones at any level",
    keywords: "level advisor tool what to do at my level milestones gear checkpoint",
  },
  {
    title: "Hatch Odds Calculator",
    href: "/tools/hatch-calculator",
    type: "Tool",
    context: "Wow Factor return odds + exclusive pet placement rules",
    keywords: "hatch calculator wow factor pet body return odds hatching exclusive kiosk",
  },
  {
    title: "Deck Draw Odds",
    href: "/tools/draw-odds",
    type: "Tool",
    context: "Chance of drawing your blade by each round, any deck size",
    keywords: "draw odds deck size probability blade hand cards math",
  },
  {
    title: "Pet XP & Snack Planner",
    href: "/tools/pet-snacks",
    type: "Tool",
    context: "Exact feedings from any age to Mega, by snack quality",
    keywords: "pet xp snack planner calculator mega snacks feedings age train leveling",
  },
  {
    title: "Talent Reveal Odds",
    href: "/tools/talent-odds",
    type: "Tool",
    context: "Keep training or rehatch — live reveal probabilities",
    keywords: "talent odds reveal probability pool keep training rehatch 252 pet",
  },
  {
    title: "Gear Comparator",
    href: "/tools/gear-compare",
    type: "Tool",
    context: "Two loadouts, honest deltas: expected hit and effective HP",
    keywords: "gear compare comparator loadout stats damage resist pierce crit effective hp",
  },
];

export function buildSearchIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [...TOOL_DOCS];

  for (const g of allGuides) {
    const cat = categoryById.get(g.category);
    docs.push({
      title: g.title,
      href: `/guides/${g.slug}`,
      type: "Guide",
      context: `${cat?.name ?? ""} · ${g.blurb}`,
      keywords: [g.title, g.blurb, g.tags.join(" "), cat?.name ?? ""]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const s of schools) {
    docs.push({
      title: `School of ${s.name}`,
      href: `/schools/${s.slug}`,
      type: "School",
      context: s.tagline,
      keywords: `${s.name} school ${s.archetype} ${s.tagline}`.toLowerCase(),
    });
  }

  for (const w of worlds) {
    const slug = slugify(w.name);
    const pb = playbookBySlug.get(slug);
    docs.push({
      title: `${w.name} playbook`,
      href: `/worlds/${slug}`,
      type: "World",
      context: `Levels ${w.levels} · route, Zeke ${pb?.zeke?.collectible ?? ""}, grabs & skips`,
      keywords:
        `${w.name} world playbook levels ${w.levels} zeke ${pb?.zeke?.collectible ?? ""} route ${w.blurb}`.toLowerCase(),
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
