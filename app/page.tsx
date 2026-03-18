/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { createPageMetadata } from "@/lib/page-metadata";
import { pageKeywordGroups } from "@/lib/seo-keywords";
import {
  defaultOgImage,
  directDownloadUrl,
  siteBrandName,
  siteUrl,
} from "@/lib/site";

const pageTitle = "App Opener Download and App Scheduler APK for Android";
const pageDescription =
  "Download Appopener APK directly for Android. Schedule apps to open automatically, automate reminders, and support open in app workflows without Google Play or the App Store.";

const menuLinks = [
  { href: "#mu-header", label: "Home" },
  { href: "#mu-overview", label: "Overview" },
  { href: "#mu-feature", label: "Features" },
  { href: "#mu-how-it-works", label: "How It Works" },
  { href: "#mu-download", label: "Download" },
  { href: "#mu-faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#mu-contact", label: "Contact" },
];

const features = [
  {
    icon: "fa-calendar",
    title: "Timeline Scheduler",
    description: "Plan tasks on a timeline and keep your next action clear.",
  },
  {
    icon: "fa-bolt",
    title: "One-Tap Open",
    description: "Launch your most-used apps exactly when the task begins.",
  },
  {
    icon: "fa-bell-o",
    title: "Smart Reminders",
    description: "Receive alerts before work starts so nothing gets missed.",
  },
  {
    icon: "fa-users",
    title: "Shared Schedules",
    description: "Align teams on timelines, shifts, and recurring workflows.",
  },
];

const useCases = [
  {
    title: "App Scheduler For Teams",
    description: "Coordinate meetings, releases, and daily operations.",
  },
  {
    title: "Task Scheduling For Solo Work",
    description: "Reduce context switching and stay in flow longer.",
  },
  {
    title: "Open In App Workflows",
    description: "Prepare app launches for YouTube and other repeat tasks.",
  },
];

const faqItems = [
  {
    id: "collapseOne",
    question: "What is Appopener App Scheduler?",
    answer:
      "Appopener is an app-first scheduler that helps you plan tasks and launch the right app at the right time.",
  },
  {
    id: "collapseTwo",
    question: "How do I download Appopener APK?",
    answer:
      "Use the Download Now button on this page to get the direct APK file. You do not need Google Play or the App Store for this Android build.",
  },
  {
    id: "collapseThree",
    question: "Can I schedule apps to open automatically on Android?",
    answer:
      "Yes. Appopener lets you schedule app launches on Android at specific times and tie them to tasks in your timeline.",
  },
  {
    id: "collapseFour",
    question: "Can I use Appopener online or on PC?",
    answer:
      "You can visit Appopener online from a desktop browser to read setup guides, manage downloads, and access the site from a PC. The downloadable app on this page is the Android APK.",
  },
  {
    id: "collapseFive",
    question: "Can Appopener help with open in app YouTube workflows?",
    answer:
      "Yes. Appopener is useful for open in app workflows, including launching apps like YouTube when a scheduled task starts.",
  },
  {
    id: "collapseSix",
    question: "Is my data secure?",
    answer:
      "Yes. We use encryption and follow security best practices to protect your schedule and preferences.",
  },
];

