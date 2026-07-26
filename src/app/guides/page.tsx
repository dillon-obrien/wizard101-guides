import type { Metadata } from "next";
import { Suspense } from "react";
import { GuidesExplorer } from "@/components/GuidesExplorer";
import { categories } from "@/content/categories";
import { allGuideMetas } from "@/lib/meta";

export const metadata: Metadata = {
  title: "All Guides",
  description:
    "Every Spiral Scholar guide: leveling, gear, pets, gardening, gold, strategy, PvP and more — filter by topic, difficulty, or keyword.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-white">The Guide Library</h1>
      <p className="mt-3 max-w-2xl text-lg text-night-300">
        {allGuideMetas.length} guides, all written the same way: a TL;DR up
        top, plain English throughout, and depth for when you want it.
      </p>
      <div className="mt-10">
        <Suspense>
          <GuidesExplorer guides={allGuideMetas} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
}
