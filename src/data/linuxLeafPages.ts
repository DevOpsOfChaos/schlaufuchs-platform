export const linuxLeafPages = {
  "dateien-und-ordner": {
    title: "Dateien & Ordner",
    eyebrow: "Infoseite",
    description: "Dateien, Ordner und ihre Rolle im Linux-Alltag kompakt erklärt.",
    mascot: "/assets/mascots/linux.png",
    sections: [
      { title: "Grundidee", tone: "linux-a", text: "Dateien enthalten Inhalte. Ordner strukturieren diese Inhalte. Beides ist die Grundlage für fast alle Arbeiten im Terminal.", chips: ["Datei", "Ordner", "Struktur"] },
      { title: "Typische Fragen", tone: "linux-b", text: "Wo liege ich gerade? Welche Dateien gibt es hier? Wie wechsle ich in einen anderen Ordner?", chips: ["pwd", "ls", "cd"] },
      { title: "Nächste Themen", tone: "linux-c", text: "Danach folgen Pfade, Rechte und typische Dateibefehle wie kopieren, verschieben oder löschen.", chips: ["Pfade", "Rechte", "Dateibefehle"] },
    ],
  },
  "hilfe-im-terminal": {
    title: "Hilfe im Terminal",
    eyebrow: "Infoseite",
    description: "Wie man sich Befehle und Optionen direkt im Terminal erschließt.",
    mascot: "/assets/mascots/linux.png",
    sections: [
      { title: "Manpages", tone: "linux-a", text: "Viele Programme bringen eigene Handbuchseiten mit. Sie zeigen Syntax, Optionen und kurze Beschreibungen.", chips: ["man", "Syntax", "Optionen"] },
      { title: "Kurzinfos", tone: "linux-b", text: "Einige Befehle reagieren auf --help oder ähnliche Optionen und liefern schnelle Hinweise direkt im Terminal.", chips: ["--help", "-h", "Kurzinfo"] },
      { title: "Lernweg", tone: "linux-c", text: "Erst Überblick holen, dann gezielt ausprobieren. So wird Hilfe im Terminal zum normalen Arbeitswerkzeug.", chips: ["Verstehen", "Testen", "Routine"] },
    ],
  },
  "benutzer-und-gruppen": {
    title: "Benutzer & Gruppen",
    eyebrow: "Infoseite",
    description: "Benutzerkonten, Gruppen und ihre Rolle im Linux-System.",
    mascot: "/assets/mascots/linux.png",
    sections: [
      { title: "Benutzer", tone: "linux-a", text: "Jeder Nutzer arbeitet mit einem eigenen Konto. Das trennt Einstellungen, Dateien und Rechte sauber voneinander.", chips: ["Konto", "Home", "Anmeldung"] },
      { title: "Gruppen", tone: "linux-b", text: "Gruppen helfen dabei, gemeinsame Rechte und Zuständigkeiten im System übersichtlich zu vergeben.", chips: ["Team", "Rechte", "Zuweisung"] },
      { title: "Praxis", tone: "linux-c", text: "Später folgen Werkzeuge und typische Befehle für Verwaltung, Anzeige und Kontrolle von Benutzern und Gruppen.", chips: ["id", "groups", "useradd"] },
    ],
  },
  "dateirechte": {
    title: "Dateirechte",
    eyebrow: "Infoseite",
    description: "Lesen, Schreiben und Ausführen als Basis für Zugriffe unter Linux.",
    mascot: "/assets/mascots/linux.png",
    sections: [
      { title: "Drei Rechte", tone: "linux-a", text: "Dateien und Ordner haben Rechte für Lesen, Schreiben und Ausführen. Diese bestimmen, was erlaubt ist.", chips: ["r", "w", "x"] },
      { title: "Für wen gelten sie", tone: "linux-b", text: "Rechte werden getrennt für Besitzer, Gruppe und andere Nutzer betrachtet.", chips: ["user", "group", "other"] },
      { title: "Weiterer Weg", tone: "linux-c", text: "Darauf bauen später Themen wie chmod, chown und typische Sicherheitsfragen auf.", chips: ["chmod", "chown", "Sicherheit"] },
    ],
  },
  "terminal-nutzen": {
    title: "Terminal nutzen",
    eyebrow: "Infoseite",
    description: "Wie man ruhig und sicher mit dem Terminal arbeitet.",
    mascot: "/assets/mascots/linux.png",
    sections: [
      { title: "Arbeitsweise", tone: "linux-a", text: "Im Terminal wird Schritt für Schritt gearbeitet. Kurze Befehle, klare Rückmeldungen und sichtbare Ergebnisse helfen beim Lernen.", chips: ["Schrittweise", "Rückmeldung", "Routine"] },
      { title: "Fehler vermeiden", tone: "linux-b", text: "Erst lesen, dann ausführen. Pfade prüfen, Ausgabe beachten und kritische Befehle bewusst verwenden.", chips: ["Prüfen", "Lesen", "Vorsicht"] },
      { title: "Nächste Praxis", tone: "linux-c", text: "Darauf folgen Themen wie Befehlsketten, Editoren und Konfigurationsdateien.", chips: ["Befehlsketten", "Editoren", "Konfiguration"] },
    ],
  },
  nano: {
    title: "nano",
    eyebrow: "Infoseite",
    description: "Ein einfacher Editor für den schnellen Einstieg in Textdateien und Konfiguration.",
    mascot: "/assets/mascots/linux.png",
    sections: [
      { title: "Einstieg", tone: "linux-a", text: "nano ist leicht zugänglich und gut für erste Änderungen an kleinen Dateien geeignet.", chips: ["Editor", "Einfach", "Text"] },
      { title: "Wichtige Aktionen", tone: "linux-b", text: "Datei öffnen, ändern, speichern und verlassen. Genau diese Grundaktionen reichen für viele erste Schritte.", chips: ["Öffnen", "Speichern", "Beenden"] },
      { title: "Danach", tone: "linux-c", text: "Später können weitere Editoren, Shortcuts und typische Konfigurationsdateien ergänzt werden.", chips: ["Shortcuts", "vim", "Configs"] },
    ],
  },
} as const;
