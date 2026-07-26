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
      <h1 className="font-display text-4xl font-bold text-slate-900">The Seven Schools</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Your school shapes every fight for hundreds of hours. Here's how each
        one actually plays — no wrong answers, but very different lives.
        Undecided? Read{" "}
        <Link href="/guides/choosing-your-school" className="font-medium text-indigo-700 hover:text-indigo-900">
          Choosing Your School
        </Link>{" "}
        first.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((s) => (
          <Link
            key={s.slug}
            href={`/schools/${s.slug}`}
            className="card overflow-hidden"
          >
            <div aria-hidden className="h-1 w-full" style={{ backgroundColor: s.color }} />
            <div className="p-6">
              <h2 className="font-display text-2xl font-bold text-slate-900">{s.name}</h2>
              <p className="mt-1 text-sm font-semibold" style={{ color: s.color }}>
                {s.archetype}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
              <p className="mt-4 text-xs text-slate-400">
                Accuracy {s.baseAccuracy} · {s.newPlayerFriendliness} for new players
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
