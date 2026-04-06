import { getCollection } from "astro:content";
import { siteConfig } from "../data/settings/site";
import { resolvePrimarySubjectSlug } from "../data/subjects";

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).toString();

export async function GET() {
  const [subjects, articles, exercises, newsEntries] = await Promise.all([
    getCollection("subjects"),
    getCollection("articles"),
    getCollection("exercises"),
    getCollection("news"),
  ]);

  const staticPaths = [
    "/",
    "/fachbereiche",
    "/aufgaben",
    "/suchen",
    "/news",
    "/inhaltsstand",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const subjectPaths = subjects
    .filter((entry) => ["mathematik", "informatik", "elektrotechnik", "linux", "web-development"].includes(entry.data.slug))
    .map((entry) => `/fachbereiche/${entry.data.slug}`);

  const articlePaths = articles
    .filter((entry) => !entry.data.draft && resolvePrimarySubjectSlug(entry.data.subject) !== null)
    .map((entry) => `/wissen/${entry.id}`);

  const exercisePaths = exercises
    .filter((entry) => !entry.data.draft && resolvePrimarySubjectSlug(entry.data.subject) !== null)
    .map((entry) => `/aufgaben/${entry.id}`);

  const newsPaths = newsEntries
    .filter((entry) => !entry.data.draft)
    .map((entry) => `/news/${entry.id}`);

  const urls = [...staticPaths, ...subjectPaths, ...articlePaths, ...exercisePaths, ...newsPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${absolute(path)}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
