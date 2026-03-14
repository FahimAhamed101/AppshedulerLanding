/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://appopener.app";
const siteName = "Appopener App Scheduler";
const pageTitle = "Appopener App Scheduler - Task Scheduling and App Launch Automation";
const pageDescription =
  "Appopener App Scheduler helps teams and individuals schedule tasks, launch apps on time, automate reminders, and stay organized from one dashboard.";
const ogImageUrl = `${siteUrl}/assets/images/1.png`;
const pageKeywords = [
  "app scheduler",
  "app opening scheduler",
  "app launch automation",
  "automatic app opener",
  "open apps automatically",
  "task scheduling app",
  "team scheduling software",
  "calendar workflow automation",
  "productivity dashboard",
  "meeting reminder app",
  "workflow planner",
  "Appopener App Scheduler",
];

const menuLinks = [
  { href: "#mu-header", label: "Home" },
  { href: "#mu-feature", label: "Features" },
  { href: "#mu-how-it-works", label: "How It Works" },
  { href: "#mu-use-cases", label: "Use Cases" },
  { href: "#mu-video", label: "Demo" },
  { href: "#mu-apps-screenshot", label: "Screenshots" },
  { href: "#mu-download", label: "Download" },
  { href: "#mu-faq", label: "FAQ" },
  { href: "#mu-contact", label: "Contact" },
];

const features = [
  {
    icon: "fa-calendar",
    title: "Timeline Scheduler",
    description:
      "Drag, drop, and rebalance your tasks in seconds so your next action is always clear.",
  },
  {
    icon: "fa-bolt",
    title: "One-Tap Open",
    description:
      "Launch your most-used apps and workflows at the exact moment you planned them.",
  },
  {
    icon: "fa-bell-o",
    title: "Smart Reminders",
    description:
      "Get context-aware reminders before important sessions, meetings, and deadlines.",
  },
  {
    icon: "fa-users",
    title: "Team Schedule Sharing",
    description:
      "Share working blocks with your team and avoid collisions across projects and time zones.",
  },
];

const screenshots = [
  "/assets/images/screenshot_1.png",
  "/assets/images/screenshot/02.jpg",
  "/assets/images/screenshot/03.jpg",
  "/assets/images/screenshot/04.jpg",
  "/assets/images/screenshot/05.jpg",
  "/assets/images/screenshot/01.jpg",
  "/assets/images/screenshot/02.jpg",
  "/assets/images/screenshot/03.jpg",
  "/assets/images/screenshot/04.jpg",
  "/assets/images/screenshot/05.jpg",
];

const faqItems = [
  {
    id: "collapseOne",
    question: "What is Appopener App Scheduler?",
    answer:
      "Appopener is an app-first scheduler that helps you plan tasks and launch the right app at the right time from one timeline.",
  },
  {
    id: "collapseTwo",
    question: "How quickly can I start?",
    answer:
      "Create an account, choose your primary apps, and import your calendar. Most users are fully set up in under five minutes.",
  },
  {
    id: "collapseThree",
    question: "Is there a free plan?",
    answer:
      "Yes. Appopener includes a free plan for personal scheduling, plus premium plans for advanced automation and team coordination.",
  },
  {
    id: "collapseFour",
    question: "Can my team share schedules safely?",
    answer:
      "Team workspaces support role-based access, private events, and secure sharing controls for each schedule.",
  },
  {
    id: "collapseFive",
    question: "Where can I get support?",
    answer:
      "Reach out through the contact form, in-app chat, or email support for fast onboarding and technical help.",
  },
];

const howItWorksSteps = [
  {
    title: "1. Plan Your Timeline",
    description:
      "Create a schedule for meetings, focus blocks, and recurring tasks in one calendar view.",
  },
  {
    title: "2. Connect Your App Workflow",
    description:
      "Set the apps you want to open for each task so your tools launch when work starts.",
  },
  {
    title: "3. Run On-Time With Reminders",
    description:
      "Receive reminder alerts before every session and keep projects moving without missed deadlines.",
  },
];

