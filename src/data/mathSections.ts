export const mathSections = {
  grundlagen: {
    title: "Mathematik Grundlagen",
    eyebrow: "Unterbereich",
    description: "Zahlen, Terme, Brüche und sichere Grundlagen für spätere Themen.",
    mascot: "/assets/mascots/math.png",
    groups: [
      {
        title: "Zahlen",
        tone: "math-a",
        items: [
          { label: "Zahlen & Terme", href: "/fachbereiche/mathematik/grundlagen/zahlen-und-terme" },
          { label: "Rechenregeln", href: "/fachbereiche/mathematik/grundlagen/rechenregeln" },
        ],
      },
      {
        title: "Brüche",
        tone: "math-b",
        items: [
          { label: "Brüche verstehen", href: "/fachbereiche/mathematik/grundlagen/brueche-verstehen" },
          { label: "Brüche umformen", href: "/fachbereiche/mathematik/grundlagen/brueche-umformen" },
        ],
      },
      {
        title: "Direkte Themen",
        tone: "math-c",
        items: [
          { label: "Vorzeichen", href: "/fachbereiche/mathematik/grundlagen/vorzeichen" },
          { label: "Klammern", href: "/fachbereiche/mathematik/grundlagen/klammern" },
        ],
      },
    ],
  },
  funktionen: {
    title: "Mathematik Funktionen",
    eyebrow: "Unterbereich",
    description: "Funktionstypen, Graphen und typische Zusammenhänge klar aufgebaut.",
    mascot: "/assets/mascots/math.png",
    groups: [
      {
        title: "Linear",
        tone: "math-a",
        items: [
          { label: "Lineare Funktionen", href: "/fachbereiche/mathematik/funktionen/lineare-funktionen" },
          { label: "Steigung", href: "/fachbereiche/mathematik/funktionen/steigung" },
        ],
      },
      {
        title: "Quadratisch",
        tone: "math-b",
        items: [
          { label: "Quadratische Funktionen", href: "/fachbereiche/mathematik/funktionen/quadratische-funktionen" },
          { label: "Scheitelpunkt", href: "/fachbereiche/mathematik/funktionen/scheitelpunkt" },
        ],
      },
      {
        title: "Graphen",
        tone: "math-c",
        items: [
          { label: "Graphen lesen", href: "/fachbereiche/mathematik/funktionen/graphen-lesen" },
          { label: "Nullstellen", href: "/fachbereiche/mathematik/funktionen/nullstellen" },
        ],
      },
    ],
  },
  geometrie: {
    title: "Mathematik Geometrie",
    eyebrow: "Unterbereich",
    description: "Flächen, Körper und räumliche Zusammenhänge kompakt und wartbar gegliedert.",
    mascot: "/assets/mascots/math.png",
    groups: [
      {
        title: "Flächen",
        tone: "math-a",
        items: [
          { label: "Flächen & Volumen", href: "/fachbereiche/mathematik/geometrie/flaechen-und-volumen" },
          { label: "Umfang", href: "/fachbereiche/mathematik/geometrie/umfang" },
        ],
      },
      {
        title: "Körper",
        tone: "math-b",
        items: [
          { label: "Quader und Würfel", href: "/fachbereiche/mathematik/geometrie/quader-und-wuerfel" },
          { label: "Zylinder", href: "/fachbereiche/mathematik/geometrie/zylinder" },
        ],
      },
      {
        title: "Trigonometrie",
        tone: "math-c",
        items: [
          { label: "Sinus, Kosinus, Tangens", href: "/fachbereiche/mathematik/geometrie/trigonometrie" },
          { label: "Rechtwinklige Dreiecke", href: "/fachbereiche/mathematik/geometrie/dreiecke" },
        ],
      },
    ],
  },
} as const;
