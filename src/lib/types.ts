/**
 * Content model for The Spiral Scholar.
 *
 * Guides are authored as plain TypeScript data. Paragraphs are bare strings
 * with a tiny markdown-lite inline syntax: **bold**, *italic*, `code`,
 * [label](/internal-or-external-link).
 */

export type CategoryId =
  | "getting-started"
  | "leveling"
  | "gear"
  | "pets"
  | "gardening"
  | "gold"
  | "strategy"
  | "pvp"
  | "systems";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type CalloutKind = "tip" | "info" | "warn" | "danger" | "lore";

export interface CalloutBlock {
  kind: CalloutKind;
  title?: string;
  body: string[];
}

export interface TableBlock {
  caption?: string;
  headers: string[];
  rows: string[][];
}

/** A single piece of guide content. Bare strings are paragraphs. */
export type Block =
  | string
  | { sub: string }
  | { list: string[] }
  | { steps: string[] }
  | { callout: CalloutBlock }
  | { table: TableBlock };

export interface Section {
  title: string;
  blocks: Block[];
}

export interface Guide {
  slug: string;
  title: string;
  category: CategoryId;
  difficulty: Difficulty;
  /** One-to-two sentence summary used on cards and for SEO. */
  blurb: string;
  tags: string[];
  /** e.g. "July 2026" */
  updated: string;
  /** The plain-English summary shown at the top of every guide. */
  tldr: string[];
  sections: Section[];
  /** Slugs of related guides. */
  related?: string[];
}

export interface Category {
  id: CategoryId;
  name: string;
  emoji: string;
  tagline: string;
}

export interface SpellHighlight {
  name: string;
  role: string;
  note: string;
}

export interface School {
  slug: string;
  name: string;
  emoji: string;
  /** Hex used for accents on the school page. */
  color: string;
  title: string;
  tagline: string;
  archetype: string;
  newPlayerFriendliness: "Very friendly" | "Friendly" | "Challenging";
  baseAccuracy: string;
  overview: string[];
  strengths: string[];
  weaknesses: string[];
  signatureSpells: SpellHighlight[];
  statPriorities: string[];
  secondaries: { pick: string; why: string }[];
  levelingTips: string[];
  funFact: string;
}

export interface World {
  name: string;
  arc: 1 | 2 | 3 | 4 | "side";
  emoji: string;
  levels: string;
  blurb: string;
  highlights: string[];
}

export interface GlossaryEntry {
  term: string;
  def: string;
  also?: string[];
}

export interface FaqEntry {
  q: string;
  a: string[];
  category: string;
}
