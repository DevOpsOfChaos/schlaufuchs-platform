export const hierarchyMeta = {
  mathematik: {
    label: "Mathematik",
    categories: {
      grundlagen: {
        label: "Mathematik Grundlagen",
        topics: {
          zahlen: {
            label: "Zahlen",
            leaves: [
              {
                slug: "natuerliche-zahlen",
                label: "Natürliche Zahlen",
              },
              {
                slug: "ganze-zahlen",
                label: "Ganze Zahlen",
              },
              {
                slug: "rechenarten",
                label: "Rechenarten",
              },
            ],
          },
          brueche: {
            label: "Brüche",
            leaves: [
              {
                slug: "brueche-verstehen",
                label: "Brüche verstehen",
              },
              {
                slug: "brueche-vergleichen",
                label: "Brüche vergleichen",
              },
              {
                slug: "brueche-umformen",
                label: "Brüche umformen",
              },
            ],
          },
          terme: {
            label: "Terme",
            leaves: [
              {
                slug: "variablen",
                label: "Variablen",
              },
              {
                slug: "klammern",
                label: "Klammern",
              },
              {
                slug: "term-umformen",
                label: "Terme umformen",
              },
            ],
          },
        },
      },
      funktionen: {
        label: "Mathematik Funktionen",
        topics: {
          linear: {
            label: "Linear",
            leaves: [
              {
                slug: "lineare-funktionen",
                label: "Lineare Funktionen",
              },
              {
                slug: "steigung",
                label: "Steigung",
              },
              {
                slug: "achsenschnitt",
                label: "Achsenabschnitt",
              },
            ],
          },
          quadratisch: {
            label: "Quadratisch",
            leaves: [
              {
                slug: "quadratische-funktionen",
                label: "Quadratische Funktionen",
              },
              {
                slug: "scheitelpunkt",
                label: "Scheitelpunkt",
              },
              {
                slug: "normalform",
                label: "Normalform",
              },
            ],
          },
          graphen: {
            label: "Graphen",
            leaves: [
              {
                slug: "graphen-lesen",
                label: "Graphen lesen",
              },
              {
                slug: "nullstellen",
                label: "Nullstellen",
              },
              {
                slug: "wertetabellen",
                label: "Wertetabellen",
              },
            ],
          },
        },
      },
      geometrie: {
        label: "Mathematik Geometrie",
        topics: {
          flaechen: {
            label: "Flächen",
            leaves: [
              {
                slug: "rechteck-und-quadrat",
                label: "Rechteck und Quadrat",
              },
              {
                slug: "dreieck",
                label: "Dreieck",
              },
              {
                slug: "kreis",
                label: "Kreis",
              },
            ],
          },
          volumen: {
            label: "Volumen",
            leaves: [
              {
                slug: "quader",
                label: "Quader",
              },
              {
                slug: "wuerfel",
                label: "Würfel",
              },
              {
                slug: "zylinder",
                label: "Zylinder",
              },
            ],
          },
          trigonometrie: {
            label: "Trigonometrie",
            leaves: [
              {
                slug: "sinus-kosinus-tangens",
                label: "Sinus, Kosinus, Tangens",
              },
              {
                slug: "rechtwinklige-dreiecke",
                label: "Rechtwinklige Dreiecke",
              },
              {
                slug: "winkelberechnung",
                label: "Winkelberechnung",
              },
            ],
          },
        },
      },
    },
  },
  linux: {
    label: "Linux",
    categories: {
      shell: {
        label: "Linux Shell",
        topics: {
          navigation: {
            label: "Navigation",
            leaves: [
              {
                slug: "pwd",
                label: "pwd",
              },
              {
                slug: "cd",
                label: "cd",
              },
              {
                slug: "pfade",
                label: "Pfade",
              },
            ],
          },
          dateien: {
            label: "Dateien",
            leaves: [
              {
                slug: "dateien-und-ordner",
                label: "Dateien und Ordner",
              },
              {
                slug: "ls",
                label: "ls",
              },
              {
                slug: "mkdir",
                label: "mkdir",
              },
            ],
          },
          befehle: {
            label: "Befehle",
            leaves: [
              {
                slug: "hilfe-im-terminal",
                label: "Hilfe im Terminal",
              },
              {
                slug: "grundbefehle",
                label: "Grundbefehle",
              },
              {
                slug: "dateibefehle",
                label: "Dateibefehle",
              },
            ],
          },
        },
      },
      system: {
        label: "Linux System",
        topics: {
          benutzer: {
            label: "Benutzer",
            leaves: [
              {
                slug: "benutzer-und-gruppen",
                label: "Benutzer und Gruppen",
              },
              {
                slug: "home-verzeichnisse",
                label: "Home-Verzeichnisse",
              },
              {
                slug: "id-groups",
                label: "id und groups",
              },
            ],
          },
          rechte: {
            label: "Rechte",
            leaves: [
              {
                slug: "dateirechte",
                label: "Dateirechte",
              },
              {
                slug: "chmod",
                label: "chmod",
              },
              {
                slug: "chown",
                label: "chown",
              },
            ],
          },
          prozesse: {
            label: "Prozesse",
            leaves: [
              {
                slug: "prozesse",
                label: "Prozesse",
              },
              {
                slug: "ps-top",
                label: "ps und top",
              },
              {
                slug: "kill",
                label: "kill",
              },
            ],
          },
        },
      },
      praxis: {
        label: "Linux Praxis",
        topics: {
          terminal: {
            label: "Terminal",
            leaves: [
              {
                slug: "terminal-nutzen",
                label: "Terminal nutzen",
              },
              {
                slug: "befehlsketten",
                label: "Befehlsketten",
              },
              {
                slug: "history",
                label: "History",
              },
            ],
          },
          nano: {
            label: "nano",
            leaves: [
              {
                slug: "nano",
                label: "nano",
              },
              {
                slug: "speichern-und-beenden",
                label: "Speichern und Beenden",
              },
              {
                slug: "konfig-dateien",
                label: "Konfig-Dateien",
              },
            ],
          },
          konfiguration: {
            label: "Konfiguration",
            leaves: [
              {
                slug: "shell-konfiguration",
                label: "Shell-Konfiguration",
              },
              {
                slug: "alias",
                label: "Alias",
              },
              {
                slug: "profile",
                label: "Profile",
              },
            ],
          },
        },
      },
    },
  },
  "web-development": {
    label: "Web Development",
    categories: {
      html: {
        label: "Web Development HTML",
        topics: {
          grundstruktur: {
            label: "Grundstruktur",
            leaves: [
              {
                slug: "html-dokument",
                label: "HTML-Dokument",
              },
              {
                slug: "head-und-body",
                label: "Head und Body",
              },
              {
                slug: "erste-seite",
                label: "Erste Seite",
              },
            ],
          },
          elemente: {
            label: "Elemente",
            leaves: [
              {
                slug: "textelemente",
                label: "Textelemente",
              },
              {
                slug: "listen",
                label: "Listen",
              },
              {
                slug: "links",
                label: "Links",
              },
            ],
          },
          semantik: {
            label: "Semantik",
            leaves: [
              {
                slug: "semantische-tags",
                label: "Semantische Tags",
              },
              {
                slug: "saubere-struktur",
                label: "Saubere Struktur",
              },
              {
                slug: "layout-bereiche",
                label: "Layout-Bereiche",
              },
            ],
          },
        },
      },
      css: {
        label: "Web Development CSS",
        topics: {
          flexbox: {
            label: "Flexbox",
            leaves: [
              {
                slug: "flexbox",
                label: "Flexbox",
              },
              {
                slug: "justify-align",
                label: "justify und align",
              },
              {
                slug: "gap",
                label: "gap",
              },
            ],
          },
          grid: {
            label: "Grid",
            leaves: [
              {
                slug: "grid",
                label: "Grid",
              },
              {
                slug: "spalten-und-zeilen",
                label: "Spalten und Zeilen",
              },
              {
                slug: "bereiche",
                label: "Bereiche",
              },
            ],
          },
          responsive: {
            label: "Responsive",
            leaves: [
              {
                slug: "media-queries",
                label: "Media Queries",
              },
              {
                slug: "mobile-first",
                label: "Mobile First",
              },
              {
                slug: "breakpoints",
                label: "Breakpoints",
              },
            ],
          },
        },
      },
      praxis: {
        label: "Web Development Praxis",
        topics: {
          "erste-webseite": {
            label: "Erste Webseite",
            leaves: [
              {
                slug: "erste-webseite",
                label: "Erste Webseite",
              },
              {
                slug: "dateistruktur",
                label: "Dateistruktur",
              },
              {
                slug: "startlayout",
                label: "Startlayout",
              },
            ],
          },
          navigation: {
            label: "Navigation",
            leaves: [
              {
                slug: "navigation-bauen",
                label: "Navigation bauen",
              },
              {
                slug: "responsive-nav",
                label: "Responsive Nav",
              },
              {
                slug: "aktive-links",
                label: "Aktive Links",
              },
            ],
          },
          kartenlayout: {
            label: "Kartenlayout",
            leaves: [
              {
                slug: "kartenlayout",
                label: "Kartenlayout",
              },
              {
                slug: "card-grid",
                label: "Card Grid",
              },
              {
                slug: "card-content",
                label: "Card Content",
              },
            ],
          },
        },
      },
    },
  },
  informatik: {
    label: "Informatik",
    categories: {
      programmieren: {
        label: "Informatik Programmieren",
        topics: {
          python: {
            label: "Python",
            leaves: [
              {
                slug: "python-grundlagen",
                label: "Python Grundlagen",
              },
              {
                slug: "variablen",
                label: "Variablen",
              },
              {
                slug: "bedingungen",
                label: "Bedingungen",
              },
            ],
          },
          c: {
            label: "C",
            leaves: [
              {
                slug: "c-einstieg",
                label: "C Einstieg",
              },
              {
                slug: "datentypen-in-c",
                label: "Datentypen in C",
              },
              {
                slug: "eingabe-ausgabe",
                label: "Eingabe und Ausgabe",
              },
            ],
          },
          funktionen: {
            label: "Funktionen",
            leaves: [
              {
                slug: "funktionen",
                label: "Funktionen",
              },
              {
                slug: "parameter",
                label: "Parameter",
              },
              {
                slug: "rueckgabewerte",
                label: "Rückgabewerte",
              },
            ],
          },
        },
      },
      grundlagen: {
        label: "Informatik Grundlagen",
        topics: {
          algorithmen: {
            label: "Algorithmen",
            leaves: [
              {
                slug: "algorithmen",
                label: "Algorithmen",
              },
              {
                slug: "ablaeufe",
                label: "Abläufe",
              },
              {
                slug: "vergleich",
                label: "Vergleich",
              },
            ],
          },
          datentypen: {
            label: "Datentypen",
            leaves: [
              {
                slug: "datentypen",
                label: "Datentypen",
              },
              {
                slug: "zahlen-und-text",
                label: "Zahlen und Text",
              },
              {
                slug: "bool",
                label: "Bool",
              },
            ],
          },
          pseudocode: {
            label: "Pseudocode",
            leaves: [
              {
                slug: "pseudocode",
                label: "Pseudocode",
              },
              {
                slug: "ablaufplaene",
                label: "Ablaufpläne",
              },
              {
                slug: "probleme-zerlegen",
                label: "Probleme zerlegen",
              },
            ],
          },
        },
      },
      systemnah: {
        label: "Informatik Systemnah",
        topics: {
          prozesse: {
            label: "Prozesse",
            leaves: [
              {
                slug: "prozesse",
                label: "Prozesse",
              },
              {
                slug: "parallelitaet",
                label: "Parallelität",
              },
              {
                slug: "prozessmodell",
                label: "Prozessmodell",
              },
            ],
          },
          speicher: {
            label: "Speicher",
            leaves: [
              {
                slug: "speichergrundlagen",
                label: "Speichergrundlagen",
              },
              {
                slug: "variablen-im-speicher",
                label: "Variablen im Speicher",
              },
              {
                slug: "bits-und-bytes",
                label: "Bits und Bytes",
              },
            ],
          },
          betriebssystem: {
            label: "Betriebssystem",
            leaves: [
              {
                slug: "betriebssystem",
                label: "Betriebssystem",
              },
              {
                slug: "hardware-und-software",
                label: "Hardware und Software",
              },
              {
                slug: "systemdienste",
                label: "Systemdienste",
              },
            ],
          },
        },
      },
    },
  },
} as const;
