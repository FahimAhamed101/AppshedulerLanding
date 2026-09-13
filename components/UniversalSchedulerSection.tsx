"use client";

import { useState } from "react";
import GooglePlayButton from "./GooglePlayButton";

interface UseCase {
  id: string;
  category: string;
  icon: string;
  apps: string[];
  headline: string;
  description: string;
  scheduleExample: string;
  benefit: string;
}

const useCases: UseCase[] = [
  {
    id: "freelance",
    category: "Freelance & Gigs",
    icon: "💼",
    apps: ["Fiverr", "Upwork", "Freelancer", "Toptal"],
    headline: "Stay Online & Catch New Job Posts Before Competitors",
    description:
      "Schedule your marketplace apps to wake up every 20-30 minutes. Stay marked Online on Fiverr, or auto-open Upwork when US clients post fresh job feeds.",
    scheduleExample: "Recurring Every 25 Mins (Day & Night)",
    benefit: "Spikes gig impressions & ensures 100% response rate",
  },
  {
    id: "crypto",
    category: "Crypto & Markets",
    icon: "📈",
    apps: ["Binance", "TradingView", "MetaTrader", "CoinMarketCap"],
    headline: "Never Miss London, New York, or Asian Market Opens",
    description:
      "High-volatility news events and market opens wait for no one. Automatically open your chart layouts and exchange order books 5 minutes before the bell.",
    scheduleExample: "Mon-Fri at 07:55 AM & 01:25 PM",
    benefit: "Zero missed setups & instant execution readiness",
  },
  {
    id: "habits",
    category: "Daily Habits & Streaks",
    icon: "🔥",
    apps: ["Duolingo", "Headspace", "MyFitnessPal", "Kindle"],
    headline: "Protect 365-Day Streaks Without Relying on Memory",
    description:
      "Willpower is fickle; automation is relentless. Have your language app open right as you sit down for dinner, or launch your meditation app at bedtime.",
    scheduleExample: "Daily at 07:30 PM & 10:15 PM",
    benefit: "Unbroken habit consistency with zero decision fatigue",
  },
  {
    id: "work",
    category: "Deep Work & Sprints",
    icon: "🚀",
    apps: ["Notion", "Slack", "Trello", "Google Calendar"],
    headline: "Frictionless Workday Startup Sequences",
    description:
      "Start your morning deep work block with your calendar, sprint board, and focus playlist opening automatically at the exact start of your shift.",
    scheduleExample: "Weekdays at 08:45 AM & 01:00 PM",
    benefit: "Eliminates 15 minutes of daily app hunting and distraction",
  },
  {
    id: "social",
    category: "Batch Communication",
    icon: "💬",
    apps: ["WhatsApp Business", "Telegram", "LinkedIn", "Discord"],
    headline: "Batch Messages & Reclaim Your Attention",
    description:
      "Stop checking chats 50 times a day. Schedule communication apps to open in structured morning, midday, and afternoon check-in windows.",
    scheduleExample: "Daily at 10:00 AM, 02:00 PM & 05:30 PM",
    benefit: "Reclaims 2+ hours of deep focus daily",
  },
  {
    id: "gaming",
    category: "Daily Check-in Rewards",
    icon: "🎮",
    apps: ["Mobile RPGs", "Loyalty Apps", "Crypto Faucets"],
    headline: "Auto-Claim Daily Login Bonuses Without Forgetting",
    description:
      "Hundreds of mobile games and rewards platforms reward daily consecutive check-ins. Let Appopener trigger each app once every morning to collect your streak bonus.",
    scheduleExample: "Daily at 09:15 AM",
    benefit: "Never lose a consecutive check-in streak reward",
  },
];

export default function UniversalSchedulerSection() {
  const [activeTab, setActiveTab] = useState<string>("freelance");

  const currentCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <section id="universal-scheduler" className="py-20 lg:py-28 relative bg-[#030712] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="app-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="cyber-badge-cyan mb-4">UNIVERSAL ANDROID AUTOMATION</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Open <span className="gradient-text-cyan">ANY Android App</span> on Any Schedule
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            While Appopener is famous for skyrocketing Fiverr gig impressions, it is engineered to be the ultimate universal app launcher. Attach any app installed on your phone to custom time-based routines.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {useCases.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Detail Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{currentCase.icon}</span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {currentCase.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {currentCase.headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {currentCase.description}
              </p>

              {/* Supported Apps Chips */}
              <div className="mb-6">
                <span className="text-xs text-slate-400 block mb-2 font-mono uppercase">Supported Apps:</span>
                <div className="flex flex-wrap gap-2">
                  {currentCase.apps.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200"
                    >
                      {app}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                    + Any Installed APK
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#070e22] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Sample Routine Rule:</span>
                <span className="text-base font-bold text-white font-mono">{currentCase.scheduleExample}</span>
              </div>

              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Core Benefit:</span>
                <span className="text-sm font-semibold text-emerald-400">{currentCase.benefit}</span>
              </div>

              <div className="pt-2 flex justify-center">
                <GooglePlayButton size="md" className="w-full justify-center" subtext="Free on Google Play" showSubtext={true} />
              </div>
            </div>
          </div>
        </div>

        {/* 24-Hour Timeline Visualizer HUD */}
        <div className="rounded-3xl bg-[#070e20]/80 border border-white/[0.08] p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                AUTOMATED 24-HOUR LIFECYCLE
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                How a Power User Automates Their Entire Day
              </h4>
            </div>
            <div className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              ⚡ 0 Manual Screen Taps Needed
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-1">08:30 AM • Morning</div>
              <div className="text-sm font-bold text-white mb-2">Kickoff Sprint</div>
              <p className="text-xs text-slate-400 leading-relaxed m-0">
                Google Calendar & Notion open automatically to map the day&apos;s priority objectives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 relative shadow-[0_0_15px_rgba(16,185,129,0.08)]">
              <div className="text-xs font-mono font-bold text-emerald-400 mb-1">ALL DAY • Every 20m</div>
              <div className="text-sm font-bold text-white mb-2">Fiverr Seller Online</div>
              <p className="text-xs text-slate-400 leading-relaxed m-0">
                Fiverr app wakes up, preserving Online green badge & ensuring sub-10 minute reply rate.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-purple-400 mb-1">07:30 PM • Evening</div>
              <div className="text-sm font-bold text-white mb-2">Language Streak</div>
              <p className="text-xs text-slate-400 leading-relaxed m-0">
                Duolingo launches right before dinner, locking in your daily XP and keeping streak alive.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-amber-400 mb-1">11:00 PM • Night</div>
              <div className="text-sm font-bold text-white mb-2">Night Shift Watch</div>
              <p className="text-xs text-slate-400 leading-relaxed m-0">
                Fiverr & Upwork remain active in the background while you sleep, capturing US buyer inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
