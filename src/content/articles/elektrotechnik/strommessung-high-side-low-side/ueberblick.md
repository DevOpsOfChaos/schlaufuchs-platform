---
title: "Strommessung: High-Side und Low-Side"
description: "Überblick über Strommessung oberhalb oder unterhalb der Last und die Folgen für Bezugspotentiale."
subject: "elektrotechnik"
section: "Messschaltungen"
topicPath: ["strommessung-high-side-low-side", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Messschaltungen"]
draft: false
---
# Strommessung: High-Side und Low-Side

Bei Low-Side-Messung liegt der Messwiderstand zwischen Last und Masse. Bei High-Side-Messung liegt er zwischen Versorgung und Last.

## Einordnung

Beide Varianten messen Strom über einen kleinen Spannungsabfall, unterscheiden sich aber in Sicherheit, Messaufwand und Beeinflussung des Massebezugs.

## Zentrale Aspekte

- Low-Side ist oft einfacher zu messen.
- High-Side erhält den Massebezug der Last besser.
- Der Shunt verursacht immer einen Spannungsabfall.
- Verstärker und ADC müssen zum Messbereich und Bezugspotential passen.

## Beispiele und Zusammenhang

Eine Motorstrommessung auf der Low-Side ist einfach, kann aber den Massepunkt der Last anheben. High-Side-Messung ist aufwendiger, lässt die Lastmasse aber unverändert.

## Abgrenzung

Strommessung ist nicht nur eine Frage des Widerstandswerts. Verlustleistung, Messbereich, Sicherheit und Störungen gehören dazu.

## Häufige Missverständnisse

Den Shunt so groß zu wählen, dass die Messspannung bequem ist, aber die Last merklich schlechter versorgt wird.

## Kurz zusammengefasst

- High-Side und Low-Side unterscheiden sich im Bezugspotential.
- Der Messwiderstand beeinflusst die Schaltung.
- Messbereich und Verlustleistung müssen zusammen passen.
