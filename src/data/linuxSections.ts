export const linuxSections = {
  shell: {
    title: "Linux Shell",
    eyebrow: "Kategorie",
    description: "Navigation, Dateien und Befehle als eigene Themenblöcke innerhalb der Shell.",
    mascot: "/assets/mascots/linux.png",
    groups: [
      { title: "Navigation", text: "Wege durch Ordner, Pfade und Orientierung im Terminal.", href: "/fachbereiche/linux/shell/navigation", tone: "linux-a" },
      { title: "Dateien", text: "Dateien und Ordner lesen, verstehen und sicher nutzen.", href: "/fachbereiche/linux/shell/dateien-und-ordner", tone: "linux-b" },
      { title: "Befehle", text: "Hilfe im Terminal und erste wichtige Kommandos.", href: "/fachbereiche/linux/shell/hilfe-im-terminal", tone: "linux-c" },
    ],
  },
  system: {
    title: "Linux System",
    eyebrow: "Kategorie",
    description: "Benutzer, Rechte und Prozesse als eigenständige Themenblöcke.",
    mascot: "/assets/mascots/linux.png",
    groups: [
      { title: "Benutzer", text: "Benutzerkonten, Gruppen und Zuständigkeiten im System.", href: "/fachbereiche/linux/system/benutzer-und-gruppen", tone: "linux-a" },
      { title: "Rechte", text: "Lesen, Schreiben und Ausführen als Grundlage für Zugriff.", href: "/fachbereiche/linux/system/dateirechte", tone: "linux-b" },
      { title: "Prozesse", text: "Ausführung, laufende Programme und Systemverhalten.", href: "/fachbereiche/linux/system/prozesse", tone: "linux-c" },
    ],
  },
  praxis: {
    title: "Linux Praxis",
    eyebrow: "Kategorie",
    description: "Terminal-Alltag, Editoren und praktische Arbeitsweise in eigenen Themenblöcken.",
    mascot: "/assets/mascots/linux.png",
    groups: [
      { title: "Terminal", text: "Ruhig und sicher im Terminal arbeiten.", href: "/fachbereiche/linux/praxis/terminal-nutzen", tone: "linux-a" },
      { title: "nano", text: "Der einfache Editor für schnelle Änderungen und Texte.", href: "/fachbereiche/linux/praxis/nano", tone: "linux-b" },
      { title: "Konfiguration", text: "Einstellungen, Profile und spätere Systemanpassungen.", href: "/fachbereiche/linux/praxis/shell-konfiguration", tone: "linux-c" },
    ],
  },
} as const;
