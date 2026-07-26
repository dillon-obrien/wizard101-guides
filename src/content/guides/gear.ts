import type { Guide } from "@/lib/types";

export const gearGuides: Guide[] = [
  {
    slug: "gear-guide-levels-1-50",
    title: "Gear Guide: Levels 1–50 (Spend Nothing, Look Dangerous)",
    category: "gear",
    difficulty: "beginner",
    blurb:
      "The Bazaar-first strategy, the Mount Olympus checkpoint at 30, which stats actually matter while leveling, and why you should ignore shop gear.",
    tags: ["gear", "bazaar", "zeus gear", "mount olympus", "stats"],
    updated: "July 2026",
    tldr: [
      "Rule one: never buy gear from world shops. The **Bazaar** (Olde Town) sells other players' drops for pennies — restock there every 5–10 levels.",
      "While leveling, prioritize **damage** and **power pip chance** over defense. Fights you end faster hurt less.",
      "At level 30, run **Mount Olympus** until you have the Zeus hat/robe/boots — it carries most schools to the 50s.",
      "Keep whatever athame/amulet/ring drops with useful stats; don't sweat perfection before 50.",
      "Gear looks bad? **Stitching** (crowns) moves any item's appearance onto your stats. Function first, fashion when you're rich.",
    ],
    sections: [
      {
        title: "How gear works (60 seconds)",
        blocks: [
          "You have eight-plus equipment slots: hat, robe, boots, wand, athame (dagger), amulet, ring, deck, plus later extras (pets count too, and jewels socket into gear). Each piece carries stats:",
          {
            list: [
              "**Damage %** — multiplies all your hits. The questing king.",
              "**Power pip chance %** — more double-pips, bigger spells sooner.",
              "**Accuracy %** — fewer fizzles; matters most for Storm/Fire early.",
              "**Resist %** — shrinks incoming hits. Nice, but speed beats tanking in PvE.",
              "**Health** — buffer for mistakes; comes naturally on most gear.",
              "**Critical / block ratings** — largely a later-game arms race; don't chase them before ~50.",
            ],
          },
          {
            callout: {
              kind: "tip",
              title: "The one-line gear philosophy for leveling",
              body: [
                "Anything that makes fights *end sooner* (damage, pips, accuracy) beats anything that makes fights *hurt less* (resist, health). Dead mobs deal no damage.",
              ],
            },
          },
        ],
      },
      {
        title: "The Bazaar strategy",
        blocks: [
          "Elik's Edge in Olde Town (Wizard City) runs the Bazaar — a player-driven secondhand shop. Every non-\"No Auction\" item players sell lands here, which means a constantly refreshed pile of level-appropriate gear for tiny gold.",
          {
            steps: [
              "Every ~5 levels (or when fights feel slow), visit the Bazaar.",
              "Filter by your level and school, sort each slot by the stat you want (damage first).",
              "Buy the best hat/robe/boots you can equip. Total cost is usually a few hundred to a few thousand gold — street-mob pocket change.",
              "Sell your old pieces and surplus drops right back. The Bazaar is also your primary [gold engine](/guides/gold-farming-guide) early on.",
            ],
          },
          {
            callout: {
              kind: "warn",
              body: [
                "World gear *shops* (the NPC vendors in each world) are a rip-off almost without exception — worse stats than Bazaar gear at many times the price. Treat them as furniture stores that made a category error.",
              ],
            },
          },
        ],
      },
      {
        title: "Level 30 checkpoint: the Zeus set",
        blocks: [
          "At level 30, take the boat from Wizard City's docks to Aquila and run **Mount Olympus**. The dungeon takes 20–30 minutes, is soloable at-level for most schools (Team-Up makes it trivial), and its final boss drops the **'Zeus' / Senator's-tier gear** — hat, robe, and boots with damage, accuracy, health, and power pips that embarrass everything else in the 30–50 bracket.",
          {
            list: [
              "Farm it until you have your school's hat/robe/boots. Drop luck varies; most players finish in a handful of runs.",
              "It stays worth re-running for gold and jewels even after you're geared.",
              "Wearing Zeus gear, you can generally coast to the low 50s (Waterworks range) without another gear stop.",
            ],
          },
        ],
      },
      {
        title: "The other slots, briefly",
        blocks: [
          {
            table: {
              headers: ["Slot", "Leveling advice"],
              rows: [
                ["Wand", "Any at-level wand with a decent stat line. The crafted **Sky Iron Hasta** from the Grizzleheim/Wintertusk area is famously long-lived if you're into crafting; otherwise Bazaar wands are fine."],
                ["Athame / Ring", "Bazaar pieces with health or damage. Marginal until endgame; don't overthink."],
                ["Amulet", "Mostly cosmetic early. Later, **Mastery amulets** (power pips for a second school) become build-defining for support players."],
                ["Deck", "Biggest at-level deck from the Bazaar; what matters is [what you put in it](/guides/deck-building-basics)."],
                ["Jewels", "Socket whatever damage/health jewels you find; real jewel optimization is an endgame hobby."],
              ],
            },
          },
        ],
      },
      {
        title: "Crowns gear and packs: a warning label",
        blocks: [
          "Pack gear (from crowns lootboxes) can be strong at low levels, and one-off crowns sets are marketed hard at new players. You do not need any of it. The free path — Bazaar → Zeus → [Waterworks](/guides/waterworks-gear-guide) — is the same path max-level veterans took. If you enjoy opening packs, treat it as cosmetic gambling money, per the [spending guide](/guides/membership-and-crowns).",
        ],
      },
    ],
    related: ["waterworks-gear-guide", "gear-progression-60-to-max", "gold-farming-guide"],
  },

  {
    slug: "waterworks-gear-guide",
    title: "Waterworks: The Level 60 Rite of Passage",
    category: "gear",
    difficulty: "intermediate",
    blurb:
      "How to unlock the Waterworks dungeon, survive its trap-hating bosses, and walk out with the most famous free gear set in the game.",
    tags: ["waterworks", "level 60", "gear", "luska", "sylster", "farming"],
    updated: "July 2026",
    tldr: [
      "Waterworks is a level 60 dungeon in Crab Alley (off Triton Avenue, Wizard City). The hat/robe/boots it drops are the free best-in-slot for most schools deep into the 60s–90s.",
      "Its two headline bosses **cheat**: notoriously, traps provoke punishment. Blades are your friend; traps mostly are not.",
      "Expect multiple runs (30–60 min each with a group) before your full set drops. Team-Up works well here — it's a perpetually popular dungeon.",
      "Gear drops are school-specific from the final chest; you're rolling for your school's pieces each run.",
      "Not into farming? Wintertusk-era crafted gear is a respectable substitute — but Waterworks is a community rite of passage for a reason.",
    ],
    sections: [
      {
        title: "Unlocking it",
        blocks: [
          {
            steps: [
              "Reach level 60.",
              "Head to Triton Avenue in Wizard City and enter **Crab Alley**.",
              "Pick up the Waterworks quest from the crab NPC by the sigil area (a short intro chain points you at the tower).",
              "Enter with a full team if you can — this is a genuine group dungeon, and one of the most Team-Up-friendly in the game.",
            ],
          },
        ],
      },
      {
        title: "The run: what's inside",
        blocks: [
          "Waterworks is a vertical dungeon — a series of flooded chambers with mob fights, two puzzle/parkour interludes (follow the seaweed/valve prompts; a teammate who knows the route saves minutes), and two boss encounters that made the dungeon famous:",
          {
            list: [
              "**Luska Charmbeard** — the mid-dungeon pirate crab. His signature cheat punishes **traps** placed on him. The standard play: blades and straightforward hits only.",
              "**Sylster Glowstorm** — the finale, fought with support minions whose healing can out-pace a slow team. The standard play: build blades quietly, then delete the room in one coordinated AoE turn before the heal engine spins up.",
            ],
          },
          {
            callout: {
              kind: "warn",
              title: "About cheat specifics",
              body: [
                "Cheat scripts are occasionally adjusted in updates, and item cards/pet may-casts can trigger trap-type cheats by accident. Before your first run, skim a current cheat rundown (any recent community guide) — then remember the evergreen version: **keep it simple, blade up, hit once, hit huge.** Deep theory in [Cheating Bosses 101](/guides/cheating-bosses-101).",
              ],
            },
          },
        ],
      },
      {
        title: "Why this gear is worth it",
        blocks: [
          "The Waterworks set (hat/robe/boots per school) bundles damage, resist, critical, power pips, and health in proportions that free gear simply doesn't match again for a long stretch. For many schools, pieces of it remain competitive until the level 90–100 replacements (Hades, then [Darkmoor](/guides/darkmoor-gear-guide)).",
          {
            list: [
              "It's the first set that makes your wizard feel *built* rather than dressed.",
              "It's free — the grind is the price.",
              "Wearing it signals you did the rite of passage. (This matters more socially than we admit.)",
            ],
          },
        ],
      },
      {
        title: "Farming it efficiently",
        blocks: [
          {
            steps: [
              "Assemble via Team-Up (the kiosk in any Commons) or friends; full teams of four make runs fast and safe.",
              "Bring your boss deck: blades, enchanted AoEs, a heal column, **no traps** in the main deck to avoid muscle-memory accidents.",
              "Assign a hitter before each boss; everyone else blades the hitter. One-turn kills skip cheat phases entirely.",
              "Loot everything — non-set drops sell, and the seed/pet drops here are decent.",
              "Didn't get your piece? Re-queue. Veterans measure Waterworks in runs-per-set, and single-digit counts are normal luck.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Level a bit past 60 first (say 62–65 via Zafaria's opening) and the dungeon's difficulty drops noticeably while the gear stays just as good.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gear-progression-60-to-max", "cheating-bosses-101", "team-up-and-dungeon-etiquette"],
  },

  {
    slug: "darkmoor-gear-guide",
    title: "Darkmoor: Malistaire Returns, and He Has Your Robe",
    category: "gear",
    difficulty: "advanced",
    blurb:
      "The level 100 gauntlet that defines the endgame gear chase — its three wings, the Graveyard fight, and how teams actually beat it.",
    tags: ["darkmoor", "level 100", "malistaire", "graveyard", "gear"],
    updated: "July 2026",
    tldr: [
      "Castle Darkmoor is the level-100 dungeon complex (reached via a quest in the level ~100 era; Team-Up covers all three wings). It drops the era-defining 'Malistaire' gear.",
      "Three wings: Castle Darkmoor → Upper Halls → **The Graveyard**, home of Malistaire the Undying. The Graveyard is where the headline hat/robe drops live.",
      "Every fight cheats. Teams win with the shadow-era formula: stack blades and Feints on one hitter, control the script, kill in one shadow-boosted turn.",
      "It's the hardest content most players have met at that point. Go with a coordinated team (or a patient Team-Up group) and expect to learn the script over a few runs.",
      "Pieces drop across the wings; the full farm takes multiple clears. The payoff gears you for all of Arc 3.",
    ],
    sections: [
      {
        title: "What Darkmoor is",
        blocks: [
          "A gothic castle raid-lite in three wings, tuned for level 100 wizards with Shadow magic unlocked. Its final act is a rematch with a resurrected **Malistaire the Undying** — mechanically the hardest fight in the game up to that point, and the source of gear so good the community still calls level-100 loadouts 'Darkmoor gear' years later.",
          {
            callout: {
              kind: "lore",
              body: [
                "Yes, that Malistaire — Arc 1's villain, dragged back for one more night. The fight is a deliberate 'look how far you've come' moment, and it lands.",
              ],
            },
          },
        ],
      },
      {
        title: "The three wings",
        blocks: [
          {
            table: {
              headers: ["Wing", "Boss headline", "Notable loot"],
              rows: [
                ["Castle Darkmoor", "Vampiric nobility with charm-punishing scripts", "Set pieces, wands, spellement-era extras"],
                ["Upper Halls", "A tougher mid-wing with mixed cheat mechanics", "More set pieces; deck/athame-tier drops"],
                ["The Graveyard", "**Malistaire the Undying** (with a multi-phase script)", "The signature hats and robes — the reason everyone is here"],
              ],
              caption:
                "Exact best-in-slot per school varies; the Graveyard's hat/robe are the universal chase items.",
            },
          },
          "Each wing is its own Team-Up queue, so you can farm the Graveyard directly once you've cleared the story pass.",
        ],
      },
      {
        title: "How teams actually win",
        blocks: [
          {
            steps: [
              "**Assign roles before entering**: one hitter (usually the highest-damage school present), everyone else supports. This is non-negotiable at Darkmoor difficulty.",
              "**Feed the hitter**: blades from every teammate, Feints on the boss, Elemental/Spirit blades if trained. The hitter builds toward a shadow-enhanced nuke.",
              "**Respect the script**: each boss punishes specific actions (heals, charms, or traps at certain phases). First run with a group that knows the lines — or read a current cheat sheet — then it becomes choreography.",
              "**One-turn the kill** where possible: enough stacked multipliers let the hitter skip entire phases. This is the fight the [buff-stacking guide](/guides/blades-traps-and-stacking) has been training you for.",
              "**Wipe? Regroup, don't grief**: dungeon-progress rules mean a defeat costs time, not the run. Flee-heal-return as a group, never solo-trickle back into a cheat boss.",
            ],
          },
        ],
      },
      {
        title: "Is the grind worth it?",
        blocks: [
          "Short answer: yes, once, per wizard you care about. The set carries you through Polaris, Mirage, and Empyrea, and its stat pattern (damage + resist + critical in one package) defines what 'good gear' means for the rest of the game. Alternatives exist — crafted sets, one-shot-dungeon variants of the gear, and later-world replacements — but Darkmoor remains the canonical level-100 checkpoint.",
          {
            callout: {
              kind: "tip",
              body: [
                "Farm during Member Benefit weekends or with a standing group at fixed times. Darkmoor fatigue is real; scheduled short sessions beat one grim marathon.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gear-progression-60-to-max", "blades-traps-and-stacking", "cheating-bosses-101"],
  },

  {
    slug: "gear-progression-60-to-max",
    title: "Gear Progression 60 → Max: The Checkpoint Map",
    category: "gear",
    difficulty: "intermediate",
    blurb:
      "The canonical gear checkpoints after Waterworks — Poseidon, Hades, Darkmoor, Dragoon, and beyond — and the principles that outlive any patch.",
    tags: ["gear", "endgame", "hades", "dragoon", "progression"],
    updated: "July 2026",
    tldr: [
      "The classic free-gear spine: **Waterworks (60) → Atlantea/Poseidon (70, optional) → Tartarus/Hades (90) → Darkmoor (100) → Catacombs/Dragoon (130) → current-world sets**.",
      "Between checkpoints, don't chase marginal upgrades — quest in your last checkpoint set and skip ahead.",
      "From ~130 on, crafted gear, raid gear, and **set bonuses** enter the picture; check a live community resource for this season's best-in-slot before grinding.",
      "Evergreen stat philosophy: questing wants damage first; hard endgame content wants a damage/resist balance; supports want pips, resist, and outgoing healing.",
    ],
    sections: [
      {
        title: "The checkpoint spine",
        blocks: [
          {
            table: {
              headers: ["Level", "Checkpoint", "Effort", "Verdict"],
              rows: [
                ["60", "[Waterworks](/guides/waterworks-gear-guide) hat/robe/boots", "A few dungeon runs", "Mandatory rite of passage"],
                ["70", "Atlantea (Poseidon pieces)", "Light farming", "Optional — grab pieces if Waterworks luck was bad or you want a mid-arc boost"],
                ["90", "Tartarus (Hades set)", "Moderate farming", "Strongly recommended — the 90s standard"],
                ["100", "[Darkmoor](/guides/darkmoor-gear-guide) (Malistaire set)", "Serious farming", "The endgame's front door; do it"],
                ["130", "Catacombs (Dragoon set)", "Serious farming + crafting elements", "The Arc 4 workhorse set, with set bonuses"],
                ["140–max", "Current-world dropped/crafted/raid sets", "Varies by season", "Consult a live wiki/community tier list — this shifts with every world"],
              ],
            },
          },
          {
            callout: {
              kind: "info",
              title: "Why we stop naming exact items past 130",
              body: [
                "Each new world adds a gear tier, raids rotate rewards, and balance passes shuffle best-in-slot lists. Printed specifics rot in a year; the checkpoint *pattern* hasn't changed in a decade. Learn the pattern here, verify this season's names on a live resource.",
              ],
            },
          },
        ],
      },
      {
        title: "Principles that outlive patches",
        blocks: [
          {
            list: [
              "**Gear in bursts, not trickles.** Big checkpoint sets every ~10 levels beat constant Bazaar micro-upgrades after 60.",
              "**Damage clears PvE; resist clears *hard* PvE.** Speed-questing gear and raid-survival gear are different loadouts — endgame wizards keep both.",
              "**Set bonuses changed the math.** Modern sets (Dragoon onward) grant escalating bonuses for wearing multiple pieces — sometimes a slightly 'worse' piece wins by completing a set.",
              "**Jewels and pet round out the build.** A damage/pierce jewel spread and a [well-bred pet](/guides/pet-talents-that-matter) are each worth roughly a gear slot on their own.",
              "**Mastery amulets** turn off-school play from meme to build — the classic being a healer with a Life mastery.",
              "**Never vendor checkpoint gear** — bank it. Alt wizards, stitch fodder, and nostalgia all pay dividends.",
            ],
          },
        ],
      },
      {
        title: "Wands, pierce, and the endgame arms race",
        blocks: [
          "From the 90s onward, enemy resist rises and **armor pierce** becomes a headline stat — pierce ignores that much of the target's resist. Checkpoint wands (Hades, Darkmoor, Catacombs eras) typically carry the era's pierce/critical standard, which is why 'just use the checkpoint wand' is usually right.",
          {
            list: [
              "Critical rating gives bonus-damage chances; enemies' block erodes it — chase crit only alongside pierce, not instead of it.",
              "Shadow-era wands also matter for their item cards in some team strategies.",
              "PvP wants a different wand calculus entirely — see [PvP gear prep](/guides/pvp-deck-and-prep).",
            ],
          },
        ],
      },
      {
        title: "A sane farming calendar",
        blocks: [
          {
            steps: [
              "Hit a checkpoint level → farm that set to 'good enough' (headline 3 pieces), not perfection.",
              "Quest onward immediately; return for missing pieces only if a wall appears.",
              "Align heavy farming with Member Benefit / double-reward events.",
              "Re-evaluate the whole loadout at each new checkpoint rather than piece-by-piece.",
              "At max level, *then* perfect: jewels, full sets, alternate loadouts. Optimization is the endgame's actual endgame.",
            ],
          },
        ],
      },
    ],
    related: ["waterworks-gear-guide", "darkmoor-gear-guide", "pet-talents-that-matter"],
  },
];
