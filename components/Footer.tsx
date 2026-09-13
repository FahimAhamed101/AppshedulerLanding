import Link from "next/link";
import { googlePlayUrl, siteBrandName, siteUrl, supportEmail } from "@/lib/site";
import GooglePlayButton from "./GooglePlayButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02050e] border-t border-white/[0.08] pt-16 pb-12 text-slate-400 text-sm overflow-hidden">
      {/* Ambient subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 text-decoration-none">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                <span className="online-dot" />
              </div>
              <span className="text-xl font-extrabold text-white font-['Outfit']">
                {siteBrandName}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ANDROID APP
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              The next-generation Android routine scheduler. Boost Fiverr gig impressions by staying online 24/7, and schedule ANY Android application to launch automatically on your schedule.
            </p>
            <div className="flex items-center">
              <GooglePlayButton size="sm" pulsing={false} />
            </div>
          </div>

          {/* Col 2: Quick Features */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-mono mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#fiverr-booster" className="hover:text-emerald-400 transition-colors">
                  Fiverr Gig Impression Booster
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-emerald-400 transition-colors">
                  Impression ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/#universal-scheduler" className="hover:text-emerald-400 transition-colors">
                  Open ANY Android App
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-emerald-400 transition-colors">
                  Battery Optimization HUD
                </Link>
              </li>
              <li>
                <Link href="/#screenshots" className="hover:text-emerald-400 transition-colors">
                  Mobile App Screenshots
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: SEO Guides & Blog */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-mono mb-4">
              SEO Guides
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/blog/how-to-increase-fiverr-gig-impressions-stay-online-automatically"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Increase Fiverr Gig Impressions
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/fiverr-auto-app-opener-android-stay-active"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Fiverr Auto App Opener Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/schedule-any-app-to-open-automatically-android"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Schedule Any App on Android
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-android-automation-apps-freelancers"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Best Freelance Automation Apps
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors font-semibold">
                  View All Blog Posts →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Support */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-mono mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <a href={`mailto:${supportEmail}`} className="hover:text-emerald-400 transition-colors">
                  {supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Tag Pill Cloud */}
        <div className="pt-8 border-t border-slate-900 pb-8">
          <p className="text-[11px] font-mono uppercase text-slate-500 mb-3">Popular Search Topics:</p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              fiverr gig impressions
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              how to increase fiverr gig impressions
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              fiverr auto online app
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              fiverr stay active android
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              open any app automatically android
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              android app scheduler
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              auto open apps on schedule
            </span>
            <span className="px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              google play productivity app
            </span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {siteBrandName}. All rights reserved. Android and Google Play are trademarks of Google LLC. Fiverr is a trademark of Fiverr International Ltd.
          </div>
          <div className="flex items-center gap-4">
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              Google Play Store Listing
            </a>
            <span>•</span>
            <a href={siteUrl} className="text-slate-300 hover:text-white">
              appopener.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
