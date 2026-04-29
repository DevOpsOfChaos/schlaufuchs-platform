import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, normalize, relative, sep } from "node:path";

const CONTENT_ROOTS = [
  { type: "article", dir: "src/content/articles" },
  { type: "exercise", dir: "src/content/exercises" },
  { type: "solution", dir: "src/content/solutions" },
];

const OUTPUT_PATH = "docs/content-quality-audit.csv";
const DOC_PATH = "docs/content-quality-audit.md";

const MOJIBAKE_MARKERS = ["\u00c3", "\u00c2", "\u00e2\u20ac", "\u00e2\u20ac\u0153", "\u00e2\u20ac\u017e", "\u00e2\u20ac\u201c", "\u00e2\u20ac\u00a6"];
const DEV_ARTIFACT_MARKERS = ["TODO", "FIXME", "PLACEHOLDER", "Lorem ipsum", "ChatGPT", "KI-generiert", "AI-generated"];
const VALID_LEVELS = new Set(["einfach", "mittel", "fortgeschritten"]);
const VALID_SUBJECTS = new Set([
  "web-development",
  "informatik",
  "linux",
  "mathematik",
  "elektrotechnik",
  "daten-und-signale",
]);

const COLUMNS = [
  "path",
  "subject",
  "section",
  "topic_path",
  "title",
  "content_type",
  "level",
  "checked",
  "quality_status",
  "has_article",
  "has_image",
  "image_paths",
  "image_type",
  "image_quality",
  "image_didactic_value",
  "has_exercises",
  "has_solutions",
  "exercise_link_ok",
  "solution_link_ok",
  "placement_ok",
  "needs_subtopics",
  "umlauts_ok",
  "no_mojibake",
  "no_dev_artifacts",
  "no_unnecessary_info",
  "no_duplicates",
  "frontmatter_ok",
  "tags_ok",
  "learning_goals_ok",
  "common_mistakes_ok",
  "key_takeaways_ok",
  "navigation_topic_path_ok",
  "reading_quality",
  "structure_quality",
  "language_quality",
  "didactic_depth",
  "examples_ok",
  "misconceptions_ok",
  "abgrenzung_ok",
  "einstieg_ok",
  "niveau_ok",
  "aktualitaet_ok",
  "redundancy_risk",
  "priority",
  "next_action",
  "recommended_fix_type",
  "notes",
];

function toPosixPath(value) {
  return value.split(sep).join("/");
}

function walkMarkdownFiles(dir) {
  if (!existsSync(dir)) return [];

  const result = [];
  for (const name of readdirSync(dir).sort((a, b) => a.localeCompare(b, "de"))) {
    const fullPath = join(dir, name);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      result.push(...walkMarkdownFiles(fullPath));
    } else if ([".md", ".mdx"].includes(extname(fullPath))) {
      result.push(toPosixPath(fullPath));
    }
  }
  return result;
}

function stripQuotes(value) {
  const trimmed = String(value ?? "").trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseInlineArray(value) {
  const trimmed = String(value ?? "").trim();
  if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) return null;
  const body = trimmed.slice(1, -1).trim();
  if (!body) return [];
  return body
    .split(",")
    .map((item) => stripQuotes(item.trim()))
    .filter(Boolean);
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) {
    return { ok: false, data: {}, raw: "", error: "missing-frontmatter" };
  }

  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { ok: false, data: {}, raw: "", error: "broken-frontmatter-close" };
  }

  const raw = match[1];
  const data = {};
  const lines = raw.split(/\r?\n/);
  let currentKey = null;

  for (const line of lines) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(stripQuotes(listItem[1]));
      continue;
    }

    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyValue) {
      currentKey = null;
      continue;
    }

    const [, key, rawValue] = keyValue;
    const value = rawValue.trim();
    currentKey = key;

    if (value === "") {
      data[key] = [];
    } else {
      const inlineArray = parseInlineArray(value);
      if (inlineArray) {
        data[key] = inlineArray;
      } else if (value === "true" || value === "false") {
        data[key] = value === "true";
      } else {
        data[key] = stripQuotes(value);
      }
    }
  }

  return { ok: true, data, raw, error: "" };
}

