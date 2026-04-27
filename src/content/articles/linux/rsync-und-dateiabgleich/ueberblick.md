---
title: "rsync und Dateiabgleich"
description: "Einordnung von rsync als Werkzeug zum effizienten Abgleichen von Dateien und Verzeichnissen."
subject: linux
section: "Dateien"
topicPath:
  - "rsync-und-dateiabgleich"
  - "ueberblick"
learningGoals:
  - "Du kannst rsync und Dateiabgleich als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird `--delete` verwendet, ohne vorher einen Trockenlauf zu machen."
keyTakeaways:
  - "rsync ist effizient für Datei- und Verzeichnisabgleich."
  - "Pfadschreibweise und Optionen verändern das Ergebnis stark."
  - "Trockenlauf ist vor riskanten Abgleichen wichtig."
recognizeSignals:
  - "Es geht um rsync und Dateiabgleich als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich rsync und Dateiabgleich in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "rsync"
  - "dateien"
draft: false
---

# rsync und Dateiabgleich

`rsync` gleicht Dateien und Verzeichnisse zwischen Orten ab. Es kopiert dabei nicht blind alles neu, sondern kann Unterschiede erkennen und nur notwendige Daten übertragen. Dadurch eignet es sich für Backups, Deployments und Synchronisation über Netzwerk oder lokal.

## Einordnung

Dateiabgleich ist mehr als Kopieren. Es geht auch um gelöschte Dateien, Zeitstempel, Rechte, symbolische Links und Zielpfade. `rsync` ist mächtig, aber gerade deshalb müssen Optionen bewusst gewählt werden.

## Zentrale Aspekte

- **Quell- und Zielpfad mit Bedeutung des abschließenden Slashes:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Archivmodus für Rechte und Zeitstempel:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Trockenlauf mit `--dry-run`:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Löschabgleich mit `--delete`:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Mit `rsync -av --dry-run quelle/ ziel/` lässt sich prüfen, was passieren würde. Der abschließende Slash bei `quelle/` bedeutet, dass der Inhalt des Verzeichnisses übertragen wird. Ohne Slash kann das Verzeichnis selbst im Ziel entstehen.

## Abgrenzung

`rsync` ist kein Versionsverwaltungssystem. Es kann Zustände abgleichen, aber nicht automatisch nachvollziehen, warum eine Datei geändert wurde. Für Code bleibt Git zuständig, für Dateiübertragung ist rsync oft passend.

## Häufige Missverständnisse

Häufig wird `--delete` verwendet, ohne vorher einen Trockenlauf zu machen. Dadurch können Zieldateien unerwartet gelöscht werden. Ein weiterer Fehler ist, Quell- und Zielpfade zu verwechseln.

## Kurz zusammengefasst

- rsync ist effizient für Datei- und Verzeichnisabgleich.
- Pfadschreibweise und Optionen verändern das Ergebnis stark.
- Trockenlauf ist vor riskanten Abgleichen wichtig.
