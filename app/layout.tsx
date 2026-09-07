import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoPinKaro — SaaS SEO Agency India | Alternative Page SEO",
  description: "GoPinKaro is a SaaS SEO agency in India specializing in alternative page SEO. We build and rank '[Competitor] Alternative' pages. Proven: 0 → 315 clicks/day in 90 days for Replykaro.",
  keywords: ["SaaS SEO agency", "SaaS SEO agency India", "alternative page SEO", "b2b saas seo agency", "seo agency for saas companies", "manychat alternative SEO", "rank for competitor keywords"],
  openGraph: {
    title: "GoPinKaro — SaaS SEO Agency India",
    description: "We build and rank '[Competitor] Alternative' pages that capture SaaS buyers actively switching. 0 → 315 clicks/day in 90 days. India-based, global results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
