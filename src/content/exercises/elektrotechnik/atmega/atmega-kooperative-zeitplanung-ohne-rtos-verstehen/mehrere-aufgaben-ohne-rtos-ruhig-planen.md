---
title: Mehrere Aufgaben ohne RTOS ruhig planen
description: Erkläre, wie ein AVR mehrere wiederkehrende Aufgaben ohne Betriebssystem geordnet abarbeiten kann.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstruktur-und-ablauf
  - atmega-kooperative-zeitplanung-ohne-rtos-verstehen
  - mehrere-aufgaben-ohne-rtos-ruhig-planen
taskId: ET-ATM-STR-301
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - programmstruktur
hintPoints:
  - Trenne Aufgabenhäufigkeit und Blockierzeit bewusst.
  - Lies die Hauptschleife als Koordinator statt als Warteraum.
selfCheckPoints:
  - Kannst du erklären, warum Delay-Ketten unruhig werden?
  - Kannst du die Idee eines kooperativen Takts beschreiben?
transferIdeas:
  - Übertrage die Struktur auf LED, Taster, Sensoren und serielle Kommunikation.
reflectionPrompt: "Warum wird ein kleines Embedded-Programm oft schon durch bessere Zeitplanung spürbar robuster?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum mehrere regelmäßige Aufgaben auf einem AVR nicht gut in einer langen Delay-Kette aufgehoben sind.

## Aufgabe 2

Was ist der Vorteil einer Hauptschleife, die bei jedem Tick nur prüft, welche Aufgaben gerade fällig sind?

## Aufgabe 3

Ordne diese drei Aufgaben nach Reaktionsbedarf und begründe kurz:

- Taster prüfen alle 1 ms
- Sensorwert lesen alle 10 ms
- Status-LED wechseln alle 500 ms
