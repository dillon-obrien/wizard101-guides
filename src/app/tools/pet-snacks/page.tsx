import type { Metadata } from "next";
import Link from "next/link";
import { PetSnackPlanner } from "@/components/tools/PetSnackPlanner";

export const metadata: Metadata = {
  title: "Pet XP & Snack Planner",
  description:
    "How many snacks from here to Mega? Wizard101 pet training planner with the verified age XP thresholds, snack quality presets, and double-XP math.",
};

export default function PetSnacksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Pet XP & Snack Planner</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">
        Pet XP & Snack Planner
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        "How many snacks to Mega?" — answered exactly, for any starting point
        and snack quality. Training strategy lives in{" "}
        <Link href="/guides/pets-101" className="font-medium text-indigo-700 hover:text-indigo-900">
          Pets 101
        </Link>
        .
      </p>
      <div className="mt-8">
        <PetSnackPlanner />
      </div>
    </div>
  );
}
