"use client";

import { useState } from "react";
/* eslint-disable @next/next/no-img-element */

const screenshots = [
  {
    src: "/assets/images/screenshot_1.png",
    title: "Routine Builder Screen",
    caption: "Set custom times, recurring loops, and assign target apps in seconds.",
  },
  {
    src: "/assets/images/screenshot_2.png",
    title: "Active Schedule HUD",
    caption: "Scan all upcoming triggers, intervals, and active background routines.",
  },
  {
    src: "/assets/images/screenshot/02.jpg",
    title: "App Selector Menu",
    caption: "Choose any installed Android application, APK, or system tool.",
  },
  {
    src: "/assets/images/screenshot/03.jpg",
    title: "Smart Notification Engine",
    caption: "Configure pre-launch warnings, sound chimes, and wake behavior.",
  },
  {
    src: "/assets/images/screenshot/04.jpg",
    title: "Interval & Cron Settings",
    caption: "Define precise minute intervals (e.g. every 15, 20, or 30 mins) for Fiverr.",
  },
];

export default function AppScreenshots() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="screenshots" className="py-20 lg:py-28 relative bg-[#030712] overflow-hidden">
      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="cyber-badge-cyan mb-4">LIVE INTERFACE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Designed for <span className="gradient-text-cyan">Effortless Simplicity</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a look inside the Appopener Android interface. Clean, fast, and optimized for instant setup on any modern Android device.
          </p>
        </div>

        {/* Interactive Screenshot Showcase */}
        <div className="max-w-4xl mx-auto">
          {/* Main Featured Phone Mockup Frame */}
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-[#040816] p-6 sm:p-10 border border-white/10 shadow-2xl mb-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-60 sm:w-72 flex-shrink-0">
              {/* Phone glow border */}
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-purple-500/30 blur-md opacity-80" />
              <div className="relative rounded-[32px] overflow-hidden border-4 border-slate-700 bg-black shadow-2xl aspect-[9/18]">
                <img
                  src={screenshots[selectedIdx].src}
                  alt={screenshots[selectedIdx].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                SCREENSHOT {selectedIdx + 1} OF {screenshots.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {screenshots[selectedIdx].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {screenshots[selectedIdx].caption}
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIdx((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
                  }
                  className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-400 transition-all"
                  aria-label="Previous screenshot"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIdx((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
                  }
                  className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-400 transition-all"
                  aria-label="Next screenshot"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation Row */}
          <div className="flex justify-center gap-3 sm:gap-4 overflow-x-auto pb-4">
            {screenshots.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all w-16 h-24 sm:w-20 sm:h-28 flex-shrink-0 ${
                  selectedIdx === idx
                    ? "border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-105"
                    : "border-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
