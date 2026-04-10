import type { CollectionEntry } from "astro:content";
import { resolvePrimarySubjectSlug } from "./subjects";

type TopicEntry = CollectionEntry<"articles"> | CollectionEntry<"exercises">;

export const humanizeTopicSegment = (segment: string) =>
  segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const getTopicTail = (entry: TopicEntry) => {
  const segments = entry.id.split("/").filter(Boolean);
  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);

  if (subjectSlug && segments[0] === subjectSlug) {
    return segments.slice(1);
  }

  return segments;
};

export const getEntriesForPrimarySubject = <T extends TopicEntry>(entries: T[], subjectSlug: string) =>
  entries.filter((entry) => resolvePrimarySubjectSlug(entry.data.subject) === subjectSlug);

export const getSubjectSectionCards = (entries: TopicEntry[]) => {
  const sectionMap = new Map<
    string,
    {
      slug: string;
      title: string;
      children: Map<string, { slug: string; title: string }>;
    }
  >();

  for (const entry of entries) {
    const tail = getTopicTail(entry);
    if (tail.length === 0) continue;

    const sectionSlug = tail[0];
    const current =
      sectionMap.get(sectionSlug) ?? {
        slug: sectionSlug,
        title: humanizeTopicSegment(sectionSlug),
        children: new Map<string, { slug: string; title: string }>(),
      };

    if (tail.length >= 2) {
      const childSlug = tail[1];
      current.children.set(childSlug, {
        slug: childSlug,
        title: humanizeTopicSegment(childSlug),
      });
    }

    sectionMap.set(sectionSlug, current);
  }

  return [...sectionMap.values()]
    .map((section) => ({
      slug: section.slug,
      title: section.title,
      children: [...section.children.values()].sort((a, b) => a.title.localeCompare(b.title, "de")),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "de"));
};
