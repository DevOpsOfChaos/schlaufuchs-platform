export const linuxSections = {
  shell: {
    title: "Linux Shell",
    eyebrow: "Kategorie",
    description: "Navigation, Dateien und Befehle als klar getrennte Themen.",
    mascot: "/assets/mascots/linux.png",
    groups: [
      {
        title: "Navigation",
        text: "Pfade, Ordner und Orientierung im Terminal.",
        href: "/fachbereiche/linux/shell/navigation",
        tone: "linux-a",
      },
      {
        title: "Dateien",
        text: "Dateien und Ordner lesen, anlegen und verstehen.",
        href: "/fachbereiche/linux/shell/dateien",
        tone: "linux-b",
      },
      {
        title: "Befehle",
        text: "Hilfen, Grundbefehle und sicheres Arbeiten.",
        href: "/fachbereiche/linux/shell/befehle",
        tone: "linux-c",
      },
    ],
  },
  system: {
    title: "Linux System",
    eyebrow: "Kategorie",
    description: "Benutzer, Rechte und Prozesse als eigenständige Themen.",
    mascot: "/assets/mascots/linux.png",
    groups: [
      {
        title: "Benutzer",
        text: "Benutzerkonten, Gruppen und Zuständigkeiten.",
        href: "/fachbereiche/linux/system/benutzer",
        tone: "linux-a",
      },
      {
        title: "Rechte",
        text: "Zugriffe und Sicherheitsgrundlagen.",
        href: "/fachbereiche/linux/system/rechte",
        tone: "linux-b",
      },
      {
        title: "Prozesse",
        text: "Programme in Ausführung und ihre Werkzeuge.",
        href: "/fachbereiche/linux/system/prozesse",
        tone: "linux-c",
      },
    ],
  },
  praxis: {
    title: "Linux Praxis",
    eyebrow: "Kategorie",
    description: "Terminal-Alltag, Editoren und Konfiguration in klaren Themenkarten.",
    mascot: "/assets/mascots/linux.png",
    groups: [
      {
        title: "Terminal",
        text: "Ruhig und sicher im Terminal arbeiten.",
        href: "/fachbereiche/linux/praxis/terminal",
        tone: "linux-a",
      },
      {
        title: "nano",
        text: "Der einfache Editor für schnelle Änderungen.",
        href: "/fachbereiche/linux/praxis/nano",
        tone: "linux-b",
      },
      {
        title: "Konfiguration",
        text: "Profile, Aliase und spätere Einstellungen.",
        href: "/fachbereiche/linux/praxis/konfiguration",
        tone: "linux-c",
      },
    ],
  },
} as const;
