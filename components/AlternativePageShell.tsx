import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

interface ShellProps {
  breadcrumb: string;
  children: React.ReactNode;
}

export function AlternativeNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E1E5EE]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-[60px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#047857] flex items-center justify-center">
            <Zap size={13} className="text-white" fill="white" />
          </div>
          <span className="font-display font-bold text-[15px] tracking-tight">GoPinKaro</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/#pricing" className="text-[13px] text-[#5A6478] hover:text-[#0A0F1E] transition-colors font-medium hidden sm:block">
            Pricing
          </Link>
          <Link
            href="mailto:hello@gopinkaro.com"
            className="text-[13px] font-semibold bg-[#047857] text-white px-4 py-2 rounded-lg hover:bg-[#065f46] transition-colors"
          >
            Get Listed
          </Link>
        </div>
      </div>
    </header>
  );
}

export function AlternativeFooter() {
  return (
    <footer className="border-t border-[#E1E5EE] mt-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#047857] flex items-center justify-center">
            <Zap size={12} className="text-white" fill="white" />
          </div>
          <span className="font-display font-bold text-[14px]">GoPinKaro</span>
        </Link>
        <p className="text-[12px] text-[#96A0B5] text-center">
          We rank alternative pages and let traffic prove the value.{" "}
          <a href="mailto:hello@gopinkaro.com" className="text-[#047857] hover:underline underline-offset-2">
            hello@gopinkaro.com
          </a>
        </p>
        <p className="text-[12px] text-[#C4CADB]">© {new Date().getFullYear()} GoPinKaro</p>
      </div>
    </footer>
  );
}

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="flex items-center gap-2 text-[12px] text-[#96A0B5] mb-8">
      <Link href="/" className="hover:text-[#047857] transition-colors">GoPinKaro</Link>
      <span>/</span>
      <span className="text-[#5A6478]">{label}</span>
    </nav>
  );
}

