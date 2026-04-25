---
title: Flanke und Zustand am AVR ruhig trennen
description: Begründe an kleinen Eingangsbeispielen, warum ein Ereignis oft auf einen Zustandswechsel und nicht auf den dauerhaft anliegenden Pegel reagieren soll.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - register-und-bitoperationen
  - atmega-zustandswechsel-mit-edge-detection-verstehen
  - flanke-und-zustand-am-avr-ruhig-trennen
taskId: ET-ATMEGA-REG-302
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - flanke
  - aufgabe
hintPoints:
  - Trenne aktuellen Zustand und Übergang bewusst.
  - Denke daran, dass eine Schleife denselben Pegel viele Male nacheinander sieht.
selfCheckPoints:
  - Kannst du erklären, warum ein Ereignis nicht bei jedem Schleifendurchlauf neu auslösen soll?
  - Kannst du begründen, wozu der vorherige Zustand gebraucht wird?
transferIdeas:
  - Übertrage die Logik auf Lichtschranken, Endschalter oder Taktimpulse.
reflectionPrompt: "Welche ruhigere Leitfrage hilft hier: „Was liegt jetzt an?“ oder „Was hat sich gerade geändert?“"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen Pegel und Flanke.

## Aufgabe 2

Warum reicht der aktuelle Pinwert allein oft nicht aus, wenn ein Ereignis nur einmal pro Tastendruck auslösen soll?

## Aufgabe 3

Formuliere einen kurzen Merksatz, der erklärt, warum für Flankenerkennung ein vorheriger Zustand nötig ist.

## Aufgabe 4

Nenne zwei typische Mikrocontroller-Fälle, in denen du eher auf eine Flanke als auf einen Dauerzustand reagieren würdest.
