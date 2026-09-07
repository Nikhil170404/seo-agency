import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight, Zap, TrendingUp, FileText, BarChart2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS SEO Agency India — Alternative Page SEO That Builds Pipeline | GoPinKaro",
  description:
    "GoPinKaro is a B2B SaaS SEO agency in India specializing in alternative pages that rank for '[Competitor] Alternative' keywords. Proven: 0 → 315 clicks/day in 90 days. INR pricing available.",
  keywords: [
    "saas seo agency",
    "b2b saas seo agency",
    "seo agency for saas",
    "seo agency for saas companies",
    "best saas seo agency",
    "saas seo agency india",
    "b2b saas seo agency india",
    "result-driven saas seo agency in india",
    "professional saas seo agency india",
    "saas seo marketing agency india",
  ],
  openGraph: {
    title: "SaaS SEO Agency India — Alternative Pages That Rank & Convert",
    description:
      "We build and rank '[Competitor] Alternative' pages for SaaS companies. 0 → 315 clicks/day in 90 days. Transparent pricing. India-based team.",
    type: "website",
  },
  alternates: {
    canonical: "https://gopinkaro.com/saas-seo-agency",
  },
};

const SERVICES = [
  {
    icon: FileText,
    title: "Alternative Page SEO",
    desc: "We build and rank '[Competitor] Alternative' pages — the highest-converting content in SaaS. Buyers actively switching from a competitor land on your page. No cold outreach needed.",
    highlight: true,
  },
  {
    icon: Globe,
    title: "AI Search & GEO Optimization",
    desc: "We optimize your pages so AI engines (ChatGPT, Perplexity, Google AI Overview) cite your product when buyers ask 'what's the best alternative to X'. GEO is where SaaS discovery is moving.",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Product-Led Content",
    desc: "Feature pages, integration guides, use-case landing pages — content tied directly to your product's capabilities. Bottom-of-funnel content that converts, not just blog posts.",
    highlight: false,
  },
  {
    icon: BarChart2,
    title: "Technical SEO for SaaS",
    desc: "Next.js, React, Vue — we fix crawlability, Core Web Vitals, and indexation issues common on modern SaaS platforms. Schema markup, canonical tags, sitemap structure.",
    highlight: false,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Keyword & competitor audit",
    desc: "We map every '[Competitor] Alternative' keyword your buyers are searching. We filter to KD under 30 — keywords where ranking is predictable, not a 12-month gamble.",
  },
  {
    step: "02",
    title: "Build the pages",
    desc: "We write 2,000+ word comparison pages: honest pros/cons, comparison tables, FAQ sections with schema markup, breadcrumb schema, canonical tags, and internal linking structure.",
  },
  {
    step: "03",
    title: "Rank & track",
    desc: "We submit to GSC, monitor weekly ranking movements, and optimize when needed. Most pages hit top 10 within 30–90 days on KD < 30 keywords.",
  },
  {
    step: "04",
    title: "Traffic converts to pipeline",
    desc: "Buyers already switching from your competitor land on your page. They're in buying mode — not researching, deciding. Average conversion rate: 7.5% vs 1–2% for generic blog content.",
  },
];

const RESULTS = [
  { metric: "0 → 315", label: "clicks/day for Replykaro in 90 days" },
  { metric: "109", label: "keywords ranking on page 1" },
  { metric: "2,976", label: "daily impressions at month 3" },
  { metric: "KD 7–14", label: "average keyword difficulty we target" },
  { metric: "30–60", label: "days to first page rankings" },
  { metric: "7.5%", label: "avg. conversion rate on alternative pages" },
];

