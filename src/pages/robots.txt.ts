import { siteConfig } from "../data/settings/site";

export function GET() {
  const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${siteConfig.siteUrl}sitemap.xml`].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
