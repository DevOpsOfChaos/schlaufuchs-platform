---
title: "Operationsverstärker Grundlagen"
description: "Allgemeiner Überblick über Operationsverstärker, Rückkopplung und typische analoge Grundschaltungen."
subject: "elektrotechnik"
section: "Analogtechnik"
topicPath: ["operationsverstaerker-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Analogtechnik"]
draft: false
---
# Operationsverstärker Grundlagen

Ein Operationsverstärker ist ein analoger Verstärkerbaustein mit sehr hoher Leerlaufverstärkung. In praktischen Schaltungen wird er fast immer mit Rückkopplung verwendet, um ein berechenbares Verhalten zu erhalten.

## Bedeutung

Operationsverstärker können Spannungen verstärken, Signale puffern, vergleichen, filtern oder umformen. Entscheidend ist die Beschaltung um den Baustein herum, nicht nur der Baustein selbst.

## Typische Teilaspekte

- **Eingänge:** Die Eingänge werden oft als invertierend und nichtinvertierend bezeichnet.
- **Rückkopplung:** Negative Rückkopplung stabilisiert das Verhalten und legt Verstärkung oder Funktion fest.
- **Versorgung:** Ausgangsspannungen können die Versorgungsschienen nicht beliebig überschreiten.
- **Grenzen:** Bandbreite, Eingangsspannungsbereich, Ausgangsstrom und Offset begrenzen reale Schaltungen.

## Beispiel

Ein Spannungsfolger nutzt Rückkopplung, um eine Spannung nahezu unverändert auszugeben, aber eine Quelle weniger zu belasten. Das ist nützlich zwischen Sensor und ADC.

## Abgrenzung

Ein Operationsverstärker ist nicht automatisch ein idealer Verstärker. Reale Bauteile haben Grenzen, die im Datenblatt stehen.

## Häufige Missverständnisse

Ein häufiger Fehler ist die Annahme, der Ausgang könne jede gewünschte Spannung liefern. Ohne passende Versorgung und Lastfähigkeit funktioniert das nicht.

## Einordnung im Gesamtzusammenhang

Operationsverstärker bilden eine wichtige Brücke zwischen Sensorik, Signalaufbereitung, Filtern und Analog-Digital-Wandlung.
