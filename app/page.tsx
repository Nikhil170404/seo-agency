"use client";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  TrendingUp,
  FileText,
  BarChart2,
  ChevronDown,
  Menu,
  X,
  Zap,
  Globe,
  Star,
} from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Study", href: "#case-study" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "315", suffix: "x", label: "Clicks/day growth for Replykaro" },
  { value: "90", suffix: " days", label: "Time to first page rankings" },
  { value: "KD 10", suffix: "", label: "Avg keyword difficulty we target" },
  { value: "2,874", suffix: "", label: "Monthly impressions unlocked" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: FileText,
    title: "We build the page",
    desc: "We research the keyword, write a 2,000+ word comparison page targeting buyers searching for your competitor's alternative. Full SEO — title, meta, schema, FAQ, internal links.",
  },
  {
    step: "02",
    icon: TrendingUp,
    title: "It ranks on Google",
    desc: "We submit, track, and optimize until your page hits top 10. Most pages rank within 30–60 days. We target keyword difficulty under 30 so ranking is predictable, not a gamble.",
  },
  {
    step: "03",
    icon: BarChart2,
    title: "You get inbound traffic",
    desc: "Buyers already switching from your competitor land on your page. No cold outreach. No ads. Pure organic traffic from people in buying mode — converting at 7.5% vs 1–2% for regular content.",
  },
];

