import Link from "next/link";

const siteUrl = "https://appopener.app";
const siteName = "Appopener App Scheduler";

export default function Footer() {
  return (
    <footer id="mu-footer" role="contentinfo">
      <div className="container">
        <div className="mu-footer-area">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <p className="mu-copy-right">
              &copy; {new Date().getFullYear()}{" "}
              <Link href={siteUrl}>{siteName}</Link>. All rights reserved.
            </p>
            <nav aria-label="Footer links">
              <Link
                href="/privacy"
                style={{ marginRight: "20px", color: "#d6e7ff" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                style={{ marginRight: "20px", color: "#d6e7ff" }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                style={{ marginRight: "20px", color: "#d6e7ff" }}
              >
                Contact
              </Link>
              <Link href="/terms" style={{ color: "#d6e7ff" }}>
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
