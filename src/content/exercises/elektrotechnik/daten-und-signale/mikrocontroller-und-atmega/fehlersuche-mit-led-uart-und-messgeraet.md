---
title: "Mikrocontrollerfehler mit passenden Werkzeugen eingrenzen"
description: "Übe, LED, UART und Messgerät gezielt auszuwählen und eine ruhige Fehlersuchstrategie zu formulieren."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "fehlersuche-mit-led-uart-und-messgeraet"]
taskId: "et-mc-debugging-led-uart-messgeraet"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Werkzeug auswählen

Ein LED-Blinkprogramm funktioniert nicht. Ordne den folgenden Fragen jeweils ein passendes Werkzeug zu: LED-Debugging, UART-Ausgabe oder Messgerät.

1. Kommt das Programm überhaupt in die Hauptschleife?
2. Liegt am Pin tatsächlich eine Spannung an?
3. Welchen Zählerwert sieht das Programm gerade?
4. Ist die Versorgungsspannung stabil?

## Aufgabe 2: Reihenfolge begründen

Du hast gleichzeitig den Code geändert, den Taster umgesteckt und die Baudrate angepasst. Danach funktioniert das Projekt plötzlich.

Erkläre, warum diese Vorgehensweise für Fehlersuche ungünstig ist. Beschreibe eine bessere Reihenfolge.

## Aufgabe 3: Minimaltest formulieren

Ein Taster soll eine LED schalten. Es funktioniert aber nicht. Formuliere einen Minimaltest mit drei bis fünf Schritten, der die Ursache eingrenzt.
