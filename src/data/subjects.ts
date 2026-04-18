export type PrimarySubjectSlug =
  | "mathematik"
  | "informatik"
  | "elektrotechnik"
  | "linux"
  | "web-development";

export interface SubjectSection {
  title: string;
  items: string[];
}

export interface SubjectMeta {
  tone: string;
  icon: string;
  kicker: string;
  entry: string;
  highlights: string[];
  intro: string;
  sections: SubjectSection[];
  knowledgeLabel: string;
  exerciseLabel: string;
}

export const visibleSubjectOrder: PrimarySubjectSlug[] = [
  "mathematik",
  "informatik",
  "elektrotechnik",
  "linux",
  "web-development",
];

export const subjectTitleMap: Record<string, string> = {
  mathematik: "Mathematik",
  informatik: "Informatik",
  elektrotechnik: "Elektrotechnik",
  linux: "Linux",
  "web-development": "Web Development",
  "daten-und-signale": "Elektrotechnik",
};

export const resolvePrimarySubjectSlug = (slug: string): PrimarySubjectSlug | null => {
  if (slug === "daten-und-signale") return "elektrotechnik";
  return visibleSubjectOrder.includes(slug as PrimarySubjectSlug) ? (slug as PrimarySubjectSlug) : null;
};

export const subjectMetaBySlug: Record<PrimarySubjectSlug, SubjectMeta> = {
  mathematik: {
    tone: "math",
    icon: "math.png",
    kicker: "Wissen + Aufgaben",
    entry: "Funktionen und Graphen",
    highlights: ["Funktionen", "Analysis", "Algebra", "Vektorgeometrie"],
    intro:
      "Mathematik auf Schlaufuchs bündelt Grundlagen, Analysis, Algebra und Vektorgeometrie in klaren Themenfeldern. Der Bereich verbindet fachliche Übersicht, Erklärungen und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Funktionen und Graphen", "Lineare und quadratische Funktionen", "Erste Analysis"] },
      { title: "Zentrale Themen", items: ["Differentialrechnung", "Integralrechnung", "Lineare Gleichungssysteme"] },
      { title: "Erweiterungen", items: ["Komplexe Zahlen", "Geraden und Ebenen", "Fourier und FFT"] },
    ],
    knowledgeLabel: "Erklärungen",
    exerciseLabel: "Aufgaben",
  },
  informatik: {
    tone: "cs",
    icon: "informatik.png",
    kicker: "Verstehen + Programmieren",
    entry: "Informatik-Einstieg",
    highlights: ["Grundlagen", "Programmierung", "C", "Struktur"],
    intro:
      "Informatik auf Schlaufuchs bündelt Grundlagen, Programmierlogik und erste systemnahe Themen in einer klaren Fachübersicht. Der Bereich verbindet Einordnung, Erklärungen und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Einführung in die Informatik", "Computer- und Programmiergrundlagen"] },
      { title: "Programmierung", items: ["C und Python einordnen", "Programmstruktur verstehen"] },
      { title: "Vertiefung", items: ["C-Grundlagen", "Kontrollstrukturen", "Eingaben und Ausgaben"] },
    ],
    knowledgeLabel: "Erklärungen",
    exerciseLabel: "Aufgaben",
  },
  elektrotechnik: {
    tone: "ee",
    icon: "elektrotechnik.png",
    kicker: "Theorie + Praxis",
    entry: "Computer und CPU",
    highlights: ["Signale", "Halbleiter", "Netzwerke", "Mikrocontroller"],
    intro:
      "Elektrotechnik auf Schlaufuchs bündelt technische Grundlagen, digitale Technik, Netzwerke und Mikrocontroller in übersichtlichen Themenfeldern. Der Bereich verbindet Fachinformationen, Erklärungen und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Computer und CPU", "Daten, Signale und Codierung", "Netzwerke und Protokolle"] },
      { title: "Zentrale Themen", items: ["Logikgatter", "Dioden", "MOSFETs und Transistoren"] },
      { title: "Praxis und Rechnen", items: ["Netzwerkanalyse", "Wechselstrom", "Arduino und ESP32"] },
    ],
    knowledgeLabel: "Erklärungen",
    exerciseLabel: "Aufgaben",
  },
  linux: {
    tone: "linux",
    icon: "linux.png",
    kicker: "System + Praxis",
    entry: "Shell und Prompt",
    highlights: ["Shell", "Rechte", "Shellskripte", "SSH"],
    intro:
      "Linux auf Schlaufuchs bündelt Shell, Rechte, Benutzer, SSH und Shellskripte in klar gegliederten Themenbereichen. Der Bereich verbindet Praxiswissen, Erklärungen und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Shell und Prompt", "Dateirechte", "Benutzer und Gruppen"] },
      { title: "Zentrale Themen", items: ["chmod", "Dateibesitz", "Shellskripte"] },
      { title: "Praxis", items: ["SSH", "Schlüssel", "Fernzugriff und Tools"] },
    ],
    knowledgeLabel: "Erklärungen",
    exerciseLabel: "Aufgaben",
  },
  "web-development": {
    tone: "web",
    icon: "html_css.png",
    kicker: "Code + Gestaltung",
    entry: "HTML-Grundlagen",
    highlights: ["HTML", "CSS", "Semantik", "Layouts"],
    intro:
      "Web Development auf Schlaufuchs bündelt HTML, CSS und erste Layout-Themen in einer klaren Fachübersicht. Der Bereich verbindet Erklärungen, Nachschlage-Struktur und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["HTML-Grundlagen", "HTML-Semantik", "Seitenstruktur"] },
      { title: "Zentrale Themen", items: ["Links, Bilder und Pfade", "CSS-Grundlagen", "Selektoren"] },
      { title: "Praxis", items: ["Box-Modell", "Layouts", "kleine Code-Aufgaben"] },
    ],
    knowledgeLabel: "Erklärungen",
    exerciseLabel: "Aufgaben",
  },
};

export const getSubjectMeta = (slug: string): SubjectMeta | null => {
  const resolved = resolvePrimarySubjectSlug(slug);
  return resolved ? subjectMetaBySlug[resolved] : null;
};
