import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, ArrowRight, ChevronRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "6 Best ManyChat Alternatives in 2026 (Instagram & WhatsApp DM Tools) — GoPinKaro",
  description:
    "ManyChat cut its free plan to 25 contacts in March 2026. These alternatives give you Instagram DM automation, WhatsApp broadcasts, and chatbot flows — for less. Honest comparison, updated September 2026.",
  keywords: [
    "manychat alternative",
    "manychat alternatives",
    "best manychat alternative",
    "manychat alternative free",
    "manychat instagram alternative",
    "manychat whatsapp alternative",
    "instagram dm automation tool",
    "cheaper than manychat",
  ],
  openGraph: {
    title: "6 Best ManyChat Alternatives in 2026 (Instagram & WhatsApp DM Tools)",
    description:
      "ManyChat's free plan now caps you at 25 contacts. These alternatives actually let you grow.",
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
    tagline: "Best ManyChat Alternative for Instagram DMs",
    badge: "Best for Instagram",
    badgeColor: "bg-emerald-100 text-emerald-700",
    price: "Free · ₹99/mo ($3/mo) · $9/mo Pro",
    bestFor: "Creators and brands doing Instagram comment-to-DM automation, story reply flows, and follower gating — without the ManyChat price tag",
    channels: ["Instagram DMs", "Comment-to-DM", "Story Replies"],
    pros: [
      "Free plan: 1,000 DMs/month — vs ManyChat's 25-contact cap",
      "Starter ₹99/mo ($3/mo globally) for 30,000 DMs/month",
      "Comment → DM automation: trigger DMs from post or reel comments",
      "Follow Gate: user must follow before they get the link",
      "Meta verified — no account bans since launch",
    ],
    cons: [
      "Instagram-only — no WhatsApp, Facebook Messenger, or email",
      "Not suitable if ManyChat's WhatsApp or SMS features are why you're here",
    ],
    rating: 4.8,
    note: "instagram",
  },
  {
    rank: 2,
    name: "Tidio",
    tagline: "Best for Instagram + Live Chat in One Tool",
    badge: "Best Combo",
    badgeColor: "bg-blue-100 text-blue-700",
    price: "Free · $29/mo",
    bestFor: "E-commerce brands wanting Instagram DM automation plus a live chat widget and Lyro AI to handle FAQs automatically",
    channels: ["Instagram", "Live Chat", "Email", "Messenger"],
    pros: [
      "Instagram DM automation included in paid plans",
      "Lyro AI resolves up to 70% of support queries automatically",
      "Native Shopify and WooCommerce integration",
      "$29/mo covers live chat + AI + Instagram in one bill",
      "Free plan with live chat available",
    ],
    cons: ["No WhatsApp Business API on any plan", "Instagram automation is not the core feature — live chat is"],
    rating: 4.3,
    note: null,
  },
  {
    rank: 3,
    name: "Chatfuel",
    tagline: "Best WhatsApp + Instagram Alternative to ManyChat",
    badge: "Best WhatsApp",
    badgeColor: "bg-purple-100 text-purple-700",
    price: "$29/mo (Instagram) · $42/mo (WhatsApp)",
    bestFor: "Businesses running both Instagram and WhatsApp automation who want a direct ManyChat replacement with similar flow builder",
    channels: ["Instagram", "WhatsApp", "Facebook Messenger"],
    pros: [
      "Instagram and WhatsApp automation in one platform",
      "Visual flow builder very similar to ManyChat",
      "AI chatbot with GPT-4 integration",
      "WhatsApp Business API officially supported",
      "14-day free trial, no credit card",
    ],
    cons: ["Separate plans for Instagram and WhatsApp — costs add up", "Smaller integration library than ManyChat"],
    rating: 4.2,
    note: null,
  },
  {
    rank: 4,
    name: "MobileMonkey (now Customers.ai)",
    tagline: "Best for Multi-Channel Outbound Automation",
    badge: "Multi-Channel",
    badgeColor: "bg-orange-100 text-orange-700",
    price: "$199/mo",
    bestFor: "Businesses wanting to identify website visitors and reach them via Instagram, Facebook, and email outbound sequences",
    channels: ["Instagram", "Facebook", "Email", "SMS"],
    pros: [
      "Identifies anonymous website visitors for retargeting",
      "Instagram DM automation at scale",
      "Unified inbox for all channels",
      "Email drip sequences integrated with social outreach",
      "Strong B2B and lead-gen use cases",
    ],
    cons: ["$199/mo is significantly more expensive than ManyChat Pro", "Overkill for simple Instagram comment automation"],
    rating: 4.0,
    note: null,
  },
  {
    rank: 5,
    name: "AiSensy",
    tagline: "Best ManyChat Alternative for WhatsApp in India",
    badge: "Best WhatsApp India",
    badgeColor: "bg-yellow-100 text-yellow-700",
    price: "Free · ₹1,500/mo Basic · $45/mo",
    bestFor: "Indian businesses that need ManyChat's functionality but specifically for WhatsApp — broadcasts, chatbots, and Shopify notifications",
    channels: ["WhatsApp Business API"],
    pros: [
      "Free plan with unlimited chats available",
      "₹1,500/mo ($18) Basic — much cheaper than ManyChat for WhatsApp",
      "Bulk WhatsApp broadcasts to verified opt-in contacts",
      "ChatGPT-powered WhatsApp chatbot on paid plans",
      "Shopify abandoned cart recovery via WhatsApp",
    ],
    cons: ["WhatsApp-only — no Instagram or Messenger support", "Not a direct ManyChat replacement if you use multiple channels"],
    rating: 4.2,
    note: "whatsapp",
  },
  {
    rank: 6,
    name: "Manychat (for context)",
    tagline: "What Changed in ManyChat's 2026 Pricing",
    badge: "For Reference",
    badgeColor: "bg-gray-100 text-gray-700",
    price: "Free (25 contacts) · Pro $39/mo · Business $99/mo · Advanced $199/mo",
    bestFor: "Teams that genuinely need WhatsApp + Instagram + SMS + email automation in one tool and have the budget for it",
    channels: ["Instagram", "WhatsApp", "Facebook", "SMS", "Email"],
    pros: [
      "Most complete multi-channel automation platform",
      "Instagram, WhatsApp, Facebook, SMS, email — all in one",
      "Largest library of integrations and templates",
      "Strong AI chatbot on Pro+ plans",
      "Established platform with proven ROI for high-volume campaigns",
    ],
    cons: [
      "Free plan cut from 1,000 to 25 active contacts in March 2026",
      "Pro $39/mo — plus $29/mo AI add-on, plus Meta WhatsApp fees on top",
      "Actual monthly bill is typically 2-4× the advertised plan price",
      "USD-only billing — Indian users pay GST on international transactions",
    ],
    rating: 4.1,
    note: null,
  },
];

