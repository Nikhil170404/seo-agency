import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

type Locale = (typeof routing.locales)[number];

const LOCALE_META: Record<Locale, { title: string; description: string; lang: string }> = {
  en: {
    title: "GoPinKaro — SaaS SEO Agency India | Alternative Page SEO",
    description: "GoPinKaro is a SaaS SEO agency in India specializing in alternative page SEO. We build and rank '[Competitor] Alternative' pages. Proven: 0 → 315 clicks/day in 90 days for Replykaro.",
    lang: "en",
  },
  es: {
    title: "GoPinKaro — Agencia SEO SaaS India | SEO de Páginas Alternativas",
    description: "GoPinKaro es una agencia SEO SaaS en India especializada en SEO de páginas alternativas. Construimos y posicionamos páginas '[Competidor] Alternativa'. Probado: 0 → 315 clics/día en 90 días.",
    lang: "es",
  },
  pt: {
    title: "GoPinKaro — Agência SEO SaaS Índia | SEO de Páginas Alternativas",
    description: "GoPinKaro é uma agência SEO SaaS na Índia especializada em SEO de páginas alternativas. Criamos e posicionamos páginas '[Concorrente] Alternativa'. Comprovado: 0 → 315 cliques/dia em 90 dias.",
    lang: "pt",
  },
  hi: {
    title: "GoPinKaro — SaaS SEO एजेंसी इंडिया | ऑल्टरनेटिव पेज SEO",
    description: "GoPinKaro भारत की SaaS SEO एजेंसी है जो ऑल्टरनेटिव पेज SEO में विशेषज्ञ है। हम '[प्रतिस्पर्धी] विकल्प' पेज बनाते और रैंक करते हैं। सिद्ध: 90 दिनों में 0 → 315 क्लिक/दिन।",
    lang: "hi",
  },
  de: {
    title: "GoPinKaro — SaaS SEO Agentur Indien | Alternative-Page-SEO",
    description: "GoPinKaro ist eine SaaS-SEO-Agentur in Indien, spezialisiert auf Alternative-Page-SEO. Wir erstellen und ranken '[Konkurrent] Alternative'-Seiten. Bewiesen: 0 → 315 Klicks/Tag in 90 Tagen.",
    lang: "de",
  },
  fr: {
    title: "GoPinKaro — Agence SEO SaaS Inde | SEO de Pages Alternatives",
    description: "GoPinKaro est une agence SEO SaaS en Inde spécialisée dans le SEO de pages alternatives. Nous créons et classons des pages '[Concurrent] Alternative'. Prouvé : 0 → 315 clics/jour en 90 jours.",
    lang: "fr",
  },
  ja: {
    title: "GoPinKaro — インドのSaaS SEOエージェンシー | 代替ページSEO",
    description: "GoPinKaroはインドのSaaS SEOエージェンシーで、代替ページSEOを専門としています。「[競合] 代替」ページを構築・ランク付けします。実証済み：90日で0→315クリック/日。",
    lang: "ja",
  },
  zh: {
    title: "GoPinKaro — 印度SaaS SEO机构 | 替代页面SEO",
    description: "GoPinKaro是印度专注于替代页面SEO的SaaS SEO机构。我们构建并排名「[竞争对手]替代方案」页面。已验证：90天内从0增长到315次点击/天。",
    lang: "zh",
  },
  ar: {
    title: "GoPinKaro — وكالة SEO للـ SaaS في الهند | SEO صفحات البديل",
    description: "GoPinKaro وكالة SEO متخصصة في صفحات البديل. نبني ونصنّف صفحات '[منافس] بديل'. مثبت: 0 → 315 نقرة/يوم في 90 يومًا.",
    lang: "ar",
  },
  ru: {
    title: "GoPinKaro — SaaS SEO Агентство Индия | SEO Альтернативных Страниц",
    description: "GoPinKaro — SaaS SEO агентство в Индии, специализирующееся на SEO альтернативных страниц. Создаём и продвигаем страницы «[Конкурент] Альтернатива». Доказано: 0 → 315 кликов/день за 90 дней.",
    lang: "ru",
  },
};

const BASE_URL = "https://gopinkaro.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = LOCALE_META[locale as Locale] ?? LOCALE_META.en;

  const alternates: Record<string, string> = { "x-default": BASE_URL };
  routing.locales.forEach((loc) => {
    alternates[loc] = loc === routing.defaultLocale ? BASE_URL : `${BASE_URL}/${loc}`;
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: ["SaaS SEO agency", "alternative page SEO", "b2b saas seo", "SaaS SEO agency India"],
    alternates: {
      canonical: locale === routing.defaultLocale ? BASE_URL : `${BASE_URL}/${locale}`,
      languages: alternates,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: locale === routing.defaultLocale ? BASE_URL : `${BASE_URL}/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const meta = LOCALE_META[locale as Locale] ?? LOCALE_META.en;
  const isRtl = locale === "ar";

  return (
    <html lang={meta.lang} dir={isRtl ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
