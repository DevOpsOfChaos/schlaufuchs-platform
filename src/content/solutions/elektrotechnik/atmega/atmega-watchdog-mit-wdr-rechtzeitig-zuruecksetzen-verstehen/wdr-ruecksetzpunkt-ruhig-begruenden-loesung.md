---
title: "Musterlösung – WDR-Rücksetzpunkt ruhig begründen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-WDT-302."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-watchdog-mit-wdr-rechtzeitig-zuruecksetzen-verstehen", "wdr-ruecksetzpunkt-ruhig-begruenden"]
taskId: "ET-ATMEGA-WDT-302"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-watchdog-mit-wdr-rechtzeitig-zuruecksetzen-verstehen/wdr-ruecksetzpunkt-ruhig-begruenden.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

WDR bestätigt dem Watchdog nicht nur, dass ein Reset im Moment vermieden werden soll, sondern dass das Programm bis zu einem bestimmten Punkt noch kontrolliert gelaufen ist. Der Rücksetzpunkt ist damit Teil der Überwachungslogik. Genau deshalb ist seine Platzierung fachlich wichtig.

## Aufgabe 2

Weil der Rücksetzpunkt dann an einen sinnvollen Abschluss gekoppelt ist, etwa an einen korrekt durchlaufenen Zyklus der Hauptschleife. Bei verstreuten WDR-Aufrufen sagt das Zurücksetzen dagegen kaum noch aus, ob die eigentliche Programmlogik als Ganzes gesund geblieben ist.

## Aufgabe 3

Die Aussage ist zu grob. Zu häufiges Rücksetzen verhindert zwar oft einen Reset, schwächt aber die Überwachungsfunktion des Watchdogs. Dann wird nur noch „irgendwo läuft noch Code“ bestätigt, nicht mehr „das System arbeitet inhaltlich noch gesund“.

## Aufgabe 4

Ein möglicher Merksatz lautet:

> Ein guter WDR-Punkt bestätigt nicht bloß Aktivität, sondern einen sinnvoll und gesund abgeschlossenen Programmschritt.
