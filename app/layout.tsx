import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlterPage — Rank for '[Competitor] Alternative' Keywords",
  description: "We build and rank comparison pages that capture SaaS buyers actively switching from your competitors. Proven: 0 → 315 clicks/day in 90 days for Replykaro.",
  keywords: ["SEO agency India", "SaaS SEO", "alternative page SEO", "competitor SEO", "rank for competitor keywords", "manychat alternative SEO"],
  openGraph: {
    title: "AlterPage — SEO for SaaS Companies",
    description: "Rank for the keywords your competitors own. We build the pages, you get the customers.",
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
