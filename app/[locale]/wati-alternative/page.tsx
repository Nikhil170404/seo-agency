import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "6 Best Wati Alternatives in 2026 (WhatsApp Business API Tools) — GoPinKaro",
  description:
    "Wati alternatives compared honestly: pricing, features, WhatsApp API support, and India billing. Find the right WhatsApp Business platform for your team. Updated September 2026.",
  keywords: [
    "wati alternative",
    "wati alternatives",
    "wati whatsapp alternative",
    "best wati alternative",
    "wati io alternative",
    "wati alternatives for whatsapp business",
    "wati alternatives for d2c whatsapp automation",
  ],
  openGraph: {
    title: "6 Best Wati Alternatives in 2026 (WhatsApp Business API Tools)",
    description:
      "Wati starts at $49/mo and charges per conversation. These alternatives give you better pricing, more channels, or stronger automation.",
    type: "article",
  },
  alternates: {
    canonical: "https://gopinkaro.com/wati-alternative",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "ReplyKaro",
    tagline: "Best Wati Alternative for India",
    badge: "Top Pick India",
    badgeColor: "bg-emerald-100 text-emerald-700",
    price: "Free forever · ₹99/mo paid",
    bestFor: "Indian D2C brands & SMBs who want WhatsApp + Instagram automation in INR with no forex fees",
    channels: ["WhatsApp", "Instagram", "Facebook"],
    pros: [
      "Free Forever plan — no credit card required",
      "Flat ₹99/mo vs Wati's $49/mo (~₹4,100) minimum",
      "INR billing via UPI & Razorpay (zero forex + GST on USD)",
      "WhatsApp Business API + Instagram DM automation in one tool",
      "Proven 63× organic traffic growth in 90 days for users",
    ],
    cons: ["Newer platform — fewer enterprise integrations", "Advanced analytics still growing"],
    rating: 4.8,
  },
  {
    rank: 2,
    name: "Interakt",
    tagline: "Best Budget WhatsApp API for India",
    badge: "Budget India",
    badgeColor: "bg-blue-100 text-blue-700",
    price: "₹999/mo ($12)",
    bestFor: "Indian e-commerce and D2C brands on Shopify who need WhatsApp notifications + team inbox",
    channels: ["WhatsApp"],
    pros: [
      "₹999/mo starter plan — much cheaper than Wati",
      "Native Shopify & WooCommerce integration",
      "Team shared inbox for customer support",
      "WhatsApp broadcast campaigns",
      "Click-to-WhatsApp ad integration",
    ],
    cons: ["WhatsApp only (no Instagram/Facebook)", "Limited flow automation compared to Wati"],
    rating: 4.3,
  },
  {
    rank: 3,
    name: "AiSensy",
    tagline: "Best for WhatsApp Broadcasts & Campaigns",
    badge: "Best Broadcasts",
    badgeColor: "bg-purple-100 text-purple-700",
    price: "₹999/mo ($12) · Free trial",
    bestFor: "Brands running bulk WhatsApp campaigns and retargeting existing customer lists",
    channels: ["WhatsApp"],
    pros: [
      "Bulk broadcast to unlimited contacts",
      "Green tick WhatsApp Business Account support",
      "Retargeting campaigns based on customer behaviour",
      "Quick reply chatbot flows",
      "Free 14-day trial",
    ],
    cons: ["No Instagram or Facebook DM support", "Analytics dashboard can feel basic"],
    rating: 4.2,
  },
  {
    rank: 4,
    name: "Zoko",
    tagline: "Best for WhatsApp E-commerce & Sales",
    badge: "Best E-commerce",
    badgeColor: "bg-orange-100 text-orange-700",
    price: "$34.99/mo",
    bestFor: "Shopify stores wanting WhatsApp-native checkout, cart recovery, and COD confirmation",
    channels: ["WhatsApp"],
    pros: [
      "WhatsApp checkout flows built for Shopify",
      "Cart abandonment recovery via WhatsApp",
      "COD confirmation & delivery notifications",
      "Multi-agent team inbox",
      "Click-to-WhatsApp campaigns",
    ],
    cons: ["Shopify-focused (limited other integrations)", "Per-conversation WhatsApp API costs apply"],
    rating: 4.1,
  },
  {
    rank: 5,
    name: "Respond.io",
    tagline: "Best for Omnichannel Teams",
    badge: "Best Omnichannel",
    badgeColor: "bg-indigo-100 text-indigo-700",
    price: "$79/mo (Starter)",
    bestFor: "Sales and support teams managing WhatsApp, Instagram, Facebook, Telegram, and email in one inbox",
    channels: ["WhatsApp", "Instagram", "Facebook", "Telegram", "Email", "Live Chat"],
    pros: [
      "True omnichannel inbox — all channels in one place",
      "AI-powered routing and auto-assignment",
      "Advanced workflow automation builder",
      "CRM integrations (Salesforce, HubSpot)",
      "Detailed team performance analytics",
    ],
    cons: ["$79/mo minimum is expensive for small teams", "Setup complexity is higher"],
    rating: 4.4,
  },
  {
    rank: 6,
    name: "Gallabox",
    tagline: "Best for WhatsApp + CRM Integration",
    badge: "Best CRM Connect",
    badgeColor: "bg-pink-100 text-pink-700",
    price: "₹1,499/mo ($18)",
    bestFor: "Sales teams who want WhatsApp automation connected to their CRM pipeline",
    channels: ["WhatsApp"],
    pros: [
      "Built-in mini-CRM for WhatsApp leads",
      "Pipeline view for WhatsApp sales conversations",
      "Auto-assignment rules for sales teams",
      "Integration with Zoho, Hubspot, Salesforce",
      "India-based support team",
    ],
    cons: ["WhatsApp only", "Less powerful than Wati's automation for complex flows"],
    rating: 4.0,
  },
];

