import type { MetadataRoute } from "next";

const BASE_URL = "https://gopinkaro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  return [
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/saas-seo-agency`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/manychat-alternative`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wati-alternative`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/zoko-alternative`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/interakt-alternative`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/intercom-alternative`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/hubspot-alternative`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ahrefs-alternative`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/semrush-alternative`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
