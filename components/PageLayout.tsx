import Header from "./Header";
import Footer from "./Footer";

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
        </div>
      </main>
      <Footer />
    </>
  );
}
