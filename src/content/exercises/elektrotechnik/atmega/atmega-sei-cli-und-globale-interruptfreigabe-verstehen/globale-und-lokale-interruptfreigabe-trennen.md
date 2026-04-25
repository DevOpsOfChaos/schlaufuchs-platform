---
title: Globale und lokale Interruptfreigabe trennen
description: Erkläre, warum eine Interruptquelle am ATmega lokal aktiv und trotzdem global noch gesperrt sein kann.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-nebenlaeufigkeit
  - atmega-sei-cli-und-globale-interruptfreigabe-verstehen
  - globale-und-lokale-interruptfreigabe-trennen
taskId: ET-ATMEGA-INT-307
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - interrupt
  - sei
hintPoints:
  - Trenne Quelle, lokales Enable und globale Freigabe bewusst.
  - Frage zuerst, welche Ebene überhaupt noch fehlt.
selfCheckPoints:
  - Kannst du lokale und globale Freigabe sauber auseinanderhalten?
  - Kannst du erklären, warum eine ISR trotz passender Quelle nicht laufen muss?
transferIdeas:
  - Übertrage die Logik auf Timer-, UART- oder externe Interruptquellen.
reflectionPrompt: "Welche Leitfrage hilft dir am meisten, einen „stummen“ Interrupt systematisch zu lesen?"
---

## Aufgabe 1

Erkläre in 2 bis 4 Sätzen den Unterschied zwischen lokaler Interruptfreigabe und globaler Interruptfreigabe am ATmega.

## Aufgabe 2

Warum kann eine korrekt konfigurierte Interruptquelle trotzdem scheinbar nichts auslösen?

## Aufgabe 3

Ordne die Rollen von `sei` und `cli` in einem kurzen Satz jeweils sauber ein.

## Aufgabe 4

Formuliere einen ruhigen Diagnoseweg für diesen Fall:

> Der Timer ist eingerichtet, das zugehörige Interrupt-Bit ist gesetzt, aber die ISR läuft nicht.
