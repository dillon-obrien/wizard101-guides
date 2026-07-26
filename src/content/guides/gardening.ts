import type { Guide } from "@/lib/types";

export const gardeningGuides: Guide[] = [
  {
    slug: "gardening-101",
    title: "Gardening 101: Ten Minutes a Day to Riches",
    category: "gardening",
    difficulty: "beginner",
    blurb:
      "How gardening works — plots, likes, needs, elder harvests — and the daily routine that quietly funds your pets, gold, and crafting forever.",
    tags: ["gardening", "plants", "energy", "elder harvest", "basics"],
    updated: "July 2026",
    tldr: [
      "Gardening = plant seeds at your house, tend their needs with energy each day, and collect increasingly good harvests as they age.",
      "The jackpot is the **elder harvest**: the final, biggest reward, which usually returns seed(s) so the garden sustains itself.",
      "Plants have **likes** (nearby items/plants that speed growth) — stacking likes is most of the skill.",
      "Ten minutes a day is genuinely enough. Gardening is the engine behind mega snacks ([pets](/guides/pets-101)), steady gold, and rare reagents like amber.",
      "Start small: a plot of Pink Dandelions teaches the loop; [Couch Potatoes](/guides/best-plants-to-grow) are the goal.",
    ],
    sections: [
      {
        title: "The core loop",
        blocks: [
          {
            steps: [
              "Do the short gardening intro quest in Wizard City (Golem Court's gardening trainer) — it teaches the basics and sells your first spells.",
              "At your house, cast a **plot spell** (small/medium/large soil) and plant a seed in it.",
              "Each day, check the plant: icons above it show **needs** (water, sunlight, music, pest removal…). Cast the matching utility spell — each cast costs energy.",
              "Needs met → the plant progresses: Seedling → Young → Mature → **Elder**. Mature plants give periodic harvests; the elder harvest is the big payout and usually returns seeds.",
              "Replant, and the wheel turns. Established gardens output snacks/gold/reagents daily for minutes of upkeep.",
            ],
          },
          {
            callout: {
              kind: "warn",
              body: [
                "Neglected plants wilt and eventually die (progress lost, seed at risk). If you're traveling, harvest-and-pause or accept losses — or grow low-maintenance plants. Gardening rewards rhythm, not marathons.",
              ],
            },
          },
        ],
      },
      {
        title: "Likes: the multiplier most beginners miss",
        blocks: [
          "Every seed lists **likes** — specific housing items, other plants, or conditions. Each distinct like near the plant boosts growth speed (and pest resistance). A garden with stacked likes races through stages days faster than a bare plot.",
          {
            list: [
              "Likes have an aura radius — cluster plants tightly around the liked items so one item covers many plants.",
              "Common cheap likes include specific furniture pieces, tapestries, and fellow plant species — check each seed's card.",
              "Some houses themselves are gardening-friendly (the farm-style house is a community favorite for its flat, open plots).",
              "Dislikes exist too and slow growth — read the card before decorating.",
            ],
          },
        ],
      },
      {
        title: "Energy math and ranks",
        blocks: [
          {
            list: [
              "Every utility cast costs energy from the same pool as [pet training](/guides/pets-101) and fishing. Bigger gardens = real energy budgets — this is why veterans own **energy gear** outfits.",
              "Gardening actions grant gardening XP → **ranks** → better spells: bigger plots, multi-plant utilities (one cast waters a whole area), and higher-rank seeds become plantable.",
              "Higher-rank utility spells that hit a full area are the difference between gardening 5 plants and 50 — prioritize learning them as they unlock.",
              "Seeds have rank requirements; Couch Potatoes and friends need a few days of casual rank-up first. That's the tutorial tax.",
            ],
          },
        ],
      },
      {
        title: "Your first week, concretely",
        blocks: [
          {
            steps: [
              "Day 1: finish the intro quest; buy small plots and basic utilities; plant a row of cheap seeds (Pink Dandelions or similar starter snacks plants).",
              "Days 2–4: tend daily; you'll hit the first elder harvests and a couple of gardening ranks.",
              "Day 5: buy medium plots + the area-effect utilities you've unlocked; plant a dozen seeds; add their likes.",
              "Weekend: acquire Couch Potato seeds (Grizzleheim drops or the Bazaar's seed tab) and switch your garden to the [snack economy](/guides/best-plants-to-grow).",
              "Forever after: 5–10 minutes a day. Your pets, wallet, and crafting bench now have a pension plan.",
            ],
          },
        ],
      },
    ],
    related: ["best-plants-to-grow", "pets-101", "gold-farming-guide"],
  },

  {
    slug: "best-plants-to-grow",
    title: "The Best Plants to Grow (Snacks, Gold & Amber)",
    category: "gardening",
    difficulty: "intermediate",
    blurb:
      "Couch Potatoes, Evil Magma Peas, Ultra King Parsley and friends — what each is for, where to get seeds, and sample garden setups.",
    tags: ["couch potatoes", "evil magma peas", "king parsley", "amber", "mega snacks"],
    updated: "July 2026",
    tldr: [
      "**Couch Potatoes** are the backbone: reliable mega snacks for pet training, seeds farmable from Grizzleheim mobs or the Bazaar.",
      "**Evil Magma Peas** are the premium snack plant — outstanding harvests, scarcer seeds (drops/packs/gifting).",
      "**King Parsley → Ultra King Parsley** is the amber pipeline — the rare reagent behind coveted crafted spells.",
      "Starter tier: Pink Dandelions and similar cheap seeds teach the loop and feed young pets adequately.",
      "Whatever you grow: stack likes, harvest at elder, replant the returned seeds. Self-sustaining or bust.",
    ],
    sections: [
      {
        title: "The headliners",
        blocks: [
          {
            table: {
              headers: ["Plant", "Grows for you", "Seeds from", "Notes"],
              rows: [
                [
                  "Couch Potatoes",
                  "Mega snacks (pet training fuel)",
                  "Grizzleheim-area mob drops; Bazaar seed tab (restocks constantly)",
                  "The community's default garden. A stable Couch Potato patch ≈ permanent free pet training.",
                ],
                [
                  "Evil Magma Peas",
                  "Top-tier mega snacks",
                  "Rare drops and crowns packs; often gifted/traded via friends",
                  "Better output than potatoes, harder to source. Endgame gardeners run both.",
                ],
                [
                  "King Parsley / Ultra King Parsley",
                  "Amber (rare reagent) from the Ultra variant",
                  "King Parsley from vendors/Bazaar; Ultra seeds emerge from elder King Parsley luck",
                  "Amber gates several famous crafted spells — this garden is a long-term investment.",
                ],
                [
                  "Pink Dandelions",
                  "Cheap snacks, fast cycles",
                  "Bazaar / vendors, pennies",
                  "The tutorial plant. Graduate when ranks allow.",
                ],
              ],
              caption:
                "Seed availability shifts with events and updates — the Bazaar's seed tab is your ground truth.",
            },
          },
        ],
      },
      {
        title: "Sample gardens by goal",
        blocks: [
          {
            list: [
              "**'I'm training my first real pet':** one large plot ringed with Couch Potatoes + their likes. Feed every mega snack; sell nothing.",
              "**'I want passive gold':** potatoes still work (sell surplus snacks), plus any plant whose harvests vendor well; gardening gold is steady rather than spectacular — pair with the [gold guide](/guides/gold-farming-guide).",
              "**'I'm crafting a lore spell someday':** a dedicated King Parsley patch, promoting every Ultra seed immediately. Amber accumulates slowly; start early.",
              "**'I garden during my coffee':** one medium plot, low-need plants, likes maxed. Sustainable beats impressive.",
            ],
          },
        ],
      },
      {
        title: "Elder-harvest discipline",
        blocks: [
          {
            list: [
              "Never sell the seeds an elder harvest returns — replanting them *is* the economy.",
              "Harvest elders promptly; a garden of ready-elders is capital sitting idle.",
              "Time big replants before double-gardening-reward member benefit weekends when possible.",
              "Track energy: a full potato garden's daily needs should fit your pool with room for pet games. If it doesn't, shrink the garden or buy energy gear — wilting losses cost more than modesty.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "The endgame of gardening is boring on purpose: the same likes-stacked layout, harvested daily, for months. Boring is what compounding looks like.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gardening-101", "pet-hatching-guide", "reagent-farming-guide"],
  },
];
