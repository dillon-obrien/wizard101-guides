import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buildSearchIndex } from "@/lib/search";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Wizard101 guides that actually explain things`,
    template: `%s • ${SITE_NAME}`,
  },
  description: `${SITE_TAGLINE}: leveling, gear, pets, gardening, gold, strategy and every system — in-depth but stupid easy to understand.`,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const searchDocs = buildSearchIndex();
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-spark-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-night-950"
        >
          Skip to content
        </a>
        <Header searchDocs={searchDocs} />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
