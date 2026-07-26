"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SearchDoc } from "@/lib/search";

const GROUP_ORDER: SearchDoc["type"][] = [
  "Guide",
  "Tool",
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
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
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

  // Flat list in display order so arrow keys move visually top-to-bottom.
  const flat = useMemo(() => {
    const grouped: SearchDoc[] = [];
    for (const type of GROUP_ORDER) {
      grouped.push(...results.filter((r) => r.type === type));
    }
    return grouped;
  }, [results]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    const el = listRef.current?.querySelector('[data-selected="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  const grouped = useMemo(() => {
    const map = new Map<SearchDoc["type"], SearchDoc[]>();
    for (const doc of flat) {
      const list = map.get(doc.type) ?? [];
      list.push(doc);
      map.set(doc.type, list);
    }
    return GROUP_ORDER.filter((t) => map.has(t)).map((t) => ({
      type: t,
      items: map.get(t)!,
    }));
  }, [flat]);

  function onInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && flat[selected]) {
      e.preventDefault();
      router.push(flat[selected].href);
      close();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-sm text-slate-500 transition hover:border-slate-400 hover:text-slate-700"
        aria-label="Search the site"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="9" r="6" />
          <path d="m14 14 3.5 3.5" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">Search…</span>
        <kbd className="hidden rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/25 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4">
              <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="9" r="6" />
                <path d="m14 14 3.5 3.5" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search guides, schools, glossary…"
                aria-label="Search query"
                className="w-full bg-transparent py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none"
              />
              <button
                type="button"
                onClick={close}
                className="rounded border border-slate-300 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 hover:text-slate-600"
              >
                ESC
              </button>
            </div>

            <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-2">
              {query.trim() === "" && (
                <p className="px-3 py-6 text-center text-sm text-slate-500">
                  Try <span className="font-medium text-indigo-700">“feint”</span>,{" "}
                  <span className="font-medium text-indigo-700">“waterworks”</span>,{" "}
                  <span className="font-medium text-indigo-700">“couch potatoes”</span> or{" "}
                  <span className="font-medium text-indigo-700">“best school”</span>
                </p>
              )}
              {query.trim() !== "" && flat.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-slate-500">
                  Nothing found — the spell fizzled. Try a shorter word?
                </p>
              )}
              {grouped.map((group) => (
                <div key={group.type} className="mb-1">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {group.type === "Guide" ? "Guides" : group.type === "School" ? "Schools" : group.type === "World" ? "Worlds" : group.type === "Tool" ? "Tools" : group.type}
                  </p>
                  {group.items.map((doc) => {
                    const index = flat.indexOf(doc);
                    const isSelected = index === selected;
                    return (
                      <Link
                        key={doc.href + doc.title}
                        href={doc.href}
                        onClick={close}
                        onMouseEnter={() => setSelected(index)}
                        data-selected={isSelected || undefined}
                        className={`block rounded-lg px-3 py-2 ${
                          isSelected ? "bg-indigo-50" : "hover:bg-slate-50"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-slate-900">
                          {doc.title}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-slate-500">
                          {doc.context}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ))}
              {flat.length > 0 && (
                <p className="border-t border-slate-200 px-3 pb-1 pt-2 text-center text-[11px] text-slate-400">
                  ↑↓ to navigate · Enter to open · Esc to close
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
