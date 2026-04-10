import type { CollectionEntry } from "astro:content";
import { withBase } from "../utils/base";
import { getTopicTail } from "./topics";
import { resolvePrimarySubjectSlug } from "./subjects";

type ArticleEntry = CollectionEntry<"articles">;
type ExerciseEntry = CollectionEntry<"exercises">;

export const getArticleLeafContext = (
  entry: ArticleEntry,
  allArticles: ArticleEntry[],
  allExercises: ExerciseEntry[],
) => {
  const subjectSlug = resolvePrimarySubjectSlug(entry.data.subject) ?? entry.data.subject;
  const tail = getTopicTail(entry);
  const parentTail = tail.slice(0, -1);
  const parentKey = parentTail.join("/");
  const backHref = withBase(parentTail.length > 0 ? `fachbereiche/${subjectSlug}/${parentKey}` : `fachbereiche/${subjectSlug}`);

  const relatedArticles = allArticles
    .filter((item) => {
      const itemTail = getTopicTail(item);
      return (
        item.id !== entry.id &&
        resolvePrimarySubjectSlug(item.data.subject) === subjectSlug &&
        itemTail.length === tail.length &&
        itemTail.slice(0, parentTail.length).join("/") === parentKey
      );
    })
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "de"))
    .slice(0, 6);

  const relatedExercises = allExercises
    .filter((item) => {
      const itemTail = getTopicTail(item);
      return (
        resolvePrimarySubjectSlug(item.data.subject) === subjectSlug &&
        itemTail.slice(0, parentTail.length).join("/") === parentKey
      );
    })
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "de"))
    .slice(0, 6);

  return { entry, subjectSlug, backHref, relatedArticles, relatedExercises };
};
