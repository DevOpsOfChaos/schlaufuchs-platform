---
title: WDR-Rücksetzpunkt ruhig begründen
description: Begründe am AVR, warum der Watchdog nicht bloß irgendwie oft zurückgesetzt werden sollte, sondern an einem inhaltlich sinnvollen Punkt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - robustheit-und-fehlersicherheit
  - atmega-watchdog-mit-wdr-rechtzeitig-zuruecksetzen-verstehen
  - wdr-ruecksetzpunkt-ruhig-begruenden
taskId: ET-ATMEGA-WDT-302
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - watchdog
hintPoints:
  - Frage zuerst, was der Rücksetzpunkt über die Systemgesundheit aussagt.
  - Trenne „Reset verhindern“ und „gesundes Weiterlaufen bestätigen“.
selfCheckPoints:
  - Kannst du einen guten und einen schlechten WDR-Punkt unterscheiden?
  - Kannst du erklären, warum zu häufiges Rücksetzen die Überwachung schwächt?
transferIdeas:
  - Übertrage die Logik auf Hauptschleifen mit Sensoren, Aktoren und Kommunikationszyklen.
reflectionPrompt: "Warum ist beim Watchdog oft nicht der Befehl selbst, sondern seine Platzierung die eigentliche Fachentscheidung?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum WDR fachlich mehr ist als nur „Reset verhindern“.

## Aufgabe 2

Warum ist ein Rücksetzpunkt nach einem sinnvoll abgeschlossenen Hauptschleifen-Zyklus ruhiger als WDR an vielen verstreuten Stellen?

## Aufgabe 3

Bewerte diese Aussage kurz:

> „Am sichersten ist es, den Watchdog einfach möglichst oft zurückzusetzen.“

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, was ein guter WDR-Punkt über das Programm aussagen sollte.
