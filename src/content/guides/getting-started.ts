import type { Guide } from "@/lib/types";

export const gettingStartedGuides: Guide[] = [
  {
    slug: "complete-beginners-guide",
    title: "The Complete Beginner's Guide to Wizard101",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "Everything a brand-new wizard needs to know: what the game actually is, your first hour, and the systems that unlock as you level.",
    tags: ["new player", "basics", "first steps", "tutorial"],
    updated: "July 2026",
    tldr: [
      "Wizard101 is a turn-based card-battling MMO. You build a deck of spells, fight in turns, and quest through themed worlds called the Spiral.",
      "Pick a school you think is fun (you can't change it later without starting a new wizard). Fire, Death, and Storm are popular first picks.",
      "Follow the main storyline quests (the ones with a golden exclamation point in the quest book). They give the most XP by far.",
      "Don't spend real money on anything until you understand [Membership vs Crowns](/guides/membership-and-crowns).",
      "Talk to every trainer, open your Spellbook (press `B`), and do the tutorial — it's short and teaches the combat basics you'll use for the next 170+ levels.",
    ],
    sections: [
      {
        title: "What kind of game is this?",
        blocks: [
          "Wizard101 is a free-to-start MMO by KingsIsle where combat plays like a collectible card game. Instead of mashing attack buttons, every fight is turn-based: each round you pick one spell card from your hand, everyone's choices resolve in order, and the fight continues until one side is defeated.",
          "You play a student wizard at the Ravenwood School of Magical Arts in Wizard City. The story starts with the evil professor Malistaire Drake and grows into a multi-arc saga across the Spiral — a chain of themed worlds (an ancient desert, a Victorian city of dogs, an Aztec-inspired dinosaur world, and many more).",
          "Despite the cartoon look, the endgame has real depth: gear math, pet genetics, deck construction, and boss fights with scripted \"cheats\" that punish sloppy play. That combination — friendly on the surface, deep underneath — is why people play it for a decade.",
          {
            callout: {
              kind: "info",
              title: "The one-sentence version",
              body: [
                "It's Pokémon-meets-Magic-the-Gathering in an MMO wrapper: collect spells, build a deck, take turns, save the Spiral.",
              ],
            },
          },
        ],
      },
      {
        title: "Your first 15 minutes, step by step",
        blocks: [
          {
            steps: [
              "Create your account and wizard. The name is picked from dropdown lists (this keeps names family-friendly), so have fun with it.",
              "Take the entry quiz *or* pick your school directly. The quiz suggests a school based on your answers — but you can override it. Read [Choosing Your School](/guides/choosing-your-school) if you want the honest breakdown first.",
              "Play the tutorial with Merle Ambrose and Gamma the owl. It teaches movement, the combat circle, and casting. It takes about five minutes — don't skip it.",
              "In the Commons, follow the golden arrow to your first quests. The quest arrow (and the quest helper in your book) always points you to your next main objective.",
              "Visit Ravenwood, meet your school professor, and check the Spellbook (`B` key). This is your character sheet: spells, gear, quests, crafting, pets — everything lives here.",
              "Do Unicorn Way start to finish. It's the game's real tutorial zone: your first street mobs, your first boss, and your first gear drops.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Turn on **quest helper arrows** and open your map with `M` whenever you're lost. Nearly every \"where do I go?\" moment is answered by the golden arrow at the top of your screen.",
              ],
            },
          },
        ],
      },
      {
        title: "The combat circle, in plain English",
        blocks: [
          "When you walk into an enemy on the street (or step onto a battle sigil), you're pulled into a duel circle. Combat is simultaneous-turn-based:",
          {
            list: [
              "**Pips** are your mana. You gain one pip at the start of each round (later, *power pips* count as two for your own school's spells). Every spell costs pips — big spells cost more.",
              "**Your hand** is drawn from your deck. Each round you pick one card to cast, or **pass** to save pips for something bigger.",
              "**Accuracy** means spells can fail (\"fizzle\"). A fizzled spell wastes your turn but keeps your pips.",
              "**Schools have flavors**: Storm hits hardest but fizzles most, Ice survives everything, Life heals, Death steals health, and so on.",
              "**Blades and traps** multiply your damage. Learning to stack them is the single biggest skill jump in the game — see [Blades, Traps & Buff Stacking](/guides/blades-traps-and-stacking).",
            ],
          },
          "Full detail — turn order, targeting, shields, healing, and what to do when you fizzle — lives in [Combat Basics](/guides/combat-basics). Read it after your first few fights and everything will click.",
        ],
      },
      {
        title: "What unlocks as you level",
        blocks: [
          "New systems drip-feed in as you play. Rough map of the early milestones:",
          {
            table: {
              headers: ["Around level", "What opens up", "Why you care"],
              rows: [
                ["1–5", "Core combat, first gear, potions", "The basics — potions refill health/mana, so keep them topped up"],
                ["5–10", "First training points, mounts become worth wanting", "Training points let you learn spells from *other* schools"],
                ["7–12", "Fishing (level 7, Lucky Hookline), then crafting, monstrology, and gardening intros (all in Wizard City)", "Side systems you can dip into whenever you need a break"],
                ["15–25", "Grizzleheim & Wysteria side worlds, gardening", "Optional XP, gear, and the start of your snack economy"],
                ["~30", "Mount Olympus dungeon (Aquila)", "The first big gear checkpoint — see the [gear guide](/guides/gear-guide-levels-1-50)"],
                ["48–50", "Your school's iconic high-rank spell, Dragonspyre endgame", "Arc 1 finale and your first taste of real boss mechanics"],
                ["60", "Waterworks dungeon", "The most famous free gear set in the game — [full guide](/guides/waterworks-gear-guide)"],
              ],
              caption:
                "Numbers are approximate — the game occasionally shuffles unlock levels in updates.",
            },
          },
          {
            callout: {
              kind: "tip",
              title: "The golden rule of questing",
              body: [
                "Main storyline quests (marked with the spiral icon in your quest book) give enormously more XP than side quests. If you ever feel underleveled, the fix is usually side content — Grizzleheim, Wysteria, and Zeke quests — not grinding mobs.",
              ],
            },
          },
        ],
      },
      {
        title: "Beginner traps to avoid",
        blocks: [
          {
            list: [
              "**Don't buy random gear from shops.** Quest drops and the Bazaar (in Olde Town) cover you for free. Save gold for mounts, training-point buybacks, and pet hatches.",
              "**Don't train spells randomly.** Training points are precious and refunds cost crowns. Follow the [Training Points Guide](/guides/training-points-guide) before spending any.",
              "**Don't stuff your deck full.** A fat deck means you never draw the card you need. Small, focused decks win fights faster — see [Deck Building](/guides/deck-building-basics).",
              "**Don't ignore your potion bottles.** Refill them free with minigames in the Fairegrounds, or by collecting wisps.",
              "**Don't buy crowns gear in a panic.** Free players can absolutely thrive — read [Membership vs Crowns](/guides/membership-and-crowns) before opening your wallet.",
              "**Don't flee every hard fight.** Fleeing sends you home with 1 health. Sometimes it's right, but usually a healing potion or a smarter deck is the answer.",
            ],
          },
        ],
      },
      {
        title: "Where to go from here",
        blocks: [
          "Your reading order, if you want to do this properly:",
          {
            steps: [
              "[Choosing Your School](/guides/choosing-your-school) — lock in the right school for how you like to play.",
              "[Combat Basics](/guides/combat-basics) — pips, blades, shields, and turn order made simple.",
              "[Deck Building Basics](/guides/deck-building-basics) — the five-minute fix that doubles your questing speed.",
              "[Training Points Guide](/guides/training-points-guide) — spend points like a veteran from day one.",
              "[World Order & Leveling](/guides/world-order-and-leveling) — the full roadmap from level 1 to the cap.",
            ],
          },
          "And whenever you hit a term you don't know — *pierce? spellement? may-cast?* — the [Glossary](/glossary) has a plain-English definition waiting.",
        ],
      },
    ],
    related: [
      "choosing-your-school",
      "combat-basics",
      "training-points-guide",
      "world-order-and-leveling",
    ],
  },

  {
    slug: "choosing-your-school",
    title: "Choosing Your School (Without Regrets)",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "The honest breakdown of all seven schools: how each one actually plays, which are easiest for new players, and how to pick.",
    tags: ["schools", "fire", "ice", "storm", "myth", "life", "death", "balance"],
    updated: "July 2026",
    tldr: [
      "There is no wrong school — every school can solo the entire game. Pick the playstyle that sounds fun.",
      "Easiest first schools: **Death** (heals itself by attacking), **Fire** (great damage with solid accuracy), **Life** (never dies).",
      "Hardest first school: **Storm** — monster damage, but low health and frequent fizzles punish beginners.",
      "Your school is permanent for that character. \"Changing school\" means making a new wizard — which many players eventually do anyway.",
      "Deep dives with spells, stats, and leveling tips live on each [school page](/schools).",
    ],
    sections: [
      {
        title: "How much does this choice matter?",
        blocks: [
          "A lot — and less than you fear. Your school decides which spells you learn free as you level, what your stats lean toward, and the general *feel* of every fight for hundreds of hours. That's the \"a lot\" part.",
          "The \"less than you fear\" part: every school clears all content. There's no trap pick. And most veterans end up with a stable of wizards, one per school, so your first pick is really just \"who do I meet first?\"",
          {
            callout: {
              kind: "info",
              body: [
                "The entry quiz (the Book of Secrets) suggests a school from personality questions. It's charming, but it doesn't know you want to speed-run dungeons or farm bosses. Read the table below, *then* decide.",
              ],
            },
          },
        ],
      },
      {
        title: "All seven schools at a glance",
        blocks: [
          {
            table: {
              headers: ["School", "Identity", "Damage", "Survivability", "New-player feel"],
              rows: [
                ["[Fire](/schools/fire)", "Damage-over-time burner", "High", "Medium", "Smooth — strong hits, decent accuracy"],
                ["[Ice](/schools/ice)", "The unkillable tank", "Low–Medium", "Highest", "Very forgiving, fights take longer"],
                ["[Storm](/schools/storm)", "Glass cannon", "Highest", "Lowest", "Spiky — huge hits, painful fizzles"],
                ["[Myth](/schools/myth)", "Minions & double-hits", "Medium–High", "Medium", "Clever toolkit, a bit technical"],
                ["[Life](/schools/life)", "The healer", "Medium", "Very high", "Extremely safe, slower kills early"],
                ["[Death](/schools/death)", "Drain-tank vampire", "Medium–High", "High (self-heals)", "The classic solo school"],
                ["[Balance](/schools/balance)", "Jack-of-all-trades support", "Medium", "High", "Flexible, shines in teams"],
              ],
            },
          },
          "Every row links to a full page with signature spells, stat priorities, recommended secondary schools, and leveling tips.",
        ],
      },
      {
        title: "Pick by personality",
        blocks: [
          {
            list: [
              "**\"I want fights over fast.\"** → Storm if you can stomach dying sometimes, Fire if you want speed *with* a safety net.",
              "**\"I hate dying.\"** → Ice or Life. Ice out-tanks everything; Life heals through everything.",
              "**\"I mostly play solo.\"** → Death is the classic answer: its drain spells attack and heal you in one card, so you rarely need help.",
              "**\"I'll play with a friend or sibling.\"** → Life + anything is a famous duo. Balance also makes every teammate better.",
              "**\"I like clever mechanics over raw numbers.\"** → Myth (minions, stuns, double-hits) or Balance (buffs, debuffs, oddball tricks).",
              "**\"I want the meta endgame hitter.\"** → Storm and Fire dominate speed-farming at max level.",
            ],
          },
          {
            callout: {
              kind: "tip",
              title: "The honest beginner shortlist",
              body: [
                "**Death** for solo comfort, **Fire** for damage that doesn't feel risky, **Life** if you never want to see the defeat screen. You truly can't go wrong with any of the three.",
              ],
            },
          },
        ],
      },
      {
        title: "What about second schools?",
        blocks: [
          "Later, training points let you learn spells from other schools — a *secondary* school. You never get their power pips or best gear synergies, but key utility spells (shields, blades, heals, and the all-important **Feint**) are absolutely worth training.",
          "Don't overthink this on day one. Just know the choice you're making now is \"main school\", not \"only school\". When you have points to spend, the [Training Points Guide](/guides/training-points-guide) has a per-school shopping list.",
        ],
      },
      {
        title: "Frequently asked before choosing",
        blocks: [
          {
            list: [
              "**Can I change school later?** No — you'd make a new wizard. Accounts hold multiple wizards, so nothing is ever wasted.",
              "**Is any school unplayable solo?** No. Life and Balance used to be \"support-only\" memes; both now have full attack kits.",
              "**Do schools matter for PvP?** Playstyles differ a lot in the arena, but balance patches shuffle the pecking order constantly. Pick for PvE feel first.",
              "**What does my school color/gear look like?** Each school has its own colors and iconic gear looks — and you can restitch appearances later anyway.",
            ],
          },
        ],
      },
    ],
    related: ["complete-beginners-guide", "training-points-guide", "combat-basics"],
  },

  {
    slug: "combat-basics",
    title: "Combat Basics: Pips, Blades & Not Fizzling",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "How a round actually works: pips, accuracy, turn order, blades vs traps, shields, and the simple play pattern that wins 90% of PvE fights.",
    tags: ["combat", "pips", "blades", "traps", "shields", "fizzle"],
    updated: "July 2026",
    tldr: [
      "Each round: everyone secretly picks one spell, then casts resolve in seat order. Planning one round ahead is the whole skill.",
      "Pips are mana; you gain one per round. **Power pips count double for your own school** — that's why high-level wizards cast huge spells so fast.",
      "**Blades** (on you) and **traps** (on the enemy) multiply damage. One blade + one trap roughly *doubles* a hit.",
      "The standard PvE pattern: spend early rounds blading up, then end the fight with one big hit. Trading small hits back and forth is how fights drag on.",
      "Fizzles are normal (especially for Storm and Fire). You keep your pips when you fizzle — just cast again.",
    ],
    sections: [
      {
        title: "Anatomy of a round",
        blocks: [
          {
            steps: [
              "**Planning phase** — everyone (allies and enemies) secretly picks one card from their hand, or passes. You have ~30 seconds.",
              "**Resolution phase** — casts resolve one at a time going around the circle. First-position players act first, which sometimes means your target is already dead; your spell auto-retargets if so.",
              "**Draw & pips** — you draw back up to your hand size and gain a pip (or a power pip). Repeat until one side wins.",
            ],
          },
          "That's the entire loop. Everything else — buffs, shields, heals, minions, cheats — is detail layered on top of \"pick one card per round\".",
        ],
      },
      {
        title: "Pips and power pips",
        blocks: [
          "Every spell has a pip cost in its top-left corner. You start a fight with a pip or two and gain one per round. Passing costs nothing and still banks your pip — passing early to afford a bigger spell is often correct.",
          {
            list: [
              "**White pip** = 1 pip of value.",
              "**Power pip (yellow)** = 2 pips of value, *but only for spells of your own school* (and any school you hold a Mastery amulet for). Your power pip chance climbs steeply with level and gear.",
              "**X-pip spells** (like Tempest or Judgement) spend *all* your pips and scale damage per pip spent — the classic \"save up then delete the board\" cards.",
              "**Shadow/archmastery pips** are an endgame resource for shadow-enhanced spells. Ignore them until the level 100+ era; the game introduces them properly when it's time.",
            ],
          },
        ],
      },
      {
        title: "Blades, traps, shields — the multiplier game",
        blocks: [
          "Damage in Wizard101 is multiplicative, which is a fancy way of saying buffs snowball:",
          {
            list: [
              "**Blade** — a charm on *you* that boosts your next outgoing hit (e.g. +35%).",
              "**Trap** — a ward on the *enemy* that boosts the next hit they take (e.g. +25%).",
              "**Aura / Global** — round-lasting effects that boost everyone or just you.",
              "**Shield (tower/elemental)** — reduces the next hit *you* take. Enemies use them too; a big hit into a -80% shield is a wasted turn, so break shields with a cheap \"wand hit\" first.",
            ],
          },
          "A 1000-damage spell with a +35% blade and a +25% trap deals 1000 × 1.35 × 1.25 ≈ **1687**. Add a Feint (+70% trap) and it's ≈ **2868**. This is why veterans spend three rounds setting up: one boosted nuke beats four plain hits.",
          {
            callout: {
              kind: "tip",
              title: "The pattern that carries all of PvE",
              body: [
                "Round 1: blade. Round 2: blade or trap (or pass to build pips). Round 3+: cast your biggest attack-all spell. Mobs die, next fight. Full theory in [Blades, Traps & Buff Stacking](/guides/blades-traps-and-stacking).",
              ],
            },
          },
        ],
      },
      {
        title: "Accuracy, fizzles, and how to stop caring",
        blocks: [
          "Every spell lists an accuracy percentage. Cast below 100% and there's a chance the spell **fizzles** — nothing happens, but you keep your pips and just lost the round.",
          {
            list: [
              "Base accuracy by school is roughly: Life 90%, Death/Balance 85%, Myth/Ice 80%, Fire 75%, Storm 70%.",
              "Gear accuracy stacks on top, which is why fizzling mostly disappears at higher levels.",
              "The Balance school's *Precision*-style charms and accuracy enchants exist for emergencies.",
              "A fizzle hurts most when it's your big finisher — one more reason to carry a backup hit in your deck.",
            ],
          },
        ],
      },
      {
        title: "Healing, defeat, and getting back up",
        blocks: [
          {
            list: [
              "**Heals** restore health; Life gets them natively, everyone else uses potions, trained heals, or item cards.",
              "**Potions** (the bottles by your health globe) instantly refill health and mana out of combat — refill them free via Fairegrounds minigames or wisps.",
              "**Defeat isn't death.** You respawn in the world's Commons with 1 health and some lost progress in the current dungeon fight — annoying, not catastrophic.",
              "**Fleeing** (the door icon) exits a losing fight instantly; you keep your quest progress but arrive home at 1 health.",
              "In dungeons, defeat usually means re-entering the fight; the dungeon itself typically remembers your progress while you stay inside.",
            ],
          },
        ],
      },
      {
        title: "The status-effect zoo, tamed",
        blocks: [
          "Every icon that appears around a combatant belongs to one of a few families. Learn the families and no fight will ever look like visual noise again:",
          {
            table: {
              headers: ["Family", "Sits on", "Examples", "One-line rule"],
              rows: [
                ["Charms (positive)", "A wizard, affects their *outgoing* casts", "Blades (+damage)", "Consumed by your next qualifying cast"],
                ["Charms (negative)", "Same", "Weakness (−damage), Infection (−healing)", "Your next cast eats it — sometimes worth 'flushing' with a wand hit"],
                ["Wards (positive)", "A combatant, affects *incoming* casts", "Shields (−damage), Absorbs (soak N damage)", "Consumed by the next qualifying hit against you"],
                ["Wards (negative)", "Same", "Traps (+damage taken), Prisms (convert school)", "Consumed by the next qualifying hit — Feint is a trap"],
                ["Overtime effects", "A combatant, ticks each round", "DoTs (burns), HoTs (Sprite)", "Tick at the start of the affected side's turns; DoTs already running ignore later shields"],
                ["Auras", "You, several rounds", "Damage/healing/armor auras (Star school)", "One at a time — casting a new aura replaces the old"],
                ["Globals", "The whole duel", "School 'bubbles' boosting damage or healing", "One at a time for *everyone* — casting replaces the enemy's bubble, and vice versa"],
              ],
              caption:
                "Hover any icon in-game to read exactly what it is — the tooltip names the family for you.",
            },
          },
        ],
      },
      {
        title: "Turn order, precisely",
        blocks: [
          {
            list: [
              "**Join order = seat order.** Whoever enters a fight first sits first and acts first each round; allies who join later act later. In a planned team, your hitter joining *last* means everyone's blades land before their hit resolves that same round.",
              "**First circle advantage:** acting earlier means your kill can remove an enemy before it acts; acting later means you see nothing new but benefit from teammates' setup. Both seats have uses — farming teams often deliberately order their entry.",
              "**Mid-fight joiners** (friends porting in, street mobs wandering in) append to the end of their side's order and start with base pips — a rescuer arriving round 5 is a fresh body, not a fully-fueled one.",
              "**Enemies added mid-fight** work the same way, which is why pulling extra street mobs into a running battle ('adds') is survivable: they arrive pipless.",
              "**Fizzles, passes, and defeated combatants** don't shift the order — your seat is your seat until the fight ends.",
            ],
          },
        ],
      },
      {
        title: "Reading the enemy",
        blocks: [
          "Hover any enemy to see its school, health, and rank. This tells you almost everything:",
          {
            list: [
              "**Their school = their resist.** Fire enemies resist Fire. If you're a Fire wizard fighting Fire mobs, use your off-school wand hits or a **Prism** (converts your damage to the opposite school).",
              "**Their school = their attacks.** Expect Storm mobs to hit hard and Ice mobs to shield. Pack the matching shields if a fight is dangerous.",
              "**Boss cheats** — some bosses break the normal rules with scripted responses (\"casts a mass heal when you trap them\"). That's a feature of later worlds; [Cheating Bosses 101](/guides/cheating-bosses-101) demystifies it.",
            ],
          },
        ],
      },
    ],
    related: [
      "deck-building-basics",
      "blades-traps-and-stacking",
      "cheating-bosses-101",
    ],
  },

  {
    slug: "deck-building-basics",
    title: "Deck Building: Why Small Decks Win",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "The counterintuitive rule that speeds up every fight you'll ever have: build tiny decks on purpose, and let treasure cards be your emergency kit.",
    tags: ["deck", "cards", "treasure cards", "strategy"],
    updated: "July 2026",
    tldr: [
      "A deck is not a collection — it's what you *draw from mid-fight*. Every extra card makes you less likely to draw the one you need.",
      "For normal questing: blades + one attack-all spell + a backup hit. Often under 12 cards total.",
      "**Treasure cards** live in your sideboard — draw them manually with the *draw* triangle when you need emergency heals or extra damage.",
      "Enchant attacks with Sun-school damage enchants (Colossal etc.) *before* fights to turn them into permanent-until-used upgrades.",
      "Keep multiple deck presets: a mob deck, a boss deck, and a \"something went wrong\" deck with heals and shields.",
    ],
    sections: [
      {
        title: "The mistake every new player makes",
        blocks: [
          "New players fill all 64 slots \"to be prepared\". Then round three arrives, they need their big attack, and they're holding two shields, a heal, and a spell they trained at level 5. The fight takes ten rounds instead of four.",
          "The fix is almost insulting in its simplicity: **put fewer cards in the deck.** If your deck is seven cards — say, four blades and three copies of your attack-all spell — you draw exactly what you need every single round, every single fight.",
          {
            callout: {
              kind: "tip",
              title: "The rule of thumb",
              body: [
                "Build the deck for the fight you're about to take, not the fight you're afraid of. Speed *is* safety in PvE: mobs that die in three rounds don't get to hurt you.",
              ],
            },
          },
        ],
      },
      {
        title: "A questing deck, slot by slot",
        blocks: [
          "For clearing regular street mobs (2 enemies, sometimes 3–4):",
          {
            table: {
              headers: ["Slot", "Cards", "Why"],
              rows: [
                ["Blades", "3–4 copies of your school blade", "One blade per hitter, plus a spare for fizzles"],
                ["Main hit", "2–3 copies of your best attack-all (AoE) spell", "Hitting all enemies at once is nearly always faster than single-target"],
                ["Backup hit", "1–2 single-target attacks", "For finishing a survivor without recharging"],
                ["Flex", "0–2 (trap, shield, or heal — only if the area is rough)", "Resist the urge to add more"],
              ],
              caption: "Total: ~8–11 cards. Yes, really.",
            },
          },
          "For bosses, swap in traps (especially **Feint**), an extra copy of your hit, and a heal or two. That's your second deck preset — build it once, switch with two clicks at the deck screen.",
        ],
      },
      {
        title: "Treasure cards: your glove-box toolkit",
        blocks: [
          "Treasure cards (TCs) are one-use spell cards stored in your deck's **sideboard**. They don't clog your draws — you pull them in manually during a fight by clicking the draw triangle, discarding a card from hand if it's full.",
          {
            list: [
              "Stock emergency heals (Fairy, Pixie, Satyr TCs are cheap at the Bazaar or from the Arcanum-style libraries later).",
              "Stock a few big attack TCs for boss fights above your weight class.",
              "**Tower Shield TCs** turn scary boss hits into shrugs.",
              "TCs are also tradeable — veterans hand them down to new wizards on the same account via the Shared Bank.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "Anything can become a treasure card: enchanting a spell in combat with certain enchants creates a TC copy. This is the basis of several advanced tricks, but day one, just think of TCs as \"consumable spells for emergencies\".",
              ],
            },
          },
        ],
      },
      {
        title: "Enchants: the free damage most players forget",
        blocks: [
          "From the level ~50 era onward, Sun school trainers sell **damage enchants** (Strong → Giant → Monstrous → Gargantuan → Colossal → Epic and beyond). Drag one onto an attack card and that copy gets flat bonus damage for the rest of the fight — or permanently, if you enchant it before entering combat via the deck screen.",
          {
            list: [
              "Enchant every attack copy in your deck the moment you can. It's free damage with zero drawback in PvE.",
              "Enchanted cards can't be enchanted twice — pick your best available enchant.",
              "Keep unenchanted copies of spells you plan to use with *other* enchants (like accuracy or the AoE-converting ones much later).",
            ],
          },
        ],
      },
      {
        title: "Three ready-made deck skeletons",
        blocks: [
          "Copy these shapes, swap in your school's spells, adjust as your card pool grows:",
          {
            table: {
              headers: ["Deck", "Main deck", "Sideboard (TCs)", "Use for"],
              rows: [
                [
                  "**Street sweeper**",
                  "3–4 school blades · 3 enchanted AoEs · 1–2 single hits",
                  "2 heal TCs",
                  "All normal questing. 8–9 cards, perfect draws, three-round fights",
                ],
                [
                  "**Boss deck**",
                  "3 blades · 2 Feints · 2–3 enchanted big hits (AoE + single) · 2 heals or shields",
                  "2 heal TCs · 1 Feint TC · 1 Tower Shield TC · 1 big attack TC",
                  "Named bosses, dungeon finales, anything with real health",
                ],
                [
                  "**Cheat-fight deck**",
                  "Blades *or* traps (whichever the script allows) · 2 hits · absorbs/shields for the script's beats",
                  "Heals · cleanse (Triage-type) · one flexible answer",
                  "Scripted fights — trimmed to the minimum spell types so nothing triggers by accident ([why](/guides/cheating-bosses-101))",
                ],
              ],
              caption:
                "The pattern: every deck answers exactly one question — 'what does *this* fight punish, and what does it reward?'",
            },
          },
        ],
      },
      {
        title: "Treasure cards worth stocking",
        blocks: [
          "A small standing TC library covers 95% of emergencies. All of these are cheap at the Bazaar or common drops:",
          {
            list: [
              "**Heals:** Fairy and Pixie early; Satyr-tier once fights hit harder. The universal 'oops' button for every school but Life.",
              "**Tower Shields:** −50% on demand turns boss nukes into shrugs; also the classic answer while learning a new dungeon.",
              "**Feints:** the TC version stacks with your trained Feint — standard issue for boss and farming decks ([the math](/guides/blades-traps-and-stacking)).",
              "**Blades of your school:** TC blades stack with trained and item blades; hitters should never run dry.",
              "**One oversized attack:** a big off-school or same-school nuke TC for fights just above your weight class.",
              "**Cleanse/utility:** a DoT-remover and a shield-breaker cover the two most common 'I'm stuck' moments.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Restock in tens, not twos — future-you burns TCs faster than present-you expects. Surplus is also tradeable to your own alt wizards through the Shared Bank.",
              ],
            },
          },
        ],
      },
      {
        title: "Deck checklist before a hard fight",
        blocks: [
          {
            steps: [
              "Can I draw a blade turn one? (Enough blade copies?)",
              "Do I have my hit *and* a backup in case of fizzle?",
              "Feint or traps packed if it's a boss (and the boss doesn't punish traps — check [cheats](/guides/cheating-bosses-101))?",
              "Two heals or shields if the boss hits hard?",
              "Sideboard stocked: heal TCs, one big attack TC, a Tower Shield or two?",
              "Everything enchantable enchanted?",
            ],
          },
        ],
      },
    ],
    related: ["combat-basics", "blades-traps-and-stacking", "questing-faster"],
  },

  {
    slug: "training-points-guide",
    title: "Training Points: The Veteran Shopping List",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "Where training points come from, the universally-agreed best buys (Feint!), and a per-school spending plan so you never waste a point.",
    tags: ["training points", "feint", "secondary school", "zeke", "spells"],
    updated: "July 2026",
    tldr: [
      "You earn training points from leveling (every 4 levels up to 20, then slower), from **Prospector Zeke quests** in every world, and from some storyline milestones.",
      "The single best purchase for *every* school: the Death line up to **Feint** (+70% damage trap for 1 pip).",
      "Second priority: **Sun school damage enchants** (from Celestia onward) — they're what make your hits huge. These are must-buys as they unlock.",
      "Classic early utility: **Tower Shield** (Ice) for survivability, **Satyr** (Life) if you solo a lot and want real heals.",
      "Never buy attack spells from other schools early — without power-pip support they're weak. Utility (blades, traps, shields, heals) is where points shine.",
      "Respecs exist (\"buy back\" training points for crowns), but a good plan means never needing one.",
    ],
    sections: [
      {
        title: "Where points come from",
        blocks: [
          {
            list: [
              "**Leveling:** a point every 4 levels until level 20, then every 5 levels (so: 4, 8, 12, 16, 20, 25, 30, …).",
              "**Prospector Zeke:** every world has a Zeke collectible quest worth **one full training point** — 21 points across the Spiral (Khrysalis pays twice). Each [world playbook](/worlds) lists that world's collectible and zones.",
              "**Named side-quest givers:** a handful of NPCs pay additional points (full census below).",
              "Hover your Spellbook's training tab to see points available; trainers with a glowing icon have something you can afford.",
            ],
          },
        ],
      },
      {
        title: "The full training-point census (verified)",
        blocks: [
          "Beyond leveling, these are the collectible points veterans make sure they never miss:",
          {
            table: {
              headers: ["Source", "Points", "Where"],
              rows: [
                ["Prospector Zeke quests", "21", "One per world — two in Khrysalis (Khryckets + Iron Butterflies). Collectibles and zones in each [world playbook](/worlds)"],
                ["Eloise Merryweather quests", "5", "Her reagent-collect quests across early worlds"],
                ["Ogden Peake", "3", "Celestia side chain"],
                ["Francis Lux", "3 (across 4 quests)", "Avalon"],
                ["Inyanga Whitestripes", "2", "Zafaria"],
                ["Zaltanna the Mirrormask", "1", "Khrysalis"],
                ["Preservationist Zach", "1", "Lemuria"],
                ["Louise Mayqueen", "1", "Lemuria"],
              ],
              caption:
                "Totals verified against community training-point guides as of mid-2026 — newer worlds occasionally add givers, so grab every side quest attached to a named collector.",
            },
          },
        ],
      },
      {
        title: "The universal buys (every school wants these)",
        blocks: [
          {
            table: {
              headers: ["Buy", "Trainer school", "Cost", "Why it's core"],
              rows: [
                [
                  "Dark Sprite → Ghoul → Dream Shield → Banshee → **Feint**",
                  "Death (Ravenwood / Nightside), needs level 26",
                  "5 points total",
                  "Feint = +70% trap for 1 pip. The best damage-per-pip card in the game; every boss guide assumes you have it.",
                ],
                [
                  "**Sun damage enchants** (Strong → … → Colossal → …)",
                  "Sun (Celestia onward)",
                  "1 point each as they unlock",
                  "Flat damage added to every attack copy. Non-negotiable; buy each tier when offered.",
                ],
                [
                  "**Tower Shield** (via the Ice line)",
                  "Ice (Ravenwood)",
                  "3–4 points to reach",
                  "-50% on any incoming hit. Great early, great forever, legendary in PvP.",
                ],
                [
                  "**Elemental/Spirit Blade & Trap set**",
                  "Balance (Niles, on the Krokosphinx in Krokotopia)",
                  "Free via quests / cheap",
                  "Tri-blades and tri-traps that buff any elemental/spirit school — core for team play and stacking.",
                ],
                [
                  "**Star auras / Moon utility** (later arcs)",
                  "Star & Moon trainers (Celestia onward)",
                  "1 point each, situational",
                  "Damage auras like the Frenzy line become standard at high level.",
                ],
              ],
            },
          },
          {
            callout: {
              kind: "warn",
              title: "The classic mistake",
              body: [
                "Buying another school's *attacks* at level 10 because they look cool. Off-school attacks can't use your power pips (without a Mastery amulet), fall off within ten levels, and the points are gone. Utility ages forever; attacks age in dog years.",
              ],
            },
          },
        ],
      },
      {
        title: "Per-school spending plans",
        blocks: [
          "After Feint + Sun enchants (assume those for everyone), the flavor picks:",
          {
            table: {
              headers: ["Your school", "Strong picks", "Reasoning"],
              rows: [
                [
                  "Fire",
                  "Ice to Tower Shield; Life to Sprite/Satyr if solo",
                  "Fire has damage covered; you're buying survivability.",
                ],
                [
                  "Ice",
                  "Fire or Storm blades era-dependent; Life heals",
                  "Ice wants faster kills — but honestly Ice mostly wants Feint + enchants and is happy.",
                ],
                [
                  "Storm",
                  "Ice to Tower Shield; Life to Satyr",
                  "You will get hit back. Shields and a real heal keep the glass cannon firing.",
                ],
                [
                  "Myth",
                  "Life heals; Ice shields",
                  "Myth's kit is self-sufficient offensively; buy safety.",
                ],
                [
                  "Life",
                  "Ice to Tower Shield; Death to Feint is *especially* good for you",
                  "Your heals are native — points go pure offense/defense utility.",
                ],
                [
                  "Death",
                  "Ice to Tower Shield; Balance's blades",
                  "You already own Feint's school. Drains handle healing; add mitigation and buffs.",
                ],
                [
                  "Balance",
                  "Life to Satyr (a classic); Ice to Tower Shield",
                  "Balance can't shield/heal its own attacks' weaknesses natively as well early — Satyr patches it.",
                ],
              ],
              caption:
                "These are the time-tested defaults. PvP players deviate (more shields, dispels); questers rarely need to.",
            },
          },
        ],
      },
      {
        title: "Points are scarcer than they feel — budget",
        blocks: [
          "A rough lifetime budget: leveling to the cap plus every Zeke quest yields somewhere around 55–65 points. The universal buys above eat ~15. Sun/Star school enchants and auras across all arcs eat another sizable chunk. That leaves less spare than you'd think — which is exactly why \"cool-looking attack at level 12\" is the cardinal sin.",
          {
            callout: {
              kind: "tip",
              body: [
                "If you already misspent: Mr. Lincoln in Golem Court sells training point buybacks (for crowns). Painful but fixable. If you're only a few points deep, consider just living with it — the crowns are usually worth more.",
              ],
            },
          },
        ],
      },
    ],
    related: ["side-content-worth-doing", "choosing-your-school", "deck-building-basics"],
  },

  {
    slug: "membership-and-crowns",
    title: "Membership vs Crowns vs Free-to-Play",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "What's actually free, what membership unlocks, when buying areas with crowns beats subscribing, and the smart order to spend money (if at all).",
    tags: ["membership", "crowns", "free to play", "money", "spending"],
    updated: "July 2026",
    tldr: [
      "Free players get Wizard City's opening areas forever. After that, game areas require **membership** (subscription) or **crowns** (buy areas permanently, à la carte).",
      "Playing regularly for months/years → **crowns for permanent areas** is usually the better long-term value. Binge-playing for a summer → **membership**.",
      "Membership also raises quality-of-life caps (friends, PvP, faster energy, etc.); crowns purchases are forever and account-wide.",
      "Never buy gear packs hoping for specific items — they're lootboxes. Priority order for spending: areas → key quality-of-life → *then* cosmetics if you love the game.",
      "Watch for sales: area bundles, discounted memberships, and free-crowns trivia exist. Patience is a currency.",
    ],
    sections: [
      {
        title: "The three ways to play",
        blocks: [
          {
            table: {
              headers: ["Model", "What you get", "Best for"],
              rows: [
                [
                  "**Free-to-play**",
                  "Wizard City's starting zones, all core systems (combat, pets, trading limited), no time limit",
                  "Trying the game properly before spending anything",
                ],
                [
                  "**Membership**",
                  "Every world unlocked while subscribed + QoL perks (higher friend caps, ranked PvP access, faster energy regen, member benefits/events)",
                  "Active months of play; cheapest way to see *all* content quickly",
                ],
                [
                  "**Crowns purchases**",
                  "Buy zones one at a time — unlocked **permanently, for every wizard on the account**",
                  "Slow-and-steady players; families; anyone who hates subscriptions",
                ],
              ],
            },
          },
          "The models mix: many veterans buy early worlds with crowns, then hold membership only during big content pushes.",
        ],
      },
      {
        title: "Membership: what the sub actually buys",
        blocks: [
          {
            list: [
              "**All areas open** while active — the headline feature.",
              "**Ranked PvP and Pet Derby access.**",
              "**Bigger caps**: friends list, castle item limits, and similar quality-of-life ceilings.",
              "**Faster energy regen** — matters a lot for gardening/pets/fishing players.",
              "**Member Benefits**: rotating weekend perks like double pet XP, double gardening rewards, or free Team-Up. Planning around these is a real strategy — e.g., train pets during double-pet-XP weekends.",
            ],
          },
          {
            callout: {
              kind: "warn",
              body: [
                "When membership lapses you keep your characters, items, pets, and progress — you just can't *enter* member areas until you resub or buy them with crowns. Nothing is deleted.",
              ],
            },
          },
        ],
      },
      {
        title: "Crowns: spend like an accountant",
        blocks: [
          "Crowns are the premium currency. The exchange rates shift with sales, so think in priorities, not prices:",
          {
            steps: [
              "**Permanent areas** (if not subscribing): buy zones as the story reaches them, not in advance. Money already spent on zones you haven't reached is money lent to your future self at 0% interest.",
              "**Essential QoL**: a permanent mount (speed = life), extra backpack space, maybe an extra character slot.",
              "**Energy elixirs / big-ticket convenience**: only once you know you're a gardening/pet person.",
              "**Packs and cosmetics**: strictly fun-money. Pack odds for the headline item are low; treat any jackpot as a bonus, never a goal.",
            ],
          },
          {
            list: [
              "**Free crowns exist**: KingsIsle's trivia pages award small amounts daily, and events/promos occasionally gift more. Slow, but real.",
              "**Everything crowns-bought is account-wide where it matters** (areas) — your future alt wizards ride free.",
              "**Gift cards** (physical/digital) often bundle exclusive mounts/pets at good value — worth checking before buying plain crowns.",
            ],
          },
        ],
      },
      {
        title: "So… which should *you* pick?",
        blocks: [
          {
            list: [
              "**\"I just started.\"** Spend nothing. Free Wizard City comfortably covers your first days and tells you if you love the game.",
              "**\"I'm hooked and will play all summer.\"** One membership. Blitz the story; decide later if you're a lifer.",
              "**\"I play a few hours a week, indefinitely.\"** Crowns for areas as you reach them. Two years from now you'll own the Spiral outright.",
              "**\"I'm a returning veteran.\"** Membership for the catch-up push — you likely own early worlds already.",
              "**\"It's for my kid.\"** Crowns areas on a family account: no recurring charge, permanent progress, shared across their wizards.",
            ],
          },
        ],
      },
    ],
    related: ["complete-beginners-guide", "gold-farming-guide", "questing-faster"],
  },

  {
    slug: "daily-and-weekly-routines",
    title: "Daily & Weekly Routines: Compound Interest for Wizards",
    category: "getting-started",
    difficulty: "beginner",
    blurb:
      "The 15-minute daily loop and weekly rhythm that veterans run on autopilot — gardens, pets, dailies, events, and benefit weekends, in the right order.",
    tags: ["daily", "routine", "checklist", "habits", "efficiency"],
    updated: "July 2026",
    tldr: [
      "Progress in Wizard101 compounds: gardens, pet training, daily assignments, and event tracks all pay more for showing up daily than for binging.",
      "The core 15-minute daily: tend the garden → daily assignment → spend spare energy (pet games or fishing) → claim any event track progress.",
      "Weekly rhythm: plan farming around **Member Benefit weekends** (double rewards), check the event calendar Tuesday-ish, and batch Bazaar selling.",
      "Streaks matter: daily assignment rewards escalate with consecutive days.",
      "None of this is mandatory — it's the difference between an account that drifts and one that quietly gets rich while you quest.",
    ],
    sections: [
      {
        title: "Why routines beat binges here",
        blocks: [
          "Several of the game's systems are literally time-gated: plants grow in real days, energy refills on a clock, daily assignments reset daily, events run weekly tracks. A player who logs in 20 minutes a day out-earns a once-a-week marathoner on every one of those clocks — same total playtime, wildly different returns.",
          {
            callout: {
              kind: "info",
              body: [
                "This guide assumes systems you may not have unlocked yet — gardens ([Gardening 101](/guides/gardening-101)), pets ([Pets 101](/guides/pets-101)), keys ([Skeleton Keys](/guides/skeleton-keys-guide)). Adopt each piece as it unlocks; the routine grows with your account.",
              ],
            },
          },
        ],
      },
      {
        title: "The daily loop (~15 minutes)",
        blocks: [
          {
            steps: [
              "**Garden first** (5–8 min): tend needs, harvest matures/elders, replant returned seeds. The single highest-value habit in the game — it funds [pet snacks](/guides/best-plants-to-grow), gold, and amber.",
              "**Daily assignment** (2–5 min): the daily task from the assignment system — rewards escalate with your streak and include gold, crowns-tier items, and keys. Never skip a streak day you could have kept.",
              "**Spend the energy** (3–5 min): whatever the garden didn't use goes to pet minigames (training toward the next age) or a few fishing casts.",
              "**Claim, then log off**: open the current event page and claim any completed track tiers — most tracks progress from things you already did.",
              "Optional minute: glance at the Bazaar's reagent tab for underpriced rares ([sniping](/guides/reagent-farming-guide)); buy, bank, leave.",
            ],
          },
        ],
      },
      {
        title: "The weekly rhythm",
        blocks: [
          {
            table: {
              headers: ["When", "What", "Why"],
              rows: [
                ["Early week", "Check the in-game event calendar and news", "Events rotate monthly-ish; knowing the week's modes shapes your plans"],
                ["Any two evenings", "Your actual questing/farming sessions", "Progress happens here; the dailies just compound around it"],
                ["**Member Benefit weekends**", "Batch the matching activity: double pet XP → train; double gardening → replant cycles; double reagents → harvest runs", "The same effort pays literally double — planning around benefits is the biggest free multiplier in the game"],
                ["Weekend", "Batch Bazaar selling + one social farm (Team-Up a dungeon, spend saved keys with friends)", "Selling in batches saves time; [key bosses](/guides/skeleton-keys-guide) are better shared"],
                ["Sunday check", "Pet age milestone? Garden replant? Event track finishing?", "Five minutes of review keeps every clock ticking into next week"],
              ],
            },
          },
        ],
      },
      {
        title: "Routines by account age",
        blocks: [
          {
            list: [
              "**Fresh account (level 1–20):** just quest. Add the daily assignment the day you notice it; add gardening ~level 12+. Don't build routines before there's anything to compound.",
              "**Growing account (20–60):** the full daily loop starts paying — Couch Potato garden up, first serious pet in training, streak running.",
              "**Endgame account:** the loop is the economy: mega-snack gardens feed hatch projects, keys accumulate for weekend runs, event tracks bankroll spellements. Questing becomes the thing you do *between* harvests, and honestly? It rules.",
              "**Coming back from a break:** expect wilted plants (replant, forgive yourself), a dead streak (it rebuilds), and a full week of banked event progress. The routine restarts in one day.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Cap the routine at ~20 minutes. The moment dailies feel like a second job, cut the garden size, not the streak — sustainability beats scale, in gardening and in you.",
              ],
            },
          },
        ],
      },
    ],
    related: ["gardening-101", "pets-101", "skeleton-keys-guide", "events-overview"],
  },
];
