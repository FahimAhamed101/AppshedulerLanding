import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FuturisticHero from "@/components/FuturisticHero";
import FiverrBoosterSection from "@/components/FiverrBoosterSection";
import UniversalSchedulerSection from "@/components/UniversalSchedulerSection";
import FeatureMatrix from "@/components/FeatureMatrix";
import AppScreenshots from "@/components/AppScreenshots";
import FuturisticFAQ from "@/components/FuturisticFAQ";
import GooglePlayButton from "@/components/GooglePlayButton";
import FloatingStickyBar from "@/components/FloatingStickyBar";
import { seoKeywords } from "@/lib/seo-keywords";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import {
  googlePlayUrl,
  siteBrandName,
  siteUrl,
  supportEmail,
} from "@/lib/site";

const pageTitle =
  "Appopener - Boost Fiverr Gig Impressions & Auto-Open Any Android App";
const pageDescription =
  "Boost your Fiverr gig impressions, stay online 24/7, and schedule ANY Android app to open automatically on your custom routine. 100% free on Google Play.";
const ogImageUrl = `${siteUrl}/assets/images/1.png`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteBrandName,
    title: pageTitle,
    description: pageDescription,
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Appopener - Boost Fiverr Gig Impressions & Android App Scheduler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
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
  category: "Productivity Software",
};

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 4);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteBrandName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/logo.png`,
    email: supportEmail,
    sameAs: [googlePlayUrl],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Appopener - App Scheduler for Android",
    operatingSystem: "Android 8.0 and up",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1480",
    },
    description: pageDescription,
    downloadUrl: googlePlayUrl,
    featureList: [
      "Fiverr gig impression booster via scheduled auto-launch",
      "Keep Fiverr seller status online 24/7 without browser bots",
      "Schedule any Android app to open automatically",
      "Custom interval and cron routine builder",
      "Battery-friendly Doze mode optimization",
      "Zero root permissions required",
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Boost Fiverr Gig Impressions by Auto-Opening the App on Android",
    description:
      "A step-by-step guide to keeping your Fiverr profile active and online 24/7 using Appopener on Android.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1: Install Appopener",
        text: "Download and install the official Appopener app free from the Google Play Store.",
        url: googlePlayUrl,
      },
      {
        "@type": "HowToStep",
        name: "Step 2: Create a Recurring Routine",
        text: "Tap the add button in Appopener and set an interval between 15 and 25 minutes.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3: Select the Fiverr App",
        text: "Choose the official Fiverr Android app from your installed apps list.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4: Save & Boost Impressions",
        text: "Activate the schedule. Appopener triggers the app on time, keeping your profile online and multiplying gig impressions.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Appopener boost Fiverr gig impressions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fiverr's search algorithm prioritizes sellers who are 'Online Now'. Over 68% of buyers toggle this filter. Appopener periodically launches the official Fiverr app on Android, maintaining your active green online status, reducing response times, and multiplying gig impressions.",
        },
      },
      {
        "@type": "Question",
        name: "Is using Appopener safe for my Fiverr account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Appopener is 100% safe. It uses Android's native system launcher to open your official Fiverr app on your physical device. It does not tamper with APIs, inject browser scripts, or violate platform terms.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Appopener to schedule ANY type of Android app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Appopener can schedule any app installed on your Android device, including Upwork, Binance, TradingView, Duolingo, Notion, Slack, and mobile games.",
        },
      },
      {
        "@type": "Question",
        name: "Does Appopener drain phone battery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Appopener leverages Android's battery-aware AlarmManager and WorkManager APIs, consuming less than 1% battery life in a 24-hour window.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col selection:bg-emerald-500/30 selection:text-white">
      {/* Top Futuristic Header */}
      <Header />

      <main role="main" className="flex-1">
        {/* Futuristic Cyber Hero */}
        <FuturisticHero />

        {/* Dedicated Fiverr Gig Impression Booster Spotlight & Calculator */}
        <FiverrBoosterSection />

        {/* Universal Multi-App Scheduler Spotlight */}
        <UniversalSchedulerSection />

        {/* Feature Matrix & Tech HUD */}
        <FeatureMatrix />

        {/* Interactive App Screenshots */}
        <AppScreenshots />

        {/* High-Intent SEO Guides & Blog Preview */}
        <section className="py-20 bg-[#030712] border-t border-white/[0.06]">
          <div className="app-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="cyber-badge-cyan mb-3">SEO ARTICLES & FREELANCE STRATEGY</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Expert Guides for Freelancers & Automation
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold font-mono text-emerald-400 hover:text-emerald-300"
              >
                <span>VIEW ALL GUIDES</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="glass-panel p-6 rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 mb-3 inline-block">
                      {post.slug.includes("fiverr") ? "FIVERR RANKING" : "ANDROID AUTOMATION"}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5 line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FuturisticFAQ />

        {/* Final High-Converting Download Banner */}
        <section className="py-20 lg:py-28 relative bg-gradient-to-b from-[#040816] to-[#02050e] border-t border-white/[0.06] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="app-container relative z-10 text-center max-w-3xl mx-auto">
            <span className="cyber-badge mb-4">START IN UNDER 60 SECONDS</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Never Miss a Fiverr Order or Routine Again
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Download Appopener for Android on the Google Play Store today. Free forever, no root required, and optimized for 24/7 background automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <GooglePlayButton
                size="hero"
                className="w-full sm:w-auto"
                subtext="Official Google Play Store • Free Download"
                showSubtext={true}
              />

              <Link
                href="/blog/how-to-increase-fiverr-gig-impressions-stay-online-automatically"
                className="btn-ghost-cyber py-4 px-6 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <span>Read Fiverr Setup Guide →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent Floating Sticky Action Bar for 100% Conversion */}
      <FloatingStickyBar />

      {/* Cyber Footer */}
      <Footer />

      {/* Structured Data JSON-LD Schemas for Maximum Google Ranking */}
      <script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        id="schema-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
