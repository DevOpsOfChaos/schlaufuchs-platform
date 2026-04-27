---
title: "Motoren und H-Brücke"
description: "Allgemeiner Überblick über Gleichstrommotoren, Drehrichtung und H-Brücken als Treiberschaltung."
subject: elektrotechnik
section: "Leistungselektronik"
topicPath:
  - "motoren-und-h-bruecke"
  - "ueberblick"
learningGoals:
  - "Du kannst Motoren und H-Brücke grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Motoren und H-Brücke nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Motoren und H-Brücke beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Motoren und H-Brücke, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Motoren und H-Brücke in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "elektrotechnik"
  - "motor"
  - "h-bruecke"
  - "mikrocontroller"
draft: false
---
# Motoren und H-Brücke

Eine H-Brücke ist eine Schaltung, mit der ein Gleichstrommotor in beide Richtungen betrieben werden kann. Sie besteht vereinfacht aus vier Schaltern, die den Strom in der einen oder anderen Richtung durch den Motor leiten.

## Bedeutung

Motoren sind induktive und mechanische Lasten. Beim Einschalten, Bremsen und Richtungswechsel treten Ströme und Spannungsspitzen auf, die über einfache Logikpegel hinausgehen. Eine H-Brücke trennt deshalb Steuerlogik und Leistungsstrom.

## Typische Teilaspekte

- **Drehrichtung:** Die Richtung ergibt sich aus der Stromrichtung durch den Motor.
- **Freilauf:** Beim Abschalten muss die Motorinduktivität einen sicheren Strompfad erhalten.
- **PWM:** Geschwindigkeit kann häufig über Pulsweitenmodulation beeinflusst werden.
- **Totzeit:** Bei elektronischen H-Brücken dürfen gegenüberliegende Schalter nicht gleichzeitig kurzschließen.

## Beispiel

Ein kleiner Roboter nutzt oft zwei Motoren mit je einer H-Brücke. Der Mikrocontroller liefert Richtungssignale und PWM, während der Treiber den eigentlichen Motorstrom schaltet.

## Abgrenzung

Eine H-Brücke ist kein reiner Verstärker. Sie ist eine Schaltstruktur für Laststrom und Drehrichtung.

## Häufige Missverständnisse

Häufig wird unterschätzt, dass Motoren beim Anlauf deutlich mehr Strom ziehen können als im normalen Lauf. Netzteil, Treiber und Schutzbeschaltung müssen dazu passen.

## Einordnung im Gesamtzusammenhang

Motorsteuerung verbindet digitale Ausgänge, PWM, Schutzbeschaltung, Stromversorgung und mechanisches Verhalten.
