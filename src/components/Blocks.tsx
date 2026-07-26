import type { Block, CalloutBlock, TableBlock } from "@/lib/types";
import { Inline } from "./Inline";

const CALLOUT_STYLES: Record<
  CalloutBlock["kind"],
  { icon: string; label: string; frame: string; chip: string }
> = {
  tip: {
    icon: "💡",
    label: "Tip",
    frame: "border-emerald-500/30 bg-emerald-500/[0.07]",
    chip: "text-emerald-300",
  },
  info: {
    icon: "📘",
    label: "Good to know",
    frame: "border-sky-500/30 bg-sky-500/[0.07]",
    chip: "text-sky-300",
  },
  warn: {
    icon: "⚠️",
    label: "Watch out",
    frame: "border-amber-500/30 bg-amber-500/[0.07]",
    chip: "text-amber-300",
  },
  danger: {
    icon: "⛔",
    label: "Don't do this",
    frame: "border-red-500/30 bg-red-500/[0.07]",
    chip: "text-red-300",
  },
  lore: {
    icon: "✨",
    label: "Spiral lore",
    frame: "border-arcane-500/30 bg-arcane-500/[0.07]",
    chip: "text-arcane-300",
  },
};

export function Callout({ callout }: { callout: CalloutBlock }) {
  const s = CALLOUT_STYLES[callout.kind];
  return (
    <aside className={`rounded-xl border p-4 sm:p-5 ${s.frame}`}>
      <p className={`mb-1.5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${s.chip}`}>
        <span aria-hidden>{s.icon}</span>
        {callout.title ?? s.label}
      </p>
      <div className="space-y-2 text-[0.95rem] leading-relaxed text-night-100">
        {callout.body.map((p, i) => (
          <p key={i}>
            <Inline text={p} />
          </p>
        ))}
      </div>
    </aside>
  );
}

export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-spark-500/15 font-display text-sm font-bold text-spark-400 ring-1 ring-spark-500/40">
            {i + 1}
          </span>
          <span className="leading-relaxed">
            <Inline text={step} />
          </span>
        </li>
      ))}
    </ol>
  );
}

export function DataTable({ table }: { table: TableBlock }) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-xl border border-night-700">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-night-800">
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className="border-b border-night-700 px-4 py-3 font-semibold text-spark-300"
                >
                  <Inline text={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="odd:bg-night-850 even:bg-night-800/50">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border-b border-night-700/60 px-4 py-2.5 align-top leading-relaxed"
                  >
                    <Inline text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && (
        <figcaption className="mt-2 text-xs text-night-300">
          <Inline text={table.caption} />
        </figcaption>
      )}
    </figure>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  if (typeof block === "string") {
    return (
      <p className="leading-relaxed text-night-100">
        <Inline text={block} />
      </p>
    );
  }
  if ("sub" in block) {
    return (
      <h3 className="pt-2 font-display text-xl font-bold text-white">
        <Inline text={block.sub} />
      </h3>
    );
  }
  if ("list" in block) {
    return (
      <ul className="space-y-2">
        {block.list.map((item, i) => (
          <li key={i} className="flex gap-2.5 leading-relaxed">
            <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-spark-500" />
            <span>
              <Inline text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }
  if ("steps" in block) return <Steps steps={block.steps} />;
  if ("callout" in block) return <Callout callout={block.callout} />;
  if ("table" in block) return <DataTable table={block.table} />;
  return null;
}
