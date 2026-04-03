import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "App Scheduler – Auto Open & Close Apps | Productivity Tool",
    short_name: "App Scheduler",
    description:
      "App Scheduler to auto open and close apps on schedule. Productivity tool—schedule tasks, open and close apps automatically, and stay on track with smart reminders.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d6efd",
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
