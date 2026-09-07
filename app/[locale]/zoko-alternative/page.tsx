import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "5 Best Zoko Alternatives in 2026 (WhatsApp E-commerce Tools) — GoPinKaro",
  description:
    "Zoko alternatives for Shopify WhatsApp automation compared: pricing, cart recovery, team inbox, and India billing. Find the best Zoko alternative for your e-commerce store.",
  keywords: [
    "zoko alternative",
    "best zoko alternative",
    "best zoko alternative for shopify",
    "best zoko alternative ecommerce whatsapp automation",
    "zoko alternative ecommerce whatsapp sales automation team inbox",
    "zoko alternatives",
  ],
  openGraph: {
    title: "5 Best Zoko Alternatives in 2026 (WhatsApp E-commerce Tools)",
    description: "Zoko Starter costs $49.99/mo plus Meta per-message fees. These alternatives offer the same Shopify WhatsApp automation at lower prices — some with better team inbox and analytics.",
    type: "article",
  },
  alternates: {
    canonical: "https://gopinkaro.com/zoko-alternative",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "Interakt",
    tagline: "Best Zoko Alternative for Shopify Stores in India",
    badge: "Top Pick D2C",
    badgeColor: "bg-emerald-100 text-emerald-700",
    price: "₹999/mo ($12)",
    bestFor: "Indian D2C and Shopify brands needing WhatsApp order updates, cart recovery, and team inbox at the lowest price",
    channels: ["WhatsApp"],
    pros: [
      "₹999/mo vs Zoko's $49.99/mo — significantly cheaper",
      "Native Shopify & WooCommerce plugin",
      "Automated order confirmation, shipping updates via WhatsApp",
      "Cart abandonment recovery flows",
      "Team shared inbox for support agents",
      "Click-to-WhatsApp ad integration",
    ],
    cons: ["WhatsApp only (no Instagram/Facebook DM)", "Analytics less advanced than Zoko"],
    rating: 4.4,
  },
  {
    rank: 2,
    name: "ReplyKaro",
    tagline: "Best for Instagram DM Automation (Separate from WhatsApp)",
    badge: "Instagram Only",
    badgeColor: "bg-pink-100 text-pink-700",
    price: "Free · ₹99/mo ($3/mo) · $9/mo Pro",
    bestFor: "Brands whose audience is on Instagram, not WhatsApp — comment-to-DM flows, story reply automation, and Follow Gate at a fraction of any WhatsApp tool's cost",
    channels: ["Instagram DMs only"],
    pros: [
      "Free plan: 1,000 Instagram DMs/month",
      "₹99/mo for 30,000 DMs — Meta verified, no ban risk",
      "Comment → DM: trigger DMs when someone comments on your reel",
      "Follow Gate: user follows before they receive the link",
      "Works alongside a WhatsApp tool — covers Instagram, Zoko covers WhatsApp",
    ],
    cons: [
      "Instagram-only — does not support WhatsApp at all",
      "Not a Zoko replacement if your sales channel is WhatsApp",
    ],
    rating: 4.7,
  },
  {
    rank: 3,
    name: "AiSensy",
    tagline: "Best for WhatsApp Broadcast Campaigns",
    badge: "Best Campaigns",
    badgeColor: "bg-purple-100 text-purple-700",
    price: "Free · ₹1,500/mo Basic · ₹3,200/mo Pro",
    bestFor: "E-commerce brands running bulk WhatsApp promotions, sale announcements, and customer retargeting at scale",
    channels: ["WhatsApp Business API"],
    pros: [
      "Free plan with unlimited chats (limited automation)",
      "₹1,500/mo Basic — cheaper than Zoko for broadcast use cases",
      "Bulk broadcast to opted-in contact lists",
      "ChatGPT-powered chatbot on paid plans",
      "Per-template-message pricing from Meta passed through transparently",
    ],
    cons: ["WhatsApp-only — no Instagram or Messenger", "Cart recovery and checkout flows less specialized than Zoko"],
    rating: 4.2,
  },
  {
    rank: 4,
    name: "Wati",
    tagline: "Best for Mid-Market WhatsApp Teams",
    badge: "Enterprise Option",
    badgeColor: "bg-orange-100 text-orange-700",
    price: "$59/mo Growth · $119/mo Pro",
    bestFor: "Mid-market teams needing robust automation flows, CRM integrations, and a reliable WhatsApp Business API BSP",
    channels: ["WhatsApp Business API"],
    pros: [
      "Mature platform with strong conditional flow builder",
      "CRM integrations: HubSpot, Salesforce, Zoho",
      "1,000 chatbot sessions included on Growth plan",
      "Broadcast campaigns with delivery analytics",
      "Reliable uptime as an established BSP",
    ],
    cons: ["$59/mo Growth — plus ~20% markup on Meta per-message fees", "5-user limit on Growth; more seats cost extra"],
    rating: 4.1,
  },
  {
    rank: 5,
    name: "Gallabox",
    tagline: "Best for WhatsApp Sales Pipeline",
    badge: "Best Sales",
    badgeColor: "bg-pink-100 text-pink-700",
    price: "₹1,499/mo ($18)",
    bestFor: "Sales teams who need a pipeline/CRM view inside their WhatsApp inbox to track and close leads",
    channels: ["WhatsApp"],
    pros: [
      "CRM-style pipeline view for WhatsApp conversations",
      "Lead scoring and auto-assignment to agents",
      "Integrates with Zoho CRM, HubSpot, Salesforce",
      "India-based support team",
      "INR billing available",
    ],
    cons: ["Sales-CRM focus — less suited to e-commerce order flows", "Fewer templates than Zoko"],
    rating: 4.0,
  },
];

