---
title: "Shellskripte"
description: "Technische Referenz zu Bash-Skripten: Shebang, Ausführung, Dateirechte, Variablen, Quotes, Eingaben, Ausgaben und typische Fehler."
subject: "linux"
section: "Automatisierung und Skripte"
topicPath: ["automatisierung-und-skripte", "shellskripte"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "shell", "bash", "skripte", "automatisierung"]
draft: false
---

Ein Shellskript ist eine Textdatei mit Shell-Befehlen, die in einer festgelegten Reihenfolge ausgeführt werden. Es automatisiert Abläufe, die sonst manuell im Terminal eingegeben würden.

## Definition und Grundidee

Ein Shellskript fasst Befehle zu einem reproduzierbaren Ablauf zusammen. Die Shell liest die Datei, interpretiert jede Zeile und startet die entsprechenden Programme oder Shell-Anweisungen.

Ein minimales Bash-Skript sieht so aus:

```bash
#!/usr/bin/env bash
echo "Hallo Welt"
```

Die erste Zeile legt fest, welcher Interpreter das Skript ausführen soll. Der restliche Inhalt besteht aus Befehlen, Variablen, Kommentaren und Kontrollstrukturen.

## Einordnung

Shellskripte stehen zwischen interaktiver Terminalarbeit und vollständigen Programmen. Sie eignen sich für:

- wiederkehrende Dateioperationen,
- Backups und Synchronisation,
- einfache Prüf- und Wartungsaufgaben,
- Startskripte,
- Verarbeitung von Textdateien,
- Kombination vorhandener Kommandozeilenwerkzeuge.

Sie sind nicht automatisch die beste Wahl für große Anwendungen, komplexe Datenmodelle oder sicherheitskritische Logik. Dort sind Programmiersprachen mit klarer Typisierung, Tests und Bibliotheken oft robuster.

## Shebang

Der Shebang steht in der ersten Zeile:

```bash
#!/usr/bin/env bash
```

oder klassisch:

```bash
#!/bin/bash
```

Die Zeichen `#!` werden vom System erkannt. Danach folgt der Interpreter. `#!/usr/bin/env bash` sucht `bash` über die Umgebung, während `#!/bin/bash` einen konkreten Pfad voraussetzt.

Ohne Shebang kann ein Skript trotzdem mit `bash skript.sh` ausgeführt werden. Für direkt ausführbare Skripte ist der Shebang aber die klare technische Angabe.

## Ausführung

Ein Skript kann auf zwei Arten gestartet werden:

```bash
bash backup.sh
```

oder direkt:

```bash
./backup.sh
```

Für die direkte Ausführung braucht die Datei das Ausführungsrecht:

```bash
chmod +x backup.sh
./backup.sh
```

`./` bedeutet: Die Datei liegt im aktuellen Verzeichnis. Ohne diesen Pfad sucht die Shell nur in den Verzeichnissen aus `PATH`.

## Kommentare

Kommentare beginnen mit `#`:

```bash
# Zielordner anlegen
mkdir -p "$ziel"
```

Kommentare erklären Zweck, Annahmen oder Sicherheitsbedingungen. Sie sollten nicht bloß den Befehl wiederholen, sondern den Grund dokumentieren.

Eine Ausnahme ist der Shebang: `#!` sieht wie ein Kommentar aus, hat aber in der ersten Zeile eine besondere Systembedeutung.

## Variablen

Variablen werden ohne Leerzeichen um das Gleichheitszeichen gesetzt:

```bash
quelle="$HOME/Dokumente"
ziel="$HOME/Backup"
```

Falsch ist:

```bash
quelle = "$HOME/Dokumente"
```

Die Shell interpretiert das als Befehl `quelle` mit Argumenten, nicht als Zuweisung.

Beim Verwenden einer Variable steht ein Dollarzeichen davor:

```bash
echo "$quelle"
```

