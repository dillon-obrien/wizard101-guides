"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/text";

export function ScrollSpyToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the topmost heading currently intersecting the upper band.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
        On this page
      </p>
      <ol className="space-y-0.5 text-sm">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block border-l-2 py-1.5 pl-3 pr-2 leading-snug transition ${
                  isActive
                    ? "border-indigo-600 font-medium text-indigo-700"
                    : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-800"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
      <a
        href="#content"
        className="mt-4 block pl-3 text-xs font-medium text-slate-400 hover:text-indigo-700"
      >
        ↑ Back to top
      </a>
    </nav>
  );
}
