---
title: "Lösung – Störungen auf langen Leitungen systematisch prüfen"
description: "Musterlösung zu „Störungen auf langen Leitungen systematisch prüfen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "lange-leitungen-und-stoerungen-erkennen"]
taskId: "et-mc-v93-stoerungen"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/lange-leitungen-und-stoerungen-erkennen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Mögliche Verdächtige sind ein zu schwacher oder fehlender Pull-up/Pull-down, eingekoppelte Störungen, schlechte Masseführung oder Prellen/Störimpulse auf der langen Leitung.

## Lösung zu Aufgabe 2

Signale werden als Spannung gegenüber einem Bezugspunkt gelesen. Ohne sauberen gemeinsamen Massebezug können Sender und Empfänger denselben Pegel unterschiedlich interpretieren.

## Lösung zu Aufgabe 3

Man kann die Leitung wieder stark verkürzen, den Eingang mit definiertem Pegel testen, die Leitung messen oder eine einfache Entprell-/Filterlogik nur als Diagnose ergänzen.
