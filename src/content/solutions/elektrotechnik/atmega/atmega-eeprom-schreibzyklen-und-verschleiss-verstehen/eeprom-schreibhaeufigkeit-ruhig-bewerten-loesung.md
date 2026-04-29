---
title: "Musterlösung – EEPROM-Schreibhäufigkeit ruhig bewerten"
description: "Musterlösung zur Aufgabe ET-ATMEGA-MEM-302."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-eeprom-schreibzyklen-und-verschleiss-verstehen", "eeprom-schreibhaeufigkeit-ruhig-bewerten"]
taskId: "ET-ATMEGA-MEM-302"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-eeprom-schreibzyklen-und-verschleiss-verstehen/eeprom-schreibhaeufigkeit-ruhig-bewerten.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Die Idee ist zu grob, weil EEPROM zwar dauerhaft speichert, aber nicht für gedankenloses permanentes Schreiben gedacht ist. Technisch sinnvoll ist nicht nur die Frage, ob ein Wert wichtig ist, sondern auch, wie oft er neu geschrieben würde.

### Aufgabe 2

Es ist oft ruhiger, nur den endgültigen Wert zu speichern, weil viele Zwischenschritte gar nicht dauerhaft relevant sind. So wird EEPROM gezielter benutzt und nicht bei jeder kleinen Änderung neu beschrieben.

### Aufgabe 3

Persistenz und Schreibhäufigkeit sollten zusammen betrachtet werden. Ein Wert kann zwar grundsätzlich dauerhaft wichtig sein, aber wenn er sich sehr oft ändert, ist ständiges Speichern trotzdem unruhig. Gute EEPROM-Nutzung speichert daher gezielt sinnvolle Endstände.

### Aufgabe 4

Ein guter EEPROM-Kandidat ist zum Beispiel eine Helligkeitseinstellung oder ein Kalibrierwert, weil diese Daten nach dem Ausschalten erhalten bleiben sollen und sich meist nicht dauernd ändern. Ein schlechter Kandidat für ständiges Speichern wäre etwa eine aktuelle Tasterlage oder ein ständig wechselnder Laufzeitwert, weil sich dieser Wert laufend ändert und typischerweise keinen dauerhaften Speicher braucht.
