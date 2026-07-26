import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/GuideCard";
import { SchoolIcon } from "@/components/SchoolIcon";
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
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_16rem]">
          <div>
            <p
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
              style={{ color: school.color }}
            >
              <SchoolIcon school={school.slug} className="h-5 w-5" />
              {school.title}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              {school.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">{school.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              {[
                school.archetype,
                `Base accuracy ${school.baseAccuracy}`,
                `${school.newPlayerFriendliness} for new players`,
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 font-medium text-slate-600"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:block">
            <Image
              src={`/images/school-${school.slug}.webp`}
              alt={`Official artwork of the ${school.name} school professor`}
              width={548}
              height={414}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div aria-hidden className="h-1 w-full" style={{ backgroundColor: school.color }} />
      </header>

      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6">
        {/* Overview */}
        <section aria-label="Overview" className="space-y-4">
          {school.overview.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-700">
              {p.split("**").map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="font-semibold text-slate-900">{part}</strong>
                ) : (
                  <span key={j}>{part}</span>
                ),
              )}
            </p>
          ))}
        </section>

        {/* Strengths / weaknesses */}
        <section className="grid gap-5 md:grid-cols-2" aria-label="Strengths and weaknesses">
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50/70 p-6">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-700">
              Where it shines
            </h2>
            <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-slate-700">
              {school.strengths.map((s, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-r-xl border-l-4 border-red-400 bg-red-50/70 p-6">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-red-700">
              Where it struggles
            </h2>
            <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-slate-700">
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
          <h2 className="mb-5 font-display text-2xl font-bold text-slate-900">Signature spells</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">Spell</th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">Role</th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {school.signatureSpells.map((spell) => (
                  <tr key={spell.name} className="even:bg-slate-50/60">
                    <td className="border-b border-slate-100 px-4 py-2.5 font-medium text-slate-900">{spell.name}</td>
                    <td className="border-b border-slate-100 px-4 py-2.5 text-slate-700">{spell.role}</td>
                    <td className="border-b border-slate-100 px-4 py-2.5 leading-relaxed text-slate-700">{spell.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Spells are learned automatically from your professor as you level —
            never skip a professor's summons.
          </p>
        </section>

        {/* Stats & secondaries */}
        <section className="grid gap-5 md:grid-cols-2" aria-label="Stats and secondary schools">
          <div className="card p-6">
            <h2 className="mb-4 font-display text-xl font-bold text-slate-900">Stat priorities</h2>
            <ol className="space-y-2.5 text-[0.95rem] leading-relaxed text-slate-700">
              {school.statPriorities.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold text-indigo-700">{i + 1}.</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-6">
            <h2 className="mb-4 font-display text-xl font-bold text-slate-900">Best secondary picks</h2>
            <ul className="space-y-3 text-[0.95rem] leading-relaxed">
              {school.secondaries.map((s, i) => (
                <li key={i}>
                  <span className="font-semibold text-slate-900">{s.pick}</span>
                  <span className="block text-slate-500">{s.why}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leveling tips */}
        <section aria-label="Leveling tips">
          <h2 className="mb-5 font-display text-2xl font-bold text-slate-900">Leveling tips from the trenches</h2>
          <ul className="space-y-3">
            {school.levelingTips.map((tip, i) => (
              <li
                key={i}
                className="rounded-r-xl border-l-4 bg-white p-4 leading-relaxed text-slate-700 shadow-sm ring-1 ring-slate-100"
                style={{ borderLeftColor: school.color }}
              >
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Fun fact */}
        <aside className="rounded-r-xl border-l-4 border-violet-500 bg-violet-50/70 p-6">
          <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">Spiral lore</p>
          <p className="leading-relaxed text-slate-700">{school.funFact}</p>
        </aside>

        {/* Related */}
        <section aria-label="Related guides">
          <h2 className="mb-5 font-display text-2xl font-bold text-slate-900">Now plan your build</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Or compare against the other six on the{" "}
            <Link href="/schools" className="font-medium text-indigo-700 hover:text-indigo-900">
              schools overview
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
