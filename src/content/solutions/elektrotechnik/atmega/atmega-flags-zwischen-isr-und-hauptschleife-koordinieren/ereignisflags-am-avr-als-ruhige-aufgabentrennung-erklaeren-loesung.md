---
title: "Musterlösung – Ereignisflags am AVR als ruhige Aufgabentrennung erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-REAKT-302."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-flags-zwischen-isr-und-hauptschleife-koordinieren", "ereignisflags-am-avr-als-ruhige-aufgabentrennung-erklaeren"]
taskId: "ET-ATMEGA-REAKT-302"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-flags-zwischen-isr-und-hauptschleife-koordinieren/ereignisflags-am-avr-als-ruhige-aufgabentrennung-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Das Flag `daten_neu` markiert, dass ein Ereignis stattgefunden hat und dass die Hauptschleife später etwas dazu verarbeiten soll. Es ist also eine ruhige Übergabe zwischen ISR und Hauptschleife.

### Aufgabe 2

Wenn die ISR nur das Flag setzt, bleibt sie kurz und klar. Die eigentliche Verarbeitung kann später in der Hauptschleife ruhiger ablaufen, dort ist meist mehr Zeit und mehr Kontext für längere Logik vorhanden.

### Aufgabe 3

Eine ISR reagiert auf ein Ereignis und sollte deshalb möglichst knapp bleiben. Wenn dort zu viel Fachlogik landet, wird der Ablauf schnell unübersichtlich und unnötig schwer steuerbar. Genau deshalb ist die Hauptschleife oft der ruhigere Ort für längere Verarbeitung.

### Aufgabe 4

Die ISR setzt das Flag. Die Hauptschleife prüft es, wertet das Ereignis aus und setzt das Flag danach wieder zurück. Genau diese Rollen sollten klar verteilt bleiben.

### Aufgabe 5

Eine mögliche Entscheidungsregel lautet:

> Wenn ein Ereignis schnell markiert werden soll, die eigentliche Verarbeitung aber nicht sofort in der ISR passieren muss, ist ein Flag zwischen ISR und Hauptschleife oft die ruhigere AVR-Struktur.
