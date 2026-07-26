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
              className="rounded bg-night-700/60 px-1.5 py-0.5 font-mono text-[0.85em] text-spark-300"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-white">
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
            "font-medium text-spark-400 underline decoration-spark-500/40 underline-offset-2 hover:text-spark-300 hover:decoration-spark-400";
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
