import type { CollectionEntry } from "astro:content";
import type { PrimarySubjectSlug } from "./subjects";
import { getTopicTail, humanizeTopicSegment } from "./topics";

type TopicEntry = CollectionEntry<"articles"> | CollectionEntry<"exercises">;

interface AreaNodeDefinition {
  slug: string;
  title: string;
  description: string;
  icon: string;
  chips?: string[];
  searchAliases?: string[];
  prefixes?: string[][];
  children?: AreaNodeDefinition[];
}

const iconMap = {
  numbers: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5 6 19"></path><path d="M16 5 14 19"></path><path d="M4 10h16"></path><path d="M3 15h16"></path></svg>`,
  graph: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="m7 15 4-4 3 2 4-6"></path></svg>`,
  ruler: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"></path><path d="M4 17h16"></path><path d="M7 7v4"></path><path d="M11 7v6"></path><path d="M15 7v4"></path><path d="M19 7v6"></path></svg>`,
  chart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"></path><path d="M4 19h16"></path><rect x="7" y="11" width="3" height="6"></rect><rect x="12" y="8" width="3" height="9"></rect><rect x="17" y="13" width="3" height="4"></rect></svg>`,
  data: `<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="6.5" ry="2.5"></ellipse><path d="M5.5 6v8c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6"></path><path d="M5.5 10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5"></path></svg>`,
  network: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4" width="7" height="5" rx="1.5"></rect><rect x="13.5" y="4" width="7" height="5" rx="1.5"></rect><rect x="8.5" y="15" width="7" height="5" rx="1.5"></rect><path d="M7 9v3h10V9"></path><path d="M12 12v3"></path></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 2.8 7.7 7 10 4.2-2.3 7-5.5 7-10V6l-7-3Z"></path><path d="m9.5 12 1.8 1.8 3.4-3.8"></path></svg>`,
  terminal: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2"></rect><path d="m7 9 3 3-3 3"></path><path d="M12.5 15.5h4.5"></path></svg>`,
  logic: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h6v10H4"></path><path d="M10 7c3.5 0 6 2.2 6 5s-2.5 5-6 5"></path><path d="M18 12h2"></path></svg>`,
  meter: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16a8 8 0 1 1 16 0"></path><path d="M12 12 9 9"></path><path d="M12 16h.01"></path></svg>`,
  circuit: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h4"></path><path d="M16 12h4"></path><path d="M8 9v6"></path><path d="M12 8v8"></path><path d="M16 9v6"></path></svg>`,
  form: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M7 8h10"></path><rect x="7" y="11" width="10" height="2.8" rx="1.4"></rect><path d="M7 17h5"></path></svg>`,
  image: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"></rect><circle cx="9" cy="10" r="1.4"></circle><path d="m6.5 16 3.5-3 2.5 2 2.5-3 2.5 4"></path></svg>`,
  css: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14l-1.5 14L12 20l-5.5-2L5 4Z"></path><path d="M8 8h8"></path><path d="M8.5 12h7"></path><path d="M9 15.5h5"></path></svg>`,
} as const;

