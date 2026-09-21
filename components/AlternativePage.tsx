import Link from "next/link";
import { Check, X, ArrowRight, ChevronRight, Star } from "lucide-react";
import GoPinKaroLogo from "@/components/GoPinKaroLogo";

export interface Tool {
  rank: number;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  price: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  rating: number;
  featured?: boolean;
  featuredUrl?: string;
  featuredNote?: string;
}

export interface PageData {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  h1: string;
  h1Accent: string;
  intro: string;
  updated: string;
  toolsCount: number;
  tools: Tool[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  ctaHeading: string;
  ctaSubject: string;
  category: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200"}`}
        />
      ))}
      <span className="text-xs font-medium ml-1" style={{ color: "var(--text-secondary)" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function AlternativePage({ data }: { data: PageData }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: data.title,
        description: data.description,
        author: { "@type": "Organization", name: "GoPinKaro" },
        publisher: {
          "@type": "Organization",
          name: "GoPinKaro",
          url: "https://gopinkaro.com",
          logo: {
            "@type": "ImageObject",
            url: "https://gopinkaro.com/logo.svg",
            width: 200,
            height: 60,
          },
        },
        image: "https://gopinkaro.com/og-image.png",
        dateModified: new Date().toISOString().split("T")[0],
        mainEntityOfPage: `https://gopinkaro.com${data.canonicalPath}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gopinkaro.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: data.h1,
            item: `https://gopinkaro.com${data.canonicalPath}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div style={{ background: "var(--background)", color: "var(--foreground)" }}>
        {/* Nav */}
        <nav
          className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" aria-label="GoPinKaro home">
              <GoPinKaroLogo size={26} />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/#pricing"
                className="text-sm hidden sm:block"
                style={{ color: "var(--text-secondary)" }}
              >
                Pricing
              </Link>
              <Link
                href={`mailto:hello@gopinkaro.com?subject=Get Listed — ${data.h1}`}
                className="text-sm font-medium px-4 py-1.5 rounded-lg text-white"
                style={{ background: "var(--accent)" }}
              >
                Get Listed
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-sm mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            <Link href="/" className="hover:underline">
              GoPinKaro
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "var(--foreground)" }}>{data.h1}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
              >
                Updated {data.updated}
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {data.toolsCount} tools reviewed
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-3">
              {data.h1}
              <br />
              <span style={{ color: "var(--accent)" }}>{data.h1Accent}</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              {data.intro}
            </p>
          </header>

          {/* Tools */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">
              The {data.toolsCount} Best {data.h1.replace(/^\d+ Best /, "").replace(/ in \d+.*$/, "")}
            </h2>
            <div className="space-y-6">
              {data.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-2xl border overflow-hidden card-3d"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded"
                          style={{ background: "var(--surface-2)", color: "var(--text-secondary)" }}
                        >
                          #{tool.rank}
                        </span>
                        <h3 className="font-display text-xl font-bold">{tool.name}</h3>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                          {tool.badge}
                        </span>
                      </div>
                      <Stars rating={tool.rating} />
                    </div>
                    <p className="font-semibold mb-2">{tool.tagline}</p>
                    <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                      <strong>Best for:</strong> {tool.bestFor}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                      >
                        {tool.price}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-2"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Pros
                        </p>
                        <ul className="space-y-1.5">
                          {tool.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wide mb-2"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Cons
                        </p>
                        <ul className="space-y-1.5">
                          {tool.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm">
                              <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {tool.featured && tool.featuredUrl && (
                    <div
                      className="px-6 py-3 flex items-center justify-between"
                      style={{ background: "var(--accent-dim)", borderTop: "1px solid var(--border)" }}
                    >
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                        ⭐ {tool.featuredNote}
                      </p>
                      <a
                        href={tool.featuredUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold"
                        style={{ color: "var(--accent)" }}
                      >
                        Try free <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-12">
            <h2 className="font-display text-xl font-bold mb-4">Related Comparisons</h2>
            <div className="flex flex-wrap gap-3">
              {data.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-4 py-2 rounded-lg border flex items-center gap-1 tag-3d"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                >
                  {link.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/saas-seo-agency"
                className="text-sm px-4 py-2 rounded-lg border flex items-center gap-1 tag-3d"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              >
                SaaS SEO Agency <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl p-8 text-center"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              For tool makers
            </p>
            <h2 className="font-display text-2xl font-bold mb-3">{data.ctaHeading}</h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              This page ranks for buyers actively switching tools. Get your product featured here.
            </p>
            <a
              href={`mailto:hello@gopinkaro.com?subject=${encodeURIComponent(data.ctaSubject)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
              style={{ background: "var(--accent)" }}
            >
              Get Listed <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--text-secondary)" }}>
              Starts at ₹4,999/month · We rank the page, you capture the traffic
            </p>
          </section>
        </main>

        <footer
          className="mt-16 py-8 text-center text-sm"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}
        >
          <p>
            Built by{" "}
            <Link href="/" className="hover:underline font-medium">
              GoPinKaro
            </Link>{" "}
            · We rank alternative pages and let traffic prove the value ·{" "}
            <a href="mailto:hello@gopinkaro.com" className="hover:underline">
              hello@gopinkaro.com
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
