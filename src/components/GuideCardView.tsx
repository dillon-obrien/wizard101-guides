import Link from "next/link";
import type { Difficulty } from "@/lib/types";
import { DifficultyBadge } from "./Badges";

export interface GuideCardProps {
  href: string;
  title: string;
  blurb: string;
  catName: string;
  minutes: number;
  difficulty: Difficulty;
}

export function GuideCardView(props: GuideCardProps) {
  return (
    <Link href={props.href} className="card flex flex-col gap-3 p-5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
        <span className="text-indigo-600">{props.catName}</span>
        <span aria-hidden>·</span>
        <span>{props.minutes} min read</span>
      </div>
      <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
        {props.title}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
        {props.blurb}
      </p>
      <div className="mt-auto pt-1">
        <DifficultyBadge level={props.difficulty} />
      </div>
    </Link>
  );
}
