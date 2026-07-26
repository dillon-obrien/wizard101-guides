export const SITE_NAME = "The Spiral Scholar";
export const SITE_TAGLINE =
  "The friendliest deep-dive Wizard101 guide in the Spiral";

/**
 * Canonical site URL used for the sitemap, robots.txt, and Open Graph
 * metadata. Resolution order:
 * 1. NEXT_PUBLIC_SITE_URL — explicit override (custom domains)
 * 2. Vercel's production/deployment URL — set automatically on Vercel
 * 3. localhost — local development
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
