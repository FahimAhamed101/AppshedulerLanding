import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 cyber-grid">
      <Header />
      <main
        role="main"
        className="flex-1 py-12 lg:py-16 relative z-10"
      >
        <div className="app-container">
          <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-8 font-['Outfit'] pb-4 border-b border-white/[0.08]">
              {title}
            </h1>
            <div className="prose prose-invert prose-emerald max-w-none text-slate-300 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
