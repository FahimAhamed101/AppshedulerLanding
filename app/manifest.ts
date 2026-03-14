import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Appopener App Scheduler",
    short_name: "Appopener",
    description:
      "Appopener App Scheduler helps teams and individuals schedule tasks, open apps automatically, and stay on track with smart reminders.",
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
