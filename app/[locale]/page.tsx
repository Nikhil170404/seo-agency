"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
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
  },
  {
    category: "CRM & Sales",
    examples: [
      { label: "hubspot alternative", href: "/hubspot-alternative" },
      { label: "salesforce alternative", href: "/salesforce-alternative" },
      { label: "zoho crm alternative", href: "/zoho-crm-alternative" },
    ],
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    category: "Customer Support",
    examples: [
      { label: "zendesk alternative", href: "/zendesk-alternative" },
      { label: "freshdesk alternative", href: "/freshdesk-alternative" },
      { label: "intercom alternative", href: "/intercom-alternative" },
    ],
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    category: "SEO Tools",
    examples: [
      { label: "ahrefs alternative", href: "/ahrefs-alternative" },
      { label: "semrush alternative", href: "/semrush-alternative" },
      { label: "moz alternative", href: "/moz-alternative" },
    ],
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    category: "HR Tech",
    examples: [
      { label: "bamboohr alternative", href: "/bamboohr-alternative" },
      { label: "darwinbox alternative", href: "/darwinbox-alternative" },
      { label: "workday alternative", href: "/workday-alternative" },
    ],
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    category: "Project Management",
    examples: [
      { label: "jira alternative", href: "/jira-alternative" },
      { label: "asana alternative", href: "/asana-alternative" },
      { label: "notion alternative", href: "/notion-alternative" },
    ],
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
];

const CASE_STUDY_METRICS = [
  { labelKey: "clicksStart", value: "5" },
  { labelKey: "clicks90", value: "315" },
  { labelKey: "impressions", value: "2,976" },
  { labelKey: "position", value: "8.4" },
  { labelKey: "keywords", value: "109" },
  { labelKey: "value", value: "$41/mo" },
];

const HOW_IT_WORKS_ICONS = [FileText, TrendingUp, BarChart2];

export default function Home() {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navLinks = [
    { label: t("nav.services"), href: "/saas-seo-agency" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.caseStudy"), href: "#case-study" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  const stats = [
    { value: "315", suffix: "x", label: t("stats.clicks") },
    { value: "90", suffix: " days", label: t("stats.days") },
    { value: "KD 10", suffix: "", label: t("stats.kd") },
    { value: "2,874", suffix: "", label: t("stats.impressions") },
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

  const caseMetricLabels: Record<string, string> = {
    clicksStart: "Clicks/day at start",
    clicks90: "Clicks/day at 90 days",
    impressions: "Total impressions/day",
    position: "Avg. keyword position",
    keywords: "Keywords ranked",
    value: "Organic traffic value",
  };

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

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors font-medium">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <a href="#pricing" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors px-2">
              {t("nav.viewPricing")}
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold bg-[#059669] text-white px-4 py-2 rounded-lg hover:bg-[#047857] transition-colors"
            >
              {t("nav.getStarted")}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-[#0F172A]" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#pricing" className="text-sm font-semibold bg-[#059669] text-white px-4 py-2.5 rounded-lg text-center">
              {t("nav.getStarted")}
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] text-[#059669] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-[#D1FAE5]">
            <Star size={12} fill="currentColor" />
            {t("hero.badge")}
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-balance"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {t("hero.headline1")}
            <br />
            {t("hero.headline2")}{" "}
            <span className="text-[#059669]">{t("hero.headline3")}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl">
            {t("hero.subheadline")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-[#059669] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[#047857] transition-colors text-sm"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight size={16} />
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] font-semibold px-6 py-3.5 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors text-sm"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
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
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">{t("problem.label")}</p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {t("problem.headline")}
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6">{t("problem.p1")}</p>
            <p className="text-[#64748B] leading-relaxed">{t("problem.p2")}</p>
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
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">{t("howItWorks.label")}</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-balance"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {t("howItWorks.headline")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => {
              const Icon = HOW_IT_WORKS_ICONS[i];
              return (
                <div key={step.step} className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-xs font-bold text-[#059669]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {step.step}
                    </span>
                    <div className="h-px flex-1 bg-[#E2E8F0]" />
                    <Icon size={16} className="text-[#059669]" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {t(step.titleKey as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {t(step.descKey as Parameters<typeof t>[0])}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">{t("industries.label")}</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-balance"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {t("industries.headline")}
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
                  <Link
                    key={ex.label}
                    href={ex.href}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border hover:opacity-80 transition-opacity ${ind.color}`}
                  >
                    {ex.label}
                  </Link>
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
              <p className="text-xs font-semibold text-[#34D399] uppercase tracking-widest mb-4">{t("caseStudy.label")}</p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {t("caseStudy.headline")}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">{t("caseStudy.p1")}</p>
              <p className="text-slate-400 leading-relaxed mb-8">{t("caseStudy.p2")}</p>
              <div className="inline-flex items-center gap-2 text-sm text-[#34D399] font-medium">
                <Globe size={14} />
                {t("caseStudy.live")}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CASE_STUDY_METRICS.map((m) => (
                <div key={m.labelKey} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400">{caseMetricLabels[m.labelKey]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">{t("pricing.label")}</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {t("pricing.headline")}
          </h2>
          <p className="text-[#64748B] max-w-md mx-auto">{t("pricing.subheadline")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.nameKey}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.highlight
                  ? "bg-[#059669] text-white border-[#059669] shadow-xl shadow-emerald-200"
                  : "bg-white border-[#E2E8F0]"
              }`}
            >
              <div className="mb-8">
                {plan.highlight && (
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-3">
                    {t("pricing.mostPopular")}
                  </div>
                )}
                <h3
                  className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {t(plan.nameKey as Parameters<typeof t>[0])}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-emerald-100" : "text-[#64748B]"}`}>
                  {t(plan.descKey as Parameters<typeof t>[0])}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-[#0F172A]"}`}
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {t(plan.priceKey as Parameters<typeof t>[0])}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.highlight ? "text-emerald-100" : "text-[#64748B]"}`}>
                    {t(plan.periodKey as Parameters<typeof t>[0])}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.featureKeys.map((fk) => (
                  <li key={fk} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-emerald-200" : "text-[#059669]"}`}
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
                className={`w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#059669] hover:bg-emerald-50"
                    : "bg-[#059669] text-white hover:bg-[#047857]"
                }`}
              >
                {t(plan.ctaKey as Parameters<typeof t>[0])}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#64748B] mt-8">
          {t("pricing.inrNote")}{" "}
          <a href="mailto:hello@gopinkaro.com" className="text-[#059669] font-medium underline underline-offset-2">
            {t("pricing.inrCta")}
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-widest mb-4">{t("faq.label")}</p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {t("faq.headline")}
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm text-[#0F172A] pr-4">
                    {t(faq.qKey as Parameters<typeof t>[0])}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#64748B] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {t(faq.aKey as Parameters<typeof t>[0])}
                    </p>
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
            {t("cta.headline")}
          </h2>
          <p className="text-[#64748B] mb-8 max-w-md mx-auto">{t("cta.subheadline")}</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#059669] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#047857] transition-colors"
          >
            {t("cta.button")}
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
            <span className="font-bold text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              GoPinKaro
            </span>
          </div>

          <div className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} GoPinKaro. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}
