import type { CollectionEntry } from "astro:content";
import { resolvePrimarySubjectSlug } from "./subjects";

type TopicEntry = CollectionEntry<"articles"> | CollectionEntry<"exercises">;

const normalizeUmlauts = (value: string) =>
  value
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/Ä/g, "ae")
    .replace(/Ö/g, "oe")
    .replace(/Ü/g, "ue")
    .replace(/ß/g, "ss");

export const slugifyTopicSegment = (value: string) =>
  normalizeUmlauts(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const humanizeTopicSegment = (segment: string) =>
  segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const getTopicTail = (entry: TopicEntry) => {
  const explicitTopicPath = Array.isArray(entry.data.topicPath)
    ? entry.data.topicPath.map(slugifyTopicSegment).filter(Boolean)
    : [];

  if (explicitTopicPath.length > 0) {
    return explicitTopicPath;
  }

  const segments = entry.id.split("/").filter(Boolean).map(slugifyTopicSegment);
  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);

  if (subjectSlug && segments[0] === subjectSlug) {
    return segments.slice(1);
  }

  return segments;
};

export const getTopicBranch = (entry: TopicEntry) =>
  entry.collection === "exercises" ? getTopicTail(entry).slice(0, -1) : getTopicTail(entry);

export const getTopicOverviewPath = (entry: TopicEntry) => getTopicTail(entry).slice(0, -1);

export const getTopicDisplayLabel = (entry: TopicEntry) => {
  const tail = entry.collection === "exercises" ? getTopicOverviewPath(entry) : getTopicTail(entry);
  const leaf = tail.at(-1);
  if (leaf) return humanizeTopicSegment(leaf);

  const sectionSlug = slugifyTopicSegment(entry.data.section ?? "");
  return sectionSlug ? humanizeTopicSegment(sectionSlug) : "Thema";
};

export const getSectionDisplayLabel = (section: string | undefined) => {
  const sectionSlug = slugifyTopicSegment(section ?? "");
  return sectionSlug ? humanizeTopicSegment(sectionSlug) : "Themenblock";
};

export const getTopicFitScore = (source: TopicEntry, candidate: TopicEntry) => {
  const sourceTail = getTopicTail(source);
  const candidateTail = getTopicTail(candidate);
  const sharedPath = getSharedTopicPrefixLength(sourceTail, candidateTail);
  const sameSection = source.data.section === candidate.data.section ? 2 : 0;
  const sourceTags = Array.isArray(source.data.tags) ? source.data.tags : [];
  const candidateTags = Array.isArray(candidate.data.tags) ? candidate.data.tags : [];
  const sharedTags = candidateTags.filter((tag) => sourceTags.includes(tag)).length;
  return sharedPath * 4 + sameSection + sharedTags;
};

export const getEntriesForPrimarySubject = <T extends TopicEntry>(entries: T[], subjectSlug: string) =>
  entries.filter((entry) => resolvePrimarySubjectSlug(entry.data.subject) === subjectSlug);

export const getSharedTopicPrefixLength = (a: string[], b: string[]) => {
  const limit = Math.min(a.length, b.length);
  let index = 0;
  while (index < limit && a[index] === b[index]) {
    index += 1;
  }
  return index;
};

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
