---
title: UART-Fehlerflags ruhig unterscheiden
description: Unterscheide am AVR-UART Framing Error, Data OverRun und Parity Error fachlich sauber und ordne typische Ursachen zu.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-fehlerflags-fe-dor-und-upe-verstehen
  - uart-fehlerflags-ruhig-unterscheiden
taskId: ET-ATMEGA-UART-306
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
hintPoints:
  - Ordne jedes Flag zuerst seiner Grundursache zu.
  - Trenne Zeicheninhalt und Empfangsstatus bewusst.
selfCheckPoints:
  - Kannst du FE, DOR und UPE in eigenen Worten erklären?
  - Kannst du Timing-Problem und Überlaufproblem unterscheiden?
transferIdeas:
  - Übertrage die Logik auf Terminalprobleme, Ringpuffer und serielles Debugging.
reflectionPrompt: "Warum hilft bei UART-Fehlern oft der Statusblick mehr als nur das Ansehen des falschen Zeichens?"
---

## Aufgabe 1

Erkläre in je 1 bis 2 Sätzen die Bedeutung von:

- FE
- DOR
- UPE

## Aufgabe 2

Warum ist DOR fachlich etwas anderes als ein Framing Error?

## Aufgabe 3

Ein Zeichen wird empfangen, aber das Prüfbit passt nicht.

Welches Flag wird dabei besonders wichtig und worauf lenkt es deinen Blick?

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, warum UART-Empfang nicht nur aus Datenbytes besteht.