const INDUSTRIES = [
  { category: "Messaging & Automation", examples: ["manychat alternative", "zoko alternative", "interakt alternative"], color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { category: "CRM & Sales", examples: ["hubspot alternative", "salesforce alternative", "zoho crm alternative"], color: "bg-blue-50 text-blue-700 border-blue-200" },
  { category: "Customer Support", examples: ["zendesk alternative", "freshdesk alternative", "intercom alternative"], color: "bg-violet-50 text-violet-700 border-violet-200" },
  { category: "SEO Tools", examples: ["ahrefs alternative", "semrush alternative", "moz alternative"], color: "bg-amber-50 text-amber-700 border-amber-200" },
  { category: "HR Tech", examples: ["bamboohr alternative", "darwinbox alternative", "workday alternative"], color: "bg-rose-50 text-rose-700 border-rose-200" },
  { category: "Project Management", examples: ["jira alternative", "asana alternative", "notion alternative"], color: "bg-sky-50 text-sky-700 border-sky-200" },
];

const CASE_STUDY_METRICS = [
  { label: "Clicks/day at start", value: "5" },
  { label: "Clicks/day at 90 days", value: "315" },
  { label: "Total impressions/day", value: "2,976" },
  { label: "Avg. keyword position", value: "8.4" },
  { label: "Keywords ranked", value: "109" },
  { label: "Organic traffic value", value: "$41/mo" },
];

const PLANS = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    desc: "For early-stage SaaS getting into SEO for the first time.",
    highlight: false,
    features: [
      "3 alternative pages built & published",
      "Keyword research included",
      "Full SEO — title, meta, schema",
      "Monthly ranking report",
      "1 revision per page",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    desc: "For companies ready to own their category's comparison traffic.",
    highlight: true,
    features: [
      "10 alternative pages built & published",
      "Competitor monitoring alerts",
      "Weekly rank tracking dashboard",
      "Content refresh when rankings drop",
      "Priority Slack support",
      "Unlimited revisions",
    ],
    cta: "Start Growing",
  },
  {
    name: "Agency",
    price: "$799",
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
    q: "How quickly will my pages rank?",
    a: "Most pages we build hit the top 10 within 30–60 days. We specifically target keywords with a difficulty score under 30 — meaning less competition and faster rankings. Your GSC data will show impressions within the first 2 weeks.",
  },
  {
    q: "Do you write the content or do I?",
    a: "We handle everything — keyword research, writing the 2,000+ word page, SEO metadata, FAQ section, comparison tables, and schema markup. You provide your product's features and pricing. That's it.",
  },
  {
    q: "What if the page doesn't rank?",
    a: "We monitor and optimize every page. If a page isn't climbing after 60 days, we rewrite, refresh, or rebuild it at no extra cost. We don't stop until it ranks.",
  },
  {
    q: "Will this work for my industry?",
    a: "If your competitor has buyers searching '[competitor] alternative' on Google — and almost every SaaS tool does — this works. We've identified opportunities across CRM, HR tech, messaging tools, SEO tools, customer support, and more.",
  },
  {
    q: "Is $99/month really enough to get results?",
    a: "Yes for the Starter plan. We focus on low-competition keywords with real volume. One ranked page bringing 50 visitors/month of buyers switching from your competitor is worth more than 5,000 visits of informational traffic.",
  },
  {
    q: "Do you publish the pages on my website?",
    a: "Yes. We publish directly to your domain via WordPress, Webflow, or as clean HTML you can drop anywhere. The pages live on YOUR domain — not ours — so all SEO authority stays with you.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#059669] flex items-center justify-center">
              <Zap size={14} className="text-white" fill="white" />
            </div>
            <span className="font-display font-700 text-lg tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}>
              GoPinKaro
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors font-medium">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
              View Pricing
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold bg-[#059669] text-white px-4 py-2 rounded-lg hover:bg-[#047857] transition-colors"
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-[#0F172A]" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#pricing" className="text-sm font-semibold bg-[#059669] text-white px-4 py-2.5 rounded-lg text-center">
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] text-[#059669] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-[#D1FAE5]">
            <Star size={12} fill="currentColor" />
            Proven: 0 → 315 clicks/day in 90 days for Replykaro
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-balance"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Turn competitor
            <br />
            searches into{" "}
            <span className="text-[#059669]">your customers</span>
          </h1>

          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl">
            We build and rank{" "}
            <span className="text-[#0F172A] font-medium">"[Competitor] Alternative"</span> pages
            for SaaS companies. Buyers already switching from your competitors
            land on your page — not theirs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-[#059669] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[#047857] transition-colors text-sm"
            >
              Start ranking now
              <ArrowRight size={16} />
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] font-semibold px-6 py-3.5 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors text-sm"
            >
              See the proof
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl font-bold text-[#059669] mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.value}
                <span className="text-xl">{s.suffix}</span>
              </div>
              <div className="text-sm text-[#64748B] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">The problem</p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              2,874 people searched<br />"Zoko alternative"<br />last month.
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">
              Every one of them was ready to switch tools. Their credit cards were out. And your product wasn't on the page they found.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              "Alternative" and "vs" searches are the highest-converting traffic on the internet — 7.5% conversion rate vs 1–2% for everything else. These are buyers, not browsers.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 space-y-4">
            {[
              { query: "zoko alternative", vol: "2,874 impressions/mo", kd: "Low KD" },
              { query: "interakt alternative", vol: "729 impressions/mo", kd: "Low KD" },
              { query: "manychat alternative", vol: "480 searches/mo", kd: "KD 10" },
              { query: "ahrefs alternative", vol: "27,000 searches/mo", kd: "Medium KD" },
              { query: "freshdesk alternative", vol: "8,000 searches/mo", kd: "Medium KD" },
            ].map((item) => (
              <div key={item.query} className="flex items-center justify-between py-3 border-b border-[#E2E8F0] last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#059669]" />
                  <span className="font-mono text-sm text-[#0F172A]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.query}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#64748B]">{item.vol}</span>
                  <span className="bg-[#D1FAE5] text-[#059669] font-semibold px-2 py-0.5 rounded">
                    {item.kd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">How it works</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-balance"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Three steps. One outcome: rankings.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-bold text-[#059669]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                  <step.icon size={16} className="text-[#059669]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">What we rank</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-balance"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Every category. Every competitor.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind) => (
            <div key={ind.category} className="border border-[#E2E8F0] rounded-xl p-6 hover:border-[#059669] transition-colors group">
              <h3
                className="font-bold text-base mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {ind.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {ind.examples.map((ex) => (
                  <span
                    key={ex}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${ind.color}`}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-[#34D399] uppercase tracking-widest mb-4">Case study</p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Replykaro: 0 to 315 clicks/day in 90 days
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Replykaro is an Instagram DM automation tool. When we started, it had 5 clicks per day. No brand keywords, no backlinks, no paid ads.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We targeted low-competition "alternative" and "free tool" keywords — exactly the searches where buyers are switching from paid tools to free ones. In 90 days, it hit 315 clicks/day with 109 keywords ranking on Google.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-[#34D399] font-medium">
                <Globe size={14} />
                replykaro.com · Live today
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CASE_STUDY_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">Pricing</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Simple, results-based pricing
          </h2>
          <p className="text-[#64748B] max-w-md mx-auto">
            No retainers. No agency fluff. Pay for pages that rank — and if they don't, we fix them for free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.highlight
                  ? "bg-[#059669] text-white border-[#059669] shadow-xl shadow-emerald-200"
                  : "bg-white border-[#E2E8F0]"
              }`}
            >
              <div className="mb-8">
                {plan.highlight && (
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-3">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-emerald-100" : "text-[#64748B]"}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.highlight ? "text-emerald-100" : "text-[#64748B]"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-emerald-200" : "text-[#059669]"}`}
                      strokeWidth={2.5}
                    />
                    <span className={plan.highlight ? "text-emerald-50" : "text-[#475569]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@gopinkaro.com"
                className={`w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#059669] hover:bg-emerald-50"
                    : "bg-[#059669] text-white hover:bg-[#047857]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#64748B] mt-8">
          Based in India? All plans available in INR.{" "}
          <a href="mailto:hello@gopinkaro.com" className="text-[#059669] font-medium underline underline-offset-2">
            Contact us for INR pricing.
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">FAQ</p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Questions we get asked
            </h2>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm text-[#0F172A] pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#64748B] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <div className="bg-[#ECFDF5] border border-[#D1FAE5] rounded-2xl px-8 py-14 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A] text-balance"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Your competitor's alternative keyword<br />is ranking right now.
          </h2>
          <p className="text-[#64748B] mb-8 max-w-md mx-auto">
            Every day without the page is another day of buyers going to someone else. Let's fix that.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#059669] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors"
          >
            Get your first page ranked
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#059669] flex items-center justify-center">
              <Zap size={12} className="text-white" fill="white" />
            </div>
            <span
              className="font-bold text-sm"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              GoPinKaro
            </span>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} GoPinKaro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
