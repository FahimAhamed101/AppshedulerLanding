"use client";

import { useState } from "react";
import { googlePlayUrl, supportEmail } from "@/lib/site";

interface FAQ {
  question: string;
  answer: string;
  category: "fiverr" | "general";
}

const faqData: FAQ[] = [
  {
    category: "fiverr",
    question: "How does Appopener boost Fiverr gig impressions?",
    answer:
      "Fiverr's live search algorithm gives huge ranking priority to sellers who are 'Online Now'. Over 68% of buyers toggle this filter to find active freelancers. Appopener periodically triggers the official Fiverr app to launch on your Android phone, refreshing your live session and WebSocket connection. This keeps your profile marked with the active green online badge, making your gigs visible on page one and dramatically multiplying impressions.",
  },
  {
    category: "fiverr",
    question: "Is using Appopener safe for my Fiverr account? Will I get banned?",
    answer:
      "Yes, Appopener is 100% safe. Dangerous Chrome extensions or desktop bots inject artificial scripts and fixed-cadence HTTP requests that Fiverr's bot detector flags. Appopener does NOT touch Fiverr's code or APIs. It simply uses Android's native system launcher to open the genuine, official Fiverr Android app on your physical device. It is indistinguishable from you tapping the app icon yourself.",
  },
  {
    category: "general",
    question: "Can I use Appopener to schedule ANY type of Android app?",
    answer:
      "Absolutely! While Appopener is wildly popular among freelancers for Fiverr and Upwork, it works with any app installed on your Android device. You can schedule crypto apps (Binance, TradingView), habit trackers (Duolingo, fitness apps), productivity tools (Notion, Slack), social messengers, or gaming check-in apps.",
  },
  {
    category: "fiverr",
    question: "What is the recommended schedule interval for Fiverr?",
    answer:
      "Most top freelancers configure an interval between 15 to 25 minutes. Fiverr's server typically marks a user inactive after 20-30 minutes of no interaction. Setting a 20-minute recurring schedule ensures your online status remains unbroken 24 hours a day.",
  },
  {
    category: "general",
    question: "Does running background app schedules drain my phone's battery?",
    answer:
      "No. Appopener is built with Android's modern AlarmManager and WorkManager APIs, adhering strictly to Doze-mode battery guidelines. It stays dormant until the exact moment of execution and consumes less than 1% of total daily battery life.",
  },
  {
    category: "general",
    question: "Does Appopener require rooting my Android phone?",
    answer:
      "No rooting is required. Appopener runs on standard Android 8.0 through Android 14+ devices. It uses standard Android system intent permissions, making setup effortless and preserving your device's security warranty.",
  },
  {
    category: "general",
    question: "Where can I download the official Appopener app?",
    answer:
      "Appopener is officially distributed through the Google Play Store. It is 100% free to download and install on your Android smartphone or tablet.",
  },
];

export default function FuturisticFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<"all" | "fiverr" | "general">("all");

  const filteredFaqs = faqData.filter((item) => filter === "all" || item.category === filter);

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#040816] overflow-hidden border-t border-white/[0.06]">
      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="cyber-badge mb-4">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Everything You Need to Know
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Got questions about boosting Fiverr impressions or scheduling apps on Android? Here are straightforward answers from our engineering team.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Questions" },
              { id: "fiverr", label: "Fiverr & Impressions" },
              { id: "general", label: "Any App & Automation" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setFilter(tab.id as "all" | "fiverr" | "general");
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-emerald-500/20 border border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`glass-panel rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? "border-emerald-500/40 bg-slate-900/90 shadow-[0_0_25px_rgba(16,185,129,0.1)]" : "border-white/[0.08]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono border transition-transform flex-shrink-0 ${
                      isOpen
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 rotate-180"
                        : "bg-slate-800 border-slate-700 text-slate-400"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
                    <p className="m-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help box */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-400">
            Have a custom workflow question? Email our support team at{" "}
            <a href={`mailto:${supportEmail}`} className="text-emerald-400 hover:underline font-semibold">
              {supportEmail}
            </a>{" "}
            or install directly from{" "}
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">
              Google Play
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
