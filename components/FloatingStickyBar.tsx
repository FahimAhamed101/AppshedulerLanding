"use client";

import { useState, useEffect } from "react";
import GooglePlayButton from "./GooglePlayButton";

export default function FloatingStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#0b1329]/95 backdrop-blur-2xl border-2 border-emerald-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.3)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xl flex-shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            🟢
          </div>
          <div>
            <div className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5 font-['Outfit']">
              <span>Appopener Android</span>
              <span className="text-[10px] uppercase font-bold text-emerald-300 bg-emerald-500/20 px-1.5 py-0.2 rounded border border-emerald-500/40">
                FREE
              </span>
            </div>
            <p className="text-[11px] text-slate-300 m-0 hidden sm:block">
              Auto-open Fiverr &amp; boost gig impressions 24/7
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <GooglePlayButton size="sm" pulsing={false} />
        </div>
      </div>
    </div>
  );
}
