# The Spiral Scholar 🧙‍♂️

An in-depth, beginner-friendly **Wizard101 guide site** built with Next.js.
Every guide opens with a TL;DR, explains jargon in plain English, and links
deeper when you want the details.

> Unofficial fan project — not affiliated with or endorsed by KingsIsle
> Entertainment. Wizard101 and related marks are trademarks of KingsIsle
> Entertainment, Inc.

## What's inside

- **40 deep-dive guides** across 9 categories: Getting Started, Leveling &
  Worlds, Gear, Pets, Gardening, Gold & Farming, Combat & Strategy, PvP, and
  Other Systems (fishing, crafting, monstrology, keys, events, raids,
  housing…) — including endgame systems like Shadow Magic & Archmastery and
  veteran-knowledge guides (The Skip List, Niche Knowledge, Second Wizard)
- **Official artwork** (hero, school professors, feature banners) served
  locally from `public/images/`, © KingsIsle Entertainment, credited in the
  footer as non-commercial fan-site use of promotional material
- **Custom SVG icon sets** for the seven schools and nine guide categories
- **9 interactive tools** (`/tools`): a build planner on a **real endgame
  gear database** (6,481 items, levels 150–180, sourced from WizBuilder),
  damage calculator, hatch odds (Wow Factor, on a 1,391-pet dataset), talent
  reveal odds, pet XP & snack planner, deck draw odds, training point
  planner, level advisor, and gear comparator — all client-side, all on
  verified numbers
- **7 school deep-dives** — playstyle, strengths/weaknesses, signature
  spells, stat priorities, secondary picks, leveling tips
- **Worlds timeline + 22 per-world playbooks** — the fast route, every Zeke collectible and its zones (verified), extra training-point quests, what to grab, what to skip, and an advanced lane for each world
- **60+ term glossary** and a **FAQ**, both searchable
- **Site-wide search** (⌘K / `/`) across guides, tools, schools, worlds,
  glossary and FAQ
- Guide niceties: reading time, difficulty badges, tables of contents,
  callouts (tips/warnings/lore), related-guide links, build-time validation
  of internal links

## Stack

- [Next.js 15](https://nextjs.org) (App Router, fully static pages)
- React 19, TypeScript (strict)
- Tailwind CSS v4

No database, no CMS: all content lives as typed TypeScript data in
`src/content/`, rendered through a small block system (paragraphs, lists,
steps, callouts, tables) with markdown-lite inline formatting.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also validates content links)
npm run typecheck  # tsc --noEmit
```

Optionally set `NEXT_PUBLIC_SITE_URL` for correct absolute URLs in the
sitemap/robots/OG metadata (on Vercel this is auto-detected — see below).

## Deploying to Vercel

The app is a zero-config Vercel deploy:

1. Push this repo to GitHub (already done if you're reading this there).
2. On [vercel.com](https://vercel.com), **Add New → Project** and import the
   repository. Vercel auto-detects Next.js — keep the defaults
   (`npm install`, `next build`) and hit **Deploy**.
3. Done. Every push to `main` redeploys production; PRs get preview URLs.

Environment variables: none required. The canonical URL for the sitemap,
robots.txt, and Open Graph tags is resolved automatically from Vercel's
`VERCEL_PROJECT_PRODUCTION_URL`. If you attach a custom domain, set
`NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in the Vercel project settings
so canonical URLs point at it.

The site is fully static (91 prerendered pages, no database, no API routes),
so it also runs anywhere else Next.js does (`npm run build && npm start`,
Docker, etc.).

### Troubleshooting: `No Output Directory named "public" found`

This error means the deployment was built with the **"Other"** framework
preset instead of Next.js (Vercel then expects a static `public/` output
folder). Three-part fix, any one of which is sufficient:

1. **Deploy the latest commit.** `vercel.json` in this repo pins
   `"framework": "nextjs"`, which overrides the project's preset — but only
   for commits that contain it. Clicking **Redeploy** on an old failed
   deployment rebuilds that *old commit*; push a new commit or use
   "Create Deployment" from the latest `main` instead.
2. In **Project Settings → Build and Deployment → Framework Preset**,
   select **Next.js**.
3. In **Project Settings → Git → Production Branch**, set **`main`** so
   production always tracks the up-to-date branch.

## Editing & adding content

| What | Where |
| --- | --- |
| Guides | `src/content/guides/*.ts` (grouped by category) |
| Categories | `src/content/categories.ts` |
| Schools | `src/content/schools.ts` |
| Worlds | `src/content/worlds.ts` |
| Glossary | `src/content/glossary.ts` |
| FAQ | `src/content/faq.ts` |

To add a guide: append a `Guide` object to the matching category file. The
shape (see `src/lib/types.ts`):

```ts
{
  slug: "my-new-guide",
  title: "…",
  category: "gear",
  difficulty: "beginner",
  blurb: "…",             // card + SEO description
  tags: ["…"],
  updated: "July 2026",
  tldr: ["…"],            // the summary box at the top
  sections: [
    { title: "…", blocks: [
      "A paragraph with **bold**, `code`, and [links](/guides/other-guide).",
      { list: ["…"] },
      { steps: ["…"] },
      { callout: { kind: "tip", body: ["…"] } },
      { table: { headers: ["…"], rows: [["…"]] } },
    ]},
  ],
  related: ["other-guide-slug"],
}
```

Routing, search indexing, the guides library page, reading time, and the
sitemap all pick it up automatically. Broken internal `/guides/...` links,
duplicate slugs, and bad `related` references **fail the build** on purpose
(see `src/lib/guides.ts`).

## Data pipelines

Two tools run on harvested datasets that can be refreshed when the game
updates:

| Dataset | Used by | Refresh |
| --- | --- | --- |
| `public/data/gear.json` — 6,481 endgame items (Lv 150–180), 8 equipment slots, compact schema | Build Planner (fetched client-side on that route only) | `node scripts/refresh-gear-data.mjs` |
| `src/data/pets.json` — 1,391 pets with Wow Factors + exclusive/unhatchable flags | Hatch Odds Calculator (bundled) | re-derive from the community wow-factor dataset (see script header comments in the repo history) |

`scripts/refresh-gear-data.mjs` harvests WizBuilder's public item API
politely (100 items/page, 250ms delay), prints a dataset analysis (types,
schools, level range, stat keys), and writes the compacted JSON. If the
analysis shows new level tiers or stat keys, mirror them in
`src/components/tools/BuildPlanner.tsx` (`MIN_LEVEL`/`MAX_LEVEL`,
`STAT_META`). Data is credited to [WizBuilder](https://www.wizbuilder.net)
in the tool's UI — keep that credit.

## Content accuracy

Wizard101 changes with every update. Content was verified against community
sources (Final Bastion, official news, established fan guides) as of the
**Darkmoor world era (Arc 5, level cap 180, mid-2026 snapshot)**. The guides
still deliberately teach durable systems and strategy first, hedge
patch-sensitive numbers (~values), and point readers to in-game screens or
live community resources for the fastest-moving specifics (drop tables, PvP
rules, current best-in-slot).
