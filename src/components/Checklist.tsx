"use client";

import { useEffect, useState } from "react";
import { Inline } from "./Inline";

/**
 * A persistent checklist (localStorage) used by world playbooks.
 * Renders either compact chips (Zeke zones) or a stacked list (grabs).
 * State is per-device; initial render is unchecked to keep SSR stable.
 */
export function Checklist({
  storageKey,
  items,
  variant,
  accent = "indigo",
}: {
  storageKey: string;
  items: string[];
  variant: "chips" | "list";
  accent?: "indigo" | "emerald" | "amber";
}) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const saved: boolean[] = JSON.parse(raw);
        setChecked(items.map((_, i) => Boolean(saved[i])));
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, [storageKey, items]);

  function toggle(i: number) {
    const next = checked.map((c, j) => (j === i ? !c : c));
    setChecked(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // storage unavailable (private mode) — checklist still works in-memory
    }
  }

  function reset() {
    setChecked(items.map(() => false));
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }

  const done = checked.filter(Boolean).length;
  const colors = {
    indigo: ["bg-indigo-600 border-indigo-600 text-white", "text-indigo-700"],
    emerald: ["bg-emerald-600 border-emerald-600 text-white", "text-emerald-700"],
    amber: ["bg-amber-500 border-amber-500 text-white", "text-amber-700"],
  }[accent];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className={`text-xs font-semibold tabular-nums ${colors[1]}`} aria-live="polite">
          {done}/{items.length} done
        </p>
        {done > 0 && (
          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium text-slate-400 hover:text-slate-600"
          >
            Reset
          </button>
        )}
      </div>

      {variant === "chips" ? (
        <ul className="flex flex-wrap gap-1.5">
          {items.map((item, i) => (
            <li key={item + i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked[i]}
                disabled={!loaded}
                className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                  checked[i]
                    ? `${colors[0]} line-through decoration-white/60`
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li key={item + i} className="flex items-start gap-2.5 rounded-lg px-2 py-1.5">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked[i]}
                aria-label={checked[i] ? "Mark not done" : "Mark done"}
                disabled={!loaded}
                className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold transition ${
                  checked[i] ? colors[0] : "border-slate-300 bg-white hover:border-slate-500"
                }`}
              >
                {checked[i] ? "✓" : ""}
              </button>
              <span
                className={`text-[0.95rem] leading-relaxed ${
                  checked[i] ? "text-slate-400 line-through" : "text-slate-700"
                }`}
              >
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