const areaNodesBySubject: Record<PrimarySubjectSlug, AreaNodeDefinition[]> = {
  mathematik: [
    { slug: "grundlagen", title: "Grundlagen", description: "Zahlen, Anteile und Größen bilden hier die ruhige Basis für spätere Rechen- und Modellierungsthemen.", icon: iconMap.numbers, chips: ["Zahlen", "Anteile", "Größen"], searchAliases: ["prozent", "anteile", "einheiten", "groessen"], prefixes: [["grundlagen"]] },
    { slug: "algebra", title: "Algebra", description: "Hier geht es um lineare Gleichungen und das schrittweise Umformen mathematischer Ausdrücke.", icon: iconMap.numbers, chips: ["Gleichungen", "Umformen", "Terme"], searchAliases: ["gleichungen", "umformen"], prefixes: [["algebra"]] },
    { slug: "funktionen", title: "Funktionen", description: "Zusammenhänge, Koordinaten und typische Funktionsideen werden hier verständlich aufgebaut.", icon: iconMap.graph, chips: ["Graphen", "Zuordnungen", "Koordinaten"], searchAliases: ["zuordnungen", "koordinaten", "graphen"], prefixes: [["funktionen"]] },
    { slug: "daten-und-zufall", title: "Daten und Zufall", description: "Diagramme und Kennwerte helfen hier dabei, Daten nicht nur zu sehen, sondern sauber zu deuten.", icon: iconMap.chart, chips: ["Diagramme", "Mittelwert", "Median"], searchAliases: ["diagramme", "median", "mittelwert", "spannweite"], prefixes: [["daten-und-zufall"]] },
    { slug: "geometrie", title: "Geometrie", description: "Flächen, Volumen und räumliche Grundideen werden hier als eigener Themenblock gebündelt.", icon: iconMap.ruler, chips: ["Flächen", "Volumen", "Raum"], searchAliases: ["flaechen", "volumen"], prefixes: [["geometrie"]] },
  ],
  informatik: [
    { slug: "daten-und-information", title: "Daten und Information", description: "Hier geht es um Codierung, Dateiformate und die Frage, wie Information technisch dargestellt wird.", icon: iconMap.data, chips: ["Codierung", "Dateiformate", "Information"], searchAliases: ["codierung", "dateiformate", "kompatibilitaet"], prefixes: [["grundlagen"]] },
    { slug: "algorithmen-und-struktur", title: "Algorithmen und Struktur", description: "Probleme werden hier in sinnvolle Teilschritte zerlegt und als strukturierte Abläufe beschrieben.", icon: iconMap.numbers, chips: ["Algorithmen", "Abläufe", "Struktur"], searchAliases: ["teilprobleme", "ablaeufe", "struktur"], prefixes: [["algorithmen"]] },
    { slug: "netzwerke-und-dienste", title: "Netzwerke und Dienste", description: "Adressen, Verbindungen und das Client-Server-Prinzip bilden hier den gemeinsamen Rahmen.", icon: iconMap.network, chips: ["Netzwerke", "Adressen", "Client-Server"], searchAliases: ["netzwerke", "adressen", "client", "server"], prefixes: [["netzwerke"]] },
    { slug: "zugang-und-sicherheit", title: "Zugang und Sicherheit", description: "Passwörter, Anmeldung und typische Schutzideen werden hier in einem kompakten Themenblock gebündelt.", icon: iconMap.shield, chips: ["Passwörter", "Anmeldung", "Sicherheit"], searchAliases: ["passwoerter", "authentifizierung", "anmeldung"], prefixes: [["sicherheit"]] },
    { slug: "datenbanken", title: "Datenbanken", description: "Tabellenmodelle und strukturierte Daten bilden hier den Einstieg in geordnet gespeicherte Informationen.", icon: iconMap.data, chips: ["Tabellen", "Modelle", "Daten"], searchAliases: ["tabellen", "datenmodelle"], prefixes: [["datenbanken"]] },
    { slug: "informatiksysteme", title: "Informatiksysteme", description: "Eingabe, Verarbeitung und Ausgabe werden hier als technischer Datenfluss lesbar gemacht.", icon: iconMap.terminal, chips: ["EVA", "Datenfluss", "Systeme"], searchAliases: ["eva", "datenfluss", "systeme"], prefixes: [["systemnah"]] },
  ],
  elektrotechnik: [
    {
      slug: "daten-und-signale",
      title: "Daten und Signale",
      description: "Signale, Logik, Messen und einfache Schaltungen hängen hier fachlich eng zusammen.",
      icon: iconMap.data,
      chips: ["Signale", "Messen", "Schaltungen"],
      prefixes: [["daten-und-signale"]],
      children: [
        { slug: "signale-und-codierung", title: "Signale und Codierung", description: "Analoge und digitale Signale sowie Binärdarstellung bilden hier die fachliche Grundlage.", icon: iconMap.data, chips: ["Analog", "Digital", "Binär"], searchAliases: ["analog", "digital", "binaer"], prefixes: [["daten-und-signale", "analoge-und-digitale-signale"], ["daten-und-signale", "binaersystem-und-stellenwerte"]] },
        { slug: "logik-und-wahrheitstabellen", title: "Logik und Wahrheitstabellen", description: "Logische Grundschaltungen und Wahrheitstabellen werden hier als gemeinsamer Digitaltechnik-Block gebündelt.", icon: iconMap.logic, chips: ["Logik", "Gatter", "Wahrheit"], searchAliases: ["logik", "gatter", "wahrheitstabellen"], prefixes: [["daten-und-signale", "logische-grundschaltungen"], ["daten-und-signale", "wahrheitstabellen-und-logik"]] },
        { slug: "messen-und-fehler", title: "Messen und Fehler", description: "Messbereiche, Messfehler und typische Fehlinterpretationen gehören hier zusammen.", icon: iconMap.meter, chips: ["Messgeräte", "Bereiche", "Fehler"], searchAliases: ["messen", "messfehler", "messbereiche"], prefixes: [["daten-und-signale", "messbereiche-und-messfehler"], ["daten-und-signale", "messgeraete-und-messgroessen"]] },
        { slug: "schaltungen-und-stromkreis", title: "Schaltungen und Stromkreis", description: "Hier geht es um Stromkreis-Verhalten sowie um Reihen- und Parallelschaltungen im Vergleich.", icon: iconMap.circuit, chips: ["Stromkreis", "Reihe", "Parallel"], searchAliases: ["stromkreis", "reihenschaltung", "parallelschaltung"], prefixes: [["daten-und-signale", "stromkreis-offen-geschlossen-und-fehlerbilder"], ["daten-und-signale", "reihen-und-parallelschaltung-verstehen"]] },
        { slug: "sensoren-und-aktoren", title: "Sensoren und Aktoren", description: "Erfassen und Reagieren werden hier als technisches Zusammenspiel von Sensorik und Aktorik gelesen.", icon: iconMap.meter, chips: ["Sensoren", "Aktoren", "Reaktion"], searchAliases: ["sensoren", "aktoren"], prefixes: [["daten-und-signale", "sensoren-und-aktoren"]] },
      ],
    },
  ],
  linux: [
    {
      slug: "shell",
      title: "Shell",
      description: "Die Shell bündelt Orientierung, Suche, Auswertung und Systemkontext in einem gemeinsamen Praxisbereich.",
      icon: iconMap.terminal,
      chips: ["Pfade", "Werkzeuge", "Kontext"],
      prefixes: [["shell"]],
      children: [
        { slug: "orientierung-und-pfade", title: "Orientierung und Pfade", description: "Pfadwerkzeuge und Verlauf helfen hier dabei, sich in der Shell ruhig und kontrolliert zu orientieren.", icon: iconMap.terminal, chips: ["Pfade", "History", "Realpath"], searchAliases: ["pfade", "basename", "dirname", "realpath", "history"], prefixes: [["shell", "pfade-mit-basename-dirname-und-realpath"], ["shell", "history-und-wiederkehrende-befehle"]] },
        { slug: "text-und-auswertung", title: "Text und Auswertung", description: "Pipes, Umleitungen und kleine Textwerkzeuge bilden hier einen gemeinsamen Arbeitsblock.", icon: iconMap.data, chips: ["Pipes", "grep", "wc"], searchAliases: ["pipes", "umleitungen", "grep", "cut", "wc"], prefixes: [["shell", "pipes-und-umleitungen"], ["shell", "textwerkzeuge-mit-grep-cut-und-wc"]] },
        { slug: "suche-und-dateilesen", title: "Suche und Dateilesen", description: "Dateien finden und gezielt Anfang oder Ende lesen gehört hier in denselben Praxisblock.", icon: iconMap.chart, chips: ["find", "head", "tail"], searchAliases: ["find", "head", "tail", "dateisuche"], prefixes: [["shell", "find-und-dateisuche"], ["shell", "dateien-mit-head-und-tail"]] },
        { slug: "rechte-und-shell-kontext", title: "Rechte und Shell-Kontext", description: "Dateirechte, Umgebungsvariablen und PATH werden hier als zusammenhängender Systemkontext gelesen.", icon: iconMap.shield, chips: ["Rechte", "PATH", "Variablen"], searchAliases: ["rechte", "chmod", "path", "umgebungsvariablen"], prefixes: [["shell", "umgebungsvariablen-und-path"], ["shell", "dateirechte-mit-ls-stat-und-chmod-lesen"]] },
      ],
    },
  ],
  "web-development": [
    {
      slug: "html",
      title: "HTML",
      description: "Struktur, Inhalte und zugängliche Bausteine werden hier in größeren Themenblöcken gesammelt.",
      icon: iconMap.form,
      chips: ["Struktur", "Formulare", "Semantik"],
      prefixes: [["html"]],
      children: [
        { slug: "formulare-und-tabellen", title: "Formulare und Tabellen", description: "Formulare, Validierung und Tabellen werden hier als gemeinsamer HTML-Arbeitsblock gebündelt.", icon: iconMap.form, chips: ["Formulare", "Validierung", "Tabellen"], searchAliases: ["formulare", "validierung", "tabellen"], prefixes: [["html", "formulare-und-eingaben"], ["html", "formular-validierung"], ["html", "tabellen-barrierearm"]] },
        { slug: "bilder-navigation-und-links", title: "Bilder, Navigation und Links", description: "Bilder, Menüs und verständliche Linktexte gehören hier in einen gemeinsamen Strukturblock.", icon: iconMap.image, chips: ["Bilder", "Navigation", "Links"], searchAliases: ["bilder", "alt-texte", "navigation", "menues", "links"], prefixes: [["html", "bilder-und-alt-texte"], ["html", "navigation-und-menues"], ["html", "linktexte-und-links"]] },
      ],
    },
    {
      slug: "css",
      title: "CSS",
      description: "Gestaltung, Layout und Kaskade bleiben hier in einem ruhigen, zusammenhängenden Themenbereich.",
      icon: iconMap.css,
      chips: ["Layouts", "Kaskade", "Responsive"],
      prefixes: [["css"]],
      children: [
        { slug: "css-und-layout", title: "CSS und Layout", description: "Responsive Layouts und CSS-Kaskade bilden hier den Kern des Gestaltungsblocks.", icon: iconMap.css, chips: ["Responsive", "Layouts", "Kaskade"], searchAliases: ["css", "responsive", "layout", "kaskade"], prefixes: [["css", "responsive-layouts"], ["css", "css-spezifitaet-und-kaskade"], ["css", "box-modell"], ["css", "flexbox"], ["css", "selektoren"]] },
      ],
    },
  ],
};

