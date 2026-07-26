import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Checklist } from "@/components/Checklist";
import { Inline } from "@/components/Inline";
import { playbookBySlug, playbooks } from "@/content/playbooks";
import { worlds } from "@/content/worlds";
import { slugify } from "@/lib/text";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return playbooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const pb = playbookBySlug.get((await params).slug);
  if (!pb) return {};
  return {
    title: `${pb.name} Playbook — route, Zeke, and what to skip`,
    description: `${pb.name} in Wizard101, straight to the point: the fast route, every ${pb.zeke?.collectible ?? "Zeke"} location zone, what to grab, what to skip, and the advanced lane.`,
  };
}

function Panel({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "indigo" | "emerald" | "amber" | "slate" | "violet";
  children: React.ReactNode;
}) {
  const tones = {
    indigo: "border-indigo-500 text-indigo-700",
    emerald: "border-emerald-500 text-emerald-700",
    amber: "border-amber-500 text-amber-700",
    slate: "border-slate-400 text-slate-500",
    violet: "border-violet-500 text-violet-700",
  } as const;
  const [border, text] = tones[tone].split(" ");
  return (
    <section className={`rounded-r-xl border-l-4 ${border} bg-white p-5 shadow-sm ring-1 ring-slate-100`}>
      <h2 className={`mb-3 text-xs font-bold uppercase tracking-wider ${text}`}>{label}</h2>
      {children}
    </section>
  );
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const pb = playbookBySlug.get((await params).slug);
  if (!pb) notFound();

  const world = worlds.find((w) => slugify(w.name) === pb.slug);
  const index = playbooks.findIndex((p) => p.slug === pb.slug);
  const prev = index > 0 ? playbooks[index - 1] : null;
  const next = index < playbooks.length - 1 ? playbooks[index + 1] : null;

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-indigo-700">Home</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/worlds" className="hover:text-indigo-700">Worlds</Link></li>
          <li aria-hidden>›</li>
          <li className="text-slate-700">{pb.name}</li>
        </ol>
      </nav>

      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-4xl font-bold text-slate-900">{pb.name}</h1>
          {world && (
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
              Levels {world.levels}
            </span>
          )}
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500">
            {world?.arc === "side" ? "Side world" : `Arc ${world?.arc}`}
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">{pb.pitch}</p>
        <p className="mt-2 text-xs text-slate-400">
          The playbook format: route, Zeke, grabs, skips, advanced lane. No lore, no filler.
        </p>
      </header>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Panel label="The fast route" tone="indigo">
          <ol className="space-y-2.5">
            {pb.route.map((step, i) => (
              <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700 ring-1 ring-indigo-200">
                  {i + 1}
                </span>
                <span><Inline text={step} /></span>
              </li>
            ))}
          </ol>
        </Panel>

        {pb.zeke && (
          <Panel
            label={`Zeke: the ${pb.zeke.collectible} (${pb.zeke.count} ${pb.zeke.count === 1 ? "quest" : "items"})`}
            tone="amber"
          >
            <p className="mb-3 text-sm text-slate-500">
              Grab the quest from Zeke in the hub on arrival — one full training
              point. Tap zones as you clear them (saves on this device):
            </p>
            <Checklist
              storageKey={`spiral-scholar:pb:${pb.slug}:zeke`}
              items={pb.zeke.zones}
              variant="chips"
              accent="amber"
            />
            {pb.zeke.note && (
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                <Inline text={pb.zeke.note} />
              </p>
            )}
          </Panel>
        )}

        {pb.extraTp && pb.extraTp.length > 0 && (
          <Panel label="More training points here" tone="amber">
            <ul className="space-y-2">
              {pb.extraTp.map((t, i) => (
                <li key={i} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-slate-700">
                  <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span><Inline text={t} /></span>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        <Panel label="Grab before you leave" tone="emerald">
          <Checklist
            storageKey={`spiral-scholar:pb:${pb.slug}:grab`}
            items={pb.grab}
            variant="list"
            accent="emerald"
          />
        </Panel>

        <Panel label="Skip without guilt" tone="slate">
          <ul className="space-y-2">
            {pb.skip.map((s, i) => (
              <li key={i} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-slate-600">
                <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span><Inline text={s} /></span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel label="The advanced lane" tone="violet">
          <ul className="space-y-2">
            {pb.advanced.map((a, i) => (
              <li key={i} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-slate-700">
                <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span><Inline text={a} /></span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-slate-400">
        Zeke collectibles and zone lists verified against community walkthrough
        sources (mid-2026). Zone order reflects the practical story path;
        treat exact sequencing in later worlds as approximate. Pixel-perfect
        item spots: any current Zeke video, two minutes, done.
      </p>

      <nav aria-label="Previous and next world" className="mt-10 grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link href={`/worlds/${prev.slug}`} className="card p-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">← Previous world</span>
            <span className="mt-1 block font-display font-bold text-slate-900">{prev.name}</span>
          </Link>
        ) : (
          <span aria-hidden />
        )}
        {next && (
          <Link href={`/worlds/${next.slug}`} className="card p-4 text-right">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Next world →</span>
            <span className="mt-1 block font-display font-bold text-slate-900">{next.name}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
