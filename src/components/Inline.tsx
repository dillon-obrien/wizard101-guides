import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN =
  /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

/**
 * Renders markdown-lite inline syntax: `code`, **bold**, *italic*,
 * [label](href). Internal links (starting with "/") use next/link;
 * external links open in a new tab.
 */
export function Inline({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const cls =
            "font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-900 hover:decoration-indigo-500";
          if (href.startsWith("/") || href.startsWith("#")) {
            return (
              <Link key={i} href={href} className={cls}>
                {label}
              </Link>
            );
          }
          return (
            <a key={i} href={href} className={cls} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
