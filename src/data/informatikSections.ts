export const informatikSections = {
  programmieren: {
    title: "Informatik Programmieren",
    eyebrow: "Kategorie",
    description: "Python, C und strukturierte Programmierung als eigene Themenblöcke.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      { title: "Python", text: "Syntax, Variablen und erste Programme.", href: "/fachbereiche/informatik/programmieren/python-grundlagen", tone: "cs-a" },
      { title: "C", text: "Strukturierter Einstieg in eine systemnahe Sprache.", href: "/fachbereiche/informatik/programmieren/c-einstieg", tone: "cs-b" },
      { title: "Funktionen", text: "Programme in klare Bausteine aufteilen.", href: "/fachbereiche/informatik/programmieren/funktionen", tone: "cs-c" },
    ],
  },
  grundlagen: {
    title: "Informatik Grundlagen",
    eyebrow: "Kategorie",
    description: "Algorithmen, Datentypen und Pseudocode in klar getrennten Blöcken.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      { title: "Algorithmen", text: "Schrittfolgen, Lösungswege und systematisches Denken.", href: "/fachbereiche/informatik/grundlagen/algorithmen", tone: "cs-a" },
      { title: "Datentypen", text: "Arten von Daten und ihre Bedeutung in Programmen.", href: "/fachbereiche/informatik/grundlagen/datentypen", tone: "cs-b" },
      { title: "Pseudocode", text: "Lösungen erst klar beschreiben, dann programmieren.", href: "/fachbereiche/informatik/grundlagen/pseudocode", tone: "cs-c" },
    ],
  },
  systemnah: {
    title: "Informatik Systemnah",
    eyebrow: "Kategorie",
    description: "Prozesse, Speicher und Betriebssysteme als eigene Themenblöcke.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      { title: "Prozesse", text: "Programme in Ausführung und ihre Abläufe verstehen.", href: "/fachbereiche/informatik/systemnah/prozesse", tone: "cs-a" },
      { title: "Speicher", text: "Daten im Speicher und grundlegende Zusammenhänge.", href: "/fachbereiche/informatik/systemnah/speichergrundlagen", tone: "cs-b" },
      { title: "Betriebssystem", text: "Systemsteuerung und wichtige technische Grundlagen.", href: "/fachbereiche/informatik/systemnah/betriebssystem", tone: "cs-c" },
    ],
  },
} as const;