const PLANS = [
  {
    name: "Starter",
    inr: "₹8,299",
    usd: "$99",
    period: "/month",
    desc: "For early-stage SaaS entering SEO for the first time.",
    highlight: false,
    features: [
      "3 alternative pages built & published",
      "Keyword research for each page",
      "Full on-page SEO (title, meta, schema, FAQ)",
      "Monthly GSC ranking report",
      "1 revision per page",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    inr: "₹24,999",
    usd: "$299",
    period: "/month",
    desc: "For SaaS companies ready to own their category's comparison traffic.",
    highlight: true,
    features: [
      "10 alternative pages built & published",
      "Competitor keyword monitoring",
      "Weekly rank tracking dashboard",
      "Content refresh when rankings drop",
      "Internal linking strategy",
      "AI Search / GEO optimization",
      "Priority support",
    ],
    cta: "Start Growing",
  },
  {
    name: "Agency",
    inr: "₹66,699",
    usd: "$799",
    period: "/month",
    desc: "For agencies managing SEO for multiple SaaS clients.",
    highlight: false,
    features: [
      "Unlimited pages across all clients",
      "White-label reports",
      "Client dashboard access",
      "Dedicated account manager",
      "Custom page templates",
      "API access for publishing",
    ],
    cta: "Talk to Us",
  },
];

const FAQS = [
  {
    q: "What does a SaaS SEO agency do differently from a regular SEO agency?",
    a: "A SaaS SEO agency focuses on the full user journey for subscription software — not just traffic volume. The key difference is bottom-of-funnel content: alternative pages (e.g. 'Best [Competitor] Alternative'), feature comparison pages, and integration guides that capture buyers who are already in buying mode. Regular SEO agencies focus on top-of-funnel blog traffic. SaaS SEO focuses on signups, demos, and MRR.",
  },
  {
    q: "How much does a SaaS SEO agency in India cost?",
    a: "SaaS SEO agencies in India typically charge ₹80,000–₹4,50,000/month for mid-market work. Global specialists charge $5,000–$20,000/month. GoPinKaro's alternative page packages start at ₹8,299/month — specifically focused on the highest-converting content type in SaaS (alternative pages), not a full retainer with padded deliverables.",
  },
  {
    q: "How quickly can a SaaS SEO agency get results?",
    a: "Most agencies promise 6–12 months. We deliver first-page rankings in 30–90 days by targeting keywords with a difficulty score under 30. GoPinKaro took Replykaro from 5 clicks/day to 315 clicks/day in 90 days. The key is targeting the right keywords — low difficulty, high buyer intent — not chasing volume.",
  },
  {
    q: "What is GEO (Generative Engine Optimization) and why does it matter for SaaS?",
    a: "GEO is optimizing your content so AI answer engines (ChatGPT, Perplexity, Google AI Overview) cite your product when buyers ask questions like 'what's the best [Category] tool' or 'best alternative to [Competitor]'. As AI search grows, SaaS companies that appear in AI answers get discovery they'd otherwise miss. GoPinKaro builds pages with the structure, FAQ schema, and entity clarity that AI engines pull from.",
  },
  {
    q: "Do you work with SaaS companies outside India?",
    a: "Yes — our content is written in English and targets global (primarily US) search traffic. Most of our alternative page work captures US buyers switching between SaaS tools. We're India-based which means you get a specialist team at 60–70% of US agency rates. USD payment accepted; INR billing also available.",
  },
  {
    q: "What makes alternative pages so effective for SaaS?",
    a: "People searching 'ManyChat alternative' or 'HubSpot alternative' are already decided to switch — they just need to pick a replacement. This is the highest-intent traffic in SaaS. Conversion rates on well-built alternative pages average 7–10% vs 1–2% for standard blog content. And because most SaaS companies don't build these pages, keyword difficulties are still low (KD 5–30) even for major tool categories.",
  },
];

const COMPETITORS = [
  { name: "TripleDart", price: "$8,000–$20,000/mo", focus: "Full-stack B2B SaaS SEO, AI search", india: true },
  { name: "Revv Growth", price: "₹1,50,000–₹4,50,000/mo", focus: "Pipeline-focused SaaS SEO", india: true },
  { name: "Virayo", price: "$6,000+/mo", focus: "B2B pipeline, LLM optimization", india: false },
  { name: "Omniscient Digital", price: "$8,000+/mo", focus: "Revenue-connected organic growth", india: false },
  { name: "GoPinKaro", price: "₹8,299/mo ($99)", focus: "Alternative page SEO — rank first, prove value", india: true, highlight: true },
];

export default function SaasSeoAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                name: "GoPinKaro — SaaS SEO Agency",
                url: "https://gopinkaro.com",
                description: "B2B SaaS SEO agency in India specializing in alternative page SEO for SaaS companies.",
                areaServed: ["India", "United States", "Global"],
                priceRange: "₹8,299–₹66,699/month",
                address: { "@type": "PostalAddress", addressCountry: "IN" },
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://gopinkaro.com" },
                  { "@type": "ListItem", position: 2, name: "SaaS SEO Agency", item: "https://gopinkaro.com/saas-seo-agency" },
                ],
              },
            ],
          }),
        }}
      />

      <div style={{ background: "var(--background)", color: "var(--foreground)" }}>
        {/* Navbar */}
        <nav style={{ borderBottom: "1px solid var(--border)" }} className="sticky top-0 z-50 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-base">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="font-display">GoPinKaro</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="#pricing" className="text-sm" style={{ color: "var(--text-secondary)" }}>Pricing</Link>
              <Link href="mailto:hello@gopinkaro.com" className="text-sm font-medium px-4 py-1.5 rounded-lg text-white" style={{ background: "var(--accent)" }}>
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm mt-6 mb-8" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline">GoPinKaro</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "var(--foreground)" }}>SaaS SEO Agency</span>
          </nav>

          {/* Hero */}
          <header className="pb-16 pt-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                India-based · Serving global SaaS
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "var(--surface-2)", color: "var(--text-secondary)" }}>
                Results in 30–90 days
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
              The SaaS SEO Agency That
              <br />
              <span style={{ color: "var(--accent)" }}>Ranks Your Alternative Pages</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              We build and rank &ldquo;[Competitor] Alternative&rdquo; pages — the highest-converting
              content in SaaS. Buyers already switching from your competitor find you on Google.
              No cold outreach. No ads. Pure pipeline from organic search.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:hello@gopinkaro.com?subject=SaaS SEO Enquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base"
                style={{ background: "var(--accent)" }}
              >
                Book a free call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#results"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base border"
                style={{ borderColor: "var(--border)" }}
              >
                See our results
              </Link>
            </div>
          </header>

          {/* Results */}
          <section id="results" className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>
              Proven results
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {RESULTS.map((r) => (
                <div key={r.label} className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <p className="font-display text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>{r.metric}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{r.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-4" style={{ color: "var(--text-secondary)" }}>
              Case study: <strong>Replykaro.com</strong> — WhatsApp automation SaaS, India. Went from 5 clicks/day to 315 clicks/day in 90 days targeting &quot;manychat alternative&quot; and related keywords.
            </p>
          </section>

          {/* What makes SaaS SEO different */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-3">What Makes SaaS SEO Different</h2>
            <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
              Traditional SEO agencies chase traffic volume. SaaS SEO is about pipeline — signups, demos, and MRR from organic search. The content that converts in SaaS is not blog posts. It&apos;s bottom-of-funnel pages that capture buyers in decision mode.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="p-5 rounded-xl border"
                  style={{
                    borderColor: s.highlight ? "var(--accent)" : "var(--border)",
                    background: s.highlight ? "var(--accent-dim)" : "var(--surface)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
                    <h3 className="font-semibold">{s.title}</h3>
                    {s.highlight && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "var(--accent)", color: "#fff" }}>
                        Our specialty
                      </span>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-8">How We Grow Your Pipeline in 90 Days</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {PROCESS.map((p) => (
                <div key={p.step} className="flex gap-4">
                  <span className="font-mono text-2xl font-bold shrink-0" style={{ color: "var(--accent)" }}>{p.step}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competitor comparison */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-4">How GoPinKaro Compares to Other SaaS SEO Agencies</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Most SaaS SEO agencies charge $5,000–$20,000/month for broad retainers. We specialize in one thing — alternative pages — and deliver it at a fraction of the cost.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    {["Agency", "Starting Price", "Specialty", "India-based"].map((col) => (
                      <th key={col} className="text-left py-3 pr-6 font-semibold">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c, i) => (
                    <tr
                      key={c.name}
                      style={{
                        borderBottom: "1px solid var(--border)",
                        background: c.highlight ? "var(--accent-dim)" : i % 2 === 0 ? "transparent" : "var(--surface)",
                      }}
                    >
                      <td className="py-3 pr-6 font-semibold">
                        {c.name}
                        {c.highlight && <span className="ml-2 text-xs font-medium" style={{ color: "var(--accent)" }}>← you are here</span>}
                      </td>
                      <td className="py-3 pr-6" style={{ color: c.highlight ? "var(--accent)" : "inherit" }}>{c.price}</td>
                      <td className="py-3 pr-6" style={{ color: "var(--text-secondary)" }}>{c.focus}</td>
                      <td className="py-3">{c.india ? <Check className="w-4 h-4 text-emerald-500" /> : <span style={{ color: "var(--text-secondary)" }}>No</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-2">Transparent Pricing</h2>
            <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
              All prices in USD. INR billing available via Razorpay/UPI for Indian companies — no forex fees.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border p-6 flex flex-col"
                  style={{
                    borderColor: plan.highlight ? "var(--accent)" : "var(--border)",
                    background: plan.highlight ? "var(--accent-dim)" : "var(--surface)",
                  }}
                >
                  {plan.highlight && (
                    <p className="text-xs font-semibold mb-3" style={{ color: "var(--accent)" }}>Most popular</p>
                  )}
                  <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-3xl font-bold font-display">{plan.usd}</span>
                    <span style={{ color: "var(--text-secondary)" }}>{plan.period}</span>
                  </div>
                  <p className="text-xs mb-1 font-mono" style={{ color: "var(--accent)" }}>{plan.inr}/month in INR</p>
                  <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>{plan.desc}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`mailto:hello@gopinkaro.com?subject=${plan.name} Plan Enquiry`}
                    className="block text-center py-2.5 rounded-xl font-medium text-sm transition-colors"
                    style={{
                      background: plan.highlight ? "var(--accent)" : "transparent",
                      color: plan.highlight ? "#fff" : "var(--foreground)",
                      border: plan.highlight ? "none" : "1px solid var(--border)",
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links to alternative pages */}
          <section className="mb-16">
            <h2 className="font-display text-xl font-bold mb-4">Pages We&apos;ve Already Ranked</h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
              We build alternative pages like these for SaaS companies. These live examples are already indexed and ranking:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "ManyChat Alternative", href: "/manychat-alternative", kd: "KD 7" },
                { label: "Wati Alternative", href: "/wati-alternative", kd: "KD 2" },
                { label: "Zoko Alternative", href: "/zoko-alternative", kd: "KD 0" },
                { label: "Interakt Alternative", href: "/interakt-alternative", kd: "KD 0" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-4 py-2 rounded-lg border flex items-center gap-2 hover:border-emerald-300 transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                >
                  {link.label}
                  <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                    {link.kd}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-2xl p-10 text-center mb-16" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              Ready to grow?
            </p>
            <h2 className="font-display text-3xl font-bold mb-3">
              Get your first alternative page ranking in 30 days
            </h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              Tell us your product and your top 3 competitors. We&apos;ll show you which keywords to target and what the pages will look like before you pay anything.
            </p>
            <Link
              href="mailto:hello@gopinkaro.com?subject=Free SEO Audit — SaaS Alternative Pages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base"
              style={{ background: "var(--accent)" }}
            >
              Get a free keyword audit <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs mt-3" style={{ color: "var(--text-secondary)" }}>
              No commitment · 15-minute call · INR billing available
            </p>
          </section>
        </main>

        <footer className="py-8 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}>
          <p>
            <Link href="/" className="hover:underline font-medium">GoPinKaro</Link>
            {" · "}SaaS SEO Agency India — Alternative Page Specialists
            {" · "}
            <a href="mailto:hello@gopinkaro.com" className="hover:underline">hello@gopinkaro.com</a>
          </p>
        </footer>
      </div>
    </>
  );
}
