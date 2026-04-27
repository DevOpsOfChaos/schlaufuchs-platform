---
title: "Spannungsteiler"
description: "Überblick über Spannungsteiler als einfache Schaltung zur Aufteilung einer Spannung."
subject: elektrotechnik
section: "Grundlagen"
topicPath:
  - spannungsteiler
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Häufig wird vergessen, dass ein Messgerät oder Eingang selbst Teil der Schaltung wird."
keyTakeaways:
  - "Ein Spannungsteiler besteht meist aus zwei Widerständen, die in Reihe zwischen einer Versorgung und Masse liegen."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "elektrotechnik"
  - "spannungsteiler"
  - "widerstand"
draft: false
---

# Spannungsteiler

![Schaubild zum Spannungsteiler.](/schlaufuchs-platform/images/overviews/v148/spannungsteiler.svg)

*Das Schaubild zeigt Quelle, Widerstände und die abgegriffene Teilspannung.*



## Begriff und Zweck

Ein Spannungsteiler besteht meist aus zwei Widerständen, die in Reihe zwischen einer Versorgung und Masse liegen. Am Verbindungspunkt entsteht eine Teilspannung. Diese einfache Schaltung ist wichtig, weil viele Mess-, Sensor- und Anpassungsschaltungen darauf beruhen. Sie zeigt außerdem, dass Spannungen in einer Reihenschaltung von den Widerstandsverhältnissen abhängen.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Verhältnis der Widerstände statt nur Einzelwerte
- Belastung des Teilers durch nachfolgende Schaltungen
- Stromverbrauch des Teilers
- Toleranzen und Messfehler

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Ein Spannungsteiler kann eine höhere Spannung auf einen Bereich bringen, den ein Mikrocontroller-ADC messen darf. Er kann auch als Grundmodell für Potentiometer oder einfache Sensoren dienen. Wird der Ausgang aber stark belastet, verändert sich die Teilspannung und der einfache Rechenwert stimmt nicht mehr.

## Abgrenzung

Ein Spannungsteiler ist keine allgemeine Stromversorgung. Er eignet sich schlecht, um Verbraucher mit nennenswertem Strom zu speisen, weil die Ausgangsspannung von der Last abhängt. Für stabile Versorgungsspannungen sind Spannungsregler oder geeignete Wandler zuständig.

## Häufige Missverständnisse

Häufig wird vergessen, dass ein Messgerät oder Eingang selbst Teil der Schaltung wird. Auch die Annahme, der Teiler verbrauche keinen Strom, ist falsch. Je kleiner die Widerstände sind, desto stabiler kann die Teilspannung gegen Belastung sein, aber desto mehr Strom geht dauerhaft verloren.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
