import type { Guide } from "@/lib/types";

export const systemsGuides: Guide[] = [
  {
    slug: "fishing-101",
    title: "Fishing 101: Lures, Luck & Chest Goblins",
    category: "systems",
    difficulty: "beginner",
    blurb:
      "How fishing works, why school lures matter, what fish are actually for, and the chest drops that make it more than a screensaver.",
    tags: ["fishing", "lures", "energy", "chests"],
    updated: "July 2026",
    tldr: [
      "Fishing unlocks at **level 7** — Lucky Hookline calls you to the Commons pond in Wizard City to learn the basics.",
      "Every fish belongs to a school; you catch it with the matching school's **lure**. Wrong lure = ignored bobber.",
      "Casts cost energy (shared with pets/gardening). Fishing luck stats/elixirs and higher ranks improve results.",
      "Fish sell for gold, fill house aquariums, and power some crafting recipes; **chests** you reel in drop gear, reagents, and TCs.",
      "It's the game's calmest system — quest-break content with real, if modest, payouts.",
    ],
    sections: [
      {
        title: "The loop",
        blocks: [
          {
            steps: [
              "Learn fishing from **Lucky Hookline** by the Commons pond (he summons you at level 7) — the intro quest teaches casting and your first lure.",
              "At any fishable water, examine the fish shadows: size and behavior hint at species and rank.",
              "Cast the **lure matching the fish's school** (you learn more lure spells as your fishing rank grows). A reveal spell that shows fish schools is an early, essential purchase.",
              "When the bobber *fully* sinks, click to reel — early clicks lose the fish. The tension minigame is forgiving with practice.",
              "Keep, sell, or display your catch; rare fish and every chest are the paydays.",
            ],
          },
        ],
      },
      {
        title: "What fishing actually pays",
        blocks: [
          {
            list: [
              "**Gold** — common fish vendor decently; rare 'epic' catches vendor very well.",
              "**Chests** — reeled like fish, and the real lottery: gear (including some fishing-exclusive items), reagents, treasure cards.",
              "**Crafting inputs** — certain recipes (notably some housing and event items) want specific fish.",
              "**Aquariums** — house items that display live catches; the collector metagame.",
              "**Badges and ranks** — rank unlocks better lures and higher-tier fishing holes in later worlds.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Fish with intent: pick the pond that has the species/chest table you want (community fish location charts are excellent), pop luck boosts if you're hunting rares, and go do something else when energy runs dry. It's a rhythm hobby, not a grind.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gardening-101", "reagent-farming-guide", "housing-basics"],
  },

  {
    slug: "crafting-guide",
    title: "Crafting: From Cardboard Wand to Endgame Recipes",
    category: "systems",
    difficulty: "intermediate",
    blurb:
      "Stations, ranks, transmutes, and the crafted items that genuinely matter — plus why you do each world's crafting quest on the way through.",
    tags: ["crafting", "recipes", "stations", "transmutes"],
    updated: "July 2026",
    tldr: [
      "Start with Eudora Tangletree in Olde Town (Wizard City) in your early teens; each world's crafting trainer then offers a rank-up quest.",
      "**Ranks gate recipes.** Do every world's crafting quest as you pass — backtracking rank quests at endgame is misery.",
      "Recipes need reagents + the right **crafting station** (equipment, housing, jewel, card…). Stations live at your house.",
      "Genuinely-matters crafted items: era gear alternatives (Wintertusk-era set, various endgame sets), **lore spell recipes**, jewels, and prestige housing.",
      "Reagent supply is the real cost — see [Reagent Farming](/guides/reagent-farming-guide).",
    ],
    sections: [
      {
        title: "How the system fits together",
        blocks: [
          {
            list: [
              "**Recipes** are purchased from vendors (each world's crafting trainer + specialty vendors), then crafted at a matching **station** using reagents.",
              "**Ranks** (Novice → Apprentice → … → Legendary and beyond) come from each world's crafting quest; your rank gates which recipes you can buy/craft.",
              "**Cooldowns** existed historically on some crafts; modern quality-of-life has sanded most friction, but big recipes still ask for *piles* of reagents.",
              "**Transmutes** are recipes that convert reagents upward — the pressure valve for every scarce material.",
            ],
          },
          {
            callout: {
              kind: "warn",
              body: [
                "The rank quests escalate from 'craft two rings' to genuinely demanding scavenger hunts in later worlds. Doing each at-level, when its reagents surround you, converts a future wall into a ten-minute errand. This is the [side-content guide's](/guides/side-content-worth-doing) most repeated advice for a reason.",
              ],
            },
          },
        ],
      },
      {
        title: "What's worth crafting",
        blocks: [
          {
            table: {
              headers: ["Craft", "When", "Why"],
              rows: [
                ["Starter rings/athames", "While leveling", "Cheap rank XP; occasionally real upgrades pre-Bazaar luck"],
                ["Wintertusk-era gear set (~56)", "Level 56+", "The classic 'I refuse to farm Waterworks' alternative — respectable stats, deterministic cost"],
                ["**Lore spell recipes**", "Whenever you can afford them", "Permanent spells (Loremaster's table) via crafting instead of RNG — amber and rare reagents required, [pipeline here](/guides/best-plants-to-grow)"],
                ["Jewels", "Endgame", "Deterministic socket stats instead of drop-praying"],
                ["Endgame gear sets", "Max level, era-dependent", "Several recent-world crafted sets sit at or near best-in-slot — check current community lists"],
                ["Housing & furniture", "Forever", "The bottomless creative sink, including some spectacular set-pieces"],
              ],
            },
          },
        ],
      },
      {
        title: "A pragmatic crafting career",
        blocks: [
          {
            steps: [
              "Teens: do Eudora's intro, buy the basic station set for your house, craft whatever the quest demands.",
              "Each new world: find the crafting trainer during your first errand loop; clear the rank quest within that world's stay.",
              "Mid-game: start banking rare reagents you trip over (never vendor rares) and stand up the [King Parsley amber garden](/guides/best-plants-to-grow).",
              "Level ~56: decide Waterworks-farm vs craft-the-set based on your patience profile.",
              "Endgame: lore recipes, jewels, and whichever current crafted set your school covets. By now your reagent bank — not your rank — is the constraint, and past-you either helped or didn't.",
            ],
          },
        ],
      },
    ],
    related: ["reagent-farming-guide", "side-content-worth-doing", "best-plants-to-grow"],
  },

  {
    slug: "monstrology-guide",
    title: "Monstrology: Catch 'Em All, Wizard Edition",
    category: "systems",
    difficulty: "beginner",
    blurb:
      "Extract animus from defeated monsters to summon them as minions, house guests, and expel tricks — plus the gloriously weird Monstrodome.",
    tags: ["monstrology", "animus", "house guests", "monstrodome"],
    updated: "July 2026",
    tldr: [
      "Learn from Monstrologist Burke in Ravenwood (early levels). You cast **Extract** spells in combat to collect *animus* from monsters.",
      "Enough animus → craft that monster into a **summon treasure card**, a **house guest**, or an **Expel** (removes that creature type from a fight).",
      "Different extract spells cover different creature families (undead first; more families as your monstrology rank grows).",
      "The **Monstrodome** house item lets you spawn captured monsters as fightable duels at home — build-your-own farming arena.",
      "Pure completionist joy with fringe practical uses; the tome tracking every creature is the point.",
    ],
    sections: [
      {
        title: "The loop",
        blocks: [
          {
            steps: [
              "Grab Burke's intro quest **'Know Thine Enemy'** in Ravenwood; he teaches **Extract Undead** — your first collection tool.",
              "In any fight with a matching creature, cast the extract on it (costs a couple of pips; still lets the fight proceed).",
              "Defeat the creature; you bank animus for that specific monster. Repeat until its recipe threshold.",
              "At Burke, spend animus: summon TC, house guest (the monster wanders your castle!), or expel utility.",
              "Buy further extract spells (families like Insects, Spirits, etc.) as your monstrology rank rises. The tome in your spellbook tracks everything — that's the Pokédex.",
            ],
          },
        ],
      },
      {
        title: "Why bother?",
        blocks: [
          {
            list: [
              "**House guests** — the best flex in the housing metagame: your castle staffed by bosses you conquered.",
              "**The Monstrodome** — stock it with captured mobs and you've built a private, instant-access fight arena (veterans use it for pet-testing and niche farming).",
              "**Summon/Expel utility** — situational combat tools; expels can trivialize certain annoying encounters.",
              "**Because the tome has empty pages** and your brain wants them full. We understand. We're the same.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Passive habit version: park an extract card in your questing deck's sideboard and tag creatures during normal play. Rank drips in with zero dedicated grinding.",
              ],
            },
          },
        ],
      },
    ],
    related: ["housing-basics", "questing-faster", "team-up-and-dungeon-etiquette"],
  },

  {
    slug: "skeleton-keys-guide",
    title: "Skeleton Keys: The Doors Worth Opening",
    category: "systems",
    difficulty: "intermediate",
    blurb:
      "Wooden, stone, and gold keys; where they drop; and the optional key bosses hiding spellements, rare jewels, and some of the best loot-per-minute around.",
    tags: ["skeleton keys", "key bosses", "spellements", "loot"],
    updated: "July 2026",
    tldr: [
      "Locked doors across the Spiral open with **Wooden, Stone, or Gold skeleton keys**, revealing optional boss fights.",
      "Keys drop from daily activities, certain bosses/chests, events, and fishing — they accumulate passively, then you spend them deliberately.",
      "Key bosses are short single fights (with cheats!) dropping concentrated loot: **spellements**, rare jewels, pets, gear.",
      "Etiquette: key fights are shareable — one key opens the door for a full team, so groups take turns spending keys.",
      "Which boss for which reward shifts with updates; check a current community table before spending gold keys.",
    ],
    sections: [
      {
        title: "How keys work",
        blocks: [
          {
            list: [
              "Key doors sit in fixed spots in most worlds (dungeons, side rooms, that suspicious basement in Wizard City).",
              "Approach with the right key tier in your backpack → open → a themed boss room with a sigil fight.",
              "**One player's key admits the whole group** — the social contract is rotating who pays.",
              "Wooden keys are common, stone uncommon, gold precious; boss quality scales accordingly.",
              "Sources compound quietly: daily assignment streaks, event reward tracks, fishing chests, certain boss tables. Most players have keys they forgot about.",
            ],
          },
        ],
      },
      {
        title: "Why key bosses are efficient",
        blocks: [
          "A key boss is a 5–15 minute commitment with a loot table curated like a mini-raid: spellement bundles for specific spells, jewel rarities that barely exist elsewhere, occasional exclusive pets/mounts. Loot-per-minute, the good ones embarrass full dungeons — *if* you're hitting the boss whose table you actually want.",
          {
            callout: {
              kind: "tip",
              body: [
                "Treat gold keys like raid lockouts: pick the boss from a current drop-table list (community wikis maintain them), assemble a Team-Up or friends group, and spend several keys in one focused session. Randomly burning a gold key solo on an unresearched door is the classic waste.",
              ],
            },
          },
          {
            list: [
              "Key bosses cheat, in line with their tier — skim the script first ([cheat literacy](/guides/cheating-bosses-101)).",
              "Many scale or come in level variants; the same door can matter at 60 and at max.",
              "Spellement hunting (next guide) is the modern headline reason to care.",
            ],
          },
          {
            sub: "Three doors everyone eventually cares about",
          },
          {
            list: [
              "**Fellspawn** (the Catacombs) — the *only* boss that directly drops Dragoon gear pieces, skipping the crafting grind. See the [gear progression map](/guides/gear-progression-60-to-max).",
              "**Bunferatu** (Castle Darkmoor's Upper Halls) — key-gated vampire with Darkmoor-set extras, farmed alongside [Graveyard runs](/guides/darkmoor-gear-guide).",
              "**Aphrodite II** (a secret of the Graveyard) — source of the era's Tier 1 rings.",
            ],
          },
        ],
      },
    ],
    related: ["spellements-explained", "best-bosses-to-farm", "cheating-bosses-101"],
  },

  {
    slug: "spellements-explained",
    title: "Spellements: Upgrading Your Spells Themselves",
    category: "systems",
    difficulty: "intermediate",
    blurb:
      "The spell-upgrade currency explained: where spellements drop, how upgrade paths work, and a sane priority order for spending them.",
    tags: ["spellements", "spell upgrades", "progression"],
    updated: "July 2026",
    tldr: [
      "**Spellements** are per-spell upgrade tokens: collect enough for a spell and you can advance it through an upgrade path — better numbers, sometimes branching variants.",
      "Sources: events (a major one), [skeleton-key bosses](/guides/skeleton-keys-guide), certain boss tables (Loremaster!), packs, and reward tracks.",
      "Some spells are *obtained* via spellements from scratch; others just improve. Either way it's permanent character progression.",
      "Branching paths force a choice (e.g. damage-lean vs utility-lean variant) — chosen paths can be reset with a crowns item, so choose thoughtfully, not fearfully.",
      "Priority: your school's bread-and-butter attacks (especially the AoE you cast 100 times a day) before flashy off-school toys.",
    ],
    sections: [
      {
        title: "The mechanics",
        blocks: [
          {
            steps: [
              "Collect spellements for a specific spell (they're named — *Meteor Strike spellements*, etc.).",
              "Open the Spellbook's spellement/upgrade page; eligible spells show their path tree.",
              "Spend to advance tiers: each tier tweaks the card (damage, pip efficiency, added effects). Branch points pick a variant identity.",
              "The upgraded card replaces the base in your collection — every future cast benefits.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "Which spells have paths, and where their spellements drop, expands every few updates. The system started with lore/low-level spells and has been steadily eating the spell list — check the in-game page for current coverage.",
              ],
            },
          },
          {
            callout: {
              kind: "lore",
              title: "The newer sibling: Magic Weaving",
              body: [
                "Since late 2024 the game has also been rolling out **Magic Weaving** (with Spell Fusion) — a parallel spell-progression system introduced alongside the Selenopolis update, with higher ranks still being added through 2026. It's evolving fast enough that the in-game Magic Weaving screens are the best current reference; think of it as the next layer on the same 'grow your spells' philosophy spellements started.",
              ],
            },
          },
        ],
      },
      {
        title: "Spending priorities",
        blocks: [
          {
            list: [
              "**1. Your daily-driver AoE** — a tier on the spell you cast most is the best marginal power in the system.",
              "**2. Your single-target nuke / signature spells** — boss-killing throughput.",
              "**3. Utility you actually cast** (your blade, your shield line) — quality-of-life compounding.",
              "**4. Spellement-only spell acquisitions** your school covets (several metagame staples arrive this way now).",
              "**Last: hoarding.** Spellements sitting unspent while you quest with base spells is the one definite mistake.",
            ],
          },
          "Events with spellement reward tracks (see [Events Overview](/guides/events-overview)) are the steady faucet — casual participation keeps the pipeline full without dedicated grinding.",
        ],
      },
    ],
    related: ["skeleton-keys-guide", "events-overview", "best-bosses-to-farm"],
  },

  {
    slug: "events-overview",
    title: "Events & the Activity Calendar",
    category: "systems",
    difficulty: "beginner",
    blurb:
      "Deckathalon, Beastmoon, reward scrolls, holiday seasons — what each recurring event actually is and which are worth your week.",
    tags: ["events", "deckathalon", "beastmoon", "calendar"],
    updated: "July 2026",
    tldr: [
      "Wizard101 runs a rotating event calendar; most events are low-commitment reward tracks layered over a novel game mode.",
      "**Deckathalon**: solo tower climbs using treasure-card-only decks — a deckbuilding puzzle event with spellement/pet rewards.",
      "**Beastmoon**: team battles where you play as *monster forms* with their own decks — the game's alt-mode MOBA-ish thing; very fun, very different.",
      "**Reward scroll events** (battle-pass-style tracks) pay out for doing things you'd do anyway — always claim these.",
      "Holiday seasons (Halloween, winter, spring) bring quests, drops, and shop rotations. Nothing is mandatory; events are the game's seasoning.",
    ],
    sections: [
      {
        title: "The recurring cast",
        blocks: [
          {
            table: {
              headers: ["Event", "The mode", "Why show up"],
              rows: [
                [
                  "Deckathalon",
                  "School-themed tower; your normal spells are off — you climb with TC-only decks",
                  "Genuinely clever deck puzzles; spellements, jewels, and event pet rewards",
                ],
                [
                  "Beastmoon Hunt & Beastmoon Monster Mayhem",
                  "Team battles as craftable monster *forms* — Hunt is PvP, Monster Mayhem is the PvE wave-defense variant",
                  "A whole parallel progression (forms, Lunari currency, permanent form tiers); the best 'sick of my main deck' cure",
                ],
                [
                  "Reward scroll / pass events",
                  "Do daily activities, fill a track, claim tiers",
                  "Free crowns-tier goodies for existing habits — never skip claiming",
                ],
                [
                  "Time-capsule 'boxes' events",
                  "Mini-quests at drop-in locations across worlds",
                  "Spellements and unique loot for quick errands",
                ],
                [
                  "Seasonal holidays",
                  "Halloween towers, winter quests, spring rotations",
                  "Cosmetics, event pets/mounts, atmosphere",
                ],
              ],
              caption:
                "Schedules rotate monthly-ish and evolve yearly; the in-game event page is the calendar of record.",
            },
          },
        ],
      },
      {
        title: "A sane relationship with events",
        blocks: [
          {
            list: [
              "**Claim passively, engage selectively.** Log the reward tracks; deep-dive only the modes that spark joy.",
              "**Deckathalon rewards deck literacy** — ironically great training for [PvE deckbuilding](/guides/deck-building-basics).",
              "**Beastmoon is a real second game.** If the main grind ever stales, it's the sanctioned vacation.",
              "**Event currencies expire-ish** (shops rotate) — spend before a season closes.",
              "FOMO check: events return. The Spiral has run these carousels for years; missing a month costs a month, not a legacy.",
            ],
          },
        ],
      },
    ],
    related: ["spellements-explained", "deck-building-basics", "membership-and-crowns"],
  },

  {
    slug: "team-up-and-dungeon-etiquette",
    title: "Team-Up & Dungeon Etiquette: Don't Be That Wizard",
    category: "systems",
    difficulty: "beginner",
    blurb:
      "How the Team-Up kiosk works, the unwritten rules everyone assumes you know, and the role system that makes pickup groups feel professional.",
    tags: ["team up", "etiquette", "dungeons", "multiplayer"],
    updated: "July 2026",
    tldr: [
      "The **Team-Up kiosk** (in Olde Town, right outside the Bazaar) queues you with strangers for any dungeon/boss you've unlocked — and every dungeon sigil offers Team-Up on the spot too.",
      "Rule zero: **don't join, then vanish.** Fleeing/AFK mid-dungeon wastes three humans' half hour.",
      "Default strategy assumption: one hitter, everyone else blades/feints the hitter. First-round chat ('who's hitting?') sorts it in seconds.",
      "Port-to-friend also works as dungeon entry ('porting in') — same etiquette applies.",
      "Being pleasant is meta: the Spiral is small, farming groups re-form, and friendly wizards get re-invited.",
    ],
    sections: [
      {
        title: "Using Team-Up well",
        blocks: [
          {
            steps: [
              "Queue at the kiosk (Olde Town, beside the Bazaar) for your target, or hit Team-Up straight from the dungeon's sigil. Popular farms fill fast; obscure story dungeons can be slow off-peak. Modern updates even added level-range filters to the queue.",
              "While queued: set your deck for that content, refill potions, empty backpack space. Arriving ready is half the etiquette.",
              "First round: say hi, ask 'roles?' — thirty seconds of typing beats twenty minutes of chaos. Highest-damage school usually hits; others support.",
              "Fight with your role: supports blade the hitter (their blade on the hitter outdamages their own attack — [the math](/guides/blades-traps-and-stacking)), hitters communicate the kill turn.",
              "Finish the whole instance. If real life erupts, *say so* before leaving — one sentence preserves your reputation.",
            ],
          },
        ],
      },
      {
        title: "The unwritten rulebook",
        blocks: [
          {
            list: [
              "**Don't flee-and-return repeatedly** in cheat fights — re-entries can retrigger scripts and stagger the team. Coordinate resets.",
              "**Don't heal-spam over the hitter's setup** in heal-punishing fights; know the [cheat basics](/guides/cheating-bosses-101).",
              "**Don't rush sigils** before the group's ready-check — early sigil-sitting pressures slower players.",
              "**Do match pace** — if three players speed-run trash, the fourth shouldn't be opening every side chest solo (and vice versa: majority sets pace).",
              "**Do share knowledge kindly** — most 'bad' teammates are new. 'Blade me, I'll AoE turn 3' teaches an entire playstyle in one sentence.",
              "**Do thank the group.** Costs nothing; the friend-request that follows is how farming circles form.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Solo players: Team-Up *is* your endgame unlock. Waterworks, Darkmoor, raids-lite key bosses — all of it is pickup-able with patience and manners. The kiosk is the best social feature in the game wearing a utilitarian disguise.",
              ],
            },
          },
        ],
      },
    ],
    related: ["blades-traps-and-stacking", "cheating-bosses-101", "waterworks-gear-guide"],
  },

  {
    slug: "guilds-and-raids",
    title: "Guilds & Raids: The Spiral's Hardest Content",
    category: "systems",
    difficulty: "advanced",
    blurb:
      "The four endgame raids — Voracious Void, Crying Sky, Cabal's Revenge, and The Ghastly Conspiracy — plus how guilds, raid keys, and raid gear actually work.",
    tags: ["raids", "guilds", "endgame", "voracious void", "crying sky"],
    updated: "July 2026",
    tldr: [
      "**Raids** are the Spiral's hardest PvE: coordinated 12-wizard (and now 8-wizard) boss gauntlets run through **guilds**, with mechanics a Team-Up pickup group cannot brute-force.",
      "Four exist as of mid-2026: The Voracious Void (~150), The Crying Sky (160), Cabal's Revenge (170), and The Ghastly Conspiracy (170, the first 8-player raid, added 2025).",
      "Raids are accessed from guild houses (raid gates/keys) and reward exclusive gear sets that headline their level bands — Cabal's Revenge robes are era-famous at 170.",
      "You need a guild: join an active one recruiting in-game or via community Discords. Raiding is scheduled, role-assigned, voice-chat-flavored content — the closest Wizard101 gets to classic MMO raiding.",
      "Not required for story completion. Very required for 'I want the best robe in the game' completion.",
    ],
    sections: [
      {
        title: "Guilds in sixty seconds",
        blocks: [
          {
            list: [
              "Guilds are player organizations with a shared **guild house** — the social hub where raid content physically lives.",
              "Joining: get invited by a member. Finding one: ask in-game around raid-era zones, or (realistically) community Discords and the official forums, where guilds recruit constantly.",
              "Guild progression (activity, raid clears) unlocks perks and deeper raid access — active beats large when choosing one.",
              "No guild fits? Team-Up-style pickup raiding mostly doesn't exist; raids were designed as the organized-play pillar on purpose.",
            ],
          },
        ],
      },
      {
        title: "The four raids",
        blocks: [
          {
            table: {
              headers: ["Raid", "Level", "Size", "Setting & headline boss", "Signature loot"],
              rows: [
                [
                  "The Voracious Void",
                  "~150 (Lemuria era)",
                  "12",
                  "Reality-eating anomaly; final boss The Nullity",
                  "Nullity's Set & Void's Set (upgradeable at 160)",
                ],
                [
                  "The Crying Sky",
                  "160 (side quest 'Raid Island')",
                  "12",
                  "The Xibalba Wastes of comet-fallen Azteca; main boss Hunhau",
                  "Hunhau & Xibalba sets (170 versions came with Wallaru)",
                ],
                [
                  "Cabal's Revenge",
                  "170",
                  "12",
                  "An abandoned fort in Polaris; Divine Cabalist & Personal Daemon",
                  "Daemonic (crafted) / Unreal (dropped) — the era's best robes for most schools",
                ],
                [
                  "The Ghastly Conspiracy",
                  "170",
                  "8 (the first smaller-format raid)",
                  "Noir mystery at Malfeasance Plaza in Lemuria's Heap; Mr. Ghastly",
                  "Exclusive raid outfit & pets (added June 2025)",
                ],
              ],
              caption:
                "Raid rewards typically come via raid vendors/crafters using raid currencies and drops — clears fund the set over weeks, not one lucky chest.",
            },
          },
        ],
      },
      {
        title: "How raids differ from dungeons",
        blocks: [
          {
            list: [
              "**Mechanics-first design**: phases, assigned lanes/rooms, and coordination checks — the fights assume roles were planned *before* the sigil.",
              "**Preparation is gear + build + homework**: teams expect era gear ([progression map](/guides/gear-progression-60-to-max)), tuned decks per role, and familiarity with the fight script.",
              "**Scheduling is real**: 8–12 humans, set times, usually voice chat. The social contract of [Team-Up etiquette](/guides/team-up-and-dungeon-etiquette), professionalized.",
              "**Failure is normal**: progression raiding means wiping on purpose until the choreography clicks. Budget evenings, not minutes.",
              "**The reward is matching**: raid sets and titles are the visible proof of organized play — and genuinely best-in-slot pieces at their levels.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Not ready to raid but curious? The Catacombs, key bosses, and gauntlets are the training ladder — the same one-turn-kill and script-reading skills ([Cheating Bosses 101](/guides/cheating-bosses-101)) scale straight up into raid lanes.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gear-progression-60-to-max", "team-up-and-dungeon-etiquette", "cheating-bosses-101"],
  },

  {
    slug: "housing-basics",
    title: "Housing: Castles, Gauntlets & Castle Magic",
    category: "systems",
    difficulty: "beginner",
    blurb:
      "From dorm room to island fortress: buying houses, decorating economics, gauntlet houses that contain dungeons, and the scripting rabbit hole.",
    tags: ["housing", "castles", "gauntlets", "castle magic", "decorating"],
    updated: "July 2026",
    tldr: [
      "Everyone starts with a free dorm; real houses come from gold vendors (each world sells themed castles) or crowns/bundles.",
      "Houses hold your [gardens](/guides/gardening-101), crafting stations, pets, mounts display, and up to hundreds of furniture items.",
      "**Gauntlet houses** (mostly from bundles) contain actual scaling dungeons — a house that *is* content.",
      "**Castle Magic** is a full scripting system (trigger spells, logic items) — players build haunted mazes, puzzles, and minigames.",
      "Castle Tours lets you visit top-rated player homes for inspiration. Warning: decorating is a genuine second hobby with a genuine second budget.",
    ],
    sections: [
      {
        title: "Getting housed",
        blocks: [
          {
            list: [
              "**Dorm room** — free, small, yours from day one; fine for stations and a starter garden.",
              "**Gold houses** — each world's housing vendor sells small and large themed castles (a MooShu watergarden, a Dragonspyre fortress…). Attainable with normal [gold discipline](/guides/gold-farming-guide).",
              "**Crowns/bundle houses** — premium castles, often with perks: teleporters, fishing ponds, PvP sigils, or attached **gauntlet dungeons**.",
              "Multiple houses per wizard are allowed; the attic exists because furniture hoarding is universal.",
            ],
          },
        ],
      },
      {
        title: "Houses that do things",
        blocks: [
          {
            list: [
              "**Gardening estates** — flat-lawned houses are prized for [like-stacked mega-gardens](/guides/best-plants-to-grow).",
              "**Gauntlet houses** — place the gauntlet item and your house contains a real multi-boss dungeon, re-runnable with friends and level-scaling. Social farming HQ.",
              "**The Monstrodome** — [monstrology's](/guides/monstrology-guide) build-a-fight arena, at home.",
              "**PvP sigil homes** — private duel arenas for practice leagues among friends.",
              "**Castle Magic** — buy magic wands/detectors/reflectors from castle magic vendors and script behaviors: doors that open on spell-cast, music triggers, full haunted-house logic. It's a visual programming language hiding in a kids' MMO, and its community builds *escape rooms*.",
            ],
          },
          {
            callout: {
              kind: "lore",
              body: [
                "Castle Tours (the housing showcase kiosk) is the gallery: browse top-rated homes, steal ideas shamelessly, leave likes generously. The furniture economy — rare drops, crafted set-pieces, event exclusives — runs deeper than most gear economies. You were warned.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gardening-101", "monstrology-guide", "gold-farming-guide"],
  },
];
