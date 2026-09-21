import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AlternativePage from "@/components/AlternativePage";
import { getPageData, getAllSlugs } from "@/lib/pages-data";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const locales = routing.locales as readonly string[];
  const slugs = getAllSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getPageData(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: `https://gopinkaro.com${data.canonicalPath}` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://gopinkaro.com${data.canonicalPath}`,
      siteName: "GoPinKaro",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const data = getPageData(slug);
  if (!data) notFound();
  return <AlternativePage data={data!} />;
}