const fallbackDescription = "Hier liegen die passenden Wissensseiten und Aufgaben in einem gemeinsamen Themenblock.";

const isPrefixMatch = (prefix: string[], target: string[]) =>
  prefix.length <= target.length && prefix.every((segment, index) => target[index] === segment);

const nodeMatchesEntry = (node: AreaNodeDefinition, entry: TopicEntry): boolean => {
  const tail = getTopicTail(entry);
  if (node.children && node.children.some((child) => nodeMatchesEntry(child, entry))) return true;
  return (node.prefixes ?? []).some((prefix) => isPrefixMatch(prefix, tail));
};

const getNodesAtPath = (subjectSlug: string, path: string[]) => {
  let current = areaNodesBySubject[subjectSlug as PrimarySubjectSlug] ?? [];
  for (const segment of path) {
    const next = current.find((node) => node.slug === segment);
    if (!next) return [];
    current = next.children ?? [];
  }
  return current;
};

const resolveAreaPathForEntry = (nodes: AreaNodeDefinition[], entry: TopicEntry, basePath: string[] = []): string[] => {
  for (const node of nodes) {
    if (!nodeMatchesEntry(node, entry)) continue;
    const nextPath = [...basePath, node.slug];
    const childPath = resolveAreaPathForEntry(node.children ?? [], entry, nextPath);
    return childPath.length > 0 ? childPath : nextPath;
  }
  return [];
};

