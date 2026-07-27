"use client";

import { useMemo, useState } from "react";

interface Loadout {
  damage: number;
  pierce: number;
  critChance: number;
  resist: number;
  health: number;
  pips: number;
}

const DEFAULT_A: Loadout = { damage: 85, pierce: 15, critChance: 30, resist: 15, health: 4200, pips: 85 };
const DEFAULT_B: Loadout = { damage: 65, pierce: 10, critChance: 20, resist: 35, health: 5100, pips: 90 };

const FIELDS: { key: keyof Loadout; label: string; suffix: string; max: number }[] = [
  { key: "damage", label: "Damage", suffix: "%", max: 250 },
  { key: "pierce", label: "Armor pierce", suffix: "%", max: 60 },
  { key: "critChance", label: "Critical chance", suffix: "%", max: 100 },
  { key: "resist", label: "Universal resist", suffix: "%", max: 80 },
  { key: "health", label: "Health", suffix: "", max: 20000 },
  { key: "pips", label: "Power pip chance", suffix: "%", max: 100 },
];

function LoadoutColumn({
  title,
  loadout,
  setLoadout,
  accent,
}: {
  title: string;
  loadout: Loadout;
  setLoadout: (l: Loadout) => void;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className={`text-xs font-bold uppercase tracking-wider ${accent}`}>{title}</p>
      <div className="mt-3 space-y-3">
        {FIELDS.map((f) => (
          <label key={f.key} className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-slate-700">{f.label}</span>
            <span className="flex items-center gap-1">
              <input
                type="number"
                min={0}
                max={f.max}
                value={loadout[f.key]}
                onChange={(e) => setLoadout({ ...loadout, [f.key]: Number(e.target.value) })}
                className="w-24 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-right text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
              <span className="w-4 text-slate-400">{f.suffix}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function GearComparator() {
  const [a, setA] = useState<Loadout>(DEFAULT_A);
  const [b, setB] = useState<Loadout>(DEFAULT_B);
  const [base, setBase] = useState(1000);
  const [enemyResist, setEnemyResist] = useState(25);
  const [critMult, setCritMult] = useState(1.75);

  const view = useMemo(() => {
    const evalLoadout = (l: Loadout) => {
      const effResist = Math.max(0, enemyResist - l.pierce) / 100;
      const nonCrit = base * (1 + l.damage / 100) * (1 - effResist);
      const expected = nonCrit * (1 + (l.critChance / 100) * (critMult - 1));
      const ehp = l.health / Math.max(0.05, 1 - l.resist / 100);
      return { nonCrit, expected, ehp };
    };
    const ra = evalLoadout(a);
    const rb = evalLoadout(b);
    const pctDiff = (x: number, y: number) => (y === 0 ? 0 : (x / y - 1) * 100);
    return {
      ra,
      rb,
      hitDiff: pctDiff(ra.expected, rb.expected),
      ehpDiff: pctDiff(ra.ehp, rb.ehp),
    };
  }, [a, b, base, enemyResist, critMult]);

  const fmt = (n: number) => Math.round(n).toLocaleString();
  const diffChip = (d: number) => (
    <span
      className={`ml-2 rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
        Math.abs(d) < 0.5
          ? "bg-slate-100 text-slate-500"
          : d > 0
            ? "bg-emerald-50 text-emerald-700"
            : "bg-red-50 text-red-600"
      }`}
    >
      {d > 0 ? "+" : ""}
      {d.toFixed(1)}%
    </span>
  );

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2">
        <LoadoutColumn title="Loadout A" loadout={a} setLoadout={setA} accent="text-indigo-700" />
        <LoadoutColumn title="Loadout B" loadout={b} setLoadout={setB} accent="text-violet-700" />
      </div>

      <div className="mt-5 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-3">
        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-slate-700">Reference spell base</span>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className="w-24 rounded-lg border border-slate-300 px-2.5 py-1.5 text-right text-sm outline-none focus:border-indigo-400"
          />
        </label>
        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-slate-700">Enemy resist %</span>
          <input
            type="number"
            value={enemyResist}
            onChange={(e) => setEnemyResist(Number(e.target.value))}
            className="w-24 rounded-lg border border-slate-300 px-2.5 py-1.5 text-right text-sm outline-none focus:border-indigo-400"
          />
        </label>
        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-slate-700">Crit multiplier ×</span>
          <input
            type="number"
            step={0.05}
            min={1}
            max={2}
            value={critMult}
            onChange={(e) => setCritMult(Number(e.target.value))}
            className="w-24 rounded-lg border border-slate-300 px-2.5 py-1.5 text-right text-sm outline-none focus:border-indigo-400"
          />
        </label>
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-indigo-200 bg-indigo-50/60">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead>
            <tr>
              <th className="border-b border-indigo-100 px-4 py-3 font-semibold text-slate-900">Outcome</th>
              <th className="border-b border-indigo-100 px-4 py-3 font-semibold text-indigo-700">Loadout A</th>
              <th className="border-b border-indigo-100 px-4 py-3 font-semibold text-violet-700">Loadout B</th>
              <th className="border-b border-indigo-100 px-4 py-3 font-semibold text-slate-900">A vs B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-indigo-100 px-4 py-2.5 text-slate-700">Hit (no crit)</td>
              <td className="border-b border-indigo-100 px-4 py-2.5 font-bold tabular-nums text-slate-900">{fmt(view.ra.nonCrit)}</td>
              <td className="border-b border-indigo-100 px-4 py-2.5 font-bold tabular-nums text-slate-900">{fmt(view.rb.nonCrit)}</td>
              <td className="border-b border-indigo-100 px-4 py-2.5" />
            </tr>
            <tr>
              <td className="border-b border-indigo-100 px-4 py-2.5 text-slate-700">Expected hit (crit-weighted)</td>
              <td className="border-b border-indigo-100 px-4 py-2.5 font-bold tabular-nums text-slate-900">{fmt(view.ra.expected)}</td>
              <td className="border-b border-indigo-100 px-4 py-2.5 font-bold tabular-nums text-slate-900">{fmt(view.rb.expected)}</td>
              <td className="border-b border-indigo-100 px-4 py-2.5">{diffChip(view.hitDiff)}</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 text-slate-700">Effective HP (resist-adjusted)</td>
              <td className="px-4 py-2.5 font-bold tabular-nums text-slate-900">{fmt(view.ra.ehp)}</td>
              <td className="px-4 py-2.5 font-bold tabular-nums text-slate-900">{fmt(view.rb.ehp)}</td>
              <td className="px-4 py-2.5">{diffChip(view.ehpDiff)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
        Read stats off your character sheet (hover critical to see its chance %
        at your level). Expected hit weights crits by chance; effective HP =
        health ÷ (1 − resist). Blades and traps multiply both loadouts equally —
        compare bare numbers here, then stack buffs in the{" "}
        <a href="/tools/damage-calculator" className="font-medium text-indigo-700 underline">
          damage calculator
        </a>
        . Rule of thumb from the{" "}
        <a href="/guides/gear-progression-60-to-max" className="font-medium text-indigo-700 underline">
          gear guide
        </a>
        : questing favors the harder hit; hard endgame content favors the
        bigger effective HP.
      </p>
    </div>
  );
}
