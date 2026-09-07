"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  TrendingUp,
  FileText,
  BarChart2,
  ChevronDown,
  Menu,
  X,
  Zap,
  Globe,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const INDUSTRIES = [
  {
    category: "Messaging & Automation",
    examples: [
      { label: "manychat alternative", href: "/manychat-alternative" },
      { label: "zoko alternative", href: "/zoko-alternative" },
      { label: "interakt alternative", href: "/interakt-alternative" },
    ],
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    hoverColor: "hover:bg-emerald-100 hover:border-emerald-300",
  },
  {
    category: "CRM & Sales",
    examples: [
      { label: "hubspot alternative", href: "/hubspot-alternative" },
      { label: "salesforce alternative", href: "/salesforce-alternative" },
      { label: "zoho crm alternative", href: "/zoho-crm-alternative" },
    ],
    color: "bg-blue-50 text-blue-700 border-blue-200",
    hoverColor: "hover:bg-blue-100 hover:border-blue-300",
  },
  {
    category: "Customer Support",
    examples: [
      { label: "zendesk alternative", href: "/zendesk-alternative" },
      { label: "freshdesk alternative", href: "/freshdesk-alternative" },
      { label: "intercom alternative", href: "/intercom-alternative" },
    ],
    color: "bg-violet-50 text-violet-700 border-violet-200",
    hoverColor: "hover:bg-violet-100 hover:border-violet-300",
  },
  {
    category: "SEO Tools",
    examples: [
      { label: "ahrefs alternative", href: "/ahrefs-alternative" },
      { label: "semrush alternative", href: "/semrush-alternative" },
      { label: "moz alternative", href: "/moz-alternative" },
    ],
    color: "bg-amber-50 text-amber-700 border-amber-200",
    hoverColor: "hover:bg-amber-100 hover:border-amber-300",
  },
  {
    category: "HR Tech",
    examples: [
      { label: "bamboohr alternative", href: "/bamboohr-alternative" },
      { label: "darwinbox alternative", href: "/darwinbox-alternative" },
      { label: "workday alternative", href: "/workday-alternative" },
    ],
    color: "bg-rose-50 text-rose-700 border-rose-200",
    hoverColor: "hover:bg-rose-100 hover:border-rose-300",
  },
  {
    category: "Project Management",
    examples: [
      { label: "jira alternative", href: "/jira-alternative" },
      { label: "asana alternative", href: "/asana-alternative" },
      { label: "notion alternative", href: "/notion-alternative" },
    ],
    color: "bg-sky-50 text-sky-700 border-sky-200",
    hoverColor: "hover:bg-sky-100 hover:border-sky-300",
  },
];

const CASE_STUDY_METRICS = [
  { label: "Clicks/day at start", value: "5" },
  { label: "Clicks/day at 90 days", value: "315" },
  { label: "Total impressions/day", value: "2,976" },
  { label: "Avg. keyword position", value: "8.4" },
  { label: "Keywords ranked", value: "109" },
  { label: "Organic traffic value", value: "$41/mo" },
];

const HOW_IT_WORKS_ICONS = [FileText, TrendingUp, BarChart2];

