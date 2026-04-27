---
title: "PATH und Befehlsauflösung"
description: "Allgemeiner Überblick über PATH, ausführbare Dateien und die Suche nach Befehlen in der Shell."
subject: linux
section: "Shell"
topicPath:
  - "path-und-befehlsaufloesung"
  - "ueberblick"
learningGoals:
  - "Du kannst PATH und Befehlsauflösung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein Programm wird oft für nicht installiert gehalten, obwohl es nur nicht im PATH liegt."
keyTakeaways:
  - "PATH bestimmt, wo die Shell nach Befehlen sucht."
  - "Suchreihenfolge beeinflusst gleichnamige Programme."
  - "Lokale Skripte werden oft explizit mit Pfad gestartet."
recognizeSignals:
  - "Die Shell meldet command not found."
  - "Ein Befehl funktioniert in einer Sitzung, aber nicht in einer anderen."
selfCheckPoints:
  - "Kann ich PATH und Befehlsauflösung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "shell"
  - "path"
  - "befehle"
draft: false
---

# PATH und Befehlsauflösung

Die Shell führt Befehle aus, indem sie einen angegebenen Pfad nutzt oder in Verzeichnissen aus der Variable `PATH` sucht.

## Einordnung

PATH erklärt, warum ein Befehl in einem Terminal funktioniert und in einem anderen nicht, warum lokale Skripte mit `./script.sh` gestartet werden und warum gleichnamige Programme konkurrieren.

## Zentrale Aspekte

- **Suchreihenfolge:** PATH-Verzeichnisse werden von links nach rechts durchsucht.
- **Ausführbarkeit:** Eine Datei braucht passende Rechte und Format.
- **Relative Pfade:** Das aktuelle Verzeichnis wird nicht automatisch durchsucht.
- **Sicherheit:** Unsichere PATH-Einträge können falsche Programme ausführen.

## Beispiele und Zusammenhang

Ein Skript im aktuellen Ordner wird oft mit `./deploy.sh` gestartet. Ohne `./` sucht die Shell nur in PATH-Verzeichnissen.

## Abgrenzung

PATH ist nicht dasselbe wie ein Dateipfad, sondern eine Variable mit mehreren Suchpfaden.

## Häufige Missverständnisse

Ein Programm wird oft für nicht installiert gehalten, obwohl es nur nicht im PATH liegt.

## Kurz zusammengefasst

- PATH bestimmt, wo die Shell nach Befehlen sucht.
- Suchreihenfolge beeinflusst gleichnamige Programme.
- Lokale Skripte werden oft explizit mit Pfad gestartet.
