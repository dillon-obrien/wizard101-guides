import type { Metadata } from "next";
import Link from "next/link";
import { HatchCalculator } from "@/components/tools/HatchCalculator";

export const metadata: Metadata = {
  title: "Hatch Odds Calculator (Wow Factor)",
  description:
    "Wizard101 pet hatch return-chance calculator: wow factor odds for both bodies, exclusive-pet placement rules, and a 0–10 wow factor reference table.",
};

export default function HatchCalculatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Hatch Odds Calculator</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">
        Hatch Odds Calculator
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Every hatch secretly rolls on <strong className="font-semibold text-slate-900">Wow Factor</strong> —
        a hidden 0–10 rating per pet body. Flashier body, lower return chance.
        Set both pets and see the real odds, including the exclusive-pet
        placement rules. Breeding strategy lives in the{" "}
        <Link href="/guides/pet-hatching-guide" className="font-medium text-indigo-700 hover:text-indigo-900">
          hatching guide
        </Link>
        .
      </p>
      <div className="mt-8">
        <HatchCalculator />
      </div>
    </div>
  );
}
