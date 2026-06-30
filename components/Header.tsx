"use client";

import Link from "next/link";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/#mu-feature", label: "Features" },
  { href: "/#mu-how-it-works", label: "How It Works" },
  { href: "/#mu-apps-screenshot", label: "Screenshots" },
  { href: "/#mu-faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#mu-download", label: "Download" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header
      className="mu-inner-header"
      role="banner"
      style={{
        background: "linear-gradient(140deg, #051634 0%, #08245f 100%)",
        padding: "16px 0",
        position: "sticky" as const,
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            className="mu-logo"
            style={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Appopener
          </Link>
          <nav role="navigation" aria-label="Main navigation">
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 24px",
              }}
            >
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
