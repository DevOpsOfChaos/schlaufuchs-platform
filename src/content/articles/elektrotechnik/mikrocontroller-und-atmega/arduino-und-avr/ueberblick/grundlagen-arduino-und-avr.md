---
title: "Grundlagen: Arduino und AVR"
description: "Ruhiger Überblick über Arduino-Boards, AVR-Mikrocontroller, Pins, Programm und typische Einordnung."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "arduino-und-avr", "ueberblick", "grundlagen-arduino-und-avr"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
![Grundlagen: Arduino und AVR](/schlaufuchs-platform/images/overviews/v179/arduino-und-avr.svg)

Arduino ist für viele Lernende der erste praktische Zugang zu Mikrocontrollern. Wichtig ist aber, Arduino nicht mit dem gesamten Mikrocontroller-Thema gleichzusetzen. Ein Arduino-Board ist eine Lern- und Entwicklungsumgebung, auf der häufig ein AVR-Mikrocontroller sitzt.

## Begriff und Einordnung

Ein Arduino-Board verbindet Mikrocontroller, Takt, Spannungsversorgung, Programmierschnittstelle und beschriftete Anschlüsse zu einer leicht nutzbaren Plattform. Der AVR-Mikrocontroller ist dabei das eigentliche Bauteil, das Befehle ausführt, Pins schaltet und interne Peripherie nutzt.

Diese Trennung hilft, spätere Themen ruhiger einzuordnen: Nicht jede Eigenschaft kommt vom Board, nicht jede vom Mikrocontroller und nicht jede vom Programm.

## Typische Ebenen

- **Board:** macht Anschlüsse, Versorgung und Programmierung zugänglich.
- **Mikrocontroller:** führt das Programm aus und stellt Pins, Timer, ADC oder Schnittstellen bereit.
- **Programm:** legt fest, wie Eingänge gelesen und Ausgänge gesteuert werden.
- **Schaltung außen herum:** bestimmt, welche Signale wirklich an den Pins anliegen.

## Warum das wichtig ist

Viele Fehler entstehen, wenn diese Ebenen vermischt werden. Ein Pin kann im Code korrekt gesetzt sein, aber die externe Schaltung ist falsch. Ein Board kann funktionieren, aber die Versorgung eines Aktors reicht nicht aus. Ein Sensor kann angeschlossen sein, aber der Eingang bleibt ohne passende Beschaltung unbestimmt.

## Abgrenzung

Diese Überblicksseite ist keine Anleitung für ein konkretes Arduino-Projekt. Sie erklärt den Rahmen: Arduino erleichtert den Einstieg, AVR beschreibt eine Mikrocontroller-Familie, und die eigentliche Funktion entsteht erst aus Board, Code und Schaltung zusammen.

## Häufiges Missverständnis

Arduino ist nicht „die Programmiersprache“ und auch nicht automatisch jedes Mikrocontrollerproblem. Es ist eine zugängliche Plattform, die viele Details vereinfacht. Für sauberes Verständnis müssen diese Details später trotzdem fachlich eingeordnet werden.
