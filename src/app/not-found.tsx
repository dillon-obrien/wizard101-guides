import Link from "next/link";

export default function NotFound() {
  return (
    <div className="starfield mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p aria-hidden className="text-6xl">🌀</p>
      <h1 className="mt-6 font-display text-4xl font-bold text-white">
        You fizzled.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-night-300">
        This page doesn't exist in any realm we can find — the spell cast
        fine, the target just isn't there.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-spark-500 px-6 py-3 font-semibold text-night-950 transition hover:bg-spark-400"
        >
          Teleport home
        </Link>
        <Link
          href="/guides"
          className="rounded-full border border-night-500 bg-night-800/80 px-6 py-3 font-semibold text-night-100 transition hover:border-night-400"
        >
          Browse the guides
        </Link>
      </div>
      <p className="mt-10 text-sm text-night-400">
        (You keep your pips. Try again.)
      </p>
    </div>
  );
}
