"use client";

import { useMemo, useState } from "react";

function choose(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
}

/** P(all `wanted` remaining wanted talents appear in `draws` from `pool`). */
function pAllWanted(pool: number, wanted: number, draws: number): number {
  if (wanted <= 0) return 1;
  if (draws < wanted) return 0;
  return (choose(pool - wanted, draws - wanted) / choose(pool, draws)) || 0;
}

const FRESH_TABLE = [1, 2, 3, 4, 5].map((w) => ({
  w,
  p: pAllWanted(10, w, 5),
}));

export function TalentOdds() {
  const [wanted, setWanted] = useState(3);
  const [revealed, setRevealed] = useState(0);
  const [hits, setHits] = useState(0);
  const [ultra, setUltra] = useState(false);

  const totalReveals = ultra ? 6 : 5;
  const safeRevealed = Math.min(revealed, totalReveals);
  const safeHits = Math.min(hits, Math.min(wanted, safeRevealed));

  const view = useMemo(() => {
    const poolLeft = 10 - safeRevealed;
    const wantedLeft = wanted - safeHits;
    const drawsLeft = totalReveals - safeRevealed;
    const missesSoFar = safeRevealed - safeHits;
    const pAll = pAllWanted(poolLeft, wantedLeft, drawsLeft);
    const pNext = poolLeft > 0 ? wantedLeft / poolLeft : 0;
    return { poolLeft, wantedLeft, drawsLeft, missesSoFar, pAll, pNext };
  }, [wanted, safeRevealed, safeHits, totalReveals]);

  const verdict =
    view.wantedLeft === 0
      ? "Every talent you wanted is already revealed. Finish the training — this one's a keeper."
      : view.pAll === 0
        ? "Mathematically dead: more wanted talents remain than reveals left. Retire it to the hatching bench — its pool is still good parent material."
        : view.pAll >= 0.5
          ? "Better than a coin flip. Keep feeding."
          : view.pAll >= 0.15
            ? "Live but long odds. Keep going if snacks are cheap; hatch a sibling in parallel if not."
            : "Very long odds. Most breeders would hatch again now and train the better baby.";

  const pct = (n: number) => `${(n * 100).toFixed(n < 0.01 && n > 0 ? 2 : 1)}%`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Talents you want that are IN the pet's 10-talent pool
            <span className="text-xl font-bold tabular-nums text-slate-900">{wanted}</span>
          </label>
          <input
            type="range"
            min={1}
            max={5}
            value={wanted}
            onChange={(e) => {
              setWanted(Number(e.target.value));
              setHits(Math.min(hits, Number(e.target.value)));
            }}
            className="mt-1 w-full accent-indigo-600"
            aria-label="Wanted talents in pool"
          />
          <p className="mt-1 text-xs text-slate-400">
            You know the pool from the parents' reveals — that inference is the
            hobby. Unsure? Assume the talents both parents display.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-slate-700">
              Reveals so far
              <span className="text-xl font-bold tabular-nums text-slate-900">{safeRevealed}</span>
            </label>
            <input
              type="range"
              min={0}
              max={totalReveals}
              value={safeRevealed}
              onChange={(e) => {
                const v = Number(e.target.value);
                setRevealed(v);
                setHits(Math.min(hits, v));
              }}
              className="mt-1 w-full accent-indigo-600"
              aria-label="Talents revealed so far"
            />
            <p className="mt-1 text-xs text-slate-400">
              Teen 1 · Adult 2 · Ancient 3 · Epic 4 · Mega 5{ultra ? " · Ultra 6" : ""}
            </p>
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-slate-700">
              …of which were wanted
              <span className="text-xl font-bold tabular-nums text-slate-900">{safeHits}</span>
            </label>
            <input
              type="range"
              min={0}
              max={Math.min(wanted, safeRevealed)}
              value={safeHits}
              onChange={(e) => setHits(Number(e.target.value))}
              className="mt-1 w-full accent-indigo-600"
              aria-label="Wanted talents already revealed"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={ultra}
            onChange={(e) => setUltra(e.target.checked)}
            className="h-4 w-4 accent-indigo-600"
          />
          Count the Ultra reveal too (6 total)
        </label>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">
                  Fresh pet: wanted in pool
                </th>
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">
                  Odds all revealed by Mega
                </th>
              </tr>
            </thead>
            <tbody>
              {FRESH_TABLE.map((r) => (
                <tr key={r.w} className="even:bg-slate-50/60">
                  <td className="border-b border-slate-100 px-4 py-2 font-medium tabular-nums text-slate-900">{r.w}</td>
                  <td className="border-b border-slate-100 px-4 py-2 tabular-nums text-slate-600">
                    {pct(r.p)}
                    {r.w === 5 && <span className="ml-2 text-xs text-slate-400">(the famous 1-in-252)</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          Odds all {view.wantedLeft > 0 ? `${view.wantedLeft} remaining` : ""} wanted talents reveal
        </p>
        <p className="mt-1 text-4xl font-bold tabular-nums text-slate-900">{pct(view.pAll)}</p>
        <dl className="mt-4 space-y-1.5 border-t border-indigo-100 pt-3 text-sm text-slate-600">
          <div className="flex justify-between">
            <dt>Next reveal is a wanted one</dt>
            <dd className="font-semibold tabular-nums text-slate-900">{pct(view.pNext)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Unrevealed pool</dt>
            <dd className="font-semibold tabular-nums text-slate-900">{view.poolLeft} talents</dd>
          </div>
          <div className="flex justify-between">
            <dt>Reveals left</dt>
            <dd className="font-semibold tabular-nums text-slate-900">{view.drawsLeft}</dd>
          </div>
        </dl>
        <p className="mt-4 rounded-lg border border-indigo-100 bg-white p-3 text-xs leading-relaxed text-slate-600">
          {verdict}
        </p>
        <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
          Model: each age reveals one talent drawn from the pet's hidden
          10-talent pool without replacement. Build the pool itself via the{" "}
          <a href="/guides/pet-hatching-guide" className="font-medium text-indigo-700 underline">
            hatching loop
          </a>{" "}
          and check body odds in the{" "}
          <a href="/tools/hatch-calculator" className="font-medium text-indigo-700 underline">
            hatch calculator
          </a>
          .
        </p>
      </div>
    </div>
  );
}
