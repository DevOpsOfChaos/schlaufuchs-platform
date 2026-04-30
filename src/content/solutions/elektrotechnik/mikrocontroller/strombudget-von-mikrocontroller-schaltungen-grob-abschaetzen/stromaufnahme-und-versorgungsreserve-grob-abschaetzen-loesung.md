---
title: "Musterlösung – Stromaufnahme und Versorgungsreserve grob abschätzen"
description: "Musterlösung zur Aufgabe ELE-MCU-GEN-110."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "strombudget-von-mikrocontroller-schaltungen-grob-abschaetzen", "stromaufnahme-und-versorgungsreserve-grob-abschaetzen"]
taskId: "ELE-MCU-GEN-110"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller/strombudget-von-mikrocontroller-schaltungen-grob-abschaetzen/stromaufnahme-und-versorgungsreserve-grob-abschaetzen"
tags: ["elektrotechnik", "mikrocontroller", "loesung"]
draft: false
---
## Aufgabe 1

Die Hauptfrage lautet, ob die Versorgung einer Schaltung nicht nur im Idealbild, sondern auch mit Reserve trägt. Dazu wird der Gesamtstrom mehrerer Verbraucher grob überschlagen, statt nur Einzelbauteile isoliert zu betrachten.

## Aufgabe 2

- **Ursache / Ausgangslage:** Mikrocontroller, LEDs, Sensoren und Module hängen zusammen an einer Versorgung.
- **Kritischer Punkt:** Die Summe der Lasten oder kurze Spitzen werden zu klein eingeschätzt.
- **Passende Maßnahme:** Ein grobes Strombudget erstellen und Reserve für Regler, Quelle und Lastsprünge einplanen.

## Aufgabe 3

Ein typischer Denkfehler lautet: „Der Controller selbst braucht wenig Strom, also passt die Versorgung schon.“ Fachlich ruhiger ist: Erst die Gesamtschaltung inklusive Peripherie entscheidet, wie belastbar die Versorgung sein muss.

## Aufgabe 4

Dieselbe Logik hilft auch bei LED-Stripes, Funkmodulen oder Motoransteuerungen. Immer wenn mehrere Verbraucher zusammenkommen, schützt ein grobes Strombudget vor instabilem oder warmem Betrieb.
