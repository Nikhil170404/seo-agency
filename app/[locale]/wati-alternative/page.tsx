import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "6 Best Wati Alternatives in 2026 (WhatsApp Business API Tools) — GoPinKaro",
  description:
    "Wati alternatives compared with real 2026 pricing. Wati Growth is $59/mo plus Meta's per-message fees. These WhatsApp Business API tools cost less. Honest comparison, updated September 2026.",
  keywords: [
    "wati alternative",
    "wati alternatives",
    "wati whatsapp alternative",
    "best wati alternative",
    "wati io alternative",
    "wati alternatives for whatsapp business",
    "cheaper than wati",
    "wati alternative india",
  ],
  openGraph: {
    title: "6 Best Wati Alternatives in 2026 (WhatsApp Business API Tools)",
    description:
      "Wati Growth starts at $59/mo plus Meta message fees. These WhatsApp alternatives give you more for less.",
    type: "article",
  },
  alternates: {
    canonical: "https://gopinkaro.com/wati-alternative",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "Interakt",
    tagline: "Best Budget Wati Alternative for India",
    badge: "Best Value India",
    badgeColor: "bg-emerald-100 text-emerald-700",
    price: "₹999/mo (~$12) · 14-day free trial",
    bestFor: "Indian D2C brands on Shopify wanting WhatsApp Business API for order notifications, cart recovery, and customer support — at 80% less than Wati's USD pricing",
    channels: ["WhatsApp Business API"],
    pros: [
      "₹999/mo Starter vs Wati Growth's $59/mo (~₹4,900)",
      "Quarterly billing available — ₹3,499 for 3 months",
      "Native Shopify and WooCommerce integration",
      "Team shared inbox for customer support",
      "14-day free trial, no credit card needed",
    ],
    cons: ["WhatsApp-only — no Instagram or Messenger", "12–15% markup on Meta's conversation fees", "Fewer automation flows than Wati on the base plan"],
    rating: 4.5,
  },
  {
    rank: 2,
    name: "AiSensy",
    tagline: "Best WhatsApp Broadcast Alternative to Wati",
    badge: "Best Broadcasts",
    badgeColor: "bg-blue-100 text-blue-700",
    price: "Free · ₹1,500/mo Basic · ₹3,200/mo Pro",
    bestFor: "Brands running large WhatsApp broadcast campaigns and retargeting existing customer lists with automation chatbots",
    channels: ["WhatsApp Business API"],
    pros: [
      "Free plan with unlimited chats (limited features)",
      "₹1,500/mo Basic — significantly cheaper than Wati",
      "Bulk broadcast to opted-in contacts at scale",
      "ChatGPT-powered chatbot on paid plans",
      "WhatsApp now charges per-template-message — AiSensy passes through Meta rates transparently",
    ],
    cons: ["WhatsApp-only", "Advanced analytics require higher plans", "Less polished automation builder than Wati"],
    rating: 4.3,
  },
  {
    rank: 3,
    name: "Zoko",
    tagline: "Best WhatsApp Alternative for Shopify D2C",
    badge: "Best for Shopify",
    badgeColor: "bg-purple-100 text-purple-700",
    price: "$49.99/mo Starter · $59.99/mo Plus",
    bestFor: "Shopify stores wanting WhatsApp checkout, cart abandonment recovery, COD confirmations, and campaign flows built for e-commerce",
    channels: ["WhatsApp Business API"],
    pros: [
      "Purpose-built for Shopify — native cart recovery and checkout flows",
      "Plus plan ($59.99/mo) removes per-conversation markup from Starter",
      "COD confirmation and delivery notification automation",
      "Multi-agent team inbox included",
      "Click-to-WhatsApp campaign integration",
    ],
    cons: ["Similar price to Wati at higher tiers", "Instagram is a paid add-on, not included", "Meta shifted to per-message pricing Jan 2026 — costs vary by volume"],
    rating: 4.2,
  },
  {
    rank: 4,
    name: "Gallabox",
    tagline: "Best for WhatsApp + CRM Pipeline",
    badge: "Best CRM Connect",
    badgeColor: "bg-orange-100 text-orange-700",
    price: "₹1,499/mo (~$18)",
    bestFor: "Sales teams who want a WhatsApp inbox connected to a visual CRM pipeline — lead assignment, deal tracking, and auto-routing in one tool",
    channels: ["WhatsApp Business API"],
    pros: [
      "Built-in CRM pipeline view for WhatsApp sales conversations",
      "₹1,499/mo — much cheaper than Wati for sales CRM use cases",
      "Auto-assignment rules for team inboxes",
      "Integrates with Zoho CRM, HubSpot, Salesforce",
      "India-based support team",
    ],
    cons: ["WhatsApp-only", "CRM is basic compared to standalone CRM tools", "Automation builder is simpler than Wati's"],
    rating: 4.1,
  },
  {
    rank: 5,
    name: "Respond.io",
    tagline: "Best Omnichannel Alternative if You Need More Than WhatsApp",
    badge: "Best Omnichannel",
    badgeColor: "bg-indigo-100 text-indigo-700",
    price: "$79/mo Starter",
    bestFor: "Teams managing WhatsApp, Instagram, Facebook, Telegram, and email in one inbox — customer support at scale across every channel",
    channels: ["WhatsApp", "Instagram", "Facebook", "Telegram", "Email", "Live Chat"],
    pros: [
      "True omnichannel inbox — all messaging channels unified",
      "AI-powered routing, auto-assignment, and conversation classification",
      "Advanced workflow builder for complex automation",
      "CRM integrations with Salesforce and HubSpot",
      "Detailed agent performance reporting",
    ],
    cons: ["$79/mo minimum is more expensive than Wati's entry plan", "More complex to set up — not ideal for small teams", "USD billing adds GST overhead for Indian teams"],
    rating: 4.4,
  },
  {
    rank: 6,
    name: "Wati (for context)",
    tagline: "What Wati Actually Costs in 2026",
    badge: "For Reference",
    badgeColor: "bg-gray-100 text-gray-700",
    price: "$59/mo Growth · $119/mo Pro · $279/mo Business",
    bestFor: "Teams that need Wati's specific integrations or whose IT/compliance requirements mandate a specific BSP — and have the budget for it",
    channels: ["WhatsApp Business API"],
    pros: [
      "Reliable WhatsApp Business API BSP with good uptime",
      "1,000 chatbot sessions included on Growth",
      "Flow builder with conditional logic",
      "E-commerce integrations (Shopify, WooCommerce, Razorpay)",
      "Green tick WhatsApp Business Account verification support",
    ],
    cons: [
      "Growth plan $59/mo — plus 20% markup on Meta per-message fees",
      "5-user limit on Growth; more seats cost extra",
      "USD billing — Indian teams pay GST on international invoices",
      "Business plan ($279/mo) needed for full API access and higher limits",
    ],
    rating: 4.0,
  },
];

