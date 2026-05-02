import type { MetadataRoute } from "next";

const siteUrl = "https://sterlixit.co.uk";
const blockedPaths = ["/api/", "/demo/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: blockedPaths,
      },
      {
        // Explicit allow-list for common AI fetchers used by major assistants.
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Bingbot",
        ],
        allow: "/",
        disallow: blockedPaths,
      },
    ],
    // llms.txt is served from /public/llms.txt and discovered by crawlers.
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
