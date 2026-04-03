export const articleEnhancements = {
  "linux/shell/navigation/pwd": {
    takeaway: "Wenn du im Terminal nicht mehr sicher bist, wo du bist, frage zuerst pwd.",
    interactive: {
      type: "fake-terminal",
      title: "pwd direkt ausprobieren",
      description:
        "Diese kleine Demo-Konsole führt keine echten Befehle aus. Sie reagiert nur auf vorbereitete Eingaben und ist dadurch sicher.",
      placeholder: "Befehl eingeben, z. B. pwd",
      commands: {
        pwd: "/home/user/projekte",
        "pwd -L": "/home/user/projekte",
        "pwd -P": "/home/user/projekte",
      },
    },
    quiz: {
      title: "Kurztest zu pwd",
      description: "Drei kleine Fragen zum aktuellen Thema.",
      questions: [
        {
          prompt: "Was zeigt pwd normalerweise an?",
          options: [
            "Alle Dateien im aktuellen Ordner",
            "Den Pfad deines aktuellen Arbeitsverzeichnisses",
            "Den Namen des zuletzt geöffneten Programms"
          ],
          correctIndex: 1,
          correctExplanation: "pwd zeigt dir den Pfad des aktuellen Arbeitsverzeichnisses an.",
          wrongExplanation: "pwd listet keine Dateien auf und zeigt auch keine Programme. Es zeigt, wo du dich gerade im Dateisystem befindest."
        },
        {
          prompt: "Wann ist pwd besonders nützlich?",
          options: [
            "Wenn du nach mehreren cd-Schritten prüfen willst, wo du gerade bist",
            "Wenn du ein Programm kompilieren willst",
            "Wenn du den Computer herunterfahren willst"
          ],
          correctIndex: 0,
          correctExplanation: "pwd ist dein schneller Standort-Check im Terminal.",
          wrongExplanation: "Hier geht es um Orientierung im Dateisystem. pwd hilft vor allem dabei, den aktuellen Ort im Terminal zu prüfen."
        },
        {
          prompt: "Wofür steht das P in pwd?",
          options: ["path", "print", "process"],
          correctIndex: 1,
          correctExplanation: "pwd steht für print working directory.",
          wrongExplanation: "Das klingt plausibel, ist aber nicht korrekt. Gemeint ist print working directory."
        }
      ]
    }
  },
  "linux/shell/navigation/cd": {
    takeaway: "Mit cd wechselst du den Arbeitsort im Terminal gezielt in einen anderen Ordner.",
    interactive: {
      type: "fake-terminal",
      title: "cd direkt ausprobieren",
      description:
        "Auch diese Demo-Konsole reagiert nur auf vorbereitete Eingaben. So bleibt sie sicher und trotzdem nützlich.",
      placeholder: "Befehl eingeben, z. B. cd ..",
      commands: {
        "cd dokumente": "",
        "cd ..": "",
        "cd ~": "",
        pwd: "/home/user",
      },
    },
    quiz: {
      title: "Kurztest zu cd",
      description: "Drei kleine Fragen zum Wechseln von Ordnern.",
      questions: [
        {
          prompt: "Wofür steht cd?",
          options: ["change directory", "create document", "current display"],
          correctIndex: 0,
          correctExplanation: "cd steht für change directory.",
          wrongExplanation: "cd bedeutet change directory und wechselt in einen anderen Ordner."
        },
        {
          prompt: "Was bewirkt cd .. ?",
          options: ["Es zeigt alle Dateien an", "Es wechselt ein Verzeichnis nach oben", "Es löscht den aktuellen Ordner"],
          correctIndex: 1,
          correctExplanation: "cd .. bringt dich eine Ebene höher.",
          wrongExplanation: "cd .. dient der Navigation und löscht nichts."
        },
        {
          prompt: "Was passiert bei cd ~ ?",
          options: ["Du wechselst ins Home-Verzeichnis", "Du wechselst ins Root-Verzeichnis", "Du startest eine neue Shell"],
          correctIndex: 0,
          correctExplanation: "~ steht typischerweise für dein Home-Verzeichnis.",
          wrongExplanation: "Das Symbol ~ steht in der Regel für dein Home-Verzeichnis."
        }
      ]
    }
  },
  "linux/shell/navigation/pfade": {
    takeaway: "Absolute Pfade sind vollständig. Relative Pfade hängen von deinem aktuellen Ort ab.",
    interactive: {
      type: "fake-terminal",
      title: "Pfade direkt ausprobieren",
      description:
        "Mit dieser Demo kannst du vorbereitete Beispielpfade und typische Ausgaben durchspielen.",
      placeholder: "Befehl eingeben, z. B. pwd",
      commands: {
        pwd: "/home/user/projekte",
        "cd /home/user/projekte": "",
        "cd projekte": "",
        "cd ../bilder": "",
      },
    },
    quiz: {
      title: "Kurztest zu Pfaden",
      description: "Drei kleine Fragen zu absoluten und relativen Pfaden.",
      questions: [
        {
          prompt: "Was ist ein absoluter Pfad?",
          options: ["Ein vollständiger Pfad ab dem Startpunkt des Dateisystems", "Ein Pfad, der immer nur einen Ordner tief ist", "Ein Pfad, der nur mit cd funktioniert"],
          correctIndex: 0,
          correctExplanation: "Ein absoluter Pfad beginnt am Startpunkt des Dateisystems.",
          wrongExplanation: "Absolut bedeutet vollständig und unabhängig vom aktuellen Ort."
        },
        {
          prompt: "Wovon hängt ein relativer Pfad ab?",
          options: ["Von der Bildschirmgröße", "Vom aktuellen Arbeitsverzeichnis", "Von den Benutzerrechten"],
          correctIndex: 1,
          correctExplanation: "Relative Pfade beziehen sich auf deinen aktuellen Ort.",
          wrongExplanation: "Relative Pfade sind nur im Bezug auf dein aktuelles Arbeitsverzeichnis sinnvoll."
        },
        {
          prompt: "Welcher Pfad ist relativ?",
          options: ["/home/user/projekte", "projekte", "/var/log"],
          correctIndex: 1,
          correctExplanation: "projekte ist relativ, weil kein vollständiger Startpfad davorsteht.",
          wrongExplanation: "Die beiden anderen Beispiele beginnen am Dateisystem-Start und sind daher absolut."
        }
      ]
    }
  },
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
          options: ["Es listet standardmäßig den Inhalt des aktuellen Verzeichnisses auf", "Es löscht leere Dateien", "Es wechselt in den zuletzt genutzten Ordner"],
          correctIndex: 0,
          correctExplanation: "Ohne Argumente arbeitet ls im aktuellen Verzeichnis.",
          wrongExplanation: "ls ist ein Anzeige-Befehl. Ohne Argumente listet er Inhalte im aktuellen Verzeichnis auf."
        },
        {
          prompt: "Wofür ist ls -a bekannt?",
          options: ["Es zeigt auch versteckte Namen an", "Es startet alle Programme im Ordner", "Es zeigt nur Audiodateien an"],
          correctIndex: 0,
          correctExplanation: "ls -a zeigt auch Namen an, die mit einem Punkt beginnen.",
          wrongExplanation: "Die Option -a blendet versteckte Namen nicht aus, sondern zeigt sie mit an."
        },
        {
          prompt: "Was ist eine typische Aufgabe von ls -l?",
          options: ["Lange Detailausgabe mit zusätzlichen Informationen", "Automatisches Umbenennen von Dateien", "Live-Überwachung eines Ordners"],
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
          options: ["Eine Struktur zum Organisieren von Dateien und weiteren Ordnern", "Immer nur eine Textdatei", "Ein spezieller Befehl im Terminal"],
          correctIndex: 0,
          correctExplanation: "Ordner helfen dabei, Inhalte sinnvoll zu strukturieren.",
          wrongExplanation: "Ordner sind keine Befehle und auch nicht einfach nur Textdateien."
        },
        {
          prompt: "Was beschreibt ein Dateiname normalerweise?",
          options: ["Wie ein Inhalt gespeichert oder benannt ist", "Die aktuelle CPU-Auslastung", "Automatisch die Benutzerrechte"],
          correctIndex: 0,
          correctExplanation: "Der Dateiname hilft dir, Inhalte wiederzufinden und zu unterscheiden.",
          wrongExplanation: "Der Dateiname ist nicht automatisch eine Anzeige für CPU oder Rechte."
        },
        {
          prompt: "Warum ist eine klare Ordnerstruktur hilfreich?",
          options: ["Weil du Inhalte schneller findest und weniger Fehler machst", "Weil dann alle Befehle kürzer werden", "Weil Linux sonst nicht starten kann"],
          correctIndex: 0,
          correctExplanation: "Eine saubere Struktur verbessert Orientierung und Arbeitsweise.",
          wrongExplanation: "Eine gute Struktur hilft dir vor allem praktisch beim Finden und Arbeiten."
        }
      ]
    }
  },
  "linux/shell/dateien/mkdir": {
    takeaway: "mkdir legt neue Ordner an und ist einer der wichtigsten Struktur-Befehle im Terminal.",
    interactive: {
      type: "fake-terminal",
      title: "mkdir direkt ausprobieren",
      description: "Die Demo zeigt typische mkdir-Eingaben mit vorbereiteten Reaktionen.",
      placeholder: "Befehl eingeben, z. B. mkdir projekt",
      commands: {
        "mkdir projekt": "",
        "mkdir bilder": "",
        "mkdir -p kurs/linux/shell": "",
        ls: "projekt  bilder  kurs"
      },
    },
    quiz: {
      title: "Kurztest zu mkdir",
      description: "Drei kleine Fragen zum Anlegen von Ordnern.",
      questions: [
        {
          prompt: "Wofür steht mkdir in der Praxis?",
          options: ["Zum Anlegen neuer Ordner", "Zum Löschen leerer Dateien", "Zum Anzeigen des aktuellen Pfades"],
          correctIndex: 0,
          correctExplanation: "mkdir wird zum Anlegen neuer Ordner verwendet.",
          wrongExplanation: "mkdir hat mit dem Erstellen von Ordnern zu tun, nicht mit Löschen oder Pfadanzeige."
        },
        {
          prompt: "Wann ist mkdir besonders nützlich?",
          options: ["Wenn du eine neue Struktur oder ein neues Projekt vorbereiten willst", "Wenn du Benutzerrechte lesen willst", "Wenn du die Systemzeit ändern willst"],
          correctIndex: 0,
          correctExplanation: "mkdir hilft beim sauberen Aufbau neuer Strukturen.",
          wrongExplanation: "mkdir dient nicht für Rechte oder Systemzeit, sondern für Ordnerstrukturen."
        },
        {
          prompt: "Was ist der Kernnutzen von mkdir?",
          options: ["Es schafft Ordnung durch neue Verzeichnisse", "Es zeigt versteckte Dateien an", "Es beendet Prozesse"],
          correctIndex: 0,
          correctExplanation: "Der Befehl hilft dir, Inhalte strukturiert zu organisieren.",
          wrongExplanation: "mkdir legt Ordner an und hat nichts mit Prozesssteuerung oder Dateianzeige zu tun."
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
          options: ["Für Hilfe zu eingebauten Shell-Befehlen", "Nur für Netzwerkdiagnose", "Zum Kompilieren von Programmen"],
          correctIndex: 0,
          correctExplanation: "help zeigt Hilfe zu Shell-Builtins wie cd oder help selbst.",
          wrongExplanation: "Das Bash-Builtin help ist vor allem für eingebaute Shell-Befehle gedacht."
        },
        {
          prompt: "Was liefert ls --help typischerweise?",
          options: ["Eine kurze Hilfe zur Benutzung des Befehls", "Eine Liste aller Benutzer", "Immer die komplette Manpage"],
          correctIndex: 0,
          correctExplanation: "--help liefert meistens eine kompakte Befehlsübersicht.",
          wrongExplanation: "--help ist in der Regel eine kurze Hilfe, nicht automatisch eine komplette Manpage."
        },
        {
          prompt: "Was macht man ls?",
          options: ["Es öffnet die Handbuchseite zu ls", "Es benennt ls um", "Es zeigt nur versteckte Dateien an"],
          correctIndex: 0,
          correctExplanation: "man ist die Schnittstelle zu den System-Handbüchern.",
          wrongExplanation: "man ls öffnet die Manual-Seite zum Befehl ls."
        }
      ]
    }
  },
  "linux/shell/befehle/grundbefehle": {
    takeaway: "Grundbefehle geben dir Orientierung und bilden die Basis für fast alle weiteren Linux-Schritte.",
    interactive: {
      type: "fake-terminal",
      title: "Grundbefehle ausprobieren",
      description: "Hier kannst du einige typische Einstiegsbefehle in einer sicheren Demo testen.",
      placeholder: "Befehl eingeben, z. B. pwd",
      commands: {
        pwd: "/home/user/projekte",
        ls: "dokumente  bilder  notizen.txt",
        "cd ..": "",
        help: "Verfügbare Befehle: help, clear, pwd, ls, cd .."
      },
    },
    quiz: {
      title: "Kurztest zu Grundbefehlen",
      description: "Drei kleine Fragen zu typischen Einstiegsbefehlen.",
      questions: [
        {
          prompt: "Warum sind Grundbefehle so wichtig?",
          options: ["Weil sie Orientierung und erste Kontrolle im Terminal geben", "Weil man danach nie wieder neue Befehle braucht", "Weil sie das Betriebssystem ersetzen"],
          correctIndex: 0,
          correctExplanation: "Grundbefehle bilden die Basis für das sichere Arbeiten im Terminal.",
          wrongExplanation: "Sie ersetzen das System nicht, sondern helfen dir bei den ersten und häufigen Arbeitsschritten."
        },
        {
          prompt: "Welcher Befehl passt typischerweise zur Orientierung?",
          options: ["pwd", "shutdown", "reboot"],
          correctIndex: 0,
          correctExplanation: "pwd zeigt deinen aktuellen Ort im Dateisystem.",
          wrongExplanation: "Für Orientierung im Dateisystem ist pwd sinnvoll, nicht Systembefehle wie shutdown."
        },
        {
          prompt: "Was ist ein guter Lernweg für Terminalbefehle?",
          options: ["Wenige wichtige Befehle gut verstehen und dann erweitern", "Alles gleichzeitig auswendig lernen", "Befehle nur kopieren, ohne sie zu verstehen"],
          correctIndex: 0,
          correctExplanation: "Ein ruhiger, schrittweiser Aufbau ist deutlich nachhaltiger.",
          wrongExplanation: "Gerade am Anfang ist ein klarer, kleiner Befehlskern der bessere Weg."
        }
      ]
    }
  },
  "linux/shell/befehle/dateibefehle": {
    takeaway: "Dateibefehle wie cp, mv und rm verändern Inhalte direkt und sollten deshalb bewusst genutzt werden.",
    interactive: {
      type: "fake-terminal",
      title: "Dateibefehle ausprobieren",
      description: "Diese Demo reagiert auf typische Datei-Befehle mit sicheren, vorbereiteten Antworten.",
      placeholder: "Befehl eingeben, z. B. cp notizen.txt backup.txt",
      commands: {
        "cp notizen.txt backup.txt": "",
        "mv backup.txt archiv.txt": "",
        "rm archiv.txt": "",
        ls: "notizen.txt  bilder  dokumente"
      },
    },
    quiz: {
      title: "Kurztest zu Dateibefehlen",
      description: "Drei kleine Fragen zu cp, mv und rm.",
      questions: [
        {
          prompt: "Wofür wird cp typischerweise genutzt?",
          options: ["Zum Kopieren von Dateien oder Ordnern", "Zum Wechseln in ein Verzeichnis", "Zum Anzeigen des aktuellen Pfades"],
          correctIndex: 0,
          correctExplanation: "cp wird zum Kopieren verwendet.",
          wrongExplanation: "cp gehört zu den Datei-Befehlen und dient dem Kopieren, nicht der Navigation."
        },
        {
          prompt: "Was beschreibt mv oft am besten?",
          options: ["Verschieben oder Umbenennen", "System herunterfahren", "Dateirechte lesen"],
          correctIndex: 0,
          correctExplanation: "mv wird oft zum Verschieben oder Umbenennen genutzt.",
          wrongExplanation: "mv ist kein System- oder Rechtebefehl, sondern ein Datei-Befehl."
        },
        {
          prompt: "Warum sollte man rm bewusst einsetzen?",
          options: ["Weil damit Inhalte entfernt werden können", "Weil es nur harmlose Informationen anzeigt", "Weil es automatisch Sicherungen erstellt"],
          correctIndex: 0,
          correctExplanation: "rm kann Inhalte entfernen und sollte daher bewusst eingesetzt werden.",
          wrongExplanation: "rm ist kein Anzeige- oder Backup-Befehl, sondern entfernt Dateien."
        }
      ]
    }
  },
  "mathematik/funktionen/linear/lineare-funktionen": {
    takeaway: "Lineare Funktionen beschreiben gleichmäßige Veränderungen und erscheinen als Gerade."
  },
  "web-development/css/flexbox/flexbox": {
    takeaway: "Flexbox hilft dir, Elemente flexibel entlang einer Achse anzuordnen."
  },
  "informatik/grundlagen/algorithmen/algorithmen": {
    takeaway: "Ein Algorithmus ist ein klarer, endlicher und nachvollziehbarer Lösungsweg."
  }
} as const;
