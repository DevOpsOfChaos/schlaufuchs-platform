export const articleEnhancements = {
  "linux/shell/dateien/ls": {
    takeaway: "ls zeigt dir die Inhalte eines Ordners an und arbeitet ohne Argumente im aktuellen Verzeichnis.",
    interactive: {
      type: "fake-terminal",
      title: "ls direkt ausprobieren",
      description: "Diese Demo reagiert auf typische ls-Befehle mit vorbereiteten Ausgaben.",
      placeholder: "Befehl eingeben, z. B. ls -a",
      commands: {
        ls: "dokumente  bilder  notizen.txt",
        "ls -a": ".  ..  .bashrc  dokumente  bilder  notizen.txt",
        "ls -l": "drwxr-xr-x dokumente\ndrwxr-xr-x bilder\n-rw-r--r-- notizen.txt"
      },
    },
    quiz: {
      title: "Kurztest zu ls",
      description: "Drei kleine Fragen zum Anzeigen von Ordnerinhalten.",
      questions: [
        {
          prompt: "Was macht ls ohne zusätzliche Argumente?",
          options: ["Es listet standardmäßig den Inhalt des aktuellen Verzeichnisses auf","Es löscht leere Dateien","Es wechselt in den zuletzt genutzten Ordner"],
          correctIndex: 0,
          correctExplanation: "Ohne Argumente arbeitet ls im aktuellen Verzeichnis.",
          wrongExplanation: "ls ist ein Anzeige-Befehl. Ohne Argumente listet er Inhalte im aktuellen Verzeichnis auf."
        },
        {
          prompt: "Wofür ist ls -a bekannt?",
          options: ["Es zeigt auch versteckte Namen an","Es startet alle Programme im Ordner","Es zeigt nur Audiodateien an"],
          correctIndex: 0,
          correctExplanation: "ls -a zeigt auch Namen an, die mit einem Punkt beginnen.",
          wrongExplanation: "Die Option -a blendet versteckte Namen nicht aus, sondern zeigt sie mit an."
        },
        {
          prompt: "Was ist eine typische Aufgabe von ls -l?",
          options: ["Lange Detailausgabe mit zusätzlichen Informationen","Automatisches Umbenennen von Dateien","Live-Überwachung eines Ordners"],
          correctIndex: 0,
          correctExplanation: "ls -l zeigt eine längere, detailreichere Ausgabe.",
          wrongExplanation: "ls -l dient der ausführlicheren Anzeige, nicht dem Umbenennen oder Überwachen."
        }
      ]
    }
  },
  "linux/shell/dateien/dateien-und-ordner": {
    takeaway: "Dateien enthalten Inhalte, Ordner strukturieren diese Inhalte im Dateisystem.",
    quiz: {
      title: "Kurztest zu Dateien und Ordnern",
      description: "Drei kleine Fragen zur Grundstruktur im Dateisystem.",
      questions: [
        {
          prompt: "Was ist ein Ordner im Dateisystem vor allem?",
          options: ["Eine Struktur zum Organisieren von Dateien und weiteren Ordnern","Immer nur eine Textdatei","Ein spezieller Befehl im Terminal"],
          correctIndex: 0,
          correctExplanation: "Ordner helfen dabei, Inhalte sinnvoll zu strukturieren.",
          wrongExplanation: "Ordner sind keine Befehle und auch nicht einfach nur Textdateien."
        },
        {
          prompt: "Was beschreibt ein Dateiname normalerweise?",
          options: ["Wie ein Inhalt gespeichert oder benannt ist","Die aktuelle CPU-Auslastung","Automatisch die Benutzerrechte"],
          correctIndex: 0,
          correctExplanation: "Der Dateiname hilft dir, Inhalte wiederzufinden und zu unterscheiden.",
          wrongExplanation: "Der Dateiname ist nicht automatisch eine Anzeige für CPU oder Rechte."
        },
        {
          prompt: "Warum ist eine klare Ordnerstruktur hilfreich?",
          options: ["Weil du Inhalte schneller findest und weniger Fehler machst","Weil dann alle Befehle kürzer werden","Weil Linux sonst nicht starten kann"],
          correctIndex: 0,
          correctExplanation: "Eine saubere Struktur verbessert Orientierung und Arbeitsweise.",
          wrongExplanation: "Eine gute Struktur hilft dir vor allem praktisch beim Finden und Arbeiten."
        }
      ]
    }
  },
  "linux/shell/befehle/hilfe-im-terminal": {
    takeaway: "Mit help, --help und man findest du Informationen zu Befehlen direkt im Terminal.",
    interactive: {
      type: "fake-terminal",
      title: "Hilfe direkt ausprobieren",
      description: "Diese Demo zeigt typische Hilfe-Ausgaben für vorbereitete Eingaben.",
      placeholder: "Befehl eingeben, z. B. help cd",
      commands: {
        help: "Verfügbare Befehle: help, clear, help cd, ls --help, man ls",
        "help cd": "cd: cd [-L|[-P [-e]] [-@]] [dir]",
        "ls --help": "Usage: ls [OPTION]... [FILE]...",
        "man ls": "LS(1) User Commands"
      },
    },
    quiz: {
      title: "Kurztest zu Hilfe im Terminal",
      description: "Drei kleine Fragen zu help, --help und man.",
      questions: [
        {
          prompt: "Wofür ist help in Bash besonders gedacht?",
          options: ["Für Hilfe zu eingebauten Shell-Befehlen","Nur für Netzwerkdiagnose","Zum Kompilieren von Programmen"],
          correctIndex: 0,
          correctExplanation: "help zeigt Hilfe zu Shell-Builtins wie cd oder help selbst.",
          wrongExplanation: "Das Bash-Builtin help ist vor allem für eingebaute Shell-Befehle gedacht."
        },
        {
          prompt: "Was liefert ls --help typischerweise?",
          options: ["Eine kurze Hilfe zur Benutzung des Befehls","Eine Liste aller Benutzer","Immer die komplette Manpage"],
          correctIndex: 0,
          correctExplanation: "--help liefert meistens eine kompakte Befehlsübersicht.",
          wrongExplanation: "--help ist in der Regel eine kurze Hilfe, nicht automatisch eine komplette Manpage."
        },
        {
          prompt: "Was macht man ls?",
          options: ["Es öffnet die Handbuchseite zu ls","Es benennt ls um","Es zeigt nur versteckte Dateien an"],
          correctIndex: 0,
          correctExplanation: "man ist die Schnittstelle zu den System-Handbüchern.",
          wrongExplanation: "man ls öffnet die Manual-Seite zum Befehl ls."
        }
      ]
    }
  }
} as const;
