import type { Difficulty } from "@/lib/types";

const DIFFICULTY: Record<Difficulty, { label: string; cls: string }> = {
  beginner: {
    label: "Beginner friendly",
    cls: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  },
  intermediate: {
    label: "Intermediate",
    cls: "bg-sky-500/15 text-sky-300 ring-sky-500/30",
  },
  advanced: {
    label: "Advanced",
    cls: "bg-arcane-500/15 text-arcane-300 ring-arcane-500/30",
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
    <span className="inline-flex items-center gap-1 rounded-full bg-night-800 px-2.5 py-0.5 text-xs font-medium text-night-200 ring-1 ring-night-600">
      {children}
    </span>
  );
}