function normalizeArray(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function slugFromPath(path) {
  return toPosixPath(path).replace(/^src\/content\/(articles|exercises|solutions)\//, "").replace(/\.(md|mdx)$/i, "");
}

function pathPartsAfterRoot(path) {
  return slugFromPath(path).split("/").filter(Boolean);
}

function inferSubject(path, frontmatter) {
  if (typeof frontmatter.subject === "string" && frontmatter.subject) return frontmatter.subject;
  return pathPartsAfterRoot(path)[0] ?? "";
}

function inferSection(path, frontmatter) {
  if (typeof frontmatter.section === "string" && frontmatter.section) return frontmatter.section;
  return pathPartsAfterRoot(path)[1] ?? "";
}

function inferTopicPath(path, frontmatter) {
  const explicit = normalizeArray(frontmatter.topicPath);
  if (explicit.length) return explicit;
  const parts = pathPartsAfterRoot(path);
  return parts.slice(1, -1);
}

function extractImagePaths(text) {
  const paths = new Set();
  for (const match of text.matchAll(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    paths.add(stripQuotes(match[1]));
  }
  for (const match of text.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    paths.add(stripQuotes(match[1]));
  }
  for (const match of text.matchAll(/src=\{?["']([^"']+\.(?:svg|png|jpg|jpeg|webp))["']\}?/gi)) {
    paths.add(stripQuotes(match[1]));
  }
  return [...paths].sort((a, b) => a.localeCompare(b, "de"));
}

function publicPathForImage(imagePath, sourceFile) {
  const clean = imagePath.split("#")[0].split("?")[0];
  if (/^https?:\/\//i.test(clean)) return null;

  if (clean.startsWith("/schlaufuchs-platform/")) {
    return `public/${clean.replace(/^\/schlaufuchs-platform\//, "")}`;
  }
  if (clean.startsWith("/")) {
    return `public${clean}`;
  }
  return normalize(join(dirname(sourceFile), clean));
}

function imageExists(imagePath, sourceFile) {
  const candidate = publicPathForImage(imagePath, sourceFile);
  return candidate === null ? "external" : existsSync(candidate) ? "yes" : "missing";
}

function imageType(paths) {
  if (!paths.length) return "none";
  const types = new Set(paths.map((path) => extname(path.split("?")[0].split("#")[0]).replace(/^\./, "").toLowerCase() || "unknown"));
  return [...types].sort().join("|");
}

function hasAny(text, patterns) {
  return patterns.some((pattern) => text.includes(pattern));
}

function bodyWithoutFrontmatter(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();
}

function detectExamples(text) {
  return /(^|\n)#{2,6}\s.*(Beispiel|Beispiele|Praxis|Anwendung)/i.test(text) || /zum Beispiel|beispielsweise/i.test(text);
}

function detectMisconceptions(frontmatter, text) {
  return normalizeArray(frontmatter.commonMistakes).length > 0 || /Missverständnis|Fehler|häufig.*verwechsel/i.test(text);
}

function detectAbgrenzung(text) {
  return /Abgrenzung|nicht zu verwechseln|Unterschied|grenzt/i.test(text);
}

function detectEinstieg(text) {
  const body = bodyWithoutFrontmatter(text);
  return body.length > 120 && !body.startsWith("##");
}

function isFrontmatterOk(type, fm) {
  const required = type === "solution"
    ? ["title", "description", "subject", "taskId", "relatedExercise"]
    : ["title", "description", "subject", "level"];

  if (!required.every((key) => fm[key] !== undefined && String(fm[key]).trim() !== "")) return false;
  if (!VALID_SUBJECTS.has(String(fm.subject))) return false;
  if (type !== "solution" && !VALID_LEVELS.has(String(fm.level))) return false;
  return true;
}

function makeComparable(entry) {
  const parts = [
    entry.subject,
    entry.section,
    ...entry.topicPath,
    ...pathPartsAfterRoot(entry.path).slice(1, -1),
  ];
  return parts.filter(Boolean).map((part) => part.toLowerCase());
}

function relatedByTopic(a, b) {
  if (!a.subject || !b.subject || a.subject !== b.subject) return false;
  const left = new Set(makeComparable(a));
  const right = new Set(makeComparable(b));
  if (a.section && b.section && a.section === b.section) return true;
  return [...left].some((part) => part.length > 2 && right.has(part));
}

function readEntries() {
  const entries = [];

  for (const root of CONTENT_ROOTS) {
    for (const path of walkMarkdownFiles(root.dir)) {
      const text = readFileSync(path, "utf8");
      const parsed = parseFrontmatter(text);
      const fm = parsed.data;
      const images = extractImagePaths(text);
      const imageStates = images.map((imagePath) => `${imagePath}:${imageExists(imagePath, path)}`);
      const topicPath = inferTopicPath(path, fm);
      const tags = normalizeArray(fm.tags);
      const learningGoals = normalizeArray(fm.learningGoals);
      const commonMistakes = normalizeArray(fm.commonMistakes);
      const keyTakeaways = normalizeArray(fm.keyTakeaways);
      const noMojibake = !hasAny(text, MOJIBAKE_MARKERS);
      const noDevArtifacts = !hasAny(text, DEV_ARTIFACT_MARKERS);
      const frontmatterOk = parsed.ok && isFrontmatterOk(root.type, fm);

      entries.push({
        path,
        slug: slugFromPath(path),
        type: root.type,
        text,
        frontmatter: fm,
        parsedFrontmatterOk: parsed.ok,
        frontmatterError: parsed.error,
        subject: inferSubject(path, fm),
        section: inferSection(path, fm),
        topicPath,
        title: String(fm.title ?? pathPartsAfterRoot(path).at(-1) ?? ""),
        level: String(fm.level ?? ""),
        taskId: String(fm.taskId ?? ""),
        relatedExercise: String(fm.relatedExercise ?? ""),
        tags,
        learningGoals,
        commonMistakes,
        keyTakeaways,
        images,
        imageStates,
        noMojibake,
        noDevArtifacts,
        frontmatterOk,
        examplesOk: detectExamples(text),
        misconceptionsOk: detectMisconceptions(fm, text),
        abgrenzungOk: detectAbgrenzung(text),
        einstiegOk: detectEinstieg(text),
      });
    }
  }

  return entries.sort((a, b) => a.path.localeCompare(b.path, "de"));
}

function csvEscape(value) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  if (/[",\r\n;]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function status(value) {
  return value ? "yes" : "no";
}

function openOrStatus(value) {
  return value ? "yes" : "open";
}

function rowForEntry(entry, allEntries) {
  const articles = allEntries.filter((item) => item.type === "article");
  const exercises = allEntries.filter((item) => item.type === "exercise");
  const solutions = allEntries.filter((item) => item.type === "solution");

  const relatedArticles = entry.type === "article" ? [entry] : articles.filter((article) => relatedByTopic(entry, article));
  const relatedExercises = entry.type === "exercise" ? [entry] : exercises.filter((exercise) => relatedByTopic(entry, exercise));
  const relatedSolutions = entry.type === "solution"
    ? [entry]
    : solutions.filter((solution) => {
      if (entry.type === "exercise") {
        return (entry.taskId && solution.taskId === entry.taskId) || solution.relatedExercise === entry.slug;
      }
      return relatedExercises.some((exercise) => (exercise.taskId && solution.taskId === exercise.taskId) || solution.relatedExercise === exercise.slug);
    });

  const missingImages = entry.imageStates.filter((item) => item.endsWith(":missing"));
  const hasImage = entry.images.length > 0;
  const hasMissingImage = missingImages.length > 0;
  const tagsOk = entry.tags.length > 0;
  const learningGoalsOk = entry.type === "article" ? entry.learningGoals.length > 0 : true;
  const commonMistakesOk = entry.type === "article" ? entry.commonMistakes.length > 0 : true;
  const keyTakeawaysOk = entry.type === "article" ? entry.keyTakeaways.length > 0 : true;
  const hasExercises = relatedExercises.length > 0;
  const hasSolutions = relatedSolutions.length > 0;

  let priority = "low";
  let nextAction = "review";
  let recommendedFixType = "manual_review";
  const notes = [];

  if (!entry.frontmatterOk || !entry.noMojibake || hasMissingImage) {
    priority = "urgent";
    if (!entry.frontmatterOk) {
      nextAction = "fix_frontmatter";
      recommendedFixType = "metadata_fix";
      notes.push(entry.frontmatterError || "frontmatter incomplete or schema-relevant fields missing");
    }
    if (!entry.noMojibake) {
      nextAction = "fix_encoding";
      recommendedFixType = "encoding_fix";
      notes.push("possible mojibake marker found");
    }
    if (hasMissingImage) {
      nextAction = "add_image";
      recommendedFixType = "image_path_fix";
      notes.push(`missing image target: ${missingImages.join("|")}`);
    }
  } else if (entry.type === "article" && (!hasExercises || !hasSolutions)) {
    priority = "medium";
    nextAction = !hasExercises ? "add_exercise" : "add_solution";
    recommendedFixType = !hasExercises ? "exercise_gap" : "solution_gap";
  } else if (entry.type === "article" && !hasImage) {
    priority = "medium";
    nextAction = "add_image";
    recommendedFixType = "image_gap";
  } else if (entry.type === "article" && (!learningGoalsOk || !commonMistakesOk || !keyTakeawaysOk)) {
    priority = "medium";
    nextAction = "improve_text";
    recommendedFixType = "didactic_metadata_gap";
  } else {
    nextAction = "review";
  }

  if (!entry.noDevArtifacts) notes.push("possible development artifact marker found");
  if (entry.imageStates.length) notes.push(`images checked: ${entry.imageStates.join("|")}`);

  return {
    path: entry.path,
    subject: entry.subject,
    section: entry.section,
    topic_path: entry.topicPath.join(" > "),
    title: entry.title,
    content_type: entry.type,
    level: entry.level,
    checked: "no",
    quality_status: "open",
    has_article: status(relatedArticles.length > 0),
    has_image: status(hasImage),
    image_paths: entry.images.join("|"),
    image_type: imageType(entry.images),
    image_quality: hasImage ? "open" : "none",
    image_didactic_value: hasImage ? "open" : "none",
    has_exercises: status(hasExercises),
    has_solutions: status(hasSolutions),
    exercise_link_ok: hasExercises ? "open" : "no",
    solution_link_ok: hasSolutions ? "open" : "no",
    placement_ok: "open",
    needs_subtopics: "open",
    umlauts_ok: entry.noMojibake ? "yes" : "no",
    no_mojibake: status(entry.noMojibake),
    no_dev_artifacts: status(entry.noDevArtifacts),
    no_unnecessary_info: "open",
    no_duplicates: "open",
    frontmatter_ok: status(entry.frontmatterOk),
    tags_ok: status(tagsOk),
    learning_goals_ok: entry.type === "article" ? status(learningGoalsOk) : "not_needed",
    common_mistakes_ok: entry.type === "article" ? status(commonMistakesOk) : "not_needed",
    key_takeaways_ok: entry.type === "article" ? status(keyTakeawaysOk) : "not_needed",
    navigation_topic_path_ok: entry.topicPath.length > 0 ? "open" : "no",
    reading_quality: "open",
    structure_quality: "open",
    language_quality: "open",
    didactic_depth: "open",
    examples_ok: openOrStatus(entry.examplesOk),
    misconceptions_ok: openOrStatus(entry.misconceptionsOk),
    abgrenzung_ok: openOrStatus(entry.abgrenzungOk),
    einstieg_ok: openOrStatus(entry.einstiegOk),
    niveau_ok: VALID_LEVELS.has(entry.level) ? "open" : "no",
    aktualitaet_ok: "open",
    redundancy_risk: "open",
    priority,
    next_action: nextAction,
    recommended_fix_type: recommendedFixType,
    notes: notes.join("; "),
  };
}

function writeAudit() {
  const entries = readEntries();
  const rows = entries.map((entry) => rowForEntry(entry, entries));
  const csv = [
    COLUMNS.join(","),
    ...rows.map((row) => COLUMNS.map((column) => csvEscape(row[column])).join(",")),
  ].join("\n") + "\n";

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, csv, "utf8");

  const counts = rows.reduce((acc, row) => {
    acc[row.content_type] = (acc[row.content_type] ?? 0) + 1;
    return acc;
  }, {});

  const summary = {
    ok: true,
    output: OUTPUT_PATH,
    rows: rows.length,
    articles: counts.article ?? 0,
    exercises: counts.exercise ?? 0,
    solutions: counts.solution ?? 0,
  };

  console.log(JSON.stringify(summary, null, 2));
}

writeAudit();
