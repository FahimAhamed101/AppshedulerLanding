import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "App Scheduler for Android | Auto Open Apps on Schedule",
    short_name: "App Scheduler",
    description:
      "Install Appopener from Google Play to schedule apps to open automatically on Android, get reminder alerts, and keep daily routines on track.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#07152f",
    theme_color: "#10b981",
    categories: ["productivity", "business"],
    icons: [
      {
        src: "/assets/images/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
