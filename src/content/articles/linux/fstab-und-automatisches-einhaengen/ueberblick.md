---
title: "fstab und automatisches Einhängen"
description: "Allgemeiner Überblick über fstab und automatisches einhängen und die wichtigsten Zusammenhänge."
subject: "linux"
section: "Dateisystem"
topicPath:
  - "fstab-und-automatisches-einhaengen"
learningGoals:
  - "Du kannst den Begriff allgemein erklären und in einen größeren Zusammenhang einordnen."
  - "Du kennst wichtige Teilaspekte, typische Anwendungen und sinnvolle Abgrenzungen."
  - "Du erkennst häufige Missverständnisse und kannst sie vermeiden."
practiceIdeas: []
commonMistakes:
  - "Häufig werden instabile Gerätenamen fest eingetragen."
keyTakeaways:
  - "`fstab` macht Speicherorte dauerhaft und reproduzierbar verfügbar."
  - "`fstab` ist nicht der Mount selbst, sondern eine Konfigurationsdatei für Mount-Regeln."
recognizeSignals:
  - "Es geht um Begriffe, Grundlagen, Einordnung oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ohne Spezialfall und ohne Rechenaufgabe erklären?"
  - "Kann ich ein passendes Beispiel nennen und eine klare Abgrenzung formulieren?"
level: "mittel"
tags:
  - "linux"
  - "fstab"
  - "mount"
  - "dateisystem"
draft: false
---

# fstab und automatisches Einhängen

`fstab` beschreibt Dateisysteme, die beim Start oder auf Anforderung automatisch eingehängt werden können.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Einträge enthalten Gerät oder UUID, Einhängepunkt, Dateisystemtyp und Optionen.
- Fehlerhafte Einträge können den Start verzögern.
- UUIDs sind oft stabiler als Gerätenamen.

## Abgrenzung

`fstab` ist nicht der Mount selbst, sondern eine Konfigurationsdatei für Mount-Regeln.

## Beispiele

- Eine Datenpartition wird beim Booten unter `/data` eingebunden.
- Ein Netzlaufwerk wird mit passenden Optionen integriert.

## Häufiges Missverständnis

Häufig werden instabile Gerätenamen fest eingetragen.

## Kurz zusammengefasst

`fstab` macht Speicherorte dauerhaft und reproduzierbar verfügbar.
