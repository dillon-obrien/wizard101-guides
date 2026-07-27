"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** Compact gear item served from /data/gear.json */
interface GearItem {
  k: string; // id
  n: string; // name
  s: string; // school ("Fire", …, "Global"/"Any"/null-ish)
  l: number; // level requirement
  t: string; // type: Hats/Robes/…
  st: Record<string, number>;
  set?: string;
  f?: number; // 1 = no_auction
}

const SLOTS = ["Hats", "Robes", "Boots", "Wands", "Athames", "Amulets", "Rings", "Decks"] as const;
type Slot = (typeof SLOTS)[number];

const SCHOOLS = ["Fire", "Ice", "Storm", "Myth", "Life", "Death", "Balance"] as const;
const INITIAL: Record<string, string> = {
  Fire: "F", Ice: "I", Storm: "S", Myth: "M", Life: "L", Death: "D", Balance: "B",
};

/** Stat bases we know how to label; anything else still sums and displays raw. */
const STAT_LABELS: [string, string][] = [
  ["health", "Health"],
  ["mana", "Mana"],
  ["damage", "Damage %"],
  ["res", "Resist %"],
  ["acc", "Accuracy %"],
  ["crit", "Critical"],
  ["block", "Block"],
  ["pierce", "Pierce %"],
  ["pip_chance", "Power pip %"],
  ["power_pip", "Power pip %"],
  ["shadow_pip_rating", "Shadow rating"],
  ["archmastery", "Archmastery"],
  ["stun_res", "Stun resist %"],
  ["in_heal", "Incoming heal %"],
  ["out_heal", "Outgoing heal %"],
  ["energy", "Energy"],
  ["fishing_luck", "Fishing luck %"],
  ["starting_pips", "Starting pips"],
  ["starting_power_pips", "Starting power pips"],
];

function totalsFor(items: GearItem[], school: string) {
  const raw: Record<string, number> = {};
  for (const it of items) {
    for (const [k, v] of Object.entries(it.st)) raw[k] = (raw[k] ?? 0) + v;
  }
  const ini = INITIAL[school];
  // Fold school-suffixed keys into base for the selected school; keep _all.
  const folded: Record<string, number> = {};
  for (const [k, v] of Object.entries(raw)) {
    const m = k.match(/^(.*)_(F|I|S|M|L|D|B|all)$/);
    if (!m) {
      folded[k] = (folded[k] ?? 0) + v;
    } else if (m[2] === "all" || m[2] === ini) {
      folded[m[1]] = (folded[m[1]] ?? 0) + v;
    }
    // other schools' suffixed stats are ignored for this school's view
  }
  return folded;
}

function labelFor(base: string): string {
  const hit = STAT_LABELS.find(([k]) => k === base);
  return hit ? hit[1] : base.replace(/_/g, " ");
}

const DISPLAY_ORDER = ["damage", "res", "pierce", "crit", "block", "acc", "health", "pip_chance", "power_pip", "shadow_pip_rating", "archmastery"];

