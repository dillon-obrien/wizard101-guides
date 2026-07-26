import type { Difficulty } from "@/lib/types";

const DIFFICULTY: Record<Difficulty, { label: string; cls: string }> = {
  beginner: {
    label: "Beginner friendly",
    cls: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  intermediate: {
    label: "Intermediate",
    cls: "bg-sky-50 text-sky-700 ring-sky-200",
  },
  advanced: {
    label: "Advanced",
    cls: "bg-violet-50 text-violet-700 ring-violet-200",
  },
};

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const d = DIFFICULTY[level];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${d.cls}`}
    >
      {d.label}
    </span>
  );
}

export function MetaBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
      {children}
    </span>
  );
}
