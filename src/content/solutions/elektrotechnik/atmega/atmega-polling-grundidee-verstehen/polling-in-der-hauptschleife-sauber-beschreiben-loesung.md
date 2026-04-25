---
title: Musterlösung – Polling in der Hauptschleife sauber beschreiben
description: Musterlösung zur Aufgabe ET-ATMEGA-POLL-203.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - polling-und-entprellen
  - atmega-polling-grundidee-verstehen
  - polling-in-der-hauptschleife-sauber-beschreiben-loesung
taskId: ET-ATMEGA-POLL-203
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-polling-grundidee-verstehen/polling-in-der-hauptschleife-sauber-beschreiben.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
draft: false
---

## Aufgabe 1

Das Beispiel ist Polling, weil der Eingang in der Hauptschleife immer wieder aktiv neu gelesen wird. Es wird also nicht auf eine Unterbrechung gewartet, sondern der Zustand des Tasters regelmäßig geprüft. Genau diese wiederholte Zustandsabfrage ist die Grundidee von Polling.

## Aufgabe 2

Die Hauptschleife ist hier der Ort, an dem das Programm ständig erneut prüft, ob der Taster gedrückt ist. Sie trägt also die ganze Prüflogik und die Reaktion auf den Eingang.

## Aufgabe 3

Die Aussage ist falsch, weil der Eingang in jeder Schleifenrunde erneut gelesen wird. Gerade diese ständige Wiederholung macht das Beispiel zu Polling.

## Aufgabe 4

Beim Polling schaut das Hauptprogramm immer wieder selbst nach dem Tasterzustand. Beim Interrupt unterbricht ein Ereignis den normalen Ablauf kurz und ruft eine ISR auf. Beide reagieren also auf Ereignisse, aber mit unterschiedlicher Struktur.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Polling ist didaktisch oft ruhiger, weil die ganze Reaktion sichtbar in der Hauptschleife gelesen werden kann.