const FAQS = [
  {
    q: "What happened to ManyChat's free plan in 2026?",
    a: "ManyChat cut its free plan from 1,000 active contacts to just 25 active contacts in March 2026 when it launched a new five-tier pricing model. This made the free plan nearly unusable for most businesses. The new Essential plan starts at $17/month, Pro at $39/month, Business at $99/month, and Advanced at $199/month — each with contact limits and separate add-on fees for AI and WhatsApp messaging.",
  },
  {
    q: "What is the best free ManyChat alternative for Instagram?",
    a: "ReplyKaro is the best free alternative for Instagram DM automation. Its free plan includes 1,000 DMs per month — 40× more than ManyChat's current free plan. It handles comment-to-DM automation, story reply flows, and Follow Gate (where users must follow before getting your link). It's Instagram-only — if you also need WhatsApp or Facebook, Chatfuel or AiSensy are better options.",
  },
  {
    q: "Is there a ManyChat alternative that supports WhatsApp?",
    a: "Yes. Chatfuel ($42/month) supports WhatsApp Business API plus Instagram and Messenger, with a flow builder similar to ManyChat. AiSensy (₹1,500/month) is the best WhatsApp alternative for Indian businesses. Wati ($59/month) and Interakt (₹999/month) are also strong WhatsApp-only options with better pricing than ManyChat for WhatsApp use cases.",
  },
  {
    q: "What is the cheapest ManyChat alternative?",
    a: "For Instagram-only automation, ReplyKaro at ₹99/month ($3/month globally) is the cheapest option with meaningful features — 30,000 DMs per month, comment automation, Follow Gate, and story automation. For WhatsApp, AiSensy at ₹1,500/month Basic or Interakt at ₹999/month are the cheapest full WhatsApp Business API alternatives.",
  },
  {
    q: "What are ManyChat's hidden costs in 2026?",
    a: "Beyond the plan price, ManyChat charges separately for: the AI add-on ($29/month extra), Meta's WhatsApp per-template-message fees (each marketing message costs around ₹1.09 in India), SMS costs ($0.01–$0.03 per message), and contact overage at $0.018–$0.025 per contact over your plan limit. Most growing businesses end up paying 2–4× the advertised plan price.",
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

export default function ManyChatAlternativePage() {
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
                headline: "6 Best ManyChat Alternatives in 2026 (Instagram & WhatsApp DM Tools)",
                description: "Honest comparison of ManyChat alternatives after the March 2026 pricing change. Updated September 2026.",
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
                  { "@type": "ListItem", position: 2, name: "ManyChat Alternative", item: "https://gopinkaro.com/manychat-alternative" },
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
            <span style={{ color: "var(--foreground)" }}>ManyChat Alternative</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                Updated September 2026
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>6 tools reviewed</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              6 Best ManyChat Alternatives in 2026
              <br />
              <span style={{ color: "var(--accent)" }}>After the Free Plan Got Gutted</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
              ManyChat slashed its free plan from 1,000 to 25 active contacts in March 2026 and added a
              five-tier pricing model where the real bill (plan + AI add-on + Meta fees) is typically
              2–4× what the pricing page says. These alternatives are worth a look.
            </p>

            <div className="p-4 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <p className="text-sm font-semibold mb-2">What you actually need first:</p>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Instagram DMs only:</span> ReplyKaro — free for 1,000 DMs/mo, ₹99/mo for 30,000</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>WhatsApp in India:</span> AiSensy (₹1,500/mo) or Interakt (₹999/mo)</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Instagram + WhatsApp:</span> Chatfuel — $29/mo Instagram, $42/mo WhatsApp</li>
                <li><span className="font-medium" style={{ color: "var(--foreground)" }}>Instagram + live chat:</span> Tidio — $29/mo with Lyro AI</li>
              </ul>
            </div>
          </header>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Why People Are Moving Off ManyChat</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Free plan is now useless", desc: "25 active contacts is not a free plan — it's a demo. The old 1,000-contact free plan attracted users; the new one doesn't. If you were on the old free plan, you're now paying or leaving." },
                { title: "Real cost is 2–4× the plan", desc: "Add the $29/mo AI add-on, Meta's per-template-message fees for WhatsApp (₹1.09 per marketing message in India), SMS costs, and contact overage charges. The $39/mo Pro plan costs most teams $80–$150/mo." },
                { title: "USD billing hits Indian teams hard", desc: "Indian users pay GST on USD SaaS invoices plus forex conversion on top. That $39/mo plan becomes closer to ₹4,000/mo after tax and conversion — before any usage charges." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6">The 6 Best ManyChat Alternatives</h2>
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
                    {tool.note === "instagram" && (
                      <p className="text-xs px-3 py-1.5 rounded-lg mb-3 inline-block" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                        Instagram-only — no WhatsApp or Messenger
                      </p>
                    )}
                    {tool.note === "whatsapp" && (
                      <p className="text-xs px-3 py-1.5 rounded-lg mb-3 inline-block" style={{ background: "#EFF6FF", color: "#1D4ED8" }}>
                        WhatsApp-only — no Instagram DM support
                      </p>
                    )}
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
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>⭐ Free for 1,000 DMs/mo — ₹99/mo for 30,000. Instagram-only.</p>
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
            <h2 className="font-display text-xl font-bold mb-4">Related Comparisons</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Wati Alternative", href: "/wati-alternative" },
                { label: "Interakt Alternative", href: "/interakt-alternative" },
                { label: "Zoko Alternative", href: "/zoko-alternative" },
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
            <h2 className="font-display text-2xl font-bold mb-3">Is Your Tool a ManyChat Alternative?</h2>
            <p className="text-sm mb-6 mx-auto max-w-md" style={{ color: "var(--text-secondary)" }}>
              This page gets steady traffic from teams actively switching away from ManyChat after the March 2026 pricing change. Get your tool featured.
            </p>
            <a href="mailto:hello@gopinkaro.com?subject=Get Listed — ManyChat Alternative Page" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium" style={{ background: "var(--accent)" }}>
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
