export const subjectLanding = {
  mathematik: {
    title: "Mathematik",
    eyebrow: "Fachbereich",
    description:
      "Grundlagen, Rechenwege, Funktionen und Übungen in einer ruhigen und klaren Lernumgebung.",
    mascot: "/assets/mascots/math.png",
    icon: "/assets/icons/math.png",
    accent: "math",
    intro:
      "Von Grundlagen bis zu typischen Schulthemen. Klare Erklärungen, Beispiele und später passende Übungsseiten.",
    links: [
      { label: "Grundlagen", href: "/fachbereiche/mathematik" },
      { label: "Aufgaben", href: "/fachbereiche/mathematik" },
      { label: "Suchen", href: "/suchen" },
    ],
    highlights: [
      "Funktionen und Gleichungen",
      "Geometrie und Trigonometrie",
      "Ruhige Infoseiten mit späterem Übungsmodus",
    ],
  },
  "web-development": {
    title: "Web Development",
    eyebrow: "Fachbereich",
    description:
      "HTML, CSS und moderner Frontend-Einstieg mit klarer Struktur und direktem Praxisbezug.",
    mascot: "/assets/mascots/html_css.png",
    icon: "/assets/icons/html_css.png",
    accent: "web",
    intro:
      "Sauber erklärte Web-Grundlagen, klare Beispiele und kompakte Einstiege in Struktur, Gestaltung und Praxis.",
    links: [
      { label: "HTML", href: "/fachbereiche/web-development" },
      { label: "CSS", href: "/fachbereiche/web-development" },
      { label: "Suchen", href: "/suchen" },
    ],
    highlights: [
      "HTML und semantische Struktur",
      "CSS, Layout und responsive Design",
      "Später mit Übungen und Referenzseiten",
    ],
  },
  informatik: {
    title: "Informatik",
    eyebrow: "Fachbereich",
    description:
      "Programmierung, Logik und technische Grundlagen verständlich und systematisch aufgebaut.",
    mascot: "/assets/mascots/hacker.png",
    icon: "/assets/icons/informatik.png",
    accent: "cs",
    intro:
      "Programmieren mit klarer Struktur. Grundlagen, Denkweise und spätere Lernpfade für C, Python und Informatik-Themen.",
    links: [
      { label: "Programmierung", href: "/fachbereiche/informatik" },
      { label: "Grundlagen", href: "/fachbereiche/informatik" },
      { label: "Suchen", href: "/suchen" },
    ],
    highlights: [
      "C, Python und Programmierlogik",
      "Informatik-Grundlagen",
      "Infos zuerst, Übungen später ergänzbar",
    ],
  },
  linux: {
    title: "Linux",
    eyebrow: "Fachbereich",
    description:
      "Shell, Befehle, Systemverständnis und praktische Linux-Themen in moderner Form.",
    mascot: "/assets/mascots/linux.png",
    icon: "/assets/icons/linux.png",
    accent: "linux",
    intro:
      "Von ersten Kommandos bis zu systemnahen Grundlagen. Kompakt, lesbar und für Desktop wie mobil gedacht.",
    links: [
      { label: "Shell", href: "/fachbereiche/linux" },
      { label: "System", href: "/fachbereiche/linux" },
      { label: "Suchen", href: "/suchen" },
    ],
    highlights: [
      "Shell und wichtige Befehle",
      "Dateien, Nutzer und Prozesse",
      "Später mit Aufgaben und Lernhilfen",
    ],
  },
  elektrotechnik: {
    title: "Elektrotechnik",
    eyebrow: "Fachbereich",
    description:
      "Elektronik, Daten und Signale, technische Grundlagen und kompakte Lernwege.",
    mascot: "/assets/mascots/electro.png",
    icon: "/assets/icons/elektrotechnik.png",
    accent: "ee",
    intro:
      "Elektronische Grundlagen, Schaltungen und Daten & Signale in einem einheitlichen, ruhigen Fachbereich.",
    links: [
      { label: "Elektronik", href: "/fachbereiche/elektrotechnik" },
      { label: "Daten & Signale", href: "/fachbereiche/elektrotechnik" },
      { label: "Suchen", href: "/suchen" },
    ],
    highlights: [
      "Elektronik und Schaltungen",
      "Daten & Signale als Teilbereich",
      "Geeignet für Info- und Übungsseiten",
    ],
  },
} as const;
