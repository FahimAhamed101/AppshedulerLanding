import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";
import { pageKeywordGroups } from "@/lib/seo-keywords";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Read the Appopener Terms of Service for our direct Android APK download, app scheduler, and automatic app launcher services.",
  path: "/terms",
  keywords: pageKeywordGroups.terms,
});

export default function TermsPage() {
  return (
    <PageLayout title="Terms of Service">
      <div style={{ maxWidth: "800px", lineHeight: 1.8 }}>
        <p>
          <strong>Last updated: March 2026</strong>
        </p>

        <p>
          Welcome to Appopener App Scheduler. By accessing or using our
          services, you agree to be bound by these Terms of Service. Please
          read them carefully.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Acceptance of Terms
        </h2>
        <p>
          By creating an account, downloading our app, or using our website,
          you accept and agree to these Terms. If you do not agree, please do
          not use our services.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Description of Service
        </h2>
        <p>
          Appopener provides task scheduling, app launch automation, and
          reminder services across web, mobile, and desktop platforms. We
          reserve the right to modify, suspend, or discontinue any part of our
          service with reasonable notice.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          User Accounts and Responsibilities
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity under your account. You
          agree to provide accurate information and to use the service in
          compliance with applicable laws.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Acceptable Use
        </h2>
        <p>
          You agree not to use our service for any unlawful purpose, to
          interfere with other users, or to attempt to gain unauthorized
          access to our systems. We may suspend or terminate accounts that
          violate these terms.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Intellectual Property
        </h2>
        <p>
          All content, trademarks, and materials associated with Appopener are
          owned by us or our licensors. You may not copy, modify, or
          distribute our software or content without permission.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Limitation of Liability
        </h2>
        <p>
          Our service is provided &quot;as is.&quot; We are not liable for any
          indirect, incidental, or consequential damages arising from your use
          of our service. Our total liability is limited to the amount you
          paid us in the twelve months preceding the claim.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Changes to Terms
        </h2>
        <p>
          We may update these Terms from time to time. We will notify you of
          material changes via email or through the app. Continued use after
          such notice constitutes acceptance of the updated Terms.
        </p>

        <h2 style={{ marginTop: "28px", fontSize: "22px" }}>
          Contact
        </h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:support@appopener.app">support@appopener.app</a> or
          visit our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </PageLayout>
  );
}
