import type { Block, CalloutBlock, TableBlock } from "@/lib/types";
import { Inline } from "./Inline";

const CALLOUT_STYLES: Record<
  CalloutBlock["kind"],
  { label: string; frame: string; chip: string }
> = {
  tip: {
    label: "Tip",
    frame: "border-emerald-500 bg-emerald-50/70",
    chip: "text-emerald-700",
  },
  info: {
    label: "Good to know",
    frame: "border-sky-500 bg-sky-50/70",
    chip: "text-sky-700",
  },
  warn: {
    label: "Watch out",
    frame: "border-amber-500 bg-amber-50/70",
    chip: "text-amber-700",
  },
  danger: {
    label: "Don't do this",
    frame: "border-red-500 bg-red-50/70",
    chip: "text-red-700",
  },
  lore: {
    label: "Spiral lore",
    frame: "border-violet-500 bg-violet-50/70",
    chip: "text-violet-700",
  },
};

export function Callout({ callout }: { callout: CalloutBlock }) {
  const s = CALLOUT_STYLES[callout.kind];
  return (
    <aside className={`rounded-r-xl border-l-4 p-4 sm:p-5 ${s.frame}`}>
      <p className={`mb-1.5 text-xs font-bold uppercase tracking-wider ${s.chip}`}>
        {callout.title ?? s.label}
      </p>
      <div className="space-y-2 text-[0.95rem] leading-relaxed text-slate-700">
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
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700 ring-1 ring-indigo-200">
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
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50">
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900"
                >
                  <Inline text={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="even:bg-slate-50/60">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border-b border-slate-100 px-4 py-2.5 align-top leading-relaxed text-slate-700"
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
        <figcaption className="mt-2 text-xs text-slate-500">
          <Inline text={table.caption} />
        </figcaption>
      )}
    </figure>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  if (typeof block === "string") {
    return (
      <p className="leading-relaxed text-slate-700">
        <Inline text={block} />
      </p>
    );
  }
  if ("sub" in block) {
    return (
      <h3 className="pt-2 font-display text-xl font-bold text-slate-900">
        <Inline text={block.sub} />
      </h3>
    );
  }
  if ("list" in block) {
    return (
      <ul className="space-y-2">
        {block.list.map((item, i) => (
          <li key={i} className="flex gap-2.5 leading-relaxed">
            <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
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
