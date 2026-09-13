"use client";

import { useState } from "react";
import GooglePlayButton from "./GooglePlayButton";

export default function FiverrBoosterSection() {
  const [offlineHours, setOfflineHours] = useState(10);
  const [intervalMin, setIntervalMin] = useState(20);
  const [avgOrderPrice, setAvgOrderPrice] = useState(50);

  // Dynamic calculations
  const monthlyHoursGained = offlineHours * 30;
  const impressionBoostPercent = Math.round(180 + (offlineHours / 16) * 140 + (30 / intervalMin) * 50);
  const extraInquiries = Math.round((monthlyHoursGained / 15) * (intervalMin <= 20 ? 1.4 : 1.0));
  const estimatedOrders = Math.max(1, Math.round(extraInquiries * 0.25));
  const projectedExtraRevenue = estimatedOrders * avgOrderPrice;

  return (
    <section id="fiverr-booster" className="py-20 lg:py-28 relative bg-[#040816] overflow-hidden border-t border-b border-white/[0.06]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="app-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="online-dot" />
            <span>SOLVE THE #1 FREELANCE CHALLENGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            The Secret to <span className="gradient-text-fiverr">Exploding Fiverr Gig Impressions</span> & Staying Online 24/7
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Over 68% of Fiverr buyers filter exclusively for <strong className="text-white">&quot;Online Sellers&quot;</strong> to get instant responses. If your phone goes to sleep, your gig vanishes from search results. Here is how Appopener solves this automatically.
          </p>
        </div>

        {/* 3-Part Contrast: The Problem vs The Old Danger vs The Appopener Solution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: The Problem */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-red-500/20 bg-gradient-to-b from-red-500/[0.04] to-transparent">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 text-2xl mb-5">
              ⚠️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The Inactive Status Trap</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              When you sleep, eat, or work on another monitor, your Android device silences the Fiverr app. Your profile turns offline (grey dot).
            </p>
            <ul className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span> Gig hidden from &quot;Online Now&quot; filter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span> Response rate timer increases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">✕</span> Buyer messages answered hours late
              </li>
            </ul>
          </div>

          {/* Card 2: The Dangerous Alternative */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-amber-500/20 bg-gradient-to-b from-amber-500/[0.04] to-transparent">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-5">
              🚫
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Risky Browser Auto-Refreshers</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Many freelancers try shady Chrome extensions or auto-reloaders. Fiverr’s bot detection flags these repetitive web hits, risking account suspension.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✕</span> Bot algorithms flag fixed reload patterns
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✕</span> Risk of losing Level 1 / Level 2 badge
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✕</span> Requires laptop running 24/7
              </li>
            </ul>
          </div>

          {/* Card 3: The Appopener Solution */}
          <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border-emerald-500/40 bg-gradient-to-b from-emerald-500/[0.08] to-transparent relative">
            <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              100% SAFE
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-2xl mb-5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Appopener Native Scheduling</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Appopener triggers the <strong className="text-white">official Android Fiverr app</strong> at your chosen intervals. It&apos;s 100% authentic mobile app activity with zero bot scripts.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 border-t border-emerald-500/20 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> App awakens via native Android intent
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Keeps green &quot;Online&quot; badge active
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Refreshes push notifications instantly
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Impression & Revenue Multiplier Calculator */}
        <div id="calculator" className="scroll-mt-28 glass-panel-glow p-6 sm:p-10 rounded-3xl border border-emerald-500/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="cyber-badge mb-2">INTERACTIVE ESTIMATOR</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Fiverr Gig Impression & Revenue Boost Calculator
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Estimate how much your impressions and client orders could grow by staying active during offline hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* Control 1: Offline Hours */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-white">
                      Hours You Are Away / Offline Daily:
                    </label>
                    <span className="text-sm font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                      {offlineHours} Hours / Day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="18"
                    step="1"
                    value={offlineHours}
                    onChange={(e) => setOfflineHours(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>4 hrs (Casual)</span>
                    <span>10 hrs (Sleep + Commute)</span>
                    <span>18 hrs (Part-time)</span>
                  </div>
                </div>

                {/* Control 2: Auto-Open Interval */}
                <div>
                  <label className="text-sm font-bold text-white block mb-2">
                    App Auto-Open Frequency:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: 15, label: "Every 15 mins", sub: "Max Online Status" },
                      { val: 20, label: "Every 20 mins", sub: "Optimal Balance" },
                      { val: 35, label: "Every 35 mins", sub: "Battery Saver" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setIntervalMin(opt.val)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          intervalMin === opt.val
                            ? "bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                            : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <div className="text-xs font-bold">{opt.label}</div>
                        <div className="text-[10px] text-slate-400">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Control 3: Average Order Value */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-white">
                      Your Average Fiverr Order Value:
                    </label>
                    <span className="text-sm font-mono font-bold text-cyan-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                      ${avgOrderPrice} USD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="5"
                    value={avgOrderPrice}
                    onChange={(e) => setAvgOrderPrice(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>$15</span>
                    <span>$100</span>
                    <span>$300+</span>
                  </div>
                </div>
              </div>

              {/* Output Results Column */}
              <div className="lg:col-span-5 bg-[#030712]/90 rounded-2xl border border-emerald-500/30 p-6 sm:p-7 shadow-xl">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>PROJECTED 30-DAY METRICS</span>
                  <span className="online-dot" />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400">Est. Gig Impression Multiplier</div>
                    <div className="text-3xl font-black text-emerald-400 font-mono">
                      +{impressionBoostPercent}%
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Extra Active Hours</div>
                      <div className="text-xl font-bold text-white font-mono">+{monthlyHoursGained}h/mo</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Est. Extra Inquiries</div>
                      <div className="text-xl font-bold text-cyan-400 font-mono">+{extraInquiries} msgs</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/40">
                    <div className="text-xs text-emerald-200 font-medium">Potential Extra Monthly Earnings:</div>
                    <div className="text-3xl font-black text-white font-mono mt-1">
                      +${projectedExtraRevenue.toLocaleString()} <span className="text-xs text-emerald-400 font-normal">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Based on ~{estimatedOrders} additional client orders at ${avgOrderPrice}/order
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <GooglePlayButton size="lg" className="w-full justify-center" subtext="Start Boosting on Android • Free" showSubtext={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
