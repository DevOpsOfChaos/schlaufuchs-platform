import type { CollectionEntry } from "astro:content";
import type { PrimarySubjectSlug } from "./subjects";
import { getTopicDisplayLabel, getTopicOverviewPath, getTopicTail, humanizeTopicSegment } from "./topics";

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
    { slug: "rechenstrategien-und-kontrolle", title: "Rechenstrategien und Kontrolle", description: "Rechenwege, Plausibilität und typische Kontrollpunkte werden getrennt geübt.", icon: iconMap.numbers, chips: ["Grundlagen"], prefixes: [["rechenstrategien-und-kontrolle"]], children: [
      { slug: "bruch-prozent-und-verhaeltnis", title: "Bruch, Prozent und Verhältnis", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Bruch, Prozent und Verhältnis.", icon: iconMap.numbers, chips: ["Praxis"], prefixes: [["rechenstrategien-und-kontrolle", "bruch-prozent-und-verhaeltnis"]] },
      { slug: "einheiten-und-groessencheck", title: "Einheiten und Größencheck", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Einheiten und Größencheck.", icon: iconMap.numbers, chips: ["Praxis"], prefixes: [["rechenstrategien-und-kontrolle", "einheiten-und-groessencheck"]] },
      { slug: "termwerte-und-fehlerfallen", title: "Termwerte und Fehlerfallen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Termwerte und Fehlerfallen.", icon: iconMap.numbers, chips: ["Praxis"], prefixes: [["rechenstrategien-und-kontrolle", "termwerte-und-fehlerfallen"]] }
    ] },
    { slug: "modellieren-und-validieren", title: "Modellieren und Validieren", description: "Textaufgaben, Annahmen und Gegenproben werden als eigener Modellierungsblock geführt.", icon: iconMap.graph, chips: ["Grundlagen"], prefixes: [["modellieren-und-validieren"]], children: [
      { slug: "textmodell-und-variablenwahl", title: "Textmodell und Variablenwahl", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Textmodell und Variablenwahl.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["modellieren-und-validieren", "textmodell-und-variablenwahl"]] },
      { slug: "modellgrenzen-und-plausibilitaet", title: "Modellgrenzen und Plausibilität", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Modellgrenzen und Plausibilität.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["modellieren-und-validieren", "modellgrenzen-und-plausibilitaet"]] },
      { slug: "tabellen-formeln-und-graphen", title: "Tabellen, Formeln und Graphen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Tabellen, Formeln und Graphen.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["modellieren-und-validieren", "tabellen-formeln-und-graphen"]] }
    ] },
    { slug: "funktionen-im-vergleich", title: "Funktionen im Vergleich", description: "Funktionstypen werden über Veränderung, Graph und Bedeutung unterschieden.", icon: iconMap.graph, chips: ["Grundlagen"], prefixes: [["funktionen-im-vergleich"]], children: [
      { slug: "linear-und-quadratisch-trennen", title: "Linear und quadratisch trennen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Linear und quadratisch trennen.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["funktionen-im-vergleich", "linear-und-quadratisch-trennen"]] },
      { slug: "exponentielles-wachstum-erkennen", title: "Exponentielles Wachstum erkennen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Exponentielles Wachstum erkennen.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["funktionen-im-vergleich", "exponentielles-wachstum-erkennen"]] },
      { slug: "nullstellen-und-schnittpunkte", title: "Nullstellen und Schnittpunkte", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Nullstellen und Schnittpunkte.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["funktionen-im-vergleich", "nullstellen-und-schnittpunkte"]] }
    ] },
    { slug: "geometrie-messen-und-begruenden", title: "Geometrie messen und begründen", description: "Figuren, Maße und Begründungen werden nicht vermischt, sondern schrittweise geprüft.", icon: iconMap.ruler, chips: ["Grundlagen"], prefixes: [["geometrie-messen-und-begruenden"]], children: [
      { slug: "winkel-und-parallelen", title: "Winkel und Parallelen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Winkel und Parallelen.", icon: iconMap.ruler, chips: ["Praxis"], prefixes: [["geometrie-messen-und-begruenden", "winkel-und-parallelen"]] },
      { slug: "flaeche-umfang-und-volumen", title: "Fläche, Umfang und Volumen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Fläche, Umfang und Volumen.", icon: iconMap.ruler, chips: ["Praxis"], prefixes: [["geometrie-messen-und-begruenden", "flaeche-umfang-und-volumen"]] },
      { slug: "skizzen-und-hilfslinien", title: "Skizzen und Hilfslinien", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Skizzen und Hilfslinien.", icon: iconMap.ruler, chips: ["Praxis"], prefixes: [["geometrie-messen-und-begruenden", "skizzen-und-hilfslinien"]] }
    ] },
    { slug: "daten-deuten-und-pruefen", title: "Daten deuten und prüfen", description: "Diagramme, Kennwerte und Ausreißer werden als getrennte Leseschritte aufgebaut.", icon: iconMap.chart, chips: ["Grundlagen"], prefixes: [["daten-deuten-und-pruefen"]], children: [
      { slug: "mittelwert-median-und-spannweite", title: "Mittelwert, Median und Spannweite", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Mittelwert, Median und Spannweite.", icon: iconMap.chart, chips: ["Praxis"], prefixes: [["daten-deuten-und-pruefen", "mittelwert-median-und-spannweite"]] },
      { slug: "diagramme-kritisch-lesen", title: "Diagramme kritisch lesen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Diagramme kritisch lesen.", icon: iconMap.chart, chips: ["Praxis"], prefixes: [["daten-deuten-und-pruefen", "diagramme-kritisch-lesen"]] },
      { slug: "wahrscheinlichkeit-und-simulation", title: "Wahrscheinlichkeit und Simulation", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Wahrscheinlichkeit und Simulation.", icon: iconMap.chart, chips: ["Praxis"], prefixes: [["daten-deuten-und-pruefen", "wahrscheinlichkeit-und-simulation"]] }
    ] },
    { slug: "analysis-vorbereitung", title: "Analysis vorbereiten", description: "Änderung, Steigung und Flächenidee werden als Vorstufe zur Analysis greifbar.", icon: iconMap.graph, chips: ["Grundlagen"], prefixes: [["analysis-vorbereitung"]], children: [
      { slug: "aenderungsrate-und-steigung", title: "Änderungsrate und Steigung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Änderungsrate und Steigung.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["analysis-vorbereitung", "aenderungsrate-und-steigung"]] },
      { slug: "grenzwertidee-alltagsnah", title: "Grenzwertidee alltagsnah", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Grenzwertidee alltagsnah.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["analysis-vorbereitung", "grenzwertidee-alltagsnah"]] },
      { slug: "flaechennaeherung-und-summe", title: "Flächennäherung und Summe", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Flächennäherung und Summe.", icon: iconMap.graph, chips: ["Praxis"], prefixes: [["analysis-vorbereitung", "flaechennaeherung-und-summe"]] }
    ] },
    { slug: "grundlagen", title: "Grundlagen", description: "Zahlen, Anteile, Einheiten und Größen als sauber getrennte Einstiegsthemen.", icon: iconMap.numbers, chips: ["Zahlen", "Einheiten", "Anteile"], prefixes: [["grundlagen"]], children: [
      { slug: "prozent-und-wachstum", title: "Prozent und Wachstum", description: "Prozentsatz, Prozentpunkte und Wachstumsfaktor bewusst trennen.", icon: iconMap.numbers, chips: ["Prozent", "Faktor"], prefixes: [["grundlagen", "prozent-und-wachstum"]] },
      { slug: "einheiten-und-groessen", title: "Einheiten und Größen", description: "Zusammengesetzte Einheiten und Größenbeziehungen lesbar machen.", icon: iconMap.ruler, chips: ["Einheiten", "km/h"], prefixes: [["grundlagen", "einheiten-und-groessen"]] },
    ] },
    { slug: "algebra", title: "Algebra", description: "Gleichungen, Terme und Parameter werden in kleinere Lösestrategien aufgeteilt.", icon: iconMap.numbers, chips: ["Gleichungen", "Terme", "Parameter"], prefixes: [["algebra"]], children: [
      { slug: "quadratische-funktionen", title: "Quadratische Funktionen", description: "Scheitelpunktform, Verschiebung und Streckung getrennt lesen.", icon: iconMap.graph, chips: ["Parabel", "Scheitel"], prefixes: [["algebra", "quadratische-funktionen"]] },
      { slug: "gleichungen-strategisch-loesen", title: "Gleichungen strategisch lösen", description: "Umformen, Parameter und Sonderfälle bewusst trennen.", icon: iconMap.numbers, chips: ["Parameter", "Umformen"], prefixes: [["algebra", "gleichungen-strategisch-loesen"]] },
    ] },
    { slug: "funktionen", title: "Funktionen", description: "Funktionen werden nach Modellierung, Graph, Änderung und Prüfung gegliedert.", icon: iconMap.graph, chips: ["Graphen", "Modelle", "Änderung"], prefixes: [["funktionen"]], children: [
      { slug: "analysis-einstieg", title: "Analysis-Einstieg", description: "Durchschnittliche und lokale Änderung voneinander trennen.", icon: iconMap.graph, chips: ["Ableitung", "Änderung"], prefixes: [["funktionen", "analysis-einstieg"]] },
      { slug: "modellieren-und-pruefen", title: "Modellieren und Prüfen", description: "Annahmen, Definitionsbereich und Modellgrenzen sichtbar machen.", icon: iconMap.graph, chips: ["Modelle", "Annahmen"], prefixes: [["funktionen", "modellieren-und-pruefen"]] },
      { slug: "aenderungsraten-und-naeherung", title: "Änderungsraten und Näherung", description: "Sekante, Tangente und lokale Änderungsbilder getrennt üben.", icon: iconMap.graph, chips: ["Sekante", "Tangente"], prefixes: [["funktionen", "aenderungsraten-und-naeherung"]] },
      { slug: "lineare-funktionen", title: "Lineare Funktionen", description: "Steigung, Startwert und Darstellungswechsel als eigener Block.", icon: iconMap.graph, chips: ["Steigung", "Tabelle"], prefixes: [["funktionen", "lineare-funktionen"]] },
    ] },
    { slug: "daten-und-zufall", title: "Daten und Zufall", description: "Diagramme, Kennwerte, Ausreißer und Zufall werden getrennt auffindbar.", icon: iconMap.chart, chips: ["Daten", "Diagramme", "Ausreißer"], prefixes: [["daten-und-zufall"]], children: [
      { slug: "wahrscheinlichkeit", title: "Wahrscheinlichkeit", description: "Gegenereignis, Fälle und Ergänzungsregel als eigene Strategie.", icon: iconMap.chart, chips: ["Zufall", "Gegenereignis"], prefixes: [["daten-und-zufall", "wahrscheinlichkeit"]] },
      { slug: "boxplot", title: "Boxplot", description: "Quartile, Median, Spannweite und Ausreißer getrennt lesen.", icon: iconMap.chart, chips: ["Median", "Quartile"], prefixes: [["daten-und-zufall", "diagramme-und-ausreisser", "boxplot"]] },
      { slug: "diagramme-und-ausreisser", title: "Diagramme und Ausreißer", description: "Auffällige Werte prüfen, statt sie vorschnell zu löschen.", icon: iconMap.chart, chips: ["Ausreißer", "Median"], prefixes: [["daten-und-zufall", "diagramme-und-ausreisser"]] },
    ] },
    { slug: "geometrie", title: "Geometrie", description: "Längen, Flächen, Volumen und Skalierung bleiben klar getrennt.", icon: iconMap.ruler, chips: ["Flächen", "Volumen", "Skalierung"], prefixes: [["geometrie"]], children: [
      { slug: "vektoren-und-richtung", title: "Vektoren und Richtung", description: "Vektorlänge, Richtung und Skalierung sauber unterscheiden.", icon: iconMap.ruler, chips: ["Vektor", "Richtung"], prefixes: [["geometrie", "vektoren-und-richtung"]] },
      { slug: "einheiten-und-skalierung", title: "Einheiten und Skalierung", description: "Maßstab, Flächenfaktor und Einheiten sauber unterscheiden.", icon: iconMap.ruler, chips: ["Maßstab", "Einheiten"], prefixes: [["geometrie", "einheiten-und-skalierung"]] },
    ] },
    { slug: "rechnen-und-schaetzen", title: "Rechnen und Schätzen", description: "Kopfrechnen, Größenordnung und Einheitenprüfung werden als eigene Prüfpraxis sichtbar.", icon: iconMap.numbers, chips: ["Rechnen", "Unterthemen"], prefixes: [["rechnen-und-schaetzen"]], children: [
      { slug: "kopfrechnen-und-plausibilitaet", title: "Kopfrechnen und Plausibilität", description: "Überschlag, Rundung und Größenordnung helfen gegen blinde Rechenwege.", icon: iconMap.numbers, chips: ["Prüfen", "Abgrenzen"], prefixes: [["rechnen-und-schaetzen", "kopfrechnen-und-plausibilitaet"]] },
    ] },
    { slug: "gleichungen-und-modelle", title: "Gleichungen und Modelle", description: "Lösungsmenge, Definitionsmenge und Modellgrenzen werden getrennt geprüft.", icon: iconMap.numbers, chips: ["Gleichungen", "Unterthemen"], prefixes: [["gleichungen-und-modelle"]], children: [
      { slug: "bedingungen-und-loesungsmenge", title: "Bedingungen und Lösungsmenge", description: "Sonderfälle, Proben und erlaubte Umformungen gehören in einen engen Block.", icon: iconMap.numbers, chips: ["Prüfen", "Abgrenzen"], prefixes: [["gleichungen-und-modelle", "bedingungen-und-loesungsmenge"]] },
    ] },
    { slug: "funktionen-und-graphen", title: "Funktionen und Graphen", description: "Graphen werden nach Nullstellen, Steigung, Parameterwirkung und Definitionsbereich gegliedert.", icon: iconMap.numbers, chips: ["Funktionen", "Unterthemen"], prefixes: [["funktionen-und-graphen"]], children: [
      { slug: "graphen-deuten", title: "Graphen deuten", description: "Ein Graph liefert mehrere Informationen, die getrennt gelesen werden müssen.", icon: iconMap.numbers, chips: ["Prüfen", "Abgrenzen"], prefixes: [["funktionen-und-graphen", "graphen-deuten"]] },
    ] },
    { slug: "daten-und-wahrscheinlichkeit", title: "Daten und Wahrscheinlichkeit", description: "Datenkritik, Häufigkeit und Erwartungswert werden kleinteilig getrennt.", icon: iconMap.numbers, chips: ["Daten", "Unterthemen"], prefixes: [["daten-und-wahrscheinlichkeit"]], children: [
      { slug: "datenkritik-und-zufall", title: "Datenkritik und Zufall", description: "Stichproben, relative Häufigkeit und Bedingungen sind eigene Entscheidungspunkte.", icon: iconMap.numbers, chips: ["Prüfen", "Abgrenzen"], prefixes: [["daten-und-wahrscheinlichkeit", "datenkritik-und-zufall"]] },
    ] },
    {
      slug: "analysis-pruefschritte",
      title: "Analysis-Prüfschritte",
      description: "Ableitungen, Integrale und Grenzideen als kleine Prüffragen.",
      icon: iconMap.graph,
      chips: ["Grundlagen"],
      prefixes: [["analysis-pruefschritte"]],
      children: [
        { slug: "ableitungen-deuten", title: "Ableitungen Deuten", description: "Kernidee, typische Anwendung und sichere Kontrolle zu ableitungen deuten.", icon: iconMap.graph, chips: ["Grundlagen"], prefixes: [["analysis-pruefschritte", "ableitungen-deuten"]] },
        { slug: "integral-und-flaeche", title: "Integral und Flaeche", description: "Kernidee, typische Anwendung und sichere Kontrolle zu integral und flaeche.", icon: iconMap.graph, chips: ["Grundlagen"], prefixes: [["analysis-pruefschritte", "integral-und-flaeche"]] }
      ],
    },
    {
      slug: "algebra-modelle",
      title: "Algebra und Modelle",
      description: "Gleichungen, Parameter und Darstellungsformen in kleinen Schritten.",
      icon: iconMap.numbers,
      chips: ["Grundlagen"],
      prefixes: [["algebra-modelle"]],
      children: [
        { slug: "gleichungen-pruefen", title: "Gleichungen Pruefen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu gleichungen pruefen.", icon: iconMap.numbers, chips: ["Grundlagen"], prefixes: [["algebra-modelle", "gleichungen-pruefen"]] },
        { slug: "parameter-und-formen", title: "Parameter und Formen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu parameter und formen.", icon: iconMap.numbers, chips: ["Grundlagen"], prefixes: [["algebra-modelle", "parameter-und-formen"]] }
      ],
    },
    {
      slug: "daten-und-geometrie",
      title: "Daten und Geometrie",
      description: "Streuung, Lage, Vektoren und räumliche Fragen sauber trennen.",
      icon: iconMap.ruler,
      chips: ["Grundlagen"],
      prefixes: [["daten-und-geometrie"]],
      children: [
        { slug: "statistik-und-daten", title: "Statistik und Daten", description: "Kernidee, typische Anwendung und sichere Kontrolle zu statistik und daten.", icon: iconMap.ruler, chips: ["Grundlagen"], prefixes: [["daten-und-geometrie", "statistik-und-daten"]] },
        { slug: "vektoren-und-geometrie", title: "Vektoren und Geometrie", description: "Kernidee, typische Anwendung und sichere Kontrolle zu vektoren und geometrie.", icon: iconMap.ruler, chips: ["Grundlagen"], prefixes: [["daten-und-geometrie", "vektoren-und-geometrie"]] }
      ],
    }
  ],
  informatik: [
    { slug: "programmierpraxis-und-tests", title: "Programmierpraxis und Tests", description: "Kleine Programme werden über Schnittstellen, Tests und Fehlerbilder kontrollierbar.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["programmierpraxis-und-tests"]], children: [
      { slug: "funktionen-und-verantwortung", title: "Funktionen und Verantwortung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Funktionen und Verantwortung.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["programmierpraxis-und-tests", "funktionen-und-verantwortung"]] },
      { slug: "testfaelle-und-randfaelle", title: "Testfälle und Randfälle", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Testfälle und Randfälle.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["programmierpraxis-und-tests", "testfaelle-und-randfaelle"]] },
      { slug: "debugging-und-fehlerhypothesen", title: "Debugging und Fehlerhypothesen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Debugging und Fehlerhypothesen.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["programmierpraxis-und-tests", "debugging-und-fehlerhypothesen"]] }
    ] },
    { slug: "datenstrukturen-im-einsatz", title: "Datenstrukturen im Einsatz", description: "Listen, Mengen, Maps und Queues werden nach Zugriffsmuster gewählt.", icon: iconMap.data, chips: ["Grundlagen"], prefixes: [["datenstrukturen-im-einsatz"]], children: [
      { slug: "listen-und-indizes", title: "Listen und Indizes", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Listen und Indizes.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["datenstrukturen-im-einsatz", "listen-und-indizes"]] },
      { slug: "sets-maps-und-eindeutigkeit", title: "Sets, Maps und Eindeutigkeit", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Sets, Maps und Eindeutigkeit.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["datenstrukturen-im-einsatz", "sets-maps-und-eindeutigkeit"]] },
      { slug: "queues-stacks-und-ablauf", title: "Queues, Stacks und Ablauf", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Queues, Stacks und Ablauf.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["datenstrukturen-im-einsatz", "queues-stacks-und-ablauf"]] }
    ] },
    { slug: "algorithmen-klein-begruenden", title: "Algorithmen klein begründen", description: "Algorithmische Ideen werden in Zustand, Schritt und Abbruchbedingung zerlegt.", icon: iconMap.numbers, chips: ["Grundlagen"], prefixes: [["algorithmen-klein-begruenden"]], children: [
      { slug: "sortieren-und-invariante", title: "Sortieren und Invariante", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Sortieren und Invariante.", icon: iconMap.numbers, chips: ["Praxis"], prefixes: [["algorithmen-klein-begruenden", "sortieren-und-invariante"]] },
      { slug: "suchen-und-teilen", title: "Suchen und Teilen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Suchen und Teilen.", icon: iconMap.numbers, chips: ["Praxis"], prefixes: [["algorithmen-klein-begruenden", "suchen-und-teilen"]] },
      { slug: "rekursion-und-abbruch", title: "Rekursion und Abbruch", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Rekursion und Abbruch.", icon: iconMap.numbers, chips: ["Praxis"], prefixes: [["algorithmen-klein-begruenden", "rekursion-und-abbruch"]] }
    ] },
    { slug: "datenbanken-und-modelle", title: "Datenbanken und Modelle", description: "Tabellen, Beziehungen und Abfragen werden als kleine Modellentscheidungen verstanden.", icon: iconMap.data, chips: ["Grundlagen"], prefixes: [["datenbanken-und-modelle"]], children: [
      { slug: "tabellen-und-schluessel", title: "Tabellen und Schlüssel", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Tabellen und Schlüssel.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["datenbanken-und-modelle", "tabellen-und-schluessel"]] },
      { slug: "joins-und-beziehungen", title: "Joins und Beziehungen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Joins und Beziehungen.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["datenbanken-und-modelle", "joins-und-beziehungen"]] },
      { slug: "normalisierung-und-redundanz", title: "Normalisierung und Redundanz", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Normalisierung und Redundanz.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["datenbanken-und-modelle", "normalisierung-und-redundanz"]] }
    ] },
    { slug: "sicherheit-und-robustheit", title: "Sicherheit und Robustheit", description: "Risiken werden über Angriffsweg, Auswirkung und Gegenmaßnahme eingeordnet.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["sicherheit-und-robustheit"]], children: [
      { slug: "eingaben-und-validierung", title: "Eingaben und Validierung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Eingaben und Validierung.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["sicherheit-und-robustheit", "eingaben-und-validierung"]] },
      { slug: "rechte-und-prinzip-minimum", title: "Rechte und Prinzip Minimum", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Rechte und Prinzip Minimum.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["sicherheit-und-robustheit", "rechte-und-prinzip-minimum"]] },
      { slug: "datenfluss-und-vertrauen", title: "Datenfluss und Vertrauen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Datenfluss und Vertrauen.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["sicherheit-und-robustheit", "datenfluss-und-vertrauen"]] }
    ] },
    { slug: "systemnahes-denken", title: "Systemnahes Denken", description: "Speicher, Prozesse und Schnittstellen werden als Ursache-Wirkung-Ketten gelesen.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["systemnahes-denken"]], children: [
      { slug: "speicher-und-lebensdauer", title: "Speicher und Lebensdauer", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Speicher und Lebensdauer.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["systemnahes-denken", "speicher-und-lebensdauer"]] },
      { slug: "prozesse-und-nebenlaeufigkeit", title: "Prozesse und Nebenläufigkeit", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Prozesse und Nebenläufigkeit.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["systemnahes-denken", "prozesse-und-nebenlaeufigkeit"]] },
      { slug: "schnittstellen-und-protokolle", title: "Schnittstellen und Protokolle", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Schnittstellen und Protokolle.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["systemnahes-denken", "schnittstellen-und-protokolle"]] }
    ] },
    { slug: "algorithmen-und-struktur", title: "Algorithmen und Struktur", description: "Abläufe, Tests und Komplexität werden als getrennte Denkschritte sichtbar.", icon: iconMap.numbers, chips: ["Algorithmen", "Tests"], prefixes: [["algorithmen"]], children: [
      { slug: "bedingungen-und-logik", title: "Bedingungen und Logik", description: "Boolesche Ausdrücke und Zustände klein zerlegen.", icon: iconMap.logic, chips: ["Bedingung", "Logik"], prefixes: [["algorithmen", "bedingungen-und-logik"]] },
      { slug: "korrektheit-und-beweise", title: "Korrektheit und Beweise", description: "Invarianten und Begründungen in Alltagssprache fassen.", icon: iconMap.numbers, chips: ["Invariante", "Beweis"], prefixes: [["algorithmen", "korrektheit-und-beweise"]] },
      { slug: "zustaende-und-automaten", title: "Zustände und Automaten", description: "Zustand, Eingabe und Übergang tabellarisch prüfen.", icon: iconMap.logic, chips: ["Automat", "Zustand"], prefixes: [["algorithmen", "zustaende-und-automaten"]] },
      { slug: "test-und-komplexitaet", title: "Tests und Komplexität", description: "Randfälle, Laufzeitideen und Prüffälle bewusst trennen.", icon: iconMap.numbers, chips: ["Tests", "Randfälle"], prefixes: [["algorithmen", "test-und-komplexitaet"]] },
    ] },
    { slug: "programmierung", title: "Programmierung", description: "Funktionen, Schnittstellen, Kontrollstrukturen und Datenflüsse als Praxisblöcke.", icon: iconMap.terminal, chips: ["Funktionen", "Code"], prefixes: [["programmieren"], ["programmierung"]], children: [
      { slug: "rekursion-und-abbruch", title: "Rekursion und Abbruch", description: "Basisfall, Fortschritt und Rückweg trennen.", icon: iconMap.terminal, chips: ["Rekursion", "Basisfall"], prefixes: [["programmieren", "rekursion-und-abbruch"]] },
      { slug: "fehlerarten-und-debugging", title: "Fehlerarten und Debugging", description: "Syntax-, Laufzeit- und Logikfehler unterscheiden.", icon: iconMap.terminal, chips: ["Fehler", "Debugging"], prefixes: [["programmieren", "fehlerarten-und-debugging"]] },
      { slug: "funktionen-und-schnittstellen", title: "Funktionen und Schnittstellen", description: "Eingabe, Ausgabe und Nebenwirkung klein und prüfbar halten.", icon: iconMap.terminal, chips: ["Funktionen", "Tests"], prefixes: [["programmieren", "funktionen-und-schnittstellen"]] },
    ] },
    { slug: "datenstrukturen", title: "Datenstrukturen", description: "Listen, Sets, Maps und Zugriffsmuster getrennt einordnen.", icon: iconMap.data, chips: ["Listen", "Maps", "Sets"], prefixes: [["datenstrukturen"]], children: [
      { slug: "listen-arrays-und-zugriff", title: "Listen, Arrays und Zugriff", description: "Zugriff, Einfügen und Änderungskosten getrennt bewerten.", icon: iconMap.data, chips: ["Array", "Liste"], prefixes: [["datenstrukturen", "listen-arrays-und-zugriff"]] },
      { slug: "maps-und-sets", title: "Maps und Sets", description: "Eindeutigkeit und Schlüssel-Wert-Zugriff als eigene Entscheidung.", icon: iconMap.data, chips: ["Map", "Set"], prefixes: [["datenstrukturen", "maps-und-sets"]] },
    ] },
    { slug: "datenbanken", title: "Datenbanken", description: "Tabellen, Abfragen und Indexe werden als eigene Strukturthemen geführt.", icon: iconMap.data, chips: ["Tabellen", "Abfragen"], prefixes: [["datenbanken"]], children: [
      { slug: "where-having", title: "WHERE und HAVING", description: "Filter vor und nach Gruppierung sauber trennen.", icon: iconMap.data, chips: ["SQL", "GROUP BY"], prefixes: [["datenbanken", "abfragen-und-indizes", "where-having"]] },
      { slug: "abfragen-und-indizes", title: "Abfragen und Indizes", description: "Suchmuster, Sortierung und Schreibkosten gemeinsam prüfen.", icon: iconMap.data, chips: ["Index", "Abfrage"], prefixes: [["datenbanken", "abfragen-und-indizes"]] },
    ] },
    { slug: "zugang-und-sicherheit", title: "Zugang und Sicherheit", description: "Sicherheitsfragen werden nach Daten, Akteuren und Grenzen gegliedert.", icon: iconMap.shield, chips: ["Sicherheit", "Grenzen"], prefixes: [["sicherheit"]], children: [
      { slug: "api-vertrag", title: "API-Vertrag", description: "Eingaben, Ausgaben und Fehlerfälle als Schnittstellenvertrag dokumentieren.", icon: iconMap.shield, chips: ["API", "Fehlerfall"], prefixes: [["sicherheit", "berechtigungen-und-rollen", "api-vertrag"]] },
      { slug: "bedrohungsmodelle", title: "Bedrohungsmodelle", description: "Akteure, Daten und Missbrauchsfälle konkret machen.", icon: iconMap.shield, chips: ["Risiko", "Daten"], prefixes: [["sicherheit", "bedrohungsmodelle"]] },
    ] },
    { slug: "programmierpraxis", title: "Programmierpraxis", description: "Funktionen, Tests und Fehlerbehandlung werden als kleine Praxisentscheidungen geführt.", icon: iconMap.terminal, chips: ["Programmierpraxis", "Unterthemen"], prefixes: [["programmierpraxis"]], children: [
      { slug: "funktionen-tests-und-fehler", title: "Funktionen, Tests und Fehler", description: "Seiteneffekte, Testaufbau und Rückgabeverhalten werden getrennt.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["programmierpraxis", "funktionen-tests-und-fehler"]] },
    ] },
    { slug: "datenmodellierung", title: "Datenmodellierung", description: "Identität, Beziehungen und Datenformate werden nicht in einen Topf geworfen.", icon: iconMap.terminal, chips: ["Datenmodellierung", "Unterthemen"], prefixes: [["datenmodellierung"]], children: [
      { slug: "struktur-und-identitaet", title: "Struktur und Identität", description: "Entitäten, Schlüssel und verschachtelte Daten werden gezielt unterschieden.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["datenmodellierung", "struktur-und-identitaet"]] },
    ] },
    { slug: "algorithmen-denken", title: "Algorithmen denken", description: "Suchen, Sortieren und Beenden werden als überprüfbare Strategien beschrieben.", icon: iconMap.terminal, chips: ["Algorithmen", "Unterthemen"], prefixes: [["algorithmen-denken"]], children: [
      { slug: "such-und-sortierideen", title: "Such- und Sortierideen", description: "Effizienz und Korrektheit werden nicht nur als Codefrage betrachtet.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["algorithmen-denken", "such-und-sortierideen"]] },
    ] },
    { slug: "sicherheit-und-betrieb", title: "Sicherheit und Betrieb", description: "Geheimnisse, Rechte, Logs und Lastschutz werden als Betriebsentscheidungen sichtbar.", icon: iconMap.terminal, chips: ["Sicherheit", "Unterthemen"], prefixes: [["sicherheit-und-betrieb"]], children: [
      { slug: "zugriff-logs-und-geheimnisse", title: "Zugriff, Logs und Geheimnisse", description: "Berechtigungen und Diagnose dürfen sensible Daten nicht gefährden.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["sicherheit-und-betrieb", "zugriff-logs-und-geheimnisse"]] },
    ] },
    {
      slug: "programmierpraxis",
      title: "Programmierpraxis",
      description: "Funktionen, Fehler und Tests als kleine, prüfbare Codeentscheidungen.",
      icon: iconMap.terminal,
      chips: ["Grundlagen"],
      prefixes: [["programmierpraxis"]],
      children: [
        { slug: "funktionen-und-schnittstellen", title: "Funktionen und Schnittstellen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu funktionen und schnittstellen.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["programmierpraxis", "funktionen-und-schnittstellen"]] },
        { slug: "fehler-und-tests", title: "Fehler und Tests", description: "Kernidee, typische Anwendung und sichere Kontrolle zu fehler und tests.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["programmierpraxis", "fehler-und-tests"]] }
      ],
    },
    {
      slug: "datenstrukturen",
      title: "Datenstrukturen",
      description: "Listen, Maps, Sets, Bäume und Graphen nach ihrer Aufgabe auswählen.",
      icon: iconMap.data,
      chips: ["Grundlagen"],
      prefixes: [["datenstrukturen"]],
      children: [
        { slug: "listen-maps-sets", title: "Listen Maps Sets", description: "Kernidee, typische Anwendung und sichere Kontrolle zu listen maps sets.", icon: iconMap.data, chips: ["Grundlagen"], prefixes: [["datenstrukturen", "listen-maps-sets"]] },
        { slug: "graphen-und-baeume", title: "Graphen und Baeume", description: "Kernidee, typische Anwendung und sichere Kontrolle zu graphen und baeume.", icon: iconMap.data, chips: ["Grundlagen"], prefixes: [["datenstrukturen", "graphen-und-baeume"]] }
      ],
    },
    {
      slug: "system-und-architektur",
      title: "System und Architektur",
      description: "Speicher, Laufzeit, Schnittstellen und Formate als Systementscheidungen.",
      icon: iconMap.network,
      chips: ["Grundlagen"],
      prefixes: [["system-und-architektur"]],
      children: [
        { slug: "speicher-und-laufzeit", title: "Speicher und Laufzeit", description: "Kernidee, typische Anwendung und sichere Kontrolle zu speicher und laufzeit.", icon: iconMap.network, chips: ["Grundlagen"], prefixes: [["system-und-architektur", "speicher-und-laufzeit"]] },
        { slug: "schnittstellen-und-formate", title: "Schnittstellen und Formate", description: "Kernidee, typische Anwendung und sichere Kontrolle zu schnittstellen und formate.", icon: iconMap.network, chips: ["Grundlagen"], prefixes: [["system-und-architektur", "schnittstellen-und-formate"]] }
      ],
    }
  ],
  elektrotechnik: [
    { slug: "messpraxis-und-diagnose", title: "Messpraxis und Diagnose", description: "Messaufbau, Referenzpunkt und Fehlerbild werden getrennt geprüft.", icon: iconMap.meter, chips: ["Grundlagen"], prefixes: [["messpraxis-und-diagnose"]], children: [
      { slug: "multimeter-und-bezugspunkt", title: "Multimeter und Bezugspunkt", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Multimeter und Bezugspunkt.", icon: iconMap.meter, chips: ["Praxis"], prefixes: [["messpraxis-und-diagnose", "multimeter-und-bezugspunkt"]] },
      { slug: "oszilloskop-und-trigger", title: "Oszilloskop und Trigger", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Oszilloskop und Trigger.", icon: iconMap.meter, chips: ["Praxis"], prefixes: [["messpraxis-und-diagnose", "oszilloskop-und-trigger"]] },
      { slug: "messfehler-und-belastung", title: "Messfehler und Belastung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Messfehler und Belastung.", icon: iconMap.meter, chips: ["Praxis"], prefixes: [["messpraxis-und-diagnose", "messfehler-und-belastung"]] }
    ] },
    { slug: "grundschaltungen-klein-lesen", title: "Grundschaltungen klein lesen", description: "Widerstand, Diode, Transistor und Schutzbauteil werden über Aufgabe und Grenze getrennt.", icon: iconMap.circuit, chips: ["Grundlagen"], prefixes: [["grundschaltungen-klein-lesen"]], children: [
      { slug: "spannungsteiler-und-last", title: "Spannungsteiler und Last", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Spannungsteiler und Last.", icon: iconMap.circuit, chips: ["Praxis"], prefixes: [["grundschaltungen-klein-lesen", "spannungsteiler-und-last"]] },
      { slug: "diode-und-schutzrichtung", title: "Diode und Schutzrichtung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Diode und Schutzrichtung.", icon: iconMap.circuit, chips: ["Praxis"], prefixes: [["grundschaltungen-klein-lesen", "diode-und-schutzrichtung"]] },
      { slug: "transistor-als-schalter", title: "Transistor als Schalter", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Transistor als Schalter.", icon: iconMap.circuit, chips: ["Praxis"], prefixes: [["grundschaltungen-klein-lesen", "transistor-als-schalter"]] }
    ] },
    { slug: "digitaltechnik-und-pegel", title: "Digitaltechnik und Pegel", description: "Digitale Zustände werden mit realen Pegeln, Schwellen und Störungen verbunden.", icon: iconMap.logic, chips: ["Grundlagen"], prefixes: [["digitaltechnik-und-pegel"]], children: [
      { slug: "high-low-und-schwellen", title: "High, Low und Schwellen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu High, Low und Schwellen.", icon: iconMap.logic, chips: ["Praxis"], prefixes: [["digitaltechnik-und-pegel", "high-low-und-schwellen"]] },
      { slug: "pullup-pulldown-und-ruhelage", title: "Pull-up, Pull-down und Ruhelage", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Pull-up, Pull-down und Ruhelage.", icon: iconMap.logic, chips: ["Praxis"], prefixes: [["digitaltechnik-und-pegel", "pullup-pulldown-und-ruhelage"]] },
      { slug: "gatter-und-fehlerlogik", title: "Gatter und Fehlerlogik", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Gatter und Fehlerlogik.", icon: iconMap.logic, chips: ["Praxis"], prefixes: [["digitaltechnik-und-pegel", "gatter-und-fehlerlogik"]] }
    ] },
    { slug: "mikrocontroller-strukturpraxis", title: "Mikrocontroller-Strukturpraxis", description: "Register, Timer, Interrupts und Zustände werden als getrennte Mikrocontroller-Fragen geführt.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["mikrocontroller-strukturpraxis"]], children: [
      { slug: "register-und-bitmasken", title: "Register und Bitmasken", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Register und Bitmasken.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["mikrocontroller-strukturpraxis", "register-und-bitmasken"]] },
      { slug: "timer-und-softtimer", title: "Timer und Softtimer", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Timer und Softtimer.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["mikrocontroller-strukturpraxis", "timer-und-softtimer"]] },
      { slug: "interrupts-und-hauptprogramm", title: "Interrupts und Hauptprogramm", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Interrupts und Hauptprogramm.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["mikrocontroller-strukturpraxis", "interrupts-und-hauptprogramm"]] }
    ] },
    { slug: "energie-versorgung-und-schutz", title: "Energie, Versorgung und Schutz", description: "Versorgung, Stromgrenzen und Schutzmaßnahmen werden praxisnah unterschieden.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["energie-versorgung-und-schutz"]], children: [
      { slug: "strombedarf-und-reserve", title: "Strombedarf und Reserve", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Strombedarf und Reserve.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["energie-versorgung-und-schutz", "strombedarf-und-reserve"]] },
      { slug: "verpolung-und-sicherung", title: "Verpolung und Sicherung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Verpolung und Sicherung.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["energie-versorgung-und-schutz", "verpolung-und-sicherung"]] },
      { slug: "waerme-und-verlustleistung", title: "Wärme und Verlustleistung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Wärme und Verlustleistung.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["energie-versorgung-und-schutz", "waerme-und-verlustleistung"]] }
    ] },
    { slug: "sensorik-und-signalaufbereitung", title: "Sensorik und Signalaufbereitung", description: "Sensorwerte werden über Bereich, Rauschen, Filter und Kalibrierung gelesen.", icon: iconMap.meter, chips: ["Grundlagen"], prefixes: [["sensorik-und-signalaufbereitung"]], children: [
      { slug: "rauschen-und-mittelwert", title: "Rauschen und Mittelwert", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Rauschen und Mittelwert.", icon: iconMap.meter, chips: ["Praxis"], prefixes: [["sensorik-und-signalaufbereitung", "rauschen-und-mittelwert"]] },
      { slug: "filter-und-traegheit", title: "Filter und Trägheit", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Filter und Trägheit.", icon: iconMap.meter, chips: ["Praxis"], prefixes: [["sensorik-und-signalaufbereitung", "filter-und-traegheit"]] },
      { slug: "kalibrierung-und-offset", title: "Kalibrierung und Offset", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Kalibrierung und Offset.", icon: iconMap.meter, chips: ["Praxis"], prefixes: [["sensorik-und-signalaufbereitung", "kalibrierung-und-offset"]] }
    ] },
    { slug: "daten-und-signale", title: "Daten und Signale", description: "Signale, Logik, Messen und Schaltungen bleiben in klaren Unterthemen getrennt.", icon: iconMap.data, chips: ["Signale", "Messen"], prefixes: [["daten-und-signale"]], children: [
      { slug: "signale-und-codierung", title: "Signale und Codierung", description: "Analog, digital, Codierung und Quantisierung als Grundlagenblock.", icon: iconMap.data, chips: ["Analog", "Digital"], prefixes: [["daten-und-signale", "analoge-und-digitale-signale"], ["daten-und-signale", "binaersystem-und-stellenwerte"]] },
      { slug: "logik-und-wahrheitstabellen", title: "Logik und Wahrheitstabellen", description: "Gatter, Wahrheitstabellen und Fehlerbilder getrennt üben.", icon: iconMap.logic, chips: ["Logik", "Gatter"], prefixes: [["daten-und-signale", "logische-grundschaltungen"], ["daten-und-signale", "wahrheitstabellen-und-logik"]] },
    ] },
    { slug: "messen-und-fehler", title: "Messen und Fehler", description: "Messgeräte, Messbereiche, Oszilloskop und Fehlerbilder als eigene Praxisblöcke.", icon: iconMap.meter, chips: ["Messen", "Fehler"], prefixes: [["messen-und-fehler"], ["daten-und-signale", "messbereiche-und-messfehler"], ["daten-und-signale", "messgeraete-und-messgroessen"]], children: [
      { slug: "oszilloskop-und-signale", title: "Oszilloskop und Signale", description: "Trigger, Zeitbasis und Signalform getrennt lesen.", icon: iconMap.meter, chips: ["Trigger", "Zeitbasis"], prefixes: [["messen-und-fehler", "oszilloskop-und-signale"]] },
    ] },
    { slug: "schaltungen-und-stromkreis", title: "Schaltungen und Stromkreis", description: "Grundschaltungen, Schutz, Grenzwerte und Strompfade übersichtlich trennen.", icon: iconMap.circuit, chips: ["Stromkreis", "Schutz"], prefixes: [["schaltungen-und-stromkreis"], ["daten-und-signale", "stromkreis-offen-geschlossen-und-fehlerbilder"], ["daten-und-signale", "reihen-und-parallelschaltung-verstehen"]], children: [
      { slug: "schutz-und-grenzwerte", title: "Schutz und Grenzwerte", description: "Vorwiderstand, Strombegrenzung und zulässige Werte prüfen.", icon: iconMap.circuit, chips: ["Grenzwerte", "Schutz"], prefixes: [["schaltungen-und-stromkreis", "schutz-und-grenzwerte"]] },
    ] },
    { slug: "digitale-eingaenge-und-ausgaenge", title: "Digitale Ein- und Ausgänge", description: "Pegel, Taster, Pull-ups und Entprellung als eigene Unterthemen.", icon: iconMap.logic, chips: ["Pegel", "Taster"], prefixes: [["digitale-eingaenge-und-ausgaenge"]], children: [
      { slug: "pegel-und-entprellung", title: "Pegel und Entprellung", description: "Zustand, Flanke und Prellen bewusst unterscheiden.", icon: iconMap.logic, chips: ["Flanke", "Entprellung"], prefixes: [["digitale-eingaenge-und-ausgaenge", "pegel-und-entprellung"]] },
    ] },
    { slug: "mikrocontroller-und-atmega", title: "Mikrocontroller und ATmega", description: "Register, Timer, ADC, Schnittstellen und Stromversorgung kleinteiliger auffindbar machen.", icon: iconMap.circuit, chips: ["ATmega", "Register", "UART"], prefixes: [["mikrocontroller-und-atmega"]], children: [
      { slug: "stromversorgung-und-pegel", title: "Stromversorgung und Pegel", description: "VCC, Logikpegel, Eingangsschwellen und Pegelwandler trennen.", icon: iconMap.circuit, chips: ["VCC", "Pegel"], prefixes: [["mikrocontroller-und-atmega", "stromversorgung-und-pegel"]] },
      { slug: "schnittstellen-und-fehlerbilder", title: "Schnittstellen und Fehlerbilder", description: "UART, I²C, SPI und typische Verdrahtungsfehler getrennt prüfen.", icon: iconMap.network, chips: ["UART", "Fehler"], prefixes: [["mikrocontroller-und-atmega", "schnittstellen-und-fehlerbilder"]] },
    ] },
    { slug: "grundlagen", title: "Grundlagen", description: "Spannung, Strom, Widerstand und Belastung in kleinen Unterthemen.", icon: iconMap.circuit, chips: ["Spannung", "Strom"], prefixes: [["grundlagen"]], children: [
      { slug: "spannung-strom-widerstand", title: "Spannung, Strom und Widerstand", description: "Grundgrößen, Messpunkte und Belastung sauber trennen.", icon: iconMap.circuit, chips: ["Ohm", "Messpunkt"], prefixes: [["grundlagen", "spannung-strom-widerstand"]] },
    ] },
    { slug: "bauteile", title: "Bauteile", description: "Kondensatoren, Filter, MOSFETs und typische Anschlussfragen getrennt üben.", icon: iconMap.circuit, chips: ["RC", "MOSFET"], prefixes: [["bauteile"]], children: [
      { slug: "kondensatoren-und-filter", title: "Kondensatoren und Filter", description: "Zeitverhalten, Hochpass und Tiefpass qualitativ unterscheiden.", icon: iconMap.meter, chips: ["RC", "Filter"], prefixes: [["bauteile", "kondensatoren-und-filter"]] },
      { slug: "mosfet-und-transistor", title: "MOSFET und Transistor", description: "Steuerkreis und Lastkreis bei Schaltstufen trennen.", icon: iconMap.circuit, chips: ["Gate", "Drain"], prefixes: [["bauteile", "mosfet-und-transistor"]] },
    ] },
    { slug: "digitaltechnik", title: "Digitaltechnik", description: "Pegel, Pull-up/Pull-down und digitale Eingänge kleinteilig auffindbar.", icon: iconMap.logic, chips: ["Pegel", "Taster"], prefixes: [["digitaltechnik"]], children: [
      { slug: "pegel-und-entprellung", title: "Pegel und Entprellung", description: "Ruhezustand, Ereignis und Tasterlogik getrennt lesen.", icon: iconMap.logic, chips: ["Pull-up", "Low"], prefixes: [["digitaltechnik", "pegel-und-entprellung"]] },
    ] },
    { slug: "kommunikation", title: "Kommunikation", description: "I²C, SPI, Adressen und Geräteauswahl getrennt diagnostizieren.", icon: iconMap.network, chips: ["I²C", "SPI"], prefixes: [["kommunikation"]], children: [
      { slug: "i2c-und-spi-bus", title: "I²C und SPI-Bus", description: "Pull-ups, Adressen, Chip Select und Massebezug einzeln prüfen.", icon: iconMap.network, chips: ["Bus", "CS"], prefixes: [["kommunikation"], ["mikrocontroller-und-atmega", "i2c-und-spi-bus"]] },
    ] },
    { slug: "grundschaltungen", title: "Grundschaltungen", description: "Spannung, Strom, Widerstand und Messrückwirkung werden sauber getrennt.", icon: iconMap.circuit, chips: ["Grundschaltungen", "Unterthemen"], prefixes: [["grundschaltungen"]], children: [
      { slug: "spannung-strom-widerstand", title: "Spannung, Strom und Widerstand", description: "Reale Mess- und Belastungsfälle ergänzen die Grundformeln.", icon: iconMap.circuit, chips: ["Prüfen", "Abgrenzen"], prefixes: [["grundschaltungen", "spannung-strom-widerstand"]] },
    ] },
    { slug: "digitale-praxis", title: "Digitale Praxis", description: "Pegel, Flanken, Entstörung und Busverhalten werden als getrennte Praxisfragen geführt.", icon: iconMap.circuit, chips: ["Digitale", "Unterthemen"], prefixes: [["digitale-praxis"]], children: [
      { slug: "pegel-timing-entstoerung", title: "Pegel, Timing und Entstörung", description: "Digitale Signale sind nicht nur 0 und 1, sondern haben Grenzen und Zeitverhalten.", icon: iconMap.circuit, chips: ["Prüfen", "Abgrenzen"], prefixes: [["digitale-praxis", "pegel-timing-entstoerung"]] },
    ] },
    { slug: "mikrocontroller-system", title: "Mikrocontroller-System", description: "Versorgung, Reset, Takt und Stützkondensatoren bilden die Systembasis.", icon: iconMap.circuit, chips: ["Mikrocontroller-System", "Unterthemen"], prefixes: [["mikrocontroller-system"]], children: [
      { slug: "versorgung-reset-takt", title: "Versorgung, Reset und Takt", description: "Ein Mikrocontrollerproblem ist oft kein Codeproblem, sondern ein Systemproblem.", icon: iconMap.circuit, chips: ["Prüfen", "Abgrenzen"], prefixes: [["mikrocontroller-system", "versorgung-reset-takt"]] },
    ] },
    { slug: "messpraxis", title: "Messpraxis", description: "Oszilloskop und Multimeter werden nach Messziel und Messfehler gegliedert.", icon: iconMap.circuit, chips: ["Messpraxis", "Unterthemen"], prefixes: [["messpraxis"]], children: [
      { slug: "oszi-und-multimeter", title: "Oszi und Multimeter", description: "Messgeräte zeigen unterschiedliche Wahrheiten über dasselbe Signal.", icon: iconMap.circuit, chips: ["Prüfen", "Abgrenzen"], prefixes: [["messpraxis", "oszi-und-multimeter"]] },
    ] },
    {
      slug: "messen-und-sicherheit",
      title: "Messen und Sicherheit",
      description: "Messaufbau, Schutz und Diagnose als getrennte Praxisfragen.",
      icon: iconMap.meter,
      chips: ["Grundlagen"],
      prefixes: [["messen-und-sicherheit"]],
      children: [
        { slug: "messaufbau-und-schutz", title: "Messaufbau und Schutz", description: "Kernidee, typische Anwendung und sichere Kontrolle zu messaufbau und schutz.", icon: iconMap.meter, chips: ["Grundlagen"], prefixes: [["messen-und-sicherheit", "messaufbau-und-schutz"]] },
        { slug: "fehlerbilder-und-diagnose", title: "Fehlerbilder und Diagnose", description: "Kernidee, typische Anwendung und sichere Kontrolle zu fehlerbilder und diagnose.", icon: iconMap.meter, chips: ["Grundlagen"], prefixes: [["messen-und-sicherheit", "fehlerbilder-und-diagnose"]] }
      ],
    },
    {
      slug: "mikrocontroller-systeme",
      title: "Mikrocontroller-Systeme",
      description: "Energie, Reset, Peripherie und Timing als kleine Systemthemen.",
      icon: iconMap.circuit,
      chips: ["Grundlagen"],
      prefixes: [["mikrocontroller-systeme"]],
      children: [
        { slug: "energie-und-reset", title: "Energie und Reset", description: "Kernidee, typische Anwendung und sichere Kontrolle zu energie und reset.", icon: iconMap.circuit, chips: ["Grundlagen"], prefixes: [["mikrocontroller-systeme", "energie-und-reset"]] },
        { slug: "peripherie-und-timing", title: "Peripherie und Timing", description: "Kernidee, typische Anwendung und sichere Kontrolle zu peripherie und timing.", icon: iconMap.circuit, chips: ["Grundlagen"], prefixes: [["mikrocontroller-systeme", "peripherie-und-timing"]] }
      ],
    },
    {
      slug: "signale-und-schaltungen",
      title: "Signale und Schaltungen",
      description: "Analog-Digital-Grenzen, Treiber und Lasten in kleinen Unterthemen.",
      icon: iconMap.logic,
      chips: ["Grundlagen"],
      prefixes: [["signale-und-schaltungen"]],
      children: [
        { slug: "analog-digital-grenzen", title: "Analog Digital Grenzen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu analog digital grenzen.", icon: iconMap.logic, chips: ["Grundlagen"], prefixes: [["signale-und-schaltungen", "analog-digital-grenzen"]] },
        { slug: "transistoren-und-lasten", title: "Transistoren und Lasten", description: "Kernidee, typische Anwendung und sichere Kontrolle zu transistoren und lasten.", icon: iconMap.logic, chips: ["Grundlagen"], prefixes: [["signale-und-schaltungen", "transistoren-und-lasten"]] }
      ],
    }
  ],
  linux: [
    { slug: "shell-arbeitsfluss", title: "Shell-Arbeitsfluss", description: "Navigation, Suche und kleine Arbeitsschritte werden als wiederholbarer Workflow geübt.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["shell-arbeitsfluss"]], children: [
      { slug: "pfade-und-kontext", title: "Pfade und Kontext", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Pfade und Kontext.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["shell-arbeitsfluss", "pfade-und-kontext"]] },
      { slug: "dateien-finden-und-pruefen", title: "Dateien finden und prüfen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Dateien finden und prüfen.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["shell-arbeitsfluss", "dateien-finden-und-pruefen"]] },
      { slug: "history-und-wiederholung", title: "History und Wiederholung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu History und Wiederholung.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["shell-arbeitsfluss", "history-und-wiederholung"]] }
    ] },
    { slug: "textdaten-und-pipelines", title: "Textdaten und Pipelines", description: "Textströme werden mit grep, cut, sort und wc in kleine Auswertungsschritte zerlegt.", icon: iconMap.data, chips: ["Grundlagen"], prefixes: [["textdaten-und-pipelines"]], children: [
      { slug: "grep-und-filterlogik", title: "grep und Filterlogik", description: "Kernidee, typische Anwendung und sichere Kontrolle zu grep und Filterlogik.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["textdaten-und-pipelines", "grep-und-filterlogik"]] },
      { slug: "cut-sort-uniq", title: "cut, sort, uniq", description: "Kernidee, typische Anwendung und sichere Kontrolle zu cut, sort, uniq.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["textdaten-und-pipelines", "cut-sort-uniq"]] },
      { slug: "wc-und-statistik", title: "wc und Statistik", description: "Kernidee, typische Anwendung und sichere Kontrolle zu wc und Statistik.", icon: iconMap.data, chips: ["Praxis"], prefixes: [["textdaten-und-pipelines", "wc-und-statistik"]] }
    ] },
    { slug: "rechte-benutzer-und-sicherheit", title: "Rechte, Benutzer und Sicherheit", description: "Dateirechte, Besitzer und Gruppen werden als konkrete Zugriffsspur gelesen.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["rechte-benutzer-und-sicherheit"]], children: [
      { slug: "chmod-symbolisch-und-oktal", title: "chmod symbolisch und oktal", description: "Kernidee, typische Anwendung und sichere Kontrolle zu chmod symbolisch und oktal.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["rechte-benutzer-und-sicherheit", "chmod-symbolisch-und-oktal"]] },
      { slug: "besitzer-gruppe-und-umask", title: "Besitzer, Gruppe und umask", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Besitzer, Gruppe und umask.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["rechte-benutzer-und-sicherheit", "besitzer-gruppe-und-umask"]] },
      { slug: "sudo-und-minimalrechte", title: "sudo und Minimalrechte", description: "Kernidee, typische Anwendung und sichere Kontrolle zu sudo und Minimalrechte.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["rechte-benutzer-und-sicherheit", "sudo-und-minimalrechte"]] }
    ] },
    { slug: "prozesse-logs-und-dienste", title: "Prozesse, Logs und Dienste", description: "Laufende Programme werden über Prozess, Dienststatus und Logspur eingeordnet.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["prozesse-logs-und-dienste"]], children: [
      { slug: "ps-top-und-kill", title: "ps, top und kill", description: "Kernidee, typische Anwendung und sichere Kontrolle zu ps, top und kill.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["prozesse-logs-und-dienste", "ps-top-und-kill"]] },
      { slug: "journalctl-und-logspur", title: "journalctl und Logspur", description: "Kernidee, typische Anwendung und sichere Kontrolle zu journalctl und Logspur.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["prozesse-logs-und-dienste", "journalctl-und-logspur"]] },
      { slug: "systemd-status-und-restart", title: "systemd Status und Restart", description: "Kernidee, typische Anwendung und sichere Kontrolle zu systemd Status und Restart.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["prozesse-logs-und-dienste", "systemd-status-und-restart"]] }
    ] },
    { slug: "netzwerk-und-fernzugriff", title: "Netzwerk und Fernzugriff", description: "IP, Port, DNS und SSH werden als prüfbare Verbindungskette behandelt.", icon: iconMap.network, chips: ["Grundlagen"], prefixes: [["netzwerk-und-fernzugriff"]], children: [
      { slug: "ip-ping-und-dns", title: "IP, Ping und DNS", description: "Kernidee, typische Anwendung und sichere Kontrolle zu IP, Ping und DNS.", icon: iconMap.network, chips: ["Praxis"], prefixes: [["netzwerk-und-fernzugriff", "ip-ping-und-dns"]] },
      { slug: "ssh-schluessel-und-agent", title: "SSH-Schlüssel und Agent", description: "Kernidee, typische Anwendung und sichere Kontrolle zu SSH-Schlüssel und Agent.", icon: iconMap.network, chips: ["Praxis"], prefixes: [["netzwerk-und-fernzugriff", "ssh-schluessel-und-agent"]] },
      { slug: "ports-und-firewall", title: "Ports und Firewall", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Ports und Firewall.", icon: iconMap.network, chips: ["Praxis"], prefixes: [["netzwerk-und-fernzugriff", "ports-und-firewall"]] }
    ] },
    { slug: "automation-und-skripte", title: "Automation und Skripte", description: "Skripte werden über Parameter, Fehlerbehandlung und Wiederholbarkeit stabil gemacht.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["automation-und-skripte"]], children: [
      { slug: "parameter-und-quoting", title: "Parameter und Quoting", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Parameter und Quoting.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["automation-und-skripte", "parameter-und-quoting"]] },
      { slug: "exitcodes-und-set-e", title: "Exitcodes und set -e", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Exitcodes und set -e.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["automation-und-skripte", "exitcodes-und-set-e"]] },
      { slug: "cron-und-systemd-timer", title: "cron und systemd Timer", description: "Kernidee, typische Anwendung und sichere Kontrolle zu cron und systemd Timer.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["automation-und-skripte", "cron-und-systemd-timer"]] }
    ] },
    { slug: "shell", title: "Shell", description: "Orientierung, Prozesse, Logs und Textarbeit werden als eigene Praxisblöcke geführt.", icon: iconMap.terminal, chips: ["Pfade", "Prozesse", "Logs"], prefixes: [["shell"]], children: [
      { slug: "pipelines-und-exitcodes", title: "Pipelines und Exitcodes", description: "Exitstatus, pipefail und Fehlerweitergabe sichtbar machen.", icon: iconMap.terminal, chips: ["pipefail", "Exitcode"], prefixes: [["shell", "pipelines-und-exitcodes"]] },
      { slug: "dateisuche-und-filter", title: "Dateisuche und Filter", description: "find-Kriterien nach Name, Typ und Zeit kombinieren.", icon: iconMap.data, chips: ["find", "mtime"], prefixes: [["shell", "dateisuche-und-filter"]] },
      { slug: "orientierung-und-pfade", title: "Orientierung und Pfade", description: "Pfadwerkzeuge, Verlauf und sichere Navigation.", icon: iconMap.terminal, chips: ["Pfade", "History"], prefixes: [["shell", "pfade-mit-basename-dirname-und-realpath"], ["shell", "history-und-wiederkehrende-befehle"]] },
      { slug: "prozess-und-dienste", title: "Prozesse und Dienste", description: "ps, top, kill und Dienste kontrolliert einordnen.", icon: iconMap.terminal, chips: ["ps", "kill"], prefixes: [["shell", "prozess-und-dienste"]] },
      { slug: "log-analyse-und-fehler", title: "Loganalyse und Fehler", description: "Logs nach Zeit, Dienst, Suchwort und Kontext eingrenzen.", icon: iconMap.data, chips: ["Logs", "grep"], prefixes: [["shell", "log-analyse-und-fehler"]] },
      { slug: "text-und-auswertung", title: "Text und Auswertung", description: "Pipes, grep, cut und wc als Auswertungswerkzeuge.", icon: iconMap.data, chips: ["Pipes", "grep"], prefixes: [["shell", "pipes-und-umleitungen"], ["shell", "textwerkzeuge-mit-grep-cut-und-wc"]] },
    ] },
    { slug: "shellskripte", title: "Shellskripte", description: "Kleine Automatisierungen, Fehlerbehandlung und sichere Variablenführung.", icon: iconMap.terminal, chips: ["Skripte", "Automatisierung"], prefixes: [["shellskripte"]], children: [
      { slug: "robuste-skripte", title: "Robuste Skripte", description: "set -eu, Quoting und Eingabeprüfungen sichtbar trainieren.", icon: iconMap.terminal, chips: ["set -eu", "Quoting"], prefixes: [["shellskripte", "robuste-skripte"]] },
    ] },
    { slug: "rechte-und-shell-kontext", title: "Rechte und Shell-Kontext", description: "Dateirechte, Besitz, PATH und sudo klarer trennen.", icon: iconMap.shield, chips: ["Rechte", "sudo"], prefixes: [["system", "rechte-und-besitz"], ["shell", "umgebungsvariablen-und-path"], ["shell", "dateirechte-mit-ls-stat-und-chmod-lesen"], ["system", "dateirechte"]], children: [
      { slug: "symbolisch-oktal", title: "Symbolisch und oktal", description: "chmod-Änderung und Zielzustand klar unterscheiden.", icon: iconMap.shield, chips: ["chmod", "640"], prefixes: [["system", "rechte-und-acl", "symbolisch-oktal"]] },
      { slug: "rechte-und-besitz", title: "Rechte und Besitz", description: "Besitz, Rechte und erhöhte Ausführung nicht vermischen.", icon: iconMap.shield, chips: ["sudo", "Besitz"], prefixes: [["system", "rechte-und-besitz"]] },
    ] },
    { slug: "ssh", title: "SSH", description: "Schlüssel, Agent, Fernzugriff und typische Sicherheitsfragen.", icon: iconMap.shield, chips: ["SSH", "Schlüssel"], prefixes: [["ssh"]], children: [
      { slug: "ssh-config", title: "SSH-Config", description: "Host-Alias, Port, User und Schlüssel lesbar bündeln.", icon: iconMap.shield, chips: ["Config", "Alias"], prefixes: [["ssh", "schluessel-und-agent", "ssh-config"]] },
      { slug: "schluessel-und-agent", title: "Schlüssel und Agent", description: "Passphrase, privater Schlüssel und ssh-agent getrennt verstehen.", icon: iconMap.shield, chips: ["Agent", "Key"], prefixes: [["ssh", "schluessel-und-agent"]] },
    ] },
    { slug: "system", title: "System", description: "Dienste, Journal, Cron und Rechte als getrennte Systemblöcke.", icon: iconMap.terminal, chips: ["systemd", "Cron"], prefixes: [["system"]], children: [
      { slug: "dienste-und-systemd", title: "Dienste und systemd", description: "start, enable und Journalabfragen einzeln prüfen.", icon: iconMap.terminal, chips: ["systemctl", "journalctl"], prefixes: [["system", "dienste-und-systemd"]] },
      { slug: "automatisierung-und-cron", title: "Automatisierung und Cron", description: "Cron-Umgebung, PATH und Arbeitsverzeichnis sichtbar machen.", icon: iconMap.terminal, chips: ["Cron", "PATH"], prefixes: [["system", "automatisierung-und-cron"]] },
      { slug: "rechte-und-acl", title: "Rechte und ACL", description: "Dateirechte, Besitz und ACL-Schichten getrennt prüfen.", icon: iconMap.shield, chips: ["Rechte", "ACL"], prefixes: [["system", "rechte-und-acl"]] },
    ] },
    { slug: "praxis", title: "Praxis", description: "Backup, Restore und sichere Vorabprüfung in konkreten Arbeitsabläufen.", icon: iconMap.data, chips: ["Backup", "Restore"], prefixes: [["praxis"]], children: [
      { slug: "backup-und-wiederherstellung", title: "Backup und Wiederherstellung", description: "Dry-run, Restore-Test und Löschrisiken bewusst prüfen.", icon: iconMap.data, chips: ["rsync", "Restore"], prefixes: [["praxis", "backup-und-wiederherstellung"]] },
    ] },
    { slug: "shell-praxis", title: "Shell-Praxis", description: "Dateien werden sicher bearbeitet, bevor riskante Befehle laufen.", icon: iconMap.terminal, chips: ["Shell-Praxis", "Unterthemen"], prefixes: [["shell-praxis"]], children: [
      { slug: "dateien-sicher-bearbeiten", title: "Dateien sicher bearbeiten", description: "Kopieren, Verschieben, Löschen und temporäre Dateien brauchen klare Vorsicht.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["shell-praxis", "dateien-sicher-bearbeiten"]] },
    ] },
    { slug: "systembetrieb", title: "Systembetrieb", description: "Prozesse, Dienste und Logs werden nach Diagnoseziel getrennt.", icon: iconMap.terminal, chips: ["Systembetrieb", "Unterthemen"], prefixes: [["systembetrieb"]], children: [
      { slug: "prozesse-dienste-logs", title: "Prozesse, Dienste und Logs", description: "Ein laufendes System wird in Zustand, Ursache und Aktion zerlegt.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["systembetrieb", "prozesse-dienste-logs"]] },
    ] },
    { slug: "rechte-und-zugriff", title: "Rechte und Zugriff", description: "Besitz, Modus, umask und sudo werden getrennt nachvollziehbar.", icon: iconMap.terminal, chips: ["Rechte", "Unterthemen"], prefixes: [["rechte-und-zugriff"]], children: [
      { slug: "besitz-rechte-sudo", title: "Besitz, Rechte und sudo", description: "Zugriff ist mehr als chmod: Eigentümer, Gruppe und Kontext zählen mit.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["rechte-und-zugriff", "besitz-rechte-sudo"]] },
    ] },
    { slug: "netzwerk-und-ssh", title: "Netzwerk und SSH", description: "Verbindungen, Ports und Dateiübertragung werden als eigene Diagnoseschritte geführt.", icon: iconMap.terminal, chips: ["Netzwerk", "Unterthemen"], prefixes: [["netzwerk-und-ssh"]], children: [
      { slug: "verbindungen-und-diagnose", title: "Verbindungen und Diagnose", description: "Nicht jedes Netzwerkproblem ist ein SSH-Problem.", icon: iconMap.terminal, chips: ["Prüfen", "Abgrenzen"], prefixes: [["netzwerk-und-ssh", "verbindungen-und-diagnose"]] },
    ] },
    {
      slug: "shell-automation",
      title: "Shell-Automation",
      description: "Robuste Skripte und Textströme in kleinen Arbeitsschritten.",
      icon: iconMap.terminal,
      chips: ["Grundlagen"],
      prefixes: [["shell-automation"]],
      children: [
        { slug: "robuste-skripte", title: "Robuste Skripte", description: "Kernidee, typische Anwendung und sichere Kontrolle zu robuste skripte.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["shell-automation", "robuste-skripte"]] },
        { slug: "textstroeme-und-pipes", title: "Textstroeme und Pipes", description: "Kernidee, typische Anwendung und sichere Kontrolle zu textstroeme und pipes.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["shell-automation", "textstroeme-und-pipes"]] }
      ],
    },
    {
      slug: "systembetrieb",
      title: "Systembetrieb",
      description: "Dienste, Logs und Diagnose als klare Betriebsfragen.",
      icon: iconMap.shield,
      chips: ["Grundlagen"],
      prefixes: [["systembetrieb"]],
      children: [
        { slug: "systemd-und-dienste", title: "Systemd und Dienste", description: "Kernidee, typische Anwendung und sichere Kontrolle zu systemd und dienste.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["systembetrieb", "systemd-und-dienste"]] },
        { slug: "logs-und-diagnose", title: "Logs und Diagnose", description: "Kernidee, typische Anwendung und sichere Kontrolle zu logs und diagnose.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["systembetrieb", "logs-und-diagnose"]] }
      ],
    },
    {
      slug: "netzwerk-und-rechte",
      title: "Netzwerk und Rechte",
      description: "SSH, Firewall und Dateirechte in kleinen Sicherheitsentscheidungen.",
      icon: iconMap.network,
      chips: ["Grundlagen"],
      prefixes: [["netzwerk-und-rechte"]],
      children: [
        { slug: "ssh-und-schluessel", title: "Ssh und Schluessel", description: "Kernidee, typische Anwendung und sichere Kontrolle zu ssh und schluessel.", icon: iconMap.network, chips: ["Grundlagen"], prefixes: [["netzwerk-und-rechte", "ssh-und-schluessel"]] },
        { slug: "firewall-und-dateirechte", title: "Firewall und Dateirechte", description: "Kernidee, typische Anwendung und sichere Kontrolle zu firewall und dateirechte.", icon: iconMap.network, chips: ["Grundlagen"], prefixes: [["netzwerk-und-rechte", "firewall-und-dateirechte"]] }
      ],
    }
  ],
  "web-development": [
    { slug: "html-zugaenglichkeit-und-struktur", title: "HTML-Zugänglichkeit und Struktur", description: "Semantik, Fokus und Statusmeldungen werden als eigene HTML-Entscheidungen geführt.", icon: iconMap.form, chips: ["Grundlagen"], prefixes: [["html-zugaenglichkeit-und-struktur"]], children: [
      { slug: "semantik-und-bedienabsicht", title: "Semantik und Bedienabsicht", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Semantik und Bedienabsicht.", icon: iconMap.form, chips: ["Praxis"], prefixes: [["html-zugaenglichkeit-und-struktur", "semantik-und-bedienabsicht"]] },
      { slug: "formulare-und-fehlertexte", title: "Formulare und Fehlertexte", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Formulare und Fehlertexte.", icon: iconMap.form, chips: ["Praxis"], prefixes: [["html-zugaenglichkeit-und-struktur", "formulare-und-fehlertexte"]] },
      { slug: "fokus-und-tastatur", title: "Fokus und Tastatur", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Fokus und Tastatur.", icon: iconMap.form, chips: ["Praxis"], prefixes: [["html-zugaenglichkeit-und-struktur", "fokus-und-tastatur"]] }
    ] },
    { slug: "css-layoutsysteme", title: "CSS-Layoutsysteme", description: "Grid, Flexbox, Container und Abstände werden als getrennte Layoutfragen behandelt.", icon: iconMap.css, chips: ["Grundlagen"], prefixes: [["css-layoutsysteme"]], children: [
      { slug: "grid-und-layoutachsen", title: "Grid und Layoutachsen", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Grid und Layoutachsen.", icon: iconMap.css, chips: ["Praxis"], prefixes: [["css-layoutsysteme", "grid-und-layoutachsen"]] },
      { slug: "flexbox-und-verteilung", title: "Flexbox und Verteilung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Flexbox und Verteilung.", icon: iconMap.css, chips: ["Praxis"], prefixes: [["css-layoutsysteme", "flexbox-und-verteilung"]] },
      { slug: "responsive-abstaende", title: "Responsive Abstände", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Responsive Abstände.", icon: iconMap.css, chips: ["Praxis"], prefixes: [["css-layoutsysteme", "responsive-abstaende"]] }
    ] },
    { slug: "javascript-interaktion", title: "JavaScript-Interaktion", description: "DOM-Zustand, Events und asynchrone Abläufe werden klein und testbar gehalten.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["javascript-interaktion"]], children: [
      { slug: "dom-zustand-und-rendern", title: "DOM-Zustand und Rendern", description: "Kernidee, typische Anwendung und sichere Kontrolle zu DOM-Zustand und Rendern.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["javascript-interaktion", "dom-zustand-und-rendern"]] },
      { slug: "events-und-delegation", title: "Events und Delegation", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Events und Delegation.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["javascript-interaktion", "events-und-delegation"]] },
      { slug: "async-und-fehlerfluss", title: "Async und Fehlerfluss", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Async und Fehlerfluss.", icon: iconMap.terminal, chips: ["Praxis"], prefixes: [["javascript-interaktion", "async-und-fehlerfluss"]] }
    ] },
    { slug: "browser-daten-und-http", title: "Browser-Daten und HTTP", description: "Anfragen, Statuscodes, Cache und Speicher werden als Browser-Verhalten erklärbar.", icon: iconMap.network, chips: ["Grundlagen"], prefixes: [["browser-daten-und-http"]], children: [
      { slug: "fetch-und-statuscodes", title: "Fetch und Statuscodes", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Fetch und Statuscodes.", icon: iconMap.network, chips: ["Praxis"], prefixes: [["browser-daten-und-http", "fetch-und-statuscodes"]] },
      { slug: "cache-und-aktualitaet", title: "Cache und Aktualität", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Cache und Aktualität.", icon: iconMap.network, chips: ["Praxis"], prefixes: [["browser-daten-und-http", "cache-und-aktualitaet"]] },
      { slug: "localstorage-und-datenschutz", title: "localStorage und Datenschutz", description: "Kernidee, typische Anwendung und sichere Kontrolle zu localStorage und Datenschutz.", icon: iconMap.network, chips: ["Praxis"], prefixes: [["browser-daten-und-http", "localstorage-und-datenschutz"]] }
    ] },
    { slug: "frontend-qualitaet", title: "Frontend-Qualität", description: "Tests, Reviews und Wartbarkeit werden als sichtbare Projektpraxis trainiert.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["frontend-qualitaet"]], children: [
      { slug: "komponententest-und-story", title: "Komponententest und Story", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Komponententest und Story.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["frontend-qualitaet", "komponententest-und-story"]] },
      { slug: "review-und-checkliste", title: "Review und Checkliste", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Review und Checkliste.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["frontend-qualitaet", "review-und-checkliste"]] },
      { slug: "performance-und-messung", title: "Performance und Messung", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Performance und Messung.", icon: iconMap.shield, chips: ["Praxis"], prefixes: [["frontend-qualitaet", "performance-und-messung"]] }
    ] },
    { slug: "ux-feedback-und-fehlerzustaende", title: "UX-Feedback und Fehlerzustände", description: "Nutzerführung wird über leere Zustände, Fehler, Erfolg und Wartezeit gestaltet.", icon: iconMap.form, chips: ["Grundlagen"], prefixes: [["ux-feedback-und-fehlerzustaende"]], children: [
      { slug: "empty-state-und-naechster-schritt", title: "Empty State und nächster Schritt", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Empty State und nächster Schritt.", icon: iconMap.form, chips: ["Praxis"], prefixes: [["ux-feedback-und-fehlerzustaende", "empty-state-und-naechster-schritt"]] },
      { slug: "toast-dialog-und-inline", title: "Toast, Dialog und Inline", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Toast, Dialog und Inline.", icon: iconMap.form, chips: ["Praxis"], prefixes: [["ux-feedback-und-fehlerzustaende", "toast-dialog-und-inline"]] },
      { slug: "ladezustand-und-skeleton", title: "Ladezustand und Skeleton", description: "Kernidee, typische Anwendung und sichere Kontrolle zu Ladezustand und Skeleton.", icon: iconMap.form, chips: ["Praxis"], prefixes: [["ux-feedback-und-fehlerzustaende", "ladezustand-und-skeleton"]] }
    ] },
    { slug: "html", title: "HTML", description: "Semantik, Formulare, Navigation, Tabellen und Statusmeldungen als getrennte HTML-Blöcke.", icon: iconMap.form, chips: ["HTML", "Semantik"], prefixes: [["html"]], children: [
      { slug: "semantik-und-interaktion", title: "Semantik und Interaktion", description: "Button, Link und Nutzerabsicht semantisch unterscheiden.", icon: iconMap.form, chips: ["Button", "Link"], prefixes: [["html", "semantik-und-interaktion"]] },
      { slug: "accessibility-und-status", title: "Accessibility und Status", description: "aria-live, Statusmeldungen und Dringlichkeit trennen.", icon: iconMap.form, chips: ["aria-live", "Status"], prefixes: [["html", "accessibility-und-status"]] },
      { slug: "formulare-und-tabellen", title: "Formulare und Tabellen", description: "Formulare, Validierung und Tabellen als Grundlagenblock.", icon: iconMap.form, chips: ["Formulare", "Tabellen"], prefixes: [["html", "formulare-und-eingaben"], ["html", "formular-validierung"], ["html", "tabellen-barrierearm"]] },
      { slug: "formularfeedback-und-zustaende", title: "Formularfeedback und Zustände", description: "Fehler, Erfolg, Wartezustand und Fokusführung getrennt prüfen.", icon: iconMap.form, chips: ["Fehler", "Status"], prefixes: [["html", "formularfeedback-und-zustaende"]] },
      { slug: "bilder-navigation-und-links", title: "Bilder, Navigation und Links", description: "Bilder, Menüs und Linktexte als Orientierungsblock.", icon: iconMap.image, chips: ["Bilder", "Links"], prefixes: [["html", "bilder-und-alt-texte"], ["html", "navigation-und-menues"], ["html", "linktexte-und-links"]] },
    ] },
    { slug: "css", title: "CSS", description: "Layout, Kaskade, Tokens und Komponentenvarianten werden kleinteiliger auffindbar.", icon: iconMap.css, chips: ["CSS", "Layout"], prefixes: [["css"]], children: [
      { slug: "responsive-design", title: "Responsive Design", description: "Fluid Typography, Breakpoints und Layoutgrenzen bewusst wählen.", icon: iconMap.css, chips: ["clamp", "responsive"], prefixes: [["css", "responsive-design"]] },
      { slug: "grid-und-layout", title: "Grid und Layout", description: "auto-fit, auto-fill und Rasterverhalten getrennt prüfen.", icon: iconMap.css, chips: ["Grid", "Tracks"], prefixes: [["css", "grid-und-layout"]] },
      { slug: "css-und-layout", title: "CSS und Layout", description: "Boxmodell, Flexbox, Grid und responsive Layouts.", icon: iconMap.css, chips: ["Layout", "Responsive"], prefixes: [["css", "responsive-layouts"], ["css", "box-modell"], ["css", "flexbox"], ["css", "selektoren"]] },
      { slug: "design-systeme", title: "Design-Systeme", description: "Tokens, Varianten und Komponentenregeln sauber trennen.", icon: iconMap.css, chips: ["Tokens", "Varianten"], prefixes: [["css", "design-systeme"], ["css", "css-spezifitaet-und-kaskade"]] },
    ] },
    { slug: "javascript", title: "JavaScript", description: "DOM, Browser-APIs, Async, Speicher und Fehlerbehandlung getrennt lernen.", icon: iconMap.terminal, chips: ["JS", "Browser"], prefixes: [["javascript"]], children: [
      { slug: "dom-events-und-zustand", title: "DOM-Events und Zustand", description: "Event Delegation, Zielprüfung und dynamische Listen.", icon: iconMap.terminal, chips: ["Events", "DOM"], prefixes: [["javascript", "dom-events-und-zustand"]] },
      { slug: "async-und-fehlerbehandlung", title: "Async und Fehlerbehandlung", description: "Ladezustand, Fehlerpfad und Wiederholbarkeit sichtbar machen.", icon: iconMap.terminal, chips: ["async", "Fehler"], prefixes: [["javascript", "async-und-fehlerbehandlung"]] },
    ] },
    { slug: "ux", title: "UX und Nutzerführung", description: "Orientierung, Rückwege und Zustände aus Nutzersicht prüfen.", icon: iconMap.network, chips: ["UX", "Navigation"], prefixes: [["ux"]], children: [
      { slug: "navigation-und-orientierung", title: "Navigation und Orientierung", description: "Aktiver Zustand, Breadcrumb und Rückweg zusammen planen.", icon: iconMap.network, chips: ["Navigation", "Breadcrumb"], prefixes: [["ux", "navigation-und-orientierung"]] },
    ] },
    { slug: "projektpraxis", title: "Projektpraxis", description: "Tests, Review, Betrieb und Wartung als eigene Praxisblöcke.", icon: iconMap.shield, chips: ["Review", "Tests"], prefixes: [["projektpraxis"]], children: [
      { slug: "formulare-und-validierung", title: "Formulare und Validierung", description: "Client- und Serverprüfung als getrennte Schichten.", icon: iconMap.form, chips: ["Validierung", "Server"], prefixes: [["projektpraxis", "formulare-und-validierung"]] },
      { slug: "performance-und-cache", title: "Performance und Cache", description: "Statische Assets, Versionierung und Cache-Regeln planen.", icon: iconMap.network, chips: ["Cache", "Assets"], prefixes: [["projektpraxis", "performance-und-cache"]] },
      { slug: "content-security-policy", title: "Content Security Policy", description: "Skriptquellen, Nonces und Inline-Risiken begrenzen.", icon: iconMap.shield, chips: ["CSP", "Nonce"], prefixes: [["projektpraxis", "sicherheit-und-datenschutz", "content-security-policy"]] },
      { slug: "tests-und-review", title: "Tests und Review", description: "Regressionen, Gegenproben und Review-Fragen klein halten.", icon: iconMap.shield, chips: ["Tests", "Review"], prefixes: [["projektpraxis", "tests-und-review"]] },
      { slug: "betrieb-und-release", title: "Betrieb und Release", description: "Build, Deploy, Monitoring und Release-Notizen.", icon: iconMap.network, chips: ["Release", "Build"], prefixes: [["projektpraxis", "betrieb-und-release"]] },
    ] },
    { slug: "html-a11y", title: "HTML und Accessibility", description: "Semantik, Statusmeldungen und Fokusführung werden nicht vermischt.", icon: iconMap.css, chips: ["HTML", "Unterthemen"], prefixes: [["html-a11y"]], children: [
      { slug: "semantik-status-fokus", title: "Semantik, Status und Fokus", description: "Zugängliche Oberflächen brauchen mehrere kleine Entscheidungen.", icon: iconMap.css, chips: ["Prüfen", "Abgrenzen"], prefixes: [["html-a11y", "semantik-status-fokus"]] },
    ] },
    { slug: "css-systeme", title: "CSS-Systeme", description: "Tokens, Komponenten und Layoutgrenzen werden als Systementscheidungen sichtbar.", icon: iconMap.css, chips: ["CSS-Systeme", "Unterthemen"], prefixes: [["css-systeme"]], children: [
      { slug: "layout-tokens-komponenten", title: "Layout, Tokens und Komponenten", description: "Wiederverwendbares CSS entsteht durch klare Abhängigkeiten.", icon: iconMap.css, chips: ["Prüfen", "Abgrenzen"], prefixes: [["css-systeme", "layout-tokens-komponenten"]] },
    ] },
    { slug: "javascript-browser", title: "JavaScript im Browser", description: "Events, Zustand und asynchrone Abläufe werden kleinteilig geführt.", icon: iconMap.css, chips: ["JavaScript", "Unterthemen"], prefixes: [["javascript-browser"]], children: [
      { slug: "events-state-async", title: "Events, State und Async", description: "Interaktion wird über Auslöser, Zustand und Nebenwirkung verständlich.", icon: iconMap.css, chips: ["Prüfen", "Abgrenzen"], prefixes: [["javascript-browser", "events-state-async"]] },
    ] },
    { slug: "frontend-betrieb", title: "Frontend-Betrieb", description: "Performance, Build-Artefakte und Sicherheitsheader werden getrennt geprüft.", icon: iconMap.css, chips: ["Frontend-Betrieb", "Unterthemen"], prefixes: [["frontend-betrieb"]], children: [
      { slug: "build-performance-security", title: "Build, Performance und Security", description: "Nach dem Code kommt die Frage, wie die Seite ausgeliefert wird.", icon: iconMap.css, chips: ["Prüfen", "Abgrenzen"], prefixes: [["frontend-betrieb", "build-performance-security"]] },
    ] },
    {
      slug: "frontend-struktur",
      title: "Frontend-Struktur",
      description: "Semantik, Layout und Komponenten in kleinen Entscheidungen.",
      icon: iconMap.form,
      chips: ["Grundlagen"],
      prefixes: [["frontend-struktur"]],
      children: [
        { slug: "html-semantik-praxis", title: "Html Semantik Praxis", description: "Kernidee, typische Anwendung und sichere Kontrolle zu html semantik praxis.", icon: iconMap.form, chips: ["Grundlagen"], prefixes: [["frontend-struktur", "html-semantik-praxis"]] },
        { slug: "css-layout-systeme", title: "Css Layout Systeme", description: "Kernidee, typische Anwendung und sichere Kontrolle zu css layout systeme.", icon: iconMap.form, chips: ["Grundlagen"], prefixes: [["frontend-struktur", "css-layout-systeme"]] }
      ],
    },
    {
      slug: "browser-javascript",
      title: "Browser-JavaScript",
      description: "DOM, Events, Zustand und Fetch als präzise UI-Fragen.",
      icon: iconMap.terminal,
      chips: ["Grundlagen"],
      prefixes: [["browser-javascript"]],
      children: [
        { slug: "dom-zustand-events", title: "Dom Zustand Events", description: "Kernidee, typische Anwendung und sichere Kontrolle zu dom zustand events.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["browser-javascript", "dom-zustand-events"]] },
        { slug: "fetch-und-fehler", title: "Fetch und Fehler", description: "Kernidee, typische Anwendung und sichere Kontrolle zu fetch und fehler.", icon: iconMap.terminal, chips: ["Grundlagen"], prefixes: [["browser-javascript", "fetch-und-fehler"]] }
      ],
    },
    {
      slug: "web-betrieb",
      title: "Web-Betrieb",
      description: "Performance, Barrierefreiheit und Releasebeobachtung als Praxisfragen.",
      icon: iconMap.shield,
      chips: ["Grundlagen"],
      prefixes: [["web-betrieb"]],
      children: [
        { slug: "performance-a11y", title: "Performance A11Y", description: "Kernidee, typische Anwendung und sichere Kontrolle zu performance a11y.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["web-betrieb", "performance-a11y"]] },
        { slug: "release-monitoring", title: "Release Monitoring", description: "Kernidee, typische Anwendung und sichere Kontrolle zu release monitoring.", icon: iconMap.shield, chips: ["Grundlagen"], prefixes: [["web-betrieb", "release-monitoring"]] }
      ],
    }
  ],
};

const fallbackDescription = "Hier liegen die passenden Wissensseiten und Aufgaben in einem klareren Unterthema.";

const isPrefixMatch = (prefix: string[], target: string[]) =>
  prefix.length <= target.length && prefix.every((segment, index) => target[index] === segment);

const uniquePaths = (paths: string[][]) => {
  const seen = new Set<string>();
  return paths.filter((path) => {
    const key = path.join("/");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const getPathPrefixes = (path: string[]) => path.map((_, index) => path.slice(0, index + 1));

const getCommonPathPrefix = (paths: string[][]) => {
  if (paths.length === 0) return [];
  let prefix = [...paths[0]];
  for (const path of paths.slice(1)) {
    let index = 0;
    while (index < prefix.length && index < path.length && prefix[index] === path[index]) index += 1;
    prefix = prefix.slice(0, index);
    if (prefix.length === 0) break;
  }
  return prefix;
};

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

const getLegacyTopicPathsForEntry = (entry: TopicEntry) => {
  const paths: string[][] = [];
  const tail = getTopicTail(entry);
  if (tail.length > 0) paths.push(...getPathPrefixes(tail));

  if (entry.collection === "exercises") {
    const overview = getTopicOverviewPath(entry);
    if (overview.length > 0) paths.push(...getPathPrefixes(overview));
  }

  return uniquePaths(paths);
};

export const getAreaPathForEntry = (subjectSlug: string, entry: TopicEntry) =>
  resolveAreaPathForEntry(areaNodesBySubject[subjectSlug as PrimarySubjectSlug] ?? [], entry);

export const getAreaAliasPathsForEntry = (subjectSlug: string, entry: TopicEntry) => {
  const areaPath = getAreaPathForEntry(subjectSlug, entry);
  return getLegacyTopicPathsForEntry(entry).filter((path) => path.join("/") !== areaPath.join("/"));
};

export const resolveAreaPathFromRequestedPath = (subjectSlug: string, requestedPath: string[], entries: TopicEntry[]) => {
  if (requestedPath.length === 0) return [];
  const matchingEntries = entries.filter((entry) =>
    getAreaAliasPathsForEntry(subjectSlug, entry).some((path) => path.join("/") === requestedPath.join("/")),
  );

  if (matchingEntries.length === 0) return [];
  const mappedPaths = matchingEntries
    .map((entry) => getAreaPathForEntry(subjectSlug, entry))
    .filter((path) => path.length > 0);

  return getCommonPathPrefix(mappedPaths);
};

export const getAreaTopicLabelForEntry = (subjectSlug: string, entry: TopicEntry) => {
  const path = getAreaPathForEntry(subjectSlug, entry);
  return path.length > 0 ? getAreaTopicTitle(subjectSlug, path) : getTopicDisplayLabel(entry);
};

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


// v115: zusätzliche Feinstruktur-Knoten für fachbereichsübergreifende Großläufe.
areaNodesBySubject["mathematik"].push(
  { slug: "zahlenstrategien-v115", title: "Zahlenstrategien", description: "Sicher rechnen, überschlagen und Einheiten sauber trennen.", icon: iconMap.numbers, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["zahlenstrategien", "zahlenstrategien v115"], prefixes: [["zahlenstrategien-v115"]], children: [
      { slug: "brueche-und-anteile", title: "Brüche und Anteile", description: "Kleine Lerneinheiten zu Brüche und Anteile mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.numbers, chips: ["Brüche", "Praxis", "Gegenprobe"], searchAliases: ["brüche und anteile", "brueche und anteile"], prefixes: [["zahlenstrategien-v115", "brueche-und-anteile"]] },
      { slug: "ueberschlag-und-plausibilitaet", title: "Überschlag und Plausibilität", description: "Kleine Lerneinheiten zu Überschlag und Plausibilität mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.numbers, chips: ["Überschlag", "Praxis", "Gegenprobe"], searchAliases: ["überschlag und plausibilität", "ueberschlag und plausibilitaet"], prefixes: [["zahlenstrategien-v115", "ueberschlag-und-plausibilitaet"]] }
    ] },
  { slug: "funktionsdenken-v115", title: "Funktionsdenken", description: "Funktionen als Zuordnung, Änderung und Modell lesen.", icon: iconMap.graph, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["funktionsdenken", "funktionsdenken v115"], prefixes: [["funktionsdenken-v115"]], children: [
      { slug: "lineare-modelle", title: "Lineare Modelle", description: "Kleine Lerneinheiten zu Lineare Modelle mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.graph, chips: ["Lineare", "Praxis", "Gegenprobe"], searchAliases: ["lineare modelle", "lineare modelle"], prefixes: [["funktionsdenken-v115", "lineare-modelle"]] },
      { slug: "nichtlineare-verlaeufe", title: "Nichtlineare Verläufe", description: "Kleine Lerneinheiten zu Nichtlineare Verläufe mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.graph, chips: ["Nichtlineare", "Praxis", "Gegenprobe"], searchAliases: ["nichtlineare verläufe", "nichtlineare verlaeufe"], prefixes: [["funktionsdenken-v115", "nichtlineare-verlaeufe"]] }
    ] },
  { slug: "geometrie-begruenden-v115", title: "Geometrisch begründen", description: "Formen, Lagebeziehungen und Einheiten sauber unterscheiden.", icon: iconMap.ruler, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["geometrisch begründen", "geometrie begruenden v115"], prefixes: [["geometrie-begruenden-v115"]], children: [
      { slug: "flaechen-und-koerper", title: "Flächen und Körper", description: "Kleine Lerneinheiten zu Flächen und Körper mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.ruler, chips: ["Flächen", "Praxis", "Gegenprobe"], searchAliases: ["flächen und körper", "flaechen und koerper"], prefixes: [["geometrie-begruenden-v115", "flaechen-und-koerper"]] },
      { slug: "lage-und-winkel", title: "Lage und Winkel", description: "Kleine Lerneinheiten zu Lage und Winkel mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.ruler, chips: ["Lage", "Praxis", "Gegenprobe"], searchAliases: ["lage und winkel", "lage und winkel"], prefixes: [["geometrie-begruenden-v115", "lage-und-winkel"]] }
    ] },
  { slug: "daten-und-zufall-v115", title: "Daten und Zufall", description: "Daten lesen, Diagramme prüfen und Zufallsaussagen begründen.", icon: iconMap.chart, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["daten und zufall", "daten und zufall v115"], prefixes: [["daten-und-zufall-v115"]], children: [
      { slug: "diagramme-kritisch-lesen", title: "Diagramme kritisch lesen", description: "Kleine Lerneinheiten zu Diagramme kritisch lesen mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.chart, chips: ["Diagramme", "Praxis", "Gegenprobe"], searchAliases: ["diagramme kritisch lesen", "diagramme kritisch lesen"], prefixes: [["daten-und-zufall-v115", "diagramme-kritisch-lesen"]] },
      { slug: "wahrscheinlichkeit-einordnen", title: "Wahrscheinlichkeit einordnen", description: "Kleine Lerneinheiten zu Wahrscheinlichkeit einordnen mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.chart, chips: ["Wahrscheinlichkeit", "Praxis", "Gegenprobe"], searchAliases: ["wahrscheinlichkeit einordnen", "wahrscheinlichkeit einordnen"], prefixes: [["daten-und-zufall-v115", "wahrscheinlichkeit-einordnen"]] }
    ] }
);
areaNodesBySubject["informatik"].push(
  { slug: "programmierpraxis-v115", title: "Programmierpraxis", description: "Code lesen, testen und kleine Fehler gezielt eingrenzen.", icon: iconMap.terminal, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["programmierpraxis", "programmierpraxis v115"], prefixes: [["programmierpraxis-v115"]], children: [
      { slug: "debugging-klein", title: "Debugging klein schneiden", description: "Kleine Lerneinheiten zu Debugging klein schneiden mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.terminal, chips: ["Debugging", "Praxis", "Gegenprobe"], searchAliases: ["debugging klein schneiden", "debugging klein"], prefixes: [["programmierpraxis-v115", "debugging-klein"]] },
      { slug: "variablen-und-zustaende", title: "Variablen und Zustände", description: "Kleine Lerneinheiten zu Variablen und Zustände mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.terminal, chips: ["Variablen", "Praxis", "Gegenprobe"], searchAliases: ["variablen und zustände", "variablen und zustaende"], prefixes: [["programmierpraxis-v115", "variablen-und-zustaende"]] }
    ] },
  { slug: "algorithmen-fein-v115", title: "Algorithmische Feinstruktur", description: "Abläufe begründen statt nur Code ausführen.", icon: iconMap.numbers, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["algorithmische feinstruktur", "algorithmen fein v115"], prefixes: [["algorithmen-fein-v115"]], children: [
      { slug: "suchen-und-sortieren", title: "Suchen und Sortieren", description: "Kleine Lerneinheiten zu Suchen und Sortieren mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.numbers, chips: ["Suchen", "Praxis", "Gegenprobe"], searchAliases: ["suchen und sortieren", "suchen und sortieren"], prefixes: [["algorithmen-fein-v115", "suchen-und-sortieren"]] },
      { slug: "komplexitaet-anschaulich", title: "Komplexität anschaulich", description: "Kleine Lerneinheiten zu Komplexität anschaulich mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.numbers, chips: ["Komplexität", "Praxis", "Gegenprobe"], searchAliases: ["komplexität anschaulich", "komplexitaet anschaulich"], prefixes: [["algorithmen-fein-v115", "komplexitaet-anschaulich"]] }
    ] },
  { slug: "datenmodellierung-v115", title: "Datenmodellierung", description: "Daten passend strukturieren und Beziehungen sichtbar machen.", icon: iconMap.data, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["datenmodellierung", "datenmodellierung v115"], prefixes: [["datenmodellierung-v115"]], children: [
      { slug: "listen-mengen-tabellen", title: "Listen, Mengen und Tabellen", description: "Kleine Lerneinheiten zu Listen, Mengen und Tabellen mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.data, chips: ["Listen,", "Praxis", "Gegenprobe"], searchAliases: ["listen, mengen und tabellen", "listen mengen tabellen"], prefixes: [["datenmodellierung-v115", "listen-mengen-tabellen"]] },
      { slug: "schnittstellen-und-formate", title: "Schnittstellen und Formate", description: "Kleine Lerneinheiten zu Schnittstellen und Formate mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.data, chips: ["Schnittstellen", "Praxis", "Gegenprobe"], searchAliases: ["schnittstellen und formate", "schnittstellen und formate"], prefixes: [["datenmodellierung-v115", "schnittstellen-und-formate"]] }
    ] },
  { slug: "softwarequalitaet-v115", title: "Softwarequalität", description: "Lesbarkeit, Tests und Schnittstellen als eigene Themen behandeln.", icon: iconMap.shield, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["softwarequalität", "softwarequalitaet v115"], prefixes: [["softwarequalitaet-v115"]], children: [
      { slug: "tests-und-vertraege", title: "Tests und Verträge", description: "Kleine Lerneinheiten zu Tests und Verträge mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.shield, chips: ["Tests", "Praxis", "Gegenprobe"], searchAliases: ["tests und verträge", "tests und vertraege"], prefixes: [["softwarequalitaet-v115", "tests-und-vertraege"]] },
      { slug: "code-lesbarkeit", title: "Code-Lesbarkeit", description: "Kleine Lerneinheiten zu Code-Lesbarkeit mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.shield, chips: ["Code-Lesbarkeit", "Praxis", "Gegenprobe"], searchAliases: ["code-lesbarkeit", "code lesbarkeit"], prefixes: [["softwarequalitaet-v115", "code-lesbarkeit"]] }
    ] }
);
areaNodesBySubject["elektrotechnik"].push(
  { slug: "messpraxis-v115", title: "Messpraxis", description: "Messgeräte, Fehlerbilder und sichere Gegenproben kleinteilig üben.", icon: iconMap.meter, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["messpraxis", "messpraxis v115"], prefixes: [["messpraxis-v115"]], children: [
      { slug: "spannung-strom-widerstand", title: "Spannung, Strom und Widerstand", description: "Kleine Lerneinheiten zu Spannung, Strom und Widerstand mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.meter, chips: ["Spannung,", "Praxis", "Gegenprobe"], searchAliases: ["spannung, strom und widerstand", "spannung strom widerstand"], prefixes: [["messpraxis-v115", "spannung-strom-widerstand"]] },
      { slug: "fehlerbilder-systematisch", title: "Fehlerbilder systematisch", description: "Kleine Lerneinheiten zu Fehlerbilder systematisch mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.meter, chips: ["Fehlerbilder", "Praxis", "Gegenprobe"], searchAliases: ["fehlerbilder systematisch", "fehlerbilder systematisch"], prefixes: [["messpraxis-v115", "fehlerbilder-systematisch"]] }
    ] },
  { slug: "bauteile-praxis-v115", title: "Bauteile in der Praxis", description: "Dioden, Transistoren und Schutzbauteile praktisch abgrenzen.", icon: iconMap.circuit, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["bauteile in der praxis", "bauteile praxis v115"], prefixes: [["bauteile-praxis-v115"]], children: [
      { slug: "dioden-und-schutz", title: "Dioden und Schutz", description: "Kleine Lerneinheiten zu Dioden und Schutz mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.circuit, chips: ["Dioden", "Praxis", "Gegenprobe"], searchAliases: ["dioden und schutz", "dioden und schutz"], prefixes: [["bauteile-praxis-v115", "dioden-und-schutz"]] },
      { slug: "transistoren-und-mosfets", title: "Transistoren und MOSFETs", description: "Kleine Lerneinheiten zu Transistoren und MOSFETs mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.circuit, chips: ["Transistoren", "Praxis", "Gegenprobe"], searchAliases: ["transistoren und mosfets", "transistoren und mosfets"], prefixes: [["bauteile-praxis-v115", "transistoren-und-mosfets"]] }
    ] },
  { slug: "mikrocontroller-praxis-v115", title: "Mikrocontroller-Praxis", description: "Eingänge, Ausgänge und Versorgung als getrennte Praxisfragen lesen.", icon: iconMap.logic, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["mikrocontroller-praxis", "mikrocontroller praxis v115"], prefixes: [["mikrocontroller-praxis-v115"]], children: [
      { slug: "eingang-ausgang-pegel", title: "Eingang, Ausgang, Pegel", description: "Kleine Lerneinheiten zu Eingang, Ausgang, Pegel mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.logic, chips: ["Eingang,", "Praxis", "Gegenprobe"], searchAliases: ["eingang, ausgang, pegel", "eingang ausgang pegel"], prefixes: [["mikrocontroller-praxis-v115", "eingang-ausgang-pegel"]] },
      { slug: "zeit-und-energie", title: "Zeit und Energie", description: "Kleine Lerneinheiten zu Zeit und Energie mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.logic, chips: ["Zeit", "Praxis", "Gegenprobe"], searchAliases: ["zeit und energie", "zeit und energie"], prefixes: [["mikrocontroller-praxis-v115", "zeit-und-energie"]] }
    ] },
  { slug: "signale-stoerungen-v115", title: "Signale und Störungen", description: "Störungen, Filter und Leitungsführung nicht vermischen.", icon: iconMap.data, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["signale und störungen", "signale stoerungen v115"], prefixes: [["signale-stoerungen-v115"]], children: [
      { slug: "stoerungen-und-filter", title: "Störungen und Filter", description: "Kleine Lerneinheiten zu Störungen und Filter mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.data, chips: ["Störungen", "Praxis", "Gegenprobe"], searchAliases: ["störungen und filter", "stoerungen und filter"], prefixes: [["signale-stoerungen-v115", "stoerungen-und-filter"]] },
      { slug: "kommunikation-robust", title: "Kommunikation robust machen", description: "Kleine Lerneinheiten zu Kommunikation robust machen mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.data, chips: ["Kommunikation", "Praxis", "Gegenprobe"], searchAliases: ["kommunikation robust machen", "kommunikation robust"], prefixes: [["signale-stoerungen-v115", "kommunikation-robust"]] }
    ] }
);
areaNodesBySubject["linux"].push(
  { slug: "shell-praxis-v115", title: "Shell-Praxis", description: "Dateiarbeit, Pipes und Auswertung kleinschrittig trainieren.", icon: iconMap.terminal, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["shell-praxis", "shell praxis v115"], prefixes: [["shell-praxis-v115"]], children: [
      { slug: "dateien-finden-lesen", title: "Dateien finden und lesen", description: "Kleine Lerneinheiten zu Dateien finden und lesen mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.terminal, chips: ["Dateien", "Praxis", "Gegenprobe"], searchAliases: ["dateien finden und lesen", "dateien finden lesen"], prefixes: [["shell-praxis-v115", "dateien-finden-lesen"]] },
      { slug: "pipes-und-textfilter", title: "Pipes und Textfilter", description: "Kleine Lerneinheiten zu Pipes und Textfilter mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.terminal, chips: ["Pipes", "Praxis", "Gegenprobe"], searchAliases: ["pipes und textfilter", "pipes und textfilter"], prefixes: [["shell-praxis-v115", "pipes-und-textfilter"]] }
    ] },
  { slug: "systembetrieb-v115", title: "Systembetrieb", description: "Prozesse, Dienste und Ressourcen gezielt lesen.", icon: iconMap.chart, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["systembetrieb", "systembetrieb v115"], prefixes: [["systembetrieb-v115"]], children: [
      { slug: "prozesse-und-dienste", title: "Prozesse und Dienste", description: "Kleine Lerneinheiten zu Prozesse und Dienste mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.chart, chips: ["Prozesse", "Praxis", "Gegenprobe"], searchAliases: ["prozesse und dienste", "prozesse und dienste"], prefixes: [["systembetrieb-v115", "prozesse-und-dienste"]] },
      { slug: "ressourcen-und-speicher", title: "Ressourcen und Speicher", description: "Kleine Lerneinheiten zu Ressourcen und Speicher mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.chart, chips: ["Ressourcen", "Praxis", "Gegenprobe"], searchAliases: ["ressourcen und speicher", "ressourcen und speicher"], prefixes: [["systembetrieb-v115", "ressourcen-und-speicher"]] }
    ] },
  { slug: "rechte-und-sicherheit-v115", title: "Rechte und Sicherheit", description: "Zugriffe, Besitzer und Schlüssel sauber abgrenzen.", icon: iconMap.shield, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["rechte und sicherheit", "rechte und sicherheit v115"], prefixes: [["rechte-und-sicherheit-v115"]], children: [
      { slug: "dateirechte-und-besitz", title: "Dateirechte und Besitz", description: "Kleine Lerneinheiten zu Dateirechte und Besitz mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.shield, chips: ["Dateirechte", "Praxis", "Gegenprobe"], searchAliases: ["dateirechte und besitz", "dateirechte und besitz"], prefixes: [["rechte-und-sicherheit-v115", "dateirechte-und-besitz"]] },
      { slug: "ssh-und-schluessel", title: "SSH und Schlüssel", description: "Kleine Lerneinheiten zu SSH und Schlüssel mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.shield, chips: ["SSH", "Praxis", "Gegenprobe"], searchAliases: ["ssh und schlüssel", "ssh und schluessel"], prefixes: [["rechte-und-sicherheit-v115", "ssh-und-schluessel"]] }
    ] },
  { slug: "paket-und-backup-v115", title: "Pakete und Backups", description: "Installation, Aktualisierung und Sicherung als getrennte Arbeitsroutinen behandeln.", icon: iconMap.shield, chips: ["v115", "Feinstruktur", "Praxis"], searchAliases: ["pakete und backups", "paket und backup v115"], prefixes: [["paket-und-backup-v115"]], children: [
      { slug: "pakete-und-repositories", title: "Pakete und Repositories", description: "Kleine Lerneinheiten zu Pakete und Repositories mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.shield, chips: ["Pakete", "Praxis", "Gegenprobe"], searchAliases: ["pakete und repositories", "pakete und repositories"], prefixes: [["paket-und-backup-v115", "pakete-und-repositories"]] },
      { slug: "backup-und-wiederherstellung", title: "Backup und Wiederherstellung", description: "Kleine Lerneinheiten zu Backup und Wiederherstellung mit Beispiel, Aufgabe und Gegenprobe.", icon: iconMap.shield, chips: ["Backup", "Praxis", "Gegenprobe"], searchAliases: ["backup und wiederherstellung", "backup und wiederherstellung"], prefixes: [["paket-und-backup-v115", "backup-und-wiederherstellung"]] }
    ] }
);
