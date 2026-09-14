import type { Metadata } from "next";
import { SITE_ROUTES } from "@/types/site";

export const pageMetadata = (path: string, overrides: Metadata = {}): Metadata => {
  const route = SITE_ROUTES.find((item) => item.path === path);
  if (!route) throw new Error(`[seo] Routa ${path} chybí v SITE_ROUTES.`);
  return {
    title: route.label,
    description: route.summary,
    alternates: { canonical: route.path },
    openGraph: {
      type: "website",
      url: route.path,
      title: route.label,
      description: route.summary,
    },
    ...overrides,
  };
};