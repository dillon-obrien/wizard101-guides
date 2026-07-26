"use client";

import { useMemo, useState } from "react";

interface Milestone {
  level: number;
  what: string;
  href?: string;
}

const MILESTONES: Milestone[] = [
  { level: 1, what: "Wizard City — learn the loop", href: "/worlds/wizard-city" },
  { level: 7, what: "Fishing unlocks (Lucky Hookline, the Commons)", href: "/guides/fishing-101" },
  { level: 12, what: "Crafting, Monstrology & Gardening intros in Wizard City", href: "/guides/crafting-guide" },
  { level: 10, what: "Krokotopia — train Niles' tri-blades on the Krokosphinx", href: "/worlds/krokotopia" },
  { level: 20, what: "Grizzleheim opens (Ambrose's summons)", href: "/worlds/grizzleheim" },
  { level: 20, what: "Marleybone", href: "/worlds/marleybone" },
  { level: 25, what: "Wysteria opens — the easiest training point", href: "/worlds/wysteria" },
  { level: 26, what: "Feint becomes trainable (Death line, 5 points) — the best buy in the game", href: "/guides/training-points-guide" },
  { level: 30, what: "Mount Olympus: farm Zeus gear + Sky Iron Hasta before continuing", href: "/worlds/aquila" },
  { level: 30, what: "MooShu", href: "/worlds/mooshu" },
  { level: 35, what: "Grizzleheim bonus spell (Baldur Goldpaws, Olde Town)", href: "/guides/grizzleheim-and-wintertusk" },
  { level: 40, what: "Dragonspyre — and Wintertusk once Grizzleheim's done", href: "/worlds/dragonspyre" },
  { level: 48, what: "Your level-48 school spell quest (professor's summons)", href: "/worlds/dragonspyre" },
  { level: 50, what: "Celestia — buy every Sun damage enchant from here on", href: "/worlds/celestia" },
  { level: 55, what: "Wintertusk bonus spell (Talos / Availing Hands tier)", href: "/guides/grizzleheim-and-wintertusk" },
  { level: 58, what: "Level-58 school spell quest era", href: "/worlds/zafaria" },
  { level: 60, what: "WATERWORKS — the era-defining free gear set", href: "/guides/waterworks-gear-guide" },
  { level: 70, what: "Atlantea (Cyrus again): Poseidon pieces beat Waterworks in spots", href: "/worlds/aquila" },
  { level: 80, what: "Azteca — the arc's difficulty spike; Team-Up freely", href: "/worlds/azteca" },
  { level: 90, what: "Tartarus: Hades gear, the 90s standard", href: "/worlds/aquila" },
  { level: 93, what: "Shadow magic unlocks late in Khrysalis", href: "/guides/shadow-magic-and-archmastery" },
  { level: 100, what: "Castle Darkmoor ('Branches of Woe', Dworgyn) — Malistaire Tier 1 gear", href: "/guides/darkmoor-gear-guide" },
  { level: 110, what: "Mirage — audit your pierce", href: "/worlds/mirage" },
  { level: 120, what: "Empyrea — hold every Vanguard piece from Part 2", href: "/worlds/empyrea" },
  { level: 130, what: "The Catacombs: craft Dragoon at Zasha Emberforge", href: "/guides/gear-progression-60-to-max" },
  { level: 140, what: "Karamelle's Uber / 'Paradox' gear refresh", href: "/worlds/karamelle" },
  { level: 150, what: "The Voracious Void raid era begins (guilds)", href: "/guides/guilds-and-raids" },
  { level: 160, what: "Crying Sky raid ('Raid Island' side quest); Aeon/Eternal gear", href: "/worlds/novus" },
  { level: 170, what: "Cabal's Revenge + Ghastly Conspiracy raids; Dream Reaver gear", href: "/guides/guilds-and-raids" },
  { level: 180, what: "Current cap (Darkmoor world) — Abomination vs Monster Hide", href: "/worlds/darkmoor" },
];

const GEAR_CHECKPOINTS: [number, string][] = [
  [1, "Bazaar refreshes every ~5 levels"],
  [30, "Zeus set + Sky Iron Hasta (Mount Olympus)"],
  [60, "Waterworks set"],
  [70, "Poseidon pieces (Atlantea)"],
  [90, "Hades set (Tartarus)"],
  [100, "Malistaire Tier 1 (Castle Darkmoor) — holds through 120"],
  [130, "Dragoon (Catacombs crafting)"],
  [140, "Uber / 'Paradox' (Karamelle)"],
  [150, "Merciless / Demiurge + raid sets"],
  [160, "Aeon / Eternal + raid upgrades"],
  [170, "Dream Reaver + Cabal's Revenge sets"],
  [180, "Abomination or Monster Hide (Darkmoor world)"],
];

