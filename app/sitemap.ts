import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/pages-data";

const BASE_URL = "https://gopinkaro.com";
const LOCALES = ["en", "es", "pt", "hi", "de", "fr", "ja", "zh", "ar", "ru"];
const DEFAULT_LOCALE = "en";

function localizedUrl(path: string, locale: string): string {
  const base = locale === DEFAULT_LOCALE ? BASE_URL : `${BASE_URL}/${locale}`;
  return path === "/" ? base : `${base}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  const homepageEntries = LOCALES.map((locale) => ({
    url: localizedUrl("/", locale),
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: locale === DEFAULT_LOCALE ? 1.0 : 0.9,
  }));

  // Static high-priority pages
  const staticPages = [
    { path: "/saas-seo-agency", priority: 0.95 },
    { path: "/manychat-alternative", priority: 0.9 },
    { path: "/wati-alternative", priority: 0.88 },
    { path: "/zoko-alternative", priority: 0.85 },
    { path: "/interakt-alternative", priority: 0.85 },
    { path: "/intercom-alternative", priority: 0.87 },
    { path: "/hubspot-alternative", priority: 0.87 },
    { path: "/ahrefs-alternative", priority: 0.87 },
    { path: "/semrush-alternative", priority: 0.87 },
  ].map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority,
  }));

  // Dynamic pages from pages-data.ts
  const dynamicPages = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [...homepageEntries, ...staticPages, ...dynamicPages];
}
