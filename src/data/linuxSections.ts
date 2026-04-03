export const linuxSections = {
  shell: {
    title: "Linux Shell",
    eyebrow: "Unterbereich",
    description: "Von Navigation bis zu ersten Befehlen. Klar gegliedert und leicht erweiterbar.",
    mascot: "/assets/mascots/linux.png",
    accent: "linux",
    groups: [
      {
        title: "Einstieg",
        tone: "linux-a",
        items: [
          { label: "Navigation", href: "/fachbereiche/linux/shell/navigation" },
          { label: "Dateien & Ordner", href: "/fachbereiche/linux/shell/dateien-und-ordner" },
          { label: "Hilfe im Terminal", href: "/fachbereiche/linux/shell/hilfe-im-terminal" },
        ],
      },
      {
        title: "Wichtige Befehle",
        tone: "linux-b",
        items: [
          { label: "ls, cd, pwd", href: "/fachbereiche/linux/shell/grundbefehle" },
          { label: "cp, mv, rm", href: "/fachbereiche/linux/shell/dateibefehle" },
          { label: "cat, less, grep", href: "/fachbereiche/linux/shell/textwerkzeuge" },
        ],
      },
      {
        title: "Direkte Infoseiten",
        tone: "linux-c",
        items: [
          { label: "Pfadangaben verstehen", href: "/fachbereiche/linux/shell/pfade" },
          { label: "Relative und absolute Pfade", href: "/fachbereiche/linux/shell/pfade" },
        ],
      },
    ],
  },
  system: {
    title: "Linux System",
    eyebrow: "Unterbereich",
    description: "Nutzer, Rechte, Prozesse und Systemverständnis als eigener strukturierter Bereich.",
    mascot: "/assets/mascots/linux.png",
    accent: "linux",
    groups: [
      {
        title: "Benutzer",
        tone: "linux-a",
        items: [
          { label: "Benutzer und Gruppen", href: "/fachbereiche/linux/system/benutzer-und-gruppen" },
          { label: "Home-Verzeichnisse", href: "/fachbereiche/linux/system/home-verzeichnisse" },
        ],
      },
      {
        title: "Rechte",
        tone: "linux-b",
        items: [
          { label: "Dateirechte", href: "/fachbereiche/linux/system/dateirechte" },
          { label: "chmod und chown", href: "/fachbereiche/linux/system/chmod-und-chown" },
        ],
      },
      {
        title: "Prozesse",
        tone: "linux-c",
        items: [
          { label: "Prozesse verstehen", href: "/fachbereiche/linux/system/prozesse" },
          { label: "ps, top und kill", href: "/fachbereiche/linux/system/prozesswerkzeuge" },
        ],
      },
    ],
  },
  praxis: {
    title: "Linux Praxis",
    eyebrow: "Unterbereich",
    description: "Terminal-Alltag, Editoren und Konfiguration in kompakten, wartbaren Blöcken.",
    mascot: "/assets/mascots/linux.png",
    accent: "linux",
    groups: [
      {
        title: "Terminal",
        tone: "linux-a",
        items: [
          { label: "Terminal nutzen", href: "/fachbereiche/linux/praxis/terminal-nutzen" },
          { label: "Befehlsketten", href: "/fachbereiche/linux/praxis/befehlsketten" },
        ],
      },
      {
        title: "Editoren",
        tone: "linux-b",
        items: [
          { label: "nano", href: "/fachbereiche/linux/praxis/nano" },
          { label: "vim Grundlagen", href: "/fachbereiche/linux/praxis/vim-grundlagen" },
        ],
      },
      {
        title: "Konfiguration",
        tone: "linux-c",
        items: [
          { label: "Shell-Konfiguration", href: "/fachbereiche/linux/praxis/shell-konfiguration" },
          { label: "Alias und Profile", href: "/fachbereiche/linux/praxis/alias-und-profile" },
        ],
      },
    ],
  },
} as const;