export const metadata: Metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/",
    keywords: pageKeywordGroups.home,
  }),
  category: "Productivity Software",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteBrandName,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteBrandName,
  description: pageDescription,
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: siteBrandName,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Android",
  description: pageDescription,
  keywords: pageKeywordGroups.home.join(", "),
  featureList: features.map((feature) => feature.title),
  url: siteUrl,
  image: defaultOgImage,
  downloadUrl: directDownloadUrl,
  installUrl: directDownloadUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: directDownloadUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <header id="mu-header" role="banner">
        <div className="mu-header-overlay">
          <div className="container">
            <div className="mu-header-area">
              <div className="mu-logo-area">
                <a className="mu-logo" href="#mu-header">
                  {siteBrandName}
                </a>
              </div>

              <div className="mu-header-featured-area">
                <div className="mu-header-featured-img">
                  <img
                    src="/assets/images/1.png"
                    alt="Appopener download and app scheduler dashboard preview"
                    fetchPriority="high"
                  />
                </div>

                <div className="mu-header-featured-content">
                  <p className="mu-kicker">Direct Appopener APK Download</p>
                  <h1>
                    Download Appopener And Open Apps <span>On Schedule</span>
                  </h1>
                  <p>
                    Direct Android APK download for people who want to auto open
                    apps, automate reminders, and keep work flowing on time.
                  </p>

                  <div className="mu-app-download-area">
                    <h4>No Google Play or App Store required</h4>
                    <DownloadButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className="mu-menu-btn"
        aria-label="Open navigation menu"
      >
        <i className="fa fa-bars" />
      </button>

      <div className="mu-menu-full-overlay">
        <div className="mu-menu-full-overlay-inner">
          <a
            className="mu-menu-close-btn"
            href="#"
            aria-label="Close navigation menu"
          >
            <span className="mu-line" />
          </a>
          <nav className="mu-menu" role="navigation" aria-label="Main navigation">
            <ul>
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <main role="main">
        <section
          id="mu-overview"
          className="mu-feature-area"
          style={{ padding: "60px 0", background: "#f8fafc" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-title-area">
                  <h2 className="mu-title">App Overview</h2>
                  <span className="mu-title-dot" />
                </div>
                <div style={{ maxWidth: "820px", lineHeight: 1.8 }}>
                  <h3 style={{ fontSize: "20px", marginTop: "24px" }}>
                    Direct App Download
                  </h3>
                  <p>
                    If you are looking for App opener download, App Opener APK,
                    or App Opener for Android, use the direct download link on
                    this page. The APK is delivered directly, so you do not need
                    Google Play or the App Store.
                  </p>
                  <p>
                    You can also visit Appopener online from a PC to read setup
                    guides, learn open in app YouTube use cases, and download
                    the latest Android build from your desktop browser.
                  </p>

                  <h3 style={{ fontSize: "20px", marginTop: "24px" }}>
                    What the App Does
                  </h3>
                  <p>
                    Appopener lets you plan tasks on a timeline, assign apps to
                    each task, and automatically open those apps when it is time
                    to work. This reduces context switching and keeps routines
                    predictable for individuals and teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-feature">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-feature-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">Built For Smart Scheduling</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Appopener keeps your day predictable with focused
                      scheduling tools, app launches, and reminders.
                    </p>
                  </div>

                  <div className="mu-feature-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mu-feature-content-left">
                          <img
                            className="mu-profile-img"
                            src="/assets/images/iphone-group.png"
                            alt="Appopener feature preview on mobile screens"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mu-feature-content-right">
                          {features.map((feature) => (
                            <div className="media" key={feature.title}>
                              <div className="media-left">
                                <button
                                  className="btn mu-feature-btn"
                                  type="button"
                                  aria-label={feature.title}
                                >
                                  <i
                                    className={`fa ${feature.icon}`}
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                              <div className="media-body">
                                <h3 className="media-heading">{feature.title}</h3>
                                <p>{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-how-it-works">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-feature-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">How It Works</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Create the schedule, connect the apps, and let Appopener
                      launch them when the timeline reaches each task.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="mu-contact-right-single">
                        <h3 className="media-heading">1. Plan Your Timeline</h3>
                        <p>Create a schedule for work blocks, meetings, and routines.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-contact-right-single">
                        <h3 className="media-heading">2. Connect Your Apps</h3>
                        <p>Choose which app should open for each planned task.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mu-contact-right-single">
                        <h3 className="media-heading">3. Run On Time</h3>
                        <p>Get reminders and launch the right app at the right moment.</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "40px",
                      padding: "24px",
                      background: "#f8fafc",
                      borderRadius: "12px",
                    }}
                  >
                    <h3 style={{ marginBottom: "16px" }}>Popular Uses</h3>
                    <ul style={{ marginBottom: 0 }}>
                      <li>Morning routine app launches</li>
                      <li>Focus blocks for writing or coding</li>
                      <li>Open in app YouTube reminders before classes or workouts</li>
                      <li>Daily support and operations startup workflows</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-use-cases">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-feature-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">Best App Scheduler Use Cases</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Appopener combines task scheduling, app opening
                      automation, and smart reminders to keep work on schedule.
                    </p>
                  </div>

                  <div className="row">
                    {useCases.map((useCase) => (
                      <div className="col-md-4" key={useCase.title}>
                        <div className="mu-contact-right-single">
                          <h3 className="media-heading">{useCase.title}</h3>
                          <p>{useCase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-download">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-download-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">Download Appopener APK</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Direct Android download for Appopener. No Google Play or
                      App Store listing is required.
                    </p>
                  </div>

                  <div className="mu-download-content">
                    <DownloadButton />
                    <p
                      style={{
                        marginTop: "22px",
                        color: "rgba(255,255,255,0.92)",
                        fontSize: "16px",
                      }}
                    >
                      <a
                        href={directDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff", textDecoration: "underline" }}
                      >
                        Direct APK download link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-faq">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-faq-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">FAQ</h2>
                    <span className="mu-title-dot" />
                  </div>

                  <div className="mu-faq-content">
                    <div className="panel-group" id="accordion">
                      {faqItems.map((item, index) => {
                        const isFirst = index === 0;
                        return (
                          <div className="panel panel-default" key={item.id}>
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href={`#${item.id}`}
                                  aria-expanded={isFirst ? "true" : "false"}
                                >
                                  <span
                                    className={`fa ${
                                      isFirst ? "fa-minus" : "fa-plus"
                                    }`}
                                  />{" "}
                                  {item.question}
                                </a>
                              </h4>
                            </div>
                            <div
                              id={item.id}
                              className={`panel-collapse collapse${
                                isFirst ? " in" : ""
                              }`}
                            >
                              <div className="panel-body">{item.answer}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-contact-area">
                  <div className="mu-title-area">
                    <h2 className="mu-heading-title">Talk To The Appopener Team</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Need a custom setup for your company? Send us a message
                      and we will help you launch quickly.
                    </p>
                  </div>

                  <div className="mu-contact-content">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="mu-contact-left">
                          <div id="form-messages" />
                          <form
                            id="ajax-contact"
                            method="post"
                            action="mailer.php"
                            className="mu-contact-form"
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                id="name"
                                name="name"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Work Email"
                                id="email"
                                name="email"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                placeholder="Tell us what you need"
                                id="message"
                                name="message"
                                required
                              />
                            </div>
                            <button type="submit" className="mu-send-msg-btn">
                              <span>SEND</span>
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="mu-contact-right">
                          <div className="mu-contact-right-single">
                            <div className="mu-icon">
                              <i className="fa fa-envelope" />
                            </div>
                            <p>
                              <strong>Email</strong>
                            </p>
                            <p>
                              <a href="mailto:hello@appopener.app">
                                hello@appopener.app
                              </a>
                            </p>
                            <p>
                              <a href="mailto:support@appopener.app">
                                support@appopener.app
                              </a>
                            </p>
                          </div>

                          <div className="mu-contact-right-single">
                            <div className="mu-social-media">
                              <a href={siteUrl} aria-label="Appopener on Facebook">
                                <i className="fa fa-facebook" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener on Twitter">
                                <i className="fa fa-twitter" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener on LinkedIn">
                                <i className="fa fa-linkedin" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener on YouTube">
                                <i className="fa fa-youtube" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="mu-footer" role="contentinfo">
        <div className="container">
          <div className="mu-footer-area">
            <p className="mu-copy-right">
              &copy; {new Date().getFullYear()} <a href={siteUrl}>{siteBrandName}</a>.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <script
        id="appopener-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="appopener-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        id="appopener-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        id="appopener-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/app.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
