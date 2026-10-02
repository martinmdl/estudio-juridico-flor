import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = ["/", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];

  return routes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
