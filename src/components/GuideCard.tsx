import { toMeta } from "@/lib/meta";
import type { Guide } from "@/lib/types";
import { GuideCardView } from "./GuideCardView";

export function GuideCard({ guide }: { guide: Guide }) {
  const m = toMeta(guide);
  return (
    <GuideCardView
      href={`/guides/${m.slug}`}
      title={m.title}
      blurb={m.blurb}
      catName={m.catName}
      minutes={m.minutes}
      difficulty={m.difficulty}
    />
  );
}
