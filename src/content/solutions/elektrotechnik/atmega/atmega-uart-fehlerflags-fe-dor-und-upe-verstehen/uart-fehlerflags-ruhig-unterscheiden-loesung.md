---
title: Musterlösung – UART-Fehlerflags ruhig unterscheiden
description: Musterlösung zur Aufgabe ET-ATMEGA-UART-306.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-fehlerflags-fe-dor-und-upe-verstehen
  - uart-fehlerflags-ruhig-unterscheiden-loesung
taskId: ET-ATMEGA-UART-306
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-uart-fehlerflags-fe-dor-und-upe-verstehen/uart-fehlerflags-ruhig-unterscheiden.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - loesung
draft: false
---

## Aufgabe 1

- **FE** bedeutet Framing Error. Der empfangene Zeichenrahmen passt nicht sauber zur erwarteten Struktur.
- **DOR** bedeutet Data OverRun. Ein neues Zeichen kam nach, bevor das vorherige rechtzeitig abgeholt wurde.
- **UPE** bedeutet Parity Error. Das Prüfbit stimmt nicht mit der erwarteten Paritätslogik überein.

## Aufgabe 2

DOR beschreibt ein Reaktions- oder Pufferproblem beim Abholen von Zeichen. FE beschreibt dagegen ein Problem im eigentlichen Bitrahmen. Beides führt zu schlechtem Empfang, aber mit klar unterschiedlicher Ursache.

## Aufgabe 3

Hier ist besonders **UPE** wichtig. Das lenkt den Blick auf die Prüfbitlogik und auf die Frage, ob Sender und Empfänger dieselbe Paritätskonfiguration verwenden oder ob das Zeichen unterwegs beschädigt wurde.

## Aufgabe 4

Ein möglicher Merksatz lautet:

> UART-Empfang liefert nicht nur Nutzdaten, sondern auch Status darüber, wie vertrauenswürdig diese Daten angekommen sind.
