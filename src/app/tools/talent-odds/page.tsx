import type { Metadata } from "next";
import Link from "next/link";
import { TalentOdds } from "@/components/tools/TalentOdds";

export const metadata: Metadata = {
  title: "Talent Reveal Odds",
  description:
    "Wizard101 pet talent odds: the chance your wanted talents reveal by Mega, updated live as your pet ages — the keep-training-or-rehatch decision tool.",
};

export default function TalentOddsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/tools" className="hover:text-indigo-700">Tools</Link>
        <span aria-hidden> › </span>
        <span className="text-slate-700">Talent Reveal Odds</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-slate-900">
        Talent Reveal Odds
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        The question every breeder faces at Adult: keep feeding this pet, or
        hatch again? Here's the honest math, updated as reveals come in.
        Talent strategy lives in{" "}
        <Link href="/guides/pet-talents-that-matter" className="font-medium text-indigo-700 hover:text-indigo-900">
          Pet Talents That Matter
        </Link>
        .
      </p>
      <div className="mt-8">
        <TalentOdds />
      </div>
    </div>
  );
}
