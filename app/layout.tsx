import { PageWrapper, ScrollProgress } from "@/components";
import { Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import ConsentProvider from "@/contexts/ConsentContext";
import Analytics from "@/components/analytics/Analytics";
import JsonLd from "@/components/seo/JsonLd";
import { businessSchema, ownerSchema, websiteSchema } from "@/lib/seo/structuredData";
import { SITE_DESCRIPTION, SITE_LANG, SITE_LOCALE, SITE_NAME, SITE_NAME_LEGAL, SITE_TAGLINE, SITE_URL } from "@/types/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat-next",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "chiptuning Liberec",
    "chiptuning se zápisem do TP",
    "výkonová brzda Liberec",
    "měření výkonu vozu",
    "dyno Liberecký kraj",
    "autoelektronika Liberec",
    "diagnostika vozu Liberec",
    "kódování klíčů",
    "oprava airbagů",
    "přístrojové panely",
    "renovace DPF filtru",
    "CarElectronic",
    "Viktor Šeda",
  ],
  authors: [{ name: SITE_NAME_LEGAL, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f1e9",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_LANG} suppressHydrationWarning className={montserrat.variable}>
      <head>
        <JsonLd data={businessSchema()}/>
        <JsonLd data={ownerSchema()}/>
        <JsonLd data={websiteSchema()}/>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt"/>
      </head>
      <body className="font-montserrat">
        <ConsentProvider>
          <ScrollProgress/>
          <PageWrapper>
            <main>{children}</main>
          </PageWrapper>
          <Analytics/>
        </ConsentProvider>
      </body>
    </html>
  );
}