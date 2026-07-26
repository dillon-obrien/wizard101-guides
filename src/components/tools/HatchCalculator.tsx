"use client";

import { useMemo, useState } from "react";

const WF_EXAMPLES: [number, string][] = [
  [0, "Sand Worm Larva, Holiday Hoppers"],
  [1, "Firecat, Imp, Unicorn, Bloodbat"],
  [2, "Blue Cyclops, Stormbat"],
  [3, "Ice Cat, Ninja Pig, Brass Golem"],
  [4, "Goat Monk, Friendly Oni, Orca"],
  [5, "Flurry Fairy, Emerald Beetle"],
  [6, "Blood Hound, Danger Hound"],
  [7, "Azure Dragon, Ash Quetzal"],
  [8, "Arctic Elf, Auspicious Lantern"],
  [9, "Archfiend, Alert Hound"],
  [10, "Clockwork Paladin, Coal Colossus"],
];

interface PetInput {
  label: string;
  wf: number;
  exclusive: boolean;
}

function WfPicker({
  pet,
  setPet,
  title,
}: {
  pet: PetInput;
  setPet: (p: PetInput) => void;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>
      <input
        type="text"
        value={pet.label}
        onChange={(e) => setPet({ ...pet, label: e.target.value })}
        placeholder="Pet name (optional)"
        aria-label={`${title} name`}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
      <p className="mt-4 flex items-center justify-between text-sm font-medium text-slate-700">
        Wow Factor
        <span className="text-xl font-bold tabular-nums text-slate-900">{pet.wf}</span>
      </p>
      <input
        type="range"
        min={0}
        max={10}
        value={pet.wf}
        onChange={(e) => setPet({ ...pet, wf: Number(e.target.value) })}
        className="mt-1 w-full accent-indigo-600"
        aria-label={`${title} wow factor`}
      />
      <p className="mt-1 min-h-8 text-xs leading-snug text-slate-400">
        e.g. {WF_EXAMPLES.find(([v]) => v === pet.wf)?.[1]}
      </p>
      <label className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={pet.exclusive}
          onChange={(e) => setPet({ ...pet, exclusive: e.target.checked })}
          className="h-4 w-4 accent-indigo-600"
        />
        Exclusive body
      </label>
    </div>
  );
}

export function HatchCalculator() {
  const [mode, setMode] = useState<"self" | "kiosk">("self");
  const [left, setLeft] = useState<PetInput>({ label: "", wf: 3, exclusive: false });
  const [right, setRight] = useState<PetInput>({ label: "", wf: 8, exclusive: false });

  const result = useMemo(() => {
    const nameL = left.label.trim() || (mode === "self" ? "Left pet" : "Your selected pet");
    const nameR = right.label.trim() || (mode === "self" ? "Right pet" : "Partner pet");

    // Exclusive override: in a self-hatch, an exclusive body on the RIGHT
    // always returns the LEFT body.
    if (mode === "self" && right.exclusive) {
      return {
        pL: 1,
        pR: 0,
        nameL,
        nameR,
        override: `${nameR} is an Exclusive body on the right of a self-hatch — the game always returns the left body (${nameL}), regardless of wow factors.`,
      };
    }

    const wL = 11 - left.wf;
    const wR = 11 - right.wf;
    return {
      pL: wL / (wL + wR),
      pR: wR / (wL + wR),
      nameL,
      nameR,
      override: null as string | null,
    };
  }, [mode, left, right]);

  const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

  return (
    <div>
      <div className="mb-5 inline-flex rounded-full border border-slate-300 bg-white p-1 text-sm font-semibold">
        {(
          [
            ["self", "Self-hatch (left / right)"],
            ["kiosk", "Kiosk / in-person"],
          ] as const
        ).map(([m, label]) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded-full px-4 py-1.5 transition ${
              mode === m ? "bg-indigo-600 text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr_20rem]">
        <WfPicker pet={left} setPet={setLeft} title={mode === "self" ? "Left pet" : "Your selected pet"} />
        <WfPicker pet={right} setPet={setRight} title={mode === "self" ? "Right pet" : "Partner pet"} />

        <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">Body return odds</p>
          <dl className="mt-3 space-y-3">
            <div>
              <dt className="text-sm font-medium text-slate-600">{result.nameL}</dt>
              <dd className="text-3xl font-bold tabular-nums text-slate-900">{pct(result.pL)}</dd>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full rounded-full bg-indigo-600" style={{ width: pct(result.pL) }} />
              </div>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-600">{result.nameR}</dt>
              <dd className="text-3xl font-bold tabular-nums text-slate-900">{pct(result.pR)}</dd>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full rounded-full bg-violet-500" style={{ width: pct(result.pR) }} />
              </div>
            </div>
          </dl>
          {result.override ? (
            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              {result.override}
            </p>
          ) : (
            <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
              Formula: (11 − WF) ÷ (22 − (WF₁ + WF₂)). Higher wow factor = flashier
              body = lower chance it comes back.
            </p>
          )}
          {(left.exclusive || right.exclusive) && !result.override && (
            <p className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-sky-800">
              Exclusive tip: to get an Exclusive body back reliably, put it on the
              LEFT in a self-hatch, or make it your Selected Pet in kiosk and
              in-person hatches so normal wow-factor odds apply.
            </p>
          )}
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Wow Factor reference (0–10)
        </h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">WF</th>
                <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-slate-900">Example bodies</th>
              </tr>
            </thead>
            <tbody>
              {WF_EXAMPLES.map(([v, ex]) => (
                <tr key={v} className="even:bg-slate-50/60">
                  <td className="border-b border-slate-100 px-4 py-2 font-bold tabular-nums text-slate-900">{v}</td>
                  <td className="border-b border-slate-100 px-4 py-2 text-slate-600">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          Wow factor is hidden in-game; the community has mapped it for ~1,700
          pets. Rough intuition: common drop pets sit low (0–3), rare and
          crowns-tier bodies sit high (7–10). Look up your exact pet in a
          community pet tome, or estimate from the tier above. Mechanics per
          the community's hatching research — the same rules behind the
          original petcalc tool.
        </p>
      </section>
    </div>
  );
}
