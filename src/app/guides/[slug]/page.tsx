import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DifficultyBadge, MetaBadge } from "@/components/Badges";
import { BlockRenderer } from "@/components/Blocks";
import { GuideCard } from "@/components/GuideCard";
import { Inline } from "@/components/Inline";
import { ProgressBar } from "@/components/ProgressBar";
import { ScrollSpyToc } from "@/components/ScrollSpyToc";
import { categoryById } from "@/content/categories";
import { allGuides, getGuide, relatedGuides } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { readingMinutes, tocFor } from "@/lib/text";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return allGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.blurb,
    openGraph: { title: guide.title, description: guide.blurb },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  const cat = categoryById.get(guide.category);
  const toc = tocFor(guide.sections);
  const related = relatedGuides(guide);
  const index = allGuides.findIndex((g) => g.slug === guide.slug);
  const prev = index > 0 ? allGuides[index - 1] : null;
  const next = index < allGuides.length - 1 ? allGuides[index + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.blurb,
    url: `${SITE_URL}/guides/${guide.slug}`,
    articleSection: cat?.name,
    keywords: guide.tags.join(", "),
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <ProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-night-300">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-spark-300">Home</Link>
          </li>
          <li aria-hidden>›</li>
          <li>
            <Link href="/guides" className="hover:text-spark-300">Guides</Link>
          </li>
          <li aria-hidden>›</li>
          <li>
            <Link href={`/guides?c=${guide.category}`} className="hover:text-spark-300">
              {cat?.emoji} {cat?.name}
            </Link>
          </li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-night-200">{guide.blurb}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <DifficultyBadge level={guide.difficulty} />
          <MetaBadge>⏱️ {readingMinutes(guide)} min read</MetaBadge>
          <MetaBadge>🗓️ Updated {guide.updated}</MetaBadge>
        </div>
      </header>

      <div className="mt-10 gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="max-w-3xl">
          {/* TL;DR */}
          <section
            aria-label="Too long; didn't read summary"
            className="rounded-2xl border border-spark-500/30 bg-spark-500/[0.06] p-5 sm:p-6"
          >
            <p className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-spark-300">
              ⚡ TL;DR — the short version
            </p>
            <ul className="space-y-2.5">
              {guide.tldr.map((line, i) => (
                <li key={i} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-night-100">
                  <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-spark-400" />
                  <span><Inline text={line} /></span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mobile TOC */}
          <details className="mt-6 rounded-xl border border-night-700 bg-night-850 p-4 lg:hidden">
            <summary className="cursor-pointer font-semibold text-night-100">
              📑 On this page
            </summary>
            <ol className="mt-3 space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-night-300 hover:text-spark-300">
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          {/* Body */}
          <div className="guide-body mt-4 space-y-12">
            {guide.sections.map((section, i) => (
              <section key={toc[i].id} aria-labelledby={toc[i].id}>
                <h2
                  id={toc[i].id}
                  className="mb-5 border-b border-night-700 pb-3 font-display text-2xl font-bold text-white"
                >
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.blocks.map((block, j) => (
                    <BlockRenderer key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Jargon helper */}
          <aside className="mt-12 rounded-xl border border-night-700 bg-night-850 p-5 text-sm text-night-300">
            Hit a word you don't know? The{" "}
            <Link href="/glossary" className="font-medium text-spark-400 hover:text-spark-300">
              glossary
            </Link>{" "}
            defines every Spiral term in plain English — or press{" "}
            <kbd className="rounded border border-night-600 bg-night-900 px-1.5 py-0.5 text-[11px] font-semibold text-night-300">⌘K</kbd>{" "}
            and search it.
          </aside>

          {/* Prev / next */}
          <nav
            aria-label="Previous and next guide"
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {prev ? (
              <Link href={`/guides/${prev.slug}`} className="card p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-night-400">
                  ← Previous
                </span>
                <span className="mt-1 block font-display font-bold leading-snug text-white">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span aria-hidden />
            )}
            {next && (
              <Link href={`/guides/${next.slug}`} className="card p-4 text-right">
                <span className="text-xs font-semibold uppercase tracking-wide text-night-400">
                  Next →
                </span>
                <span className="mt-1 block font-display font-bold leading-snug text-white">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-14" aria-label="Related guides">
              <h2 className="font-display text-2xl font-bold text-white">Keep reading</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((g) => (
                  <GuideCard key={g.slug} guide={g} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Desktop TOC */}
        <aside className="hidden lg:block">
          <ScrollSpyToc items={toc} />
        </aside>
      </div>
    </article>
  );
}