/* Mini GSC growth chart — pure inline SVG, no library */
function GrowthChart() {
  const points = "20,130 60,128 100,122 140,115 180,100 220,82 260,60 300,38 340,22 380,14";
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A0F1E] border border-white/10 p-6 shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest mb-0.5">Google Search Console</p>
          <p className="text-sm font-semibold text-white">replykaro.com · Clicks (90 days)</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#34D399] font-mono">+6,200%</p>
          <p className="text-[10px] text-white/40">vs. period start</p>
        </div>
      </div>

      {/* Chart area */}
      <svg viewBox="0 0 400 150" className="w-full" preserveAspectRatio="none" style={{ height: 120 }}>
        {/* Grid lines */}
        {[30, 70, 110].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* Fill area */}
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`20,150 ${points} 380,150`}
          fill="url(#chartFill)"
        />
        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#34D399"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-line"
        />
        {/* End dot */}
        <circle cx="380" cy="14" r="4" fill="#34D399" />
        <circle cx="380" cy="14" r="8" fill="#34D399" fillOpacity="0.25" />
      </svg>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#34D399]" />
          <span className="text-[11px] text-white/50">Day 1: 5 clicks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-white/50">Day 90: 315 clicks</span>
          <div className="w-2 h-2 rounded-full bg-[#34D399]" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navLinks = [
    { label: "Comparisons", href: "#comparisons" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.caseStudy"), href: "#case-study" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  const stats = [
    { value: "315×", label: t("stats.clicks") },
    { value: "90d", label: t("stats.days") },
    { value: "KD 10", label: t("stats.kd") },
    { value: "2,874", label: t("stats.impressions") },
  ];

  const howItWorks = [
    { step: "01", titleKey: "howItWorks.step1title", descKey: "howItWorks.step1desc" },
    { step: "02", titleKey: "howItWorks.step2title", descKey: "howItWorks.step2desc" },
    { step: "03", titleKey: "howItWorks.step3title", descKey: "howItWorks.step3desc" },
  ];

  const plans = [
    {
      nameKey: "pricing.starter.name",
      priceKey: "pricing.starter.price",
      periodKey: "pricing.starter.period",
      descKey: "pricing.starter.desc",
      ctaKey: "pricing.starter.cta",
      highlight: false,
      featureKeys: [
        "pricing.starter.f1",
        "pricing.starter.f2",
        "pricing.starter.f3",
        "pricing.starter.f4",
        "pricing.starter.f5",
      ],
    },
    {
      nameKey: "pricing.growth.name",
      priceKey: "pricing.growth.price",
      periodKey: "pricing.growth.period",
      descKey: "pricing.growth.desc",
      ctaKey: "pricing.growth.cta",
      highlight: true,
      featureKeys: [
        "pricing.growth.f1",
        "pricing.growth.f2",
        "pricing.growth.f3",
        "pricing.growth.f4",
        "pricing.growth.f5",
        "pricing.growth.f6",
      ],
    },
    {
      nameKey: "pricing.agency.name",
      priceKey: "pricing.agency.price",
      periodKey: "pricing.agency.period",
      descKey: "pricing.agency.desc",
      ctaKey: "pricing.agency.cta",
      highlight: false,
      featureKeys: [
        "pricing.agency.f1",
        "pricing.agency.f2",
        "pricing.agency.f3",
        "pricing.agency.f4",
        "pricing.agency.f5",
        "pricing.agency.f6",
      ],
    },
  ];

  const faqs = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
    { qKey: "faq.q4", aKey: "faq.a4" },
    { qKey: "faq.q5", aKey: "faq.a5" },
    { qKey: "faq.q6", aKey: "faq.a6" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0F1E]">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E1E5EE]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[60px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-[#047857] flex items-center justify-center">
              <Zap size={13} className="text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-[15px] tracking-tight">
              GoPinKaro
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link text-[13px] text-[#5A6478] hover:text-[#0A0F1E] transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#pricing"
              className="text-[13px] font-semibold bg-[#047857] text-white px-4 py-2 rounded-lg hover:bg-[#065f46] transition-colors inline-flex items-center gap-1.5"
            >
              {t("nav.getStarted")}
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[#5A6478]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E1E5EE] bg-white px-5 pt-4 pb-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-[#0A0F1E]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="text-sm font-semibold bg-[#047857] text-white px-4 py-3 rounded-lg text-center"
            >
              {t("nav.getStarted")}
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-10 md:pt-20 md:pb-20">
        <div className="grid md:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em] mb-5 md:mb-7">
              {t("hero.badge")}
            </p>

            <h1
              className="font-display font-bold leading-[1.04] tracking-tight mb-5 md:mb-6"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            >
              {t("hero.headline1")}
              <br />
              {t("hero.headline2")}{" "}
              <span className="text-[#047857]">{t("hero.headline3")}</span>
            </h1>

            <p className="text-[15px] md:text-[17px] text-[#5A6478] leading-[1.7] mb-8 md:mb-10 max-w-lg">
              {t("hero.subheadline")}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#047857] text-white font-semibold px-5 py-3 md:px-6 md:py-3.5 rounded-xl hover:bg-[#065f46] transition-colors text-sm"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight size={15} />
              </a>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 text-[#0A0F1E] font-semibold px-5 py-3 md:px-6 md:py-3.5 rounded-xl border border-[#E1E5EE] hover:border-[#C4CADB] hover:bg-[#F7F8FA] transition-colors text-sm"
              >
                {t("hero.ctaSecondary")}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right — GSC growth chart */}
          <div className="w-full">
            <GrowthChart />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="border-y border-[#E1E5EE]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E1E5EE]">
            {stats.map((s) => (
              <div key={s.label} className="py-7 px-6 bg-white">
                <p className="font-display font-bold text-[1.75rem] md:text-[2rem] text-[#047857] leading-none mb-2 stat-ticker">
                  {s.value}
                </p>
                <p className="text-[12px] md:text-[13px] text-[#5A6478] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="md:sticky md:top-24">
            <p className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em] mb-5">
              {t("problem.label")}
            </p>
            <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] leading-[1.1] mb-6 text-balance">
              {t("problem.headline")}
            </h2>
            <p className="text-[#5A6478] text-base leading-relaxed mb-4">
              {t("problem.p1")}
            </p>
            <p className="text-[#5A6478] text-base leading-relaxed">
              {t("problem.p2")}
            </p>
          </div>

          {/* Keyword data table */}
          <div>
            <div className="rounded-2xl border border-[#E1E5EE] overflow-hidden overflow-x-auto">
              <div className="px-5 py-3.5 bg-[#F7F8FA] border-b border-[#E1E5EE] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#96A0B5] uppercase tracking-widest">Keyword</span>
                <div className="flex items-center gap-8">
                  <span className="text-[11px] font-semibold text-[#96A0B5] uppercase tracking-widest">Volume</span>
                  <span className="text-[11px] font-semibold text-[#96A0B5] uppercase tracking-widest">KD</span>
                </div>
              </div>
              {[
                { query: "zoko alternative", vol: "2,874/mo", kd: "Low", kdClass: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                { query: "interakt alternative", vol: "729/mo", kd: "Low", kdClass: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                { query: "manychat alternative", vol: "480/mo", kd: "KD 10", kdClass: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                { query: "ahrefs alternative", vol: "27,000/mo", kd: "Med", kdClass: "text-amber-700 bg-amber-50 border-amber-200" },
                { query: "freshdesk alternative", vol: "8,000/mo", kd: "Med", kdClass: "text-amber-700 bg-amber-50 border-amber-200" },
              ].map((item, i) => (
                <div
                  key={item.query}
                  className="flex items-center justify-between px-5 py-4 border-b border-[#ECF0F6] last:border-0 hover:bg-[#F7F8FA] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-medium text-[#96A0B5] w-4">{i + 1}</span>
                    <span className="text-sm font-medium text-[#0A0F1E] font-mono">
                      {item.query}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-[#5A6478]">{item.vol}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${item.kdClass}`}>
                      {item.kd}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-[#96A0B5] mt-3 pl-1">
              Search volumes from Ahrefs · India + Global
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="border-t border-[#E1E5EE] bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-16">
            <div>
              <p className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em] mb-4">
                {t("howItWorks.label")}
              </p>
              <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] leading-[1.1] text-balance">
                {t("howItWorks.headline")}
              </h2>
            </div>
            <a
              href="#pricing"
              className="shrink-0 text-sm font-semibold text-[#047857] inline-flex items-center gap-1.5 hover:underline underline-offset-4"
            >
              See pricing <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#E1E5EE] rounded-2xl overflow-hidden border border-[#E1E5EE]">
            {howItWorks.map((step, i) => {
              const Icon = HOW_IT_WORKS_ICONS[i];
              return (
                <div key={step.step} className="bg-white p-6 md:p-10">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-display font-bold text-[3.5rem] leading-none text-[#EFF1F5] select-none">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#ECFDF5] flex items-center justify-center">
                      <Icon size={17} className="text-[#047857]" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-[1.15rem] mb-3">
                    {t(step.titleKey as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-[#5A6478] text-sm leading-relaxed">
                    {t(step.descKey as Parameters<typeof t>[0])}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="comparisons" className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em] mb-4">
              {t("industries.label")}
            </p>
            <h2 className="font-display font-bold text-[2rem] leading-[1.1] mb-6 text-balance">
              {t("industries.headline")}
            </h2>
            <p className="text-[#5A6478] text-sm leading-relaxed">
              We rank alternative pages across every major SaaS vertical — starting with the ones your buyers already search.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.category}
                className="border border-[#E1E5EE] rounded-xl p-5 hover:border-[#047857]/40 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-[13px] text-[#0A0F1E] mb-3.5">
                  {ind.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ind.examples.map((ex) => (
                    <Link
                      key={ex.label}
                      href={ex.href}
                      className={`tag-pill text-[11px] font-medium px-2.5 py-1 rounded-full border ${ind.color} ${ind.hoverColor}`}
                    >
                      {ex.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section id="case-study" className="bg-[#0A0F1E]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-24">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-10 md:mb-16 md:pb-16 border-b border-white/10">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold text-[#34D399] uppercase tracking-[0.14em] mb-4">
                {t("caseStudy.label")}
              </p>
              <h2 className="font-display font-bold text-white leading-[1.1] mb-5"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                {t("caseStudy.headline")}
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed">
                {t("caseStudy.p1")}
              </p>
            </div>
            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 text-sm text-[#34D399] font-medium border border-[#34D399]/30 px-4 py-2.5 rounded-xl">
                <Globe size={14} />
                {t("caseStudy.live")}
              </div>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {CASE_STUDY_METRICS.map((m) => (
              <div key={m.label} className="bg-[#0A0F1E] p-6 md:p-8">
                <p
                  className="font-display font-bold text-white mb-2 stat-ticker"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
                >
                  {m.value}
                </p>
                <p className="text-[12px] text-white/40 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-[13px] mt-6">{t("caseStudy.p2")}</p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-24">
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em] mb-4">
            {t("pricing.label")}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] leading-[1.1] text-balance">
              {t("pricing.headline")}
            </h2>
            <p className="text-[#5A6478] text-[15px] max-w-sm">{t("pricing.subheadline")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.nameKey}
              className={`plan-card rounded-2xl p-8 border flex flex-col relative overflow-hidden ${
                plan.highlight
                  ? "bg-[#047857] text-white border-[#047857] shadow-xl shadow-emerald-900/20"
                  : "bg-white border-[#E1E5EE]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#047857] bg-[#D1FAE5] px-3 py-1.5 rounded-bl-xl">
                  {t("pricing.mostPopular")}
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`font-display font-bold text-xl mb-1.5 ${plan.highlight ? "text-white" : "text-[#0A0F1E]"}`}
                >
                  {t(plan.nameKey as Parameters<typeof t>[0])}
                </h3>
                <p className={`text-[13px] mb-7 leading-relaxed ${plan.highlight ? "text-emerald-200" : "text-[#5A6478]"}`}>
                  {t(plan.descKey as Parameters<typeof t>[0])}
                </p>
                <div className="flex items-end gap-1.5">
                  <span
                    className={`font-display font-bold text-[2.6rem] leading-none ${plan.highlight ? "text-white" : "text-[#0A0F1E]"}`}
                  >
                    {t(plan.priceKey as Parameters<typeof t>[0])}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-emerald-200" : "text-[#5A6478]"}`}>
                    {t(plan.periodKey as Parameters<typeof t>[0])}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.featureKeys.map((fk) => (
                  <li key={fk} className="flex items-start gap-2.5 text-[13px]">
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-emerald-300" : "text-[#047857]"}`}
                      strokeWidth={2.5}
                    />
                    <span className={plan.highlight ? "text-emerald-50" : "text-[#475569]"}>
                      {t(fk as Parameters<typeof t>[0])}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@gopinkaro.com"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#047857] hover:bg-emerald-50"
                    : "bg-[#0A0F1E] text-white hover:bg-[#1E293B]"
                }`}
              >
                {t(plan.ctaKey as Parameters<typeof t>[0])}
              </a>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[#96A0B5] mt-7 text-center">
          {t("pricing.inrNote")}{" "}
          <a href="mailto:hello@gopinkaro.com" className="text-[#047857] font-medium underline underline-offset-2">
            {t("pricing.inrCta")}
          </a>
        </p>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="border-t border-[#E1E5EE] bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-16 items-start">
            <div className="md:sticky md:top-24">
              <p className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em] mb-4">
                {t("faq.label")}
              </p>
              <h2 className="font-display font-bold text-[2rem] leading-[1.1] mb-6">
                {t("faq.headline")}
              </h2>
              <a
                href="mailto:hello@gopinkaro.com"
                className="text-sm text-[#047857] font-medium inline-flex items-center gap-1.5 hover:underline underline-offset-4"
              >
                Have another question? <ArrowRight size={13} />
              </a>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white border rounded-xl overflow-hidden transition-colors ${
                    openFaq === i ? "border-[#047857]/30" : "border-[#E1E5EE]"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-[14px] text-[#0A0F1E] pr-4">
                      {t(faq.qKey as Parameters<typeof t>[0])}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-[#5A6478] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-[#047857]" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-[#ECF0F6]">
                      <p className="text-[13px] text-[#5A6478] leading-relaxed pt-4">
                        {t(faq.aKey as Parameters<typeof t>[0])}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-10 md:py-16">
        <div className="bg-[#0A0F1E] rounded-2xl px-6 md:px-14 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-white text-[1.8rem] md:text-[2.2rem] leading-[1.1] mb-3 text-balance">
              {t("cta.headline")}
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed">{t("cta.subheadline")}</p>
          </div>
          <a
            href="#pricing"
            className="shrink-0 inline-flex items-center gap-2 bg-[#047857] text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#065f46] transition-colors text-sm"
          >
            {t("cta.button")}
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E1E5EE]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <a href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#047857] flex items-center justify-center">
              <Zap size={12} className="text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-[14px]">GoPinKaro</span>
          </a>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[12px] text-[#96A0B5] hover:text-[#0A0F1E] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-[12px] text-[#C4CADB]">
            © {new Date().getFullYear()} GoPinKaro. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}
