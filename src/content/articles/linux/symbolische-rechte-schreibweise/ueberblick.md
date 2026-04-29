---
title: "Symbolische Rechte-Schreibweise"
description: "Allgemeiner Überblick über symbolische rechte-schreibweise und die wichtigsten Zusammenhänge."
subject: "linux"
section: "Rechte"
topicPath: ["symbolische-rechte-schreibweise", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Rechte"]
draft: false
---
# Symbolische Rechte-Schreibweise

Die symbolische Rechte-Schreibweise beschreibt Linux-Dateirechte mit Buchstaben wie `u`, `g`, `o`, `r`, `w` und `x`.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- `u`, `g` und `o` stehen für Besitzer, Gruppe und andere.
- `r`, `w` und `x` stehen für Lesen, Schreiben und Ausführen.
- Mit `+`, `-` und `=` können Rechte gezielt verändert werden.

## Abgrenzung

Symbolische Rechte sind nicht weniger exakt als Oktalrechte; sie beschreiben Änderungen oft lesbarer.

## Beispiele

- `chmod u+x script.sh` gibt dem Besitzer Ausführungsrecht.
- `chmod go-w datei.txt` entfernt Schreibrechte für Gruppe und andere.

## Häufiges Missverständnis

Häufig wird eine Oktalzahl benutzt, ohne zu prüfen, welche Rechte wirklich gemeint sind.

## Kurz zusammengefasst

Symbolische Rechte machen Rechteänderungen nachvollziehbar.
