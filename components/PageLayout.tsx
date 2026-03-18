import Header from "./Header";
import Footer from "./Footer";
import DownloadButton from "./DownloadButton";

export default function PageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Header />
      <main
        role="main"
        style={{
          minHeight: "calc(100vh - 180px)",
          padding: "40px 0 60px",
        }}
      >
        <div className="container">
          <h1
            style={{
              marginBottom: "24px",
              fontSize: "32px",
              color: "#051634",
            }}
          >
            {title}
          </h1>
          {children}
          <section
            aria-label="Direct download"
            style={{
              marginTop: "40px",
              padding: "28px",
              borderRadius: "18px",
              background:
                "linear-gradient(140deg, #051634 0%, #0d4fb5 58%, #2899ee 100%)",
              color: "#fff",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "10px", color: "#fff" }}>
              Download Appopener APK
            </h2>
            <p
              style={{
                marginBottom: "18px",
                maxWidth: "640px",
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.7,
              }}
            >
              Direct Android download for Appopener. No Google Play or App Store
              listing is required.
            </p>
            <DownloadButton />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
