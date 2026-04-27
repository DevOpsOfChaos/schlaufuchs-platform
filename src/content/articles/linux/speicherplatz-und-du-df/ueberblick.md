---
title: "Speicherplatz mit du und df"
description: "Überblick über Werkzeuge zur Analyse von Dateisystem- und Verzeichnisgröße."
subject: linux
section: "Systemdiagnose"
topicPath:
  - "speicherplatz-und-du-df"
  - "ueberblick"
learningGoals:
  - "Du kannst Speicherplatz mit du und df als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig werden `df` und `du` verwechselt."
keyTakeaways:
  - "df betrachtet Dateisysteme, du betrachtet Dateien und Verzeichnisse."
  - "Volle Systeme brauchen systematische Ursachenanalyse."
  - "Große Dateien sind nicht automatisch löschbar."
recognizeSignals:
  - "Es geht um Speicherplatz mit du und df als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich Speicherplatz mit du und df in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "speicherplatz"
  - "diagnose"
draft: false
---

# Speicherplatz mit du und df

`df` und `du` beantworten unterschiedliche Fragen zum Speicherplatz. `df` zeigt, wie viel Platz auf Dateisystemen verfügbar ist. `du` summiert, wie viel Platz Dateien und Verzeichnisse belegen. Zusammen helfen sie, volle Systeme und große Datenbereiche zu verstehen.

## Einordnung

Speicherplatzprobleme entstehen oft nicht nur durch eine einzelne große Datei, sondern durch Logs, Caches, Backups, Containerdaten oder temporäre Dateien. Eine systematische Prüfung verhindert, dass zufällig Dateien gelöscht werden.

## Zentrale Aspekte

- **Dateisystemauslastung mit `df -h`:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Verzeichnisgrößen mit `du -sh`:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Sortieren großer Bereiche:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Unterschiede durch Mounts, gelöschte offene Dateien und Berechtigungen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

`df -h` zeigt, ob eine Partition voll ist. `du -sh *` in einem Verzeichnis zeigt, welche Unterordner groß sind. Wenn `df` viel belegten Platz zeigt, `du` aber nicht, können gelöschte Dateien noch von laufenden Prozessen geöffnet sein.

## Abgrenzung

Diese Werkzeuge erklären nicht automatisch, ob Dateien gelöscht werden dürfen. Besonders unter `/var`, in Datenbanken oder bei Paketmanagern sollten Ursachen verstanden werden, bevor aufgeräumt wird.

## Häufige Missverständnisse

Häufig werden `df` und `du` verwechselt. Ein weiterer Fehler ist, mit `sudo rm -rf` Speicherplatz freizuräumen, ohne die Funktion der Dateien zu kennen. Sicheres Aufräumen beginnt mit Diagnose.

## Kurz zusammengefasst

- df betrachtet Dateisysteme, du betrachtet Dateien und Verzeichnisse.
- Volle Systeme brauchen systematische Ursachenanalyse.
- Große Dateien sind nicht automatisch löschbar.