const FAQS = [
  {
    q: "What is the best Wati alternative for India?",
    a: "ReplyKaro and Interakt are the top Wati alternatives for India. ReplyKaro starts at ₹99/month flat with a Free Forever plan and covers both WhatsApp and Instagram. Interakt starts at ₹999/month and is focused purely on WhatsApp Business API for e-commerce brands. Both offer INR billing via UPI/Razorpay, avoiding the ~18% GST + forex conversion you'd pay on Wati's USD pricing.",
  },
  {
    q: "Why are people looking for Wati alternatives?",
    a: "Wati's pricing starts at $49/month (~₹4,100) and scales quickly with team seats and conversation volumes. Users often cite: (1) high cost for small teams, (2) USD-only billing adding GST on international transactions, (3) limited channels — Wati is WhatsApp-only, with no Instagram or Facebook support, (4) per-conversation WhatsApp API costs on top of the subscription fee.",
  },
  {
    q: "Is there a free Wati alternative?",
    a: "Yes — ReplyKaro has a Free Forever plan with no credit card required. It includes WhatsApp and Instagram automation. AiSensy offers a free 14-day trial. Most dedicated WhatsApp API platforms (including Wati itself) don't offer a permanent free plan because WhatsApp Business API usage incurs platform costs.",
  },
  {
    q: "What is the cheapest Wati alternative with WhatsApp API?",
    a: "Interakt at ₹999/month (~$12) and AiSensy at ₹999/month are the cheapest full WhatsApp Business API alternatives to Wati. ReplyKaro at ₹99/month is even cheaper but is best suited for smaller teams and adds Instagram DM automation as a bonus.",
  },
  {
    q: "What is the best Wati alternative for D2C WhatsApp automation?",
    a: "Zoko is purpose-built for D2C e-commerce — it has native Shopify integration, WhatsApp checkout flows, cart abandonment recovery, and COD confirmation automation. Interakt is a close second with strong Shopify + WooCommerce integrations and ₹999/mo starting price. Both are better than Wati for pure D2C use cases.",
  },
  {
    q: "Does Wati support Instagram and Facebook?",
    a: "No — Wati is WhatsApp-only. If you need Instagram DM automation alongside WhatsApp, look at ReplyKaro (covers both at ₹99/mo) or Respond.io (full omnichannel including WhatsApp, Instagram, Facebook, Telegram).",
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
      <span className="text-sm font-medium ml-1">{rating}</span>
    </div>
  );
}

