import type { Metadata } from "next";
import Link from "next/link";
import { DrawOddsCalculator } from "@/components/tools/DrawOddsCalculator";

export const metadata: Metadata = {
  title: "Deck Draw Odds Calculator",
  description:
    "Wizard101 deck math: the exact probability of drawing your blade or hit by each round, for any deck size — the arithmetic behind small decks.",
};

export default function DrawOddsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Draw Odds</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">
        Deck Draw Odds
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        "Why didn't I draw my blade?" — because your deck is too big. Here's
        the exact probability, by round, for any deck. Pair with{" "}
        <Link href="/guides/deck-building-basics" className="font-medium text-indigo-700 hover:text-indigo-900">
          Deck Building
        </Link>
        .
      </p>
      <div className="mt-8">
        <DrawOddsCalculator />
      </div>
    </div>
  );
}
