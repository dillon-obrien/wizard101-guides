"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Category } from "@/lib/types";
import type { GuideMeta } from "@/lib/meta";
import { GuideCardView } from "./GuideCardView";

const DIFFICULTIES = [
  { id: "all", label: "Any level" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
] as const;

export function GuidesExplorer({
  guides,
  categories,
}: {
  guides: GuideMeta[];
  categories: Category[];
}) {
  const params = useSearchParams();
  const initial = params.get("c");
  const [category, setCategory] = useState<string>(
    initial && categories.some((c) => c.id === initial) ? initial : "all",
  );
  const [difficulty, setDifficulty] =
    useState<(typeof DIFFICULTIES)[number]["id"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((g) => {
      if (category !== "all" && g.category !== category) return false;
      if (difficulty !== "all" && g.difficulty !== difficulty) return false;
      if (q) {
        const hay = `${g.title} ${g.blurb} ${g.tags.join(" ")}`.toLowerCase();
        if (!q.split(/\s+/).every((t) => hay.includes(t))) return false;
      }
      return true;
    });
  }, [guides, category, difficulty, query]);

  const activeCat = categories.find((c) => c.id === category);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={chip(category === "all")}
        >
          ✨ All ({guides.length})
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={chip(category === c.id)}
          >
            {c.emoji} {c.name}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter guides… (e.g. gold, pets, feint)"
          aria-label="Filter guides by text"
          className="w-full max-w-xs rounded-full border border-night-600 bg-night-850 px-4 py-2 text-sm text-night-100 placeholder-night-400 outline-none focus:border-spark-500/60"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by difficulty">
          {DIFFICULTIES.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDifficulty(d.id)}
              className={chip(difficulty === d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {activeCat && (
        <p className="mb-5 text-sm text-night-300">{activeCat.tagline}</p>
      )}

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-night-700 bg-night-850 p-8 text-center text-night-300">
          No guides match those filters — loosen one and try again.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <GuideCardView
              key={g.slug}
              href={`/guides/${g.slug}`}
              title={g.title}
              blurb={g.blurb}
              catEmoji={g.catEmoji}
              catName={g.catName}
              minutes={g.minutes}
              difficulty={g.difficulty}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function chip(active: boolean): string {
  return `rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
    active
      ? "border-spark-500/60 bg-spark-500/15 text-spark-300"
      : "border-night-600 bg-night-850 text-night-200 hover:border-night-500 hover:text-white"
  }`;
}
