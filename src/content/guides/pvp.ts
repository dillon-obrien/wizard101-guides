import type { Guide } from "@/lib/types";

export const pvpGuides: Guide[] = [
  {
    slug: "pvp-basics",
    title: "PvP Basics: Your First Season Without Tears",
    category: "pvp",
    difficulty: "intermediate",
    blurb:
      "How the arena actually works — practice vs ranked, seasons and ratings, the modern ruleset — and the mindset shift from PvE that decides most matches.",
    tags: ["pvp", "arena", "ranked", "beginner pvp"],
    updated: "July 2026",
    tldr: [
      "Two queues: **Practice** (free-for-all rules, zero stakes — start here) and **Ranked** (seasonal ratings, rewards, stricter modern ruleset).",
      "Modern ranked runs on the PvP-2.0-era framework: heavily curated spell rules (notably, no treasure cards) and rating-based matchmaking. Exact rules shift patch to patch — read the in-game arena screens for current law.",
      "PvP is a different game from PvE: it's resource warfare (pips, cards, health as currency), not a race to stack damage.",
      "Expect to lose a lot at first — ratings exist so you find your level. Watch good players of your school between sessions.",
      "Arena tickets (match rewards) buy PvP gear from arena vendors — losing still pays.",
    ],
    sections: [
      {
        title: "The lay of the land",
        blocks: [
          {
            list: [
              "**Practice matches** — anyone, any rules, no rating. Where you learn without bleeding.",
              "**Ranked matches** — seasonal ladder with divisions and end-of-season rewards; matchmaking pairs similar ratings, level brackets keep a level 30 away from a level 170.",
              "**Tournaments and event modes** — scheduled brackets and rotating formats for variety.",
              "**Spectating** — watch matches from the arena; free education.",
              "PvP requires membership or a modest crowns unlock — see [spending guide](/guides/membership-and-crowns).",
            ],
          },
          {
            callout: {
              kind: "warn",
              title: "Why we don't print the current meta",
              body: [
                "PvP is the most patched surface of the game: spell audits, banlists, and system reworks land multiple times a year. Strategy fundamentals below age well; any specific tier list printed here would be wrong by winter. Arena screens + current community discussion = your rules lawyer.",
              ],
            },
          },
        ],
      },
      {
        title: "The mindset shift from PvE",
        blocks: [
          "PvE rewards greed: stack buffs, one big turn. PvP punishes it — your opponent sees your setup and answers it. The arena is about **efficient exchanges**:",
          {
            list: [
              "**Pips are the score.** Spending 3 pips to erase their 6-pip play is winning, even though nothing died.",
              "**Shields beat heals** as damage prevention-per-pip; heals beat shields when pressure is already through. Learn which moment you're in.",
              "**Information is a resource** — what they've seen you cast shapes what they hold. Vary your lines.",
              "**Health is a currency**, not a scoreboard: taking a small hit to develop your position is often correct.",
              "**Win conditions** — go in with a plan ('outlast and out-heal', 'bait shields then spike') rather than casting whatever's biggest.",
            ],
          },
        ],
      },
      {
        title: "Your first ten matches",
        blocks: [
          {
            steps: [
              "Play Practice against random queue opponents — announce nothing, just feel real human timing.",
              "Build a PvP deck ([prep guide](/guides/pvp-deck-and-prep)) — it will look bizarre next to your PvE deck. That's correct.",
              "Enter Ranked and *expect* a rough placement stretch — the ladder is doing its job finding your level.",
              "After each loss, name one thing: 'I overextended into a shield', 'I never answered their pet heals'. One lesson per match compounds fast.",
              "Watch one good player of your school per session (streams/videos) and steal a single habit each time.",
            ],
          },
        ],
      },
      {
        title: "Etiquette & tilt control",
        blocks: [
          {
            list: [
              "Emote 'good luck', mean it, and report actual abuse — the arena community remembers regulars.",
              "Tilt-queueing donates rating: hard stop after two bad losses.",
              "Sportsmanship clause: no match is worth your evening. It's a cartoon wizard card game. (A brilliant one. But still.)",
            ],
          },
        ],
      },
    ],
    related: ["pvp-deck-and-prep", "blades-traps-and-stacking", "membership-and-crowns"],
  },

  {
    slug: "pvp-deck-and-prep",
    title: "PvP Prep: Gear, Pet & Deck Before You Queue",
    category: "pvp",
    difficulty: "advanced",
    blurb:
      "The preparation checklist serious arena players run: defensive stat floors, the PvP pet, deck architecture with answers, and side-tech that wins brackets.",
    tags: ["pvp gear", "pvp deck", "pet", "preparation"],
    updated: "July 2026",
    tldr: [
      "PvP gear inverts PvE logic: **resist, block, health, and pip consistency** climb the priority list; glass-cannon loadouts get farmed.",
      "The classic PvP pet leads with Spell-Proof + Spell-Defying (resist), then block/health/may-cast utility.",
      "Decks carry **answers**, not just threats: shields, dispels, weakness, cleanse — a response for each thing your school fears.",
      "Arena tickets buy dedicated PvP gear from arena vendors — a parallel gear track to your PvE checkpoints.",
      "Prep is school-specific and meta-sensitive; the checklist below is the stable skeleton to hang current tech on.",
    ],
    sections: [
      {
        title: "Gear: the defensive floor",
        blocks: [
          {
            list: [
              "**Universal resist** — every point shrinks all incoming damage; the arena's most contested stat.",
              "**Critical block** — crits swing duels; block rating is the tax you pay to not lose to dice.",
              "**Power pip %** — consistency of your curve; dead rounds lose games.",
              "**Health** — the buffer that turns their spike into a survivable mistake.",
              "**Pierce & damage** — still needed (you must eventually win), but they come *after* the floor is set.",
              "Sources: your era's checkpoint sets often have defensive variants; arena-ticket vendor gear targets PvP statlines directly; crafted and event gear fill holes. Compare in the Bazaar-era spirit: totals, not names.",
            ],
          },
        ],
      },
      {
        title: "The PvP pet",
        blocks: [
          "Where the PvE pet says 'more damage', the PvP pet says 'you may not kill me':",
          {
            list: [
              "**Core:** Spell-Proof + Spell-Defying (~15% combined resist).",
              "**Then:** critical block talents, health boosts (Health-Gift family), or a defensive may-cast.",
              "**May-cast heals** are lovely but script-visible — good opponents play around them; don't build your plan on the pet's dice.",
              "Breeding path is identical to [the standard loop](/guides/pet-hatching-guide) with a different shopping list — kiosk-search resist-lead pets.",
            ],
          },
        ],
      },
      {
        title: "Deck architecture: threats + answers",
        blocks: [
          {
            table: {
              headers: ["Deck section", "Contents", "Purpose"],
              rows: [
                ["Threats", "Your kill package: bladed spike or sustained pressure line", "The reason they must respond to you"],
                ["Answers", "Shields (incl. Tower), dispels, Weakness-family charms, charm/ward removal", "One answer per thing your school loses to"],
                ["Sustain", "Heals or absorbs sized to the bracket; cleanse for DoTs", "Convert their failed pushes into your tempo"],
                ["Utility", "Pierce/steal tech, pip manipulation, reshuffle at some brackets", "The 5% of cards that decide mirror matches"],
              ],
              caption:
                "Ranked's ruleset constrains card sources (no TCs) — everything must live in your trained/item kit, which is why PvP players agonize over training points.",
            },
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Steal deck skeletons from current top-ladder players of your school and bracket (community sites publish them), then *personalize the answer slots* to what actually beats you. Your loss journal writes your deck.",
              ],
            },
          },
        ],
      },
      {
        title: "The pre-queue checklist",
        blocks: [
          {
            steps: [
              "Gear loadout saved (separate from your PvE set — never queue in farming gear).",
              "Pet swapped to the resist pet.",
              "Deck matches the current ruleset (the arena screen validates — fix flags before, not during).",
              "You know this week's patch notes headline (a nerfed spell you rely on is better learned now).",
              "Two-loss stop rule armed. Queue.",
            ],
          },
        ],
      },
    ],
    related: ["pvp-basics", "pet-talents-that-matter", "training-points-guide"],
  },
];
