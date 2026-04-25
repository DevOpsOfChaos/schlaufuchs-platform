---
title: Resetursache am AVR ruhig einordnen
description: Ordne verschiedene Resetquellen am ATmega funktional ein und erkläre die Rolle von MCUSR als Diagnosehilfe.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - systemstart-und-robustheit
  - atmega-resetquellen-und-mcusr-verstehen
  - resetursache-am-avr-ruhig-einordnen
taskId: ET-ATMEGA-SYS-302
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - reset
  - mcusr
hintPoints:
  - Trenne sichtbaren Neustart und eigentliche Ursache.
  - Lies MCUSR als Diagnosehilfe, nicht als automatische Komplettlösung.
selfCheckPoints:
  - Kannst du mehrere Resetquellen funktional unterscheiden?
  - Kannst du erklären, warum derselbe Neustart verschiedene Ursachen haben kann?
transferIdeas:
  - Übertrage die Logik auf instabile Versorgungen, Watchdog-Probleme oder Reset-Taster.
reflectionPrompt: "Welche Leitfrage hilft dir, einen Reset eher als Diagnosechance als als bloßes Ärgernis zu lesen?"
---

## Aufgabe 1

Nenne vier typische Resetquellen am ATmega und beschreibe zu jeder kurz, wodurch sie ausgelöst werden kann.

## Aufgabe 2

Warum ist die Aussage zu grob:

> „Der Controller ist einfach neu gestartet.“

## Aufgabe 3

Erkläre in 2 bis 4 Sätzen, warum `MCUSR` für die Fehlersuche nützlich sein kann.

## Aufgabe 4

Eine Schaltung startet immer wieder neu. Formuliere einen ruhigen Diagnoseweg, bei dem du Resetursache und sichtbares Verhalten sauber trennst.
