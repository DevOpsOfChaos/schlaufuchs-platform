import type { CollectionEntry } from "astro:content";
import { resolvePrimarySubjectSlug, type PrimarySubjectSlug } from "./subjects";

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

const sectionPathMap: Record<PrimarySubjectSlug, Record<string, string[]>> = {
  mathematik: {
    grundlagen: ["grundlagen"],
    algebra: ["algebra"],
    funktionen: ["funktionen"],
    geometrie: ["geometrie"],
  },
  informatik: {
    grundlagen: ["grundlagen"],
    programmierung: ["programmieren"],
    programmieren: ["programmieren"],
    systemnah: ["systemnah"],
  },
  elektrotechnik: {
    grundlagen: ["elektronik"],
    elektronik: ["elektronik"],
    "daten-und-signale": ["daten-und-signale"],
    praxis: ["praxis"],
    "arduino-und-esp32": ["praxis", "arduino-und-esp32"],
    "computer-und-cpu": ["daten-und-signale", "computer-und-cpu"],
  },
  linux: {
    shell: ["shell"],
    system: ["system"],
    praxis: ["praxis"],
    "benutzer-und-gruppen": ["system"],
    "benutzer-und-rechte": ["system"],
    dateirechte: ["system"],
    "dateisystem-und-pfade": ["shell"],
    "shell-und-prompt": ["shell"],
    shellskripte: ["praxis"],
  },
  "web-development": {
    html: ["html"],
    css: ["css"],
    praxis: ["praxis"],
    "box-modell": ["css", "box-modell"],
  },
};

const getRawTail = (entry: TopicEntry) => {
  const segments = entry.id.split("/").filter(Boolean).map(slugifyTopicSegment);
  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);

  if (subjectSlug && segments[0] === subjectSlug) {
    return segments.slice(1);
  }

  return segments;
};

const getExplicitTopicPath = (entry: TopicEntry) => {
  const configured = entry.data.topicPath?.map(slugifyTopicSegment).filter(Boolean) ?? [];
  if (configured.length === 0) return null;

  if (entry.collection === "exercises") {
    const rawTail = getRawTail(entry);
    const leafSlug = rawTail.at(-1) ?? slugifyTopicSegment(entry.data.title);
    return [...configured, leafSlug];
  }

  return configured;
};

export const getTopicTail = (entry: TopicEntry) => {
  const explicit = getExplicitTopicPath(entry);
  if (explicit) return explicit;

  const rawTail = getRawTail(entry);
  if (rawTail.length > 1) return rawTail;

  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);
  const sectionSlug = slugifyTopicSegment(entry.data.section ?? "");
  const mappedSectionPath = subjectSlug ? sectionPathMap[subjectSlug]?.[sectionSlug] : undefined;
  const leafSlug = rawTail[0] ?? slugifyTopicSegment(entry.data.title);

  if (!mappedSectionPath || mappedSectionPath.length === 0) {
    return rawTail;
  }

  if (entry.collection === "exercises") {
    return [...mappedSectionPath, leafSlug];
  }

  return [...mappedSectionPath, leafSlug];
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
