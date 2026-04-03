import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";
import { blogPostMap, blogSlugs } from "@/lib/blog-data";

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
    description: `${post.excerpt} – Appopener Blog`,
    keywords: seoKeywords,
    alternates: {
      canonical: `/blog/${slug}`,
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
      url: "https://appopener.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Appopener",
      url: "https://appopener.app",
      logo: {
        "@type": "ImageObject",
        url: "https://appopener.app/assets/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://appopener.app/blog/${slug}`,
    },
  };

  return (
    <PageLayout title={post.title}>
      <div style={{ maxWidth: "720px" }}>
        <time
          dateTime={post.date}
          style={{ display: "block", color: "#666", marginBottom: "20px", fontSize: "14px" }}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div style={{ lineHeight: 1.85 }}>
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  style={{ marginTop: "28px", marginBottom: "12px", fontSize: "20px" }}
                >
                  {para.slice(3)}
                </h2>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={i} style={{ marginBottom: "16px", paddingLeft: "24px" }}>
                  {items.map((item, j) => (
                    <li key={j} style={{ marginBottom: "6px" }}>
                      {item.slice(2)}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} style={{ marginBottom: "16px" }}>
                {para}
              </p>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px 24px",
            background: "#f0f6ff",
            borderRadius: "10px",
            borderLeft: "4px solid #0d4fb5",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600, marginBottom: "8px" }}>
            Ready to automate your app schedule?
          </p>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Download Appopener from the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.tomtech.appscheduler&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d4fb5", fontWeight: 600 }}
            >
              Google Play Store
            </a>{" "}
            and start scheduling your apps today.
          </p>
        </div>

        <p style={{ marginTop: "32px" }}>
          <Link href="/blog" style={{ color: "#0d4fb5", fontWeight: 600 }}>
            ← Back to Blog
          </Link>
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </PageLayout>
  );
}
