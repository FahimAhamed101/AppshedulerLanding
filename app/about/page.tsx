import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";
import { pageKeywordGroups } from "@/lib/seo-keywords";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Appopener, the direct app opener download for Android that helps teams and individuals schedule apps, automate reminders, and reduce context switching.",
  path: "/about",
  keywords: pageKeywordGroups.about,
});

export default function AboutPage() {
  return (
    <PageLayout title="About Appopener">
      <div style={{ maxWidth: "800px", lineHeight: 1.8 }}>
        <p>
          Appopener App Scheduler was built to solve a simple problem: too many
          people lose focus switching between apps and forgetting which tasks
          to tackle next. We believe that the right tools, at the right time,
          can transform how you work.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>Our Mission</h2>
        <p>
          Our mission is to help individuals and teams stay organized by
          combining task scheduling with intelligent app launching. We want
          every user to spend less time managing their workflow and more time
          getting things done.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>What We Do</h2>
        <p>
          We develop an app-first scheduler that lets you plan your day, set
          up recurring tasks, and automatically open the apps you need when
          it&apos;s time to work. Whether you&apos;re a solo professional or part
          of a fast-moving team, Appopener helps you stay on schedule with a
          direct Android APK download and simple app-launch automation.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Who We Serve
        </h2>
        <p>
          We serve productivity-minded individuals, remote workers, small
          teams, and operations teams who need reliable scheduling and
          automation. Our users range from freelancers managing multiple
          projects to support and QA teams running daily workflows.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>Our Values</h2>
        <p>
          We focus on simplicity, reliability, and respect for your time. We
          build features that solve real problems and avoid unnecessary
          complexity. Your schedule and data stay under your control.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>Contact Us</h2>
        <p>
          We&apos;d love to hear from you. Reach out at{" "}
          <a href="mailto:hello@appopener.app">hello@appopener.app</a> or
          visit our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </PageLayout>
  );
}
