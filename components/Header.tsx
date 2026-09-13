"use client";

import { useState } from "react";
import Link from "next/link";
import { siteBrandName } from "@/lib/site";
import GooglePlayButton from "./GooglePlayButton";

const navLinks = [
  { href: "/#fiverr-booster", label: "Fiverr Booster" },
  { href: "/#universal-scheduler", label: "Any App Scheduler" },
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#calculator", label: "Impression Calculator" },
  { href: "/#screenshots", label: "App UI" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "SEO Guides & Blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/80 border-b border-white/[0.08] transition-all">
      <div className="app-container flex items-center justify-between h-20">
        {/* Brand Logo with Cyber Glow */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="online-dot absolute -top-1 -right-1" />
            <svg
              className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white font-['Outfit']">
                {siteBrandName}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-wide m-0">Auto-Opener & Scheduler</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs: High-Focus Google Play Badge */}
        <div className="hidden sm:flex items-center">
          <GooglePlayButton size="sm" />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d1e]/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-emerald-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex justify-center">
              <GooglePlayButton size="md" className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
