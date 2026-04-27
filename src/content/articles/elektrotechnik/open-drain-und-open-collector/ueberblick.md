---
title: "Open-Drain und Open-Collector"
description: "Überblick über Open-Drain- und Open-Collector-Ausgänge, Pull-ups und gemeinsame Signalleitungen."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "open-drain-und-open-collector"
  - "ueberblick"
learningGoals:
  - "Du kannst Open-Drain und Open-Collector als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ohne Pull-up wird häufig ein definierter High-Zustand erwartet, obwohl keiner entsteht."
keyTakeaways:
  - "Open-Drain-Ausgänge ziehen meist aktiv nach Low."
  - "High entsteht über Pull-ups."
  - "Das Prinzip erlaubt gemeinsame Signalleitungen."
recognizeSignals:
  - "Mehrere Bausteine teilen sich eine Leitung."
  - "Ein Signal braucht Pull-ups oder steigt langsam an."
selfCheckPoints:
  - "Kann ich Open-Drain und Open-Collector in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "elektrotechnik"
  - "open drain"
  - "open collector"
  - "pull-up"
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
