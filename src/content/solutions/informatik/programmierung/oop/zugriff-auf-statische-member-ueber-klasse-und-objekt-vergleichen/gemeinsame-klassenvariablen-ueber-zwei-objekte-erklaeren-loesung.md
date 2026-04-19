---
title: Loesung – Gemeinsame Klassenvariablen ueber zwei Objekte erklaeren
description: Musterloesung zur Aufgabe ueber statische Member und gemeinsame Klassendaten.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - zugriff-auf-statische-member-ueber-klasse-und-objekt-vergleichen
taskId: INF-PROG-OOP-022
relatedExercise: informatik/programmierung/oop/zugriff-auf-statische-member-ueber-klasse-und-objekt-vergleichen/gemeinsame-klassenvariablen-ueber-zwei-objekte-erklaeren
tags:
  - informatik
  - oop
  - loesung
draft: false
---

## Musterloesung

### Aufgabe 1

Zwei Objekte koennen denselben statischen Wert sehen, weil dieser Wert nicht jedem Objekt einzeln gehoert. Er existiert nur einmal pro Klasse und wird deshalb gemeinsam benutzt.

### Aufgabe 2

`Klasse::wert` macht den Klassenbezug direkt sichtbar. `objekt.wert` kann bei statischen Membern trotzdem denselben gemeinsamen Klassenwert meinen, auch wenn die Schreibweise nach Objektzugriff aussieht.

### Aufgabe 3

Die Objekt-Schreibweise allein reicht nicht als Urteil. Entscheidend ist, dass der Member statisch ist und damit zur Klasse gehoert.
