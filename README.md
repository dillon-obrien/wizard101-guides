# The Spiral Scholar 🧙‍♂️

An in-depth, beginner-friendly **Wizard101 guide site** built with Next.js.
Every guide opens with a TL;DR, explains jargon in plain English, and links
deeper when you want the details.

> Unofficial fan project — not affiliated with or endorsed by KingsIsle
> Entertainment. Wizard101 and related marks are trademarks of KingsIsle
> Entertainment, Inc.

## What's inside

- **35 deep-dive guides** across 9 categories: Getting Started, Leveling &
  Worlds, Gear, Pets, Gardening, Gold & Farming, Combat & Strategy, PvP, and
  Other Systems (fishing, crafting, monstrology, keys, events, raids,
  housing…)
- **7 school deep-dives** — playstyle, strengths/weaknesses, signature
  spells, stat priorities, secondary picks, leveling tips
- **Worlds timeline** — every world by arc with level ranges and highlights
- **60+ term glossary** and a **FAQ**, both searchable
- **Site-wide search** (⌘K / `/`) across guides, schools, worlds, glossary
  and FAQ
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
sitemap/robots/OG metadata.

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

## Content accuracy

Wizard101 changes with every update. Content was verified against community
sources (Final Bastion, official news, established fan guides) as of the
**Darkmoor world era (Arc 5, level cap 180, mid-2026 snapshot)**. The guides
still deliberately teach durable systems and strategy first, hedge
patch-sensitive numbers (~values), and point readers to in-game screens or
live community resources for the fastest-moving specifics (drop tables, PvP
rules, current best-in-slot).
