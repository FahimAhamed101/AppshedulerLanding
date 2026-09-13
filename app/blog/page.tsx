import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "SEO Guides & Blog – Fiverr Gig Impressions, Android Automation & App Scheduling",
  description:
    "Master the secrets of increasing Fiverr gig impressions, staying online automatically, scheduling apps on Android, and supercharging freelance productivity.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageLayout title="Guides, Tips & Freelance Growth">
      <p className="text-lg text-slate-300 mb-10 leading-relaxed">
        Expert breakdowns on how to explode Fiverr gig impressions, maintain active online seller presence, automate routine app launches on Android, and scale your digital workflow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedPosts.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {post.slug.includes("fiverr") ? "FIVERR & GIGS" : "ANDROID AUTOMATION"}
                </span>
                <time
                  dateTime={post.date}
                  className="text-xs text-slate-400 font-mono"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-decoration-none group-hover:text-emerald-400 transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 leading-snug">
                  {post.title}
                </h2>
              </Link>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
              >
                <span>READ COMPLETE GUIDE</span>
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
