import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/** robots.txt served at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
