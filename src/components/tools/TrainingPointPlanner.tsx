"use client";

import { useMemo, useState } from "react";

const ZEKE_QUESTS: string[] = [
  "Wizard City (Smiths)",
  "Krokotopia (Beetles)",
  "Marleybone (Stray Cats)",
  "MooShu (Blue Oysters)",
  "Dragonspyre (Stone Roses)",
  "Grizzleheim (Yardbirds)",
  "Wintertusk (Troggs)",
  "Wysteria (Wallflowers)",
  "Celestia (Lounge Lizards)",
  "Zafaria (Sock Monkeys)",
  "Avalon (Crows)",
  "Azteca (Toy UFOs)",
  "Khrysalis pt. 1 (Khryckets)",
  "Khrysalis pt. 2 (Iron Butterflies)",
  "Polaris (Vanilla Ices)",
  "Mirage (Desert Oases)",
  "Empyrea (Blowfish)",
  "Karamelle (Lemon-heads)",
  "Lemuria (Hero Flowers)",
  "Novus (Talking Heads)",
  "Wallaru (Midnight Oils)",
];

const NAMED_GIVERS: { name: string; max: number }[] = [
  { name: "Eloise Merryweather (early worlds)", max: 5 },
  { name: "Ogden Peake (Celestia)", max: 3 },
  { name: "Francis Lux (Avalon)", max: 3 },
  { name: "Inyanga Whitestripes (Zafaria)", max: 2 },
  { name: "Zaltanna the Mirrormask (Khrysalis)", max: 1 },
  { name: "Preservationist Zach (Lemuria)", max: 1 },
  { name: "Louise Mayqueen (Lemuria)", max: 1 },
];

function pointsFromLevel(level: number): number {
  const early = Math.min(Math.floor(level / 4), 5); // 4,8,12,16,20
  const late = level > 20 ? Math.floor((level - 20) / 5) : 0; // 25,30,…
  return early + late;
}

export function TrainingPointPlanner() {
  const [level, setLevel] = useState(60);
  const [zeke, setZeke] = useState<Set<number>>(new Set([0, 1, 2, 3, 4]));
  const [givers, setGivers] = useState<number[]>(NAMED_GIVERS.map(() => 0));

  const levelPts = pointsFromLevel(level);
  const zekePts = zeke.size;
  const giverPts = givers.reduce((a, b) => a + b, 0);
  const total = levelPts + zekePts + giverPts;

  const maxPossible = useMemo(
    () => pointsFromLevel(180) + ZEKE_QUESTS.length + NAMED_GIVERS.reduce((a, g) => a + g.max, 0),
    [],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-7 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Your level
            <span className="text-lg font-bold tabular-nums text-slate-900">{level}</span>
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
          <p className="mt-1 text-xs text-slate-400">
            A point every 4 levels to 20, then every 5 levels to the cap (180).
          </p>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Zeke quests done ({zeke.size}/{ZEKE_QUESTS.length})
            </p>
            <div className="flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => setZeke(new Set(ZEKE_QUESTS.map((_, i) => i)))}
                className="font-semibold text-indigo-700 hover:text-indigo-900"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setZeke(new Set())}
                className="font-semibold text-slate-400 hover:text-slate-600"
              >
                None
              </button>
            </div>
          </div>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {ZEKE_QUESTS.map((q, i) => (
              <li key={q}>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={zeke.has(i)}
                    onChange={(e) => {
                      const next = new Set(zeke);
                      if (e.target.checked) next.add(i);
                      else next.delete(i);
                      setZeke(next);
                    }}
                    className="h-4 w-4 accent-indigo-600"
                  />
                  {q}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            Named side-quest givers
          </p>
          <ul className="space-y-2">
            {NAMED_GIVERS.map((g, i) => (
              <li key={g.name} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-700">{g.name}</span>
                <span className="flex items-center gap-1.5">
                  {Array.from({ length: g.max + 1 }, (_, n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setGivers(givers.map((v, j) => (j === i ? n : v)))}
                      className={`h-7 w-7 rounded-lg text-xs font-bold transition ${
                        givers[i] === n
                          ? "bg-indigo-600 text-white"
                          : "border border-slate-300 bg-white text-slate-500 hover:border-indigo-400"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">Points earned</p>
        <p className="mt-1 text-4xl font-bold tabular-nums text-slate-900">{total}</p>
        <p className="text-sm text-slate-500">of {maxPossible} possible at cap, all quests done</p>
        <dl className="mt-4 space-y-1.5 border-t border-indigo-100 pt-3 text-sm text-slate-600">
          <div className="flex justify-between"><dt>From levels</dt><dd className="font-semibold tabular-nums text-slate-900">{levelPts}</dd></div>
          <div className="flex justify-between"><dt>From Zeke</dt><dd className="font-semibold tabular-nums text-slate-900">{zekePts}</dd></div>
          <div className="flex justify-between"><dt>From named givers</dt><dd className="font-semibold tabular-nums text-slate-900">{giverPts}</dd></div>
        </dl>
        <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
          Census verified mid-2026; the universal spending plan (Feint line,
          Tower Shield, Sun enchants) lives in the{" "}
          <a href="/guides/training-points-guide" className="font-medium text-indigo-700 underline">
            training points guide
          </a>
          . Each world's Zeke zones: see its{" "}
          <a href="/worlds" className="font-medium text-indigo-700 underline">playbook</a>.
        </p>
      </div>
    </div>
  );
}
