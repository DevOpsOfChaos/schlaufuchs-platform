---
title: Musterlösung – Multi-Master-Arbitrierung am TWI-Bus ruhig erklären
description: Musterlösung zur Aufgabe ET-ATM-TWI-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-arbitrierung-bei-multi-master-verstehen
  - multi-master-arbitrierung-am-twi-bus-ruhig-erklaeren-loesung
taskId: ET-ATM-TWI-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-twi-arbitrierung-bei-multi-master-verstehen/multi-master-arbitrierung-am-twi-bus-ruhig-erklaeren.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Bei mehreren möglichen Mastern kann es vorkommen, dass zwei Teilnehmer fast gleichzeitig senden möchten. Dann muss der Bus geregelt entscheiden, wer weitersenden darf. Genau dafür gibt es die Arbitrierung. Sie verhindert, dass aus einem gleichzeitigen Zugriff sofort ein chaotischer Kommunikationsfehler wird.

## Aufgabe 2

Ein Master vergleicht, was er senden wollte, mit dem tatsächlichen Buszustand. Wenn er an einer Stelle High senden wollte, der Bus aber Low zeigt, erkennt er, dass ein anderer Teilnehmer den Buszustand bestimmt hat. Damit weiß er, dass er die Arbitrierung verloren hat.

## Aufgabe 3

Das wäre zu unruhig, weil Multi-Master-Arbitrierung eine normale Busfunktion sein kann. Die Kommunikation ist dann nicht zwangsläufig defekt, sondern der Bus hat nur nach seiner eigenen Regel einen Teilnehmer zurücktreten lassen.
