import type { Metadata } from "next";
import { defaultOgImage, siteBrandName, siteUrl } from "@/lib/site";
import { seoKeywords } from "@/lib/seo-keywords";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = seoKeywords,
}: PageMetadataInput): Metadata {
  const pageUrl = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const fullTitle = `${title} | ${siteBrandName}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: siteBrandName,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteBrandName} app scheduler preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
  };
}