const FAQS = [
  {
    q: "What is the best Zoko alternative for Shopify?",
    a: "Interakt is the top Zoko alternative for Shopify stores, especially in India. It has a native Shopify plugin, automated order notifications, cart abandonment recovery, and a team inbox — all at ₹999/month vs Zoko's $34.99/month. For a multi-channel option that also covers Instagram, ReplyKaro at ₹99/month is a strong choice.",
  },
  {
    q: "What is the best Zoko alternative for WhatsApp e-commerce automation?",
    a: "For pure WhatsApp e-commerce automation: Interakt (₹999/mo) has the deepest Shopify integration with cart recovery, COD confirmation, and order tracking. AiSensy (₹999/mo) is better for bulk broadcast campaigns and retargeting existing customers. Both are significantly cheaper than Zoko.",
  },
  {
    q: "Why are people looking for Zoko alternatives?",
    a: "Zoko's pricing starts at $34.99/month and increases with team seats and message volume. Users report: (1) costs grow faster than expected as conversation volumes increase, (2) limited to WhatsApp only with no Instagram support, (3) Shopify integration could be deeper compared to dedicated Indian alternatives like Interakt.",
  },
  {
    q: "Does Zoko have a free plan?",
    a: "Zoko does not offer a permanent free plan — only a 7-day free trial. If you need a free option, ReplyKaro has a Free Forever plan covering WhatsApp and Instagram automation. AiSensy offers a 14-day free trial.",
  },
  {
    q: "What is the best Zoko alternative with agent management and WhatsApp analytics?",
    a: "Interakt and Gallabox are the best alternatives for team/agent management. Interakt has a shared team inbox with agent assignment and conversation analytics. Gallabox adds a CRM pipeline view with lead scoring for sales teams. Both offer India-based support and INR billing.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`w-4 h-4 ${star <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
      ))}
      <span className="text-sm font-medium ml-1">{rating}</span>
    </div>
  );
}

