---
title: "Open-Drain und Open-Collector"
description: "Überblick über Open-Drain- und Open-Collector-Ausgänge, Pull-ups und gemeinsame Signalleitungen."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["open-drain-und-open-collector", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# Open-Drain und Open-Collector

Open-Drain und Open-Collector bezeichnen Ausgangsstufen, die eine Leitung meist nur aktiv nach Masse ziehen. Der High-Zustand entsteht über einen Pull-up-Widerstand.

## Einordnung

Das Prinzip ist bei I²C, Interrupt-Leitungen, Reset-Signalen und Statusleitungen wichtig. Mehrere Bausteine können eine Leitung teilen, ohne direkt gegeneinander zu treiben.

## Zentrale Aspekte

- **Aktives Low:** Der Ausgang zieht die Leitung auf Low.
- **Pull-up:** Ein Widerstand erzeugt den High-Zustand.
- **Gemeinsame Leitung:** Mehrere Teilnehmer können denselben Draht nutzen.
- **Flankenzeit:** Der Pull-up und die Leitungskapazität bestimmen den Anstieg.

## Beispiele und Zusammenhang

Bei I²C ziehen Teilnehmer SDA oder SCL nach Low. Der High-Zustand entsteht durch Pull-ups, weshalb deren Wert und die Leitungslänge wichtig sind.

## Abgrenzung

Open-Drain ist nicht dasselbe wie ein Push-Pull-Ausgang, der aktiv High und Low treibt.

## Häufige Missverständnisse

Ohne Pull-up wird häufig ein definierter High-Zustand erwartet, obwohl keiner entsteht.

## Kurz zusammengefasst

- Open-Drain-Ausgänge ziehen meist aktiv nach Low.
- High entsteht über Pull-ups.
- Das Prinzip erlaubt gemeinsame Signalleitungen.
