export const mathLeafPages = {
  "zahlen-und-terme": {
    title: "Zahlen & Terme",
    eyebrow: "Infoseite",
    description: "Zahlen, Variablen und erste Terme als Grundlage für viele weitere Themen.",
    mascot: "/assets/mascots/math.png",
    sections: [
      { title: "Zahlen", tone: "math-a", text: "Natürliche, ganze und rationale Zahlen bilden die Basis für fast alle späteren Rechenwege.", chips: ["natürlich", "ganz", "rational"] },
      { title: "Terme", tone: "math-b", text: "Terme beschreiben Rechenausdrücke mit Zahlen, Variablen und Rechenzeichen.", chips: ["Variable", "Ausdruck", "Struktur"] },
      { title: "Weiterer Weg", tone: "math-c", text: "Darauf bauen Klammern, Vorzeichen, Brüche und Gleichungen direkt auf.", chips: ["Klammern", "Brüche", "Gleichungen"] },
    ],
  },
  "lineare-funktionen": {
    title: "Lineare Funktionen",
    eyebrow: "Infoseite",
    description: "Lineare Zusammenhänge, Geraden und erste Graphen leicht verständlich erklärt.",
    mascot: "/assets/mascots/math.png",
    sections: [
      { title: "Grundidee", tone: "math-a", text: "Lineare Funktionen beschreiben gleichmäßige Änderungen. Im Koordinatensystem entstehen Geraden.", chips: ["Gerade", "Änderung", "Koordinaten"] },
      { title: "Wichtige Teile", tone: "math-b", text: "Steigung und y-Achsenabschnitt sind die zwei zentralen Bausteine für lineare Funktionen.", chips: ["Steigung", "Achsenabschnitt", "Formel"] },
      { title: "Nächste Themen", tone: "math-c", text: "Danach folgen Graphen lesen, Steigung berechnen und lineare Gleichungssysteme.", chips: ["Graphen", "Steigung", "LGS"] },
    ],
  },
  "flaechen-und-volumen": {
    title: "Flächen & Volumen",
    eyebrow: "Infoseite",
    description: "Flächeninhalte und Volumen als kompakter Einstieg in geometrische Berechnungen.",
    mascot: "/assets/mascots/math.png",
    sections: [
      { title: "Flächen", tone: "math-a", text: "Flächeninhalte beschreiben, wie groß eine zweidimensionale Form ist.", chips: ["Quadrat", "Rechteck", "Dreieck"] },
      { title: "Volumen", tone: "math-b", text: "Volumen beschreibt den Rauminhalt eines Körpers und gehört zur räumlichen Geometrie.", chips: ["Quader", "Würfel", "Zylinder"] },
      { title: "Weiterführend", tone: "math-c", text: "Später können Formelsammlungen, Aufgaben und gemischte Anwendungen ergänzt werden.", chips: ["Formeln", "Aufgaben", "Anwendung"] },
    ],
  },
} as const;
