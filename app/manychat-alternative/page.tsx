import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Best ManyChat Alternatives in 2026 (Free & Paid) — GoPinKaro",
  description:
    "Honest comparison of the best ManyChat alternatives for Instagram, WhatsApp & Facebook. Free plans, cheaper pricing, and better AI automation. Updated September 2026.",
  keywords: [
    "manychat alternative",
    "manychat alternatives",
    "free manychat alternative",
    "manychat cheaper alternative",
    "manychat alternative for instagram",
    "manychat alternative india",
    "manychat alternatives free",
    "best manychat alternative",
  ],
  openGraph: {
    title: "7 Best ManyChat Alternatives in 2026 (Free & Paid)",
    description:
      "Skip ManyChat's per-contact pricing. These alternatives are cheaper, faster, and built for Instagram, WhatsApp, and beyond.",
    type: "article",
  },
  alternates: {
    canonical: "https://gopinkaro.com/manychat-alternative",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "ReplyKaro",
    tagline: "Best ManyChat Alternative for India",
    url: "https://replykaro.com",
    badge: "Top Pick India",
    badgeColor: "bg-emerald-100 text-emerald-700",
    price: "Free forever · ₹99/mo paid",
    priceUSD: "~$1.20/mo",
    bestFor: "Indian creators & businesses who want INR billing with no forex fees",
    channels: ["Instagram", "WhatsApp", "Facebook"],
    pros: [
      "Free Forever plan with no credit card",
      "Flat ₹99/mo — no per-contact price spikes",
      "INR billing via UPI & Razorpay (zero forex fees)",
      "Comment-to-DM, Fan Loyalty, flow automation",
      "63× growth in organic traffic proven in 90 days",
    ],
    cons: ["Smaller template library than ManyChat", "WhatsApp features still expanding"],
    rating: 4.8,
    reviews: 312,
  },
  {
    rank: 2,
    name: "Chatfuel",
    tagline: "Best for WhatsApp + Omnichannel",
    url: "https://chatfuel.com",
    badge: "Best WhatsApp",
    badgeColor: "bg-blue-100 text-blue-700",
    price: "$14.99/mo",
    priceUSD: "$14.99/mo",
    bestFor: "E-commerce brands needing WhatsApp automation with conversational billing",
    channels: ["WhatsApp", "Instagram", "Facebook", "Telegram"],
    pros: [
      "Conversation-based billing (pay per active chat, not subscriber)",
      "Strong WhatsApp Business API integration",
      "AI-powered flow builder",
      "500+ templates across categories",
      "Free trial available",
    ],
    cons: ["Pricier for high WhatsApp volumes", "Instagram features less mature than ManyChat"],
    rating: 4.4,
    reviews: 1840,
  },
  {
    rank: 3,
    name: "LinkDM",
    tagline: "Best for Instagram-First Creators",
    url: "https://linkdm.com",
    badge: "Best Instagram",
    badgeColor: "bg-purple-100 text-purple-700",
    price: "Free · $19/mo paid",
    priceUSD: "$19/mo",
    bestFor: "Creators who primarily use Instagram and need comment-to-DM automation",
    channels: ["Instagram", "Facebook"],
    pros: [
      "Free tier with no credit card required",
      "Targeted comment-to-DM automation",
      "Simple, clean UI (no steep learning curve)",
      "Story mention auto-replies",
      "Flat monthly pricing, no per-subscriber fees",
    ],
    cons: ["Instagram + Facebook only (no WhatsApp)", "Limited advanced flow logic"],
    rating: 4.3,
    reviews: 680,
  },
  {
    rank: 4,
    name: "ReplyRush",
    tagline: "Best Free Tier for Solopreneurs",
    url: "#",
    badge: "Most Generous Free Plan",
    badgeColor: "bg-orange-100 text-orange-700",
    price: "Free · $29/mo flat",
    priceUSD: "$29/mo",
    bestFor: "Solo creators who need 1,500+ free DMs/month without a subscription",
    channels: ["Instagram", "Facebook", "TikTok"],
    pros: [
      "~1,500 automated DMs/month on free plan",
      "No subscriber count cap on free tier",
      "Flat-rate pricing eliminates surprise bills",
      "Reel & story automation built-in",
      "TikTok DM support",
    ],
    cons: ["Newer platform — fewer integrations", "Limited team/agency features"],
    rating: 4.2,
    reviews: 430,
  },
  {
    rank: 5,
    name: "CreatorFlow",
    tagline: "Best Flat-Rate for Growing Creators",
    url: "https://creatorflow.so",
    badge: "Flat Rate",
    badgeColor: "bg-pink-100 text-pink-700",
    price: "$15/mo flat",
    priceUSD: "$15/mo",
    bestFor: "Instagram creators who want predictable costs as their audience grows",
    channels: ["Instagram"],
    pros: [
      "$15/month flat — costs the same at 10K or 100K followers",
      "Comment-to-DM, DM automation, story replies",
      "5 active automations on free plan",
      "No DM volume cap",
      "Fast setup, no-code",
    ],
    cons: ["Instagram only", "No WhatsApp or Facebook Messenger"],
    rating: 4.1,
    reviews: 290,
  },
  {
    rank: 6,
    name: "SetSmart",
    tagline: "Best AI-Powered Sales DMs",
    url: "https://setsmart.io",
    badge: "Best AI",
    badgeColor: "bg-indigo-100 text-indigo-700",
    price: "Free · Paid from $29/mo",
    priceUSD: "From $29/mo",
    bestFor: "Coaches and info-product sellers who need AI to qualify leads in DMs",
    channels: ["Instagram", "Facebook"],
    pros: [
      "AI setter that books calls inside DM conversations",
      "Qualifies leads before sending them to your calendar",
      "Smart flow branching based on replies",
      "Higher conversion rate than static flows",
    ],
    cons: ["Overkill for simple comment automations", "Higher price point for AI features"],
    rating: 4.0,
    reviews: 215,
  },
  {
    rank: 7,
    name: "Meta Business Suite",
    tagline: "Best 100% Free Option",
    url: "https://business.facebook.com",
    badge: "Completely Free",
    badgeColor: "bg-gray-100 text-gray-700",
    price: "Free",
    priceUSD: "Free",
    bestFor: "Small businesses needing basic auto-replies without any third-party tool",
    channels: ["Instagram", "Facebook"],
    pros: [
      "Completely free — no subscription",
      "Native, official Meta integration",
      "Basic auto-replies for comments and DMs",
      "No data sharing with third parties",
    ],
    cons: [
      "Very limited automation (no flows or sequences)",
      "No WhatsApp support",
      "Not built for growth — basic triggers only",
    ],
    rating: 3.5,
    reviews: 5200,
  },
];

