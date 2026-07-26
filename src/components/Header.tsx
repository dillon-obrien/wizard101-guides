"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SearchDoc } from "@/lib/search";
import { SearchDialog } from "./SearchDialog";

const NAV = [
  { href: "/guides", label: "Guides" },
  { href: "/schools", label: "Schools" },
  { href: "/worlds", label: "Worlds" },
  { href: "/glossary", label: "Glossary" },
  { href: "/faq", label: "FAQ" },
];

export function Header({ searchDocs }: { searchDocs: SearchDoc[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-night-700/80 bg-night-900/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-arcane-600 to-night-700 text-lg ring-1 ring-arcane-500/40"
          >
            🧙‍♂️
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            The Spiral <span className="text-spark-400">Scholar</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-night-700 text-spark-300"
                    : "text-night-200 hover:bg-night-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SearchDialog docs={searchDocs} />
          <button
            type="button"
            className="rounded-lg border border-night-600 p-2 text-night-200 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="m5 5 10 10M15 5 5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-night-700 bg-night-900 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-night-100 hover:bg-night-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
