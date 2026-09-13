"use client";

import { googlePlayUrl } from "@/lib/site";

interface GooglePlayButtonProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showSubtext?: boolean;
  subtext?: string;
  pulsing?: boolean;
}

export default function GooglePlayButton({
  size = "md",
  className = "",
  showSubtext = false,
  subtext = "Verified on Google Play • Free Download",
  pulsing = true,
}: GooglePlayButtonProps) {
  // Dimension and padding classes based on size
  const sizeClasses = {
    sm: "px-4 py-2 text-left rounded-xl gap-3",
    md: "px-5 py-2.5 text-left rounded-xl gap-3.5",
    lg: "px-7 py-3.5 text-left rounded-2xl gap-4",
    hero: "px-8 py-4 text-left rounded-2xl gap-4 shadow-2xl",
  }[size];

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    hero: "w-9 h-9",
  }[size];

  const topTextSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-[11px]",
    hero: "text-xs",
  }[size];

  const mainTextSizes = {
    sm: "text-xs font-black",
    md: "text-sm font-black",
    lg: "text-lg font-black",
    hero: "text-xl font-black",
  }[size];

  return (
    <div className="inline-flex flex-col items-center">
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Appopener from Google Play"
        className={`group relative inline-flex items-center justify-center bg-gradient-to-b from-[#111c38] to-[#060b18] text-white border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6),0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8),0_0_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 active:translate-y-0 text-decoration-none overflow-hidden ${sizeClasses} ${className}`}
      >
        {/* Ambient Specular Beam on Hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

        {/* Pulsing Emerald Spotlight Halo */}
        {pulsing && (
          <div className="absolute -inset-1 rounded-2xl bg-emerald-500/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10 animate-pulse" />
        )}

        {/* Authentic Official 4-Color Google Play Triangle */}
        <div className={`relative flex-shrink-0 flex items-center justify-center ${iconSizes}`}>
          <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {/* Cyan / Blue Top-Left */}
            <path
              d="M3.609 1.814L13.793 12 3.61 22.186a2.372 2.372 0 0 1-.61-.989V2.803c.15-.39.363-.733.61-.989z"
              fill="#00D2FF"
            />
            {/* Green Bottom */}
            <path
              d="M14.85 13.054l2.586 2.586-12.75 7.362a2.38 2.38 0 0 1-1.076.248l11.24-10.196z"
              fill="#00E676"
            />
            {/* Red Top */}
            <path
              d="M17.436 8.946l-2.586 2.586L3.609.336c.338-.088.705-.05 1.076.164l12.75 7.348z"
              fill="#FF385C"
            />
            {/* Yellow Tip */}
            <path
              d="M18.532 10.042l3.375 1.948c1.458.841 1.458 2.213 0 3.054l-3.375 1.948-2.822-2.822 2.822-2.128z"
              fill="#FFC400"
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center leading-tight">
          <span
            className={`font-semibold uppercase tracking-wider text-slate-300 group-hover:text-emerald-300 transition-colors ${topTextSizes}`}
          >
            GET IT ON
          </span>
          <span
            className={`font-extrabold tracking-tight text-white group-hover:text-white font-['Outfit'] ${mainTextSizes}`}
          >
            Google Play
          </span>
        </div>

        {/* Right Arrow Accent for Hero */}
        {(size === "lg" || size === "hero") && (
          <div className="ml-2 pl-3 border-l border-white/15 flex items-center justify-center text-emerald-400 group-hover:translate-x-1 transition-transform">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </a>

      {showSubtext && (
        <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
          <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
}