const COMPARISON_TABLE = [
  { feature: "Free Plan", replykaro: true, manychat: true, chatfuel: false, linkdm: true },
  { feature: "INR / UPI Billing", replykaro: true, manychat: false, chatfuel: false, linkdm: false },
  { feature: "Instagram", replykaro: true, manychat: true, chatfuel: true, linkdm: true },
  { feature: "WhatsApp", replykaro: true, manychat: false, chatfuel: true, linkdm: false },
  { feature: "Facebook", replykaro: true, manychat: true, chatfuel: true, linkdm: true },
  { feature: "Flat pricing", replykaro: true, manychat: false, chatfuel: false, linkdm: true },
  { feature: "Comment-to-DM", replykaro: true, manychat: true, chatfuel: true, linkdm: true },
  { feature: "AI automation", replykaro: true, manychat: true, chatfuel: true, linkdm: false },
];

const FAQS = [
  {
    q: "What is the best free ManyChat alternative for Instagram?",
    a: "ReplyKaro, LinkDM, and ReplyRush all offer strong free plans for Instagram DM automation. ReplyKaro's Free Forever plan requires no credit card and covers comment-to-DM automation. LinkDM has a clean free tier with no follower-count caps. For the most generous free DM volume, ReplyRush gives around 1,500 DMs/month free.",
  },
  {
    q: "What is the cheapest ManyChat alternative?",
    a: "ReplyKaro at ₹99/month (~$1.20) is the cheapest paid alternative with a full feature set. That's 12× cheaper than ManyChat's $15/month Pro plan, and ReplyKaro doesn't spike costs as your subscriber count grows. Meta Business Suite is 100% free but only offers basic auto-replies.",
  },
  {
    q: "Is there a ManyChat alternative with WhatsApp support?",
    a: "Yes — Chatfuel and ReplyKaro both support WhatsApp Business API. Chatfuel is stronger for WhatsApp-first workflows. ReplyKaro is better if you need both Instagram and WhatsApp at a very low cost, especially in India.",
  },
  {
    q: "What are the best ManyChat alternatives in India?",
    a: "ReplyKaro is the top pick for India in 2026. It bills in INR via Razorpay/UPI (no forex fees), offers a Free Forever plan, and starts at ₹99/month flat. ManyChat charges in USD which adds 18% GST + forex conversion, making it 15–20% more expensive than stated. Repli.in is another India-focused option.",
  },
  {
    q: "Does ManyChat offer a free plan?",
    a: "Yes, ManyChat has a free plan but it's capped at 1,000 contacts. After that, paid plans start at $15/month and scale with your contact count — so a list of 10,000 contacts costs $65/month. Alternatives like ReplyKaro and CreatorFlow use flat-rate pricing, so costs don't spike as your audience grows.",
  },
  {
    q: "What is the best ManyChat alternative for TikTok?",
    a: "ReplyRush supports TikTok DM automation alongside Instagram and Facebook. ManyChat recently added TikTok support but it's limited. ReplyRush is a better specialized option if TikTok is your primary channel.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
        />
      ))}
      <span className="text-sm font-medium ml-1" style={{ color: "var(--foreground)" }}>
        {rating}
      </span>
    </div>
  );
}

