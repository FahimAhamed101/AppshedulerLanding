import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about app scheduling, auto open apps, schedule apps android, productivity android app, workflow automation, and automatic app launcher tips.",
  keywords: seoKeywords,
};

const blogPosts = [
  {
    slug: "schedule-apps-automatically-android",
    title: "How to Schedule Apps Automatically on Android",
    excerpt:
      "Learn how to automate app launches on your Android device. We walk through the best methods for scheduling apps to open at specific times without manual intervention.",
    date: "2026-03-12",
  },
  {
    slug: "best-productivity-apps-android",
    title: "Best Productivity Apps for Android in 2026",
    excerpt:
      "A curated list of the top productivity and scheduling apps for Android users. From task management to automation, find the right tools for your workflow.",
    date: "2026-03-10",
  },
  {
    slug: "how-app-automation-works",
    title: "How App Automation Works: A Developer&apos;s Guide",
    excerpt:
      "Understanding the technology behind app scheduling and automation. How do schedulers trigger app launches, and what makes them reliable? A developer's perspective.",
    date: "2026-03-08",
  },
  {
    slug: "workflow-automation-tips-teams",
    title: "Workflow Automation Tips for Remote Teams",
    excerpt:
      "Remote teams need structure. Discover how app scheduling and workflow automation can keep your distributed team aligned and productive.",
    date: "2026-03-05",
  },
  {
    slug: "reduce-context-switching-productivity",
    title: "Reduce Context Switching to Boost Productivity",
    excerpt:
      "Constant app switching kills focus. Learn how scheduled app launches and smart reminders can help you stay in the flow.",
    date: "2026-03-01",
  },
];

export default function BlogPage() {
  return (
    <PageLayout title="Blog">
      <p style={{ marginBottom: "32px", fontSize: "17px", color: "#555" }}>
        Tips, guides, and updates about app scheduling, productivity, and workflow automation.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {blogPosts.map((post) => (
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
