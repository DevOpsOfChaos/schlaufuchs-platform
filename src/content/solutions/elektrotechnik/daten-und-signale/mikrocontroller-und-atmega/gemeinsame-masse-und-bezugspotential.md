---
title: "Lösung – Gemeinsame Masse bei Modulen und Sensoren prüfen"
description: "Musterlösung zu „Gemeinsame Masse bei Modulen und Sensoren prüfen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "gemeinsame-masse-und-bezugspotential"]
taskId: "et-mc-v94-gemeinsame-masse"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/gemeinsame-masse-und-bezugspotential"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der Eingang misst die Signalspannung relativ zu seiner eigenen Masse. Ohne gemeinsamen Bezug ist unklar, was die Sensorspannung für den Controller bedeutet. Dadurch können zufällige oder scheinbar falsche Werte entstehen.

## Lösung zu Aufgabe 2

Gemeinsame Masse bedeutet gemeinsamer Bezugspunkt für Signale. Gemeinsame Versorgung bedeutet, dass Baugruppen aus derselben Energiequelle gespeist werden. Manchmal ist nur gemeinsame Masse nötig, während die Leistung aus getrennten Quellen kommt.

## Lösung zu Aufgabe 3

Die Masse der Servo-Versorgung und die Masse des ATmega müssen verbunden sein. Nur dann kann der Servo das Steuersignal als gültigen High- oder Low-Pegel interpretieren.