const useCases = [
  {
    title: "App Scheduler For Teams",
    description:
      "Coordinate standups, release windows, and client calls with shared timelines and reminders across your team.",
  },
  {
    title: "Task Scheduling For Solo Work",
    description:
      "Plan deep work sessions, auto-open your tools, and keep a daily routine without context switching.",
  },
  {
    title: "Workflow Automation For Operations",
    description:
      "Trigger repeatable app-opening schedules for support, QA, and operations workflows that run every day.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: pageTitle,
    description:
      "Plan tasks, automate reminders, and launch your tools in one scheduler built for fast teams.",
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Appopener App Scheduler dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Schedule tasks, open apps on time, and keep your workday organized.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Productivity Software",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+1-415-555-0172",
      email: "support@appopener.app",
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: pageDescription,
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: pageTitle,
  description: pageDescription,
  inLanguage: "en-US",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#software`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: ogImageUrl,
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: siteName,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android, Windows, macOS",
  description: pageDescription,
  keywords: pageKeywords.join(", "),
  featureList: features.map((feature) => feature.title),
  url: siteUrl,
  image: ogImageUrl,
  softwareVersion: "1.0",
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: siteUrl,
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
                  Appopener
                </a>
              </div>

              <div className="mu-header-featured-area">
                <div className="mu-header-featured-img">
                  <img
                    src="/assets/images/1.png"
                    alt="Appopener App Scheduler dashboard preview"
                    fetchPriority="high"
                  />
                </div>

                <div className="mu-header-featured-content">
                  <p className="mu-kicker">Appopener App Scheduler</p>
                  <h1>
                    App Scheduler To Open Your Apps <span>Anytime</span>
                  </h1>
                  <p>
                    Schedule launches, automate reminders, and keep your
                    workflow organized in one clean dashboard made for fast
                    teams.
                  </p>

                  <div className="mu-app-download-area">
                    <h4>Get Appopener Today</h4>
                    <a
                      className="mu-apple-btn"
                      href="#mu-download"
                      aria-label="View iOS download options"
                    >
                      <i className="fa fa-apple" />
                      <span>app store</span>
                    </a>
                    <a
                      className="mu-google-btn"
                      href="#mu-download"
                      aria-label="View Android download options"
                    >
                      <i className="fa fa-android" />
                      <span>google play</span>
                    </a>
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
          <a className="mu-menu-close-btn" href="#" aria-label="Close navigation menu">
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
        <section id="mu-feature">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-feature-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">Built For Smart Scheduling</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Appopener keeps your day predictable with clear priorities,
                      instant app access, and focused scheduling tools for
                      individuals and teams.
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
                                <button className="btn mu-feature-btn" type="button" aria-label={feature.title}>
                                  <i className={`fa ${feature.icon}`} aria-hidden="true" />
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
                    <h2 className="mu-title">How The App Opening Scheduler Works</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Appopener gives you a simple workflow to plan tasks, open the
                      right apps, and complete your day on schedule.
                    </p>
                  </div>

                  <div className="row">
                    {howItWorksSteps.map((step) => (
                      <div className="col-md-4" key={step.title}>
                        <div className="mu-contact-right-single">
                          <h3 className="media-heading">{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
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
                      Appopener combines task scheduling, app opening automation,
                      and smart reminders to keep teams and individuals on
                      schedule.
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

        <section id="mu-video">
          <div className="mu-video-overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-video-area">
                    <h2>See Appopener In Action</h2>
                    <p>Watch how fast it is to schedule, open, and run your day.</p>
                    <a className="mu-video-play-btn" href="#" aria-label="Play demo video">
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mu-video-content">
            <div className="mu-video-iframe-area">
              <a className="mu-video-close-btn" href="#" aria-label="Close demo video">
                <i className="fa fa-times" aria-hidden="true" />
              </a>
              <iframe
                className="mu-video-iframe"
                width="854"
                height="480"
                src="https://www.youtube.com/embed/9r40_ffCZ_I"
                frameBorder="0"
                allowFullScreen
                title="Appopener App Scheduler demo video"
              />
            </div>
          </div>
        </section>

        <section id="mu-apps-screenshot">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-apps-screenshot-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">Appopener Screens</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Preview your dashboard, reminders, and timeline views
                      designed for high-speed planning.
                    </p>
                  </div>

                  <div className="mu-apps-screenshot-content">
                    <div className="mu-apps-screenshot-slider">
                      {screenshots.map((image, index) => (
                        <div className="mu-single-screeshot" key={`${image}-${index}`}>
                          <img
                            src={image}
                            alt={`Appopener app screenshot ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>
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
                    <h2 className="mu-title">Open The App Anytime</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Use Appopener on mobile or desktop and keep your schedule
                      available whenever work starts.
                    </p>
                  </div>

                  <div className="mu-download-content">
                    <a
                      className="mu-apple-btn"
                      href="#mu-contact"
                      aria-label="Contact Appopener for iOS app access"
                    >
                      <i className="fa fa-apple" />
                      <span>app store</span>
                    </a>
                    <a
                      className="mu-google-btn"
                      href="#mu-contact"
                      aria-label="Contact Appopener for Android app access"
                    >
                      <i className="fa fa-android" />
                      <span>google play</span>
                    </a>
                    <a
                      className="mu-windows-btn"
                      href="#mu-contact"
                      aria-label="Contact Appopener for desktop app access"
                    >
                      <i className="fa fa-windows" />
                      <span>desktop app</span>
                    </a>
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
                                  <span className={`fa ${isFirst ? "fa-minus" : "fa-plus"}`} />{" "}
                                  {item.question}
                                </a>
                              </h4>
                            </div>
                            <div
                              id={item.id}
                              className={`panel-collapse collapse${isFirst ? " in" : ""}`}
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
                              <i className="fa fa-map-marker" />
                            </div>
                            <p>
                              <strong>Office</strong>
                            </p>
                            <p>500 Market Street, San Francisco, CA</p>
                          </div>

                          <div className="mu-contact-right-single">
                            <div className="mu-icon">
                              <i className="fa fa-phone" />
                            </div>
                            <p>
                              <strong>Phone</strong>
                            </p>
                            <p>
                              <a href="tel:+14155550172">+1 (415) 555-0172</a>
                            </p>
                            <p>
                              <a href="tel:+14155550199">+1 (415) 555-0199</a>
                            </p>
                          </div>

                          <div className="mu-contact-right-single">
                            <div className="mu-icon">
                              <i className="fa fa-envelope" />
                            </div>
                            <p>
                              <strong>Email</strong>
                            </p>
                            <p>
                              <a href="mailto:hello@appopener.app">hello@appopener.app</a>
                            </p>
                            <p>
                              <a href="mailto:support@appopener.app">support@appopener.app</a>
                            </p>
                          </div>

                          <div className="mu-contact-right-single">
                            <div className="mu-social-media">
                              <a href={siteUrl} aria-label="Appopener home page on Facebook">
                                <i className="fa fa-facebook" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener home page on Twitter">
                                <i className="fa fa-twitter" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener home page on Google Plus">
                                <i className="fa fa-google-plus" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener home page on LinkedIn">
                                <i className="fa fa-linkedin" />
                              </a>
                              <a href={siteUrl} aria-label="Appopener home page on YouTube">
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
              &copy; 2026 <a href={siteUrl}>{siteName}</a>. All
              rights reserved.
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
        id="appopener-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/app.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
