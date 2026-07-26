import type { WorldPlaybook } from "@/lib/types";
import { slugify } from "@/lib/text";
import { worlds } from "./worlds";

/**
 * World playbooks: the no-fluff, per-world action sheet.
 * Zeke data (collectible names, counts, zones) verified against community
 * walkthrough sources as of mid-2026. Route beats are the practical story
 * order; treat exact sequencing as approximate in later worlds.
 */
export const playbooks: WorldPlaybook[] = [
  {
    slug: "wizard-city",
    name: "Wizard City",
    pitch: "The tutorial world. Learn the loop, grab the early unlocks, get out by ~10.",
    route: [
      "Unicorn Way — the real tutorial: first mobs, first boss, first gear.",
      "Triton Avenue → Firecat Alley → Cyclops Lane — the three street arcs.",
      "Nightside/Sunken City era wraps the world; the arrow hands you Krokotopia.",
    ],
    zeke: {
      collectible: "Smiths",
      count: 10,
      zones: [
        "Commons", "Golem Court", "Unicorn Way", "Ravenwood", "Shopping District",
        "Olde Town", "Cyclops Lane", "Triton Avenue", "Firecat Alley", "Colossus Boulevard",
      ],
      note: "One Smith hides in Colossus Boulevard — grab it whenever you unlock that street.",
    },
    grab: [
      "Fishing at level 7 (Lucky Hookline finds you).",
      "Crafting (Eudora Tangletree, Olde Town) + Monstrology ('Know Thine Enemy', Burke in Ravenwood) around 12.",
      "Learn the Bazaar's location (Olde Town). You'll be back ten thousand times.",
    ],
    skip: [
      "Colossus Boulevard unless you're underleveled — it's side XP.",
      "All world-shop gear, forever.",
    ],
    advanced: [
      "This world is the endgame hub in disguise: Waterworks (60, Crab Alley), the Catacombs (130, the Drains), Aquila's boat (30/70/90).",
      "Team-Up kiosk + Bazaar sniping both live in Olde Town.",
    ],
  },
  {
    slug: "krokotopia",
    name: "Krokotopia",
    pitch: "Three pyramids, one sleeping empire. First real dungeons, ~10–20.",
    route: [
      "Pyramid of the Sun — Altar of Kings and the intro chain.",
      "Krokosphinx — the Balance school hub; the Emperor's Retreat arc.",
      "Tomb of Storms — Karanahn Barracks → Well of Spirits → finale.",
    ],
    zeke: {
      collectible: "Beetles",
      count: 10,
      zones: [
        "Oasis (×2)", "Altar of Kings", "Chamber of Fire", "Krokosphinx",
        "Entrance Hall", "Emperor's Retreat", "Tomb of Storms", "Well of Spirits", "Karanahn Barracks",
      ],
    },
    grab: [
      "Niles on the Krokosphinx: train Elemental/Spirit Blades & Traps — the stacking backbone, cheap.",
      "Your first Mastery-adjacent habits: pass to build pips, blade before hitting.",
    ],
    skip: [
      "Side quests once you're at-level — the pyramids give plenty.",
    ],
    advanced: [
      "Selenopolis (the 2024 zone) lives here — a level-50 bridge story you return for after Dragonspyre.",
    ],
  },
  {
    slug: "marleybone",
    name: "Marleybone",
    pitch: "Dog-detective rooftops, ~20–30. Ends with the Big Ben climb.",
    route: [
      "Regent's Square hub → Digmoore Station.",
      "Streets: Hyde Park, Chelsea Court, Scotland Yard / Newgate Prison chain.",
      "Dungeons ramp: The Ironworks → Katzenstein's Lab → Big Ben (the finale tower).",
    ],
    zeke: {
      collectible: "Stray Cats",
      count: 10,
      zones: [
        "Regent's Square", "Digmoore Station", "Hyde Park", "Chelsea Court", "The Ironworks",
        "Scotland Yard Roof", "Newgate Prison", "Knight's Court", "Katzenstein's Lab", "Big Ben",
      ],
      note: "Three cats sit inside dungeons (Ironworks, Katzenstein's, Big Ben) — collect during the story run so you never re-enter.",
    },
    grab: [
      "AT 30, STOP: Cyrus Drake sends you to Mount Olympus. Farm the Zeus set + Sky Iron Hasta before continuing — it carries you to the 50s.",
      "Wysteria unlocks at 25 (Ambrose) — bank it for any slow patch.",
    ],
    skip: [
      "O'Leary/side collect quests unless underleveled.",
    ],
    advanced: [
      "Mount Olympus stays the best value-per-minute farm of the midgame — gold, jewels, gear for alts.",
    ],
  },
  {
    slug: "mooshu",
    name: "MooShu",
    pitch: "Four corrupted Oni, ~30–40. Long, pretty, and your AoE era begins.",
    route: [
      "Jade Palace hub → village arcs: Hametsu, Shoshun, Kishibe.",
      "Temple arcs: Shirataki, Yoshihito; war zones: Tatakai, Crimson Fields.",
      "Village of Sorrow → Tree of Life: the Jade Oni finale.",
    ],
    zeke: {
      collectible: "Blue Oysters",
      count: 10,
      zones: [
        "Jade Palace (×2)", "Hametsu Village", "Tatakai Outpost", "Shoshun Village",
        "Kishibe Village", "Shirataki Temple", "Yoshihito Temple", "Village of Sorrow", "Tree of Life",
      ],
    },
    grab: [
      "Grizzleheim's level-35 spell chain (Baldur Goldpaws, Olde Town) the moment you hit 35 — Fuel/Shatter/Triage tier utility.",
      "Black Lotus grows here — harvest every one you pass; future crafting thanks you.",
    ],
    skip: [
      "Nothing structural — MooShu is linear. Side quests only if the Oni fights feel rough.",
    ],
    advanced: [
      "Black Lotus realm-hop circuits here stay relevant for a decade of recipes.",
    ],
  },
  {
    slug: "dragonspyre",
    name: "Dragonspyre",
    pitch: "Arc 1 finale, ~40–50. Ghost soldiers, the Labyrinth, and Malistaire.",
    route: [
      "The Basilica + The Atheneum hubs open the world.",
      "Grand Chasm → Drake Hatchery (the egg hunt) → The Necropolis.",
      "The Labyrinth → Crystal Grove → Dragon's Roost → Crown of Fire: Malistaire.",
    ],
    zeke: {
      collectible: "Stone Roses",
      count: 10,
      zones: [
        "The Basilica", "The Atheneum", "Tower Archives", "Grand Chasm", "The Necropolis",
        "The Labyrinth", "Dragonspyre Academy", "Crystal Grove", "Dragon's Roost", "Crown of Fire",
      ],
      note: "Several roses sit in long dungeons — collect on the story pass.",
    },
    grab: [
      "Your LEVEL 48 SCHOOL SPELL quest from your professor — the arc's real reward. Never leave without it.",
      "Wintertusk unlocks once Grizzleheim's done ('Cold News') — clear it late-DS/early-Celestia for huge XP.",
    ],
    skip: [
      "Repeatable soldier side chains; the Labyrinth's optional wings on the first pass.",
    ],
    advanced: [
      "THE LOREMASTER lives in the Atheneum — the game's most famous spell farm (Deer Knight & two dozen more). Farm at 50+, revisit forever.",
    ],
  },
  {
    slug: "grizzleheim",
    name: "Grizzleheim",
    pitch: "Norse side world, 20+. Big XP, bear politics, zero pressure.",
    route: [
      "Northguard → Savarstaad Pass → Vigrid Roughland.",
      "Mirkholm Keep → Helgrind Warren → Ravenscar finale.",
      "Do it in chunks during Marleybone/MooShu lulls; finish by high 30s.",
    ],
    zeke: {
      collectible: "Yardbirds",
      count: 10,
      zones: [
        "Northguard", "Savarstaad Pass (×2)", "Vigrid Roughland (×2)",
        "Mirkholm Keep (×2)", "Helgrind Warren", "Ravenscar (×2)",
      ],
    },
    grab: [
      "Level-35 bonus spell chain (via Baldur Goldpaws in Olde Town).",
      "Couch Potato seeds drop from mobs here — the pet-snack economy starts now.",
    ],
    skip: [
      "Nothing — this whole world is optional; that's the charm.",
    ],
    advanced: [
      "Couch Potato seed farming routes; the story here pays off in Wintertusk and again in Arc 3.",
    ],
  },
  {
    slug: "wintertusk",
    name: "Wintertusk",
    pitch: "Grizzleheim's hard second act. The best side-world payoff in the game.",
    route: [
      "Hrundle Fjord → Austrilund → Vestrilund.",
      "Sudrilund → Nordrilund → Nastrond finale.",
      "Tuned for 40+; smoothest at 48–55 during early Celestia.",
    ],
    zeke: {
      collectible: "Troggs",
      count: 6,
      zones: [
        "Hrundle Fjord", "Austrilund", "Vestrilund", "Sudrilund", "Nordrilund", "Nastrond",
      ],
    },
    grab: [
      "The LEVEL 55 bonus spell (Talos, Availing Hands, Frozen Armor tier) — needs your 35 spell + Sudrilund progress.",
      "Massive quest XP that fast-forwards the Celestia grind.",
    ],
    skip: [
      "Nothing. Wintertusk earns every minute.",
    ],
    advanced: [
      "HALFANG (Vestrilund tower, beside the entrance): the classic gold farm — one-minute loops, Cow's Pearl Amulet pays ~8–9k a pop.",
      "Level ~56 crafted gear recipes here = the no-farm Waterworks alternative.",
    ],
  },
  {
    slug: "wysteria",
    name: "Wysteria",
    pitch: "A snooty rival school and a rigged tournament. 25+, done in an evening.",
    route: [
      "Pigswick Academy hub → Pegasus Place → Tanglewood Way → Library Archives.",
      "Tournament story wraps itself; fast XP burst, fun writing.",
    ],
    zeke: {
      collectible: "Wallflowers",
      count: 4,
      zones: ["Pigswick Academy", "Library Archives", "Pegasus Place", "Tanglewood Way"],
      note: "Four items, one evening — the easiest training point in the Spiral.",
    },
    grab: ["The training point. That's the loot."],
    skip: ["Nothing to skip — it's already short."],
    advanced: ["Nothing endgame lives here. Enjoy the vacation."],
  },
  {
    slug: "celestia",
    name: "Celestia",
    pitch: "Arc 2 opens underwater, ~50–60. The difficulty — and the Astral schools — arrive.",
    route: [
      "Base Camp → Survey Camp → The Grotto.",
      "District of the Stars → The Stellarium → Stormriven (+ Hall).",
      "The Portico → Science Center → Crustacean Empire → Trial of the Spheres finale.",
    ],
    zeke: {
      collectible: "Lounge Lizards",
      count: 10,
      zones: [
        "Base Camp", "Survey Camp", "The Grotto", "District of the Stars", "The Stellarium",
        "Stormriven", "Stormriven Hall", "The Portico", "Science Center", "Crustacean Empire",
      ],
    },
    extraTp: [
      "Ogden Peake's side-quest chain here pays 3 MORE training points — do all three.",
    ],
    grab: [
      "SUN SCHOOL ENCHANTS from the Astral trainers — buy every damage enchant tier as it unlocks, forever.",
      "Waterworks at 60 (back in Wizard City) — the era's gear answer.",
    ],
    skip: [
      "Mob-dense side streets once at-level; Celestia mobs shield and heal — speed matters.",
    ],
    advanced: [
      "This is where decks get rebuilt: enchanted AoEs + blades or you feel every fight.",
    ],
  },
  {
    slug: "zafaria",
    name: "Zafaria",
    pitch: "Savanna kingdoms, ~60–70. Packs hit harder; your AoE game gets graded.",
    route: [
      "Baobab Market hub → Savannah → Zamunda (+ Outskirts).",
      "Stone Town → Waterfront → Elephant Graveyard and the Mirror Lake finale.",
    ],
    zeke: {
      collectible: "Sock Monkeys",
      count: 7,
      zones: [
        "Baobab Market", "Savannah", "Zamunda", "Zamunda Outskirts", "Stone Town", "Waterfront", "Elephant Graveyard",
      ],
    },
    extraTp: [
      "Inyanga Whitestripes' quests here pay 2 more training points.",
    ],
    grab: [
      "Your level-58 school spell quest when the professor calls.",
      "Colossal-tier Sun enchants as they unlock — re-enchant the whole deck.",
    ],
    skip: [
      "Longspeak collect-athons unless underleveled — Zafaria's side quests are famously grindy.",
    ],
    advanced: [
      "Nothing endgame-critical — push through; Avalon's better.",
    ],
  },
  {
    slug: "avalon",
    name: "Avalon",
    pitch: "Arthurian myth done right, ~70–80. The arc's best story; solid pace.",
    route: [
      "Caliburn → Abbey Road → High Road.",
      "Caer Lyon → The Wild → The Wyrd.",
      "Dun Dara → Outer Yard → Lake Shore and the keep finale.",
    ],
    zeke: {
      collectible: "Crows",
      count: 9,
      zones: [
        "Caliburn", "Abbey Road", "High Road", "Caer Lyon", "The Wild",
        "The Wyrd", "Dun Dara", "Outer Yard", "Lake Shore",
      ],
    },
    extraTp: [
      "Francis Lux's quest chain pays 3 more training points across 4 quests.",
    ],
    grab: [
      "Atlantea unlocks at 70 (Cyrus again) — Poseidon pieces beat Waterworks for several slots.",
      "Lore-spell crafting vendors appear this era — window-shop the recipes you'll want amber for.",
    ],
    skip: [
      "The Wild's optional bear content on a first pass.",
    ],
    advanced: [
      "Ghost Avalon / raid-adjacent content threads start here in later updates; Dun Dara hosts raid NPCs eventually.",
    ],
  },
  {
    slug: "azteca",
    name: "Azteca",
    pitch: "Dinosaurs under a falling star, ~80–90. The arc's hardest stretch. Bring a real deck.",
    route: [
      "The Zocalo → Three Points → Cenote.",
      "Mangrove Marsh → Saltmeadow Swamp → Zultun Dock → Cloudburst Forest.",
      "Alto Alto → Tierra de Brea → Floating Mountains → Twin Giants → Xibalba finale.",
    ],
    zeke: {
      collectible: "Toy UFOs",
      count: 11,
      zones: [
        "The Zocalo", "Three Points", "Cenote", "Mangrove Marsh", "Saltmeadow Swamp", "Zultun Dock",
        "Cloudburst Forest", "Alto Alto", "Tierra de Brea", "Floating Mountains", "Twin Giants",
      ],
      note: "Eleven items — the biggest Zeke hunt in the Spiral. Grab as you quest or budget a lap at the end.",
    },
    grab: [
      "Level-88-era spell quests; keep gear current (Waterworks still fine, Hades at 90 next).",
      "Team-Up shamelessly — everyone needs it here; the queue is always warm.",
    ],
    skip: [
      "Nothing structural — Azteca is linear and long. Henchmen/friends on the endgame gauntlet are legitimate.",
    ],
    advanced: [
      "Tartarus at 90 (Cyrus, one last time): Hades gear is the 90s standard; secret bosses Cronus & Gladiator Dimachaerus drop era-famous jewelry.",
    ],
  },
  {
    slug: "khrysalis",
    name: "Khrysalis",
    pitch: "Morganthe's empire in two huge parts, ~90–100. Shadow magic unlocks; the endgame begins.",
    route: [
      "Part 1: Bastion → Silent Market → Moon Cliffs → Last Wood → Tyrian Gorge → Fort Rachias.",
      "Part 2: Crescent Beach → Ruined Alcazar → Sardonyx → Kondha Desert → The Hive finale.",
    ],
    zeke: {
      collectible: "Khryckets + Iron Butterflies (two quests!)",
      count: 11,
      zones: [
        "Khryckets: Bastion", "Silent Market", "Moon Cliffs", "Last Wood", "Tyrian Gorge", "Fort Rachias",
        "Butterflies: Crescent Beach", "Ruined Alcazar", "Sardonyx", "Kondha Desert", "The Hive",
      ],
      note: "Khrysalis pays TWO training points — one Zeke quest per part. Don't leave part 1 without the Khryckets.",
    },
    extraTp: [
      "Zaltanna the Mirrormask's quest pays 1 more training point.",
    ],
    grab: [
      "SHADOW MAGIC near the end — the endgame's signature system ([primer](/guides/shadow-magic-and-archmastery)).",
      "At 100: Dworgyn's 'Branches of Woe' opens Castle Darkmoor. The gear era everyone remembers.",
    ],
    skip: [
      "Silent Market side wings on the first pass; return overleveled if completionist.",
    ],
    advanced: [
      "Castle Darkmoor farming (Graveyard Tier 1) defines your next 30 levels — go with a team.",
    ],
  },
  {
    slug: "polaris",
    name: "Polaris",
    pitch: "Napoleonic penguins, ~100–110. Short, funny, brilliant. Arc 3 opens.",
    route: [
      "Walruskberg (+ Harbor) → Forlorn Tayg.",
      "River of Frozen Tears → Urville Station → Frigid Maw finale (Rasputin awaits).",
    ],
    zeke: {
      collectible: "Vanilla Ices",
      count: 6,
      zones: [
        "Walruskberg", "Walruskberg Harbor", "Forlorn Tayg", "River of Frozen Tears", "Urville Station", "Frigid Maw",
      ],
    },
    grab: [
      "Shadow-enhanced spells become your standard kit — practice the [three-currency turn](/guides/shadow-magic-and-archmastery).",
    ],
    skip: [
      "Very little exists to skip; Polaris respects your time.",
    ],
    advanced: [
      "Much later: Cabal's Revenge (the level-170 raid) is set in an abandoned Polaris fort.",
    ],
  },
  {
    slug: "mirage",
    name: "Mirage",
    pitch: "Spy-thriller desert, ~110–120. Mobs demand pierce; the story demands attention.",
    route: [
      "Caravan (the moving hub) → Alkali Barrows → Caterwaul Canyons.",
      "Rubal Wastes → Istanboa → Yakhal Mountain finale.",
    ],
    zeke: {
      collectible: "Desert Oases",
      count: 6,
      zones: [
        "Caravan", "Alkali Barrows", "Caterwaul Canyons", "Rubal Wastes", "Istanboa", "Yakhal Mountain",
      ],
    },
    grab: [
      "Pierce on gear becomes non-negotiable this era — audit the loadout before the final gauntlet.",
    ],
    skip: [
      "Side content freely; Mirage's main line is dense enough.",
    ],
    advanced: [
      "Keep spending keys: this era's skeleton bosses drop spellements you actually want.",
    ],
  },
  {
    slug: "empyrea",
    name: "Empyrea",
    pitch: "Arc 3's two-part finale, ~120–130. Everything pays off. No spoilers. Bring tissues.",
    route: [
      "Part 1: Aerial Shores → Aerial Jungle → Zanadu (+ Sewers).",
      "Part 2: Outer Athanor → Inner Athanor → Sepidious and the finale.",
    ],
    zeke: {
      collectible: "Blowfish",
      count: 7,
      zones: [
        "Aerial Shores", "Aerial Jungle", "Zanadu", "Zanadu Sewers", "Outer Athanor", "Inner Athanor", "Sepidious",
      ],
    },
    grab: [
      "VANGUARD gear drops in Part 2 — hold every piece; it's the crafting seed for Dragoon at 130.",
      "Finish the story before reading anything about it. Seriously.",
    ],
    skip: [
      "Nothing. It's the finale.",
    ],
    advanced: [
      "At 130 the Catacombs opens (under Wizard City): Dragoon crafting at Zasha Emberforge, Fellspawn key runs, the endgame community's playground.",
    ],
  },
  {
    slug: "karamelle",
    name: "Karamelle",
    pitch: "Candy with teeth, ~130–140. Arc 4 begins sweetly and does not stay sweet.",
    route: [
      "Karamelle City → von Trap Estate → Rock Candy Mountains.",
      "Gumdrop Forest → Sweetzburg → Nibbleheim (+ Mine).",
      "Gutenstadt → Black Licorice Forest → Candy Corn Farm → Gobblerton finale.",
    ],
    zeke: {
      collectible: "Lemon-heads",
      count: 11,
      zones: [
        "Karamelle City", "von Trap Estate", "Rock Candy Mountains", "Gumdrop Forest", "Sweetzburg",
        "Nibbleheim", "Nibbleheim Mine", "Gutenstadt", "Black Licorice Forest", "Candy Corn Farm", "Gobblerton",
      ],
    },
    grab: [
      "Uber-tier drops / 'Paradox' crafted set at 140 if Dragoon's aging on your build.",
    ],
    skip: [
      "Side quests freely — Arc 4 pacing is generous.",
    ],
    advanced: [
      "Aberrant Paradox (Karamelle City) headlines the 140 farm targets.",
    ],
  },
  {
    slug: "lemuria",
    name: "Lemuria",
    pitch: "Lost continent, ~140–150. The Cabal deepens; guild raids enter the game.",
    route: [
      "Telos → Wildlands → Ursai Village → Night Forest.",
      "Badlands → Mandoria → Sky City → The Heap finale.",
    ],
    zeke: {
      collectible: "Hero Flowers",
      count: 8,
      zones: [
        "Telos", "Wildlands", "Ursai Village", "Night Forest", "Badlands", "Mandoria", "Sky City", "Heap",
      ],
    },
    extraTp: [
      "Preservationist Zach and Louise Mayqueen each pay a training point here — two more, free.",
    ],
    grab: [
      "Merciless drops / crafted Demiurge recipes (Perry, Sky City) at 150.",
    ],
    skip: [
      "Side content freely.",
    ],
    advanced: [
      "The Voracious Void raid (12 wizards) opens this era — [guilds & raids](/guides/guilds-and-raids). The Ghastly Conspiracy (2025's 8-player raid) is also set here, in the Heap.",
    ],
  },
  {
    slug: "novus",
    name: "Novus",
    pitch: "Surreal edge-of-the-map world, ~150–160.",
    route: [
      "Conatus → Stone of Heaven → Puerto Nuovo.",
      "New Vicorgia → La Ville Rose and the finale.",
    ],
    zeke: {
      collectible: "Talking Heads",
      count: 6,
      zones: [
        "Conatus", "Stone of Heaven", "Puerto Nuovo (×2)", "New Vicorgia", "La Ville Rose",
      ],
    },
    grab: [
      "Aeon drops / crafted Eternal set at 160.",
    ],
    skip: [
      "Side content freely.",
    ],
    advanced: [
      "The Crying Sky raid (level 160, comet-fallen Azteca) opens via the 'Raid Island' side quest — Hunhau/Xibalba sets.",
    ],
  },
  {
    slug: "wallaru",
    name: "Wallaru",
    pitch: "Outback frontier, ~160–170. Arc 4 closes.",
    route: [
      "Hope Springs → Outback → Wobbegong Territory.",
      "Collie Ranch → Kingsland → Eucalyptus Forest → Billabong Resort and the finale.",
    ],
    zeke: {
      collectible: "Midnight Oils",
      count: 7,
      zones: [
        "Hope Springs", "Outback", "Wobbegong Territory", "Collie Ranch", "Kingsland", "Eucalyptus Forest", "Billabong Resort",
      ],
    },
    grab: [
      "Dream Reaver gear via Wallaru's Nightmare (farm or craft) at 170.",
    ],
    skip: [
      "Side content freely.",
    ],
    advanced: [
      "Cabal's Revenge raid (170): Daemonic/Unreal sets — the era's best robes for most schools.",
    ],
  },
  {
    slug: "darkmoor",
    name: "Darkmoor",
    pitch: "The gothic world that opens Arc 5 (Nov 2025), 170–180. The current frontier.",
    route: [
      "Follow the arrow — the world is new enough that routes are still settling.",
      "Not to be confused with Castle Darkmoor, the level-100 dungeon.",
    ],
    zeke: {
      collectible: "Check in-game",
      count: 1,
      zones: ["New world — Zeke's collectible list wasn't yet in our verified sources. He's in the hub; grab the quest on arrival."],
      note: "Every world ships with a Zeke quest — take it on day one even before guides catch up.",
    },
    grab: [
      "The 180 gear decision: Abomination (offense) vs Monster Hide (defense, trades crit for shadow rating).",
    ],
    skip: [
      "Nothing yet known to be skippable — it's the live frontier.",
    ],
    advanced: [
      "This is the current endgame: expect the meta (spellements, Magic Weaving ranks, raid tuning) to shift with updates.",
    ],
  },
  {
    slug: "aquila",
    name: "Aquila",
    pitch: "Not a quest world — three legendary gear dungeons on a boat from Wizard City.",
    route: [
      "Mount Olympus (30): 20–30 minutes, soloable. Zeus/Senator gear + Sky Iron Hasta.",
      "Atlantea (70): Poseidon gear — beats Waterworks pieces for several slots.",
      "Tartarus (90): Hades gear, the 90s standard. Longest of the three.",
      "All three assigned by Cyrus Drake at 30 / 70 / 90. Never ignore the Myth professor's mail.",
    ],
    grab: [
      "Zeus set + Sky Iron Hasta at 30 — the single best gear stop of the early game.",
      "Hades set at 90 before Khrysalis part 2.",
    ],
    skip: [
      "Senator's-tier side pieces once your school's Zeus set drops.",
    ],
    advanced: [
      "Secret bosses: Gladiator Dimachaerus (Mount Olympus, level-90 side quest — Alpha & Omega Ring) and Cronus (Tartarus — Blade of the Felled Titan). Both cheat; both pay.",
    ],
  },
];

export const playbookBySlug = new Map(playbooks.map((p) => [p.slug, p]));

// Every playbook must correspond to a world on the timeline (same slug).
const worldSlugs = new Set(worlds.map((w) => slugify(w.name)));
for (const p of playbooks) {
  if (!worldSlugs.has(p.slug)) {
    throw new Error(`Playbook slug has no matching world: ${p.slug}`);
  }
}
