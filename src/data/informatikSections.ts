export const informatikSections = {
  programmieren: {
    title: "Informatik Programmieren",
    eyebrow: "Unterbereich",
    description: "Programmieren mit klaren Einstiegen in Sprache, Logik und Struktur.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      {
        title: "Sprachen",
        tone: "cs-a",
        items: [
          { label: "Python Grundlagen", href: "/fachbereiche/informatik/programmieren/python-grundlagen" },
          { label: "C Einstieg", href: "/fachbereiche/informatik/programmieren/c-einstieg" },
        ],
      },
      {
        title: "Logik",
        tone: "cs-b",
        items: [
          { label: "Variablen und Bedingungen", href: "/fachbereiche/informatik/programmieren/variablen-und-bedingungen" },
          { label: "Schleifen", href: "/fachbereiche/informatik/programmieren/schleifen" },
        ],
      },
      {
        title: "Struktur",
        tone: "cs-c",
        items: [
          { label: "Funktionen", href: "/fachbereiche/informatik/programmieren/funktionen" },
          { label: "Dateien und Projekte", href: "/fachbereiche/informatik/programmieren/dateien-und-projekte" },
        ],
      },
    ],
  },
  grundlagen: {
    title: "Informatik Grundlagen",
    eyebrow: "Unterbereich",
    description: "Algorithmen, Datentypen und Denkweisen in sauber gegliederten Themenblöcken.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      {
        title: "Algorithmen",
        tone: "cs-a",
        items: [
          { label: "Algorithmen", href: "/fachbereiche/informatik/grundlagen/algorithmen" },
          { label: "Abläufe beschreiben", href: "/fachbereiche/informatik/grundlagen/ablaeufe-beschreiben" },
        ],
      },
      {
        title: "Daten",
        tone: "cs-b",
        items: [
          { label: "Datentypen", href: "/fachbereiche/informatik/grundlagen/datentypen" },
          { label: "Eingabe und Ausgabe", href: "/fachbereiche/informatik/grundlagen/eingabe-und-ausgabe" },
        ],
      },
      {
        title: "Struktur",
        tone: "cs-c",
        items: [
          { label: "Probleme zerlegen", href: "/fachbereiche/informatik/grundlagen/probleme-zerlegen" },
          { label: "Pseudocode", href: "/fachbereiche/informatik/grundlagen/pseudocode" },
        ],
      },
    ],
  },
  systemnah: {
    title: "Informatik Systemnah",
    eyebrow: "Unterbereich",
    description: "Prozesse, Speicher und Rechnerverständnis als technische Grundlagen.",
    mascot: "/assets/mascots/hacker.png",
    groups: [
      {
        title: "Prozesse",
        tone: "cs-a",
        items: [
          { label: "Prozesse", href: "/fachbereiche/informatik/systemnah/prozesse" },
          { label: "Programm und Ausführung", href: "/fachbereiche/informatik/systemnah/programm-und-ausfuehrung" },
        ],
      },
      {
        title: "Speicher",
        tone: "cs-b",
        items: [
          { label: "Speichergrundlagen", href: "/fachbereiche/informatik/systemnah/speichergrundlagen" },
          { label: "Variablen im Speicher", href: "/fachbereiche/informatik/systemnah/variablen-im-speicher" },
        ],
      },
      {
        title: "Rechner",
        tone: "cs-c",
        items: [
          { label: "Hardware und Software", href: "/fachbereiche/informatik/systemnah/hardware-und-software" },
          { label: "Betriebssystem", href: "/fachbereiche/informatik/systemnah/betriebssystem" },
        ],
      },
    ],
  },
} as const;
