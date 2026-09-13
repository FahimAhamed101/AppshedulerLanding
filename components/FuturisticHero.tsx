"use client";

import { useState, useEffect } from "react";
import GooglePlayButton from "./GooglePlayButton";

export default function FuturisticHero() {
  const [activeApp, setActiveApp] = useState<"fiverr" | "binance" | "duolingo" | "notion">("fiverr");
  const [countdown, setCountdown] = useState(252); // seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 300 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `00:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const appData = {
    fiverr: {
      name: "Fiverr Freelancer",
      badge: "ONLINE 🟢",
      badgeClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      pkg: "com.fiverr.fiverr",
      interval: "Every 20 Mins",
      impact: "+340% Gig Impressions",
      impactColor: "text-emerald-400",
      notification: "Fiverr Seller Hub: Status ACTIVE • 14 new gig clicks received",
      desc: "Appopener periodically wakes the official Fiverr app, keeping your seller status Online 24/7 so buyers see your gig first.",
      icon: "🟢",
    },
    binance: {
      name: "Binance Markets",
      badge: "SCHEDULED ⚡",
      badgeClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      pkg: "com.binance.dev",
      interval: "Daily at 07:55 AM",
      impact: "Zero Missed Trades",
      impactColor: "text-amber-400",
      notification: "Binance: Market Open Watchlist ready before London Session",
      desc: "Automatically launches your charts and order books right before volatile market opens.",
      icon: "📈",
    },
    duolingo: {
      name: "Duolingo Streaks",
      badge: "ACTIVE 🎯",
      badgeClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      pkg: "com.duolingo",
      interval: "Daily at 07:30 PM",
      impact: "365-Day Unbroken Streak",
      impactColor: "text-cyan-400",
      notification: "Duolingo: Daily language session launched before dinner",
      desc: "Protects your habit streaks by presenting your lesson automatically without relying on memory.",
      icon: "🦉",
    },
    notion: {
      name: "Notion Sprint Board",
      badge: "WORK ROUTINE 💼",
      badgeClass: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      pkg: "notion.id",
      interval: "Mon-Fri at 08:45 AM",
      impact: "100% On-Time Workday",
      impactColor: "text-purple-400",
      notification: "Notion: Morning Sprint board and tasks ready for focus",
      desc: "Seamlessly transitions your phone into a deep work terminal as your workday starts.",
      icon: "📝",
    },
  };

  const current = appData[activeApp];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#0a0f1e] via-[#070b16] to-[#040814]">
      {/* Realistic Soft Radial Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-emerald-500/15 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Focused Copy & Primary Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Realistic Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-bold tracking-wide mb-6 shadow-[0_4px_20px_rgba(16,185,129,0.15)]">
              <span className="online-dot" />
              <span>THE OFFICIAL ANDROID APP SCHEDULER</span>
            </div>

            {/* Main Headline with High-Contrast Clear Hierarchy */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6 font-['Outfit']">
              Skyrocket <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">Fiverr Impressions</span> &amp; Auto-Open{" "}
              <span className="text-cyan-300">Any Android App</span>
            </h1>

            {/* Subhead with Realistic Clarity */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Fiverr hides offline sellers from buyers who filter for active freelancers.{" "}
              <strong className="text-white font-semibold">Appopener</strong> automatically triggers the
              Fiverr app on schedule—keeping you marked <span className="text-emerald-400 font-bold">Online 🟢</span>,
              slashing response times, and multiplying gig impressions. Plus, schedule <em>any other app</em> to launch
              automatically on your daily routine.
            </p>

            {/* HIGH-FOCUS CALL-TO-ACTION ZONE */}
            <div className="w-full max-w-xl p-5 sm:p-6 rounded-2xl bg-[#0b1329]/80 border-2 border-emerald-400/40 shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_35px_rgba(16,185,129,0.18)] mb-8">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-emerald-300 uppercase tracking-wider">
                  <span className="animate-bounce">👉</span>
                  <span>PRIMARY ACTION • GET APPOPENER FOR FREE:</span>
                </div>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  v2.4 Live
                </span>
              </div>

              {/* The Star of the Page: Ultra-Focused Google Play Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <GooglePlayButton
                  size="hero"
                  className="w-full sm:w-auto"
                  showSubtext={false}
                  pulsing={true}
                />
                
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 text-xs font-bold">
                    <span>★★★★★</span>
                    <span className="text-white font-mono ml-1">4.9 / 5.0</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Over 10,000+ Android routines run daily
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                    ✓ 100% Free • No Root • Google Play Safe
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-['Outfit']">
                  +340%
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-tight">Fiverr Impressions</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-['Outfit']">
                  24/7
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-tight">Online Seller Status</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                  &lt; 1%
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-tight">Daily Battery Use</div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Android Flagship Device Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Realistic Phone Bezel */}
              <div className="relative rounded-[42px] p-3 sm:p-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.15)] border border-slate-600/50">
                {/* Screen Content */}
                <div className="rounded-[34px] bg-[#070d1d] overflow-hidden border border-slate-800 p-5 relative">
                  {/* Phone Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-3 border-b border-slate-800/80 mb-4">
                    <span className="font-bold text-white">09:41</span>
                    <div className="w-14 h-4 bg-slate-900 rounded-full mx-auto border border-slate-800" />
                    <div className="flex items-center gap-1.5">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* App Header Inside Phone */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs text-emerald-300">
                        ⚡
                      </div>
                      <span className="text-xs font-bold text-white font-['Outfit']">Appopener Engine</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ACTIVE
                    </span>
                  </div>

                  {/* Interactive App Preset Selector */}
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Select Demo Target App:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(
                        [
                          { id: "fiverr", label: "Fiverr Booster", emoji: "🟢" },
                          { id: "binance", label: "Binance Crypto", emoji: "📈" },
                          { id: "duolingo", label: "Habit Streaks", emoji: "🦉" },
                          { id: "notion", label: "Work Sprints", emoji: "📝" },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveApp(tab.id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all text-left ${
                            activeApp === tab.id
                              ? "bg-emerald-500/20 border border-emerald-400/60 text-white shadow-sm"
                              : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <span>{tab.emoji}</span>
                          <span className="truncate">{tab.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Routine Card Inside Phone */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{current.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-white">{current.name}</div>
                          <div className="text-[10px] font-mono text-slate-400">{current.pkg}</div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${current.badgeClass}`}>
                        {current.badge}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">
                      {current.desc}
                    </p>

                    <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-slate-800">
                      <span className="text-slate-400">INTERVAL: {current.interval}</span>
                      <span className={`font-bold ${current.impactColor}`}>{current.impact}</span>
                    </div>
                  </div>

                  {/* Realistic Android Notification Banner */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-slate-900 via-[#0e172e] to-slate-900 border border-cyan-500/30 mb-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 mb-1">
                      <span className="online-dot" />
                      <span>REAL-TIME PUSH NOTIFICATION</span>
                    </div>
                    <div className="text-xs text-white font-medium leading-snug">
                      {current.notification}
                    </div>
                  </div>

                  {/* Live Countdown Clock */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">NEXT AUTO-LAUNCH IN:</div>
                      <div className="text-xl font-mono font-black text-emerald-400 mt-0.5">
                        {formatCountdown(countdown)}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                      WAKELOCK SAFE
                    </span>
                  </div>

                  {/* Direct Action Link Inside Phone */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                    <div className="text-[11px] text-slate-400 mb-2">
                      Ready to start your routine on Android?
                    </div>
                    <GooglePlayButton size="sm" className="w-full justify-center" pulsing={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
