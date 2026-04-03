export const webSections = {
  html: {
    title: "Web Development HTML",
    eyebrow: "Kategorie",
    description: "Grundstruktur, Elemente und Semantik als eigene Themenblöcke.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      { title: "Grundstruktur", text: "html, head und body als saubere Basis jeder Seite.", href: "/fachbereiche/web-development/html/grundstruktur", tone: "web-a" },
      { title: "Elemente", text: "Texte, Listen und Links als typische HTML-Bausteine.", href: "/fachbereiche/web-development/html/textelemente", tone: "web-b" },
      { title: "Semantik", text: "Bedeutungsvolle Struktur für bessere Lesbarkeit und Ordnung.", href: "/fachbereiche/web-development/html/semantische-tags", tone: "web-c" },
    ],
  },
  css: {
    title: "Web Development CSS",
    eyebrow: "Kategorie",
    description: "Layout, Gestaltung und responsive Verhalten als einzelne Themenblöcke.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      { title: "Flexbox", text: "Reihen, Spalten und Abstände flexibel steuern.", href: "/fachbereiche/web-development/css/flexbox", tone: "web-a" },
      { title: "Grid", text: "Rasterbasierte Layouts sauber aufbauen.", href: "/fachbereiche/web-development/css/grid", tone: "web-b" },
      { title: "Responsive", text: "Regeln für verschiedene Bildschirmgrößen und Geräte.", href: "/fachbereiche/web-development/css/media-queries", tone: "web-c" },
    ],
  },
  praxis: {
    title: "Web Development Praxis",
    eyebrow: "Kategorie",
    description: "Erste Projekte, Komponenten und sauberes Arbeiten als Themenblöcke.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      { title: "Erste Webseite", text: "HTML und CSS in einem kleinen ersten Projekt verbinden.", href: "/fachbereiche/web-development/praxis/erste-webseite", tone: "web-a" },
      { title: "Navigation", text: "Menüs und Seitennavigation praktisch umsetzen.", href: "/fachbereiche/web-development/praxis/navigation-bauen", tone: "web-b" },
      { title: "Kartenlayout", text: "Blöcke und Karten als wiederkehrendes UI-Muster.", href: "/fachbereiche/web-development/praxis/kartenlayout", tone: "web-c" },
    ],
  },
} as const;
