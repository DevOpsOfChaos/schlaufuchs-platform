---
title: "Besitz und Gruppenwechsel"
description: "Allgemeiner Überblick über besitz und gruppenwechsel und die wichtigsten Zusammenhänge."
subject: "linux"
section: "Benutzer"
topicPath: ["besitz-und-gruppenwechsel", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Benutzer"]
draft: false
---
# Besitz und Gruppenwechsel

Besitz und Gruppenzugehörigkeit bestimmen, welche Rechte für eine Datei oder ein Verzeichnis gelten.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- `chown` ändert Besitzer oder Gruppe.
- `chgrp` ändert gezielt die Gruppenzuordnung.
- Rechte und Besitz müssen gemeinsam betrachtet werden.

## Abgrenzung

Besitzwechsel ist nicht dasselbe wie Rechtevergabe.

## Beispiele

- Ein Webserver benötigt Leserechte auf bereitgestellte Dateien.
- Ein Projektverzeichnis kann über eine Gruppe organisiert werden.

## Häufiges Missverständnis

Häufig werden Probleme mit `chmod 777` verdeckt, obwohl Besitz oder Gruppe falsch sind.

## Kurz zusammengefasst

Besitz und Gruppen sind Bausteine sicherer Dateiorganisation.
