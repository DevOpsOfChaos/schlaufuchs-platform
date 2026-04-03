export const webSections = {
  html: {
    title: "Web Development HTML",
    eyebrow: "Unterbereich",
    description: "Struktur, Elemente und semantisches Markup als klarer Einstieg in HTML.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      {
        title: "Grundstruktur",
        tone: "web-a",
        items: [
          { label: "Grundstruktur", href: "/fachbereiche/web-development/html/grundstruktur" },
          { label: "Head und Body", href: "/fachbereiche/web-development/html/head-und-body" },
        ],
      },
      {
        title: "Elemente",
        tone: "web-b",
        items: [
          { label: "Überschriften und Absätze", href: "/fachbereiche/web-development/html/textelemente" },
          { label: "Listen und Links", href: "/fachbereiche/web-development/html/listen-und-links" },
        ],
      },
      {
        title: "Semantik",
        tone: "web-c",
        items: [
          { label: "Semantische Tags", href: "/fachbereiche/web-development/html/semantische-tags" },
          { label: "Saubere Struktur", href: "/fachbereiche/web-development/html/saubere-struktur" },
        ],
      },
    ],
  },
  css: {
    title: "Web Development CSS",
    eyebrow: "Unterbereich",
    description: "Layout, Gestaltung und responsive Regeln im gleichen wartbaren System.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      {
        title: "Layout",
        tone: "web-a",
        items: [
          { label: "Flexbox", href: "/fachbereiche/web-development/css/flexbox" },
          { label: "Grid", href: "/fachbereiche/web-development/css/grid" },
        ],
      },
      {
        title: "Gestaltung",
        tone: "web-b",
        items: [
          { label: "Farben und Abstände", href: "/fachbereiche/web-development/css/farben-und-abstaende" },
          { label: "Typografie", href: "/fachbereiche/web-development/css/typografie" },
        ],
      },
      {
        title: "Responsiv",
        tone: "web-c",
        items: [
          { label: "Media Queries", href: "/fachbereiche/web-development/css/media-queries" },
          { label: "Mobile First", href: "/fachbereiche/web-development/css/mobile-first" },
        ],
      },
    ],
  },
  praxis: {
    title: "Web Development Praxis",
    eyebrow: "Unterbereich",
    description: "Direkte Anwendung, erste Seiten und sauberes Zusammenspiel von HTML und CSS.",
    mascot: "/assets/mascots/html_css.png",
    groups: [
      {
        title: "Einstieg",
        tone: "web-a",
        items: [
          { label: "Erste Webseite", href: "/fachbereiche/web-development/praxis/erste-webseite" },
          { label: "Dateistruktur", href: "/fachbereiche/web-development/praxis/dateistruktur" },
        ],
      },
      {
        title: "Komponenten",
        tone: "web-b",
        items: [
          { label: "Navigation bauen", href: "/fachbereiche/web-development/praxis/navigation-bauen" },
          { label: "Kartenlayout", href: "/fachbereiche/web-development/praxis/kartenlayout" },
        ],
      },
      {
        title: "Sauber arbeiten",
        tone: "web-c",
        items: [
          { label: "Klare Klassen", href: "/fachbereiche/web-development/praxis/klare-klassen" },
          { label: "Wartbare Dateien", href: "/fachbereiche/web-development/praxis/wartbare-dateien" },
        ],
      },
    ],
  },
} as const;
