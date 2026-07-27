import type { Guide } from "@/lib/types";

export const gearGuides: Guide[] = [
  {
    slug: "the-skip-list",
    title: "The Skip List: What Veterans Don't Do Anymore",
    category: "gear",
    difficulty: "advanced",
    blurb:
      "Deep player knowledge: the classic advice experienced players now skip — which gear grinds to walk past, which systems replaced old staples, and the few things you should never skip.",
    tags: ["skip", "veteran", "meta", "efficiency", "gear", "deep knowledge"],
    updated: "July 2026",
    tldr: [
      "A decade of guides says farm everything. Veterans don't — they skip grinds whose payoff dies before it pays rent.",
      "The core test: **how many levels will this gear live before its replacement?** Waterworks lives ~40 levels; Hades lives ~10. That math decides everything.",
      "System changes quietly killed old staples: **Archmastery made most Mastery amulets a luxury**, and event/gauntlet gear patched the leveling-gear gaps.",
      "This is judgment, not law — every skip below says who should *still* do it the old way. First wizard? Skip less. Fourth wizard? Skip nearly everything.",
      "Some things remain unskippable: Zeus at 30, Feint, Sun enchants, the level-48 spell quest, and every Zeke point.",
    ],
    sections: [
      {
        title: "How veterans decide what to skip",
        blocks: [
          "The old guides treated every gear checkpoint as mandatory. Experienced players run three questions instead:",
          {
            list: [
              "**Lifespan:** how many levels until this gear is replaced? A set that lives 40 levels (Waterworks) justifies farming; a set that lives 10 (Hades, if you're mid-rush) usually doesn't.",
              "**Blocker test:** is the content actually stopping me? Gear exists to un-stick you. If nothing is killing you, better gear is a luxury purchase paid in hours.",
              "**Which wizard is this?** A first wizard earns knowledge from every farm; a fourth wizard inherits TCs, gold, seeds, and a full pet line from the Shared Bank — half the old checkpoints exist to solve problems that wizard doesn't have.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "Everything below is a decision framework, not a decree — where community practice genuinely varies, we say so. The verified facts behind each call live in the linked guides.",
              ],
            },
          },
        ],
      },
      {
        title: "The gear skip table",
        blocks: [
          {
            table: {
              headers: ["The classic advice", "The veteran move", "Who should still do it the old way"],
              rows: [
                [
                  "Farm **Poseidon** at 70",
                  "Skip by default. It beats Waterworks in a few slots for some schools — a marginal upgrade that costs real farming hours and dies at 90–100 anyway.",
                  "Nobody, really — grab pieces only if Atlantea drops them while you're there for the story.",
                ],
                [
                  "Farm **Hades** at 90",
                  "Skip if you're rushing: you're ~10 levels from Castle Darkmoor, which replaces it wholesale. Quest through Khrysalis in Waterworks-era gear and save the farm.",
                  "Anyone finding Khrysalis genuinely painful, and soloists who want the smoothest part-two — it's still the 90s' best set.",
                ],
                [
                  "**Bazaar refresh every 5 levels after 60**",
                  "Stop. Post-60 Bazaar gear is a treadmill of ±1% pieces. Checkpoint sets only.",
                  "Pre-60 players — the Bazaar habit is correct while leveling to Waterworks.",
                ],
                [
                  "Buy a **Mastery amulet** for off-school play",
                  "Mostly obsolete: [Archmastery school pips](/guides/shadow-magic-and-archmastery) give everyone switchable off-school power pips for free. Amulets are now a min-max luxury for dedicated support builds.",
                  "Hardcore healers/PvP builds that want pips in two off-schools at once.",
                ],
                [
                  "Craft the **Wintertusk gear set** at 56",
                  "Skip if you'll Team-Up Waterworks anyway — the queue is always warm and the WW set is better. Craft it only as the deliberate no-RNG route.",
                  "Solo players who hate drop RNG, and crafters leveling the badge anyway.",
                ],
                [
                  "Farm **Waterworks until the full set drops**",
                  "The headline pieces (hat/robe) carry the value; boots are the piece veterans most often settle on. Cap your runs — 'good enough and gone' beats completionism.",
                  "First-wizard players: the full farm is still the classic rite of passage, and the fight literacy it teaches is worth more than the boots.",
                ],
                [
                  "Complete **Dragoon in every slot** at 130",
                  "Craft the big three (hat/robe/boots) first; round out remaining slots only when raids or walls demand them — Vanguard fills gaps fine meanwhile.",
                  "Raiders gearing for Voracious Void-era content, where full sets justify themselves.",
                ],
              ],
            },
          },
        ],
      },
      {
        title: "Leveling skips the guides won't tell you",
        blocks: [
          {
            list: [
              "**Skip the 'do every side quest' instinct** — mainline XP dwarfs it. The only always-dos are the [training-point payers](/guides/side-content-worth-doing). Colossus Boulevard is a catch-up lever, not a checklist item (grab its Smith and go).",
              "**Skip pre-50 gold farming as an activity.** Selling drops funds everything early; a single [Halfang session](/guides/gold-farming-guide) after Wintertusk out-earns hours of low-level grinding.",
              "**Skip perfect-petting while leveling.** An Adult/Ancient triple-double is plenty until the endgame — pushing Mega before 100 burns snacks a [benefit weekend](/guides/daily-and-weekly-routines) would have halved. ([The math.](/tools/pet-snacks))",
              "**Skip hoarding treasure cards 'for later.'** Feint TCs and Tower Shields exist to be spent on the boss in front of you; the Bazaar restocks forever.",
              "**Skip-elixir etiquette:** never on a first wizard (you'd skip the training points, gear literacy, and spell quests that make the endgame playable) — defensible on a third or fourth, where the account already owns everything the levels teach.",
              "**One-shot gauntlets and housing dungeons are the forgotten leveling-gear patch** — level-scaled drops from a friend's placed gauntlet cover awkward gear gaps without any Bazaar treadmill.",
            ],
          },
        ],
      },
      {
        title: "The never-skips",
        blocks: [
          "Skipping culture has limits. Veterans across every playstyle still treat these as untouchable:",
          {
            list: [
              "**Zeus gear + Sky Iron Hasta at 30** — twenty minutes for gear that lives thirty levels. The single best time-to-value farm in the game, unchanged since forever.",
              "**Feint** (7 points at Dworgyn) and **every Sun damage enchant** — they scale with you forever; no system has ever obsoleted them.",
              "**Professor spell quests (48/58/…) and the Wintertusk 35/55 bonus spells** — permanent kit, minutes of effort.",
              "**Every Zeke point** — [21 across the Spiral](/tools/training-points), and Khrysalis pays double.",
              "**Waterworks *as an experience* on your first wizard** — even the skip-happy agree: learning cheat scripts with three strangers at level 60 is the tutorial for everything after.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "The meta-lesson under all of it: gear is a means. Veterans skip because they measure grinds in *levels of useful life per hour farmed* — run that math yourself with the [gear comparator](/tools/gear-compare) and you'll make the same calls.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gear-progression-60-to-max", "waterworks-gear-guide", "questing-faster", "niche-knowledge-hidden-details"],
  },

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
          "At level 30, **Cyrus Drake summons you** with a quest sending you to Aquila (he does it again at 70 for Atlantea and 90 for Tartarus — never ignore the Myth professor's mail). Run **Mount Olympus**: the dungeon takes 20–30 minutes, is soloable at-level for most schools (Team-Up makes it trivial), and its final boss **Zeus Sky Father** drops the **Zeus and Senator's gear** — hats, robes, and boots with damage, accuracy, health, and power pips that embarrass everything else in the 30–50 bracket.",
          {
            list: [
              "Farm it until you have your school's hat/robe/boots. Drop luck varies; most players finish in a handful of runs.",
              "The same dungeon drops the **Sky Iron Hasta** — a legendary +damage sword many wizards keep equipped for *dozens* of levels. Grab it while you're there.",
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
                ["Wand", "Any at-level wand with a decent stat line until 30 — then the **Sky Iron Hasta** from Mount Olympus, the famously long-lived +damage sword that many wizards swing well past level 60."],
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
      "Waterworks is a level 60 dungeon in Crab Alley (off Triton Avenue, Wizard City — the quest comes from Blad Raveneye in Triton Avenue). The hat/robe/boots it drops are the free best-in-slot for most schools deep into the 60s–90s.",
      "Its two headline bosses **cheat**: Luska Charmbeak punishes single-target traps; Sylster Glowstorm alternates Light/Dark auras that eat blades or traps depending on the phase.",
      "Rough drop map: **Luska drops the hats; Sylster drops the robes and boots** (plus coveted Mastery amulets from the dungeon's tables).",
      "Expect multiple runs (30–60 min each with a group) before your full set drops. Team-Up works well here — it's a perpetually popular dungeon.",
      "Not into farming? Wintertusk-era crafted gear is a respectable substitute — but Waterworks is a community rite of passage for a reason.",
    ],
    sections: [
      {
        title: "Unlocking it",
        blocks: [
          {
            steps: [
              "Reach level 60.",
              "Pick up the Waterworks quest from **Blad Raveneye in Triton Avenue** (Wizard City).",
              "Follow it into **Crab Alley** and down to the dungeon sigil.",
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
            sub: "Luska Charmbeak (mid-dungeon)",
          },
          {
            list: [
              "**The cheat:** place a *single-target* trap on him and he removes it and retaliates with a boosted damage-over-time hit (a nasty multi-round burn in the ~1,000-per-tick range). ",
              "**The loopholes:** AoE traps (Windstorm, Mass Feint), item-card and pet traps are exempt — the cheat only hates directly-cast single-target traps.",
              "**The play:** blades and straightforward hits; if your team insists on traps, make them the mass versions.",
            ],
          },
          {
            sub: "Sylster Glowstorm (the finale)",
          },
          {
            list: [
              "**The cheat:** he alternates a white **Light aura** and black **Dark aura** roughly every four rounds. In the Light, traps are safe but *blades get eaten* — 'Traps go undetected in the Light.' In the Dark, blades are safe but *traps get eaten* — 'The blade goes unseen in the dark.'",
              "**The punishment:** buffing with the forbidden type (or hitting without the right setup) draws a heavy counterattack in the 2,000+ range.",
              "**The play:** watch the aura, buff with whichever type is currently legal, and coordinate one big hit turn — or simply overwhelm him fast before the phases matter.",
            ],
          },
          {
            callout: {
              kind: "warn",
              title: "About cheat specifics",
              body: [
                "Scripts get adjusted in updates, and pet may-casts can trip buff-type cheats by accident. The details above match long-standing community documentation — but the evergreen version never changes: **keep it simple, buff with what the phase allows, hit once, hit huge.** Deep theory in [Cheating Bosses 101](/guides/cheating-bosses-101).",
              ],
            },
          },
        ],
      },
      {
        title: "Why this gear is worth it",
        blocks: [
          "The Waterworks set (hat/robe/boots per school) bundles damage, resist, critical, power pips, and health in proportions that free gear simply doesn't match again for a long stretch. For many schools, pieces of it remain competitive until the level 90–100 replacements (Hades, then [Castle Darkmoor](/guides/darkmoor-gear-guide)) — though Atlantea's Poseidon gear at 70 beats individual pieces for some schools.",
          {
            list: [
              "**Who drops what:** Luska Charmbeak drops the hats; Sylster Glowstorm drops the robes and boots. The dungeon also drops **Mastery amulets** — the build-defining items that let power pips work for a second school.",
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
              "Bring your boss deck: blades, enchanted AoEs, a heal column — and if you pack traps, make them **mass versions** (Mass Feint is legal on Luska; single-target traps are not).",
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
          {
            callout: {
              kind: "info",
              title: "The veteran skip argument",
              body: [
                "Not every experienced player farms the full set anymore — the hat/robe carry most of the value, and rushed alt wizards often walk past Waterworks entirely. Where the skip logic applies to you (and where it doesn't): [The Skip List](/guides/the-skip-list).",
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
    title: "Castle Darkmoor: Malistaire Returns, and He Has Your Robe",
    category: "gear",
    difficulty: "advanced",
    blurb:
      "The level 100 gauntlet that defines the endgame gear chase — its three wings, who drops which tier, the Graveyard fight, and how teams actually beat it.",
    tags: ["castle darkmoor", "level 100", "malistaire", "graveyard", "gear"],
    updated: "July 2026",
    tldr: [
      "Castle Darkmoor is the level-100 dungeon complex, unlocked via **Dworgyn's quest 'Branches of Woe'** (Nightside). Team-Up covers all three wings. It drops the era-defining 'Malistaire' gear.",
      "Three wings: Castle Darkmoor → The Upper Halls → **The Graveyard**, home of Malistaire the Undying — who drops the **Tier 1 versions of every slot** (the headline hats/robes/boots/wands).",
      "Supporting cast worth knowing: Yevgeny Nightcreeper drops the Tier 1 athames, secret boss **Aphrodite II** drops the Tier 1 rings, and gold-skeleton-key chests hold Tier 1 amulets.",
      "Every fight cheats. Teams win with the shadow-era formula: stack blades and Feints on one hitter, control the script, kill in one shadow-boosted turn.",
      "Naming alert: this is the classic *dungeon*. **Darkmoor the world** (level 170–180, Arc 5, released 2025) is a different, much later thing.",
    ],
    sections: [
      {
        title: "What Castle Darkmoor is",
        blocks: [
          "A gothic castle raid-lite in three wings, tuned for level 100 wizards with Shadow magic unlocked. It begins with **Dworgyn's quest 'Branches of Woe'** in Nightside, and its final act is a rematch with a resurrected **Malistaire the Undying** — mechanically the hardest fight in the game up to that point, and the source of gear so good the community still calls level-100 loadouts 'Darkmoor gear' years later.",
          {
            callout: {
              kind: "info",
              title: "Two Darkmoors now exist",
              body: [
                "In November 2025, KingsIsle expanded Darkmoor into a **full world** — the level 170–180 opener of Arc 5. This guide covers the classic level-100 *Castle* Darkmoor dungeon. Same gothic postcode, seventy levels apart.",
              ],
            },
          },
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
        title: "The three wings — and who drops what",
        blocks: [
          "The set comes in tiers (Tier 1 = the real thing; Tiers 2–3 are stepping-stone versions). Knowing the drop map saves dozens of wasted runs:",
          {
            table: {
              headers: ["Wing", "Bosses", "The loot that matters"],
              rows: [
                ["Castle Darkmoor", "Sir Blackwater & the vampiric nobility", "Tier 2 athames, Tier 3 set pieces — warm-up loot"],
                ["The Upper Halls", "Spirit of Darkmoor, Akhtang Wormcrawl (+ key boss Bunferatu)", "Tier 2–3 pieces; Bunferatu adds Tier 2 rings"],
                ["The Graveyard", "Shane von Shane → Yevgeny Nightcreeper → **Malistaire the Undying** (+ secret boss Aphrodite II)", "**Malistaire: Tier 1 everything** (hats/robes/boots/wands/decks); **Yevgeny: Tier 1 athames**; **Aphrodite II: Tier 1 rings**; Shane: Tier 2–3"],
              ],
              caption:
                "Gold-skeleton-key chests in the dungeon hold Tier 1 amulets — bring a key when you have one. Wing-by-wing Team-Up queues mean you can farm the Graveyard directly after the story pass.",
            },
          },
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
      "The free-gear spine: **Waterworks (60) → Poseidon (70) → Hades (90) → Castle Darkmoor (100, holds through 120) → Dragoon (130) → Uber/'Paradox' (140) → Merciless/Demiurge (150) → Aeon/Eternal (160) → Dream Reaver & raid sets (170) → Abomination/Monster Hide (180)**.",
      "Between checkpoints, don't chase marginal upgrades — quest in your last checkpoint set and skip ahead.",
      "From ~130 on, **crafting and raids** join dungeon drops as first-class gear sources, and **set bonuses** change the math.",
      "Evergreen stat philosophy: questing wants damage first; hard endgame content wants a damage/resist balance; supports want pips, resist, and outgoing healing.",
      "Names verified as of the Darkmoor-world era (level cap 180) — balance passes still shuffle edges, so sanity-check the current season before a long grind.",
    ],
    sections: [
      {
        title: "The checkpoint spine",
        blocks: [
          {
            table: {
              headers: ["Level", "Checkpoint", "Where it comes from", "Verdict"],
              rows: [
                ["60", "[Waterworks](/guides/waterworks-gear-guide) set", "Waterworks dungeon (Crab Alley)", "Mandatory rite of passage"],
                ["70", "Poseidon set", "Atlantea (Cyrus Drake's level-70 quest)", "Better than Waterworks for several slots — pierce debuts here"],
                ["90", "Hades set", "Tartarus; side boss Cronus drops the famous Blade of the Felled Titan athame", "The 90s standard"],
                ["100", "Malistaire Tier 1 set", "[Castle Darkmoor](/guides/darkmoor-gear-guide) (the Graveyard)", "The endgame's front door — and it holds through Polaris, Mirage, and Empyrea (110–120 have no standard replacement)"],
                ["130", "**Vanguard → Dragoon**", "Vanguard drops in Empyrea Part 2; Dragoon is *crafted* at Zasha Emberforge in the Catacombs from a Vanguard piece + alchemical reagents (only the key boss Fellspawn drops it directly)", "The Arc 4 workhorse, with set bonuses"],
                ["140", "Uber (dropped) / 'Paradox' (crafted)", "Karamelle bosses (incl. the Aberrant Paradox)", "Solid refresh; skippable for strong Dragoon users"],
                ["150", "Merciless (dropped) / Demiurge (crafted) / raid sets", "Lemuria bosses; recipes from Perry in Sky City; the Voracious Void raid (Nullity's & Void's sets)", "First era where raids join the race"],
                ["160", "Aeon (dropped) / Eternal (crafted) / raid upgrades", "Novus bosses (Aeon of Atavus & co.); Crying Sky raid (Hunhau/Xibalba sets)", "The 160 standard"],
                ["170", "Dream Reaver + Cabal's Revenge sets", "Wallaru's Nightmare dungeon (farm or craft); Cabal's Revenge raid (Daemonic crafted / Unreal dropped — its robes headline the era)", "Wallaru's endgame wardrobe"],
                ["180", "Abomination vs Monster Hide", "The Darkmoor world (Arc 5)", "Current cap: pick offense (Abomination) or defense (Monster Hide) per activity"],
              ],
            },
          },
          {
            callout: {
              kind: "info",
              title: "How current is this table?",
              body: [
                "Verified against community gear guides as of the Darkmoor-world era (cap 180). The checkpoint *pattern* has held for a decade; individual best-in-slot edges shuffle with balance passes and new raids, so sanity-check the current season's list before committing to a long grind.",
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