export default function WatiAlternativePage() {
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
                headline: "6 Best Wati Alternatives in 2026 (WhatsApp Business API Tools)",
                description: "Honest comparison of Wati alternatives for WhatsApp Business API. Updated September 2026.",
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
                  { "@type": "ListItem", position: 2, name: "Wati Alternative", item: "https://gopinkaro.com/wati-alternative" },
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
            <div className="flex items-center gap-4">
              <Link href="/#pricing" className="text-sm" style={{ color: "var(--text-secondary)" }}>Pricing</Link>
              <Link href="mailto:hello@gopinkaro.com" className="text-sm font-medium px-4 py-1.5 rounded-lg text-white" style={{ background: "var(--accent)" }}>
                Get Listed
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <nav className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" className="hover:underline">GoPinKaro</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "var(--foreground)" }}>Wati Alternative</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                Updated September 2026
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>6 tools reviewed</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              6 Best Wati Alternatives in 2026
              <br />
              <span style={{ color: "var(--accent)" }}>WhatsApp Business API, Honestly Compared</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              Wati starts at $49/month (~₹4,100) and is WhatsApp-only. If you need lower pricing, INR billing,
              or support for Instagram alongside WhatsApp, these alternatives are worth a look.
            </p>

            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="text-sm font-semibold mb-2">Quick picks:</p>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>India / low budget:</span> ReplyKaro — ₹99/mo, free plan, WhatsApp + Instagram</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>D2C e-commerce:</span> Zoko — Shopify-native cart recovery & checkout flows</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Budget WhatsApp API:</span> Interakt or AiSensy — ₹999/mo with full API access</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Omnichannel teams:</span> Respond.io — all channels in one inbox</li>
              </ul>
            </div>
          </header>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Why People Switch from Wati</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "High starting price", desc: "$49/month minimum — for Indian SMBs that's ₹4,100+/mo with GST on international payments added on top." },
                { title: "WhatsApp only", desc: "Wati has no Instagram or Facebook DM support. If you need multi-channel automation, you're paying for a second tool." },
                { title: "Per-conversation API costs", desc: "On top of the subscription, WhatsApp Business API charges per conversation. Costs add up fast for high-volume support teams." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">The 6 Best Wati Alternatives</h2>
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
                          {tool.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />{pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-secondary)" }}>Cons</p>
                        <ul className="space-y-1.5">
                          {tool.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm">
                              <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />{con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {tool.rank === 1 && (
                    <div className="px-6 py-3 flex items-center justify-between" style={{ background: "var(--accent-dim)", borderTop: "1px solid var(--border)" }}>
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>⭐ Our top pick — ₹99/mo flat, free plan, WhatsApp + Instagram</p>
                      <a href="https://replykaro.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                        Try free <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
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
                { label: "Zoko Alternative", href: "/zoko-alternative" },
                { label: "Interakt Alternative", href: "/interakt-alternative" },
                { label: "Intercom Alternative", href: "/intercom-alternative" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm px-4 py-2 rounded-lg border flex items-center gap-1 hover:border-emerald-300 transition-colors" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                  {link.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl p-8 text-center" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>For tool makers</p>
            <h2 className="font-display text-2xl font-bold mb-3">Is Your Tool a Wati Alternative?</h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              This page gets 90–160 searches/month from teams actively switching from Wati. Get your tool featured and capture that traffic.
            </p>
            <a href="mailto:hello@gopinkaro.com?subject=Get Listed — Wati Alternative Page" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium" style={{ background: "var(--accent)" }}>
              Get Listed <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--text-secondary)" }}>Starts at ₹4,999/month · We rank the page first, you pay when it converts</p>
          </section>
        </main>

        <footer className="mt-16 py-8 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}>
          <p>Built by <Link href="/" className="hover:underline font-medium">GoPinKaro</Link> · We rank alternative pages and let traffic prove the value · <a href="mailto:hello@gopinkaro.com" className="hover:underline">hello@gopinkaro.com</a></p>
        </footer>
      </div>
    </>
  );
}
