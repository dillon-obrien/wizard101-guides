import type { Metadata } from "next";
import { GlossaryList } from "@/components/GlossaryList";
import { glossary } from "@/content/glossary";
import { slugify } from "@/lib/text";

export const metadata: Metadata = {
  title: "Glossary — every Spiral term in plain English",
  description:
    "AoE, pips, Feint, spellements, may-casts — every Wizard101 term defined simply, in one searchable page.",
};

export default function GlossaryPage() {
  const entries = [...glossary]
    .sort((a, b) => a.term.localeCompare(b.term))
    .map((e) => ({
      term: e.term,
      id: slugify(e.term),
      def: e.def,
      also: e.also,
    }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-white">The Glossary</h1>
      <p className="mt-3 max-w-2xl text-lg text-night-300">
        {entries.length} terms, zero jargon-explained-with-jargon. If the
        Spiral says it, it's defined here.
      </p>
      <div className="mt-10">
        <GlossaryList entries={entries} />
      </div>
    </div>
  );
}