const WORLD_BY_LEVEL: [number, number, string, string][] = [
  [1, 10, "Wizard City", "wizard-city"],
  [10, 20, "Krokotopia", "krokotopia"],
  [20, 30, "Marleybone", "marleybone"],
  [30, 40, "MooShu", "mooshu"],
  [40, 50, "Dragonspyre", "dragonspyre"],
  [50, 60, "Celestia", "celestia"],
  [60, 70, "Zafaria", "zafaria"],
  [70, 80, "Avalon", "avalon"],
  [80, 90, "Azteca", "azteca"],
  [90, 100, "Khrysalis", "khrysalis"],
  [100, 110, "Polaris", "polaris"],
  [110, 120, "Mirage", "mirage"],
  [120, 130, "Empyrea", "empyrea"],
  [130, 140, "Karamelle", "karamelle"],
  [140, 150, "Lemuria", "lemuria"],
  [150, 160, "Novus", "novus"],
  [160, 170, "Wallaru", "wallaru"],
  [170, 181, "Darkmoor", "darkmoor"],
];

function pointsFromLevel(level: number): number {
  return Math.min(Math.floor(level / 4), 5) + (level > 20 ? Math.floor((level - 20) / 5) : 0);
}

export function LevelAdvisor() {
  const [level, setLevel] = useState(35);

  const view = useMemo(() => {
    const world = WORLD_BY_LEVEL.find(([lo, hi]) => level >= lo && level < hi) ?? WORLD_BY_LEVEL.at(-1)!;
    const gearNow = [...GEAR_CHECKPOINTS].reverse().find(([l]) => level >= l)!;
    const gearNext = GEAR_CHECKPOINTS.find(([l]) => l > level);
    const done = MILESTONES.filter((m) => m.level <= level).sort((a, b) => b.level - a.level).slice(0, 5);
    const upcoming = MILESTONES.filter((m) => m.level > level).sort((a, b) => a.level - b.level).slice(0, 5);
    return { world, gearNow, gearNext, done, upcoming, tp: pointsFromLevel(level) };
  }, [level]);

  return (
    <div>
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <label className="flex items-center justify-between text-sm font-medium text-slate-700">
          Your level
          <span className="text-2xl font-bold tabular-nums text-slate-900">{level}</span>
        </label>
        <input
          type="range"
          min={1}
          max={180}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="mt-2 w-full accent-indigo-600"
          aria-label="Your level"
        />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <section className="rounded-r-xl border-l-4 border-indigo-600 bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700">Right now</h2>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Story world:</span>{" "}
              <a href={`/worlds/${view.world[3]}`} className="font-medium text-indigo-700 underline">
                {view.world[2]}
              </a>{" "}
              — open its playbook for route + Zeke.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Gear standard:</span> {view.gearNow[1]}
            </li>
            <li>
              <span className="font-semibold text-slate-900">Training points from levels:</span>{" "}
              {view.tp} (plus quests —{" "}
              <a href="/tools/training-points" className="font-medium text-indigo-700 underline">
                count yours
              </a>
              ).
            </li>
          </ul>
        </section>

        <section className="rounded-r-xl border-l-4 border-emerald-500 bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Should already be done
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
            {view.done.map((m) => (
              <li key={m.level + m.what} className="flex gap-2">
                <span className="w-8 shrink-0 font-bold tabular-nums text-slate-400">{m.level}</span>
                {m.href ? (
                  <a href={m.href} className="hover:text-indigo-700 hover:underline">{m.what}</a>
                ) : (
                  <span>{m.what}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-r-xl border-l-4 border-amber-500 bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-700">Coming up</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
            {view.upcoming.length === 0 && <li>You're at the cap. Go help a lowbie.</li>}
            {view.upcoming.map((m) => (
              <li key={m.level + m.what} className="flex gap-2">
                <span className="w-8 shrink-0 font-bold tabular-nums text-slate-400">{m.level}</span>
                {m.href ? (
                  <a href={m.href} className="hover:text-indigo-700 hover:underline">{m.what}</a>
                ) : (
                  <span>{m.what}</span>
                )}
              </li>
            ))}
            {view.gearNext && (
              <li className="flex gap-2 border-t border-slate-100 pt-2">
                <span className="w-8 shrink-0 font-bold tabular-nums text-slate-400">{view.gearNext[0]}</span>
                <span className="font-medium text-slate-900">Next gear stop: {view.gearNext[1]}</span>
              </li>
            )}
          </ul>
        </section>
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
        Milestone levels reflect the verified snapshot (Darkmoor era, cap 180);
        a few unlocks are approximate (~) by nature. Side-world timing lives in
        each playbook.
      </p>
    </div>
  );
}
