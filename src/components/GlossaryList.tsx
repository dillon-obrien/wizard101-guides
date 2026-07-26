"use client";

import { useMemo, useState } from "react";

export interface GlossaryItem {
  term: string;
  id: string;
  def: string;
  also?: string[];
}

export function GlossaryList({ entries }: { entries: GlossaryItem[] }) {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? entries.filter((e) =>
          `${e.term} ${(e.also ?? []).join(" ")} ${e.def}`
            .toLowerCase()
            .includes(q),
        )
      : entries;
    const byLetter = new Map<string, GlossaryItem[]>();
    for (const e of filtered) {
      const letter = e.term[0].toUpperCase();
      const list = byLetter.get(letter) ?? [];
      list.push(e);
      byLetter.set(letter, list);
    }
    return [...byLetter.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [entries, query]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter terms… (e.g. pip, feint, resist)"
        aria-label="Filter glossary terms"
        className="mb-8 w-full max-w-md rounded-full border border-night-600 bg-night-850 px-4 py-2.5 text-sm text-night-100 placeholder-night-400 outline-none focus:border-spark-500/60"
      />

      {groups.length === 0 && (
        <p className="rounded-xl border border-night-700 bg-night-850 p-8 text-center text-night-300">
          No terms match — maybe it's in the guides? Try the site search (⌘K).
        </p>
      )}

      <div className="space-y-10">
        {groups.map(([letter, items]) => (
          <section key={letter} aria-label={`Terms starting with ${letter}`}>
            <h2 className="mb-3 font-display text-2xl font-bold text-spark-400">
              {letter}
            </h2>
            <dl className="space-y-4">
              {items.map((e) => (
                <div
                  key={e.id}
                  id={e.id}
                  className="rounded-xl border border-night-700 bg-night-850 p-4 target:border-spark-500/60 target:bg-night-800"
                >
                  <dt className="font-semibold text-white">
                    {e.term}
                    {e.also && e.also.length > 0 && (
                      <span className="ml-2 text-xs font-normal text-night-400">
                        also: {e.also.join(", ")}
                      </span>
                    )}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-night-200">
                    {e.def}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
