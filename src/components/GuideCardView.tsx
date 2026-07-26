import Link from "next/link";
import type { Difficulty } from "@/lib/types";
import { DifficultyBadge } from "./Badges";

export interface GuideCardProps {
  href: string;
  title: string;
  blurb: string;
  catEmoji: string;
  catName: string;
  minutes: number;
  difficulty: Difficulty;
}

export function GuideCardView(props: GuideCardProps) {
  return (
    <Link href={props.href} className="card flex flex-col gap-3 p-5">
      <div className="flex items-center gap-2 text-xs font-medium text-night-300">
        <span aria-hidden>{props.catEmoji}</span>
        <span>{props.catName}</span>
        <span aria-hidden>·</span>
        <span>{props.minutes} min read</span>
      </div>
      <h3 className="font-display text-lg font-bold leading-snug text-white">
        {props.title}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-night-200">
        {props.blurb}
      </p>
      <div className="mt-auto pt-1">
        <DifficultyBadge level={props.difficulty} />
      </div>
    </Link>
  );
}
