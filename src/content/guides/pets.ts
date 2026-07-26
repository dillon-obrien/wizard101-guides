import type { Guide } from "@/lib/types";

export const petGuides: Guide[] = [
  {
    slug: "pets-101",
    title: "Pets 101: Why Your Pet Is a Gear Slot",
    category: "pets",
    difficulty: "beginner",
    blurb:
      "What pets actually do, how ages and talents work, and the realistic path from 'cute follower' to 'stat machine that saves your life'.",
    tags: ["pets", "talents", "ages", "energy", "basics"],
    updated: "July 2026",
    image: { src: "/images/feature-pets.webp", alt: "Official Wizard101 artwork of wizards with their pets", width: 608, height: 342 },
    tldr: [
      "A trained pet is effectively an extra gear slot: +damage, +resist, and lifesaving 'may-cast' heals, all passive.",
      "Pets level through **ages** (Baby → Teen → Adult → Ancient → Epic → Mega and beyond), revealing one talent per age from a hidden pool of ten.",
      "You train pets with **energy** (minigames + snacks). Energy is shared with gardening and fishing — it's your account's quiet currency.",
      "Which talents can appear is decided by *breeding* (hatching), not luck alone. That's the whole pet game: curate the pool, then reveal it.",
      "Realistic first goal: any pet with 2–3 useful talents. The perfect pet comes later, through the [hatching loop](/guides/pet-hatching-guide).",
    ],
    sections: [
      {
        title: "What a pet does for you",
        blocks: [
          {
            list: [
              "**Passive stat talents** — e.g. ~+6% damage to all schools, ~+10% universal resist, critical bonuses. These stack with gear and are always on.",
              "**May-cast talents** — chances for the pet to cast spells on its own: heals (the beloved *Spritely* and *Fairy Friend*), blades, shields. A double-may-cast-heal pet is a soloist's best friend.",
              "**Item cards** — some pets grant castable cards to your deck.",
              "**Pet Derby** — the racing minigame, with its own talent pool, for those who enjoy it.",
              "**Morale** — okay, mostly they're adorable. This is also a feature.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "By midgame, the difference between 'no pet' and 'trained pet' is comparable to a full gear checkpoint. Veterans treat pet-building as part of the [gear progression](/guides/gear-progression-60-to-max), not a side hobby.",
              ],
            },
          },
        ],
      },
      {
        title: "Ages, XP, and the talent reveal",
        blocks: [
          "Pets gain XP from Pet Pavilion minigames (dance, cannon, maze, and friends) plus the snack you feed after each game. XP milestones advance the pet's age, and **each age reveals one talent** chosen from that pet's hidden pool:",
          {
            table: {
              headers: ["Age", "Talents revealed", "Practical note"],
              rows: [
                ["Baby", "0", "Fresh from the egg"],
                ["Teen", "1", "First reveal — early signal of the pool's quality"],
                ["Adult", "2", "Pets start feeling useful here"],
                ["Ancient", "3", "A good Ancient pet already changes fights"],
                ["Epic", "4", "The long march begins"],
                ["Mega", "5", "The classic 'finished' pet"],
                ["Ultra+", "5+", "Later ages add further perks for dedicated trainers"],
              ],
              caption:
                "XP per stage: 125 → 250 → 525 → 1050 → 2125 → 2250 (Ultra). Exact feedings for your snack quality: the [Pet XP & Snack Planner](/tools/pet-snacks).",
            },
          },
          "A pet's five **attributes** (Strength, Intellect, Agility, Will, Power) grow alongside ages and determine how strong its talents are — e.g. a maxed pet's damage talent gives its full listed value.",
        ],
      },
      {
        title: "Energy: the real cost of everything",
        blocks: [
          "Every minigame costs energy; energy refills slowly over time (faster ceilings with membership and energy gear). Gardening and fishing draw from the same pool, so pet-heavy weeks are gardening-light weeks unless you plan.",
          {
            list: [
              "**Energy gear exists** — a dedicated outfit swapped on before training/gardening sessions is a classic veteran move.",
              "**Mega snacks** (rank 8–9 snacks, mostly from [gardening](/guides/best-plants-to-grow)) give many times a basic snack's XP — they're what makes training fast.",
              "**Member benefit weekends** with double pet XP are the scheduled time to push a pet two ages in a day.",
            ],
          },
        ],
      },
      {
        title: "May-casts: triggers, value, and the silent-pet rule",
        blocks: [
          "May-cast talents fire on chance when specific things happen — taking a hit, casting, a round passing. Three practical truths:",
          {
            list: [
              "**They're a soloist's superpower**: a pet that sometimes drops a free heal (Fairy Friend, Spritely) converts near-deaths into non-events all day. For leveling wizards, one may-cast heal outvalues a third damage talent.",
              "**They're random, so never *plan* on them**: the pet is a bonus healer, not your healer. Decks still carry real heals ([deck building](/guides/deck-building-basics)).",
              "**They can betray you in scripted fights**: cheat bosses that punish blades, traps, or heals count *pet casts* too. Veterans keep one 'silent' pet (pure stat talents, zero may-casts) for choreography-sensitive fights — an advanced-but-real reason the [cheat guide](/guides/cheating-bosses-101) keeps mentioning pets.",
            ],
          },
        ],
      },
      {
        title: "Kiosk search cheat sheet",
        blocks: [
          "Finding the right hatch partner in the Hatchmaking Kiosk is a skill. What to type and look for:",
          {
            list: [
              "**Search your school** first — school pets often carry your school's Dealer/Giver line plus a useful item card.",
              "**Scan revealed talents, ignore the species**: a Mega pet showing Dealer + Giver + Pain-Giver + Proof + a heal may-cast is the jackpot listing regardless of what animal it is.",
              "**Full reveals beat potential**: five known-good talents beats three good reveals with two mysteries — you're buying the *pool*, and reveals are your only window into it.",
              "**Check attribute totals** (Strength/Agility/etc.): higher stat caps mean the same talents give bigger numbers.",
              "**Price ≠ quality**: kiosk fees scale with pedigree, but a well-bred mid-price pet from a generous breeder is common. The community keeps the kiosk stocked with god-tier lines on purpose — use them, and pay it forward later.",
            ],
          },
        ],
      },
      {
        title: "Your realistic pet roadmap",
        blocks: [
          {
            steps: [
              "**Levels 1–30:** Use whatever pet you like. Feed it snacks casually. Zero pressure.",
              "**Levels 30–60:** Get *any* pet with a heal may-cast or damage talents — quest drops and the [Hatchmaking Kiosk](/guides/pet-hatching-guide) both work. Train to Adult/Ancient.",
              "**Level 60+:** Start the real project: kiosk-hatch from a proven pet, grow Couch Potatoes for snacks, push a keeper to Mega.",
              "**Endgame:** Selective-breed toward the classic damage or tank builds — the exact talent shopping list is in [Pet Talents That Matter](/guides/pet-talents-that-matter).",
            ],
          },
        ],
      },
    ],
    related: ["pet-hatching-guide", "pet-talents-that-matter", "gardening-101"],
  },

  {
    slug: "pet-hatching-guide",
    title: "Pet Hatching: Borrowing Greatness",
    category: "pets",
    difficulty: "intermediate",
    blurb:
      "How hatching mixes talent pools, why the Hatchmaking Kiosk changed everything, and the selective-breeding loop that ends in a perfect pet.",
    tags: ["hatching", "kiosk", "breeding", "talent pool"],
    updated: "July 2026",
    image: { src: "/images/feature-pets.webp", alt: "Official Wizard101 artwork of wizards with their pets", width: 608, height: 342 },
    tldr: [
      "Hatching combines two pets: the egg's hidden talent pool draws from both parents. Hatch with a great pet and your baby can inherit its greatness.",
      "The **Hatchmaking Kiosk** (Pet Pavilion) lists community-offered pets — you can hatch with a near-perfect pet without knowing its owner.",
      "Hatching costs gold (scaling with the pets involved). Budget tens of thousands per hatch mid-game — [gold guide](/guides/gold-farming-guide) if you're short.",
      "The loop: hatch → train to Adult-ish to see talents → keep the best baby → hatch it again. Each generation purifies the pool.",
      "You can't see a pet's unrevealed pool. You infer it from parents and reveals — that inference *is* the hobby.",
    ],
    sections: [
      {
        title: "How inheritance actually works",
        blocks: [
          "Every pet carries ten hidden talents (five regular, five derby). When two pets hatch, the egg's pool is drawn from the parents' pools — so a baby from two well-bred parents has mostly-good possible talents, while a baby with one wild parent is a coin-flip zoo.",
          {
            list: [
              "**Body vs pool:** the egg's *species* comes from either parent (some crossbreeds are the fun part). Talents and base attributes mix from both.",
              "**Reveals are random draws from the pool** — even a perfect pool can reveal in an awkward order, which is why breeders hatch multiples.",
              "**'Fails' happen:** a baby that reveals a junk talent early gets retired to the hatching bench (its pool may still be fine as a *parent*).",
              "You never breed talents *into* a line from nowhere — you can only borrow them from a parent that has them in its pool. Hence: start from the best pet you can access.",
            ],
          },
        ],
      },
      {
        title: "The Hatchmaking Kiosk (use this, seriously)",
        blocks: [
          "The kiosk in the Pet Pavilion is a self-serve catalog of pets other players have offered for public hatching. It solved pet-building's old problem (knowing someone with a god pet).",
          {
            steps: [
              "Browse by school or talent keywords; look for pets whose **revealed** talents match the [meta shopping list](/guides/pet-talents-that-matter).",
              "Prefer Mega+ pets with 5 good reveals — full reveals mean a fully-known (and therefore honest) pool.",
              "Pay the gold, receive the egg, wait out the hatch timer.",
              "Train the baby to Adult/Ancient — enough reveals to judge it.",
              "Good baby? It's your new parent. Meh baby? Hatch again, from it or the kiosk. Repeat.",
            ],
          },
          {
            callout: {
              kind: "tip",
              body: [
                "Offering your own good pet in the kiosk earns you gold and hatch-priority perks — the pet economy runs on generous breeders. Pay it forward once your line is clean.",
              ],
            },
          },
        ],
      },
      {
        title: "Wow Factor: the hidden return-odds game",
        blocks: [
          "Which *body* comes out of the egg isn't a coin flip. Every pet body carries a hidden **Wow Factor** (0–10): the flashier and rarer the body, the higher the number — and the LOWER its chance of being returned from a hatch. Common drop pets sit around 0–3; rare crowns-tier bodies sit 7–10.",
          {
            list: [
              "**The math:** each body's return chance is (11 − its WF) ÷ (22 − (WF₁ + WF₂)). Hatch a Firecat (WF 1) with a Clockwork Paladin (WF 10) and the Firecat body comes back ~91% of the time — plug your own pair into the [Hatch Odds Calculator](/tools/hatch-calculator).",
              "**Exclusive bodies break the rules:** in a *self-hatch*, an Exclusive body placed on the RIGHT always returns the LEFT body — even if the left is itself Exclusive or retired.",
              "**To get an Exclusive back:** put it on the LEFT in a self-hatch, or make it your Selected Pet in kiosk and in-person hatches, so normal wow-factor odds apply.",
              "**Practical takeaway:** chasing a rare body through the kiosk is a numbers game — expect several hatches, and budget gold accordingly. Chasing *talents* doesn't care which body returns; the pool mixes either way.",
            ],
          },
          {
            callout: {
              kind: "info",
              body: [
                "Wow factor is invisible in-game; the community has mapped it for ~1,700 pets through hatching research (the lineage of the classic petcalc tool). Our [calculator](/tools/hatch-calculator) ships the formulas plus a 0–10 reference table with example bodies per tier.",
              ],
            },
          },
        ],
      },
      {
        title: "Costs, timers, and multi-hatching",
        blocks: [
          {
            list: [
              "**Gold cost** scales with the pets' pedigree — expect tens of thousands per mid-tier hatch. This is the single biggest ongoing gold sink for most accounts.",
              "**Hatch timers** delay the egg (elixirs can skip; patience is free).",
              "**Hatching peppers/elixir perks** and event bonuses periodically discount or accelerate hatches — stack your hatching sprees onto those windows.",
              "Serious breeders hatch several eggs per generation to beat reveal-order luck. Casuals: one at a time is fine, it's just slower.",
            ],
          },
        ],
      },
      {
        title: "A concrete first project",
        blocks: [
          "Goal: a questing pet with ~3 of: double may-cast heals, damage boosts, or resist — achievable in a weekend or two.",
          {
            steps: [
              "Farm ~40–80k gold ([Halfang](/guides/gold-farming-guide) or Bazaar flips).",
              "Kiosk-hatch with a Mega pet showing Spell-Proof + damage talents + a may-cast heal.",
              "Train the baby to Ancient during a double-pet-XP weekend using garden-grown snacks.",
              "If 2 of 3 reveals are keepers, push to Mega. If not, hatch the baby back with the same kiosk line and try again.",
              "Welcome to the loop. It's weirdly soothing. See you at generation eleven.",
            ],
          },
        ],
      },
    ],
    related: ["pets-101", "pet-talents-that-matter", "gold-farming-guide"],
  },

  {
    slug: "pet-talents-that-matter",
    title: "Pet Talents That Matter (and the Ones That Don't)",
    category: "pets",
    difficulty: "intermediate",
    blurb:
      "The community-standard talent builds: the damage quint, the tank build, may-cast heals — with approximate values and what to reroll away.",
    tags: ["talents", "spell-proof", "pain-giver", "may cast", "meta"],
    updated: "July 2026",
    image: { src: "/images/feature-pets.webp", alt: "Official Wizard101 artwork of wizards with their pets", width: 608, height: 342 },
    tldr: [
      "The classic questing build is 'damage + safety': school-Dealer + school-Giver + Pain-Giver (all +damage) plus Spell-Proof (+~10% resist) and a flex slot.",
      "May-cast heals (Fairy Friend, Spritely) are the best training wheels in the game — soloists should keep at least one.",
      "Tank/PvP builds stack Spell-Proof + Spell-Defying + block/health talents instead of damage.",
      "Junk to breed away from: most 'Cast-er' junk buffs, derby-only talents in your regular pool, and niche selfish talents (gold finder is fun, not meta).",
      "Exact percentages vary by pet attributes; treat numbers below as 'approximately, at max stats'.",
    ],
    sections: [
      {
        title: "The meta shopping list",
        blocks: [
          {
            table: {
              headers: ["Talent", "Approx effect (maxed pet)", "Build role"],
              rows: [
                ["[School]-Dealer", "~+9–10% damage (your school)", "Damage core"],
                ["[School]-Giver", "~+5–6% damage (your school)", "Damage core"],
                ["Pain-Giver", "~+6% damage (all schools)", "Damage core"],
                ["Pain-Bringer", "~+3% damage (all schools)", "Damage filler"],
                ["Spell-Proof", "~+10% universal resist", "Safety core — nearly every build wants this"],
                ["Spell-Defying", "~+5% universal resist", "Tank core / safety filler"],
                ["Fairy Friend / Spritely", "May-cast heal", "Solo & leveling lifesaver"],
                ["Critical talents (e.g. [School]-Assailant / Striker)", "Critical rating", "Endgame damage refinement"],
                ["Mighty / Thinkin' Cap etc. (stat boosts)", "Raises pet attributes", "Indirect — makes other talents hit max values"],
              ],
              caption:
                "Names follow the long-standing pattern: Dealer > Giver > Bringer within a family. Values scale with the pet's attribute stats.",
            },
          },
        ],
      },
      {
        title: "The three standard builds",
        blocks: [
          {
            list: [
              "**Quint damage (the farmer's pet):** Dealer + Giver + Pain-Giver + Pain-Bringer + critical. Maximum speed, zero safety net — pairs with high-resist gear or a healer friend.",
              "**Triple-double (the balanced classic):** three damage talents + Spell-Proof + Spell-Defying. The default recommendation for questing through the whole game.",
              "**Tank/support:** Proof + Defying + health talents + may-cast heals. PvP flavors swap in block and selfish shields.",
            ],
          },
          {
            callout: {
              kind: "tip",
              title: "Which should you build first?",
              body: [
                "Triple-double. It's forgiving while leveling, respectable at endgame, and its parents are everywhere in the kiosk. Speed demons can breed the quint later off the same line.",
              ],
            },
          },
        ],
      },
      {
        title: "May-casts: the underrated tier",
        blocks: [
          "May-cast talents fire randomly on triggers like taking damage. The healing ones effectively add a free healer to solo play:",
          {
            list: [
              "**Fairy Friend** — chunky single heal; the gold standard.",
              "**Spritely** — heal-over-time; iconic, still lovely.",
              "**Unicorn** — team heal; group questers' favorite.",
              "May-cast *blades/shields/auras* range from pleasant to actively annoying (a surprise aura can overwrite yours). Heals are the safe picks.",
              "One warning: may-casts can trigger boss cheats that punish certain spell types — for scripted fights, some veterans keep a 'silent' no-may-cast pet. Advanced problem, later problem.",
            ],
          },
        ],
      },
      {
        title: "What to breed away from",
        blocks: [
          {
            list: [
              "**Derby talents in your regular pool** — five wasted lottery tickets if you never race.",
              "**Selfish oddities** (gold/loot finders, minor pip talents) — fun, not builds.",
              "**Redundant may-cast clutter** — three different may-cast blades is chaos, not synergy.",
              "**Attribute-only pools with no payoffs** — Mighty is great *next to* Dealer/Proof, pointless alone.",
              "Remember: you can't delete talents from a pool, only out-breed them across generations. Every kiosk hatch with a cleaner parent dilutes the junk.",
            ],
          },
        ],
      },
    ],
    related: ["pet-hatching-guide", "pets-101", "gear-progression-60-to-max"],
  },
];
