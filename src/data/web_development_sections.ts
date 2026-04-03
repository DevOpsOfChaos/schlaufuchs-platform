export const webdevelopmentSections = {
  html: {
    title: "Web Development HTML",
    eyebrow: "Kategorie",
    description: "Grundstruktur, Elemente und Semantik als klar getrennte Themen.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      {
        title: "Grundstruktur",
        text: "html, head und body als Basis jeder Seite.",
        href: "/fachbereiche/web-development/html/grundstruktur",
        tone: "web-a",
      },
      {
        title: "Elemente",
        text: "Texte, Listen und Links als HTML-Bausteine.",
        href: "/fachbereiche/web-development/html/elemente",
        tone: "web-b",
      },
      {
        title: "Semantik",
        text: "Bedeutungsvolle Struktur für Ordnung und Lesbarkeit.",
        href: "/fachbereiche/web-development/html/semantik",
        tone: "web-c",
      },
    ],
  },
  css: {
    title: "Web Development CSS",
    eyebrow: "Kategorie",
    description: "Flexbox, Grid und responsive Regeln als eigenständige Themen.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      {
        title: "Flexbox",
        text: "Reihen, Spalten und Abstände flexibel steuern.",
        href: "/fachbereiche/web-development/css/flexbox",
        tone: "web-a",
      },
      {
        title: "Grid",
        text: "Rasterbasierte Layouts klar und wartbar aufbauen.",
        href: "/fachbereiche/web-development/css/grid",
        tone: "web-b",
      },
      {
        title: "Responsive",
        text: "Layouts für verschiedene Bildschirmgrößen anpassen.",
        href: "/fachbereiche/web-development/css/responsive",
        tone: "web-c",
      },
    ],
  },
  praxis: {
    title: "Web Development Praxis",
    eyebrow: "Kategorie",
    description: "Erste Projekte, Navigation und Kartenlayouts als klare Themen.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      {
        title: "Erste Webseite",
        text: "HTML und CSS in einem ersten kleinen Projekt verbinden.",
        href: "/fachbereiche/web-development/praxis/erste-webseite",
        tone: "web-a",
      },
      {
        title: "Navigation",
        text: "Menüs und Seitennavigation praktisch umsetzen.",
        href: "/fachbereiche/web-development/praxis/navigation",
        tone: "web-b",
      },
      {
        title: "Kartenlayout",
        text: "Blöcke und Karten als wiederkehrendes UI-Muster.",
        href: "/fachbereiche/web-development/praxis/kartenlayout",
        tone: "web-c",
      },
    ],
  },
} as const;
