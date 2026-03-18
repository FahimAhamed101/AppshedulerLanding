import type { MetadataRoute } from "next";
import { defaultDescription, defaultSeoTitle, siteBrandName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${defaultSeoTitle} | ${siteBrandName}`,
    short_name: siteBrandName,
    description: defaultDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d4fb5",
    categories: ["productivity", "business", "utilities"],
    icons: [
      {
        src: "/assets/images/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
