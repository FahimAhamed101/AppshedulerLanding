import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog – App Scheduling, Productivity & Android Automation Tips",
  description:
    "Read expert articles about app scheduling, auto open apps, schedule apps android, productivity android app, workflow automation, automatic app launcher tips, and Android development guides.",
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
    <PageLayout title="Blog">
      <p style={{ marginBottom: "32px", fontSize: "17px", color: "#555", lineHeight: 1.7 }}>
        Expert tips, in-depth guides, and the latest updates about app scheduling, Android
        productivity, workflow automation, and developer tools.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {sortedPosts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  marginBottom: "8px",
                  color: "#051634",
                }}
              >
                {post.title}
              </h2>
            </Link>
            <time
              dateTime={post.date}
              style={{ display: "block", color: "#666", marginBottom: "8px", fontSize: "14px" }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <p style={{ margin: 0, lineHeight: 1.7 }}>{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              style={{
                display: "inline-block",
                marginTop: "8px",
                color: "#0d4fb5",
                fontWeight: 600,
              }}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
