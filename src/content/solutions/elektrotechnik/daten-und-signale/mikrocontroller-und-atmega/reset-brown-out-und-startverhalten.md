---
title: "Lösung – Reset und Brown-out als Schutzlogik einordnen"
description: "Musterlösung zu reset und brown-out als schutzlogik einordnen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "reset-brown-out-und-startverhalten"]
taskId: "et-mc-v92-reset-brownout"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/reset-brown-out-und-startverhalten"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Bei langsam ansteigender Versorgung kann der Controller kurz in Bereichen arbeiten, in denen Spannung und Takt noch nicht zuverlässig sind. Reset und Brown-out sorgen dafür, dass der Controller nicht in halbgültigen Zuständen weiterläuft, sondern erst nach ausreichender Versorgung definiert startet.

## Lösung zu Aufgabe 2

Brown-out erkennt Unterspannung und kann einen Reset auslösen. Er glättet aber keine Versorgung, entfernt keine Störung und liefert keine fehlende Energie. Wenn die Versorgung bei Lastwechseln einbricht, muss die elektrische Ursache trotzdem behoben werden.

## Lösung zu Aufgabe 3

Geeignete Regeln sind: Ausgänge beim Start sicher halten, Aktoren erst nach Initialisierung freigeben, Versorgung und Resetbeschaltung prüfen, Brown-out passend wählen und Startzustände im Code bewusst setzen.
