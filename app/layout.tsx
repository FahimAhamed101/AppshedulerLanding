/* eslint-disable @next/next/no-css-tags, @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import { seoKeywords } from "@/lib/seo-keywords";
import {
  defaultDescription,
  defaultOgImage,
  defaultSeoTitle,
  googleAnalyticsId,
  googleSiteVerificationFallback,
  siteBrandName,
  siteUrl,
} from "@/lib/site";

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  googleSiteVerificationFallback;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${defaultSeoTitle} | ${siteBrandName}`,
    template: `%s | ${siteBrandName}`,
  },
  description: defaultDescription,
  keywords: seoKeywords,
  applicationName: siteBrandName,
  authors: [{ name: "Appopener Team" }],
  creator: "Appopener Team",
  publisher: "Appopener Team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteBrandName,
    title: `${defaultSeoTitle} | ${siteBrandName}`,
    description: defaultDescription,
    locale: "en_US",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Appopener app scheduler dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${defaultSeoTitle} | ${siteBrandName}`,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/assets/images/favicon.ico" }],
    shortcut: ["/assets/images/favicon.ico"],
    apple: [{ url: "/assets/images/favicon.ico" }],
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: googleSiteVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/favicon.ico"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/slick.css" rel="stylesheet" />
        <link
          id="switcher"
          href="/assets/css/theme-color/default-theme.css"
          rel="stylesheet"
        />
        <link href="/style.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0d4fb5" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
