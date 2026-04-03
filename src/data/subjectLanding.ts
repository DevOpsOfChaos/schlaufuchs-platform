export const subjectLanding = {
  linux: {
    title: "Linux",
    eyebrow: "Fachbereich",
    description: "Shell, Befehle, Systemverständnis und praktische Linux-Themen in moderner Form.",
    mascot: "/assets/mascots/linux.png",
    icon: "/assets/icons/linux.png",
    accent: "linux",
    intro: "Kompakte Einstiege in Shell und System. Die Oberthemen führen später auf Unterbereiche und Infoseiten.",
    topics: [
      {
        title: "Shell",
        text: "Navigation, Dateien und die wichtigsten Befehle für den Einstieg.",
        href: "/fachbereiche/linux/shell",
        tone: "linux-a",
        items: ["Navigation", "Dateien", "Befehle"],
      },
      {
        title: "System",
        text: "Nutzer, Rechte, Prozesse und systemnahe Grundlagen.",
        href: "/fachbereiche/linux/system",
        tone: "linux-b",
        items: ["Nutzer", "Rechte", "Prozesse"],
      },
      {
        title: "Praxis",
        text: "Alltagswissen für Terminal, Konfiguration und sauberes Arbeiten.",
        href: "/fachbereiche/linux/praxis",
        tone: "linux-c",
        items: ["Terminal", "Editoren", "Konfiguration"],
      },
    ],
  },
} as const;
