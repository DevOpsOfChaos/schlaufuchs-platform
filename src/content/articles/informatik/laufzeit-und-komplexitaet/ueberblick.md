---
title: "Laufzeit und Komplexität"
description: "Überblick über Laufzeit, Speicherbedarf und Wachstum von Algorithmen."
subject: informatik
section: "Algorithmen"
topicPath:
  - laufzeit-und-komplexitaet
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, nur die Laufzeit eines kleinen Tests zu betrachten."
keyTakeaways:
  - "Komplexität beschreibt, wie Aufwand mit der Eingabegröße wächst."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "informatik"
  - "komplexität"
  - "laufzeit"
draft: false
---

# Laufzeit und Komplexität

## Begriff und Zweck

Komplexität beschreibt, wie Aufwand mit der Eingabegröße wächst. Dabei geht es nicht nur darum, ob ein Programm auf kleinen Beispielen schnell wirkt, sondern wie es sich bei größeren Datenmengen verhält. Laufzeit- und Speicherkomplexität helfen, Algorithmen zu vergleichen und Engpässe früh zu erkennen.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- konstante, lineare und quadratische Laufzeit
- Eingabegröße als Bezugsgröße
- Worst Case und Average Case
- Speicherbedarf zusätzlich zur Laufzeit

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Eine einfache Suche in einer unsortierten Liste ist oft linear: Je mehr Elemente, desto mehr Vergleiche können nötig sein. Zwei ineinander verschachtelte Schleifen über dieselbe Liste können quadratisch wachsen. Für zehn Elemente ist das unauffällig, für eine Million nicht.

## Abgrenzung

Komplexität ersetzt keine Messung. Sie abstrahiert von konkreter Hardware, Programmiersprache und konstanten Faktoren. Beides ist wichtig: theoretisches Wachstum und praktische Messung.

## Häufige Missverständnisse

Ein häufiger Fehler ist, nur die Laufzeit eines kleinen Tests zu betrachten. Ebenso wird Speicherbedarf oft vergessen. Ein Algorithmus kann schnell sein, aber zu viel Speicher benötigen oder bei bestimmten Fällen deutlich schlechter werden.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
