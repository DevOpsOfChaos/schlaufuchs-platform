---
title: "Zustandsautomaten"
description: "Überblick über Zustandsautomaten als Modell für Systeme mit klaren Zuständen und Übergängen."
subject: informatik
section: "Modelle"
topicPath:
  - zustandsautomaten
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Häufig werden Zustände nur als mehrere boolesche Variablen verstreut gespeichert."
keyTakeaways:
  - "Ein Zustandsautomat beschreibt ein System über Zustände, Ereignisse und Übergänge."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "informatik"
  - "zustand"
  - "automaten"
draft: false
---

# Zustandsautomaten

## Begriff und Zweck

Ein Zustandsautomat beschreibt ein System über Zustände, Ereignisse und Übergänge. Er eignet sich, wenn Verhalten davon abhängt, in welchem Zustand sich das System gerade befindet. Dadurch werden Abläufe übersichtlicher als bei verstreuten Bedingungen ohne klares Modell.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Zustände
- Ereignisse
- Übergänge
- Startzustand und erlaubte Zustandswechsel

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Ein Login-Dialog kann Zustände wie „leer“, „prüft“, „angemeldet“ und „Fehler“ haben. Eine Ampel wechselt zwischen Rot, Rot-Gelb, Grün und Gelb. Ein Mikrocontroller kann für einen Taster zwischen „nicht gedrückt“, „prellt“, „gedrückt“ und „losgelassen“ unterscheiden.

## Abgrenzung

Zustandsautomaten sind ein Modell, keine bestimmte Programmiersprache. Sie können als Diagramm, Tabelle oder Code umgesetzt werden. Ihr Nutzen liegt darin, unerlaubte Übergänge und vergessene Fälle sichtbar zu machen.

## Häufige Missverständnisse

Häufig werden Zustände nur als mehrere boolesche Variablen verstreut gespeichert. Dadurch entstehen unmögliche Kombinationen. Ein klarer Automat verhindert, dass ein System gleichzeitig in widersprüchlichen Zuständen sein kann.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
