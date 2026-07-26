"use client";

import { useMemo, useState } from "react";

/** ln C(n, k) via lgamma-free accumulation — exact enough for n ≤ 64. */
function lnChoose(n: number, k: number): number {
  if (k < 0 || k > n) return -Infinity;
  let s = 0;
  for (let i = 1; i <= k; i++) s += Math.log(n - k + i) - Math.log(i);
  return s;
}

/** P(at least one of X key cards among `seen` cards from a deck of N). */
function pAtLeastOne(N: number, X: number, seen: number): number {
  if (X <= 0) return 0;
  if (seen >= N) return 1;
  if (X >= N) return 1;
  const pNone = Math.exp(lnChoose(N - X, seen) - lnChoose(N, seen));
  return Math.min(1, Math.max(0, 1 - pNone));
}

const PRESETS: [string, number, number][] = [
  ["Tiny street deck", 8, 3],
  ["Boss deck", 14, 3],
  ["Kitchen sink", 40, 3],
  ["Full 64", 64, 3],
];

export function DrawOddsCalculator() {
  const [deck, setDeck] = useState(8);
  const [copies, setCopies] = useState(3);
  const [cycled, setCycled] = useState(1);

  const safeCopies = Math.min(copies, deck);

  const rows = useMemo(() => {
    return [1, 2, 3, 4, 5].map((round) => {
      const seen = Math.min(deck, 7 + cycled * (round - 1));
      return { round, seen, p: pAtLeastOne(deck, safeCopies, seen) };
    });
  }, [deck, safeCopies, cycled]);

  const opening = rows[0].p;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map(([label, d, c]) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setDeck(d);
                setCopies(c);
              }}
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-indigo-400 hover:text-indigo-700"
            >
              {label} ({d} cards)
            </button>
          ))}
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Deck size
            <span className="text-xl font-bold tabular-nums text-slate-900">{deck}</span>
          </label>
          <input
            type="range"
            min={7}
            max={64}
            value={deck}
            onChange={(e) => setDeck(Number(e.target.value))}
            className="mt-1 w-full accent-indigo-600"
            aria-label="Deck size"
          />
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Copies of the card you need (e.g. your blade)
            <span className="text-xl font-bold tabular-nums text-slate-900">{safeCopies}</span>
          </label>
          <input
            type="range"
            min={1}
            max={8}
            value={safeCopies}
            onChange={(e) => setCopies(Number(e.target.value))}
            className="mt-1 w-full accent-indigo-600"
            aria-label="Copies of the key card"
          />
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Cards cycled per round (cast/discard, then redraw)
            <span className="text-xl font-bold tabular-nums text-slate-900">{cycled}</span>
          </label>
          <input
            type="range"
            min={0}
            max={6}
            value={cycled}
            onChange={(e) => setCycled(Number(e.target.value))}
            className="mt-1 w-full accent-indigo-600"
            aria-label="Cards cycled per round"
          />
          <p className="mt-1 text-xs text-slate-400">
            Aggressive discarding = higher cycle rate. Veterans discard hard; set 2–4.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">By round</th>
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">Cards seen</th>
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">Chance you've drawn it</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.round} className="even:bg-slate-50/60">
                  <td className="border-b border-slate-100 px-4 py-2 font-semibold tabular-nums text-slate-900">{r.round}</td>
                  <td className="border-b border-slate-100 px-4 py-2 tabular-nums text-slate-600">{r.seen}</td>
                  <td className="border-b border-slate-100 px-4 py-2">
                    <span className="font-bold tabular-nums text-slate-900">{(r.p * 100).toFixed(1)}%</span>
                    <span className="ml-2 inline-block h-2 w-24 overflow-hidden rounded-full bg-slate-100 align-middle">
                      <span className="block h-full rounded-full bg-indigo-600" style={{ width: `${r.p * 100}%` }} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">Opening hand (7 cards)</p>
        <p className="mt-1 text-4xl font-bold tabular-nums text-slate-900">{(opening * 100).toFixed(1)}%</p>
        <p className="text-sm text-slate-500">chance your key card is there round one</p>
        <p className="mt-4 border-t border-indigo-100 pt-3 text-[11px] leading-relaxed text-slate-400">
          Hypergeometric draw math over your 7-card hand plus cycled redraws.
          This is the arithmetic behind the tiny-deck doctrine in{" "}
          <a href="/guides/deck-building-basics" className="font-medium text-indigo-700 underline">
            Deck Building
          </a>
          : an 8-card deck with 3 blades shows one round one, every time.
        </p>
      </div>
    </div>
  );
}
