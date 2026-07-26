import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Interactive Wizard101 tools: damage calculator with full buff stacking, training-point planner with the verified quest census, and a level advisor.",
};

const TOOLS = [
  {
    href: "/tools/damage-calculator",
    name: "Damage Calculator",
    blurb:
      "Stack blades, traps, auras, pierce and crits — see the exact hit, step by step. The classic community tool, rebuilt.",
  },
  {
    href: "/tools/training-points",
    name: "Training Point Planner",
    blurb:
      "Your level + every Zeke and named-giver quest (verified census) — how many points you've earned and what's left on the table.",
  },
  {
    href: "/tools/level-advisor",
    name: "Level Advisor",
    blurb:
      "Set your level; get your world, gear standard, what should already be done, and what's coming next.",
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-slate-900">Tools</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Interactive calculators built on the same verified numbers as the
        guides. No login, no ads, instant.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href} className="card p-6">
            <h2 className="font-display text-xl font-bold text-slate-900">{t.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.blurb}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">Open →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
