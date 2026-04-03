export const webLeafPages = {
  grundstruktur: {
    title: "Grundstruktur",
    eyebrow: "Infoseite",
    description: "Die erste HTML-Seite mit html, head und body als saubere Basis.",
    mascot: "/assets/mascots/html_css.png",
    sections: [
      { title: "Dokument", tone: "web-a", text: "Eine HTML-Seite hat einen klaren Aufbau. Genau dieser Aufbau macht Inhalte, Metadaten und sichtbaren Inhalt unterscheidbar.", chips: ["html", "head", "body"] },
      { title: "Sichtbarer Bereich", tone: "web-b", text: "Alles, was im body liegt, ist der sichtbare Teil der Seite. Dort stehen später Inhalte, Navigation und Blöcke.", chips: ["Inhalt", "Navigation", "Blöcke"] },
      { title: "Weiterer Weg", tone: "web-c", text: "Darauf bauen Text, Listen, Links, Bilder und semantische Struktur direkt auf.", chips: ["Text", "Listen", "Semantik"] },
    ],
  },
  flexbox: {
    title: "Flexbox",
    eyebrow: "Infoseite",
    description: "Ein flexibles Layout-System für Reihen, Spalten und Abstände.",
    mascot: "/assets/mascots/html_css.png",
    sections: [
      { title: "Grundidee", tone: "web-a", text: "Flexbox ordnet Elemente entlang einer Achse an. Das macht viele Layout-Aufgaben deutlich einfacher.", chips: ["Achse", "Reihe", "Spalte"] },
      { title: "Wichtige Regeln", tone: "web-b", text: "justify-content, align-items und gap gehören zu den wichtigsten Werkzeugen im flexiblen Layout.", chips: ["justify-content", "align-items", "gap"] },
      { title: "Praxis", tone: "web-c", text: "Navigationen, Button-Reihen und Kartenlayouts sind typische Einsatzbereiche für Flexbox.", chips: ["Nav", "Buttons", "Karten"] },
    ],
  },
  "erste-webseite": {
    title: "Erste Webseite",
    eyebrow: "Infoseite",
    description: "HTML und CSS in einem kleinen ersten Projekt zusammenführen.",
    mascot: "/assets/mascots/html_css.png",
    sections: [
      { title: "Aufbau", tone: "web-a", text: "Eine kleine Seite beginnt mit Struktur, klaren Bereichen und wenigen gut benannten Dateien.", chips: ["index.html", "style.css", "Ordner"] },
      { title: "Gestaltung", tone: "web-b", text: "Farben, Abstände und Typografie reichen oft aus, um einen ersten sauberen Eindruck zu erzeugen.", chips: ["Farben", "Abstände", "Typo"] },
      { title: "Nächste Schritte", tone: "web-c", text: "Danach können Navigation, Kartenblöcke und responsive Regeln ergänzt werden.", chips: ["Navigation", "Karten", "Responsive"] },
    ],
  },
} as const;
