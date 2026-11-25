import type { MetadataRoute } from "next";
import { OFFICE_INFO } from "@/lib/data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${OFFICE_INFO.siteUrl}/sitemap.xml`,
  };
}
