import type { FaqEntry } from "@/lib/types";

export const faqs: FaqEntry[] = [
  {
    category: "Starting out",
    q: "Is Wizard101 actually free to play?",
    a: [
      "Free-to-start, honestly described: Wizard City's opening areas, all core systems, and no time limit cost nothing. Progressing into later worlds requires membership (subscription) or buying zones permanently with crowns.",
      "Our [Membership vs Crowns guide](/guides/membership-and-crowns) breaks down which model fits which kind of player — and why you should spend nothing at all for your first days.",
    ],
  },
  {
    category: "Starting out",
    q: "What's the best school for a beginner?",
    a: [
      "There's no wrong answer, but the classic beginner picks are **Death** (its drain attacks heal you, making solo play very forgiving), **Fire** (big damage with decent safety), and **Life** (you simply do not die).",
      "Storm hits hardest but punishes beginners with low health and frequent fizzles. Full breakdown: [Choosing Your School](/guides/choosing-your-school).",
    ],
  },
  {
    category: "Starting out",
    q: "Can I change my school later?",
    a: [
      "No — a wizard's school is permanent. But accounts hold multiple wizards, so 'changing school' just means starting a new character (and most veterans end up with several anyway).",
      "You *can* learn other schools' spells as secondaries using training points — see the [Training Points Guide](/guides/training-points-guide).",
    ],
  },
  {
    category: "Starting out",
    q: "What should I never waste money/gold on early?",
    a: [
      "Gold: world-shop gear (the Bazaar is better and cheaper) and random furniture. Crowns: gear packs hoping for a specific item (they're lootboxes) and areas you haven't reached yet.",
      "Great early purchases instead: a permanent mount, and — if not subscribing — zones as the story reaches them.",
    ],
  },
  {
    category: "Combat",
    q: "How do power pips work?",
    a: [
      "Each round you gain a pip. With power pip chance (a core stat that rises with level/gear), that pip arrives as a power pip worth **two** — but only for spells of your own school, or a school you hold a Mastery amulet for.",
      "This is why off-school attack spells fall behind: they use power pips at half value. Utility spells (blades, traps, shields) don't care, which is why secondaries focus on utility.",
    ],
  },
  {
    category: "Combat",
    q: "Why did my blade disappear without doing anything?",
    a: [
      "Something consumed it — almost always a wand hit or a low-damage spell you cast in between. Any qualifying attack eats all applicable blades at once.",
      "Order of operations: break enemy shields with wand hits *first*, then blade, then nuke. The full rules live in [Blades, Traps & Stacking](/guides/blades-traps-and-stacking).",
    ],
  },
  {
    category: "Combat",
    q: "A boss keeps casting extra spells out of turn. Bug?",
    a: [
      "That's a **cheat boss** — scripted rule-breaking is the game's intended endgame difficulty. The boss announces triggers via dialogue lines ('No traps!').",
      "[Cheating Bosses 101](/guides/cheating-bosses-101) teaches the archetypes and the universal counters (simple decks, fast kills, reading the script).",
    ],
  },
  {
    category: "Combat",
    q: "What level should I be for each world?",
    a: [
      "Rough guide: finish Wizard City ~12, Krokotopia ~22, Marleybone ~32, MooShu ~42, Dragonspyre ~50, then roughly +10 per world through the arcs.",
      "If you're behind, side content (Grizzleheim, Wysteria, Wintertusk) closes the gap fast — the full table is in [World Order & Leveling](/guides/world-order-and-leveling).",
    ],
  },
  {
    category: "Gear & progression",
    q: "What gear should I have at level 60?",
    a: [
      "The Waterworks set — the famous free hat/robe/boots from the level-60 dungeon in Crab Alley. It stays competitive for decades of levels.",
      "Guide, cheats, and farming etiquette: [Waterworks](/guides/waterworks-gear-guide). Hate farming? Wintertusk-era crafted gear is the honorable substitute.",
    ],
  },
  {
    category: "Gear & progression",
    q: "When do I get my school's big iconic spells?",
    a: [
      "Your professor summons you for spell quests at level milestones — the famous one being the level-48 quest in the Dragonspyre era (Fire Dragon, Storm Lord, Scarecrow and friends), with more at 58, 68, and beyond.",
      "Never skip a professor's summons — and do the Grizzleheim/Wintertusk line for the bonus spells at levels 35 and 55 (quests from Baldur Goldpaws in Olde Town; full table in the [Grizzleheim & Wintertusk guide](/guides/grizzleheim-and-wintertusk)).",
    ],
  },
  {
    category: "Gear & progression",
    q: "Are packs/crowns gear worth buying?",
    a: [
      "For power: rarely — the free checkpoint path (Bazaar → Zeus → Waterworks → Hades → Darkmoor) is what most max-level players actually wore. Packs are lootboxes; treat them as cosmetic gambling within a set fun-budget, never a progression strategy.",
    ],
  },
  {
    category: "Pets & gardening",
    q: "Do pets really matter?",
    a: [
      "Yes — a trained pet is effectively an extra gear slot: up to ~15%+ damage, ~15% resist, or lifesaving auto-heals depending on build. The gap between no pet and a good pet is a whole gear checkpoint.",
      "Start with [Pets 101](/guides/pets-101), then the [hatching loop](/guides/pet-hatching-guide) when you're ready to build seriously.",
    ],
  },
  {
    category: "Pets & gardening",
    q: "What's the deal with Couch Potatoes?",
    a: [
      "They're the gardening plant whose harvests include **mega snacks** — the fuel that makes pet training fast. A stable Couch Potato garden means permanent free pet XP.",
      "Seeds drop around Grizzleheim and appear in the Bazaar's seed tab. Setup and care: [Best Plants to Grow](/guides/best-plants-to-grow).",
    ],
  },
  {
    category: "Pets & gardening",
    q: "How do I get amber?",
    a: [
      "Primarily from Ultra King Parsley elder harvests (the King Parsley gardening pipeline), plus occasional drops and event rewards. It gates several famous crafted lore spells, which is why gardeners start the parsley patch *early*.",
      "Details in [Best Plants](/guides/best-plants-to-grow) and the [crafting guide](/guides/crafting-guide).",
    ],
  },
  {
    category: "Gold & farming",
    q: "Fastest way to make gold?",
    a: [
      "Discipline first: sell every unused drop at the Bazaar, never buy shop gear. Burst: farm Halfang in Wintertusk (the classic gold boss). Passive: gardening surplus.",
      "Numbers and routines: [Gold Farming](/guides/gold-farming-guide).",
    ],
  },
  {
    category: "Gold & farming",
    q: "What is the Loremaster and why does everyone farm her?",
    a: [
      "A Dragonspyre boss whose loot table includes permanent, learnable **spells** — kit-defining off-school attacks like Deer Knight — plus spellements toward them. Farm her, or craft the same spells via amber recipes: [Best Bosses to Farm](/guides/best-bosses-to-farm).",
    ],
  },
  {
    category: "Multiplayer",
    q: "How do I find people for dungeons?",
    a: [
      "The **Team-Up kiosk** in every world's hub queues you with strangers for any instance — it's active around the clock for famous dungeons like Waterworks and Darkmoor.",
      "Read the [etiquette guide](/guides/team-up-and-dungeon-etiquette) first: one hitter, everyone blades them, nobody vanishes mid-run.",
    ],
  },
  {
    category: "Multiplayer",
    q: "Is PvP worth trying? Is it pay-to-win?",
    a: [
      "It's a genuinely deep 1v1 card duel scene with seasonal ladders — worth trying once you're comfortable in PvE. Gear/pets matter (preparation wins brackets), but the modern '5th Age' ruleset (many treasure cards and enchants flagged No-PvP, curated spell rules) narrowed the wallet gap considerably.",
      "Start with [PvP Basics](/guides/pvp-basics); prep properly with the [gear & deck guide](/guides/pvp-deck-and-prep).",
    ],
  },
  {
    category: "Meta",
    q: "What's the max level right now?",
    a: [
      "**180**, as of the Darkmoor world — the gothic-horror world released in November 2025 that opened Arc 5 (yes, the level-100 castle grew into a whole world). KingsIsle typically ships a new world each fall and raises the cap ~10 levels, so check in-game news for anything newer.",
      "Between-world updates matter too: 2024's Selenopolis update rebuilt Krokotopia and added the Magic Weaving system, and new raids arrive in summer updates. Our strategy content ages far slower than the cap does.",
    ],
  },
  {
    category: "Meta",
    q: "Is this site official? How current is it?",
    a: [
      "The Spiral Scholar is an unofficial fan guide — not affiliated with or endorsed by KingsIsle Entertainment. Game values (percentages, drop tables, PvP rules) shift with updates, so treat exact numbers as approximations and verify current specifics in-game or on live community resources.",
      "Our focus is the stuff that doesn't rot: how systems work, how to think, and how to not waste your first hundred hours.",
    ],
  },
];
