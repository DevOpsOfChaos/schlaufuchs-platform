---
title: "Lösung – Versorgung und Abblockung als Fehlerursache prüfen"
description: "Musterlösung zu versorgung und abblockung als fehlerursache prüfen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "versorgung-abblockkondensatoren-und-massefuehrung"]
taskId: "et-mc-v92-versorgung-abblocken"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/versorgung-abblockkondensatoren-und-massefuehrung"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Das Symptom hängt klar mit dem Einschalten des Motors zusammen. Dadurch entstehen Lastwechsel und mögliche Spannungseinbrüche. Wenn der Mikrocontroller genau dann neu startet, spricht das eher für Versorgung, Masseführung oder fehlende Entkopplung als für eine zufällige falsche Schleife im Code.

## Lösung zu Aufgabe 2

Sinnvoll sind zum Beispiel: VCC direkt am Mikrocontroller während des Motorstarts messen, Abblockkondensator nahe an VCC/GND setzen, Massewege von Motorstrom und Logikstrom sauberer führen, eine zusätzliche Pufferung an der Versorgung prüfen und die Motorstörung durch Diode, Treiber oder getrennte Versorgung entschärfen.

## Lösung zu Aufgabe 3

Eine gute Strategie lautet: Fehler reproduzieren, Versorgung am Controller messen, Masse- und Lastpfade prüfen, gezielt eine Änderung vornehmen und danach erneut beobachten. Der Code wird erst angepasst, wenn klar ist, dass die elektrische Grundlage stabil ist.
