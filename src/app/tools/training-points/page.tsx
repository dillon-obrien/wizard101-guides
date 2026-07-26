import type { Metadata } from "next";
import Link from "next/link";
import { TrainingPointPlanner } from "@/components/tools/TrainingPointPlanner";

export const metadata: Metadata = {
  title: "Training Point Planner",
  description:
    "Count your Wizard101 training points: levels, all 21 Zeke quests, and every named side-quest giver — the verified census, interactive.",
};

export default function TrainingPointsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Training Point Planner</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">Training Point Planner</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Levels + Zeke + the named givers most players never find. Spending
        strategy lives in the{" "}
        <Link href="/guides/training-points-guide" className="font-medium text-indigo-700 hover:text-indigo-900">
          training points guide
        </Link>
        .
      </p>
      <div className="mt-8">
        <TrainingPointPlanner />
      </div>
    </div>
  );
}
