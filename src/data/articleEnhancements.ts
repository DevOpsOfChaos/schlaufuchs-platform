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
            "Nicht ganz. pwd listet keine Dateien auf und hat auch nichts mit Programmen zu tun. Es zeigt, wo du dich gerade im Dateisystem befindest."
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
    takeaway: "Mit cd wechselst du den Arbeitsort im Terminal gezielt in einen anderen Ordner."
  },
  "linux/shell/navigation/pfade": {
    takeaway: "Absolute Pfade sind vollständig. Relative Pfade hängen von deinem aktuellen Ort ab."
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
