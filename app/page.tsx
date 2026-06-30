/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Script from "next/script";
import styles from "./home.module.css";
import { seoKeywords } from "@/lib/seo-keywords";
import {
  googlePlayUrl,
  helloEmail,
  siteBrandName,
  siteUrl,
  supportEmail,
} from "@/lib/site";

const pageTitle = "App Scheduler for Android | Auto Open Apps on Schedule";
const pageDescription =
  "Install Appopener from Google Play to schedule apps to open automatically on Android, get reminder alerts, and stay focused with repeatable daily routines.";
const ogImageUrl = `${siteUrl}/assets/images/1.png`;
const playStoreAriaLabel = "Download Appopener from Google Play";
const pageKeywords = [
  ...seoKeywords,
  "schedule apps to open automatically on android",
  "android routine launcher",
  "google play productivity app",
  "automatic app opener android",
];

const menuLinks = [
  { href: "#mu-header", label: "Home" },
  { href: "#mu-overview", label: "Overview" },
  { href: "#mu-feature", label: "Features" },
  { href: "#mu-how-it-works", label: "How It Works" },
  { href: "#mu-use-cases", label: "Use Cases" },
  { href: "#mu-video", label: "Demo" },
  { href: "#mu-apps-screenshot", label: "Screenshots" },
  { href: "#mu-routines", label: "Routines" },
  { href: "#mu-faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#mu-download", label: "Download" },
  { href: "#mu-contact", label: "Contact" },
];

const heroStats = [
  { value: "Android", label: "Public release on Google Play" },
  { value: "1 tap", label: "Start a saved routine fast" },
  { value: "Daily", label: "Recurring app schedules and reminders" },
];

const overviewCards = [
  {
    icon: "fa-clock-o",
    title: "Time-based app launches",
    description:
      "Build a routine once and let Appopener launch the apps you need at the right time on Android.",
  },
  {
    icon: "fa-bell-o",
    title: "Reminder alerts before each block",
    description:
      "Receive a notification before a task starts so you can move into work without scrambling for the right app.",
  },
  {
    icon: "fa-repeat",
    title: "Repeatable routines for busy days",
    description:
      "Create recurring schedules for study sessions, shift handoffs, workout plans, or morning startup sequences.",
  },
];

const features = [
  {
    icon: "fa-calendar",
    title: "Visual schedule builder",
    description:
      "Set up focus blocks, recurring tasks, and fixed-time routines with a clear timeline that is easy to scan.",
  },
  {
    icon: "fa-android",
    title: "Automatic Android app opening",
    description:
      "Assign an app to each task so your calendar, notes, music, or work tools open when the session begins.",
  },
  {
    icon: "fa-bell",
    title: "Smart reminders",
    description:
      "Add reminder alerts before every task so you have enough lead time to switch context without losing momentum.",
  },
  {
    icon: "fa-shield",
    title: "Routine-first productivity",
    description:
      "Reduce decision fatigue by turning repeated work into structured Android routines that run the same way every day.",
  },
];

const howItWorksSteps = [
  {
    title: "1. Create your routine",
    description:
      "Choose the times you want to work, study, exercise, or check in, then save them as a repeatable schedule.",
  },
  {
    title: "2. Attach the right apps",
    description:
      "Link each block to the Android app you need so Appopener knows what to open when the block starts.",
  },
  {
    title: "3. Let reminders keep you on track",
    description:
      "Get a heads-up before each session and move into the next task with less friction and less app hunting.",
  },
];

const useCases = [
  {
    title: "Deep work routines",
    description:
      "Open your notes app, code editor, timer, and focus playlist at the start of every work sprint.",
  },
  {
    title: "Study schedules",
    description:
      "Launch reading apps, flashcards, or class tools automatically for each study block throughout the week.",
  },
  {
    title: "Shift and support workflows",
    description:
      "Start the same support, QA, or operations apps at shift handoff so every day begins with the right tools ready.",
  },
];

const routineExamples = [
  {
    title: "Morning startup",
    summary:
      "Open your calendar, notes, and communication apps as soon as the workday begins.",
  },
  {
    title: "Study sprint",
    summary:
      "Launch flashcards, reading apps, and a timer for each scheduled revision session.",
  },
  {
    title: "Shift handoff",
    summary:
      "Bring up the same dashboard, ticket queue, and internal chat tools at the start of every shift.",
  },
];