export default function ZokoAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "5 Best Zoko Alternatives in 2026 (WhatsApp E-commerce Tools)",
                datePublished: "2026-09-07",
                dateModified: "2026-09-07",
                author: { "@type": "Organization", name: "GoPinKaro" },
                publisher: { "@type": "Organization", name: "GoPinKaro", url: "https://gopinkaro.com" },
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
                  { "@type": "ListItem", position: 2, name: "Zoko Alternative", item: "https://gopinkaro.com/zoko-alternative" },
                ],
              },
            ],
          }),
        }}
      />

      <div style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <nav style={{ borderBottom: "1px solid var(--border)" }} className="sticky top-0 z-50 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-base">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="font-display">GoPinKaro</span>
            </Link>
            <Link href="mailto:hello@gopinkaro.com" className="text-sm font-medium px-4 py-1.5 rounded-lg text-white" style={{ background: "var(--accent)" }}>
              Get Listed
            </Link>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <nav className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline">GoPinKaro</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "var(--foreground)" }}>Zoko Alternative</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>Updated September 2026</span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>5 tools reviewed</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              5 Best Zoko Alternatives in 2026
              <br />
              <span style={{ color: "var(--accent)" }}>WhatsApp E-commerce, Honestly Compared</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              Zoko is a solid WhatsApp e-commerce tool, but it starts at $34.99/month and doesn't cover
              Instagram. These alternatives offer the same cart recovery and team inbox at lower cost —
              some with better India pricing.
            </p>

            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="text-sm font-semibold mb-2">Quick picks:</p>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Best for Shopify India:</span> Interakt — ₹999/mo, full Shopify plugin, cart recovery</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Best multi-channel:</span> ReplyKaro — ₹99/mo, WhatsApp + Instagram</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Best for broadcasts:</span> AiSensy — ₹999/mo, bulk campaigns + retargeting</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Best for enterprise:</span> Wati — $49/mo, mature platform with CRM integrations</li>
              </ul>
            </div>
          </header>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">The 5 Best Zoko Alternatives</h2>
            <div className="space-y-6">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div className="p-6">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: "var(--surface-2)", color: "var(--text-secondary)" }}>#{tool.rank}</span>
                        <h3 className="font-display text-xl font-bold">{tool.name}</h3>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tool.badgeColor}`}>{tool.badge}</span>
                      </div>
                      <StarRating rating={tool.rating} />
                    </div>
                    <p className="font-semibold mb-1">{tool.tagline}</p>
                    <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}><strong>Best for:</strong> {tool.bestFor}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.channels.map((ch) => (
                        <span key={ch} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{ch}</span>
                      ))}
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>{tool.price}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-secondary)" }}>Pros</p>
                        <ul className="space-y-1.5">
                          {tool.pros.map((pro) => (<li key={pro} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />{pro}</li>))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-secondary)" }}>Cons</p>
                        <ul className="space-y-1.5">
                          {tool.cons.map((con) => (<li key={con} className="flex items-start gap-2 text-sm"><X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />{con}</li>))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
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

          <section className="mb-12">
            <h2 className="font-display text-xl font-bold mb-4">More WhatsApp Tool Comparisons</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "ManyChat Alternative", href: "/manychat-alternative" },
                { label: "Wati Alternative", href: "/wati-alternative" },
                { label: "Interakt Alternative", href: "/interakt-alternative" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm px-4 py-2 rounded-lg border flex items-center gap-1 hover:border-emerald-300 transition-colors" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                  {link.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl p-8 text-center" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>For tool makers</p>
            <h2 className="font-display text-2xl font-bold mb-3">Is Your Tool a Zoko Alternative?</h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              This page gets 40–80 searches/month from Shopify stores actively evaluating WhatsApp tools. Get featured here.
            </p>
            <a href="mailto:hello@gopinkaro.com?subject=Get Listed — Zoko Alternative Page" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium" style={{ background: "var(--accent)" }}>
              Get Listed <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </main>

        <footer className="mt-16 py-8 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}>
          <p>Built by <Link href="/" className="hover:underline font-medium">GoPinKaro</Link> · <a href="mailto:hello@gopinkaro.com" className="hover:underline">hello@gopinkaro.com</a></p>
        </footer>
      </div>
    </>
  );
}
