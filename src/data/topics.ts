import type { CollectionEntry } from "astro:content";
import { resolvePrimarySubjectSlug } from "./subjects";

type TopicEntry = CollectionEntry<"articles"> | CollectionEntry<"exercises">;

export interface TopicChildCard {
  slug: string;
  title: string;
  path: string[];
  articleCount: number;
  exerciseCount: number;
  totalCount: number;
}

export interface TopicSectionCard extends TopicChildCard {
  hrefPath: string[];
  children: TopicChildCard[];
}

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

  if (explicitTopicPath.length > 0) return explicitTopicPath;

  const segments = entry.id.split("/").filter(Boolean).map(slugifyTopicSegment);
  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);

  if (subjectSlug && segments[0] === subjectSlug) return segments.slice(1);
  return segments;
};

export const getTopicBranch = (entry: TopicEntry) =>
  entry.collection === "exercises" ? getTopicTail(entry).slice(0, -1) : getTopicTail(entry);

export const getTopicOverviewPath = (entry: TopicEntry) => getTopicTail(entry).slice(0, -1);

export const getTopicPathKey = (segments: string[]) => segments.join("/");

export const isTopicPrefix = (prefix: string[], target: string[]) =>
  prefix.length <= target.length && prefix.every((segment, index) => target[index] === segment);

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

export const getSharedTopicPrefixLength = (a: string[], b: string[]) => {
  const limit = Math.min(a.length, b.length);
  let index = 0;
  while (index < limit && a[index] === b[index]) index += 1;
  return index;
};

const getNormalizedTags = (entry: TopicEntry) =>
  Array.isArray(entry.data.tags) ? entry.data.tags.map((tag) => slugifyTopicSegment(tag)).filter(Boolean) : [];

const getNormalizedSection = (entry: TopicEntry) => slugifyTopicSegment(entry.data.section ?? "");

export const getTopicFitScore = (source: TopicEntry, candidate: TopicEntry) => {
  const sourceTail = getTopicTail(source);
  const candidateTail = getTopicTail(candidate);
  const sourceBranch = getTopicBranch(source);
  const candidateBranch = getTopicBranch(candidate);
  const sharedTail = getSharedTopicPrefixLength(sourceTail, candidateTail);
  const sharedBranch = getSharedTopicPrefixLength(sourceBranch, candidateBranch);
  const identicalTail = sourceTail.join("/") === candidateTail.join("/") ? 10 : 0;
  const sameSection = getNormalizedSection(source) !== "" && getNormalizedSection(source) === getNormalizedSection(candidate) ? 3 : 0;
  const sourceTags = getNormalizedTags(source);
  const candidateTags = getNormalizedTags(candidate);
  const sharedTags = candidateTags.filter((tag) => sourceTags.includes(tag)).length;
  return sharedTail * 6 + sharedBranch * 5 + identicalTail + sameSection + sharedTags;
};

export const getEntriesForPrimarySubject = <T extends TopicEntry>(entries: T[], subjectSlug: string) =>
  entries.filter((entry) => resolvePrimarySubjectSlug(entry.data.subject) === subjectSlug);

export const rankTopicMatches = <T extends TopicEntry>(source: TopicEntry, candidates: T[], options?: { minimumScore?: number }) => {
  const minimumScore = options?.minimumScore ?? 5;
  return candidates
    .map((entry) => ({ entry, score: getTopicFitScore(source, entry) }))
    .filter(({ score }) => score >= minimumScore)
    .sort((a, b) => b.score - a.score || a.entry.data.title.localeCompare(b.entry.data.title, "de"));
};

const createTopicSummary = (segments: string[]) => ({
  slug: segments.at(-1) ?? "thema",
  title: humanizeTopicSegment(segments.at(-1) ?? "thema"),
  path: segments,
  articleCount: 0,
  exerciseCount: 0,
  totalCount: 0,
});

export const getTopicHierarchyStats = (articles: CollectionEntry<"articles">[], exercises: CollectionEntry<"exercises">[]) => {
  const sectionMap = new Map<string, TopicSectionCard>();

  const register = (entry: TopicEntry, kind: "article" | "exercise") => {
    const tail = getTopicTail(entry);
    if (tail.length === 0) return;

    const sectionPath = [tail[0]];
    const sectionKey = getTopicPathKey(sectionPath);
    const section =
      sectionMap.get(sectionKey) ?? {
        ...createTopicSummary(sectionPath),
        hrefPath: sectionPath,
        children: [],
      };

    if (kind === "article") section.articleCount += 1;
    else section.exerciseCount += 1;
    section.totalCount = section.articleCount + section.exerciseCount;

    if (tail.length >= 2) {
      const childPath = tail.slice(0, 2);
      const childKey = getTopicPathKey(childPath);
      const currentChild = section.children.find((child) => getTopicPathKey(child.path) === childKey) ?? createTopicSummary(childPath);
      if (!section.children.some((child) => getTopicPathKey(child.path) === childKey)) section.children.push(currentChild);
      if (kind === "article") currentChild.articleCount += 1;
      else currentChild.exerciseCount += 1;
      currentChild.totalCount = currentChild.articleCount + currentChild.exerciseCount;
    }

    sectionMap.set(sectionKey, section);
  };

  articles.forEach((entry) => register(entry, "article"));
  exercises.forEach((entry) => register(entry, "exercise"));

  return [...sectionMap.values()]
    .map((section) => ({
      ...section,
      children: [...section.children].sort(
        (a, b) => b.totalCount - a.totalCount || a.title.localeCompare(b.title, "de"),
      ),
    }))
    .sort((a, b) => b.totalCount - a.totalCount || a.title.localeCompare(b.title, "de"));
};

export const getTopicSnapshot = (entries: TopicEntry[]) => {
  const snapshot = new Map<string, { path: string[]; title: string; count: number }>();

  for (const entry of entries) {
    const path = getTopicBranch(entry);
    if (path.length === 0) continue;
    const key = getTopicPathKey(path);
    const current = snapshot.get(key) ?? { path, title: humanizeTopicSegment(path.at(-1) ?? "thema"), count: 0 };
    current.count += 1;
    snapshot.set(key, current);
  }

  return [...snapshot.values()].sort((a, b) => b.count - a.count || a.title.localeCompare(b.title, "de"));
};

export const getSubjectSectionCards = (entries: TopicEntry[]) =>
  getTopicHierarchyStats(
    entries.filter((entry): entry is CollectionEntry<"articles"> => entry.collection === "articles"),
    entries.filter((entry): entry is CollectionEntry<"exercises"> => entry.collection === "exercises"),
  );
