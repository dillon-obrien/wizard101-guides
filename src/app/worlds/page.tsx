import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { worlds } from "@/content/worlds";
import { slugify } from "@/lib/text";
import type { World } from "@/lib/types";

export const metadata: Metadata = {
  title: "World Order & the Spiral Map",
  description:
    "Every Wizard101 world in order with level ranges, arc summaries, highlights, and side-world timing — the whole Spiral on one page.",
};

const ARCS: { key: World["arc"]; title: string; blurb: string }[] = [
  {
    key: 1,
    title: "Arc 1 — The Malistaire Saga",
    blurb:
      "Levels ~1–50. The classic five worlds: learn the game, chase your fallen professor, save the Spiral for the first time.",
  },
  {
    key: 2,
    title: "Arc 2 — Morganthe, the Shadow Queen",
    blurb:
      "Levels ~50–100. The training wheels come off: astral magic, cheat bosses, and the march to Khrysalis.",
  },
  {
    key: 3,
    title: "Arc 3 — The Old One & the Sky",
    blurb:
      "Levels ~100–130. Shadow-enhanced spells, sharper worlds, and a finale in Empyrea that pays off a decade of story.",
  },
  {
    key: 4,
    title: "Arc 4 — The Cabal Years",
    blurb:
      "Levels ~130–170. Candy kingdoms, lost continents, and the rise of guild raids across four worlds.",
  },
  {
    key: 5,
    title: "Arc 5 — Darkmoor Rising",
    blurb:
      "Levels ~170–180. The gothic-horror world of Darkmoor (November 2025) opens a new multi-year story and holds the current cap of 180.",
  },
  {
    key: "side",
    title: "Side Worlds — The Detours Worth Taking",
    blurb:
      "Optional, parallel, and generous: XP top-ups, gear checkpoints, bonus spells, and the game's best farming spots.",
  },
];

export default function WorldsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-slate-900">The Spiral, In Order</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Follow the main story and the worlds order themselves — this page is
        the map, and every world has a <strong className="font-semibold text-slate-900">playbook</strong>:
        the fast route, every Zeke item zone, what to grab, what to skip.
        Level ranges are practical guideposts, not hard gates. Pair with the{" "}
        <Link href="/guides/world-order-and-leveling" className="font-medium text-indigo-700 hover:text-indigo-900">
          leveling roadmap
        </Link>{" "}
        and the{" "}
        <Link href="/guides/side-content-worth-doing" className="font-medium text-indigo-700 hover:text-indigo-900">
          side-content tier list
        </Link>
        .
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <Image
          src="/images/worlds-wizard-city.webp"
          alt="Official Wizard101 artwork of Wizard City, where every journey begins"
          width={3444}
          height={1152}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="mt-12 space-y-16">
        {ARCS.map((arc) => (
          <section key={String(arc.key)} aria-label={arc.title}>
            <h2 className="font-display text-2xl font-bold text-slate-900">{arc.title}</h2>
            <p className="mt-1.5 max-w-2xl text-sm text-slate-500">{arc.blurb}</p>
            <ol className="mt-6 space-y-4 border-l-2 border-slate-200 pl-6">
              {worlds
                .filter((w) => w.arc === arc.key)
                .map((w) => (
                  <li key={w.name} id={slugify(w.name)} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-slate-50"
                    />
                    <div className="card p-5 target:border-indigo-400">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-xl font-bold text-slate-900">
                          {w.name}
                        </h3>
                        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                          Levels {w.levels}
                        </span>
                      </div>
                      <p className="mt-2 leading-relaxed text-slate-600">{w.blurb}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-slate-500">
                        {w.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span aria-hidden className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/worlds/${slugify(w.name)}`}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                      >
                        Open the playbook — route, Zeke items, skips →
                      </Link>
                    </div>
                  </li>
                ))}
            </ol>
          </section>
        ))}
      </div>

      <p className="mt-14 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-500">
        Snapshot note: current through the Darkmoor world (Arc 5, November
        2025 — level cap 180). KingsIsle ships new worlds regularly, usually in
        fall updates — whatever exists past this page, the pattern holds:
        follow the story, hit the gear checkpoints, do Zeke, and detour when
        underleveled.
      </p>
    </div>
  );
}
