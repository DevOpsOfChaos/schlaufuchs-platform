import { getCollection, type CollectionEntry } from "astro:content";
import { getSubjectMeta, resolvePrimarySubjectSlug, subjectTitleMap, visibleSubjectOrder } from "./subjects";

export const levelLabels = {
  einfach: "Einfach",
  mittel: "Mittel",
  fortgeschritten: "Fortgeschritten",
} as const;

export const getRelatedSubjectSlugs = (slug: string) =>
  slug === "elektrotechnik" ? ["elektrotechnik", "daten-und-signale"] : [slug];

export const getVisibleSubjects = async () => {
  const subjects = await getCollection("subjects");

  return subjects
    .filter((subject) => visibleSubjectOrder.includes(subject.data.slug as (typeof visibleSubjectOrder)[number]))
    .sort(
      (a, b) =>
        visibleSubjectOrder.indexOf(a.data.slug as (typeof visibleSubjectOrder)[number]) -
        visibleSubjectOrder.indexOf(b.data.slug as (typeof visibleSubjectOrder)[number]),
    );
};

export const getVisibleArticles = async () => {
  const articles = await getCollection("articles");

  return articles
    .filter((entry) => !entry.data.draft && resolvePrimarySubjectSlug(entry.data.subject) !== null)
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "de"));
};

export const getArticlesForSubject = async (slug: string) => {
  const relatedSubjects = getRelatedSubjectSlugs(slug);
  const articles = await getCollection("articles");

  return articles
    .filter((entry) => !entry.data.draft && relatedSubjects.includes(entry.data.subject))
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "de"));
};

export const getExercisesForSubject = async (slug: string) => {
  const relatedSubjects = getRelatedSubjectSlugs(slug);
  const exercises = await getCollection("exercises");

  return exercises
    .filter((entry) => !entry.data.draft && relatedSubjects.includes(entry.data.subject))
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "de"));
};

export const getVisibleExercises = async () => {
  const exercises = await getCollection("exercises");

  return exercises
    .filter((entry) => !entry.data.draft && resolvePrimarySubjectSlug(entry.data.subject) !== null)
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "de"));
};

export const getVisibleNews = async () => {
  const entries = await getCollection("news");

  return entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
};

export const getExerciseGroups = async () => {
  const allExercises = await getVisibleExercises();

  return visibleSubjectOrder
    .map((slug) => {
      const meta = getSubjectMeta(slug);
      const entries = allExercises.filter((entry) => resolvePrimarySubjectSlug(entry.data.subject) === slug);
      return meta
        ? {
            slug,
            title: subjectTitleMap[slug],
            description: meta.intro,
            entries,
          }
        : null;
    })
    .filter((group): group is NonNullable<typeof group> => Boolean(group) && group.entries.length > 0);
};

export const getSearchEntries = async (base: string) => {
  const [subjects, articles, exercises, newsEntries] = await Promise.all([
    getVisibleSubjects(),
    getVisibleArticles(),
    getVisibleExercises(),
    getVisibleNews(),
  ]);

  const subjectEntries = subjects.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    href: `${base}fachbereiche/${entry.data.slug}`,
    kind: "Fachbereich",
    area: entry.data.title,
    tags: "fachbereich einstieg struktur",
  }));

  const articleEntries = articles.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    href: `${base}wissen/${entry.id}`,
    kind: "Wissensseite",
    area: subjectTitleMap[entry.data.subject] ?? "Fachbereich",
    tags: `${entry.data.section} ${entry.data.tags.join(" ")}`.trim(),
  }));

  const exerciseEntries = exercises.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    href: `${base}aufgaben/${entry.id}`,
    kind: "Aufgabe",
    area: subjectTitleMap[entry.data.subject] ?? "Fachbereich",
    tags: `${entry.data.level} übung aufgabe ${resolvePrimarySubjectSlug(entry.data.subject) ?? ""}`.trim(),
  }));

  const newsSearchEntries = newsEntries.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    href: `${base}news/${entry.id}`,
    kind: "News",
    area: "News",
    tags: entry.data.tags.join(" "),
  }));

  return [...subjectEntries, ...articleEntries, ...exerciseEntries, ...newsSearchEntries].sort((a, b) =>
    a.title.localeCompare(b.title, "de"),
  );
};

const getSubjectInventoryStatus = (articleCount: number, exerciseCount: number) => {
  if (articleCount === 0 && exerciseCount === 0) {
    return {
      key: "empty",
      label: "Leer",
      detail: "Hier fehlen aktuell sowohl Wissensseiten als auch Aufgaben.",
      priorityScore: 100,
    };
  }

  if (articleCount === 0) {
    return {
      key: "missing_articles",
      label: "Wissenslücke",
      detail: "Aufgaben sind sichtbar, aber die Wissensseiten fehlen noch als fachliche Basis.",
      priorityScore: 80 + exerciseCount,
    };
  }

  if (exerciseCount === 0) {
    return {
      key: "missing_exercises",
      label: "Aufgabenlücke",
      detail: "Wissensseiten sind sichtbar, aber passende Aufgaben fehlen noch.",
      priorityScore: 70 + articleCount,
    };
  }

  const difference = Math.abs(articleCount - exerciseCount);

  if (difference >= 3) {
    return {
      key: "imbalanced",
      label: "Unausgeglichen",
      detail: "Beide Content-Typen sind vorhanden, aber der Bereich ist noch deutlich unausgeglichen.",
      priorityScore: 40 + difference,
    };
  }

  return {
    key: "balanced",
    label: "Grundbestand vorhanden",
    detail: "Wissensseiten und Aufgaben sind beide sichtbar und bilden bereits eine belastbare Basis.",
    priorityScore: 10,
  };
};

export const getContentInventory = async () => {
  const [subjects, articles, exercises, newsEntries] = await Promise.all([
    getVisibleSubjects(),
    getVisibleArticles(),
    getVisibleExercises(),
    getVisibleNews(),
  ]);

  const bySubject = visibleSubjectOrder.map((slug) => {
    const articleCount = articles.filter((entry) => resolvePrimarySubjectSlug(entry.data.subject) === slug).length;
    const exerciseCount = exercises.filter((entry) => resolvePrimarySubjectSlug(entry.data.subject) === slug).length;
    const status = getSubjectInventoryStatus(articleCount, exerciseCount);

    return {
      slug,
      title: subjectTitleMap[slug],
      articleCount,
      exerciseCount,
      totalCount: articleCount + exerciseCount,
      status,
    };
  });

  const prioritySubjects = [...bySubject].sort((a, b) => {
    if (b.status.priorityScore !== a.status.priorityScore) {
      return b.status.priorityScore - a.status.priorityScore;
    }

    if (a.totalCount !== b.totalCount) {
      return a.totalCount - b.totalCount;
    }

    return a.title.localeCompare(b.title, "de");
  });

  const coveredSubjects = bySubject.filter((entry) => entry.totalCount > 0).length;
  const balancedSubjects = bySubject.filter((entry) => entry.status.key === "balanced").length;

  return {
    totals: {
      subjects: subjects.length,
      articles: articles.length,
      exercises: exercises.length,
      news: newsEntries.length,
      coveredSubjects,
      balancedSubjects,
    },
    bySubject,
    prioritySubjects,
  };
};

export type SubjectEntry = CollectionEntry<"subjects">;
export type ArticleEntry = CollectionEntry<"articles">;
export type ExerciseEntry = CollectionEntry<"exercises">;
export type NewsEntry = CollectionEntry<"news">;
