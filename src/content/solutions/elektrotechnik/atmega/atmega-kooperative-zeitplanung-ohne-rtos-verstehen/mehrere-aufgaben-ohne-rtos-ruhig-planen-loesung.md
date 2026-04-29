---
title: "Musterlösung – Mehrere Aufgaben ohne RTOS ruhig planen"
description: "Musterlösung zur Aufgabe ET-ATM-STR-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-kooperative-zeitplanung-ohne-rtos-verstehen", "mehrere-aufgaben-ohne-rtos-ruhig-planen"]
taskId: "ET-ATM-STR-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-kooperative-zeitplanung-ohne-rtos-verstehen/mehrere-aufgaben-ohne-rtos-ruhig-planen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Lange Delay-Ketten sind unruhig, weil während einer Wartephase andere Aufgaben oft nicht geprüft werden. Dadurch leiden Reaktionszeit und Erweiterbarkeit. Wenn mehrere periodische Aufgaben zusammenkommen, wird dieses Problem schnell deutlich. Eine geordnete Zeitplanung ist deshalb meist robuster als bloßes Warten.

## Aufgabe 2

Der Vorteil ist, dass die Hauptschleife kurz und reaktionsfähig bleibt. Bei jedem Tick wird nur geprüft, welche Aufgabe gerade wirklich ansteht. So können schnelle und langsame Aufgaben sauber nebeneinander existieren, ohne dass eine große Wartezeit alles andere blockiert.

## Aufgabe 3

Nach Reaktionsbedarf geordnet:

1. Taster prüfen alle 1 ms
2. Sensorwert lesen alle 10 ms
3. Status-LED wechseln alle 500 ms

Der Taster braucht die schnellste Reaktion, weil Eingaben sonst leicht träge wirken. Der Sensor ist wichtig, aber meist weniger kritisch als eine direkte Benutzereingabe. Die Status-LED hat den geringsten Reaktionsbedarf, weil ihre Änderung selten und sichtbar träge sein darf.