export function ArticleHeader({
  date,
  count,
  title,
  accentTitle,
  intro,
}: {
  date: string;
  count: string;
  title: string;
  accentTitle: string;
  intro: string;
}) {
  return (
    <header className="mb-12 pb-12 border-b border-[#E1E5EE]">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-semibold text-[#047857] uppercase tracking-[0.14em]">
          {date}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#C4CADB]" />
        <span className="text-[11px] text-[#96A0B5]">{count} reviewed</span>
      </div>
      <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-5"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
        {title}
        <br />
        <span className="text-[#047857]">{accentTitle}</span>
      </h1>
      <p className="text-[17px] text-[#5A6478] leading-[1.75] max-w-[640px]">{intro}</p>
    </header>
  );
}

export function QuickPicks({ picks }: { picks: { label: string; value: string }[] }) {
  return (
    <div className="mb-14 rounded-2xl border border-[#E1E5EE] overflow-hidden">
      <div className="px-6 py-3.5 bg-[#F7F8FA] border-b border-[#E1E5EE]">
        <p className="text-[11px] font-semibold text-[#96A0B5] uppercase tracking-widest">Quick picks</p>
      </div>
      <div className="divide-y divide-[#E1E5EE]">
        {picks.map((p) => (
          <div key={p.label} className="flex items-start gap-4 px-6 py-4">
            <span className="text-[13px] font-semibold text-[#0A0F1E] w-44 shrink-0">{p.label}</span>
            <span className="text-[13px] text-[#5A6478]">{p.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToolCard({
  rank,
  name,
  tagline,
  verdict,
  bestFor,
  channels,
  price,
  pros,
  cons,
  ctaHref,
  ctaLabel,
  ctaNote,
}: {
  rank: number;
  name: string;
  tagline: string;
  verdict: string;
  bestFor: string;
  channels: string[];
  price: string;
  pros: string[];
  cons: string[];
  ctaHref?: string;
  ctaLabel?: string;
  ctaNote?: string;
}) {
  const isTop = rank === 1;
  return (
    <div
      className={`rounded-2xl border overflow-hidden ${isTop ? "border-[#047857]/40 shadow-sm shadow-emerald-50" : "border-[#E1E5EE]"}`}
    >
      {/* Card header */}
      <div className={`px-6 pt-6 pb-0 ${isTop ? "bg-[#F0FDF8]" : "bg-white"}`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span
              className={`font-display font-bold text-[2.2rem] leading-none select-none ${isTop ? "text-[#047857]/20" : "text-[#E1E5EE]"}`}
            >
              {String(rank).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display font-bold text-[1.3rem] leading-tight">{name}</h3>
              <p className="text-[13px] text-[#5A6478] mt-0.5">{tagline}</p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[13px] font-semibold text-[#0A0F1E]">{price}</p>
          </div>
        </div>

        {/* Verdict */}
        <p className={`text-[13px] font-medium mb-4 pb-4 border-b ${isTop ? "text-[#047857] border-[#D1FAE5]" : "text-[#5A6478] border-[#ECF0F6]"}`}>
          {verdict}
        </p>
      </div>

      {/* Card body */}
      <div className="px-6 py-5 bg-white">
        {/* Best for */}
        <div className="mb-5">
          <p className="text-[11px] font-semibold text-[#96A0B5] uppercase tracking-widest mb-1.5">Best for</p>
          <p className="text-[13px] text-[#5A6478] leading-relaxed">{bestFor}</p>
        </div>

        {/* Channels + price tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {channels.map((ch) => (
            <span
              key={ch}
              className="text-[11px] px-2.5 py-1 rounded-full border border-[#E1E5EE] text-[#5A6478]"
            >
              {ch}
            </span>
          ))}
        </div>

        {/* Pros / Cons */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#047857] mb-2.5">What works</p>
            <ul className="space-y-2">
              {pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] text-[#0A0F1E]">
                  <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#96A0B5] mb-2.5">Watch out for</p>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[13px] text-[#5A6478]">
                  <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full bg-[#F7F8FA] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 2L6 6M6 2L2 6" stroke="#96A0B5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA row for top pick */}
      {ctaHref && ctaLabel && (
        <div className="px-6 py-3.5 border-t border-[#D1FAE5] bg-[#F0FDF8] flex items-center justify-between">
          <p className="text-[13px] font-medium text-[#047857]">{ctaNote ?? "Free plan available — no credit card"}</p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#047857] hover:underline underline-offset-2"
          >
            {ctaLabel}
            <ArrowRight size={13} />
          </a>
        </div>
      )}
    </div>
  );
}

export function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mb-16">
      <h2 className="font-display font-bold text-[1.6rem] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="pl-5 border-l-2 border-[#D1FAE5]">
            <h3 className="font-semibold text-[15px] text-[#0A0F1E] mb-2">{faq.q}</h3>
            <p className="text-[13px] text-[#5A6478] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <section className="mb-16">
      <p className="text-[11px] font-semibold text-[#96A0B5] uppercase tracking-widest mb-4">Related comparisons</p>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] px-4 py-2.5 rounded-xl border border-[#E1E5EE] text-[#5A6478] hover:border-[#047857]/40 hover:text-[#047857] transition-colors flex items-center gap-1.5"
          >
            {link.label}
            <ArrowRight size={12} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function GetListedCta({ subject, pageTraffic }: { subject: string; pageTraffic: string }) {
  return (
    <div className="bg-[#0A0F1E] rounded-2xl px-8 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
      <div className="max-w-sm">
        <p className="text-[11px] font-semibold text-[#34D399] uppercase tracking-[0.14em] mb-3">For tool makers</p>
        <h2 className="font-display font-bold text-white text-[1.5rem] leading-[1.15] mb-3">
          Get featured on this page
        </h2>
        <p className="text-[13px] text-white/50 leading-relaxed">
          {pageTraffic} · Buyers actively evaluating alternatives.
        </p>
      </div>
      <div className="shrink-0">
        <a
          href={`mailto:hello@gopinkaro.com?subject=${encodeURIComponent(subject)}`}
          className="inline-flex items-center gap-2 bg-[#047857] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#065f46] transition-colors text-[14px]"
        >
          Email us to get listed
          <ArrowRight size={14} />
        </a>
        <p className="text-[11px] text-white/30 mt-2.5">Starts at ₹4,999/month</p>
      </div>
    </div>
  );
}
