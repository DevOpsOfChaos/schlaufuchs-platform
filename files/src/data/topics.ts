import type { CollectionEntry } from "astro:content";
import { resolvePrimarySubjectSlug } from "./subjects";

type TopicEntry = CollectionEntry<"articles"> | CollectionEntry<"exercises">;
type TopicPathValue = string | string[] | undefined | null;

export const humanizeTopicSegment = (segment: string) =>
  segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const normalizeTopicPath = (value: TopicPathValue) => {
  if (!value) return [] as string[];

  const rawSegments = Array.isArray(value)
    ? value.flatMap((part) => part.split("/"))
    : value.split("/");

  return rawSegments.map((segment) => segment.trim()).filter(Boolean);
};

export const getTopicTail = (entry: TopicEntry) => {
  const explicit = normalizeTopicPath((entry.data as { topicPath?: TopicPathValue }).topicPath);
  if (explicit.length > 0) {
    return explicit;
  }

  const segments = entry.id.split("/").filter(Boolean);
  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);

  if (subjectSlug && segments[0] === subjectSlug) {
    return segments.slice(1);
  }

  return segments;
};

export const getTopicKey = (entry: TopicEntry) => getTopicTail(entry).join("/");

export const countSharedTopicPrefix = (left: string[], right: string[]) => {
  let count = 0;

  while (count < left.length && count < right.length && left[count] === right[count]) {
    count += 1;
  }

  return count;
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