const FAQS = [
  {
    q: "What is the best Wati alternative for India?",
    a: "Interakt and AiSensy are the top Wati alternatives for India. Interakt starts at ₹999/month with a 14-day free trial and native Shopify integration. AiSensy starts at ₹1,500/month with a free plan available and ChatGPT-powered chatbots on paid plans. Both offer INR billing via UPI/Razorpay, avoiding the GST on USD invoices you'd pay with Wati. Wati Growth is $59/month (~₹4,900) plus per-message fees — Interakt is about 80% cheaper at baseline.",
  },
  {
    q: "How much does Wati actually cost in 2026?",
    a: "Wati has three plans: Growth ($59/month, 5 users, 1,000 chatbot sessions), Pro ($119/month), and Business ($279/month annual). On top of the subscription, Wati adds approximately a 20% markup on Meta's WhatsApp Business API per-message fees — so your actual bill includes both the plan fee and per-message charges. Since January 2026, Meta shifted from per-conversation to per-template-message billing, which changes how these costs add up.",
  },
  {
    q: "Is there a free Wati alternative?",
    a: "AiSensy has a free plan with unlimited chats (limited automation features). Most dedicated WhatsApp Business API tools don't offer a permanent free plan because Meta charges per-message fees that the platform has to absorb or pass through. For a 14-day free trial, Interakt and Gallabox both offer trials without a credit card.",
  },
  {
    q: "What is the cheapest WhatsApp Business API alternative to Wati?",
    a: "Interakt at ₹999/month is the cheapest full WhatsApp Business API alternative for Indian businesses. AiSensy at ₹1,500/month is a close second with a stronger chatbot and more automation features. Both significantly undercut Wati's $59/month Growth plan, especially after factoring in GST on USD invoices.",
  },
  {
    q: "Does Wati support Instagram?",
    a: "No — Wati is WhatsApp-only. If you need Instagram DM automation alongside WhatsApp, Respond.io covers both channels from $79/month. For Instagram-only DM automation, ReplyKaro is purpose-built for it at ₹99/month with a free plan — but it does not support WhatsApp.",
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
                description: "Honest comparison of Wati alternatives with real 2026 pricing. Updated September 2026.",
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
              <span style={{ color: "var(--accent)" }}>WhatsApp Business API, Priced Honestly</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              Wati Growth costs $59/month — that is before the ~20% markup on Meta's per-message fees.
              For Indian businesses especially, the effective monthly cost can be significant. These
              alternatives offer WhatsApp Business API at a much lower starting price.
            </p>

            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="text-sm font-semibold mb-2">Quick picks:</p>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Cheapest with Shopify:</span> Interakt — ₹999/mo, 14-day trial</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Best free plan:</span> AiSensy — free tier, ₹1,500/mo Basic</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Best for Shopify D2C:</span> Zoko — $49.99/mo, WhatsApp checkout flows</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Need Instagram too:</span> Respond.io — $79/mo, WhatsApp + Instagram + more</li>
              </ul>
            </div>
          </header>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Why Teams Switch from Wati</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Real cost is higher than listed", desc: "Wati's $59/mo Growth plan is the starting point, not the ending point. Add the 20% markup on Meta per-message fees and you're looking at a much higher monthly bill depending on volume." },
                { title: "5-user cap on Growth", desc: "The Growth plan allows only 5 users. Once your support team grows beyond that, you're forced to the Pro plan at $119/mo — nearly double." },
                { title: "USD billing for Indian teams", desc: "Indian businesses pay 18% GST on USD SaaS invoices plus forex conversion fees on every payment. Interakt and AiSensy offer INR billing via UPI, which eliminates both." },
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
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>⭐ Top pick — ₹999/mo, INR billing via UPI, 14-day free trial</p>
                      <a href="https://interakt.shop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                        Try free <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mb-12 p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <p className="text-sm font-semibold mb-1">Also looking for Instagram DM automation?</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Wati and all the tools above are WhatsApp-only. If you need Instagram comment-to-DM automation, story reply flows, or Follow Gate automation,{" "}
              <a href="https://replykaro.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: "var(--accent)" }}>ReplyKaro</a>{" "}
              is purpose-built for it — free for 1,000 DMs/mo, ₹99/mo for 30,000. It does not support WhatsApp.
            </p>
          </div>

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
              This page gets consistent traffic from teams actively evaluating WhatsApp Business API platforms. Get your tool in front of that audience.
            </p>
            <a href="mailto:hello@gopinkaro.com?subject=Get Listed — Wati Alternative Page" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium" style={{ background: "var(--accent)" }}>
              Get Listed <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--text-secondary)" }}>Starts at ₹4,999/month · We rank the page, you capture the traffic</p>
          </section>
        </main>

        <footer className="mt-16 py-8 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}>
          <p>Built by <Link href="/" className="hover:underline font-medium">GoPinKaro</Link> · We rank alternative pages and let traffic prove the value · <a href="mailto:hello@gopinkaro.com" className="hover:underline">hello@gopinkaro.com</a></p>
        </footer>
      </div>
    </>
  );
}
