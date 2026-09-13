"use client";

import { useState } from "react";
import GooglePlayButton from "./GooglePlayButton";
/* eslint-disable @next/next/no-img-element */

const screenshots = [
  {
    src: "/assets/images/screenshot/app_scheduler_main.png",
    title: "Main Schedule Dashboard",
    tag: "ACTIVE SCHEDULES",
    caption: "View all scheduled apps (Gmail, Meet, Fiverr, Upwork, Binance) with repeatable daily triggers, launch timestamps, and quick action controls.",
  },
  {
    src: "/assets/images/screenshot/app_scheduler_new_schedule.png",
    title: "New Routine Builder",
    tag: "SCHEDULE CREATION",
    caption: "Select any installed Android application, configure exact launch hours, assign target dates, and toggle automatic daily recurrence.",
  },
  {
    src: "/assets/images/screenshot/app_scheduler_time_picker.png",
    title: "Precision Time & Clock Picker",
    tag: "TIME TRIGGER ENGINE",
    caption: "Material clock selector allows exact hour and minute scheduling for your Fiverr online presence or morning productivity routines.",
  },
];

export default function AppScreenshots() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="screenshots" className="py-20 lg:py-28 relative bg-[#040816] overflow-hidden border-t border-white/[0.06]">
      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="cyber-badge-cyan mb-4">AUTHENTIC ANDROID APP</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 font-['Outfit']">
            Real App Screens. <span className="gradient-text-emerald">Pure Simplicity</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See exactly how Appopener looks and works on Android. A clean, modern, and distraction-free interface built for rapid routine scheduling.
          </p>
        </div>

        {/* Interactive Screenshot Showcase */}
        <div className="max-w-4xl mx-auto">
          {/* Main Featured Phone Mockup Frame */}
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-[#070d1e] p-6 sm:p-10 border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] mb-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Realistic Phone Shell */}
            <div className="relative w-64 sm:w-72 flex-shrink-0">
              {/* Subtle phone ambient glow */}
              <div className="absolute -inset-1.5 rounded-[40px] bg-gradient-to-b from-emerald-500/30 via-cyan-500/20 to-transparent blur-md opacity-75" />
              <div className="relative rounded-[36px] overflow-hidden border-4 border-slate-700 bg-black shadow-2xl aspect-[9/18.5]">
                <img
                  src={screenshots[selectedIdx].src}
                  alt={screenshots[selectedIdx].title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 inline-block mb-3">
                {screenshots[selectedIdx].tag} • {selectedIdx + 1} OF {screenshots.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-['Outfit']">
                {screenshots[selectedIdx].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {screenshots[selectedIdx].caption}
              </p>

              {/* Step / Thumbnail Switchers */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIdx((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
                  }
                  className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-400 transition-all font-mono text-xs font-bold flex items-center gap-1.5"
                  aria-label="Previous screenshot"
                >
                  <span>←</span>
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIdx((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
                  }
                  className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-400 transition-all font-mono text-xs font-bold flex items-center gap-1.5"
                  aria-label="Next screenshot"
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </div>

              {/* Direct Play Store CTA */}
              <div className="pt-4 border-t border-slate-800">
                <GooglePlayButton size="md" subtext="Free on Google Play Store" showSubtext={true} />
              </div>
            </div>
          </div>

          {/* 3 Interactive Thumbnail Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {screenshots.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`p-2.5 sm:p-4 rounded-2xl border text-left transition-all ${
                  selectedIdx === idx
                    ? "bg-emerald-500/15 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] scale-[1.02]"
                    : "bg-slate-900/60 border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-700"
                }`}
              >
                <div className="aspect-[9/16] rounded-xl overflow-hidden mb-2.5 border border-slate-800 bg-black">
                  <img src={s.src} alt={s.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase hidden sm:block">
                  Screen 0{idx + 1}
                </div>
                <div className="text-xs font-bold text-white truncate">
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
