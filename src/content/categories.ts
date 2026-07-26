import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    emoji: "🧭",
    tagline: "Brand new to the Spiral? Start here — zero knowledge assumed.",
  },
  {
    id: "leveling",
    name: "Leveling & Worlds",
    emoji: "🗺️",
    tagline: "Where to go, in what order, and which side content is worth it.",
  },
  {
    id: "gear",
    name: "Gear",
    emoji: "🛡️",
    tagline: "What to wear at every level, and where to farm it.",
  },
  {
    id: "pets",
    name: "Pets",
    emoji: "🐾",
    tagline: "Hatching, training, and building a pet that carries you.",
  },
  {
    id: "gardening",
    name: "Gardening",
    emoji: "🌱",
    tagline: "The quiet engine behind pet snacks, gold, and rare reagents.",
  },
  {
    id: "gold",
    name: "Gold & Farming",
    emoji: "💰",
    tagline: "Make gold fast, farm smart, and never be broke again.",
  },
  {
    id: "strategy",
    name: "Combat & Strategy",
    emoji: "⚔️",
    tagline: "Blades, traps, cheats, and how to end fights in one big turn.",
  },
  {
    id: "pvp",
    name: "PvP",
    emoji: "🏟️",
    tagline: "The arena, explained without the sweat.",
  },
  {
    id: "systems",
    name: "Other Systems",
    emoji: "🧰",
    tagline: "Fishing, crafting, monstrology, keys, events, and more.",
  },
];

export const categoryById = new Map(categories.map((c) => [c.id, c]));
