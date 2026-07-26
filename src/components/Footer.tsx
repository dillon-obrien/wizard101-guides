import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-slate-900">
            The Spiral <span className="text-indigo-700">Scholar</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
            The friendliest deep-dive guide to Wizard101 — everything explained
            like you're new, detailed like you're not.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          <Link className="text-slate-600 hover:text-indigo-700" href="/guides">All guides</Link>
          <Link className="text-slate-600 hover:text-indigo-700" href="/schools">The 7 schools</Link>
          <Link className="text-slate-600 hover:text-indigo-700" href="/worlds">World order</Link>
          <Link className="text-slate-600 hover:text-indigo-700" href="/tools">Tools</Link>
          <Link className="text-slate-600 hover:text-indigo-700" href="/glossary">Glossary</Link>
          <Link className="text-slate-600 hover:text-indigo-700" href="/faq">FAQ</Link>
          <Link className="text-slate-600 hover:text-indigo-700" href="/guides/complete-beginners-guide">Start here</Link>
        </nav>
        <div className="text-xs leading-relaxed text-slate-400">
          <p>
            The Spiral Scholar is an unofficial fan resource, not affiliated
            with or endorsed by KingsIsle Entertainment. Wizard101 and all
            related marks are trademarks of KingsIsle Entertainment, Inc.
          </p>
          <p className="mt-2">
            Game details change with updates — treat exact numbers as
            approximate and double-check current values in game.
          </p>
          <p className="mt-2">
            Artwork and screenshots © KingsIsle Entertainment, used here as
            official promotional material for a non-commercial fan resource.
          </p>
        </div>
      </div>
    </footer>
  );
}
