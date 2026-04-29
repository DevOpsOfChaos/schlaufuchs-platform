---
title: "Musterlösung – Rauschende ADC-Werte ruhig mitteln"
description: "Musterlösung zur Aufgabe ET-ATMEGA-ADC-209."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-mittelwertbildung-bei-rauschenden-signalen-verstehen", "rauschende-adc-werte-ruhig-mitteln"]
taskId: "ET-ATMEGA-ADC-209"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-adc-mittelwertbildung-bei-rauschenden-signalen-verstehen/rauschende-adc-werte-ruhig-mitteln.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

ADC-Werte können leicht schwanken, obwohl der Eingang ungefähr gleich bleibt, weil Messung und Umgebung nicht vollkommen ideal sind. Kleine Störungen, Quantisierung und zeitliche Unruhe wirken dabei zusammen. Genau deshalb ist ein einzelner ADC-Wert oft kein vollkommen ruhiger Wahrheitswert.

## Aufgabe 2

Für eine Anzeige ist Mittelwertbildung oft hilfreich, weil das Ergebnis ruhiger wirkt und kleine Zitterbewegungen weniger auffallen. Für schnelle Reaktionen kann sie aber zu träge sein, weil mehrere Messungen gesammelt werden müssen. Die Glättung kostet also Reaktionsgeschwindigkeit.

## Aufgabe 3

Ein möglicher Merksatz ist:

> Mittelwertbildung macht ADC-Werte oft ruhiger, erkauft das aber mit Zeit und trägerer Reaktion.

## Aufgabe 4

**Eher mitteln würde ich zum Beispiel bei:**

- einer langsamen Spannungsanzeige,
- einer Temperaturanzeige.

**Eher direkt auf Einzelwerte schauen würde ich zum Beispiel bei:**

- schnellen Regel- oder Schutzreaktionen,
- Signalverläufen, bei denen echte Änderungen sofort erkannt werden müssen.
