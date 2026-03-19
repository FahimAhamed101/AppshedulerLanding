import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";
import { pageKeywordGroups } from "@/lib/seo-keywords";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact the Appopener team for support, direct APK download help, app scheduler questions, and automatic app launcher setup.",
  path: "/contact",
  keywords: pageKeywordGroups.contact,
});

export default function ContactPage() {
  return (
    <PageLayout title="Contact Appopener">
      <div style={{ maxWidth: "800px", lineHeight: 1.8 }}>
        <p>
          Looking for a remote software engineer or want to create a web app,
          website, or mobile app? Contact me through WhatsApp or email below.
        </p>

        <div style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-whatsapp" style={{ marginRight: "10px" }} />
            WhatsApp
          </h2>
          <p>
            <a href="https://wa.me/8801706617723">+8801706617723</a>
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-envelope" style={{ marginRight: "10px" }} />
            Email
          </h2>
          <p>
            <a href="mailto:fahimahamedweb@gmail.com">fahimahamedweb@gmail.com</a>
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-phone" style={{ marginRight: "10px" }} />
            Phone
          </h2>
          <p>
            <a href="tel:+14155550172">+1 (415) 555-0172</a>
          </p>
          <p>
            <a href="tel:+14155550199">+1 (415) 555-0199</a>
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            <i className="fa fa-map-marker" style={{ marginRight: "10px" }} />
            Office
          </h2>
          <p>500 Market Street, San Francisco, CA</p>
        </div>

        <div style={{ marginTop: "40px", padding: "24px", background: "#f8f9fa", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "16px" }}>Send us a message</h3>
          <p style={{ marginBottom: "16px" }}>
            You can also use the contact form on our{" "}
            <Link href="/#mu-contact">home page</Link> to send a message directly.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
