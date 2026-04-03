export const mathSections = {
  grundlagen: {
    title: "Mathematik Grundlagen",
    eyebrow: "Kategorie",
    description: "Zahlen, Brüche und Terme als eigene Themenblöcke mit kurzen Einstiegen.",
    mascot: "/assets/mascots/math.png",
    groups: [
      { title: "Zahlen", text: "Grundlagen zu Zahlenräumen, Rechenarten und einfachen Begriffen.", href: "/fachbereiche/mathematik/grundlagen/zahlen-und-terme", tone: "math-a" },
      { title: "Brüche", text: "Brüche verstehen, vergleichen und später sicher umformen.", href: "/fachbereiche/mathematik/grundlagen/brueche-verstehen", tone: "math-b" },
      { title: "Terme", text: "Ausdrücke mit Zahlen und Variablen als Basis für weitere Themen.", href: "/fachbereiche/mathematik/grundlagen/zahlen-und-terme", tone: "math-c" },
    ],
  },
  funktionen: {
    title: "Mathematik Funktionen",
    eyebrow: "Kategorie",
    description: "Lineare, quadratische und grafische Themen als getrennte Blöcke.",
    mascot: "/assets/mascots/math.png",
    groups: [
      { title: "Linear", text: "Geraden, Steigung und erste funktionale Zusammenhänge.", href: "/fachbereiche/mathematik/funktionen/lineare-funktionen", tone: "math-a" },
      { title: "Quadratisch", text: "Parabeln, Scheitelpunkt und typische Formen.", href: "/fachbereiche/mathematik/funktionen/quadratische-funktionen", tone: "math-b" },
      { title: "Graphen", text: "Funktionen im Koordinatensystem lesen und verstehen.", href: "/fachbereiche/mathematik/funktionen/graphen-lesen", tone: "math-c" },
    ],
  },
  geometrie: {
    title: "Mathematik Geometrie",
    eyebrow: "Kategorie",
    description: "Flächen, Volumen und Trigonometrie als eigene Themenblöcke.",
    mascot: "/assets/mascots/math.png",
    groups: [
      { title: "Flächen", text: "Flächeninhalte und zweidimensionale Grundformen.", href: "/fachbereiche/mathematik/geometrie/flaechen-und-volumen", tone: "math-a" },
      { title: "Volumen", text: "Körper und räumliche Berechnungen im Überblick.", href: "/fachbereiche/mathematik/geometrie/flaechen-und-volumen", tone: "math-b" },
      { title: "Trigonometrie", text: "Winkel, Dreiecke und typische Zusammenhänge.", href: "/fachbereiche/mathematik/geometrie/trigonometrie", tone: "math-c" },
    ],
  },
} as const;
