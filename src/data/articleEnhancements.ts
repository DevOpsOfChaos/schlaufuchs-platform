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
          correctExplanation:
            "Richtig. pwd zeigt dir den Pfad des aktuellen Arbeitsverzeichnisses an.",
          wrongExplanation:
            "Nicht ganz. pwd listet keine Dateien auf und zeigt auch keine Programme. Es zeigt, wo du dich gerade im Dateisystem befindest."
        },
        {
          prompt: "Wann ist pwd besonders nützlich?",
          options: [
            "Wenn du nach mehreren cd-Schritten prüfen willst, wo du gerade bist",
            "Wenn du ein Programm kompilieren willst",
            "Wenn du den Computer herunterfahren willst"
          ],
          correctIndex: 0,
          correctExplanation:
            "Genau. pwd ist dein schneller Standort-Check im Terminal.",
          wrongExplanation:
            "Hier geht es um Orientierung im Dateisystem. pwd hilft vor allem dabei, den aktuellen Ort im Terminal zu prüfen."
        },
        {
          prompt: "Wofür steht das P in pwd?",
          options: [
            "path",
            "print",
            "process"
          ],
          correctIndex: 1,
          correctExplanation:
            "Richtig. pwd steht für print working directory.",
          wrongExplanation:
            "Fast plausibel, aber korrekt ist print working directory."
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
          options: [
            "change directory",
            "create document",
            "current display"
          ],
          correctIndex: 0,
          correctExplanation:
            "Richtig. cd steht für change directory.",
          wrongExplanation:
            "Nicht ganz. cd bedeutet change directory und wechselt in einen anderen Ordner."
        },
        {
          prompt: "Was bewirkt cd .. ?",
          options: [
            "Es zeigt alle Dateien an",
            "Es wechselt ein Verzeichnis nach oben",
            "Es löscht den aktuellen Ordner"
          ],
          correctIndex: 1,
          correctExplanation:
            "Genau. cd .. bringt dich eine Ebene höher.",
          wrongExplanation:
            "cd .. dient der Navigation und löscht nichts."
        },
        {
          prompt: "Was passiert bei cd ~ ?",
          options: [
            "Du wechselst ins Home-Verzeichnis",
            "Du wechselst ins Root-Verzeichnis",
            "Du startest eine neue Shell"
          ],
          correctIndex: 0,
          correctExplanation:
            "Richtig. ~ steht typischerweise für dein Home-Verzeichnis.",
          wrongExplanation:
            "Das Symbol ~ steht in der Regel für dein Home-Verzeichnis."
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
          options: [
            "Ein vollständiger Pfad ab dem Startpunkt des Dateisystems",
            "Ein Pfad, der immer nur einen Ordner tief ist",
            "Ein Pfad, der nur mit cd funktioniert"
          ],
          correctIndex: 0,
          correctExplanation:
            "Richtig. Ein absoluter Pfad beginnt am Startpunkt des Dateisystems.",
          wrongExplanation:
            "Nicht ganz. Absolut bedeutet vollständig und unabhängig vom aktuellen Ort."
        },
        {
          prompt: "Wovon hängt ein relativer Pfad ab?",
          options: [
            "Von der Bildschirmgröße",
            "Vom aktuellen Arbeitsverzeichnis",
            "Von den Benutzerrechten"
          ],
          correctIndex: 1,
          correctExplanation:
            "Genau. Relative Pfade beziehen sich auf deinen aktuellen Ort.",
          wrongExplanation:
            "Relative Pfade sind nur im Bezug auf dein aktuelles Arbeitsverzeichnis sinnvoll."
        },
        {
          prompt: "Welcher Pfad ist relativ?",
          options: [
            "/home/user/projekte",
            "projekte",
            "/var/log"
          ],
          correctIndex: 1,
          correctExplanation:
            "Richtig. projekte ist relativ, weil kein vollständiger Startpfad davorsteht.",
          wrongExplanation:
            "Die beiden anderen Beispiele beginnen am Dateisystem-Start und sind daher absolut."
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
