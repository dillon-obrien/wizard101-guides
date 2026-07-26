import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { categories } from "@/content/categories";
import { glossary } from "@/content/glossary";
import { schools } from "@/content/schools";
import { worlds } from "@/content/worlds";
import { allGuides, getGuide } from "@/lib/guides";

const START_PATH = [
  {
    slug: "complete-beginners-guide",
    step: "Learn what you're playing",
    note: "The game, the Spiral, and your first hour — zero knowledge assumed.",
  },
  {
    slug: "choosing-your-school",
    step: "Pick your school",
    note: "All seven, honestly compared, so you don't restart at level 40.",
  },
  {
    slug: "combat-basics",
    step: "Understand combat",
    note: "Pips, blades, fizzles — the loop you'll run for 170 levels.",
  },
  {
    slug: "deck-building-basics",
    step: "Fix your deck",
    note: "The tiny-deck trick that doubles your questing speed today.",
  },
  {
    slug: "world-order-and-leveling",
    step: "Follow the roadmap",
    note: "Every world in order, with detours worth taking.",
  },
];

const FEATURED = [
  "training-points-guide",
  "waterworks-gear-guide",
  "blades-traps-and-stacking",
  "pets-101",
  "gold-farming-guide",
  "gardening-101",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="starfield relative overflow-hidden border-b border-night-700/60">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-arcane-500/40 bg-arcane-500/10 px-4 py-1.5 text-sm font-medium text-arcane-300">
            ✨ An unofficial fan compendium for Wizard101
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            Every secret of the Spiral,{" "}
            <span className="bg-gradient-to-r from-spark-400 to-spark-300 bg-clip-text text-transparent">
              explained like you're new
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-night-200">
            {allGuides.length} deep-dive guides covering leveling, gear, pets,
            gardening, gold, PvP, and every system in between — written so a
            brand-new wizard can follow along, and a veteran still learns
            something.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/guides/complete-beginners-guide"
              className="rounded-full bg-spark-500 px-6 py-3 font-semibold text-night-950 shadow-lg shadow-spark-500/20 transition hover:bg-spark-400"
            >
              🧭 New? Start here
            </Link>
            <Link
              href="/guides"
              className="rounded-full border border-night-500 bg-night-800/80 px-6 py-3 font-semibold text-night-100 transition hover:border-night-400 hover:text-white"
            >
              Browse all guides
            </Link>
          </div>
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              [String(allGuides.length), "in-depth guides"],
              ["7", "school deep-dives"],
              [String(worlds.length), "worlds mapped"],
              [`${glossary.length}+`, "terms defined"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-xl border border-night-700/70 bg-night-850/70 px-3 py-4">
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-bold text-spark-400">{num}</dd>
                <dd className="text-xs text-night-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Start-here path */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white">
          Brand new? Five reads and you're dangerous.
        </h2>
        <p className="mt-2 max-w-2xl text-night-300">
          The complete on-ramp, in order. About 40 minutes of reading total —
          it will save you weeks.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {START_PATH.map((item, i) => {
            const g = getGuide(item.slug);
            if (!g) return null;
            return (
              <li key={item.slug}>
                <Link
                  href={`/guides/${item.slug}`}
                  className="card flex h-full flex-col gap-2 p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-spark-500/15 font-display text-sm font-bold text-spark-400 ring-1 ring-spark-500/40">
                    {i + 1}
                  </span>
                  <span className="font-display font-bold leading-snug text-white">
                    {item.step}
                  </span>
                  <span className="text-sm leading-relaxed text-night-300">
                    {item.note}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Quick answers */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white">
          What do you need <span className="text-spark-400">right now?</span>
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["😤", "I'm stuck on a boss", "It's probably a cheat script — here's how to read it.", "/guides/cheating-bosses-101"],
            ["💸", "I'm broke", "The Halfang routine and sell-discipline that fixes gold forever.", "/guides/gold-farming-guide"],
            ["🐌", "Fights feel slow", "The tiny-deck trick and blade math that end fights in 3 rounds.", "/guides/deck-building-basics"],
            ["🐾", "My pet is useless", "The talents that matter and the breeding loop to get them.", "/guides/pet-talents-that-matter"],
            ["🎒", "What gear at my level?", "The free checkpoint path from Bazaar rags to Darkmoor.", "/guides/gear-guide-levels-1-50"],
            ["🗺️", "Where do I quest next?", "Every world in order, with detours worth taking.", "/guides/world-order-and-leveling"],
            ["🤝", "I can't find a team", "Team-Up, sigil manners, and why supports blade the hitter.", "/guides/team-up-and-dungeon-etiquette"],
            ["❓", "What does this word mean?", "Every Spiral term, defined in plain English.", "/glossary"],
          ].map(([emoji, title, note, href]) => (
            <Link key={href} href={href} className="card flex items-start gap-3 p-4">
              <span aria-hidden className="text-2xl">{emoji}</span>
              <span>
                <span className="block font-semibold text-white">{title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-night-300">{note}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white">
          Everything, organized
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = allGuides.filter((g) => g.category === c.id).length;
            return (
              <Link
                key={c.id}
                href={`/guides?c=${c.id}`}
                className="card flex items-start gap-4 p-5"
              >
                <span aria-hidden className="text-3xl">{c.emoji}</span>
                <span>
                  <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
                    {c.name}
                    <span className="rounded-full bg-night-700 px-2 py-0.5 text-xs font-semibold text-night-200">
                      {count}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-night-300">
                    {c.tagline}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured guides */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-white">
            Reader favorites
          </h2>
          <Link href="/guides" className="text-sm font-medium text-spark-400 hover:text-spark-300">
            All guides →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((slug) => {
            const g = getGuide(slug);
            return g ? <GuideCard key={slug} guide={g} /> : null;
          })}
        </div>
      </section>

      {/* Schools strip */}
      <section className="border-y border-night-700/60 bg-night-850/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Know your school
          </h2>
          <p className="mt-2 max-w-2xl text-night-300">
            Seven schools, seven personalities. Deep-dives with signature
            spells, stat priorities, secondary picks, and leveling tips.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {schools.map((s) => (
              <Link
                key={s.slug}
                href={`/schools/${s.slug}`}
                className="card flex flex-col items-center gap-2 p-4 text-center"
                style={{ borderColor: `${s.color}44` }}
              >
                <span aria-hidden className="text-3xl">{s.emoji}</span>
                <span className="font-display font-bold text-white">{s.name}</span>
                <span className="text-xs text-night-300">{s.archetype}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Worlds teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              🗺️ The whole Spiral, on one page
            </h2>
            <p className="mt-2 max-w-xl text-night-300">
              Every world in order with level ranges, arc summaries, and what
              matters in each — plus when to detour into the side worlds.
            </p>
          </div>
          <Link
            href="/worlds"
            className="shrink-0 rounded-full bg-arcane-600 px-6 py-3 font-semibold text-white transition hover:bg-arcane-500"
          >
            See the world map →
          </Link>
        </div>
      </section>
    </div>
  );
}
