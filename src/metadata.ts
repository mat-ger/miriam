import type { Metadata } from "next";
import { site } from "@/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: "website",
      locale: "de_AT",
      url: new URL(path, site.url).toString(),
      images: [{ url: "/miriam-gertz_1024.jpg", width: 682, height: 1024, alt: site.name }],
    },
  };
}