---
title: "Lösung – Uploadfehler zwischen Bootloader und ISP einordnen"
description: "Musterlösung zu „Uploadfehler zwischen Bootloader und ISP einordnen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "bootloader-isp-und-uploadfehler"]
taskId: "et-mc-v93-upload"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/bootloader-isp-und-uploadfehler"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Beim Bootloader-Upload nimmt ein bereits vorhandenes kleines Programm im Controller die Daten entgegen. ISP programmiert den Flash über Programmiersignale direkt.

## Lösung zu Aufgabe 2

Möglicherweise ist noch kein Bootloader aufgespielt oder die Takt-/Fuse-Konfiguration passt nicht zum erwarteten Boardprofil.

## Lösung zu Aufgabe 3

Sinnvolle Prüfpunkte sind Versorgung und gemeinsame Masse, korrekte Resetleitung, richtiger Programmierweg sowie Taktquelle und Verdrahtung der Programmiersignale.
