import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Best Intercom Alternatives in 2026 (Cheaper Customer Messaging) — GoPinKaro",
  description:
    "Intercom alternatives compared honestly: pricing, WhatsApp support, live chat, and automation. Intercom Essential starts at $29/seat/month but the real bill is far higher — these tools do more for less. Updated September 2026.",
  keywords: [
    "intercom alternative",
    "intercom alternatives",
    "cheaper than intercom",
    "best intercom alternative",
    "intercom alternative for small business",
    "intercom whatsapp alternative",
    "customer messaging platform alternative",
  ],
  openGraph: {
    title: "7 Best Intercom Alternatives in 2026 (Cheaper Customer Messaging)",
    description:
      "Intercom Essential starts at $29/seat/month but Fin AI adds $0.99 per resolved outcome and median annual spend is $36K+. These alternatives give you live chat and automation for far less.",
    type: "article",
  },
  alternates: {
    canonical: "https://gopinkaro.com/intercom-alternative",
  },
};

const TOOLS = [
  {
    rank: 1,
    name: "ReplyKaro",
    tagline: "Best Alternative for Instagram DM Automation (Not Live Chat)",
    badge: "Instagram Automation",
    badgeColor: "bg-pink-100 text-pink-700",
    price: "Free · ₹99/mo ($3/mo) · $9/mo Pro",
    bestFor: "Brands whose customer channel is Instagram — comment-to-DM flows, story reply automation, Follow Gate. Not a live chat replacement; a different channel entirely.",
    channels: ["Instagram DMs only"],
    pros: [
      "Free plan: 1,000 Instagram DMs/month — no credit card",
      "₹99/mo for 30,000 DMs vs Intercom's $29+/seat for live chat",
      "Comment → DM automation when someone comments on your reel",
      "Follow Gate: users must follow before they get your link",
      "Meta verified — no account bans since launch",
    ],
    cons: [
      "Instagram DMs only — no live chat widget, no WhatsApp, no email",
      "Not a direct Intercom replacement — solves a different problem (Instagram vs web chat)",
    ],
    rating: 4.8,
  },
  {
    rank: 2,
    name: "Crisp",
    tagline: "Best Free Live Chat Alternative to Intercom",
    badge: "Best Free Plan",
    badgeColor: "bg-blue-100 text-blue-700",
    price: "Free · $25/mo (Pro)",
    bestFor: "Startups and small businesses wanting free live chat with email, Messenger, and basic automation",
    channels: ["Live Chat", "Email", "Messenger", "WhatsApp (add-on)"],
    pros: [
      "Generous free plan — 2 agents, unlimited conversations",
      "$25/mo Pro is much cheaper than Intercom",
      "All-in-one inbox: live chat, email, Twitter, Messenger",
      "Chatbot builder on paid plans",
      "Mobile app for iOS and Android",
    ],
    cons: ["WhatsApp requires an add-on and separate BSP cost", "Automation is simpler than Intercom's"],
    rating: 4.4,
  },
  {
    rank: 3,
    name: "Freshdesk Messaging",
    tagline: "Best for Support Teams Switching from Intercom",
    badge: "Best Support",
    badgeColor: "bg-purple-100 text-purple-700",
    price: "Free · $15/agent/mo",
    bestFor: "Customer support teams that want omnichannel ticketing plus live chat with Freshworks ecosystem integrations",
    channels: ["Live Chat", "Email", "WhatsApp", "Instagram", "Facebook"],
    pros: [
      "Free plan for unlimited agents (limited features)",
      "Omnichannel: chat, email, social, WhatsApp in one inbox",
      "AI-powered automated triage and routing",
      "Integrates with Freshdesk CRM and Freshsales",
      "SLA management and escalation workflows",
    ],
    cons: ["Can feel complex to set up for small teams", "WhatsApp is an add-on with BSP costs"],
    rating: 4.3,
  },
  {
    rank: 4,
    name: "Tidio",
    tagline: "Best Intercom Alternative for E-commerce",
    badge: "Best E-commerce",
    badgeColor: "bg-orange-100 text-orange-700",
    price: "Free · $29/mo",
    bestFor: "Shopify and WooCommerce stores wanting live chat + Lyro AI chatbot to automate customer FAQs",
    channels: ["Live Chat", "Email", "Messenger", "Instagram"],
    pros: [
      "Free plan with live chat + 3 Lyro AI conversations",
      "Lyro AI can auto-resolve up to 70% of FAQs",
      "Native Shopify and WooCommerce integration",
      "Email marketing + live chat in one tool",
      "Visitor tracking and proactive chat triggers",
    ],
    cons: ["No WhatsApp Business API support", "AI conversation limits on lower plans"],
    rating: 4.3,
  },
  {
    rank: 5,
    name: "HubSpot Live Chat",
    tagline: "Best Free Intercom Alternative with CRM",
    badge: "Best CRM",
    badgeColor: "bg-yellow-100 text-yellow-700",
    price: "Free (with HubSpot CRM)",
    bestFor: "Sales and marketing teams already using or considering HubSpot CRM who want free live chat integrated with their pipeline",
    channels: ["Live Chat", "Email", "Facebook Messenger"],
    pros: [
      "Completely free — included with free HubSpot CRM",
      "All conversations logged to CRM automatically",
      "Chatbot builder with no-code flow builder",
      "Email follow-ups and sequences from the same tool",
      "Scales with HubSpot Marketing Hub if needed",
    ],
    cons: ["Live chat features are basic vs Intercom", "Advanced features require expensive Marketing Hub"],
    rating: 4.2,
  },
  {
    rank: 6,
    name: "Chatwoot",
    tagline: "Best Open-Source Intercom Alternative",
    badge: "Open Source",
    badgeColor: "bg-gray-100 text-gray-700",
    price: "Free (self-hosted) · $19/agent/mo (cloud)",
    bestFor: "Tech-savvy teams wanting full data ownership, self-hosting, and Intercom-like features with zero SaaS lock-in",
    channels: ["Live Chat", "Email", "WhatsApp", "Instagram", "Facebook", "Twitter"],
    pros: [
      "100% open-source — self-host for free, own your data",
      "All Intercom essentials: shared inbox, canned responses, labels",
      "WhatsApp Business API supported natively",
      "Instagram and Facebook DM in one inbox",
      "Active community and regular feature releases",
    ],
    cons: ["Self-hosting requires technical setup", "Cloud plan still cheaper than Intercom but not free"],
    rating: 4.4,
  },
  {
    rank: 7,
    name: "Zendesk (Messaging)",
    tagline: "Best Enterprise Intercom Alternative",
    badge: "Enterprise",
    badgeColor: "bg-red-100 text-red-700",
    price: "$55/agent/mo",
    bestFor: "Enterprise support teams needing SLAs, advanced ticketing, compliance features, and omnichannel messaging at scale",
    channels: ["Live Chat", "Email", "WhatsApp", "Instagram", "Facebook", "Twitter", "SMS"],
    pros: [
      "Industry-standard enterprise support platform",
      "Advanced SLA management and escalation rules",
      "200+ native integrations",
      "Full omnichannel: chat, email, social, messaging",
      "Compliance and security for regulated industries",
    ],
    cons: ["$55/agent/mo is still more expensive than Intercom for small teams", "Complex to configure for simple use cases"],
    rating: 4.1,
  },
];

