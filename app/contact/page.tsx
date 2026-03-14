import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Appopener team. Get support, request features, or ask questions about our app scheduler.",
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
            <a href="mailto:hello@appopener.app">hello@appopener.app</a>
          </p>
          <p>
            Support:{" "}
            <a href="mailto:support@appopener.app">support@appopener.app</a>
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
            <a href="/#mu-contact">home page</a> to send a message directly.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
