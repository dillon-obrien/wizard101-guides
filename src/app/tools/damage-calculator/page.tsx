import type { Metadata } from "next";
import Link from "next/link";
import { DamageCalculator } from "@/components/tools/DamageCalculator";

export const metadata: Metadata = {
  title: "Damage Calculator",
  description:
    "Wizard101 damage calculator: stack blades, traps, Feints, auras, globals, resist, pierce and crit — with a step-by-step breakdown of the final hit.",
};

export default function DamageCalculatorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Damage Calculator</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">Damage Calculator</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Every multiplier the game applies, in order. The theory behind it
        lives in{" "}
        <Link href="/guides/blades-traps-and-stacking" className="font-medium text-indigo-700 hover:text-indigo-900">
          Blades, Traps & Buff Stacking
        </Link>
        .
      </p>
      <div className="mt-8">
        <DamageCalculator />
      </div>
    </div>
  );
}
