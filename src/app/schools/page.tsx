import type { Metadata } from "next";
import Link from "next/link";
import { schools } from "@/content/schools";

export const metadata: Metadata = {
  title: "The Seven Schools",
  description:
    "Fire, Ice, Storm, Myth, Life, Death and Balance — honest deep-dives into how each Wizard101 school actually plays.",
};

export default function SchoolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-white">The Seven Schools</h1>
      <p className="mt-3 max-w-2xl text-lg text-night-300">
        Your school shapes every fight for hundreds of hours. Here's how each
        one actually plays — no wrong answers, but very different lives.
        Undecided? Read{" "}
        <Link href="/guides/choosing-your-school" className="font-medium text-spark-400 hover:text-spark-300">
          Choosing Your School
        </Link>{" "}
        first.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((s) => (
          <Link
            key={s.slug}
            href={`/schools/${s.slug}`}
            className="card group relative overflow-hidden p-6"
            style={{ borderColor: `${s.color}55` }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-25 transition-opacity group-hover:opacity-40"
              style={{
                background: `radial-gradient(ellipse at top, ${s.color}, transparent 70%)`,
              }}
            />
            <div className="relative">
              <span aria-hidden className="text-4xl">{s.emoji}</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">{s.name}</h2>
              <p className="mt-1 text-sm font-medium" style={{ color: s.color }}>
                {s.archetype}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-night-200">{s.tagline}</p>
              <p className="mt-4 text-xs text-night-400">
                Accuracy {s.baseAccuracy} · {s.newPlayerFriendliness} for new players
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
