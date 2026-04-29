---
title: "Spannungsteiler ausführlich verstehen"
description: "Der Spannungsteiler ist eine zentrale Grundschaltung, mit der Teilspannungen gezielt erzeugt, berechnet und praktisch beurteilt werden können."
subject: "elektrotechnik"
section: "Grundlagen"
topicPath: ["grundlagen", "spannungsteiler-ausfuehrlich-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Grundlagen"]
draft: false
---
## Überblick

Der Spannungsteiler gehört zu den wichtigsten Grundschaltungen der Elektrotechnik. Er wirkt auf den ersten Blick einfach, ist aber in vielen Anwendungen zentral: bei Messschaltungen, Sensorsignalen, Referenzspannungen und Pegelanpassungen. Wer den Spannungsteiler nur als Formel kennt, übersieht oft seine praktische Bedeutung.

## Grundaufbau

Ein einfacher Spannungsteiler besteht aus:

- einer Eingangsspannung **Uges**,
- zwei in Reihe geschalteten Widerständen **R1** und **R2**,
- einer Ausgangsspannung, die an einem der Widerstände abgegriffen wird.

Typisch ist die Spannung **U2** am unteren Widerstand **R2**.

## Warum teilt sich die Spannung auf?

In einer Reihenschaltung fließt durch beide Widerstände derselbe Strom. Wenn die Widerstände unterschiedlich groß sind, entstehen entsprechend große Spannungsabfälle. Genau deshalb teilt sich die Gesamtspannung auf.

Die Grundidee lautet:

- größerer Widerstand → größerer Spannungsabfall
- kleinerer Widerstand → kleinerer Spannungsabfall

## Formel für den Spannungsteiler

Für die Ausgangsspannung über **R2** gilt:

- U2 = Uges · R2 / (R1 + R2)

Für die Spannung über **R1** gilt entsprechend:

- U1 = Uges · R1 / (R1 + R2)

Zusammen ergibt sich:

- U1 + U2 = Uges

## Beispielrechnung

Gegeben sind:

- Uges = 12 V
- R1 = 2 kΩ
- R2 = 4 kΩ

Dann gilt:

- U2 = 12 · 4 / (2 + 4)
- U2 = 12 · 4 / 6
- U2 = 8 V

Somit gilt:

- U1 = 4 V
- U2 = 8 V

## Was zeigt dieses Beispiel?

Der größere Widerstand **R2** erhält den größeren Spannungsanteil. Das ist kein Zufall, sondern typisch für Reihenschaltungen.

## Gleiche Verhältnisse, gleicher Spannungsanteil

Für den Spannungsteiler ist das Verhältnis der Widerstände besonders wichtig.

Beispiel:

- 1 kΩ und 1 kΩ → halbe Spannung
- 10 kΩ und 10 kΩ → ebenfalls halbe Spannung

Ob die Widerstände absolut groß oder klein sind, ist für den idealen Spannungsanteil zunächst weniger wichtig als ihr Verhältnis.

## Praktische Anwendung

Spannungsteiler werden verwendet, um:

- Eingangssignale zu reduzieren,
- Referenzspannungen zu erzeugen,
- Sensorspannungen aufzubereiten,
- Messbereiche anzupassen,
- Mikrocontroller-Eingänge zu schützen.

## Wichtiger Praxispunkt: Belastung

Der ideale Spannungsteiler funktioniert nur dann exakt wie berechnet, wenn am Ausgang keine nennenswerte Last hängt.

Sobald eine weitere Schaltung am Ausgang angeschlossen wird, verändert sich das Verhalten:

- Die Last wirkt elektrisch mit.
- Der effektive Widerstand des unteren Zweigs ändert sich.
- Die Ausgangsspannung kann kleiner werden als erwartet.

Das ist einer der wichtigsten praktischen Unterschiede zwischen einer reinen Schulaufgabe und einer realen Schaltung.

## Typische Denkfehler

- Widerstände vertauschen und dadurch die falsche Teilspannung berechnen.
- Reihenschaltung und Parallelschaltung verwechseln.
- Glauben, die größere Spannung liege am kleineren Widerstand.
- Die Belastung am Ausgang ignorieren.
- Nur die Formel auswendig lernen, ohne die Strom- und Spannungslogik zu verstehen.

## Warum das Thema so wichtig ist

Der Spannungsteiler verbindet mehrere Grundideen der Elektrotechnik:

- Reihenschaltung,
- Spannungsabfall,
- Widerstandsverhältnis,
- praktisches Schaltungsverhalten.

Gerade deshalb ist er ein ideales Thema, um von der Formel zum echten Verständnis zu kommen.

## Merksätze

- Im Spannungsteiler fließt durch beide Widerstände derselbe Strom.
- Die Spannung teilt sich entsprechend der Widerstände auf.
- Der größere Widerstand erhält den größeren Spannungsanteil.
- Das Verhältnis der Widerstände ist entscheidend.
- In der Praxis kann eine Last die Ausgangsspannung verändern.
