import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";
import { blogPostMap, blogSlugs } from "@/lib/blog-data";
import { googlePlayUrl, siteUrl } from "@/lib/site";

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostMap[slug];
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: `${post.excerpt}`,
    keywords: [...seoKeywords, post.title.toLowerCase()],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${siteUrl}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostMap[slug];
  if (!post) notFound();

  const paragraphs = post.content
    .trim()
    .split("\n\n")
    .filter((p) => p.length > 0);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Appopener Team",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Appopener",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
  };

  return (
    <PageLayout title={post.title}>
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <time
            dateTime={post.date}
            className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20"
          >
            Published on{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-xs text-slate-400 font-mono">• 6 min read</span>
        </div>

        <div className="text-slate-200 leading-relaxed text-base sm:text-lg space-y-6">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl sm:text-3xl font-black text-white pt-6 pb-2 border-b border-slate-800"
                >
                  {para.slice(3)}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-xl font-bold text-emerald-400 pt-4"
                >
                  {para.slice(4)}
                </h3>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 pl-4 list-disc marker:text-emerald-400">
                  {items.map((item, j) => (
                    <li key={j} className="text-slate-300">
                      {item.slice(2)}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-slate-300 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-slate-900 to-cyan-500/10 border border-emerald-500/30 shadow-xl">
          <h3 className="text-xl font-black text-white mb-2">
            Automate Your Fiverr Presence & App Routines
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Boost your Fiverr gig impressions, maintain active online status 24/7, and schedule any Android application on your terms.
          </p>
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-emerald text-xs tracking-wider"
          >
            DOWNLOAD APPOPENER FREE ON GOOGLE PLAY
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"
          >
            ← Back to All Guides & Blog
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </PageLayout>
  );
}
