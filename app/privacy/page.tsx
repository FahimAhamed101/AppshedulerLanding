import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Appopener App Scheduler privacy policy. Learn how we collect, use, and protect your data. App scheduler, auto open apps, automatic app launcher.",
  keywords: seoKeywords,
};

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <div style={{ maxWidth: "800px", lineHeight: 1.8 }}>
        <p>
          <strong>Last updated: March 2026</strong>
        </p>

        <p>
          Appopener App Scheduler (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
          respects your privacy and is committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our app scheduler and related
          services.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Information We Collect
        </h2>
        <p>
          We may collect information you provide directly, such as your name,
          email address, and account credentials when you create an account.
          We also collect usage data related to scheduling preferences, app
          launch settings, and feature interactions to improve our service.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          How We Use Your Information
        </h2>
        <p>
          We use the information we collect to provide, maintain, and improve
          our app scheduling services; to send you reminders and notifications;
          to respond to your inquiries; and to analyze usage patterns for
          product development.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Data Sharing and Disclosure
        </h2>
        <p>
          We do not sell your personal information. We may share data with
          trusted service providers who assist in operating our platform, and
          we may disclose information when required by law or to protect our
          rights and safety.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your
          data, including encryption and access controls. However, no method of
          transmission over the internet is 100% secure.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Your Rights
        </h2>
        <p>
          Depending on your location, you may have the right to access,
          correct, or delete your personal data. You can manage your account
          settings or contact us at support@appopener.app to exercise these
          rights.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Cookies and Tracking
        </h2>
        <p>
          Our website may use cookies and similar technologies to enhance your
          experience, analyze traffic, and deliver personalized content. You
          can control cookie preferences through your browser settings.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Advertising
        </h2>
        <p>
          We may display advertisements on our website through third-party
          advertising networks, including Google AdSense. These networks may use
          cookies, web beacons, and similar technologies to serve ads based on
          your prior visits to our website or other websites. Google&apos;s use of
          advertising cookies enables it and its partners to serve ads to you
          based on your visit to our site and/or other sites on the internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . Alternatively, you can opt out of third-party vendor cookies by
          visiting the{" "}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Network Advertising Initiative opt-out page
          </a>
          .
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Third-Party Services
        </h2>
        <p>
          We use Google Analytics to analyze website traffic and usage patterns.
          Google Analytics uses cookies to collect anonymous information about
          how visitors use our site. This data helps us improve our content and
          user experience. You can learn more about how Google uses data at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy &amp; Terms page
          </a>
          .
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page
          and updating the &quot;Last updated&quot; date. We encourage you to
          review this Privacy Policy periodically for any changes.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@appopener.app">support@appopener.app</a> or
          visit our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </PageLayout>
  );
}
