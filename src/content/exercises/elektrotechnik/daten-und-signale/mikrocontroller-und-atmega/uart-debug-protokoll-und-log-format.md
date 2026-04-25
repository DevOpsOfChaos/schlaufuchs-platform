---
title: "UART-Logausgaben für Fehlersuche strukturieren"
description: "Übe, unübersichtliche Debugtexte in kurze, auswertbare Logzeilen umzubauen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - uart-debug-protokoll-und-log-format
selfCheckPoints:
  - "Habe ich Zustand, Ereignis und Wert getrennt?"
  - "Habe ich unnötig lange Texte vermieden?"
  - "Habe ich Timing-Einfluss von UART bedacht?"
taskId: "et-mc-v92-uart-log-format"
tags:
  - elektrotechnik
  - mikrocontroller
  - uart
  - debugging
  - log
  - fehlersuche
hintPoints:
  - "Ein festes Format hilft mehr als schöne Sätze."
  - "Nicht jeder Schleifendurchlauf braucht eine Ausgabe."
  - "UART-Senden kostet Zeit."
transferIdeas:
  - "Übertrage das Logformat auf ADC- und PWM-Debugging."
  - "Entwirf ein zweites Format für Fehlercodes."
reflectionPrompt: "Welche Information in einem Log hilft dir wirklich beim Wiederfinden eines Fehlers?"
level: einfach
draft: false
---

## Aufgabe 1: Situation lesen

Eine Debugausgabe lautet: „Jetzt ist wieder etwas mit dem Sensor passiert und der Wert ist komisch“. Verbessere sie zu einer kurzen strukturierten Logzeile.

## Aufgabe 2: Entscheidung begründen

Nenne drei Informationen, die in einem UART-Log für eine Sensor-Zustandsmaschine nützlich sein können.

## Aufgabe 3: Prüfung formulieren

Erkläre, warum zu viele UART-Ausgaben ein Mikrocontrollerprogramm selbst verändern können.
