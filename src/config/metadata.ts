import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const url = siteConfig.url ? new URL(path, siteConfig.url).toString() : undefined;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: siteConfig.name,
      title,
      description,
      url,
    },
  };
}