export const getAreaPathForEntry = (subjectSlug: string, entry: TopicEntry) =>
  resolveAreaPathForEntry(areaNodesBySubject[subjectSlug as PrimarySubjectSlug] ?? [], entry);

export const getAreaNode = (subjectSlug: string, path: string[]) => {
  let current = areaNodesBySubject[subjectSlug as PrimarySubjectSlug] ?? [];
  let found: AreaNodeDefinition | null = null;
  for (const segment of path) {
    found = current.find((node) => node.slug === segment) ?? null;
    if (!found) return null;
    current = found.children ?? [];
  }
  return found;
};

export const getAreaTopicTitle = (subjectSlug: string, path: string[]) =>
  getAreaNode(subjectSlug, path)?.title ?? humanizeTopicSegment(path.at(-1) ?? "");

export const getAreaTopicDescription = (subjectSlug: string, path: string[], fallback = fallbackDescription) =>
  getAreaNode(subjectSlug, path)?.description ?? fallback;

export const getAreaTopicIcon = (subjectSlug: string, path: string[]) =>
  getAreaNode(subjectSlug, path)?.icon ?? iconMap.data;

export const getAreaTopicChips = (subjectSlug: string, path: string[]) =>
  getAreaNode(subjectSlug, path)?.chips ?? [];

