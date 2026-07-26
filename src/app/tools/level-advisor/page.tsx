import type { Metadata } from "next";
import Link from "next/link";
import { LevelAdvisor } from "@/components/tools/LevelAdvisor";

export const metadata: Metadata = {
  title: "Level Advisor",
  description:
    "Set your Wizard101 level and see exactly where you should be: current world, gear standard, milestones you should have done, and what's next.",
};

export default function LevelAdvisorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Level Advisor</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">Level Advisor</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        One slider. Your whole situation: world, gear, milestones behind and
        ahead.
      </p>
      <div className="mt-8">
        <LevelAdvisor />
      </div>
    </div>
  );
}
