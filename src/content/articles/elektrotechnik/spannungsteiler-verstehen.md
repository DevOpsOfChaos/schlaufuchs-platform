---
title: Spannungsteiler verstehen
description: Der Spannungsteiler ist eine einfache Grundschaltung, mit der sich Teilspannungen gezielt berechnen und praktisch nutzen lassen.
subject: elektrotechnik
section: Schaltungstechnik
level: einfach
tags:
  - Spannungsteiler
  - Widerstand
  - Elektronik
  - Grundlagen
draft: false
---

## Überblick

Der Spannungsteiler gehört zu den wichtigsten Grundschaltungen in der Elektrotechnik. Zwei Widerstände werden in Reihe geschaltet, sodass sich die Gesamtspannung aufteilt. Dadurch kann an einem Zwischenpunkt eine kleinere Spannung abgegriffen werden als an der Quelle selbst.

## Grundidee der Schaltung

Ein einfacher Spannungsteiler besteht aus:

- einer Eingangsspannung **Uges**,
- zwei in Reihe geschalteten Widerständen **R1** und **R2**,
- einer Ausgangsspannung **U2** über dem unteren Widerstand.

Da durch beide Widerstände derselbe Strom fließt, verteilt sich die Spannung entsprechend der Widerstandswerte.

## Formel

Die Teilspannung über **R2** lautet:

- U2 = Uges · R2 / (R1 + R2)

Für die Spannung über **R1** gilt entsprechend:

- U1 = Uges · R1 / (R1 + R2)

Beide Teilspannungen zusammen ergeben wieder die Gesamtspannung.

## Was zeigt die Formel?

Die Formel macht zwei Dinge sofort sichtbar:

- Ein größerer Widerstand erhält einen größeren Spannungsanteil.
- Die Ausgangsspannung hängt immer vom Verhältnis der Widerstände ab, nicht nur von ihren absoluten Werten.

Deshalb kann ein Spannungsteiler mit 1 kΩ und 1 kΩ denselben Spannungsanteil liefern wie mit 10 kΩ und 10 kΩ. In beiden Fällen wird die Spannung halbiert.

## Beispiel

Gegeben sind:

- Uges = 12 V
- R1 = 2 kΩ
- R2 = 4 kΩ

Dann ergibt sich:

- U2 = 12 V · 4 / (2 + 4) = 8 V

Über dem unteren Widerstand liegen also 8 V an. Über dem oberen Widerstand bleiben 4 V.

## Typische Anwendungen

Spannungsteiler werden zum Beispiel eingesetzt, um:

- Messspannungen anzupassen,
- Referenzspannungen zu erzeugen,
- Eingangssignale für Mikrocontroller zu reduzieren,
- einfache Sensoranordnungen auszuwerten.

## Wichtiger Praxis-Hinweis

Ein idealer Spannungsteiler funktioniert nur dann genau wie berechnet, wenn am Ausgang keine nennenswerte Last hängt. Wird eine weitere Schaltung angeschlossen, verändert diese den Gesamtwiderstand. Die Ausgangsspannung kann dann deutlich von der idealen Rechnung abweichen.

## Typische Fehler

- Widerstände parallel statt in Reihe denken.
- Falschen Widerstand in den Zähler der Formel einsetzen.
- Vergessen, dass beide Teilspannungen zusammen wieder die Gesamtspannung ergeben müssen.
- Die Last am Ausgang ignorieren.

## Merksätze

- Der Spannungsteiler teilt Spannungen über Widerstände in Reihenschaltung.
- Die Teilspannung hängt vom Verhältnis der Widerstände ab.
- Ohne Last ist die Rechnung am einfachsten und am genauesten.
