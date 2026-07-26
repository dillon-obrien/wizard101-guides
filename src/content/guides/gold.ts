import type { Guide } from "@/lib/types";

export const goldGuides: Guide[] = [
  {
    slug: "gold-farming-guide",
    title: "Gold Farming: Never Be Broke Again",
    category: "gold",
    difficulty: "beginner",
    blurb:
      "The classic Halfang run, Bazaar flipping, sell-everything discipline, and how much gold you actually need at each stage of the game.",
    tags: ["gold", "halfang", "bazaar", "economy", "farming"],
    updated: "July 2026",
    tldr: [
      "Gold sources ranked: **sell your drops at the Bazaar** (constant) → **Halfang runs** (burst) → gear-dungeon side-loot (passive) → gardening (trickle).",
      "**Halfang Bristlecrown** in Wintertusk is the classic gold burst: one fast fight near an entrance, huge vendor-loot per minute, repeat.",
      "Sell at the **Bazaar**, not to world vendors — Bazaar prices are far better for most items.",
      "Gold has a cap (around the 400k mark) — park wealth in hatches, TCs, and reagents instead of hoarding.",
      "Big expenses to save for: pet hatches (tens of thousands each), mounts, crafting materials, TC stockpiles.",
    ],
    sections: [
      {
        title: "First: stop leaking gold",
        blocks: [
          {
            list: [
              "**Sell every unused drop** at the Bazaar (Olde Town). Hats you'll never wear are gold in costume.",
              "**Never buy world-shop gear** — the [gear guide](/guides/gear-guide-levels-1-50) covers the free path.",
              "**Refill potions with minigames/wisps**, not gold, while leveling.",
              "**Don't impulse-buy furniture.** (We've all done it. The desk was nice. Focus.)",
              "Mounts, hatches, and TC stocks are *good* spending — the goal is funding them, not a high score.",
            ],
          },
        ],
      },
      {
        title: "The Halfang run (the classic burst farm)",
        blocks: [
          "Halfang Bristlecrown is a boss in Wintertusk — his tower sits in **Vestrilund, immediately next to the zone entrance**, which is the entire secret: walk in, fight, walk out, reset, repeat, with runs taking about a minute once you outlevel him.",
          {
            list: [
              "He's a Rank 9 Storm boss (~1,900 health) with a single Myth minion — a one-shot for anyone 50+, trivial to AoE down even earlier.",
              "The payday is his drop table vendoring absurdly well: his signature **Cow's Pearl Amulet sells for ~8,000–9,000 gold** at the Bazaar, wands ~3,000, and armor pieces ~2,000 each.",
            ],
          },
          {
            steps: [
              "Unlock Wintertusk (see [Grizzleheim & Wintertusk](/guides/grizzleheim-and-wintertusk)); level 50+ makes runs trivial.",
              "Deck: blades + your AoE/big single hit. The fight is a speed-run, not a puzzle.",
              "Kill, loot, **port out and back** (or re-enter) to reset, repeat. Each loop is a couple of minutes at most.",
              "Bazaar-sell the haul every dozen runs. Expect tens of thousands per focused session at mid levels, more later.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "Any fast boss near an entrance with a fat drop table works on this template — Halfang is just the community's Schelling point. Mount Olympus fills the same role at level 30 with gear upside; see [Best Bosses to Farm](/guides/best-bosses-to-farm).",
              ],
            },
          },
        ],
      },
      {
        title: "Bazaar flipping (for the economically inclined)",
        blocks: [
          "The Bazaar buys low and sells to you higher — but *restocks* of rare items (reagents, sought TCs, rare seeds) appear at fixed shelf prices below player demand. Flippers watch categories, buy underpriced restocks, and resell isn't possible directly — instead they *use* the goods (crafting, hatching) or hold them for their own needs, converting gold into value.",
          {
            list: [
              "Practical version for normal humans: when you see **Couch Potato seeds, amber-adjacent reagents, or meta TCs** on shelves cheap, buy them even if you don't need them *today*. Future-you always does.",
              "Reagent details and the realm-hopping alternative live in the [Reagent Farming guide](/guides/reagent-farming-guide).",
            ],
          },
        ],
      },
      {
        title: "How much gold do you actually need?",
        blocks: [
          {
            table: {
              headers: ["Stage", "Healthy balance", "Main sinks"],
              rows: [
                ["Leveling (1–50)", "5–20k floating", "Bazaar gear refreshes, deck sizes, first mount fund"],
                ["Midgame (50–100)", "50–150k", "Pet hatches begin, TC stocks, crafting quests"],
                ["Endgame", "Near cap, cycling", "Hatch sprees, crafting mats, housing vanity, TC libraries"],
              ],
            },
          },
          "The pattern: gold stops being scarce once selling discipline plus one burst farm exists. The real economy shifts to **energy, reagents, and time** — which is why the [gardening](/guides/gardening-101) and [reagent](/guides/reagent-farming-guide) guides exist.",
        ],
      },
      {
        title: "Gold sinks, ranked by value",
        blocks: [
          {
            table: {
              headers: ["Sink", "Verdict", "Why"],
              rows: [
                ["Pet hatches", "Excellent", "Converts gold into permanent account power — the endgame's main sink for a reason"],
                ["Treasure card library", "Excellent", "Feints, heals, Tower Shields: consumables that win real fights, pennies each"],
                ["Training point buyback", "Good (once)", "Fixing a genuinely misspent build beats living with it — but plan so you never need a second"],
                ["Crafting reagents from the Bazaar", "Good", "Buying scarce reagents cheap beats farming them at 100g/hour of your time"],
                ["Gold mounts", "Good (once)", "+40% speed forever; buy one permanent mount and never look back"],
                ["Housing & furniture", "Fun-money", "A wonderful hobby with zero combat return — budget it like one"],
                ["World-shop gear", "Never", "The Bazaar sells better for less, always"],
              ],
            },
          },
        ],
      },
      {
        title: "The week-one money plan (new wizard edition)",
        blocks: [
          {
            steps: [
              "Days 1–2: sell **every** drop at the Bazaar; buy nothing but Bazaar gear refreshes. You'll clear a few thousand gold by level 10.",
              "Days 3–4: keep a 2k float for deck/gear upgrades; start the mount fund.",
              "Day 5-ish: buy the cheapest **permanent** mount you like the look of — it out-earns every other early purchase in saved minutes.",
              "Week 2+: float grows on autopilot; start the TC library (heals, Tower Shields) and stop thinking about gold until [pet hatching](/guides/pet-hatching-guide) begins.",
              "From then on: gold problems are solved by one Halfang session, forever. Welcome to the middle class of the Spiral.",
            ],
          },
        ],
      },
    ],
    related: ["best-bosses-to-farm", "reagent-farming-guide", "gear-guide-levels-1-50"],
  },

  {
    slug: "reagent-farming-guide",
    title: "Reagent Farming: Realm-Hopping & Bazaar Sniping",
    category: "gold",
    difficulty: "intermediate",
    blurb:
      "How reagent spawns work, the realm-hop harvesting loop, Bazaar sniping, transmutes, and the reagents that gate famous recipes.",
    tags: ["reagents", "crafting", "realm hopping", "bazaar", "transmute"],
    updated: "July 2026",
    tldr: [
      "Reagents come from world spawn points, mob/boss drops, the Bazaar's reagent tab, gardening, and fishing chests.",
      "**Realm hopping** — harvesting a spawn spot, switching realms, harvesting again — turns one location into dozens.",
      "**Bazaar sniping**: rare reagents hit shelves at fixed prices and vanish in seconds; camp the tab with refresh discipline for the ones you need.",
      "**Transmute recipes** convert common reagents into rarer ones — often the sanity-preserving path.",
      "Chronically scarce classics: Black Lotus, Blood Moss, Ore's rare cousins, amber (from [gardening](/guides/best-plants-to-grow)).",
    ],
    sections: [
      {
        title: "Where reagents come from",
        blocks: [
          {
            list: [
              "**World spawns** — glowing pickups (ore veins, plants, stones) at semi-fixed locations per zone. Each world has signature reagents (e.g. MooShu's Black Lotus).",
              "**Drops** — mobs and bosses shed reagents alongside gear; some rares are drop-primary.",
              "**The Bazaar's reagent tab** — the great equalizer; anything auctionable eventually passes through.",
              "**Gardening & fishing** — several plants and fishing chests pay out reagents, including rare ones.",
              "**Vendors** — basic reagents (ore, mist wood tier) sell infinitely from crafting vendors; never farm what a vendor sells.",
            ],
          },
        ],
      },
      {
        title: "The realm-hop loop",
        blocks: [
          "Every realm (server copy of the world) spawns reagents independently. So:",
          {
            steps: [
              "Learn 2–3 spawn points for your target reagent in one compact area (community maps help; spawns cluster in memorable spots).",
              "Harvest them, open the realm list, switch to the next realm.",
              "Harvest the same spots again. Repeat down the realm list — a full lap can visit dozens of copies.",
              "Rare 'sub-spawns' matter: many reagent nodes occasionally yield a rarer sister reagent (the classic reason to harvest *every* node, not just pretty ones).",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Stack this with sightseeing: a realm-hop session in MooShu or Avalon is genuinely pleasant. Podcast-tier gameplay.",
              ],
            },
          },
        ],
      },
      {
        title: "Sniping, transmuting, and not going insane",
        blocks: [
          {
            list: [
              "**Sniping:** the Bazaar lists restocks at fixed prices; hot reagents sell out in moments. Sit on the reagent tab, refresh rhythmically, buy instantly. Ten minutes of sniping often beats an hour of hopping.",
              "**Transmutes:** crafting vendors sell recipes converting N common reagents → 1 rarer one (e.g. mist wood chains upward). When a recipe wants 10 rares, transmuting commons you already hoard is usually fastest.",
              "**Buy ahead:** any time a chronically scarce reagent is cheap and available, buy your future needs. Scarcity is seasonal (events dump supply; crafting metas drain it).",
              "**Check recipes first:** farm from the shopping list backwards. The [Crafting Guide](/guides/crafting-guide) covers reading recipes and planning.",
            ],
          },
        ],
      },
    ],
    related: ["crafting-guide", "gold-farming-guide", "best-plants-to-grow"],
  },

  {
    slug: "best-bosses-to-farm",
    title: "The Best Bosses to Farm (and What Each Pays)",
    category: "gold",
    difficulty: "intermediate",
    blurb:
      "A farming directory: Loremaster for spells, Mount Olympus for speed-gear, Halfang for gold, key bosses for spellements — matched to your level.",
    tags: ["farming", "loremaster", "bosses", "drops", "spellements"],
    updated: "July 2026",
    tldr: [
      "Farm with a goal: **gold → Halfang**, **gear → the checkpoint dungeons**, **spells → Loremaster**, **spellements/rares → skeleton-key bosses**, **snappy all-rounder → Mount Olympus**.",
      "Speed beats drop-rate: a boss you clear in 3 minutes at 90% efficiency beats a 10-minute 'optimal' run.",
      "Farm during drop-boost member benefits/events when you can schedule it.",
      "Team-Up queues for famous farm spots are perpetually active — you rarely farm alone.",
    ],
    sections: [
      {
        title: "The directory",
        blocks: [
          {
            table: {
              headers: ["Target", "Where / level", "You're farming for", "Why it's good"],
              rows: [
                [
                  "Mount Olympus",
                  "Aquila, 30+",
                  "Zeus gear, gold, jewels",
                  "Fast full-dungeon loop, soloable, the best value-per-minute of the midgame",
                ],
                [
                  "Halfang Bristlecrown",
                  "Wintertusk, 50+",
                  "Pure gold",
                  "Seconds from spawn, dies instantly, vendor-fodder drop table — [full routine](/guides/gold-farming-guide)",
                ],
                [
                  "The Loremaster",
                  "Dragonspyre (Atheneum), effective 50+",
                  "**Lore spells** (learnable off-school spells), spellements, gold",
                  "Drops whole *spells* — kit-defining ones. The most famous single-boss farm in the game",
                ],
                [
                  "Waterworks",
                  "Wizard City, 60+",
                  "The 60 gear set",
                  "[Rite of passage](/guides/waterworks-gear-guide); side loot funds the trip",
                ],
                [
                  "Tartarus",
                  "Aquila, 90+",
                  "Hades gear",
                  "The 90s checkpoint; long-ish but rich",
                ],
                [
                  "Darkmoor (Graveyard)",
                  "100+",
                  "Malistaire gear",
                  "The endgame's [defining farm](/guides/darkmoor-gear-guide)",
                ],
                [
                  "Skeleton-key bosses",
                  "Various worlds, scaling",
                  "Spellements, rare jewels, pets, gear",
                  "Short single fights gated by keys — [key guide](/guides/skeleton-keys-guide)",
                ],
                [
                  "One-shot housing gauntlets",
                  "Party-owned, scaling",
                  "Gear, pets, seeds",
                  "Run from a friend's house; great social farming",
                ],
              ],
            },
          },
        ],
      },
      {
        title: "Loremaster, the special case",
        blocks: [
          "Most bosses drop *items*; the Loremaster (a Balance boss in Dragonspyre's Atheneum, reached via the side quest 'The Lore Master') drops **spells** — permanent, learnable, often best-in-class utility/attacks for schools that lack them. Modern updates layered **spellements** onto her table too, letting you *craft progress* toward her spells instead of praying.",
          {
            table: {
              headers: ["School", "Headline lore spells from her table"],
              rows: [
                ["Death", "**Deer Knight** (the famous cheap AoE-DoT), Headless Horseman, Lord of Night"],
                ["Fire", "Brimstone Revenant, Krampus, Hephaestus"],
                ["Ice", "Handsome Fomori, Winter Moon, Angry Snowpig"],
                ["Storm", "Catalan, Queen Calypso"],
                ["Myth", "Ninja Pigs, Athena Battle Sight, Keeper of the Flame"],
                ["Life", "Luminous Weaver, Pigsie, Goat Monk"],
                ["Balance", "Loremaster (her own spell), Savage Paw, Samoorai, Ninja Piglets"],
              ],
              caption:
                "The full table runs two dozen spells deep — these are the community-famous pickups.",
            },
          },
          {
            list: [
              "Effective from the moment you can survive her (drag friends at 50; comfortably solo later).",
              "Every run also pays gold and TC chaff — she's never a *wasted* run.",
              "Several of her spells can alternatively be **crafted** (amber and rare reagents — hence the [King Parsley pipeline](/guides/best-plants-to-grow)) or advanced via spellements: three roads, same destination. Pick per spell based on your luck tolerance.",
            ],
          },
        ],
      },
      {
        title: "Farming discipline (read once, save hours)",
        blocks: [
          {
            list: [
              "**Set a stop condition** — 'until the robe or 15 runs, whichever first, then a break'. Open-ended farming corrodes the soul.",
              "**Optimize the loop, not the fight** — mount speed, potion timing, port-resets, pre-enchanted decks. Shave the minutes *between* kills.",
              "**Stack multipliers** — drop-boost benefits, event windows, a loot-ish pet if you own one anyway.",
              "**Sell as you go** — a full backpack silently voids drops. Bazaar every N runs.",
              "**Bring purpose-built decks** — the [one-turn-kill patterns](/guides/blades-traps-and-stacking) exist precisely for farming.",
            ],
          },
        ],
      },
    ],
    related: ["gold-farming-guide", "skeleton-keys-guide", "waterworks-gear-guide"],
  },
];