function SlotPicker({
  slot,
  school,
  maxLevel,
  items,
  chosen,
  onChoose,
}: {
  slot: Slot;
  school: string;
  maxLevel: number;
  items: GearItem[];
  chosen: GearItem | null;
  onChoose: (i: GearItem | null) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pool = useMemo(
    () =>
      items.filter(
        (i) =>
          i.t === slot &&
          i.l <= maxLevel &&
          (i.s === school || !SCHOOLS.includes(i.s as (typeof SCHOOLS)[number])),
      ),
    [items, slot, school, maxLevel],
  );

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q.length < 2 ? pool : pool.filter((i) => i.n.toLowerCase().includes(q));
    // Highest level first — "what's best available" default ordering.
    return [...base].sort((a, b) => b.l - a.l).slice(0, 12);
  }, [pool, query]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{slot}</p>
        <span className="text-[10px] text-slate-400">{pool.length} options</span>
      </div>

      {chosen ? (
        <div className="mt-2 flex items-start justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">{chosen.n}</p>
            <p className="text-xs text-slate-500">
              Lv {chosen.l} · {chosen.s}
              {chosen.set ? ` · ${chosen.set}` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onChoose(null)}
            aria-label={`Clear ${slot}`}
            className="rounded-md px-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="relative mt-2">
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onBlur={() => { blurTimer.current = setTimeout(() => setOpen(false), 150); }}
            placeholder={`Search ${slot.toLowerCase()}…`}
            aria-label={`Search ${slot}`}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
          {open && matches.length > 0 && (
            <ul className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
              {matches.map((i) => (
                <li key={i.k}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      if (blurTimer.current) clearTimeout(blurTimer.current);
                      onChoose(i);
                      setQuery("");
                      setOpen(false);
                    }}
                    className="flex w-full items-baseline gap-2 px-3 py-1.5 text-left text-sm hover:bg-indigo-50"
                  >
                    <span className="min-w-0 flex-1 truncate font-medium text-slate-900">{i.n}</span>
                    <span className="shrink-0 text-xs tabular-nums text-slate-400">Lv {i.l}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export function BuildPlanner() {
  const [items, setItems] = useState<GearItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [school, setSchool] = useState<string>("Fire");
  const [maxLevel, setMaxLevel] = useState(180);
  const [picks, setPicks] = useState<Record<string, GearItem | null>>({});

  useEffect(() => {
    fetch("/data/gear.json")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setItems)
      .catch((e) => setError(String(e)));
  }, []);

  const chosenItems = useMemo(
    () => SLOTS.map((s) => picks[s]).filter((i): i is GearItem => Boolean(i)),
    [picks],
  );
  const totals = useMemo(() => totalsFor(chosenItems, school), [chosenItems, school]);

  const orderedStats = useMemo(() => {
    const entries = Object.entries(totals);
    const rank = (k: string) => {
      const idx = DISPLAY_ORDER.indexOf(k);
      return idx === -1 ? 99 : idx;
    };
    return entries.sort((a, b) => rank(a[0]) - rank(b[0]) || a[0].localeCompare(b[0]));
  }, [totals]);

  if (error) {
    return (
      <p className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
        Couldn't load the gear database ({error}). Refresh to retry.
      </p>
    );
  }
  if (!items) {
    return (
      <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
        Loading the gear database…
      </p>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="School">
          {SCHOOLS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSchool(s)}
              className={`rounded-full border px-3 py-1 text-sm font-medium transition ${
                school === s
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
          Level cap
          <input
            type="range"
            min={1}
            max={180}
            value={maxLevel}
            onChange={(e) => setMaxLevel(Number(e.target.value))}
            className="accent-indigo-600"
          />
          <span className="w-8 text-right text-lg font-bold tabular-nums text-slate-900">{maxLevel}</span>
        </label>
        <span className="text-xs text-slate-400">{items.length.toLocaleString()} items loaded</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="grid gap-3 sm:grid-cols-2">
          {SLOTS.map((slot) => (
            <SlotPicker
              key={slot}
              slot={slot}
              school={school}
              maxLevel={maxLevel}
              items={items}
              chosen={picks[slot] ?? null}
              onChoose={(i) => setPicks((p) => ({ ...p, [slot]: i }))}
            />
          ))}
        </div>

        <div className="h-fit rounded-xl border border-indigo-200 bg-indigo-50/60 p-5 lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Build totals — {school}
          </p>
          {chosenItems.length === 0 ? (
            <p className="mt-3 text-sm text-slate-500">
              Pick items on the left; totals appear here (school-specific stats
              are folded into your selected school's view).
            </p>
          ) : (
            <dl className="mt-3 space-y-1.5 text-sm">
              {orderedStats.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3">
                  <dt className="capitalize text-slate-600">{labelFor(k)}</dt>
                  <dd className="font-bold tabular-nums text-slate-900">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {chosenItems.length > 0 && (
            <p className="mt-4 border-t border-indigo-100 pt-3 text-[11px] leading-relaxed text-slate-400">
              {chosenItems.length}/8 slots filled. Push these numbers through
              the{" "}
              <a href="/tools/damage-calculator" className="font-medium text-indigo-700 underline">
                damage calculator
              </a>{" "}
              or{" "}
              <a href="/tools/gear-compare" className="font-medium text-indigo-700 underline">
                comparator
              </a>
              .
            </p>
          )}
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-slate-400">
        Item data courtesy of the excellent{" "}
        <a href="https://www.wizbuilder.net" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline">
          WizBuilder
        </a>{" "}
        (snapshot, mid-2026) — for jewels, socketing, set-bonus math, and
        shareable builds, use their full builder. Set-membership shows on
        items here, but set *bonuses* aren't totaled in this lightweight view.
      </p>
    </div>
  );
}
