---
title: "Level-Shifter und Pegelwandler"
description: "Allgemeiner Überblick über Pegelwandler zwischen Schaltungen mit unterschiedlichen Logikspannungen."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["level-shifter-und-pegelwandler", "ueberblick"]
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
# Level-Shifter und Pegelwandler

Ein Level-Shifter oder Pegelwandler verbindet digitale Schaltungen mit unterschiedlichen Logikspannungen. Typische Spannungen sind 5 V, 3,3 V oder niedrigere Pegel.

## Einordnung

Pegelwandler sind wichtig, weil Sensoren, Mikrocontroller und Module nicht immer dieselbe Versorgungsspannung verwenden. Ohne Anpassung können Signale unzuverlässig sein oder Eingänge beschädigen.

## Zentrale Aspekte

- **Logikschwellen:** Eingänge haben Bereiche für Low und High.
- **Richtung:** Manche Wandler arbeiten nur in eine Richtung.
- **Open-Drain-Busse:** I²C benötigt andere Lösungen als Push-Pull-Signale.
- **Schutz:** Pegelwandler verhindern unzulässige Eingangsspannungen.

## Beispiele und Zusammenhang

Ein 5-V-Controller kann einen 3,3-V-Sensor nicht immer direkt sicher ansteuern. Für I²C werden oft bidirektionale MOSFET-Wandler verwendet.

## Abgrenzung

Ein Vorwiderstand ist nicht automatisch ein Pegelwandler. Er begrenzt Strom, definiert aber nicht immer saubere Logikpegel.

## Häufige Missverständnisse

Oft wird nur die Versorgungsspannung betrachtet und die erlaubte Signalspannung ignoriert.

## Kurz zusammengefasst

- Pegelwandler verbinden unterschiedliche Logikspannungen.
- Richtung und Signalart bestimmen die Lösung.
- Unangepasste Pegel können unzuverlässig oder schädlich sein.
