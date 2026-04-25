---
title: Tasterprellen als Signalproblem erklären
description: Erkläre, warum ein mechanischer Taster bei einem AVR mehrere scheinbare Auslösungen erzeugen kann und warum Entprellen das Signal beruhigt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - polling-und-entprellen
  - atmega-entprellen-grundidee-verstehen
  - tasterprellen-als-signalproblem-erklaeren
taskId: ET-ATMEGA-BTN-204
level: einfach
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - taster
  - entprellen
hintPoints:
  - Trenne menschlich einen Tastendruck und elektrisch mehrere schnelle Zustandswechsel.
  - Lies Entprellen zuerst als Signalberuhigung.
selfCheckPoints:
  - Kannst du erklären, warum ein einmaliger Druck mehrfach erkannt werden kann?
  - Kannst du Prellen und Programmfehler sauber unterscheiden?
transferIdeas:
  - Übertrage die Logik auf Menütaster, Zähler oder LED-Toggle-Schaltungen.
reflectionPrompt: "Welche ruhige Lesefrage hilft dir am meisten, wenn ein Taster scheinbar „zu oft“ erkannt wird?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum ein mechanischer Taster bei einem Mikrocontroller mehrfach erkannt werden kann, obwohl nur einmal gedrückt wurde.

## Aufgabe 2

Was ist der Unterschied zwischen einem ideal gedachten und einem realen Tasterverlauf?

## Aufgabe 3

Warum ist Entprellen fachlich mehr als nur „ein bisschen warten“?

## Aufgabe 4

Jemand sagt: „Wenn die LED mehrfach umschaltet, ist der Code sicher falsch.“ Erkläre, warum das zu schnell gedacht ist.

## Aufgabe 5

Formuliere einen kurzen Merksatz dafür, was Entprellen im Kern leisten soll.
