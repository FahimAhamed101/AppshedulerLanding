import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { seoKeywords } from "@/lib/seo-keywords";
import { googlePlayUrl, helloEmail, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Appopener team. Get support, request features, or ask questions about our app scheduler, auto open apps, and automatic app launcher.",
  keywords: seoKeywords,
};

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div style={{ maxWidth: "800px", lineHeight: 1.8 }}>
        <p>
          Have a question, need support, or want to learn more about
          Appopener? We&apos;re here to help. Reach out through any of the
          options below.
        </p>

        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-envelope" style={{ marginRight: "10px" }} />
            Email
          </h2>
          <p>
            General inquiries:{" "}
            <a href={`mailto:${helloEmail}`}>{helloEmail}</a>
          </p>
          <p>
            Support: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-android" style={{ marginRight: "10px" }} />
            Google Play
          </h2>
          <p>
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
              View the public Android app listing
            </a>
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-lightbulb-o" style={{ marginRight: "10px" }} />
            Best topics to send
          </h2>
          <p>
            Ask about Android setup, routine planning, support issues, feature
            requests, or partnership opportunities.
          </p>
        </div>

        <div style={{ marginTop: "40px", padding: "24px", background: "#f8f9fa", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "16px" }}>Send us a message</h3>
          <p style={{ marginBottom: "16px" }}>
            You can also use the contact form on our{" "}
            <Link href="/#mu-contact">home page</Link> to send a message
            directly.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
