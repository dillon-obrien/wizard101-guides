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

function HatMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
    >
      <path d="M12 3 17.5 16h-11L12 3Z" fill="#4f46e5" />
      <path
        d="M4 18c5.2-1.6 10.8-1.6 16 0v1.4c-5.2-1.6-10.8-1.6-16 0V18Z"
        fill="#d97706"
      />
    </svg>
  );
}

export function Header({ searchDocs }: { searchDocs: SearchDoc[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <HatMark />
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">
            The Spiral <span className="text-indigo-700">Scholar</span>
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
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/guides/complete-beginners-guide"
            className="hidden shrink-0 rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-indigo-700 lg:inline-flex"
          >
            Start here
          </Link>
          <SearchDialog docs={searchDocs} />
          <button
            type="button"
            className="rounded-lg border border-slate-300 p-2 text-slate-600 md:hidden"
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
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/guides/complete-beginners-guide"
            className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-base font-semibold text-white"
          >
            New player? Start here
          </Link>
        </nav>
      )}
    </header>
  );
}
