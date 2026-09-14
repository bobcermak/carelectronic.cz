import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/types/site";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
  ],
  sitemap: absoluteUrl("/sitemap.xml"),
});
export default robots;