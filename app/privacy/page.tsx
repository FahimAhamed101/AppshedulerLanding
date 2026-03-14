import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Appopener App Scheduler privacy policy. Learn how we collect, use, and protect your data.",
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
