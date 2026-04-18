import { getVisibleArticles, getVisibleExercises } from "./content";
import { getAreaAliasPathsForEntry, getAreaPathForEntry, getAreaTopicTitle } from "./areaStructure";
import { resolvePrimarySubjectSlug, subjectTitleMap } from "./subjects";
import { getTopicTail } from "./topics";

export type AuditEntryKind = "Erklärung" | "Aufgabe";

export interface AreaAuditRow {
  kind: AuditEntryKind;
  subjectSlug: string;
  subjectTitle: string;
  title: string;
  id: string;
  canonicalPath: string[];
  canonicalLabel: string;
  legacyPaths: string[][];
  tailPath: string[];
}

export interface AreaAuditUniqueUnmappedPath {
  subjectSlug: string;
  subjectTitle: string;
  path: string[];
  examples: string[];
  kinds: string;
}

export interface AreaAuditStats {
  total: number;
  unmappedEntries: number;
  uniqueUnmappedPaths: number;
  remappedEntries: number;
}

const sortRows = <T extends { subjectTitle: string; title?: string; path?: string[] }>(items: T[]) =>
  [...items].sort((a, b) =>
    a.subjectTitle.localeCompare(b.subjectTitle, "de") ||
    (a.title ?? a.path?.join("/") ?? "").localeCompare(b.title ?? b.path?.join("/") ?? "", "de")
  );

export const getAreaAuditData = async () => {
  const [articles, exercises] = await Promise.all([getVisibleArticles(), getVisibleExercises()]);
  const allEntries = [...articles, ...exercises];

  const auditRows = allEntries.flatMap((entry) => {
    const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject);
    if (!subjectSlug) return [];

    const canonicalPath = getAreaPathForEntry(subjectSlug, entry);
    const legacyPaths = getAreaAliasPathsForEntry(subjectSlug, entry);
    return [{
      kind: entry.collection === "articles" ? "Erklärung" : "Aufgabe",
      subjectSlug,
      subjectTitle: subjectTitleMap[subjectSlug] ?? "Fachbereich",
      title: entry.data.title,
      id: entry.id,
      canonicalPath,
      canonicalLabel: canonicalPath.length > 0 ? getAreaTopicTitle(subjectSlug, canonicalPath) : "Nicht gemappt",
      legacyPaths,
      tailPath: getTopicTail(entry),
    } satisfies AreaAuditRow];
  });

  const unmappedRows = sortRows(
    auditRows.filter((row) => row.canonicalPath.length === 0),
  );

  const remappedRows = sortRows(
    auditRows.filter((row) =>
      row.canonicalPath.length > 0 &&
      row.legacyPaths.some((parts) => parts.join("/") !== row.canonicalPath.join("/"))
    ),
  );

  const uniqueUnmappedPathMap = new Map<string, {
    subjectSlug: string;
    subjectTitle: string;
    path: string[];
    examples: string[];
    kinds: Set<string>;
  }>();

  for (const row of unmappedRows) {
    const preferredPath = row.kind === "Aufgabe" && row.tailPath.length > 1
      ? row.tailPath.slice(0, -1)
      : row.tailPath;
    const key = `${row.subjectSlug}/${preferredPath.join("/")}`;
    const current = uniqueUnmappedPathMap.get(key) ?? {
      subjectSlug: row.subjectSlug,
      subjectTitle: row.subjectTitle,
      path: preferredPath,
      examples: [],
      kinds: new Set<string>(),
    };
    current.kinds.add(row.kind);
    if (current.examples.length < 4) current.examples.push(row.title);
    uniqueUnmappedPathMap.set(key, current);
  }

  const uniqueUnmappedPaths = sortRows(
    [...uniqueUnmappedPathMap.values()].map((item) => ({
      ...item,
      kinds: [...item.kinds].join(", "),
    }))
  ) as AreaAuditUniqueUnmappedPath[];

  const groupedUnmapped = uniqueUnmappedPaths.reduce((map, item) => {
    const current = map.get(item.subjectSlug) ?? [];
    current.push(item);
    map.set(item.subjectSlug, current);
    return map;
  }, new Map<string, AreaAuditUniqueUnmappedPath[]>());

  const groupedRemapped = remappedRows.reduce((map, item) => {
    const current = map.get(item.subjectSlug) ?? [];
    current.push(item);
    map.set(item.subjectSlug, current);
    return map;
  }, new Map<string, AreaAuditRow[]>());

  const stats: AreaAuditStats = {
    total: auditRows.length,
    unmappedEntries: unmappedRows.length,
    uniqueUnmappedPaths: uniqueUnmappedPaths.length,
    remappedEntries: remappedRows.length,
  };

  return {
    stats,
    auditRows,
    unmappedRows,
    remappedRows,
    uniqueUnmappedPaths,
    groupedUnmapped,
    groupedRemapped,
  };
};
