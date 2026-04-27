---
title: "Symbolische und absolute Pfade"
description: "Allgemeiner Überblick über symbolische und absolute pfade und die wichtigsten Zusammenhänge."
subject: "linux"
section: "Dateisystem"
topicPath:
  - "symbolische-und-absolute-pfade"
learningGoals:
  - "Du kannst den Begriff allgemein erklären und in einen größeren Zusammenhang einordnen."
  - "Du kennst wichtige Teilaspekte, typische Anwendungen und sinnvolle Abgrenzungen."
  - "Du erkennst häufige Missverständnisse und kannst sie vermeiden."
practiceIdeas: []
commonMistakes:
  - "Häufig werden Befehle aus einem anderen Arbeitsverzeichnis gestartet als gedacht."
keyTakeaways:
  - "Sicherer Umgang mit Pfaden verhindert viele Datei- und Skriptfehler."
  - "Ein Pfad ist nicht der Dateiinhalt, sondern eine Adresse im Dateisystem."
recognizeSignals:
  - "Es geht um Begriffe, Grundlagen, Einordnung oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ohne Spezialfall und ohne Rechenaufgabe erklären?"
  - "Kann ich ein passendes Beispiel nennen und eine klare Abgrenzung formulieren?"
level: "einfach"
tags:
  - "linux"
  - "pfade"
  - "dateisystem"
  - "shell"
draft: false
---

# Symbolische und absolute Pfade

Pfade beschreiben, wo Dateien und Verzeichnisse im Dateisystem erreichbar sind. Absolute Pfade beginnen an der Wurzel, relative am aktuellen Arbeitsort.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Absolute Pfade sind eindeutig, aber länger.
- Relative Pfade sind kurz und kontextabhängig.
- `.` und `..` beschreiben aktuelles und übergeordnetes Verzeichnis.

## Abgrenzung

Ein Pfad ist nicht der Dateiinhalt, sondern eine Adresse im Dateisystem.

## Beispiele

- `/etc/hosts` ist ein absoluter Pfad.
- `../bilder/logo.png` ist relativ zum aktuellen Verzeichnis.

## Häufiges Missverständnis

Häufig werden Befehle aus einem anderen Arbeitsverzeichnis gestartet als gedacht.

## Kurz zusammengefasst

Sicherer Umgang mit Pfaden verhindert viele Datei- und Skriptfehler.