Variablen sollten fast immer in doppelte Anführungszeichen gesetzt werden. Das schützt Pfade mit Leerzeichen und verhindert unerwartete Wortaufteilung.

## Ein- und Ausgabe

`echo` gibt Text aus:

```bash
echo "Backup abgeschlossen"
```

Mit `read` kann ein Skript Eingaben lesen:

```bash
read -r antwort
```

Dateiausgaben können umgeleitet werden:

```bash
echo "Start" > log.txt
echo "Fertig" >> log.txt
```

`>` überschreibt eine Datei. `>>` hängt an. Dieser Unterschied ist wichtig, weil `>` bestehende Inhalte löschen kann.

## Kontrollstrukturen

Shellskripte können Entscheidungen und Wiederholungen enthalten:

```bash
if [ -d "$quelle" ]; then
  echo "Quelle existiert"
else
  echo "Quelle fehlt"
fi
```

Eine Schleife verarbeitet mehrere Werte:

```bash
for datei in *.txt; do
  echo "$datei"
done
```

Kontrollstrukturen machen Skripte mächtig, erhöhen aber auch die Fehlergefahr. Bedingungen, Quotes und Rückgabewerte müssen sauber behandelt werden.

## Sicherheitsregeln

Shellskripte führen echte Befehle aus. Deshalb brauchen sie mehr Vorsicht als reine Notizen.

Wichtige Regeln:

- Pfade in Variablen immer quoten: `"$pfad"`.
- Destruktive Befehle nicht ohne Prüfung ausführen.
- Vor `rm`, `mv`, `rsync --delete` oder Überschreibungen erst mit Testdaten prüfen.
- Bei Backups zuerst mit einem Probelauf arbeiten, falls das Werkzeug es unterstützt.
- Nicht blind mit `sudo` ausführen.
- Den aktuellen Benutzer, das Arbeitsverzeichnis und Dateirechte prüfen.

## Bezug zu vorhandenen Linux-Themen

Shellskripte setzen mehrere Grundlagen voraus:

- Der Shell-Arbeitsfluss erklärt Befehle, Optionen, Argumente und Arbeitsverzeichnisse.
- Dateirechte erklären, warum `chmod +x` für direkte Ausführung nötig ist.
- Benutzer und Gruppen erklären, warum ein Skript bestimmte Dateien lesen oder schreiben darf.
- Backup-Aufgaben mit `rsync` zeigen, wie Skripte kontrollierte Abläufe kapseln können.

## Typische Fehler

- **Leerzeichen bei Variablenzuweisungen:** `name = wert` ist keine Zuweisung.
- **Pfade nicht quoten:** Leerzeichen oder Sonderzeichen zerlegen Argumente.
- **`./skript.sh` ohne Ausführungsrecht:** Die Datei muss ausführbar sein.
- **Shebang vergessen:** Direkt ausgeführte Skripte haben dann keinen klaren Interpreter.
- **`>` statt `>>`:** Protokolldateien werden versehentlich überschrieben.
- **`sudo` als Ersatz für Verständnis:** Rechteprobleme sollten zuerst über Besitzer, Gruppen und Dateirechte analysiert werden.
- **Skriptnamen wie Systembefehle:** Ein Skript `test`, `ls` oder `chmod` erzeugt Verwechslungsgefahr.

## Abgrenzung

Diese Seite behandelt Shellskripte als Automatisierungswerkzeug. Sie ist keine vollständige Bash-Sprachreferenz und kein Sicherheitsleitfaden für produktive Serverautomatisierung. Pipes, Umleitungen, Rechte, Benutzerverwaltung und Backup-Werkzeuge sind eigene Themen, die mit Skripten kombiniert werden können.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/linux/linux-shellskripte-grundlagen/linux_shellskripte.html` neu geschrieben und adaptiert. Die Quelle wurde im Legacy-Bestand als CC BY-NC-SA 4.0 geführt. Altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
