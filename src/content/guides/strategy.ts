import type { Guide } from "@/lib/types";

export const strategyGuides: Guide[] = [
  {
    slug: "blades-traps-and-stacking",
    title: "Blades, Traps & Buff Stacking: The Damage Bible",
    category: "strategy",
    difficulty: "intermediate",
    blurb:
      "The multiplicative damage system explained properly: what stacks with what, Feint math, AoE consumption rules, and one-turn-kill setups.",
    tags: ["blades", "traps", "feint", "stacking", "damage math"],
    updated: "July 2026",
    tldr: [
      "Buffs multiply: two +35% blades aren't +70%, they're ×1.35 ×1.35 = +82%. Stacking snowballs — that's the whole meta.",
      "Same-name buffs from the *same source* don't stack; the same buff from **different sources** (trained, item card, treasure card, pet card) all stack.",
      "**Feint** (~+70% trap for 1 pip) is the best damage-per-pip in the game — and TC/pet Feints stack on top of trained Feint.",
      "One hit consumes *all* your applicable blades and *all* the target's applicable traps at once. AoEs consume blades once, but each target's traps separately.",
      "Break enemy shields with a wand hit **before** blading — wand hits consume blades too (the classic self-own).",
    ],
    sections: [
      {
        title: "The multiplication rule",
        blocks: [
          "Every percentage modifier — blades, traps, auras, globals, resist, shields — multiplies into the final number. A worked example:",
          {
            table: {
              headers: ["Setup", "Math", "1000 base becomes"],
              rows: [
                ["No buffs", "1000", "1,000"],
                ["School blade (+35%)", "×1.35", "1,350"],
                ["+ school trap (+25%)", "×1.25", "1,687"],
                ["+ Feint (+70%)", "×1.70", "2,868"],
                ["+ second blade, different source (+35%)", "×1.35", "3,872"],
                ["Into a Tower Shield (−50%)", "×0.50", "1,936 (still double the base!)"],
              ],
              caption:
                "Exact blade/trap values vary by school and spell tier — the multiplication logic never does.",
            },
          },
          "The strategic conclusion: buff turns are worth more than small attack turns, up to the point where the fight would already be over. In practice, 2–3 setup rounds into one enchanted AoE is the questing optimum.",
        ],
      },
      {
        title: "The multiplier cheat sheet",
        blocks: [
          "Common stacks and what they're actually worth (using typical values — one +35% blade, +25% trap, +70% Feint; your school's exact numbers shift these slightly):",
          {
            table: {
              headers: ["Setup", "Multiplier", "Rounds spent", "When it's right"],
              rows: [
                ["Blade → hit", "×1.35", "1 setup", "Street mobs — the everyday play"],
                ["Blade + blade (two sources) → hit", "×1.82", "2", "Tanky streets, fast boss adds"],
                ["Blade + Feint → hit", "×2.30", "2", "The standard solo boss opener"],
                ["Blade + blade + Feint", "×3.10", "3", "Real bosses, solo"],
                ["Two blades + two Feints (trained + TC)", "×5.27", "4", "Dungeon bosses; the classic 'one-shot' setup"],
                ["Team: 3 supports blade the hitter + 2 Feints", "×7 and climbing", "2–3 (parallel!)", "Why coordinated teams delete bosses in one turn"],
              ],
              caption:
                "Teams multiply *in parallel* — four wizards each casting one buff per round stack four multipliers per round. That's the entire secret of fast dungeon groups.",
            },
          },
          {
            callout: {
              kind: "info",
              body: [
                "Diminishing returns are about *overkill*, not math — the sixth multiplier works fine, but if four already kill the boss, the fifth setup round was a wasted round. Know the target's health, stop stacking at 'dead'.",
              ],
            },
          },
        ],
      },
      {
        title: "What stacks with what (memorize this bit)",
        blocks: [
          {
            list: [
              "**Doesn't stack — same buff, same source, twice:** a second trained Deathblade won't apply while the first sits there.",
              "**Stacks — same buff, different sources:** trained blade + item-card blade + TC blade + pet-card blade: four multiplicative blades of the 'same' spell. This is what 'blade stacking' means.",
              "**Stacks — different buffs, any sources:** school blade + Balanceblade + Elemental/Spirit blade + Feint + school trap + aura + global… all multiply.",
              "**Stacks — sharpened/potent variants:** later-game enchants that create boosted versions of blades/traps also count as distinct from their base versions (more stacking room).",
              "**Doesn't stack — buffs of the wrong school:** a Fire blade does nothing for your Storm hit; universal buffs (Balanceblade, Feint, Tower-style) apply to everything.",
            ],
          },
          {
            callout: {
              kind: "tip",
              title: "Feint, the king",
              body: [
                "One pip for ~+70% is unmatched efficiency; the −30% backlash trap it puts on *you* almost never matters in PvE because the enemy dies first. Train it, buy the TC version, breed pets with the card — a triple-Feint target takes ~×4.9 damage from those traps alone.",
              ],
            },
          },
        ],
      },
      {
        title: "Consumption rules (why your blade vanished)",
        blocks: [
          {
            list: [
              "**A hit consumes everything applicable at once**: all your matching blades, all their matching traps — spent on that single hit.",
              "**Wand hits are hits.** They consume blades. Break shields *first*, then blade — never the reverse.",
              "**AoEs**: your blades apply (and are consumed) once for the whole spell; each enemy's traps apply to the hit on *them* specifically. Feinting the boss before an AoE still works beautifully.",
              "**DoT spells** front-load your buffs into the spell when cast — you can't add a blade mid-burn and boost the remaining ticks.",
              "**Shields consume identically** from the defender's side — which is why a throwaway hit to 'pop' a Tower Shield before the real nuke is core technique.",
              "**Fizzles consume nothing.** Small mercies.",
            ],
          },
        ],
      },
      {
        title: "Standard setups by situation",
        blocks: [
          {
            table: {
              headers: ["Situation", "The pattern"],
              rows: [
                ["Street mobs (2–4 enemies)", "Blade → (blade) → enchanted AoE. Two-to-four rounds, next fight."],
                ["Normal boss + minion", "Blade up while a cheap hit or minion-AoE clears the minion → Feint boss → nuke."],
                ["Cheat boss", "Read the script first ([Cheating Bosses 101](/guides/cheating-bosses-101)) — some punish traps or charms; adjust which half of the stack you lean on."],
                ["Team play", "Everyone blades the designated hitter; supports Feint the boss. Four players' buffs on one hit ends most fights in one turn — [etiquette guide](/guides/team-up-and-dungeon-etiquette)."],
                ["You're the support", "Your blades on the hitter outdamage your own attacks. Yes, really — multiplication again."],
              ],
            },
          },
        ],
      },
    ],
    related: ["combat-basics", "cheating-bosses-101", "questing-faster"],
  },

  {
    slug: "questing-faster",
    title: "Questing Faster: Speed Habits of Veteran Wizards",
    category: "strategy",
    difficulty: "beginner",
    blurb:
      "Twenty small habits that compound into double questing speed — deck hygiene, mount logic, potion economy, henchmen, and partner play.",
    tags: ["speed", "efficiency", "questing", "leveling", "habits"],
    updated: "July 2026",
    tldr: [
      "Speed = fewer rounds per fight × fewer wasted minutes between fights. Attack both.",
      "Fewer rounds: tiny AoE-focused decks, pre-enchanted hits, blade-then-nuke, a damage pet.",
      "Fewer minutes: a mount (+40%), potion discipline, teleport friends, batching collect quests, walking around avoidable mobs.",
      "Stuck fights: Team-Up, a friend, or a crowns henchman beat banging your head for an hour.",
      "Duo questing done right (one blades, one hits) is the fastest way to play this game, full stop.",
    ],
    sections: [
      {
        title: "In-fight speed",
        blocks: [
          {
            list: [
              "**Deck hygiene** — rebuild for each area; a [seven-card deck](/guides/deck-building-basics) draws perfectly every round.",
              "**Enchant before you fight** — pre-enchanted attack copies from the deck screen save a round of in-fight enchanting.",
              "**AoE everything** — killing three mobs with one Meteor beats three single hits by two full rounds.",
              "**Know your kill math** — 'two blades + Colossal AoE kills this street's mobs' is knowledge that saves a round every fight, hundreds of times per world.",
              "**Pass with purpose** — if you can't act usefully, pass to bank pips; casting a filler hit that eats your blade is negative progress.",
              "**A damage pet** ([triple-double](/guides/pet-talents-that-matter)) quietly shaves rounds all day.",
            ],
          },
        ],
      },
      {
        title: "Between-fight speed",
        blocks: [
          {
            list: [
              "**Mount, always** — +40% movement compounds over a thousand streets. Any permanent mount; gold ones are fine.",
              "**Potion economy** — refill at Fairegrounds minigames or wisps while watching queues; never quest dry (a defeat + commons walk costs 5+ minutes).",
              "**Avoid avoidable fights** — street mobs have aggro cones; hug walls, hop ledges, mount past. Every skipped mob is ~90 seconds.",
              "**Batch collect quests** — 'collect 8 shells' quests share spawns with fights; do them during natural travel, and realm-hop if a spawn area is picked clean.",
              "**Port network** — friends' teleports are free fast-travel; a duo can leapfrog dungeon walk-ins by porting to each other.",
              "**Read the quest, not just the arrow** — many 'talk to X' hops chain in the same building; finishing dialogue chains before leaving prevents re-walks.",
            ],
          },
        ],
      },
      {
        title: "When a fight wall-stops you",
        blocks: [
          {
            steps: [
              "Rebuild the deck for *this* fight (shields of the boss's school, extra heal, backup hit).",
              "Check the [cheat sheet](/guides/cheating-bosses-101) if it's a boss — most 'impossible' bosses are script misunderstandings.",
              "Queue **Team-Up** at the kiosk — for famous roadblocks the queue is always warm.",
              "Call a friend — one extra body halves fight length (blades on hitter!).",
              "Rent a **henchman** (crowns, mid-fight shop) — the level-scaled ones are a legitimate panic button for solo players.",
              "Still stuck? Two levels of side content evaporates most walls — [where to detour](/guides/side-content-worth-doing).",
            ],
          },
        ],
      },
      {
        title: "The duo meta (bring a friend)",
        blocks: [
          "Two coordinated wizards quest more than twice as fast as one: fights start with double pips on the board, one player blades the other's giant AoE, and defeat risk approaches zero. The classic pairings put a support school (Life, Balance, Ice) behind a hammer school (Storm, Fire, Myth) — but honestly any two schools with the blade-the-hitter habit melt PvE.",
          {
            callout: {
              kind: "tip",
              body: [
                "Same-quest partners share fight credit and most goal progress. Keep quest books synced (accept/turn-in together) and you'll never do a dungeon twice.",
              ],
            },
          },
        ],
      },
    ],
    related: ["deck-building-basics", "blades-traps-and-stacking", "team-up-and-dungeon-etiquette"],
  },

  {
    slug: "cheating-bosses-101",
    title: "Cheating Bosses 101: Reading the Script",
    category: "strategy",
    difficulty: "intermediate",
    blurb:
      "What boss 'cheats' are, the common cheat archetypes, how to scout a script safely, and the universal counterplay that beats most of them.",
    tags: ["cheats", "bosses", "mechanics", "strategy"],
    updated: "July 2026",
    tldr: [
      "A 'cheat' is a scripted rule-break: the boss reacts to specific actions (traps, heals, blades…) with extra casts, outside normal turn order.",
      "Cheats are announced — bosses shout a line when triggered. The fight is a puzzle: deduce the rules, then play around them.",
      "Universal counterplay: simple, fast play. Fewer spell types cast = fewer triggers; one huge coordinated turn skips scripts entirely.",
      "Before famous dungeons (Waterworks, Darkmoor…), skim a current cheat rundown — scripts get adjusted in updates, and item cards or pet may-casts can trigger them accidentally.",
      "Cheats are where Wizard101's real difficulty lives. Learning to love them is the veteran transition.",
    ],
    sections: [
      {
        title: "What exactly is a cheat?",
        blocks: [
          "Normal enemies obey the same rules you do: one cast per round, in seat order. **Cheat bosses** carry a script that interrupts this — e.g. *whenever a trap is placed on me, I remove it and counterattack*. The game signals scripts through the boss's spoken lines (watch the text over their head) and through visibly out-of-turn casts.",
          {
            callout: {
              kind: "info",
              body: [
                "Cheats exist because buff-stacking (see [the damage bible](/guides/blades-traps-and-stacking)) made ordinary bosses trivial. Scripts force you to *think* rather than out-stat. Once you accept them as puzzles, they're the best content in the game.",
              ],
            },
          },
        ],
      },
      {
        title: "The common cheat archetypes",
        blocks: [
          {
            table: {
              headers: ["Archetype", "The rule", "The play"],
              rows: [
                ["Trap-hater", "Traps on the boss trigger removal/punishment", "Lean on blades; deliver damage through charms not wards"],
                ["Charm-hater", "Blades/charms trigger a response", "Lean on traps and raw enchanted damage instead"],
                ["Heal-punisher", "Healing triggers a counter (often a big hit or a steal)", "Overheal *before* thresholds, use absorbs, or win faster than you bleed"],
                ["Metronome", "Every N rounds, a scripted nuke or minion wave", "Count rounds; shield/absorb the beat, burst between beats"],
                ["Threshold", "At X% health, phase change or fresh script", "Push through thresholds with a planned burst, not a dribble"],
                ["Opening gambit", "Round-one scripted cast (mass charm-strip, mass DoT…)", "Don't pre-buff into it; play your real turn after the opener"],
                ["Minion engine", "Minions heal/shield the boss endlessly", "Kill order matters: engine first, or one-shot the whole board"],
              ],
              caption:
                "Real bosses combine two or three archetypes. The vocabulary makes any new script readable.",
            },
          },
        ],
      },
      {
        title: "Scouting a script safely",
        blocks: [
          {
            steps: [
              "Round one: pass or wand-hit. Watch what the boss does unprovoked (metronome? opener?).",
              "Probe one category at a time — a cheap trap, then a cheap blade — and watch for reaction lines. Sacrificing a Dark Sprite to science is fine.",
              "Note *exact* trigger wording; scripts distinguish 'traps on me' vs 'traps at all', 'heals' vs 'incoming heals'.",
              "Or skip the science: for famous fights the community documented everything — read a current guide and treat the fight as choreography practice.",
              "Beware friendly fire: **item cards and pet may-casts count as casts** for most scripts. Scripted fights are where 'silent' pets and stripped decks shine.",
            ],
          },
        ],
      },
      {
        title: "The universal counters",
        blocks: [
          {
            list: [
              "**Speed** — a one-turn kill triggers nothing. Most Darkmoor-era strategies are elaborate setups for exactly this.",
              "**Simplicity** — every extra spell type in your deck is another possible trigger. Cheat-fight decks are even smaller than farming decks.",
              "**Role clarity in teams** — one hitter, everyone else feeding — minimizes the surface area the script can punish.",
              "**Patience on beats** — metronome bosses are rhythm games; shield on the beat, act off-beat.",
              "**Acceptance** — some scripts *will* cost you a turn or a teammate. Budget for it instead of resetting a 20-minute dungeon over choreography slips.",
            ],
          },
        ],
      },
    ],
    related: ["blades-traps-and-stacking", "waterworks-gear-guide", "darkmoor-gear-guide"],
  },

  {
    slug: "shadow-magic-and-archmastery",
    title: "Shadow Magic & Archmastery: The Endgame Pip Economy",
    category: "strategy",
    difficulty: "advanced",
    blurb:
      "The two systems that redefine combat after level 90: shadow pips and shadow-enhanced spells, plus the Archmastery school-pip engine that replaced old habits.",
    tags: ["shadow magic", "archmastery", "school pips", "shadow pips", "endgame"],
    updated: "July 2026",
    tldr: [
      "**Shadow magic** unlocks near the end of Khrysalis (~level 90s): shadow-enhanced spells are your new biggest hits, paid for with **shadow pips** earned during combat via your shadow pip rating.",
      "**Archmastery** (added in 2022) gives everyone a Power Orb: your archmastery rating fills it, and each fill converts one power pip into a **school pip** of a school you choose.",
      "School pips act like a switchable Mastery amulet — they count as power pips for their school, letting any wizard efficiently cast off-school utility (Life heals on a Storm, Feints on anyone).",
      "You pick your school-pip school with the orb button on your deck — the choice saves per deck and can even be changed mid-fight.",
      "Practical result: endgame turns are planned around three currencies at once — regular pips, shadow pips, and school pips. This guide is the mental model.",
    ],
    sections: [
      {
        title: "Shadow magic in plain English",
        blocks: [
          "Late in Arc 2 the story hands you shadow magic — mechanically, a second resource layered onto combat:",
          {
            list: [
              "**Shadow pips** appear alongside normal pips during a fight. You don't buy them; they arrive based on your **shadow pip rating** (a gear stat) and combat flow.",
              "**Shadow-enhanced spells** — the huge attacks your professors grant from the shadow era onward — cost normal pips *plus* one or more shadow pips. They're your endgame nukes; boss strategies revolve around timing them.",
              "**True shadow forms** (transformations with backlash mechanics) also exist from the original system — niche today, but the backlash concept survives: shadow power always asks a price.",
              "Because shadow pips arrive semi-randomly, endgame planning means having a 'shadow turn' play ready whenever the pip lands — not casting your setup at the exact moment the nuke becomes possible.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "Gear from Castle Darkmoor onward carries shadow pip rating for exactly this reason — the [gear progression guide](/guides/gear-progression-60-to-max) tracks which sets prioritize it (the Darkmoor-world 'Monster Hide' line famously trades crit for shadow rating).",
              ],
            },
          },
        ],
      },
      {
        title: "Archmastery: the Power Orb explained",
        blocks: [
          "Archmastery arrived in the Fall 2022 update and quietly modernized the whole pip system:",
          {
            steps: [
              "Your **archmastery rating** (a gear stat) fills a Power Orb during combat — faster rating, faster fills.",
              "When the orb fills, one of your **power pips converts into a school pip** of your currently selected school.",
              "**School pips** work like power pips *for that school* — including schools that aren't yours. This is the old Mastery-amulet effect, built into everyone, for free.",
              "You choose the school with the orb icon on your deck screen; the choice is **saved per deck**, and you can switch it live during a match.",
              "At full power-pip chance, the practical ceiling is about one school pip per round of orb-fill — enough to fundamentally change what off-school casting costs you.",
            ],
          },
        ],
      },
      {
        title: "What Archmastery actually changes for you",
        blocks: [
          {
            table: {
              headers: ["You are…", "The Archmastery play"],
              rows: [
                ["A hitter (Storm/Fire/Myth)", "Set school pips to **Life** for real heals, or **Death** to power trained Feints — your glass cannon just grew a first-aid kit"],
                ["A support (Life/Balance/Ice)", "Set pips to the hitter's school for tri-blades and utility, or to Death for cheap Feint spam — supports gained the most from this system"],
                ["A soloist", "Rotate by fight: Life pips for hard bosses, your own school for farming speed"],
                ["A PvP player", "Pip-school choice is now a strategic layer opponents read and bait — see [PvP prep](/guides/pvp-deck-and-prep)"],
              ],
              caption:
                "One deck per job, each with its own saved pip school, is the modern loadout pattern.",
            },
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Old advice said 'buy a Mastery amulet if you want off-school power pips.' Archmastery made that free and flexible — amulets still stack value for dedicated builds, but a new player should learn the orb first and spend nothing.",
              ],
            },
          },
        ],
      },
      {
        title: "The three-currency turn",
        blocks: [
          "Endgame turns juggle three resources. A comfortable mental model:",
          {
            list: [
              "**Regular/power pips** — your bread: hits, blades, heals. Managed like always ([combat basics](/guides/combat-basics)).",
              "**School pips** — your flexibility: budget them for the off-school utility you planned the deck around; don't let them idle unspent.",
              "**Shadow pips** — your spike: the moment one lands, the next 1–2 turns should build into the shadow-enhanced finisher.",
              "Cheat bosses at this level assume you're doing all three — scripts often punish hoarding or interrupt on a rhythm ([cheat literacy](/guides/cheating-bosses-101)) — so practice the juggle on street mobs until it's automatic.",
            ],
          },
        ],
      },
    ],
    related: ["combat-basics", "gear-progression-60-to-max", "cheating-bosses-101"],
  },
];
