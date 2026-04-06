import { getCollection, type CollectionEntry } from "astro:content";
import { resolvePrimarySubjectSlug, visibleSubjectOrder } from "./subjects";

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

export type SubjectEntry = CollectionEntry<"subjects">;
export type ArticleEntry = CollectionEntry<"articles">;
export type ExerciseEntry = CollectionEntry<"exercises">;
