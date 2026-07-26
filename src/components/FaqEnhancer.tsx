"use client";

import { useCallback, useEffect } from "react";

/**
 * Progressive enhancement for the FAQ page:
 * - opens the <details> targeted by the URL hash (deep links from search),
 * - provides expand-all / collapse-all controls.
 */
export function FaqEnhancer() {
  useEffect(() => {
    function openFromHash() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        el.scrollIntoView({ block: "start" });
      }
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const setAll = useCallback((open: boolean) => {
    document
      .querySelectorAll<HTMLDetailsElement>("details.faq-item")
      .forEach((d) => {
        d.open = open;
      });
  }, []);

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => setAll(true)}
        className="rounded-full border border-night-600 bg-night-850 px-3.5 py-1.5 text-sm font-medium text-night-200 transition hover:border-night-500 hover:text-white"
      >
        Expand all
      </button>
      <button
        type="button"
        onClick={() => setAll(false)}
        className="rounded-full border border-night-600 bg-night-850 px-3.5 py-1.5 text-sm font-medium text-night-200 transition hover:border-night-500 hover:text-white"
      >
        Collapse all
      </button>
    </div>
  );
}
