import type { Metadata } from "next";
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
    title: "Arc 4 — The Newest Chapters",
    blurb:
      "Levels ~130 to the cap (170 in the Wallaru era as of this snapshot — new worlds usually land each fall).",
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
      <h1 className="font-display text-4xl font-bold text-white">The Spiral, In Order</h1>
      <p className="mt-3 max-w-2xl text-lg text-night-300">
        Follow the main story and the worlds order themselves — this page is
        your map of what's coming. Level ranges are practical guideposts, not
        hard gates. Pair with the{" "}
        <Link href="/guides/world-order-and-leveling" className="font-medium text-spark-400 hover:text-spark-300">
          leveling roadmap
        </Link>{" "}
        and the{" "}
        <Link href="/guides/side-content-worth-doing" className="font-medium text-spark-400 hover:text-spark-300">
          side-content tier list
        </Link>
        .
      </p>

      <div className="mt-12 space-y-16">
        {ARCS.map((arc) => (
          <section key={String(arc.key)} aria-label={arc.title}>
            <h2 className="font-display text-2xl font-bold text-spark-300">{arc.title}</h2>
            <p className="mt-1.5 max-w-2xl text-sm text-night-300">{arc.blurb}</p>
            <ol className="mt-6 space-y-4 border-l-2 border-night-700 pl-6">
              {worlds
                .filter((w) => w.arc === arc.key)
                .map((w) => (
                  <li key={w.name} id={slugify(w.name)} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-spark-500 ring-4 ring-night-900"
                    />
                    <div className="card p-5 target:border-spark-500/60">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-xl font-bold text-white">
                          <span aria-hidden>{w.emoji}</span> {w.name}
                        </h3>
                        <span className="rounded-full bg-night-700 px-2.5 py-0.5 text-xs font-semibold text-spark-300">
                          Levels {w.levels}
                        </span>
                      </div>
                      <p className="mt-2 leading-relaxed text-night-200">{w.blurb}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-night-300">
                        {w.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2">
                            <span aria-hidden className="text-spark-500">✦</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
            </ol>
          </section>
        ))}
      </div>

      <p className="mt-14 rounded-xl border border-night-700 bg-night-850 p-5 text-sm leading-relaxed text-night-300">
        📌 Snapshot note: this map is current through the Wallaru era. KingsIsle
        ships new worlds regularly (usually fall updates) — whatever exists past
        this page, the pattern holds: follow the story, hit the gear
        checkpoints, do Zeke, and detour when underleveled.
      </p>
    </div>
  );
}
