import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-night-700/80 bg-night-950/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-white">
            The Spiral <span className="text-spark-400">Scholar</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-night-300">
            The friendliest deep-dive guide to Wizard101 — everything explained
            like you're new, detailed like you're not.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          <Link className="text-night-200 hover:text-spark-300" href="/guides">All guides</Link>
          <Link className="text-night-200 hover:text-spark-300" href="/schools">The 7 schools</Link>
          <Link className="text-night-200 hover:text-spark-300" href="/worlds">World order</Link>
          <Link className="text-night-200 hover:text-spark-300" href="/glossary">Glossary</Link>
          <Link className="text-night-200 hover:text-spark-300" href="/faq">FAQ</Link>
          <Link className="text-night-200 hover:text-spark-300" href="/guides/complete-beginners-guide">Start here</Link>
        </nav>
        <div className="text-xs leading-relaxed text-night-400">
          <p>
            The Spiral Scholar is an unofficial fan resource, not affiliated
            with or endorsed by KingsIsle Entertainment. Wizard101 and all
            related marks are trademarks of KingsIsle Entertainment, Inc.
          </p>
          <p className="mt-2">
            Game details change with updates — treat exact numbers as
            approximate and double-check current values in game.
          </p>
        </div>
      </div>
    </footer>
  );
}