const FAQS = [
  {
    q: "What is the best Intercom alternative for small businesses?",
    a: "Crisp (free for 2 agents) and HubSpot Live Chat (free with HubSpot CRM) are the best live chat alternatives for small businesses. Tidio ($29/mo) adds Lyro AI that auto-resolves up to 70% of queries — worth it if you have high chat volume. For brands whose primary channel is Instagram rather than web chat, ReplyKaro at ₹99/month handles Instagram DM automation, but it is not a live chat tool.",
  },
  {
    q: "Why are people looking for Intercom alternatives?",
    a: "The advertised $29/seat/month Essential price understates what teams actually pay. Add Fin AI ($0.99 per resolved outcome, 50-outcome monthly minimum = $49.50 minimum just for AI), Copilot ($29/agent/month), usage-based WhatsApp and other channel fees, and the bill scales fast. Vendr data shows the median annual spend at $36,781. Salesforce's acquisition of Intercom (announced June 2026, pending close) has added pricing uncertainty for long-term contracts.",
  },
  {
    q: "Is there a free Intercom alternative?",
    a: "Yes — Crisp (free for 2 agents), HubSpot Live Chat (free with CRM), Tidio (free live chat plan), and Chatwoot (open-source, self-hostable) are all free. Chatwoot is the most complete: it supports WhatsApp Business API, Instagram, Facebook, live chat, and email from a single inbox at zero cost if self-hosted.",
  },
  {
    q: "Does Intercom support WhatsApp?",
    a: "Intercom supports WhatsApp Business as an add-on channel, but live chat and email are its core. If WhatsApp is your primary customer channel, purpose-built tools — Wati ($59/mo), Interakt (₹999/mo), or AiSensy (₹1,500/mo) — give you far more automation capability at a lower price. For Instagram DM automation, ReplyKaro (₹99/mo, Instagram-only) is the specialist option.",
  },
  {
    q: "What is the best open-source alternative to Intercom?",
    a: "Chatwoot is the best open-source Intercom alternative. It is self-hostable, supports WhatsApp Business API, Instagram, Facebook, live chat, email, and Twitter in one inbox — the same coverage as Intercom but with zero lock-in. A managed cloud plan is also available at $19/agent/month if you don't want to self-host.",
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

export default function IntercomAlternativePage() {
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
                headline: "7 Best Intercom Alternatives in 2026 (Cheaper Customer Messaging)",
                description: "Honest comparison of Intercom alternatives for live chat and customer messaging. Updated September 2026.",
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
                  { "@type": "ListItem", position: 2, name: "Intercom Alternative", item: "https://gopinkaro.com/intercom-alternative" },
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
            <span style={{ color: "var(--foreground)" }}>Intercom Alternative</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                Updated September 2026
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>7 tools reviewed</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              7 Best Intercom Alternatives in 2026
              <br />
              <span style={{ color: "var(--accent)" }}>Customer Messaging That Doesn't Cost a Fortune</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              Intercom Essential starts at $29/seat/month (annual billing). Add Fin AI at $0.99 per resolved
              outcome, Copilot at $29/agent/month, and a 10-seat team using AI hits $15K–$80K/year. The
              tools below solve the same problem for far less.
            </p>

            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="text-sm font-semibold mb-2">Quick picks:</p>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Instagram DM automation:</span> ReplyKaro — ₹99/mo ($3/mo), free plan, Instagram-only</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Free live chat:</span> Crisp — free for 2 agents, $25/mo Pro</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Free with CRM:</span> HubSpot Live Chat — free forever with HubSpot CRM</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Open-source:</span> Chatwoot — self-host for free, own your data</li>
              </ul>
            </div>
          </header>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Why Teams Look for Intercom Alternatives</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Expensive at scale", desc: "Intercom Essential at $29/seat/month is just the floor. Fin AI ($0.99/resolved outcome), Copilot ($29/agent/month), and channel fees mean a 10-seat team routinely hits $15K–$80K/year according to Vendr data." },
                { title: "Salesforce acquisition uncertainty", desc: "Salesforce agreed to acquire Intercom for ~$3.6B (announced June 2026, deal pending). Long-term pricing and product direction is unclear, making multi-year contracts riskier." },
                { title: "USD-only billing", desc: "Indian businesses pay 18% GST on USD SaaS invoices plus forex conversion. At $29/seat/month with AI add-ons, effective INR cost gets steep fast." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">The 7 Best Intercom Alternatives</h2>
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
            <h2 className="font-display text-xl font-bold mb-4">More Customer Messaging Comparisons</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "ManyChat Alternative", href: "/manychat-alternative" },
                { label: "Wati Alternative", href: "/wati-alternative" },
                { label: "Interakt Alternative", href: "/interakt-alternative" },
                { label: "HubSpot Alternative", href: "/hubspot-alternative" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm px-4 py-2 rounded-lg border flex items-center gap-1 hover:border-emerald-300 transition-colors" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                  {link.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl p-8 text-center" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>For tool makers</p>
            <h2 className="font-display text-2xl font-bold mb-3">Is Your Tool an Intercom Alternative?</h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              This page targets teams actively searching for Intercom replacements. Get your tool featured and capture that intent traffic.
            </p>
            <a href="mailto:hello@gopinkaro.com?subject=Get Listed — Intercom Alternative Page" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium" style={{ background: "var(--accent)" }}>
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
