"use client";

import { useMemo, useState } from "react";

/** XP to advance FROM each age to the next (community-verified values). */
const STAGES = [
  { from: "Baby", to: "Teen", xp: 125 },
  { from: "Teen", to: "Adult", xp: 250 },
  { from: "Adult", to: "Ancient", xp: 525 },
  { from: "Ancient", to: "Epic", xp: 1050 },
  { from: "Epic", to: "Mega", xp: 2125 },
  { from: "Mega", to: "Ultra", xp: 2250 },
] as const;

const AGES = ["Baby", "Teen", "Adult", "Ancient", "Epic", "Mega", "Ultra"] as const;

const SNACK_PRESETS: [string, number][] = [
  ["Bazaar cheapies", 10],
  ["Decent snacks", 25],
  ["Mega snacks (Couch Potatoes)", 45],
  ["Top-tier megas", 50],
];

export function PetSnackPlanner() {
  const [currentAge, setCurrentAge] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [targetAge, setTargetAge] = useState<number>(5); // Mega
  const [snackXp, setSnackXp] = useState(45);
  const [gameXp, setGameXp] = useState(3);
  const [doubleXp, setDoubleXp] = useState(false);

  const view = useMemo(() => {
    const target = Math.max(targetAge, currentAge);
    const perFeed = (snackXp + gameXp) * (doubleXp ? 2 : 1);
    const stageRows = [];
    let totalXp = 0;
    for (let i = currentAge; i < target; i++) {
      const stage = STAGES[i];
      const need = i === currentAge ? Math.max(0, stage.xp - progress) : stage.xp;
      totalXp += need;
      stageRows.push({ ...stage, need, feeds: Math.ceil(need / perFeed) });
    }
    return {
      totalXp,
      perFeed,
      feeds: Math.ceil(totalXp / perFeed),
      stageRows,
      currentStageMax: currentAge < STAGES.length ? STAGES[currentAge].xp : 0,
    };
  }, [currentAge, progress, targetAge, snackXp, gameXp, doubleXp]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Current age
            <select
              value={currentAge}
              onChange={(e) => {
                const v = Number(e.target.value);
                setCurrentAge(v);
                setProgress(0);
                if (targetAge <= v) setTargetAge(Math.min(v + 1, STAGES.length));
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400"
            >
              {AGES.slice(0, -1).map((a, i) => (
                <option key={a} value={i}>{a}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Target age
            <select
              value={targetAge}
              onChange={(e) => setTargetAge(Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400"
            >
              {AGES.map((a, i) =>
                i > currentAge ? (
                  <option key={a} value={i}>{a}</option>
                ) : null,
              )}
            </select>
          </label>
        </div>

        <div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            XP already into {AGES[currentAge]} → {AGES[currentAge + 1]}
            <span className="text-lg font-bold tabular-nums text-slate-900">
              {progress} / {view.currentStageMax}
            </span>
          </label>
          <input
            type="range"
            min={0}
            max={Math.max(0, view.currentStageMax - 1)}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="mt-1 w-full accent-indigo-600"
            aria-label="XP progress into current age"
          />
        </div>

        <div>
          <div className="mb-2 flex flex-wrap gap-1.5">
            {SNACK_PRESETS.map(([label, xp]) => (
              <button
                key={label}
                type="button"
                onClick={() => setSnackXp(xp)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  snackXp === xp
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-indigo-400"
                }`}
              >
                {label} (~{xp} XP)
              </button>
            ))}
          </div>
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Average snack XP
            <span className="text-lg font-bold tabular-nums text-slate-900">{snackXp}</span>
          </label>
          <input
            type="range"
            min={5}
            max={50}
            value={snackXp}
            onChange={(e) => setSnackXp(Number(e.target.value))}
            className="mt-1 w-full accent-indigo-600"
            aria-label="Average snack XP"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="flex items-center justify-between text-sm font-medium text-slate-700">
              Minigame XP per play
              <span className="text-lg font-bold tabular-nums text-slate-900">{gameXp}</span>
            </label>
            <input
              type="range"
              min={0}
              max={4}
              value={gameXp}
              onChange={(e) => setGameXp(Number(e.target.value))}
              className="mt-1 w-full accent-indigo-600"
              aria-label="Minigame XP per play"
            />
            <p className="mt-1 text-xs text-slate-400">A clean minigame run scores ~3–4.</p>
          </div>
          <label className="flex items-center gap-2 self-end pb-2 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              checked={doubleXp}
              onChange={(e) => setDoubleXp(e.target.checked)}
              className="h-4 w-4 accent-indigo-600"
            />
            Double Pet XP benefit active
          </label>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">Stage</th>
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">XP needed</th>
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">Feedings</th>
              </tr>
            </thead>
            <tbody>
              {view.stageRows.map((s) => (
                <tr key={s.from} className="even:bg-slate-50/60">
                  <td className="border-b border-slate-100 px-4 py-2 font-medium text-slate-900">
                    {s.from} → {s.to}
                  </td>
                  <td className="border-b border-slate-100 px-4 py-2 tabular-nums text-slate-600">{s.need.toLocaleString()}</td>
                  <td className="border-b border-slate-100 px-4 py-2 font-semibold tabular-nums text-slate-900">{s.feeds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
          {AGES[currentAge]} → {AGES[targetAge]}
        </p>
        <p className="mt-1 text-4xl font-bold tabular-nums text-slate-900">{view.feeds}</p>
        <p className="text-sm text-slate-500">
          feedings (~{view.perFeed} XP each) · {view.totalXp.toLocaleString()} XP total
        </p>
        <dl className="mt-4 space-y-1.5 border-t border-indigo-100 pt-3 text-sm text-slate-600">
          <div className="flex justify-between">
            <dt>Snacks to farm</dt>
            <dd className="font-semibold tabular-nums text-slate-900">{view.feeds}</dd>
          </div>
          <div className="flex justify-between">
            <dt>With double XP it'd be</dt>
            <dd className="font-semibold tabular-nums text-slate-900">
              {Math.ceil(view.totalXp / ((snackXp + gameXp) * 2))}
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
          Age thresholds (125 / 250 / 525 / 1050 / 2125 / 2250) are the
          community-verified values. Mega-snack farming lives in{" "}
          <a href="/guides/best-plants-to-grow" className="font-medium text-indigo-700 underline">
            Best Plants
          </a>
          ; time your push to a Double Pet XP{" "}
          <a href="/guides/daily-and-weekly-routines" className="font-medium text-indigo-700 underline">
            benefit weekend
          </a>
          .
        </p>
      </div>
    </div>
  );
}
