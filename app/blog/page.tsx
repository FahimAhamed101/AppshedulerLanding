import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";
import { pageKeywordGroups } from "@/lib/seo-keywords";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Articles about Appopener download, app scheduler APK setup, open in app YouTube workflows, Android automation, and automatic app launcher tips.",
  path: "/blog",
  keywords: pageKeywordGroups.blog,
});

const blogPosts = [
  {
    slug: "schedule-apps-automatically-android",
    title: "How to Schedule Apps Automatically on Android",
    excerpt:
      "Learn how to automate app launches on your Android device and schedule apps to open at specific times.",
    date: "2026-03-12",
  },
  {
    slug: "best-productivity-apps-android",
    title: "Best Productivity Apps for Android in 2026",
    excerpt:
      "A focused list of productivity and scheduling apps for Android users, from task management to automation.",
    date: "2026-03-10",
  },
  {
    slug: "how-app-automation-works",
    title: "How App Automation Works: A Developer's Guide",
    excerpt:
      "Understand the technology behind app scheduling and automation, and what makes reliable launch workflows possible.",
    date: "2026-03-08",
  },
  {
    slug: "workflow-automation-tips-teams",
    title: "Workflow Automation Tips for Remote Teams",
    excerpt:
      "Discover how app scheduling and workflow automation can keep distributed teams aligned and productive.",
    date: "2026-03-05",
  },
  {
    slug: "reduce-context-switching-productivity",
    title: "Reduce Context Switching to Boost Productivity",
    excerpt:
      "Learn how scheduled app launches and smart reminders can help you stay in the flow.",
    date: "2026-03-01",
  },
];

export default function BlogPage() {
  return (
    <PageLayout title="Appopener Blog">
      <p style={{ marginBottom: "32px", fontSize: "17px", color: "#555" }}>
        Tips, guides, and updates about Appopener downloads, app scheduling,
        productivity, and workflow automation.
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
              style={{
                display: "block",
                color: "#666",
                marginBottom: "8px",
                fontSize: "14px",
              }}
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
              Read more -&gt;
            </Link>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
