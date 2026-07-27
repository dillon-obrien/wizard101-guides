import type { Metadata } from "next";
import Link from "next/link";
import { BuildPlanner } from "@/components/tools/BuildPlanner";

export const metadata: Metadata = {
  title: "Build Planner (real gear data)",
  description:
    "Plan a Wizard101 endgame loadout from a real item database: search actual hats, robes, wands and rings (levels 150-180) by school, and see live stat totals.",
};

export default function BuildPlannerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Build Planner</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">Build Planner</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Real items, real numbers: search the actual endgame gear database
        (levels 150–180) by slot, school, and level — totals update live.
        Strategy context lives in the{" "}
        <Link href="/guides/gear-progression-60-to-max" className="font-medium text-indigo-700 hover:text-indigo-900">
          gear progression guide
        </Link>{" "}
        and{" "}
        <Link href="/guides/the-skip-list" className="font-medium text-indigo-700 hover:text-indigo-900">
          The Skip List
        </Link>
        .
      </p>
      <div className="mt-8">
        <BuildPlanner />
      </div>
    </div>
  );
}
