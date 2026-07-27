"use client";

import { useMemo, useRef, useState } from "react";
import petsData from "@/data/pets.json";

/** [name, school, wowFactor, flags(1=exclusive,2=unhatchable,4=retired,8=special), tag] */
type PetRow = [string, string, number, number, string];
const PETS = petsData as PetRow[];

const SCHOOL_COLORS: Record<string, string> = {
  Fire: "#dc2626",
  Ice: "#0369a1",
  Storm: "#7c3aed",
  Myth: "#a16207",
  Life: "#15803d",
  Death: "#475569",
  Balance: "#c2410c",
};

interface PetInput {
  label: string;
  wf: number;
  exclusive: boolean;
  meta?: { school: string; flags: number; tag: string };
}

function flagBadges(flags: number, tag: string) {
  const badges: { text: string; cls: string }[] = [];
  if (flags & 1) badges.push({ text: "Exclusive", cls: "bg-amber-50 text-amber-700 ring-amber-200" });
  if (flags & 2) badges.push({ text: "Unhatchable", cls: "bg-red-50 text-red-600 ring-red-200" });
  if (flags & 4) badges.push({ text: "Retired", cls: "bg-slate-100 text-slate-500 ring-slate-200" });
  if (tag) badges.push({ text: tag, cls: "bg-sky-50 text-sky-700 ring-sky-200" });
  return badges;
}

function PetPicker({
  pet,
  setPet,
  title,
}: {
  pet: PetInput;
  setPet: (p: PetInput) => void;
  title: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const starts: PetRow[] = [];
    const contains: PetRow[] = [];
    for (const p of PETS) {
      const n = p[0].toLowerCase();
      if (n.startsWith(q)) starts.push(p);
      else if (n.includes(q)) contains.push(p);
      if (starts.length >= 10) break;
    }
    return [...starts, ...contains].slice(0, 10);
  }, [query]);

  function choose(p: PetRow) {
    setPet({
      label: p[0],
      wf: p[2],
      exclusive: Boolean(p[3] & 1),
      meta: { school: p[1], flags: p[3], tag: p[4] },
    });
    setQuery("");
    setOpen(false);
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>

      {/* Search */}
      <div className="relative mt-2">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            blurTimer.current = setTimeout(() => setOpen(false), 150);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setHighlight((h) => Math.min(h + 1, matches.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setHighlight((h) => Math.max(h - 1, 0));
            } else if (e.key === "Enter" && matches[highlight]) {
              e.preventDefault();
              choose(matches[highlight]);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder="Type a pet name… (1,391 bodies)"
          aria-label={`Search pet for ${title}`}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />
        {open && matches.length > 0 && (
          <ul className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
            {matches.map((p, i) => (
              <li key={p[0] + p[1]}>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    if (blurTimer.current) clearTimeout(blurTimer.current);
                    choose(p);
                  }}
                  onMouseEnter={() => setHighlight(i)}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm ${
                    i === highlight ? "bg-indigo-50" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: SCHOOL_COLORS[p[1]] ?? "#94a3b8" }}
                  />
                  <span className="flex-1 truncate font-medium text-slate-900">{p[0]}</span>
                  <span className="text-xs tabular-nums text-slate-400">WF {p[2]}</span>
                  {flagBadges(p[3], p[4]).map((b) => (
                    <span key={b.text} className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ring-1 ${b.cls}`}>
                      {b.text}
                    </span>
                  ))}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Selected pet card */}
      {pet.meta ? (
        <div className="mt-3 flex items-start justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: SCHOOL_COLORS[pet.meta.school] ?? "#94a3b8" }}
              />
              {pet.label}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              {pet.meta.school} · Wow Factor {pet.wf}
            </p>
            <p className="mt-1 flex flex-wrap gap-1">
              {flagBadges(pet.meta.flags, pet.meta.tag).map((b) => (
                <span key={b.text} className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ring-1 ${b.cls}`}>
                  {b.text}
                </span>
              ))}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPet({ label: "", wf: pet.wf, exclusive: false })}
            className="rounded-md px-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
            aria-label="Clear selected pet"
          >
            ×
          </button>
        </div>
      ) : (
        <p className="mt-2 text-xs text-slate-400">…or set it manually:</p>
      )}

      {/* Manual controls (always live; picking a pet fills them) */}
      <p className="mt-4 flex items-center justify-between text-sm font-medium text-slate-700">
        Wow Factor
        <span className="text-xl font-bold tabular-nums text-slate-900">{pet.wf}</span>
      </p>
      <input
        type="range"
        min={0}
        max={10}
        value={pet.wf}
        onChange={(e) => setPet({ ...pet, wf: Number(e.target.value), meta: undefined, label: pet.meta ? "" : pet.label })}
        className="mt-1 w-full accent-indigo-600"
        aria-label={`${title} wow factor`}
      />
      <label className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={pet.exclusive}
          onChange={(e) => setPet({ ...pet, exclusive: e.target.checked, meta: undefined })}
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

  const unhatchableWarning = [left, right]
    .filter((p) => p.meta && p.meta.flags & 2)
    .map((p) => p.label);

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
        <PetPicker pet={left} setPet={setLeft} title={mode === "self" ? "Left pet" : "Your selected pet"} />
        <PetPicker pet={right} setPet={setRight} title={mode === "self" ? "Right pet" : "Partner pet"} />

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
          {unhatchableWarning.length > 0 && (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-xs leading-relaxed text-red-700">
              Heads up: {unhatchableWarning.join(" and ")} is flagged
              Unhatchable — it can't be offered as a normal hatch partner.
            </p>
          )}
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-slate-400">
        Dataset: 1,391 pet bodies with wow factors and exclusive/retired/
        unhatchable flags, from the community's hatching research (pet tome
        lineage of the original petcalc), snapshot mid-2026. New pets arrive
        with every update — a missing pet just means the snapshot predates it;
        use the manual sliders. Strategy:{" "}
        <a href="/guides/pet-hatching-guide" className="font-medium text-indigo-700 underline">
          the hatching guide
        </a>
        .
      </p>
    </div>
  );
}
