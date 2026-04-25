---
title: Musterlösung – TWI Clock Stretching als Buswartezeit ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATM-TWI-301.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-clock-stretching-verstehen
  - twi-clock-stretching-als-buswartezeit-ruhig-einordnen-loesung
taskId: ET-ATM-TWI-301
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-twi-clock-stretching-verstehen/twi-clock-stretching-als-buswartezeit-ruhig-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

SCL ist beim TWI keine völlig starre Einbahnleitung nur vom Master. Eine Gegenstelle kann die Leitung kurz auf Low halten, wenn sie noch nicht bereit für den nächsten Schritt ist. Dieses geordnete Warten nennt man Clock Stretching. Dadurch wird der Bus nicht automatisch fehlerhaft, sondern der Ablauf wird nur kurz verzögert.

## Aufgabe 2

Der erste Fall passt noch zu Clock Stretching, weil nach einem kurzen Warten die Kommunikation weiterläuft. Der zweite Fall wirkt eher wie ein Busproblem, weil SCL dauerhaft Low bleibt und der Zugriff nicht weiterkommt. Entscheidend ist also nicht nur das Warten selbst, sondern ob der Ablauf danach wieder sauber fortgesetzt wird.

## Aufgabe 3

Das wäre zu grob, weil am TWI-Bus bewusstes Warten als Mechanismus vorgesehen sein kann. Erst Dauer, Kontext und weiterer Verlauf zeigen, ob der Bus nur auf eine langsame Gegenstelle Rücksicht nimmt oder wirklich hängen bleibt.
