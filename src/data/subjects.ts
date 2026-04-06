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
  learnModeTitle: string;
  learnModeItems: string[];
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
      "Mathematik auf Schlaufuchs bündelt Grundlagen, Analysis, Algebra und Vektorgeometrie in klaren Themenfeldern. Der Bereich verbindet fachliche Übersicht, Wissensseiten und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Funktionen und Graphen", "Lineare und quadratische Funktionen", "Erste Analysis"] },
      { title: "Zentrale Themen", items: ["Differentialrechnung", "Integralrechnung", "Lineare Gleichungssysteme"] },
      { title: "Erweiterungen", items: ["Komplexe Zahlen", "Geraden und Ebenen", "Fourier und FFT"] },
    ],
    knowledgeLabel: "Wissensseiten",
    exerciseLabel: "Aufgaben",
    learnModeTitle: "Mathematik im Lernmodus nutzen",
    learnModeItems: [
      "Starte mit den Grundlagen und wechsle danach gezielt in Analysis oder Algebra.",
      "Nutze Aufgaben erst nach dem inhaltlichen Überblick, damit Begriffe und Verfahren sitzen.",
      "Arbeite Themen in kleinen Blöcken: verstehen, Beispiel ansehen, dann Aufgaben ergänzen.",
    ],
  },
  informatik: {
    tone: "cs",
    icon: "informatik.png",
    kicker: "Verstehen + Programmieren",
    entry: "Informatik-Einstieg",
    highlights: ["Grundlagen", "Programmierung", "C", "Struktur"],
    intro:
      "Informatik auf Schlaufuchs bündelt Grundlagen, Programmierlogik und erste systemnahe Themen in einer klaren Fachübersicht. Der Bereich verbindet Einordnung, Wissensseiten und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Einführung in die Informatik", "Computer- und Programmiergrundlagen"] },
      { title: "Programmierung", items: ["C und Python einordnen", "Programmstruktur verstehen"] },
      { title: "Vertiefung", items: ["C-Grundlagen", "Kontrollstrukturen", "Eingaben und Ausgaben"] },
    ],
    knowledgeLabel: "Wissensseiten",
    exerciseLabel: "Aufgaben",
    learnModeTitle: "Informatik im Lernmodus nutzen",
    learnModeItems: [
      "Arbeite zuerst über Grundideen und Begriffe, bevor du konkrete Syntax in den Vordergrund stellst.",
      "Verbinde Kontrollstrukturen und Programmstruktur mit kleinen Code-Aufgaben statt isoliertem Auswendiglernen.",
      "Nutze Aufgaben besonders dort, wo Abläufe, Bedingungen und Programmlogik verglichen werden sollen.",
    ],
  },
  elektrotechnik: {
    tone: "ee",
    icon: "elektrotechnik.png",
    kicker: "Theorie + Praxis",
    entry: "Computer und CPU",
    highlights: ["Signale", "Halbleiter", "Netzwerke", "Mikrocontroller"],
    intro:
      "Elektrotechnik auf Schlaufuchs bündelt technische Grundlagen, digitale Technik, Netzwerke und Mikrocontroller in übersichtlichen Themenfeldern. Der Bereich verbindet Fachinformationen, Wissensseiten und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Computer und CPU", "Daten, Signale und Codierung", "Netzwerke und Protokolle"] },
      { title: "Zentrale Themen", items: ["Logikgatter", "Dioden", "MOSFETs und Transistoren"] },
      { title: "Praxis und Rechnen", items: ["Netzwerkanalyse", "Wechselstrom", "Arduino und ESP32"] },
    ],
    knowledgeLabel: "Wissensseiten",
    exerciseLabel: "Aufgaben",
    learnModeTitle: "Elektrotechnik im Lernmodus nutzen",
    learnModeItems: [
      "Starte mit Signalen, Logik und Grundbausteinen, bevor du in Rechnen oder Mikrocontroller gehst.",
      "Nutze Aufgaben vor allem dann, wenn Größen, Schaltungen oder Zusammenhänge sicher eingeordnet werden sollen.",
      "Arbeite praktische Themen wie Arduino oder ESP32 am besten erst nach einem klaren Überblick über die Grundlagen.",
    ],
  },
  linux: {
    tone: "linux",
    icon: "linux.png",
    kicker: "System + Praxis",
    entry: "Shell und Prompt",
    highlights: ["Shell", "Rechte", "Shellskripte", "SSH"],
    intro:
      "Linux auf Schlaufuchs bündelt Shell, Rechte, Benutzer, SSH und Shellskripte in klar gegliederten Themenbereichen. Der Bereich verbindet Praxiswissen, Nachschlagen und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["Shell und Prompt", "Dateirechte", "Benutzer und Gruppen"] },
      { title: "Zentrale Themen", items: ["chmod", "Dateibesitz", "Shellskripte"] },
      { title: "Praxis", items: ["SSH", "Schlüssel", "Fernzugriff und Tools"] },
    ],
    knowledgeLabel: "Wissensseiten",
    exerciseLabel: "Aufgaben",
    learnModeTitle: "Linux im Lernmodus nutzen",
    learnModeItems: [
      "Beginne mit Shell und Rechten, bevor du Automatisierung oder Fernzugriff vertiefst.",
      "Wechsle zwischen Wissensseite und Terminalpraxis in kleinen, klaren Schritten.",
      "Nutze SSH und Shellskripte erst dann stärker, wenn die Grundbefehle sicher sitzen.",
    ],
  },
  "web-development": {
    tone: "web",
    icon: "html_css.png",
    kicker: "Code + Gestaltung",
    entry: "HTML-Grundlagen",
    highlights: ["HTML", "CSS", "Semantik", "Layouts"],
    intro:
      "Web Development auf Schlaufuchs bündelt HTML, CSS und erste Layout-Themen in einer klaren Fachübersicht. Der Bereich verbindet Wissensseiten, Nachschlage-Struktur und passende Aufgaben.",
    sections: [
      { title: "Grundlagen", items: ["HTML-Grundlagen", "HTML-Semantik", "Seitenstruktur"] },
      { title: "Zentrale Themen", items: ["Links, Bilder und Pfade", "CSS-Grundlagen", "Selektoren"] },
      { title: "Praxis", items: ["Box-Modell", "Layouts", "kleine Code-Aufgaben"] },
    ],
    knowledgeLabel: "Wissensseiten",
    exerciseLabel: "Aufgaben",
    learnModeTitle: "Web Development im Lernmodus nutzen",
    learnModeItems: [
      "Beginne mit Struktur und Semantik, bevor du dich in CSS-Details oder Layout-Fragen verlierst.",
      "Verbinde Wissensseiten direkt mit kleinen Code-Aufgaben, damit HTML und CSS sichtbar zusammenwirken.",
      "Nutze den Lernmodus besonders dann, wenn du Themen in einer sinnvollen Reihenfolge durcharbeiten willst.",
    ],
  },
};

export const getSubjectMeta = (slug: string): SubjectMeta | null => {
  const resolved = resolvePrimarySubjectSlug(slug);
  return resolved ? subjectMetaBySlug[resolved] : null;
};
