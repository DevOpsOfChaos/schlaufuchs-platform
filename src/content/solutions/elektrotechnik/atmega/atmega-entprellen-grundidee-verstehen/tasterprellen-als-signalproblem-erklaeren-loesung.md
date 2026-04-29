---
title: "Musterlösung – Tasterprellen als Signalproblem erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-BTN-204."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-entprellen-grundidee-verstehen", "tasterprellen-als-signalproblem-erklaeren"]
taskId: "ET-ATMEGA-BTN-204"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-entprellen-grundidee-verstehen/tasterprellen-als-signalproblem-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Ein mechanischer Taster wechselt beim Drücken nicht immer sofort stabil in den neuen Zustand. Der Kontakt kann kurz prellen, also mehrmals schnell zwischen den Pegeln hin- und herspringen. Für den Mikrocontroller sieht das dann wie mehrere Ereignisse aus, obwohl aus menschlicher Sicht nur einmal gedrückt wurde.

## Aufgabe 2

Beim ideal gedachten Verlauf gibt es einen einzigen sauberen Zustandswechsel. Beim realen Taster können kurz mehrere kleine Wechsel auftreten, bevor der Zustand stabil bleibt.

## Aufgabe 3

Entprellen ist fachlich mehr als bloßes Warten, weil zuerst verstanden werden muss, dass das Eingangssignal kurz unruhig sein kann. Ziel ist nicht irgendeine Pause, sondern eine stabile Entscheidungsgrundlage aus dem Signal zu machen.

## Aufgabe 4

Mehrfaches Umschalten kann zwar am Code liegen, muss es aber nicht. Gerade bei mechanischen Tastern ist Prellen eine sehr typische Ursache. Deshalb sollte zuerst geprüft werden, ob ein unruhiger Signalverlauf vorliegt, bevor der Code vorschnell als fehlerhaft gilt.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Entprellen beruhigt ein mechanisch unruhiges Tastensignal, damit daraus nur ein stabil lesbares Ereignis wird.
