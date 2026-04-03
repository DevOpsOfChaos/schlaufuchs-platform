export const mathematikSections = {
  grundlagen: {
    title: "Mathematik Grundlagen",
    eyebrow: "Kategorie",
    description: "Zahlen, Brüche und Terme als klar getrennte Themen.",
    mascot: "/assets/mascots/math.png",
    groups: [
      {
        title: "Zahlen",
        text: "Zahlenräume, Rechenarten und erste Grundbegriffe.",
        href: "/fachbereiche/mathematik/grundlagen/zahlen",
        tone: "math-a",
      },
      {
        title: "Brüche",
        text: "Brüche verstehen, darstellen und später umformen.",
        href: "/fachbereiche/mathematik/grundlagen/brueche",
        tone: "math-b",
      },
      {
        title: "Terme",
        text: "Ausdrücke mit Zahlen und Variablen sauber lesen.",
        href: "/fachbereiche/mathematik/grundlagen/terme",
        tone: "math-c",
      },
    ],
  },
  funktionen: {
    title: "Mathematik Funktionen",
    eyebrow: "Kategorie",
    description: "Lineare, quadratische und grafische Themen als getrennte Karten.",
    mascot: "/assets/mascots/math.png",
    groups: [
      {
        title: "Linear",
        text: "Geraden, Steigung und einfache Zusammenhänge.",
        href: "/fachbereiche/mathematik/funktionen/linear",
        tone: "math-a",
      },
      {
        title: "Quadratisch",
        text: "Parabeln, Formen und wichtige Merkmale.",
        href: "/fachbereiche/mathematik/funktionen/quadratisch",
        tone: "math-b",
      },
      {
        title: "Graphen",
        text: "Graphen lesen, vergleichen und deuten.",
        href: "/fachbereiche/mathematik/funktionen/graphen",
        tone: "math-c",
      },
    ],
  },
  geometrie: {
    title: "Mathematik Geometrie",
    eyebrow: "Kategorie",
    description: "Flächen, Volumen und Trigonometrie als eigenständige Themen.",
    mascot: "/assets/mascots/math.png",
    groups: [
      {
        title: "Flächen",
        text: "Flächeninhalte und zweidimensionale Formen.",
        href: "/fachbereiche/mathematik/geometrie/flaechen",
        tone: "math-a",
      },
      {
        title: "Volumen",
        text: "Körper und räumliche Berechnungen.",
        href: "/fachbereiche/mathematik/geometrie/volumen",
        tone: "math-b",
      },
      {
        title: "Trigonometrie",
        text: "Winkel und Dreiecke als eigener Bereich.",
        href: "/fachbereiche/mathematik/geometrie/trigonometrie",
        tone: "math-c",
      },
    ],
  },
} as const;
