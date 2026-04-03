export const informatikSections = {
  programmieren: {
    title: "Informatik Programmieren",
    eyebrow: "Kategorie",
    description: "Python, C und Funktionen als eigene Themenbereiche.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      {
        title: "Python",
        text: "Einstieg, Syntax und erste Programme.",
        href: "/fachbereiche/informatik/programmieren/python",
        tone: "cs-a",
      },
      {
        title: "C",
        text: "Systemnaher Einstieg in eine klassische Sprache.",
        href: "/fachbereiche/informatik/programmieren/c",
        tone: "cs-b",
      },
      {
        title: "Funktionen",
        text: "Programme in klare Bausteine aufteilen.",
        href: "/fachbereiche/informatik/programmieren/funktionen",
        tone: "cs-c",
      },
    ],
  },
  grundlagen: {
    title: "Informatik Grundlagen",
    eyebrow: "Kategorie",
    description: "Algorithmen, Datentypen und Pseudocode als klare Themenkarten.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      {
        title: "Algorithmen",
        text: "Schrittfolgen, Lösungswege und Struktur.",
        href: "/fachbereiche/informatik/grundlagen/algorithmen",
        tone: "cs-a",
      },
      {
        title: "Datentypen",
        text: "Arten von Daten und ihre Bedeutung im Programm.",
        href: "/fachbereiche/informatik/grundlagen/datentypen",
        tone: "cs-b",
      },
      {
        title: "Pseudocode",
        text: "Lösungen erst klar beschreiben, dann umsetzen.",
        href: "/fachbereiche/informatik/grundlagen/pseudocode",
        tone: "cs-c",
      },
    ],
  },
  systemnah: {
    title: "Informatik Systemnah",
    eyebrow: "Kategorie",
    description: "Prozesse, Speicher und Betriebssystem als einzelne Themen.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      {
        title: "Prozesse",
        text: "Programme in Ausführung verstehen.",
        href: "/fachbereiche/informatik/systemnah/prozesse",
        tone: "cs-a",
      },
      {
        title: "Speicher",
        text: "Daten im Speicher und technische Zusammenhänge.",
        href: "/fachbereiche/informatik/systemnah/speicher",
        tone: "cs-b",
      },
      {
        title: "Betriebssystem",
        text: "Systemsteuerung und wichtige Grundlagen.",
        href: "/fachbereiche/informatik/systemnah/betriebssystem",
        tone: "cs-c",
      },
    ],
  },
} as const;
