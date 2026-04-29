---
title: "Lösung – EEPROM-Schreibvorgänge sinnvoll begrenzen"
description: "Musterlösung zu „EEPROM-Schreibvorgänge sinnvoll begrenzen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "eeprom-schonend-speichern"]
taskId: "et-mc-v93-eeprom"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/eeprom-schonend-speichern"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der Sensorwert ändert sich häufig und erzeugt sehr viele Schreibvorgänge. Das belastet das EEPROM unnötig und kann die Lebensdauer verringern.

## Lösung zu Aufgabe 2

Sinnvoll sind zum Beispiel eine gespeicherte Geräteeinstellung, eine Kalibrierung oder ein Benutzermodus, der nach einem Neustart erhalten bleiben soll.

## Lösung zu Aufgabe 3

Speichern sollte nur bei echter Änderung und nur nach einer bestätigten Entscheidung erfolgen. Zusätzlich kann man Mindestabstände, Prüfsummen oder eine Verteilung auf mehrere Speicherstellen verwenden.