export const getAreaEntriesForPath = <T extends TopicEntry>(subjectSlug: string, path: string[], entries: T[]) => {
  const node = getAreaNode(subjectSlug, path);
  if (!node) return [];
  return entries.filter((entry) => {
    if (!nodeMatchesEntry(node, entry)) return false;
    if (!node.children || node.children.length === 0) return true;
    return !node.children.some((child) => nodeMatchesEntry(child, entry));
  });
};

export const getAreaEntriesForSubtree = <T extends TopicEntry>(subjectSlug: string, path: string[], entries: T[]) => {
  const node = getAreaNode(subjectSlug, path);
  if (!node) return [];
  return entries.filter((entry) => nodeMatchesEntry(node, entry));
};

interface GetAreaCardOptions {
  flattenSingleRoot?: boolean;
}

export const getVisibleAreaCards = (subjectSlug: string, path: string[], entries: TopicEntry[], options: GetAreaCardOptions = {}) => {
  let nodes = getNodesAtPath(subjectSlug, path);
  const shouldFlatten = path.length === 0 && options.flattenSingleRoot && nodes.length === 1 && (nodes[0].children?.length ?? 0) > 0;
  const basePath = shouldFlatten ? [nodes[0].slug] : path;
  if (shouldFlatten) nodes = nodes[0].children ?? [];

  return nodes
    .filter((node) => entries.some((entry) => nodeMatchesEntry(node, entry)))
    .map((node) => ({
      slug: node.slug,
      title: node.title,
      description: node.description,
      icon: node.icon,
      chips: node.chips ?? [],
      path: [...basePath, node.slug],
      hasChildren: (node.children?.length ?? 0) > 0,
      searchText: `${node.title} ${node.description} ${(node.searchAliases ?? []).join(" ")}`,
    }));
};

export const hasAreaChildren = (subjectSlug: string, path: string[], entries: TopicEntry[]) =>
  getVisibleAreaCards(subjectSlug, path, entries).length > 0;
