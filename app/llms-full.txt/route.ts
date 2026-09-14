import { buildLlmsFull } from "@/lib/seo/markdown";

export const dynamic = "force-static";
export const GET = () =>
  new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });