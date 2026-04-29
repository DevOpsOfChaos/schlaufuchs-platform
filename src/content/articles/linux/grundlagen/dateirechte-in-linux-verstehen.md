---
title: "Dateirechte in Linux verstehen"
description: "Dateirechte steuern in Linux, wer Dateien lesen, verändern oder ausführen darf und gehören zu den wichtigsten Grundlagen im System."
subject: "linux"
section: "Grundlagen"
topicPath: ["grundlagen", "dateirechte-in-linux-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Grundlagen"]
draft: false
---
## Überblick

Linux ist als Mehrbenutzersystem aufgebaut. Deshalb ist es wichtig, dass nicht jede Datei automatisch für alle Benutzer gleich zugänglich ist. Genau hier kommen Dateirechte ins Spiel. Sie regeln, wer etwas lesen, schreiben oder ausführen darf.

## Warum gibt es Dateirechte?

Dateirechte schützen:

- persönliche Daten,
- Systemdateien,
- Programme,
- Arbeitsumgebungen mehrerer Benutzer.

Ohne Rechteverwaltung könnte jeder Benutzer beliebige Dateien verändern oder löschen. Das wäre in einem Mehrbenutzersystem problematisch und unsicher.

## Die drei Rechtegruppen

Linux unterscheidet bei Rechten drei Perspektiven:

### Besitzer

Das ist der Benutzer, dem die Datei gehört.

### Gruppe

Das ist die Gruppe, der die Datei zugeordnet ist.

### Andere

Das sind alle übrigen Benutzer, die weder Besitzer noch Mitglied der zugeordneten Gruppe sind.

## Die drei Grundrechte

Für jede dieser drei Gruppen gibt es typischerweise drei Arten von Rechten.

### Lesen `r`

Eine Datei darf gelesen werden.

### Schreiben `w`

Eine Datei darf verändert werden.

### Ausführen `x`

Eine Datei darf als Programm oder Skript ausgeführt werden.

Bei Verzeichnissen haben diese Rechte leicht angepasste Bedeutungen, bleiben aber ebenfalls wichtig.

## Symbolische Schreibweise

Rechte werden oft in einer Zeichenfolge wie dieser dargestellt:

- `rw-r--r--`

Diese Schreibweise lässt sich in drei Blöcke zerlegen:

- `rw-` für den Besitzer
- `r--` für die Gruppe
- `r--` für andere

Das bedeutet:

- Besitzer darf lesen und schreiben
- Gruppe darf lesen
- andere dürfen lesen

## Numerische Schreibweise

Rechte können auch als Zahl dargestellt werden. Dabei gilt:

- `r = 4`
- `w = 2`
- `x = 1`

Diese Werte werden pro Block addiert.

Beispiele:

- `rwx = 7`
- `rw- = 6`
- `r-- = 4`
- `--- = 0`

Damit wird aus:

- `rw-r--r--`

in numerischer Form:

- `644`

## Beispielrechte verstehen

### `644`

- Besitzer: lesen und schreiben
- Gruppe: lesen
- andere: lesen

### `755`

- Besitzer: lesen, schreiben, ausführen
- Gruppe: lesen und ausführen
- andere: lesen und ausführen

Das ist ein typisches Recht für Programme oder Skripte, die allgemein ausführbar sein sollen.

## Dateien und Verzeichnisse unterscheiden

Bei Verzeichnissen bedeutet `x` nicht einfach „Programm starten“, sondern meist:

- das Verzeichnis betreten oder darin navigieren dürfen

Darum sind Rechte bei Verzeichnissen oft besonders wichtig, auch wenn dort keine Programmlogik liegt.

## Rechte ändern mit chmod

Rechte können unter Linux mit `chmod` geändert werden.

Beispiel:

- `chmod 640 datei.txt`

Das bedeutet:

- Besitzer: lesen und schreiben
- Gruppe: lesen
- andere: kein Zugriff

## Warum diese Rechte sinnvoll sind

Nicht jede Datei soll von allen verändert werden. Besonders wichtig ist:

- Schreibzugriff bewusst zu vergeben,
- Ausführungsrechte nicht unnötig breit zu setzen,
- sensible Inhalte vor unberechtigtem Zugriff zu schützen.

## Typische Fehler

- Besitzer, Gruppe und andere verwechseln.
- `x` als allgemeines Leserecht missverstehen.
- Zu offene Rechte setzen, obwohl die Datei geschützt sein sollte.
- Numerische und symbolische Schreibweise nicht miteinander verknüpfen können.

## Warum das Thema wichtig ist

Dateirechte sind wichtig für:

- Systemsicherheit,
- Mehrbenutzerbetrieb,
- Webserver,
- Shell-Skripte,
- Entwicklungsumgebungen,
- persönliche Datenbereiche.

Wer Linux wirklich sicher nutzen will, kommt an Rechten nicht vorbei.

## Merksätze

- Linux unterscheidet Rechte für Besitzer, Gruppe und andere.
- Die Grundrechte sind lesen, schreiben und ausführen.
- Rechte können symbolisch oder numerisch dargestellt werden.
- Gute Rechte schützen Daten und Systeme vor unbeabsichtigten Änderungen.
