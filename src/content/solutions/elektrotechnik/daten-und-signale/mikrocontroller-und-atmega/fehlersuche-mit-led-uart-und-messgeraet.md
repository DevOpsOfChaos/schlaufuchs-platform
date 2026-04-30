---
title: "Lösung – Mikrocontrollerfehler mit passenden Werkzeugen eingrenzen"
description: "Musterlösung zur Auswahl von LED-Debugging, UART-Ausgabe und Messgerät bei Mikrocontrollerfehlern."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "fehlersuche-mit-led-uart-und-messgeraet"]
taskId: "et-mc-debugging-led-uart-messgeraet"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/fehlersuche-mit-led-uart-und-messgeraet"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

1. Kommt das Programm überhaupt in die Hauptschleife? → LED-Debugging oder UART-Ausgabe. Eine einfache Status-LED reicht oft schon.
2. Liegt am Pin tatsächlich eine Spannung an? → Messgerät.
3. Welchen Zählerwert sieht das Programm gerade? → UART-Ausgabe.
4. Ist die Versorgungsspannung stabil? → Messgerät.

Die Werkzeuge beantworten unterschiedliche Fragen. LED und UART zeigen vor allem Programmsicht. Das Messgerät zeigt elektrische Realität.

## Lösung zu Aufgabe 2

Wenn Code, Tasterverdrahtung und Baudrate gleichzeitig geändert werden, ist der Erfolg nicht mehr eindeutig erklärbar. Man weiß danach nicht, welche Änderung wirklich geholfen hat.

Besser ist:

1. Versorgung und GND prüfen.
2. Tasterpegel elektrisch messen.
3. Minimalcode mit nur einem Eingang und einer LED testen.
4. Danach UART-Ausgabe hinzufügen.
5. Erst dann größere Programmlogik wieder aktivieren.

So bleibt jede Beobachtung einer Änderung zuordenbar.

## Lösung zu Aufgabe 3

Ein sinnvoller Minimaltest:

1. LED allein mit einem festen Blinkprogramm testen.
2. Tastereingang mit Pull-up beschalten und den Pegel mit dem Messgerät prüfen.
3. Im Code nur den Taster lesen und den LED-Zustand direkt davon abhängig machen.
4. Falls nötig, eine UART-Ausgabe für den gelesenen Tasterwert ergänzen.
5. Erst danach Entprellung oder Zustandsmaschine hinzufügen.

Der Minimaltest trennt LED, Taster, elektrische Pegel und Programmlogik voneinander.
