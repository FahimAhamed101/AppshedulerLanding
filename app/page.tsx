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
  { href: "#mu-overview", label: "Overview" },
  { href: "#mu-feature", label: "Features" },
  { href: "#mu-how-it-works", label: "How It Works" },
  { href: "#mu-use-cases", label: "Use Cases" },
  { href: "#mu-video", label: "Demo" },
  { href: "#mu-apps-screenshot", label: "Screenshots" },
  { href: "#mu-testimonials", label: "Testimonials" },
  { href: "#mu-faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#mu-download", label: "Download" },
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
  {
    id: "collapseSix",
    question: "Which platforms does Appopener support?",
    answer:
      "Appopener works on Web, iOS, Android, Windows, and macOS. Your schedule syncs across devices so you can switch between phone, tablet, and desktop seamlessly.",
  },
  {
    id: "collapseSeven",
    question: "Can I schedule apps to open automatically on Android?",
    answer:
      "Yes. Appopener lets you schedule app launches on Android at specific times. Set up your timeline, assign apps to tasks, and they will open when it's time to work.",
  },
  {
    id: "collapseEight",
    question: "How does app automation work?",
    answer:
      "Appopener uses system-level scheduling to trigger app launches at predefined times. You create a schedule, link each task to the app you need, and the app opens automatically when the task starts.",
  },
  {
    id: "collapseNine",
    question: "Is my data secure?",
    answer:
      "Yes. We use encryption and follow security best practices. Your schedule and preferences stay private. See our Privacy Policy for full details.",
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

const testimonials = [
  {
    name: "Sarah M.",
    role: "Product Manager",
    quote:
      "Appopener cut my morning setup time in half. My calendar, notes, and Slack open right when I need them. Game changer for remote work.",
  },
  {
    name: "James K.",
    role: "Freelance Developer",
    quote:
      "I use it to block focus time and auto-open my code editor. No more wondering which app to open—it just happens. My productivity jumped.",
  },
  {
    name: "Lisa T.",
    role: "Support Team Lead",
    quote:
      "We schedule our support tool and ticket queue to open at shift start. Everyone stays aligned. Highly recommend for ops teams.",
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
        <section id="mu-overview" className="mu-feature-area" style={{ padding: "60px 0", background: "#f8fafc" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-title-area">
                  <h2 className="mu-title">App Overview</h2>
                  <span className="mu-title-dot" />
                </div>
                <div style={{ maxWidth: "800px", lineHeight: 1.8 }}>
                  <h3 style={{ fontSize: "20px", marginTop: "24px" }}>What the App Does</h3>
                  <p>
                    Appopener App Scheduler is a productivity tool that lets you plan tasks on a timeline, assign apps to each task, and automatically open those apps when it&apos;s time to work. Instead of manually switching between apps or forgetting what to do next, you set up your schedule once and let the app handle the rest. Whether you need to open your calendar at 9 AM, your code editor during a focus block, or your support dashboard at shift start, Appopener launches the right app at the right moment.
                  </p>
                  <p>
                    The app combines a visual timeline scheduler with smart reminders and team schedule sharing. You can create recurring tasks, block out focus time, and sync with your existing calendar. When a task is about to start, you get a reminder notification, and when it starts, the linked app opens automatically. This reduces context switching, keeps you on track, and makes your workflow predictable.
                  </p>

                  <h3 style={{ fontSize: "20px", marginTop: "24px" }}>Who It Is For</h3>
                  <p>
                    Appopener is built for individuals and teams who want to stay organized without constant manual effort. Solo professionals—freelancers, consultants, and remote workers—use it to structure their day and avoid decision fatigue about which app to open next. Small teams and operations groups use it to align schedules, coordinate standups and releases, and ensure everyone opens the right tools at the right time. Support and QA teams run repeatable workflows where specific apps open at shift start or before handoffs.
                  </p>
                  <p>
                    If you juggle multiple apps, struggle with context switching, or want a simpler way to run time-based workflows, Appopener is designed for you. It works across Web, iOS, Android, Windows, and macOS, so you can stay consistent whether you&apos;re at a desk or on the go.
                  </p>

                  <h3 style={{ fontSize: "20px", marginTop: "24px" }}>Key Benefits</h3>
                  <p>
                    <strong>Save time:</strong> No more opening apps manually or losing focus deciding what to do next. Your tools open when you need them.
                  </p>
                  <p>
                    <strong>Stay consistent:</strong> Recurring schedules and reminders help you build routines. Morning check-in, focus blocks, and end-of-day wrap-up happen on schedule.
                  </p>
                  <p>
                    <strong>Reduce context switching:</strong> By opening the right app for each task, you spend less time hopping between tools and more time in flow.
                  </p>
                  <p>
                    <strong>Collaborate better:</strong> Team schedule sharing lets you see when colleagues are busy, avoid conflicts, and align on shared timelines.
                  </p>
                  <p>
                    <strong>Automate workflows:</strong> For operations, support, and QA, Appopener can trigger the same app-opening sequence every day, reducing setup errors and keeping processes reliable.
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
                    <h2 className="mu-title">How to Use the App</h2>
                    <span className="mu-title-dot" />
                    <p>
                      Follow this step-by-step guide to get the most out of Appopener. We&apos;ve included tips and examples to help you succeed.
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
                  <div style={{ marginTop: "40px", padding: "24px", background: "#f8fafc", borderRadius: "12px" }}>
                    <h3 style={{ marginBottom: "16px" }}>Tips and Examples</h3>
                    <ul style={{ marginBottom: 0 }}>
                      <li><strong>Morning routine:</strong> Schedule your calendar, email, and task app to open at 8:30 AM so you start the day with context.</li>
                      <li><strong>Focus blocks:</strong> Set a 2-hour block and link your code editor or writing app. When the block starts, the app opens automatically.</li>
                      <li><strong>Standup prep:</strong> Open your project tool and Slack 5 minutes before standup. No more scrambling to find the right tab.</li>
                      <li><strong>End-of-day wrap-up:</strong> Schedule a 15-minute block with your notes app and task manager to capture what you accomplished.</li>
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

        <section id="mu-testimonials" style={{ padding: "60px 0", background: "#f8fafc" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-title-area">
                  <h2 className="mu-title">What Users Say</h2>
                  <span className="mu-title-dot" />
                  <p>
                    Teams and individuals use Appopener to stay on schedule and reduce app-switching friction.
                  </p>
                </div>
                <div className="row">
                  {testimonials.map((t) => (
                    <div className="col-md-4" key={t.name}>
                      <div
                        style={{
                          background: "#fff",
                          padding: "24px",
                          borderRadius: "12px",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                          height: "100%",
                        }}
                      >
                        <p style={{ fontStyle: "italic", marginBottom: "16px", lineHeight: 1.6 }}>
                          &quot;{t.quote}&quot;
                        </p>
                        <p style={{ margin: 0, fontWeight: 600 }}>{t.name}</p>
                        <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{t.role}</p>
                      </div>
                    </div>
                  ))}
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
                &copy; {new Date().getFullYear()} <a href={siteUrl}>{siteName}</a>. All rights reserved.
              </p>
              <nav aria-label="Footer links">
                <a href="/privacy" style={{ marginRight: "20px", color: "#d6e7ff" }}>
                  Privacy Policy
                </a>
                <a href="/about" style={{ marginRight: "20px", color: "#d6e7ff" }}>
                  About Us
                </a>
                <a href="/contact" style={{ marginRight: "20px", color: "#d6e7ff" }}>
                  Contact
                </a>
                <a href="/terms" style={{ color: "#d6e7ff" }}>
                  Terms of Service
                </a>
              </nav>
            </div>
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
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/app.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
