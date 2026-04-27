---
title: "Promises und async/await"
description: "Allgemeiner Überblick über Promises, async/await und strukturierte asynchrone JavaScript-Abläufe."
subject: web-development
section: "JavaScript"
topicPath:
  - "promises-und-async-await"
  - "ueberblick"
learningGoals:
  - "Du kannst Promises und async/await grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Promises und async/await nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Promises und async/await beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Promises und async/await, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Promises und async/await in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "web-development"
  - "javascript"
  - "promises"
  - "async-await"
draft: false
---
# Promises und async/await

Promises beschreiben einen Wert, der jetzt noch nicht verfügbar ist, aber später erfolgreich geliefert oder mit einem Fehler beendet werden kann. `async` und `await` machen solche Abläufe lesbarer.

## Bedeutung

Asynchrone Programmierung ist im Browser alltäglich: Daten werden geladen, Dateien verarbeitet, Timer laufen ab oder Schnittstellen antworten später. Promises helfen, diese Abläufe kontrolliert zu formulieren.

## Typische Teilaspekte

- **Zustände:** Ein Promise ist ausstehend, erfüllt oder fehlgeschlagen.
- **await:** `await` wartet innerhalb einer async-Funktion auf das Ergebnis, ohne die gesamte Oberfläche zu blockieren.
- **Fehlerpfad:** Fehler müssen mit `try/catch` oder Promise-Fehlerbehandlung eingeplant werden.
- **Reihenfolge:** Asynchrone Schritte können nacheinander oder parallel organisiert werden.

## Beispiel

Beim Laden von JSON per Fetch wartet eine async-Funktion erst auf die HTTP-Antwort und anschließend auf das Parsen des Antwortkörpers.

## Abgrenzung

Promises ersetzen keine Zustandsmodellierung in der Oberfläche. Eine UI braucht oft Ladezustand, Fehlerzustand und erfolgreichen Zustand.

## Häufige Missverständnisse

Ein häufiger Fehler ist das Vergessen von `await` oder fehlende Fehlerbehandlung. Dann entstehen unerwartete Promise-Objekte oder stille Abbrüche.

## Einordnung im Gesamtzusammenhang

Promises und async/await stehen zwischen Browser-APIs, Datenladen, Fehlerbehandlung und Benutzeroberflächen.
