---
title: "Musterlösung – EEPROM als persistenten Speicher ruhig zuordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-MEM-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-eeprom-grundidee-und-einsatz-verstehen", "eeprom-als-persistenten-speicher-ruhig-zuordnen"]
taskId: "ET-ATMEGA-MEM-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-eeprom-grundidee-und-einsatz-verstehen/eeprom-als-persistenten-speicher-ruhig-zuordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

- **Programmcode** → Flash, weil dort typischerweise das Programm selbst abgelegt wird.
- **aktuelle Tasterlage** → SRAM, weil es ein momentaner Laufzeitwert ist.
- **gespeicherte Helligkeitseinstellung** → EEPROM, weil der Wert nach dem Ausschalten erhalten bleiben soll.
- **Zwischenergebnis einer Berechnung** → SRAM, weil der Wert nur während der Laufzeit gebraucht wird.
- **Kalibrierwert eines Sensors** → EEPROM, weil er dauerhaft erhalten bleiben und selten geändert werden soll.

### Aufgabe 2

Die Aussage ist zu grob, weil EEPROM nicht einfach der Standardplatz für beliebige Variablen ist. EEPROM ist besonders für persistente Daten gedacht, also für Werte, die auch nach dem Ausschalten noch sinnvoll vorhanden sein sollen. Laufzeit-Zwischenwerte gehören typischerweise eher ins SRAM.

### Aufgabe 3

Eine Helligkeitseinstellung ist ein typischer EEPROM-Kandidat, weil sie nach dem nächsten Einschalten wieder gelten soll. Die aktuelle Tasterlage ist dagegen nur ein momentaner Zustand während des Betriebs. Sie muss den Neustart normalerweise nicht überleben.

### Aufgabe 4

Ein möglicher Merksatz lautet:

> EEPROM ist für ausgewählte Daten gedacht, die nach dem Ausschalten bewusst erhalten bleiben sollen.
