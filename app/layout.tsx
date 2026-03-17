/* eslint-disable @next/next/no-css-tags, @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import { seoKeywords } from "@/lib/seo-keywords";

const siteUrl = "https://appopener.app";
const siteName = "App Scheduler – Auto Open & Close Apps | Productivity Tool";
const defaultDescription =
  "App Scheduler to auto open and close apps on schedule. Productivity tool for Android and more—schedule tasks, automate reminders, and stay organized.";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | App Scheduler",
  },
  description: defaultDescription,
  keywords: seoKeywords,
  applicationName: siteName,
  authors: [{ name: "Appopener Team" }],
  creator: "Appopener Team",
  publisher: "Appopener Team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: defaultDescription,
    locale: "en_US",
    images: [
      {
        url: "/assets/images/1.png",
        width: 1200,
        height: 630,
        alt: "App Scheduler – Auto Open & Close Apps dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/assets/images/1.png"],
  },
  robots: {
    index: true,
    follow: true,
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
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
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
          type="image/icon"
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
        <meta name="google-site-verification" content="qyyo8aUN9zTPVWSMaxStSvR8Fl5kBSuCvdUUBfIOy8I" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8YZFLGV9X7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8YZFLGV9X7');
            `,
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
