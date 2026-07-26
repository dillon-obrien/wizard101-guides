import type { MetadataRoute } from "next";
import { playbooks } from "@/content/playbooks";
import { schools } from "@/content/schools";
import { allGuides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/guides",
    "/schools",
    "/worlds",
    "/tools",
    "/tools/damage-calculator",
    "/tools/training-points",
    "/tools/level-advisor",
    "/glossary",
    "/faq",
  ].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const guideRoutes = allGuides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const schoolRoutes = schools.map((s) => ({
    url: `${SITE_URL}/schools/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const playbookRoutes = playbooks.map((p) => ({
    url: `${SITE_URL}/worlds/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...guideRoutes, ...schoolRoutes, ...playbookRoutes];
}