const screenshots = [
  "/assets/images/screenshot_1.png",
  "/assets/images/screenshot/02.jpg",
  "/assets/images/screenshot/03.jpg",
  "/assets/images/screenshot/04.jpg",
  "/assets/images/screenshot/05.jpg",
];

const faqItems = [
  {
    id: "collapseOne",
    question: "What does Appopener App Scheduler do on Android?",
    answer:
      "Appopener helps you create time-based routines on Android. You can schedule tasks, attach apps to each block, and open those apps when it is time to begin.",
  },
  {
    id: "collapseTwo",
    question: "Where can I download the app?",
    answer:
      "The public install link on this landing page points only to the Google Play listing for Android.",
  },
  {
    id: "collapseThree",
    question: "Can I schedule apps to open automatically?",
    answer:
      "Yes. Set a time, assign the Android app you want for that task, and Appopener handles the launch flow for your saved routine.",
  },
  {
    id: "collapseFour",
    question: "Can I make recurring routines?",
    answer:
      "Yes. You can build repeatable daily or weekly schedules for work, study, operations, or personal routines.",
  },
  {
    id: "collapseFive",
    question: "Does Appopener send reminders too?",
    answer:
      "Yes. Reminder alerts help you prepare before a block starts, which is useful for meetings, deep work, and time-boxed tasks.",
  },
  {
    id: "collapseSix",
    question: "Is there an Apple App Store link on this page?",
    answer:
      "No. The landing page only provides the Google Play link for Android and does not show an Apple App Store download button.",
  },
  {
    id: "collapseSeven",
    question: "Who is the app best for?",
    answer:
      "It is useful for anyone who repeats the same digital routine often, including students, remote workers, creators, support teams, and operators.",
  },
  {
    id: "collapseEight",
    question: "How can I contact support?",
    answer:
      `Email ${supportEmail} for support or ${helloEmail} for general questions, onboarding, and partnership requests.`,
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
    siteName: siteBrandName,
    title: pageTitle,
    description: pageDescription,
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "App Scheduler for Android dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
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
  name: siteBrandName,
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo.png`,
  email: supportEmail,
  sameAs: [googlePlayUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: supportEmail,
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
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
  name: `${siteBrandName} App Scheduler`,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Android",
  description: pageDescription,
  keywords: pageKeywords.join(", "),
  featureList: features.map((feature) => feature.title),
  url: siteUrl,
  image: ogImageUrl,
  downloadUrl: googlePlayUrl,
  installUrl: googlePlayUrl,
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: googlePlayUrl,
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
      <header id="mu-header" className={styles.heroHeader} role="banner">
        <div className={`mu-header-overlay ${styles.heroOverlay}`}>
          <div className="container">
            <div className="mu-header-area">
              <div className="mu-logo-area">
                <a className="mu-logo" href="#mu-header">
                  {siteBrandName}
                </a>
              </div>

              <div className={`mu-header-featured-area ${styles.heroGrid}`}>
                <div className={`mu-header-featured-content ${styles.heroCopy}`}>
                  <p className={styles.heroKicker}>Android app scheduling from Google Play</p>
                  <h1>
                    Schedule apps to open on time on <span>Android</span>
                  </h1>
                  <p className={styles.heroLead}>
                    Appopener helps you schedule apps to open automatically on
                    Android, send reminder alerts before each block, and turn
                    repeated tasks into clean daily routines.
                  </p>

                  <div className={styles.heroActions}>
                    <a
                      className={`mu-google-btn ${styles.playButton}`}
                      href={googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={playStoreAriaLabel}
                    >
                      <i className="fa fa-android" />
                      <span>google play</span>
                    </a>
                    <a className={styles.secondaryLink} href="#mu-feature">
                      Explore features
                    </a>
                  </div>

                  <p className={styles.availabilityNote}>
                    The only public install link on this page is the Google Play
                    listing.
                  </p>

                  <div className={styles.statGrid}>
                    {heroStats.map((stat) => (
                      <div className={styles.statCard} key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mu-header-featured-img ${styles.heroVisualWrap}`}>
                  <div className={styles.heroGlow} />
                  <img
                    className={styles.heroVisual}
                    src="/assets/images/1.png"
                    alt="App Scheduler for Android dashboard preview"
                    fetchPriority="high"
                  />
                  <div className={styles.floatingCard}>
                    <p className={styles.floatingCardLabel}>Routine example</p>
                    <h2>8:30 AM startup</h2>
                    <p>
                      Calendar, notes, and task apps open automatically at the
                      start of the day.
                    </p>
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
        <section id="mu-overview" className={styles.lightSection}>
          <div className="container">
            <div className="mu-title-area">
              <h2 className="mu-title">Android App Scheduler Overview</h2>
              <span className="mu-title-dot" />
              <p className={styles.sectionLead}>
                Appopener is an Android productivity app built for people who
                repeat the same digital routine every day and want their apps
                ready at the exact moment work starts.
              </p>
            </div>

            <div className={styles.overviewGrid}>
              {overviewCards.map((item) => (
                <article className={styles.overviewCard} key={item.title}>
                  <div className={styles.cardIcon}>
                    <i className={`fa ${item.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.proseBlock}>
              <h3>What the app does</h3>
              <p>
                Appopener lets you build a routine, attach the apps you need,
                and schedule those apps to open automatically on Android.
                Instead of manually opening the same tools for every focus
                block, class, meeting, or shift, you save the flow once and use
                it again whenever the schedule repeats.
              </p>
              <h3>Who it is for</h3>
              <p>
                The app works well for students, freelancers, remote workers,
                creators, support teams, and anyone who wants a cleaner way to
                move between tasks. If your day depends on opening the right app
                at the right time, an Android app scheduler can remove a lot of
                repetitive setup.
              </p>
              <h3>Why it helps</h3>
              <p>
                Fewer manual steps means less context switching. Reminder alerts
                reduce missed starts, and recurring routines keep your workday
                consistent. That is the core benefit of using an app scheduler
                from Google Play instead of relying on memory alone.
              </p>
            </div>
          </div>
        </section>

        <section id="mu-feature">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-feature-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">Built for predictable Android routines</h2>
                    <span className="mu-title-dot" />
                    <p className={styles.sectionLead}>
                      The landing page now focuses on a single install path and
                      a single promise: schedule your Android apps, stay on
                      time, and cut the friction out of repeated tasks.
                    </p>
                  </div>

                  <div className="mu-feature-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mu-feature-content-left">
                          <img
                            className={`mu-profile-img ${styles.featurePreview}`}
                            src="/assets/images/iphone-group.png"
                            alt="Appopener mobile feature preview"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={`${styles.featureList} mu-feature-content-right`}>
                          {features.map((feature) => (
                            <div className="media" key={feature.title}>
                              <div className="media-left">
                                <button
                                  className="btn mu-feature-btn"
                                  type="button"
                                  aria-label={feature.title}
                                >
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

        <section id="mu-how-it-works" className={styles.lightSection}>
          <div className="container">
            <div className="mu-title-area">
              <h2 className="mu-title">How the app works</h2>
              <span className="mu-title-dot" />
              <p className={styles.sectionLead}>
                Setup stays simple: define the schedule, assign the Android
                apps, and let reminders plus launch actions handle the rest.
              </p>
            </div>

            <div className={styles.stepGrid}>
              {howItWorksSteps.map((step) => (
                <article className={styles.stepCard} key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.tipsPanel}>
              <h3>Routine ideas you can set up quickly</h3>
              <ul>
                <li>
                  <strong>Morning planning:</strong> Open your calendar, task
                  manager, and notes app before the workday starts.
                </li>
                <li>
                  <strong>Focus blocks:</strong> Launch a timer, writing app, or
                  code editor right when a deep work session begins.
                </li>
                <li>
                  <strong>Study sessions:</strong> Bring up reading, flashcard,
                  and class tools for each scheduled revision block.
                </li>
                <li>
                  <strong>Shift handoffs:</strong> Start the same support or QA
                  apps on time for every team handoff.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="mu-use-cases">
          <div className="container">
            <div className="mu-title-area">
              <h2 className="mu-title">Best use cases for App Scheduler</h2>
              <span className="mu-title-dot" />
              <p className={styles.sectionLead}>
                The strongest fit is any workflow where the same Android apps
                need to open on a repeatable schedule.
              </p>
            </div>

            <div className="row">
              {useCases.map((useCase) => (
                <div className="col-md-4" key={useCase.title}>
                  <article className={styles.useCaseCard}>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mu-video">
          <div className="mu-video-overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-video-area">
                    <h2>See Appopener in action</h2>
                    <p>
                      Watch the Android app scheduler flow from setup to launch.
                    </p>
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
                title="App Scheduler for Android demo video"
              />
            </div>
          </div>
        </section>

        <section id="mu-apps-screenshot" className={styles.lightSection}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-apps-screenshot-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">App screens</h2>
                    <span className="mu-title-dot" />
                    <p className={styles.sectionLead}>
                      Preview the scheduler, reminders, and app-launch setup
                      screens before you install from Google Play.
                    </p>
                  </div>

                  <div className="mu-apps-screenshot-content">
                    <div className="mu-apps-screenshot-slider">
                      {screenshots.map((image, index) => (
                        <div className="mu-single-screeshot" key={`${image}-${index}`}>
                          <img
                            src={image}
                            alt={`App Scheduler screenshot ${index + 1}`}
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

        <section id="mu-routines">
          <div className="container">
            <div className="mu-title-area">
              <h2 className="mu-title">Popular routine ideas</h2>
              <span className="mu-title-dot" />
              <p className={styles.sectionLead}>
                These are the kinds of repeated flows an Android app scheduler
                handles well when you want less setup and more consistency.
              </p>
            </div>

            <div className={styles.routineGrid}>
              {routineExamples.map((routine) => (
                <article className={styles.routineCard} key={routine.title}>
                  <h3>{routine.title}</h3>
                  <p>{routine.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mu-download" className={styles.downloadSection}>
          <div className="container">
            <div className="mu-download-area">
              <div className="mu-title-area">
                <h2 className="mu-title">Install from Google Play</h2>
                <span className="mu-title-dot" />
                <p>
                  This landing page now exposes one clear install path so users
                  and search engines both understand where to download the app.
                </p>
              </div>

              <div className={styles.downloadPanel}>
                <p>
                  Appopener is publicly linked here through Google Play only.
                  The Apple App Store button and other download buttons have
                  been removed.
                </p>
                <a
                  className={`mu-google-btn ${styles.playButton} ${styles.downloadButton}`}
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={playStoreAriaLabel}
                >
                  <i className="fa fa-android" />
                  <span>google play</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-faq" className={styles.lightSection}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-faq-area">
                  <div className="mu-title-area">
                    <h2 className="mu-title">FAQ</h2>
                    <span className="mu-title-dot" />
                    <p className={styles.sectionLead}>
                      Short answers for users searching for an Android app
                      scheduler, Google Play install details, and app automation
                      basics.
                    </p>
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
                    <h2 className="mu-heading-title">Contact the Appopener team</h2>
                    <span className="mu-title-dot" />
                    <p className={styles.sectionLead}>
                      Use the form for onboarding, setup questions, business
                      requests, or support related to the Android app.
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
                                placeholder="Email Address"
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
                              <span>Send</span>
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className={styles.contactColumn}>
                          <article className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                              <i className="fa fa-envelope" />
                            </div>
                            <h3>Email</h3>
                            <p>
                              <a href={`mailto:${helloEmail}`}>{helloEmail}</a>
                            </p>
                            <p>
                              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
                            </p>
                          </article>

                          <article className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                              <i className="fa fa-android" />
                            </div>
                            <h3>Public install</h3>
                            <p>
                              <a
                                href={googlePlayUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View the Google Play listing
                              </a>
                            </p>
                          </article>

                          <article className={styles.contactCard}>
                            <div className={styles.contactIcon}>
                              <i className="fa fa-lightbulb-o" />
                            </div>
                            <h3>Best topics to send</h3>
                            <p>
                              Android setup questions, routine planning help,
                              feature requests, partnership inquiries, and store
                              listing feedback.
                            </p>
                          </article>
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
            <div className={styles.footerRow}>
              <p className="mu-copy-right">
                &copy; {new Date().getFullYear()}{" "}
                <a href={siteUrl}>{siteBrandName}</a>. All rights reserved.
              </p>
              <nav aria-label="Footer links">
                <a href="/privacy" className={styles.footerLink}>
                  Privacy Policy
                </a>
                <a href="/about" className={styles.footerLink}>
                  About Us
                </a>
                <a href="/contact" className={styles.footerLink}>
                  Contact
                </a>
                <a href="/terms" className={styles.footerLink}>
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
