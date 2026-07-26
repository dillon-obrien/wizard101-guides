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

  const allLetters = useMemo(
    () => [...new Set(entries.map((e) => e.term[0].toUpperCase()))].sort(),
    [entries],
  );

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

  const activeLetters = new Set(groups.map(([l]) => l));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter terms… (e.g. pip, feint, resist)"
          aria-label="Filter glossary terms"
          className="w-full max-w-md rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* A–Z jump bar */}
      <nav
        aria-label="Jump to letter"
        className="sticky top-16 z-20 -mx-1 mb-8 overflow-x-auto border-b border-slate-200 bg-slate-50/95 px-1 py-2 backdrop-blur"
      >
        <div className="flex gap-1">
          {allLetters.map((letter) => {
            const enabled = activeLetters.has(letter);
            return enabled ? (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-slate-600 transition hover:bg-white hover:text-indigo-700 hover:shadow-sm"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-slate-300"
              >
                {letter}
              </span>
            );
          })}
        </div>
      </nav>

      {groups.length === 0 && (
        <p className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">
          No terms match — maybe it's in the guides? Try the site search (⌘K).
        </p>
      )}

      <div className="space-y-10">
        {groups.map(([letter, items]) => (
          <section
            key={letter}
            id={`letter-${letter}`}
            aria-label={`Terms starting with ${letter}`}
          >
            <h2 className="mb-3 font-display text-2xl font-bold text-indigo-700">
              {letter}
            </h2>
            <dl className="space-y-4">
              {items.map((e) => (
                <div
                  key={e.id}
                  id={e.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 target:border-indigo-400 target:bg-indigo-50/40"
                >
                  <dt className="font-semibold text-slate-900">
                    {e.term}
                    {e.also && e.also.length > 0 && (
                      <span className="ml-2 text-xs font-normal text-slate-400">
                        also: {e.also.join(", ")}
                      </span>
                    )}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-600">
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
