import type { Guide } from "@/lib/types";

export const levelingGuides: Guide[] = [
  {
    slug: "world-order-and-leveling",
    title: "World Order & Leveling: The Full Roadmap",
    category: "leveling",
    difficulty: "beginner",
    blurb:
      "Every world in order with level ranges, what each arc is about, when to detour into side worlds, and how to never be underleveled.",
    tags: ["worlds", "leveling", "roadmap", "story arcs", "level ranges"],
    updated: "July 2026",
    tldr: [
      "Follow the main storyline and the worlds order themselves: Wizard City → Krokotopia → Marleybone → MooShu → Dragonspyre completes Arc 1 (levels ~1–50). The rhythm after that: one world per 10 levels.",
      "Arc 2 (Celestia → Khrysalis) covers 50–100. Arc 3 (Polaris → Empyrea) covers 100–130. Arc 4 (Karamelle → Wallaru) covers 130–170. Arc 5 opened in late 2025 with the Darkmoor world (170–180, the current cap).",
      "Feeling underleveled? Detour into side content — Grizzleheim (20+), Wysteria (25+), Wintertusk (after Grizzleheim) — instead of grinding mobs.",
      "Do every world's Zeke quest for training points as you pass through.",
      "A visual version of this list lives on the [Worlds page](/worlds).",
    ],
    sections: [
      {
        title: "How progression works",
        blocks: [
          "Wizard101's main story is one long quest line. Finish a world's final quest and you're pointed at the next world automatically. There's no level *requirement* to enter story worlds — the quest chain is the requirement — but each world assumes a rough level range, and drifting far below it makes fights slow and painful.",
          "Main-story quests give giant XP; side quests give slivers. The practical translation: **mainline until you struggle, then side-quest until you don't.**",
          {
            callout: {
              kind: "tip",
              title: "The pacing rule of thumb",
              body: [
                "You want to *finish* each world at or slightly above the start of the next world's range (table below). If you're two-plus levels behind, take a side-world detour before continuing — future-you will be grateful.",
              ],
            },
          },
        ],
      },
      {
        title: "Arc 1 — The Malistaire saga (levels ~1–50)",
        blocks: [
          "The classic arc: your school's fallen professor, Malistaire Drake, is trying to resurrect his wife by unmaking the Spiral, and five worlds stand between you and him.",
          {
            table: {
              headers: ["World", "Rough levels", "Vibe & what matters"],
              rows: [
                ["Wizard City", "1–10", "Home base. Learn combat, meet the schools, clear the streets. Fishing/crafting/monstrology intros unlock here around level 12."],
                ["Krokotopia", "10–20", "Desert pyramids and the Krok empire. Visit Niles on the Krokosphinx for elemental/spirit blades; the Bazaar back home becomes your gear shop. (A 2024 update rebuilt this world visually and added the Selenopolis zone — a level-50 bridge story you'll return for.)"],
                ["Marleybone", "20–30", "Victorian dog-detective city. Rooftop navigation, tougher street mobs, and the infamous Big Ben tower finale."],
                ["MooShu", "30–40", "Serene East-Asian-inspired world with corrupted emperors. Long but pretty; your healing and AoE spells mature here."],
                ["Dragonspyre", "40–50", "Ruined volcanic war-world. Arc 1 finale: labyrinths, the Great Spyre, and Malistaire himself. Your level-48 school spell quest happens here too."],
              ],
              caption: "Level ranges are the community's practical guideposts (one world per ~10 levels), not hard gates.",
            },
          },
        ],
      },
      {
        title: "Arc 2 — Morganthe (levels ~50–100)",
        blocks: [
          "The Shadow Queen Morganthe's arc doubles down on everything: mob health, cheat bosses, and story stakes. This is where the training wheels come off.",
          {
            table: {
              headers: ["World", "Rough levels", "Vibe & what matters"],
              rows: [
                ["Celestia", "50–60", "Sunken sci-fi Atlantis. Introduces the **Astral schools** (Sun/Star/Moon) — start buying damage enchants immediately. Waterworks unlocks at 60 back in Wizard City."],
                ["Zafaria", "60–70", "Savanna world. Mobs start hitting harder in packs; your AoE game matters."],
                ["Avalon", "70–80", "Arthurian Britain with a wyrm-sized twist. Fan-favorite story; solid gear steps."],
                ["Azteca", "80–90", "Dinosaur apocalypse. Widely considered the arc's difficulty spike — bring friends or henchmen for the endgame gauntlet."],
                ["Khrysalis", "90–100", "Morganthe's insect empire. Long (two chapters), dark, and satisfying; **Shadow magic** unlocks near the end. Castle Darkmoor gear farming begins at 100."],
              ],
            },
          },
          {
            callout: {
              kind: "info",
              body: [
                "At level 50 and 100 you'll see one-shot 'skip' elixirs sold. Skipping robs you of gear, training points, and mechanical practice — nearly every veteran recommends leveling at least your first wizard by hand.",
              ],
            },
          },
        ],
      },
      {
        title: "Arc 3 — The Old One & beyond (levels ~100–130)",
        blocks: [
          {
            table: {
              headers: ["World", "Rough levels", "Vibe & what matters"],
              rows: [
                ["Polaris", "100–110", "Napoleonic penguins and walrus revolutionaries. Shorter, funny, brilliant. Shadow-enhanced spells become routine."],
                ["Mirage", "110–120", "Arabian-nights desert of spies and cats. Tough mobs; excellent story."],
                ["Empyrea (Parts 1 & 2)", "120–130", "Psychedelic sky-world where Arc 3's cosmic storyline lands its finale. Emotional gut-punch ending, no spoilers."],
              ],
            },
          },
          "After Empyrea, the **Catacombs** under Wizard City opens as a max-level dungeon zone (Dragoon gear) — a sign you've reached the endgame community's playground.",
        ],
      },
      {
        title: "Arc 4 — The Cabal years (levels ~130–170)",
        blocks: [
          {
            table: {
              headers: ["World", "Rough levels", "Vibe & what matters"],
              rows: [
                ["Karamelle", "130–140", "A candy world with a surprisingly sinister aftertaste."],
                ["Lemuria", "140–150", "Lost-continent mystery; the Cabal storyline deepens. Guild **raids** (12-wizard bosses) enter the game this era."],
                ["Novus", "150–160", "Surreal, abstract, end-of-the-map energy."],
                ["Wallaru", "160–170", "Australian-inspired world that closes out the arc."],
              ],
            },
          },
        ],
      },
      {
        title: "Arc 5 — Darkmoor rising (levels ~170–180, the current cap)",
        blocks: [
          "In November 2025 the Spiral got its newest world — and it's a familiar name: **Darkmoor**, the gothic-horror homeland of the infamous level-100 castle, expanded into a full world that opens Arc 5 and raises the level cap to **180** (the current maximum as of this guide's snapshot).",
          {
            list: [
              "Don't confuse the two Darkmoors: **Castle Darkmoor** is the classic level-100 dungeon; **Darkmoor the world** is the 170–180 Arc 5 opener.",
              "Its 180 gear splits into offense (**Abomination**) and defense (**Monster Hide**) philosophies — the era's loadout decision.",
              "Between Wallaru and Darkmoor, a 2024 update also added **Selenopolis** (a story zone inside revamped Krokotopia) and the **Magic Weaving** spell-progression system — the game keeps growing between worlds, not just with them.",
              "New worlds usually land in fall updates and raise the cap ~10 levels; check in-game news for anything newer than this table.",
            ],
          },
        ],
      },
      {
        title: "Side worlds: when to detour",
        blocks: [
          {
            table: {
              headers: ["Side world", "Unlocks", "Do it when…", "Payoff"],
              rows: [
                ["Grizzleheim", "Level 20 (Ambrose's quest 'Grizzleheim')", "During Marleybone/MooShu lulls", "XP, gear, and it seeds Wintertusk"],
                ["Wysteria", "Level 25 (Ambrose's 'To The Registrar')", "Any Arc 1 slow patch", "Quick XP burst, fun tournament story"],
                ["Wintertusk", "After finishing Grizzleheim (Ambrose's 'Cold News'; tuned for 40+)", "Late Dragonspyre / early Celestia", "Big XP and the famous level-55 bonus spells (Talos, Availing Hands…) — [full guide](/guides/grizzleheim-and-wintertusk)"],
                ["Aquila dungeons", "Levels 30 / 70 / 90 (Cyrus Drake's quests)", "Exactly at those levels", "Mount Olympus, Atlantea, and Tartarus drop era-defining gear"],
                ["Catacombs & key bosses", "Level 130 (under Wizard City)", "Max-level gear pushes", "Dragoon gear, spellements, and the endgame community's playground"],
              ],
            },
          },
          "Full breakdown of what's skippable vs essential: [Side Content Worth Doing](/guides/side-content-worth-doing).",
        ],
      },
      {
        title: "If you're underleveled (or bored)",
        blocks: [
          {
            list: [
              "**Underleveled:** clear your current world's side quests first (they're level-appropriate), then Grizzleheim/Wysteria/Wintertusk.",
              "**Bored of questing:** rotate systems — an evening of [gardening](/guides/gardening-101), [pet training](/guides/pets-101), or [fishing](/guides/fishing-101) still advances your account.",
              "**Stuck on a boss:** it's almost never your level — it's deck and buffs. Reread [Blades & Traps](/guides/blades-traps-and-stacking), or use Team-Up.",
              "**Playing with a friend of a different level:** the higher wizard can always sigil-join the lower one's fights; XP flows to quest-holders.",
            ],
          },
        ],
      },
    ],
    related: [
      "side-content-worth-doing",
      "grizzleheim-and-wintertusk",
      "questing-faster",
      "gear-guide-levels-1-50",
    ],
  },

  {
    slug: "side-content-worth-doing",
    title: "Side Content Worth Doing (and What to Skip)",
    category: "leveling",
    difficulty: "beginner",
    blurb:
      "Zeke training points, side worlds, Aquila dungeons, crafting quests — ranked by payoff so you spend detour time where it counts.",
    tags: ["side quests", "zeke", "wysteria", "aquila", "training points"],
    updated: "July 2026",
    sections: [
      {
        title: "The tier list",
        blocks: [
          {
            table: {
              headers: ["Content", "Priority", "Why"],
              rows: [
                ["Prospector Zeke quests (every world)", "Always", "One full training point per world. Non-negotiable."],
                ["Grizzleheim → Wintertusk", "Always", "Massive XP + the level-55 bonus school spells."],
                ["Mount Olympus (level 30)", "Always", "Best gear of the entire 30–50 stretch for a 20-minute dungeon."],
                ["School spell quests (professor quests at 48, 58, etc.)", "Always", "Your signature spells. Never skip a professor's summons."],
                ["Crafting quest chain (one per world)", "Strongly recommended", "Unlocks each world's crafting rank — future-you needs this for endgame recipes. Cheap to do as you pass through."],
                ["Wysteria", "Strongly recommended", "Fast XP at 25+, a training point from its Zeke-equivalent, fun story."],
                ["Tartarus / Atlantea (levels 90 / 70)", "Strongly recommended", "Hades and Poseidon gear are era staples — see [gear progression](/guides/gear-progression-60-to-max)."],
                ["Regular in-world side quests", "Situational", "Do them when underleveled or completionist; XP-per-minute is mediocre."],
                ["Skeleton key bosses", "Situational", "Great loot at the right levels — [key guide](/guides/skeleton-keys-guide) — but need keys and usually a team."],
                ["Fishing/monstrology grinds mid-story", "Optional", "Lovely hobbies, poor leveling value. Save for breaks."],
              ],
            },
          },
        ],
      },
      {
        title: "Zeke: one training point per world, every world",
        blocks: [
          "Prospector Zeke (and his companion Eloise, who runs a parallel reagent-collect quest) stands near each world's entry hub. His quest is always the same shape: find a set of hidden collectibles scattered across the world's zones, get **one training point**.",
          {
            list: [
              "Grab Zeke's quest **the moment you land in a world**, so collectibles you walk past during normal questing count as you go.",
              "Several collectibles hide in dungeon-only or easily-missed rooms; a quick per-world video/map lookup at the end saves real time.",
              "Eloise's reagent quests reward useful stitching/crafting items — lower priority, same \"grab early\" logic.",
              "Lifetime, Zeke quests are worth a double-digit pile of training points — a huge slice of your [training point budget](/guides/training-points-guide).",
            ],
          },
        ],
      },
      {
        title: "The Aquila dungeons: gear checkpoints",
        blocks: [
          "Aquila (a Greek-mythology side realm attached to Wizard City's docks) hosts three legendary dungeons, each an intentional gear checkpoint:",
          {
            table: {
              headers: ["Dungeon", "Level", "Boss", "The prize"],
              rows: [
                ["Mount Olympus", "30+", "Zeus & the Olympians", "The 'Zeus set' — hat/robe/boots that outclass everything until the 50s"],
                ["Atlantea", "70+", "Poseidon", "Strong 70-era pieces to bridge Waterworks → Hades"],
                ["Tartarus", "90+", "Hades the Unseen", "Hades gear: the standard loadout for 90–100 until Darkmoor"],
              ],
            },
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Mount Olympus is soloable by most schools at-level and *fast* to re-run. If a piece doesn't drop, run it again — it's one of the best farming-efficiency spots in the game. Details in the [1–50 gear guide](/guides/gear-guide-levels-1-50).",
              ],
            },
          },
        ],
      },
      {
        title: "Crafting quests: the detour that pays off years later",
        blocks: [
          "Each world has a crafting trainer with a short quest that raises your crafting *rank*. Ranks gate recipes — including some genuinely best-in-slot endgame gear and furniture. The quests are trivial early and increasingly annoying later, which is exactly why you do them **as you pass through each world** rather than backtracking at level 150.",
          "The full system — stations, reagents, transmutes, and which crafted gear actually matters — is covered in the [Crafting Guide](/guides/crafting-guide).",
        ],
      },
      {
        title: "What you can safely skip",
        blocks: [
          {
            list: [
              "**Most street side quests** once you're at-level — mainline XP dwarfs them.",
              "**Repeat pet minigame grinding** during leveling — train pets during member-benefit weekends instead.",
              "**PvP before you care about it** — nothing there is required for PvE progression.",
              "**Housing/furniture collecting** — a wonderful money pit for *later* you.",
              "Skipping is reversible: every side world and dungeon stays available forever, and overleveled returns are lightning fast.",
            ],
          },
        ],
      },
    ],
    tldr: [
      "Always: Zeke's training-point quest in every world, Grizzleheim→Wintertusk, Mount Olympus at 30, and your professor's spell quests.",
      "Strongly: each world's crafting quest as you pass through (endgame recipes are rank-gated), Wysteria at 25+, Tartarus at 90.",
      "Regular side quests are for when you're underleveled — mainline XP dwarfs them otherwise.",
      "Everything is backtrackable later; nothing is missable forever.",
    ],
    related: ["world-order-and-leveling", "training-points-guide", "grizzleheim-and-wintertusk"],
  },

  {
    slug: "grizzleheim-and-wintertusk",
    title: "Grizzleheim & Wintertusk: The Detour Everyone Should Take",
    category: "leveling",
    difficulty: "beginner",
    blurb:
      "The Norse-inspired side worlds that quietly hand out huge XP, great gear steps, and bonus school spells — here's when to go and what to grab.",
    tags: ["grizzleheim", "wintertusk", "side worlds", "level 55 spells"],
    updated: "July 2026",
    tldr: [
      "Grizzleheim unlocks at level 20 (Merle Ambrose summons you); Wintertusk unlocks once Grizzleheim's story is done, via Ambrose's quest 'Cold News'. Together they're the best XP-per-hour side content in the game.",
      "These worlds award **bonus school spells** via Baldur Goldpaws in Olde Town: a level-35 spell from Grizzleheim (Fuel, Supercharge, Triage…) and the famous level-55 spell from Wintertusk (Talos, Availing Hands, Frozen Armor…).",
      "Ideal timing: nibble Grizzleheim during Marleybone/MooShu, then clear Wintertusk during late Dragonspyre or early Celestia.",
      "Couch Potato seeds (the mega-snack plant) drop from Grizzleheim mobs — relevant the moment you start [gardening](/guides/gardening-101).",
      "Wintertusk's Halfang is the game's classic [gold farm](/guides/gold-farming-guide).",
    ],
    sections: [
      {
        title: "What these worlds are",
        blocks: [
          "Grizzleheim is a Norse-myth world of bear, wolf, and raven clans; Wintertusk is its darker second act, where Grandmother Raven's frozen wrath threatens everything. They're *side* worlds: optional, parallel to the main story, and tuned generously — mobs are slightly easier than main-story equivalents while quest XP stays strong.",
          {
            callout: {
              kind: "lore",
              body: [
                "Arc-wise these worlds matter more than 'side' suggests: Grandmother Raven and Old Cob's story threads planted here bloom in Arc 3. Players who skipped Wintertusk hit Empyrea's finale missing half the emotional context.",
              ],
            },
          },
        ],
      },
      {
        title: "When to go (the efficient schedule)",
        blocks: [
          {
            steps: [
              "**~Level 20:** Accept Merle Ambrose's summons to Grizzleheim. Do the first zones whenever Marleybone drags — it's a pleasant change of pace with solid XP.",
              "**Levels 25–35:** Continue Grizzleheim in chunks between MooShu chapters. Finishing the world around the high 30s is perfect.",
              "**~Level 40:** Wintertusk's opening becomes available once Grizzleheim's story is done. Park it.",
              "**Levels 48–55 (late Dragonspyre / early Celestia):** Clear Wintertusk properly. The XP often carries you across an entire main-world level gap, and you finish right as its spell rewards become usable.",
              "**Level 55+:** Return to Baldur Goldpaws for the level-55 spell quest (you'll need your level-35 spell and Sudrilund progress) — then enjoy the upgrade for the rest of Arc 2.",
            ],
          },
        ],
      },
      {
        title: "The bonus spells (levels 35 & 55) — verified list",
        blocks: [
          "Both worlds feed a special quest line from **Baldur Goldpaws in Olde Town** (Wizard City). Complete the requirements and your school gets a bonus spell — one at level 35 tied to Grizzleheim, one at level 55 tied to Wintertusk. These are mostly *utility* spells rather than nukes, and several are quietly kit-defining:",
          {
            table: {
              caption:
                "The level-55 quest ('Su Su Sudrilund' era) requires having the level-35 spell and questing to Sudrilund in Wintertusk.",
              headers: ["School", "Level 35 (Grizzleheim)", "Level 55 (Wintertusk)"],
              rows: [
                ["Fire", "Fuel (triple trap for your burns)", "Power Link (heal-over-time link)"],
                ["Ice", "Legion Shield (team shield)", "Frozen Armor (absorb)"],
                ["Storm", "Supercharge (pips → blades)", "Insane Bolt (huge gamble bolt — the meme lives)"],
                ["Myth", "Shatter (wipe ALL enemy shields)", "Talos (a genuinely excellent minion)"],
                ["Life", "Triage (remove a DoT)", "Brilliant Light (heal support)"],
                ["Death", "Dark Pact (self-trap → blade)", "Virulent Plague (mass debuff)"],
                ["Balance", "Elemental/Spirit Defuse (trap removal)", "Availing Hands (strong heal-over-time)"],
              ],
            },
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Standouts worth planning around: **Shatter** (Myth) deletes turtle bosses, **Talos** (Myth) is arguably the best minion in the game, **Availing Hands** (Balance) patches Balance's healing, and **Fuel + burns** (Fire) is a whole playstyle. Storm's Insane Bolt can hit *you* — cast it for the story, keep it for the laughs.",
              ],
            },
          },
        ],
      },
      {
        title: "What else you're there to collect",
        blocks: [
          {
            list: [
              "**XP, in slabs** — Wintertusk especially is famous for how far it fast-forwards the Celestia-era grind.",
              "**A training point** from Grizzleheim's Zeke-equivalent collectible quest (and one in Wintertusk too) — see [side content](/guides/side-content-worth-doing).",
              "**Couch Potato seeds** — drop from Grizzleheim-area mobs; the backbone of the mega-snack economy in [gardening](/guides/best-plants-to-grow).",
              "**Craftable gear recipes** — Wintertusk-era crafted gear (level ~56) is a respected free alternative if Waterworks farming bores you.",
              "**Gold** — Wintertusk's Halfang Bristlecrown fight is the traditional 'I need 100k gold tonight' answer.",
            ],
          },
        ],
      },
      {
        title: "Difficulty notes",
        blocks: [
          "Neither world is dangerous at the recommended levels, with two caveats:",
          {
            list: [
              "Wintertusk's final dungeons feature bosses with real health pools and support minions — bring your boss deck (Feint, backup hit, a heal), not your street-mob deck.",
              "The bonus-spell quests can include solo-ish fights (the level-55 one happens behind Sudrilund's dragon gates); if one wall-stops you, return two levels later and it evaporates.",
            ],
          },
        ],
      },
    ],
    related: ["side-content-worth-doing", "world-order-and-leveling", "gold-farming-guide", "best-plants-to-grow"],
  },
];
