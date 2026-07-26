import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-700">
        404 — page not found
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-slate-900">
        You fizzled.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
        This page doesn't exist in any realm we can find — the spell cast
        fine, the target just isn't there.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Teleport home
        </Link>
        <Link
          href="/guides"
          className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400"
        >
          Browse the guides
        </Link>
      </div>
      <p className="mt-10 text-sm text-slate-400">
        (You keep your pips. Try again.)
      </p>
    </div>
  );
}
