import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/GuideCard";
import { schoolBySlug, schools } from "@/content/schools";
import { getGuide } from "@/lib/guides";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const school = schoolBySlug.get((await params).slug);
  if (!school) return {};
  return {
    title: `${school.title} — playstyle, spells & tips`,
    description: `${school.tagline} How ${school.name} actually plays in Wizard101: strengths, weaknesses, signature spells, stat priorities and leveling tips.`,
  };
}

export default async function SchoolPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const school = schoolBySlug.get((await params).slug);
  if (!school) notFound();

  const guides = ["choosing-your-school", "training-points-guide"]
    .map(getGuide)
    .filter((g) => g !== undefined);

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-night-700/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${school.color}, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <span aria-hidden className="text-6xl">{school.emoji}</span>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            {school.title}
          </h1>
          <p className="mt-3 text-lg font-medium" style={{ color: school.color }}>
            {school.tagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
            {[
              school.archetype,
              `Base accuracy ${school.baseAccuracy}`,
              `${school.newPlayerFriendliness} for new players`,
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-night-600 bg-night-850/80 px-3.5 py-1.5 font-medium text-night-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6">
        {/* Overview */}
        <section aria-label="Overview" className="space-y-4">
          {school.overview.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-night-100">
              {p.split("**").map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="font-semibold text-white">{part}</strong>
                ) : (
                  <span key={j}>{part}</span>
                ),
              )}
            </p>
          ))}
        </section>

        {/* Strengths / weaknesses */}
        <section className="grid gap-5 md:grid-cols-2" aria-label="Strengths and weaknesses">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6">
            <h2 className="mb-4 font-display text-xl font-bold text-emerald-300">✅ Where it shines</h2>
            <ul className="space-y-2.5 text-[0.95rem] leading-relaxed">
              {school.strengths.map((s, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-red-500/30 bg-red-500/[0.06] p-6">
            <h2 className="mb-4 font-display text-xl font-bold text-red-300">⚠️ Where it struggles</h2>
            <ul className="space-y-2.5 text-[0.95rem] leading-relaxed">
              {school.weaknesses.map((s, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Signature spells */}
        <section aria-label="Signature spells">
          <h2 className="mb-5 font-display text-2xl font-bold text-white">Signature spells</h2>
          <div className="overflow-x-auto rounded-xl border border-night-700">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-night-800">
                  <th className="border-b border-night-700 px-4 py-3 font-semibold text-spark-300">Spell</th>
                  <th className="border-b border-night-700 px-4 py-3 font-semibold text-spark-300">Role</th>
                  <th className="border-b border-night-700 px-4 py-3 font-semibold text-spark-300">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {school.signatureSpells.map((spell) => (
                  <tr key={spell.name} className="odd:bg-night-850 even:bg-night-800/50">
                    <td className="border-b border-night-700/60 px-4 py-2.5 font-medium text-white">{spell.name}</td>
                    <td className="border-b border-night-700/60 px-4 py-2.5">{spell.role}</td>
                    <td className="border-b border-night-700/60 px-4 py-2.5 leading-relaxed">{spell.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-night-400">
            Spells are learned automatically from your professor as you level —
            never skip a professor's summons.
          </p>
        </section>

        {/* Stats & secondaries */}
        <section className="grid gap-5 md:grid-cols-2" aria-label="Stats and secondary schools">
          <div className="card p-6">
            <h2 className="mb-4 font-display text-xl font-bold text-white">📊 Stat priorities</h2>
            <ol className="space-y-2.5 text-[0.95rem] leading-relaxed">
              {school.statPriorities.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-display font-bold text-spark-400">{i + 1}.</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-6">
            <h2 className="mb-4 font-display text-xl font-bold text-white">🎓 Best secondary picks</h2>
            <ul className="space-y-3 text-[0.95rem] leading-relaxed">
              {school.secondaries.map((s, i) => (
                <li key={i}>
                  <span className="font-semibold text-white">{s.pick}</span>
                  <span className="block text-night-300">{s.why}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leveling tips */}
        <section aria-label="Leveling tips">
          <h2 className="mb-5 font-display text-2xl font-bold text-white">Leveling tips from the trenches</h2>
          <ul className="space-y-3">
            {school.levelingTips.map((tip, i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-night-700 bg-night-850 p-4 leading-relaxed">
                <span aria-hidden>💡</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Fun fact */}
        <aside className="rounded-2xl border border-arcane-500/30 bg-arcane-500/[0.07] p-6">
          <p className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-arcane-300">✨ Spiral lore</p>
          <p className="leading-relaxed text-night-100">{school.funFact}</p>
        </aside>

        {/* Related */}
        <section aria-label="Related guides">
          <h2 className="mb-5 font-display text-2xl font-bold text-white">Now plan your build</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
          <p className="mt-6 text-sm text-night-300">
            Or compare against the other six on the{" "}
            <Link href="/schools" className="font-medium text-spark-400 hover:text-spark-300">
              schools overview
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
