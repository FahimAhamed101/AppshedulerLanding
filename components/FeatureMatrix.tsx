import GooglePlayButton from "./GooglePlayButton";

const features = [
  {
    icon: "⚡",
    title: "Precision Cron & Interval Launcher",
    description:
      "Set triggers by exact minute, fixed daily hours, or recurring loops (e.g. every 15, 20, or 30 minutes) to match your workflow or Fiverr seller needs.",
    highlight: "Custom Intervals",
  },
  {
    icon: "🔋",
    title: "Doze-Mode & Battery Optimized",
    description:
      "Engineered with Android's modern AlarmManager and WorkManager APIs. Consumes less than 1% battery over an entire 24-hour cycle without overheating.",
    highlight: "< 1% Battery / Day",
  },
  {
    icon: "🛡️",
    title: "100% Safe & Google Play Certified",
    description:
      "Appopener does not modify files, inject scripts, or reverse-engineer apps. It sends standard Android system launch intents, keeping your accounts safe.",
    highlight: "Zero Ban Risk",
  },
  {
    icon: "🔔",
    title: "Pre-Launch Reminders & Silent Mode",
    description:
      "Choose between subtle haptic vibration, audible alert sounds, or completely silent background launches so you stay in total control.",
    highlight: "Flexible Alerts",
  },
  {
    icon: "📱",
    title: "No Root or Complex Scripts Required",
    description:
      "Unlike complicated tools like Tasker or Termux, Appopener provides a clean visual routine builder that anyone can set up in under 60 seconds.",
    highlight: "No Root Needed",
  },
  {
    icon: "🔄",
    title: "Multi-App Chain Automation",
    description:
      "Chain multiple apps into a unified morning, afternoon, or night sequence. Open your calendar first, then notes, then communication tools in order.",
    highlight: "Workflow Sequences",
  },
];

export default function FeatureMatrix() {
  return (
    <section id="features" className="py-20 lg:py-28 relative bg-[#040816] overflow-hidden border-t border-white/[0.06]">
      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="cyber-badge mb-4">ENGINEERED FOR PERFORMANCE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Cutting-Edge Automation. Built for <span className="gradient-text-emerald">Pure Reliability</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you are boosting Fiverr gig impressions 24/7 or launching deep work sprint tools, Appopener gives you enterprise-grade routine automation on Android.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA Banner */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Ready to automate your Android apps and spike your impressions?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Join thousands of freelancers, traders, and productivity enthusiasts who use Appopener to automate their daily mobile routines.
            </p>
            <div className="flex justify-center">
              <GooglePlayButton size="lg" className="justify-center" subtext="Download Free on Google Play • Instant Setup" showSubtext={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
