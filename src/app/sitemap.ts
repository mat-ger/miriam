import type { MetadataRoute } from "next";
import { site } from "@/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/conditions", "/contact"].map((path) => ({
    url: new URL(path, site.url).toString(),
  }));
}