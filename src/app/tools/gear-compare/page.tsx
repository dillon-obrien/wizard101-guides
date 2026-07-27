import type { Metadata } from "next";
import Link from "next/link";
import { GearComparator } from "@/components/tools/GearComparator";

export const metadata: Metadata = {
  title: "Gear Comparator",
  description:
    "Compare two Wizard101 loadouts side by side: expected hit (crit-weighted, pierce vs resist) and effective HP — with the deltas that decide the swap.",
};

export default function GearComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Gear Comparator</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">Gear Comparator</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        The eternal question — new drop or current set? Type both stat lines,
        get the honest deltas. Checkpoint strategy lives in the{" "}
        <Link href="/guides/gear-progression-60-to-max" className="font-medium text-indigo-700 hover:text-indigo-900">
          gear progression guide
        </Link>
        .
      </p>
      <div className="mt-8">
        <GearComparator />
      </div>
    </div>
  );
}
