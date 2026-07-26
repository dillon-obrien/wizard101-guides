"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SearchDoc } from "@/lib/search";

const GROUP_ORDER: SearchDoc["type"][] = [
  "Guide",
  "School",
  "World",
  "Glossary",
  "FAQ",
];

function score(doc: SearchDoc, tokens: string[]): number {
  let total = 0;
  const title = doc.title.toLowerCase();
  for (const t of tokens) {
    if (title.startsWith(t)) total += 6;
    else if (title.includes(t)) total += 4;
    else if (doc.keywords.includes(t)) total += 1;
    else return 0; // every token must match somewhere
  }
  return total;
}

export function SearchDialog({ docs }: { docs: SearchDoc[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      } else if (
        e.key === "/" &&
        !open &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = useMemo(() => {
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return [];
    return docs
      .map((doc) => ({ doc, s: score(doc, tokens) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 24)
      .map((r) => r.doc);
  }, [docs, query]);

  const grouped = useMemo(() => {
    const map = new Map<SearchDoc["type"], SearchDoc[]>();
    for (const doc of results) {
      const list = map.get(doc.type) ?? [];
      list.push(doc);
      map.set(doc.type, list);
    }
    return GROUP_ORDER.filter((t) => map.has(t)).map((t) => ({
      type: t,
      items: map.get(t)!,
    }));
  }, [results]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-night-600 bg-night-800/80 px-3.5 py-1.5 text-sm text-night-300 transition hover:border-night-500 hover:text-night-100"
        aria-label="Search the site"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="9" r="6" />
          <path d="m14 14 3.5 3.5" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">Search…</span>
        <kbd className="hidden rounded border border-night-600 bg-night-900 px-1.5 py-0.5 text-[10px] font-semibold text-night-400 sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-night-950/80 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-night-600 bg-night-850 shadow-2xl shadow-night-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-night-700 px-4">
              <span aria-hidden className="text-night-400">🔮</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides, schools, glossary…"
                className="w-full bg-transparent py-3.5 text-base text-night-100 placeholder-night-400 outline-none"
              />
              <button
                type="button"
                onClick={close}
                className="rounded border border-night-600 px-1.5 py-0.5 text-[10px] font-semibold text-night-400 hover:text-night-200"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2">
              {query.trim() === "" && (
                <p className="px-3 py-6 text-center text-sm text-night-300">
                  Try <span className="text-spark-400">“feint”</span>,{" "}
                  <span className="text-spark-400">“waterworks”</span>,{" "}
                  <span className="text-spark-400">“couch potatoes”</span> or{" "}
                  <span className="text-spark-400">“best school”</span>
                </p>
              )}
              {query.trim() !== "" && results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-night-300">
                  Nothing found — the spell fizzled. Try a shorter word?
                </p>
              )}
              {grouped.map((group) => (
                <div key={group.type} className="mb-1">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-night-400">
                    {group.type === "Guide" ? "Guides" : group.type === "School" ? "Schools" : group.type === "World" ? "Worlds" : group.type}
                  </p>
                  {group.items.map((doc) => (
                    <Link
                      key={doc.href + doc.title}
                      href={doc.href}
                      onClick={close}
                      className="block rounded-lg px-3 py-2 hover:bg-night-700/60"
                    >
                      <span className="block text-sm font-semibold text-night-100">
                        {doc.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-night-300">
                        {doc.context}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
