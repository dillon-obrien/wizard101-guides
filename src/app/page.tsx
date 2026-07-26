import Image from "next/image";
import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";
import { GuideCard } from "@/components/GuideCard";
import { SchoolIcon } from "@/components/SchoolIcon";
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
    note: "Pips, blades, fizzles — the loop you'll run for 180 levels.",
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

const QUICK_ANSWERS = [
  ["I'm stuck on a boss", "It's probably a cheat script — here's how to read it.", "/guides/cheating-bosses-101"],
  ["I'm broke", "The Halfang routine and sell-discipline that fixes gold forever.", "/guides/gold-farming-guide"],
  ["Fights feel slow", "The tiny-deck trick and blade math that end fights in 3 rounds.", "/guides/deck-building-basics"],
  ["My pet is useless", "The talents that matter and the breeding loop to get them.", "/guides/pet-talents-that-matter"],
  ["What gear at my level?", "The free checkpoint path from Bazaar rags to Darkmoor.", "/guides/gear-guide-levels-1-50"],
  ["Where do I quest next?", "Per-world playbooks: fast route, Zeke items, what to skip.", "/worlds"],
  ["I can't find a team", "Team-Up, sigil manners, and why supports blade the hitter.", "/guides/team-up-and-dungeon-etiquette"],
  ["What does this word mean?", "Every Spiral term, defined in plain English.", "/glossary"],
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
                An unofficial fan compendium for Wizard101
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Every secret of the Spiral,{" "}
                <span className="text-indigo-700">explained like you're new</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                {allGuides.length} deep-dive guides covering leveling, gear,
                pets, gardening, gold, PvP, and every system in between —
                written so a brand-new wizard can follow along, and a veteran
                still learns something.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/guides/complete-beginners-guide"
                  className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  New? Start here
                </Link>
                <Link
                  href="/guides"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  Browse all guides
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5">
              <Image
                src="/images/hero-merle-gamma.webp"
                alt="Headmaster Merle Ambrose and Gamma the owl studying a crystal ball — official Wizard101 artwork"
                width={1240}
                height={810}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              [String(allGuides.length), "in-depth guides"],
              ["7", "school deep-dives"],
              [String(worlds.length), "worlds mapped"],
              [`${glossary.length}+`, "terms defined"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 text-center">
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-bold text-indigo-700">{num}</dd>
                <dd className="text-xs text-slate-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Start-here path */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-slate-900">
          Brand new? Five reads and you're dangerous.
        </h2>
        <p className="mt-2 max-w-2xl text-slate-500">
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
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700 ring-1 ring-indigo-200">
                    {i + 1}
                  </span>
                  <span className="font-display font-bold leading-snug text-slate-900">
                    {item.step}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-500">
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
        <h2 className="font-display text-3xl font-bold text-slate-900">
          What do you need right now?
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ANSWERS.map(([title, note, href]) => (
            <Link key={href} href={href} className="card p-4">
              <span className="block font-semibold text-slate-900">{title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-slate-500">{note}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-slate-900">
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
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <CategoryIcon category={c.id} />
                </span>
                <span>
                  <span className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
                    {c.name}
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                      {count}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                    {c.tagline}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured guides */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Reader favorites
            </h2>
            <Link href="/guides" className="text-sm font-medium text-indigo-700 hover:text-indigo-900">
              All guides →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((slug) => {
              const g = getGuide(slug);
              return g ? <GuideCard key={slug} guide={g} /> : null;
            })}
          </div>
        </div>
      </section>

      {/* Tools strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Do the math
          </h2>
          <Link href="/tools" className="text-sm font-medium text-indigo-700 hover:text-indigo-900">
            All tools →
          </Link>
        </div>
        <p className="mt-2 max-w-2xl text-slate-500">
          Interactive calculators on the same verified numbers as the guides.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Damage Calculator", "Blades × traps × pierce × crit — the exact hit", "/tools/damage-calculator"],
            ["Hatch Odds", "Wow Factor return chances + exclusive rules", "/tools/hatch-calculator"],
            ["Talent Reveal Odds", "Keep training or rehatch, answered honestly", "/tools/talent-odds"],
            ["Pet XP & Snacks", "Exact feedings from any age to Mega", "/tools/pet-snacks"],
            ["Deck Draw Odds", "Why small decks always draw the blade", "/tools/draw-odds"],
            ["Training Points", "Levels + Zeke + named givers, totaled", "/tools/training-points"],
            ["Level Advisor", "Your world, gear, and next milestones", "/tools/level-advisor"],
          ].map(([name, blurb, href]) => (
            <Link key={href} href={href} className="card p-4">
              <span className="block font-semibold text-slate-900">{name}</span>
              <span className="mt-1 block text-xs leading-relaxed text-slate-500">{blurb}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Schools strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-slate-900">
          Know your school
        </h2>
        <p className="mt-2 max-w-2xl text-slate-500">
          Seven schools, seven personalities. Deep-dives with signature
          spells, stat priorities, secondary picks, and leveling tips.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {schools.map((s) => (
            <Link
              key={s.slug}
              href={`/schools/${s.slug}`}
              className="card flex flex-col gap-1.5 p-4"
            >
              <span style={{ color: s.color }}>
                <SchoolIcon school={s.slug} className="h-6 w-6" />
              </span>
              <span className="font-display font-bold text-slate-900">{s.name}</span>
              <span className="text-xs leading-snug text-slate-500">{s.archetype}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Worlds teaser */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">
              The whole Spiral, on one page
            </h2>
            <p className="mt-2 max-w-xl text-slate-500">
              Every world in order with level ranges, arc summaries, and what
              matters in each — plus when to detour into the side worlds.
            </p>
          </div>
          <Link
            href="/worlds"
            className="shrink-0 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            See the world map →
          </Link>
        </div>
      </section>
    </div>
  );
}
