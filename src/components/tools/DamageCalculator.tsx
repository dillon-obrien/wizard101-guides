"use client";

import { useMemo, useState } from "react";

interface Buff {
  id: number;
  label: string;
  value: number;
}

let nextId = 1;

const BLADE_PRESETS = [
  ["School blade", 35],
  ["Balanceblade", 25],
  ["Elemental/Spirit blade", 35],
  ["Sharpened blade", 45],
  ["Pet/TC blade", 30],
] as const;

const TRAP_PRESETS = [
  ["School trap", 25],
  ["Feint", 70],
  ["Potent Feint", 75],
  ["Hex/Curse", 30],
  ["Elemental/Spirit trap", 25],
] as const;

function Num({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  max = 100000,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
}) {
  return (
    <label className="flex items-center justify-between gap-3 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="flex items-center gap-1">
        <input
          type="number"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-24 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-right text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />
        {suffix && <span className="w-4 text-slate-400">{suffix}</span>}
      </span>
    </label>
  );
}

function BuffList({
  title,
  buffs,
  setBuffs,
  presets,
}: {
  title: string;
  buffs: Buff[];
  setBuffs: (b: Buff[]) => void;
  presets: readonly (readonly [string, number])[];
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {presets.map(([label, value]) => (
          <button
            key={label}
            type="button"
            onClick={() => setBuffs([...buffs, { id: nextId++, label, value }])}
            className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:border-indigo-400 hover:text-indigo-700"
          >
            + {label} ({value}%)
          </button>
        ))}
      </div>
      {buffs.length === 0 ? (
        <p className="text-xs text-slate-400">None added.</p>
      ) : (
        <ul className="space-y-1.5">
          {buffs.map((b) => (
            <li key={b.id} className="flex items-center gap-2 text-sm">
              <span className="flex-1 text-slate-700">{b.label}</span>
              <input
                type="number"
                value={b.value}
                onChange={(e) =>
                  setBuffs(buffs.map((x) => (x.id === b.id ? { ...x, value: Number(e.target.value) } : x)))
                }
                className="w-20 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right text-sm outline-none focus:border-indigo-400"
              />
              <span className="text-slate-400">%</span>
              <button
                type="button"
                aria-label={`Remove ${b.label}`}
                onClick={() => setBuffs(buffs.filter((x) => x.id !== b.id))}
                className="rounded-md px-1.5 text-slate-400 hover:bg-slate-100 hover:text-red-600"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function DamageCalculator() {
  const [base, setBase] = useState(1000);
  const [gearDamage, setGearDamage] = useState(50);
  const [blades, setBlades] = useState<Buff[]>([{ id: nextId++, label: "School blade", value: 35 }]);
  const [traps, setTraps] = useState<Buff[]>([{ id: nextId++, label: "Feint", value: 70 }]);
  const [aura, setAura] = useState(0);
  const [globalPct, setGlobalPct] = useState(0);
  const [resist, setResist] = useState(0);
  const [pierce, setPierce] = useState(0);
  const [boost, setBoost] = useState(0);
  const [crit, setCrit] = useState(false);
  const [critMult, setCritMult] = useState(1.75);

  const result = useMemo(() => {
    const steps: { label: string; mult: number; running: number }[] = [];
    let running = base;
    const push = (label: string, mult: number) => {
      running *= mult;
      steps.push({ label, mult, running });
    };
    push(`Gear damage +${gearDamage}%`, 1 + gearDamage / 100);
    for (const b of blades) push(`${b.label} +${b.value}%`, 1 + b.value / 100);
    for (const t of traps) push(`${t.label} +${t.value}%`, 1 + t.value / 100);
    if (aura) push(`Aura +${aura}%`, 1 + aura / 100);
    if (globalPct) push(`Global +${globalPct}%`, 1 + globalPct / 100);
    if (boost) push(`Enemy boost/weakness to your school +${boost}%`, 1 + boost / 100);
    const effResist = Math.max(0, resist - pierce);
    if (resist || pierce) {
      push(`Resist ${resist}% − pierce ${pierce}% → −${effResist}%`, 1 - effResist / 100);
    }
    if (crit) push(`Critical ×${critMult.toFixed(2)}`, critMult);
    return { steps, final: running };
  }, [base, gearDamage, blades, traps, aura, globalPct, resist, pierce, boost, crit, critMult]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <Num label="Spell base damage" value={base} onChange={setBase} />
          <Num label="Gear damage" value={gearDamage} onChange={setGearDamage} suffix="%" />
        </div>
        <BuffList title="Blades on the caster" buffs={blades} setBuffs={setBlades} presets={BLADE_PRESETS} />
        <BuffList title="Traps on the target" buffs={traps} setBuffs={setTraps} presets={TRAP_PRESETS} />
        <div className="grid gap-3 sm:grid-cols-2">
          <Num label="Aura" value={aura} onChange={setAura} suffix="%" />
          <Num label="Global (bubble)" value={globalPct} onChange={setGlobalPct} suffix="%" />
          <Num label="Enemy resist" value={resist} onChange={setResist} suffix="%" />
          <Num label="Your pierce" value={pierce} onChange={setPierce} suffix="%" />
          <Num label="Enemy boost to your school" value={boost} onChange={setBoost} suffix="%" />
        </div>
        <div className="flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-sm">
          <label className="flex items-center gap-2 font-medium text-slate-700">
            <input
              type="checkbox"
              checked={crit}
              onChange={(e) => setCrit(e.target.checked)}
              className="h-4 w-4 accent-indigo-600"
            />
            Critical hit
          </label>
          {crit && (
            <label className="flex items-center gap-2 text-slate-600">
              multiplier
              <input
                type="range"
                min={1.25}
                max={2}
                step={0.05}
                value={critMult}
                onChange={(e) => setCritMult(Number(e.target.value))}
                className="accent-indigo-600"
              />
              <span className="w-10 font-semibold text-slate-900">×{critMult.toFixed(2)}</span>
            </label>
          )}
        </div>
      </div>

      <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">Result</p>
        <p className="mt-1 text-4xl font-bold tabular-nums text-slate-900">
          {Math.round(result.final).toLocaleString()}
        </p>
        <p className="text-sm text-slate-500">damage on the hit</p>
        <ol className="mt-4 space-y-1.5 border-t border-indigo-100 pt-3 text-xs text-slate-600">
          <li className="flex justify-between gap-2">
            <span>Base</span>
            <span className="font-semibold tabular-nums text-slate-900">{base.toLocaleString()}</span>
          </li>
          {result.steps.map((s, i) => (
            <li key={i} className="flex justify-between gap-2">
              <span>{s.label}</span>
              <span className="font-semibold tabular-nums text-slate-900">
                {Math.round(s.running).toLocaleString()}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
          Multiplicative model per the in-game math. Crit multipliers vary with
          rating vs block at high levels — the slider approximates. DoTs apply
          buffs at cast time across the whole spell.
        </p>
      </div>
    </div>
  );
}