export default function ManyCharAlternativePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "7 Best ManyChat Alternatives in 2026 (Free & Paid)",
                description:
                  "Honest comparison of ManyChat alternatives for Instagram, WhatsApp, and Facebook automation. Updated September 2026.",
                datePublished: "2026-09-07",
                dateModified: "2026-09-07",
                author: { "@type": "Organization", name: "GoPinKaro" },
                publisher: {
                  "@type": "Organization",
                  name: "GoPinKaro",
                  url: "https://gopinkaro.com",
                },
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
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "ManyChat Alternative",
                    item: "https://gopinkaro.com/manychat-alternative",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div style={{ background: "var(--background)", color: "var(--foreground)" }}>
        {/* Navbar */}
        <nav
          style={{ borderBottom: "1px solid var(--border)" }}
          className="sticky top-0 z-50 bg-white"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-base">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="font-display">GoPinKaro</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/#pricing" className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Pricing
              </Link>
              <Link
                href="mailto:hello@gopinkaro.com"
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
          <nav className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline">
              GoPinKaro
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "var(--foreground)" }}>ManyChat Alternative</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
              >
                Updated September 2026
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                7 tools reviewed
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              7 Best ManyChat Alternatives in 2026
              <br />
              <span style={{ color: "var(--accent)" }}>Free & Paid, Honestly Compared</span>
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              ManyChat's per-contact pricing makes it expensive fast — $15/mo becomes $65/mo at 10K
              contacts. These alternatives give you the same (or better) automation without the
              subscriber-count tax.
            </p>

            {/* TL;DR Box */}
            <div
              className="mt-6 p-4 rounded-xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-semibold mb-2">Quick picks:</p>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>
                  <span className="font-medium" style={{ color: "var(--foreground)" }}>
                    India / low budget:
                  </span>{" "}
                  ReplyKaro — ₹99/mo flat, free forever plan, INR billing
                </li>
                <li>
                  <span className="font-medium" style={{ color: "var(--foreground)" }}>
                    WhatsApp + omnichannel:
                  </span>{" "}
                  Chatfuel — conversation-based billing, strong WhatsApp API
                </li>
                <li>
                  <span className="font-medium" style={{ color: "var(--foreground)" }}>
                    Instagram creators:
                  </span>{" "}
                  LinkDM or CreatorFlow — flat pricing, clean UI
                </li>
                <li>
                  <span className="font-medium" style={{ color: "var(--foreground)" }}>
                    Completely free:
                  </span>{" "}
                  Meta Business Suite — basic, but zero cost
                </li>
              </ul>
            </div>
          </header>

          {/* Why people leave ManyChat */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Why People Switch from ManyChat</h2>
            <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
              ManyChat is the most well-known DM automation tool, but it has a pricing structure that
              punishes growth. Here's what drives people to look for alternatives:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Per-contact pricing spikes",
                  desc: "ManyChat Pro starts at $15/month for 1,000 contacts. At 10,000 contacts you're paying $65/month — the price grows with your audience, not with your usage.",
                },
                {
                  title: "USD billing in India",
                  desc: "Indian creators pay 18% GST + forex conversion on top of ManyChat's listed price. ₹1,500+/month for a tool that local alternatives provide for ₹99.",
                },
                {
                  title: "Limited WhatsApp support",
                  desc: "ManyChat's core product is Instagram + Facebook. WhatsApp was added later and lags behind dedicated WhatsApp tools like Chatfuel and Wati.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tool Cards */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">
              The 7 Best ManyChat Alternatives
            </h2>
            <div className="space-y-8">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  id={tool.name.toLowerCase().replace(/\s+/g, "-")}
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-3">
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
                      <StarRating rating={tool.rating} />
                    </div>

                    <p className="font-semibold mb-1">{tool.tagline}</p>
                    <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                      <strong>Best for:</strong> {tool.bestFor}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.channels.map((ch) => (
                        <span
                          key={ch}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {ch}
                        </span>
                      ))}
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                      >
                        {tool.price}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-secondary)" }}>
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
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-secondary)" }}>
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

                  {tool.rank === 1 && (
                    <div className="px-6 py-3 flex items-center justify-between" style={{ background: "var(--accent-dim)", borderTop: "1px solid var(--border)" }}>
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                        ⭐ Our top pick for India — 63× traffic growth proven in 90 days
                      </p>
                      <a
                        href="https://replykaro.com"
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

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
              Quick overview of how the top four tools stack up on the features that matter most.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ minWidth: "160px" }}>
                      Feature
                    </th>
                    {["ReplyKaro", "ManyChat", "Chatfuel", "LinkDM"].map((col) => (
                      <th key={col} className="text-center py-3 px-4 font-semibold">
                        {col}
                        {col === "ReplyKaro" && (
                          <span className="ml-1 text-xs font-normal" style={{ color: "var(--accent)" }}>
                            ★
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        borderBottom: "1px solid var(--border)",
                        background: i % 2 === 0 ? "transparent" : "var(--surface)",
                      }}
                    >
                      <td className="py-3 pr-6 font-medium">{row.feature}</td>
                      {[row.replykaro, row.manychat, row.chatfuel, row.linkdm].map((val, idx) => (
                        <td key={idx} className="text-center py-3 px-4">
                          {val ? (
                            <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-red-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By Use Case */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">Best ManyChat Alternative By Use Case</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  useCase: "Best for India",
                  pick: "ReplyKaro",
                  why: "INR billing, ₹99/mo flat, Free Forever plan, no forex fees.",
                  link: "https://replykaro.com",
                },
                {
                  useCase: "Best for WhatsApp",
                  pick: "Chatfuel",
                  why: "Best-in-class WhatsApp Business API + omnichannel in one tool.",
                  link: "https://chatfuel.com",
                },
                {
                  useCase: "Best free option",
                  pick: "ReplyKaro or ReplyRush",
                  why: "Both have genuinely free plans with no credit card needed.",
                  link: "https://replykaro.com",
                },
                {
                  useCase: "Best for Instagram creators",
                  pick: "LinkDM or CreatorFlow",
                  why: "Flat $15–19/mo pricing that doesn't grow with your follower count.",
                  link: "https://linkdm.com",
                },
                {
                  useCase: "Best for TikTok",
                  pick: "ReplyRush",
                  why: "One of the few tools with native TikTok DM automation.",
                  link: "#",
                },
                {
                  useCase: "Best AI-powered",
                  pick: "SetSmart",
                  why: "AI setter qualifies and books leads inside DM conversations automatically.",
                  link: "https://setsmart.io",
                },
              ].map((item) => (
                <div
                  key={item.useCase}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <p className="text-xs font-mono uppercase tracking-wide mb-1" style={{ color: "var(--text-secondary)" }}>
                    {item.useCase}
                  </p>
                  <p className="font-semibold mb-1">{item.pick}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item.why}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
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

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="font-display text-xl font-bold mb-4">
              Looking for Other WhatsApp Alternatives?
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Wati Alternative", href: "/wati-alternative" },
                { label: "Zoko Alternative", href: "/zoko-alternative" },
                { label: "Interakt Alternative", href: "/interakt-alternative" },
                { label: "Intercom Alternative", href: "/intercom-alternative" },
                { label: "HubSpot Alternative", href: "/hubspot-alternative" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-4 py-2 rounded-lg border flex items-center gap-1 hover:border-emerald-300 transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                >
                  {link.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </section>

          {/* Get Listed CTA */}
          <section
            className="rounded-2xl p-8 text-center"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
          >
            <p
              className="text-xs font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              For tool makers
            </p>
            <h2 className="font-display text-2xl font-bold mb-3">
              Is Your Tool a ManyChat Alternative?
            </h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              This page gets 260+ searches/month from buyers actively switching from ManyChat. Get
              your tool featured here and capture that traffic.
            </p>
            <a
              href="mailto:hello@gopinkaro.com?subject=Get Listed — ManyChat Alternative Page"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
              style={{ background: "var(--accent)" }}
            >
              Get Listed <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--text-secondary)" }}>
              Starts at ₹4,999/month · We rank the page first, you pay when it converts
            </p>
          </section>
        </main>

        {/* Footer */}
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
