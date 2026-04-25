---
title: "Lösung – UART-Logausgaben für Fehlersuche strukturieren"
description: "Musterlösung zu uart-logausgaben für fehlersuche strukturieren."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - uart-debug-protokoll-und-log-format
taskId: "et-mc-v92-uart-log-format"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/uart-debug-protokoll-und-log-format"
tags:
  - elektrotechnik
  - mikrocontroller
  - uart
  - debugging
  - log
  - fehlersuche
draft: false
---

## Lösung zu Aufgabe 1

Eine bessere Zeile wäre zum Beispiel: <code>state=MEASURE event=adc value=517</code>. Sie ist kürzer, enthält Zustand, Ereignis und Wert und ist später leichter zu vergleichen.

## Lösung zu Aufgabe 2

Nützlich sind zum Beispiel Zustand, Ereignisname, Messwert, Fehlercode, Zeitmarke oder Anzahl gesendeter Bytes. Wichtig ist, dass die Informationen gleichförmig und knapp bleiben.

## Lösung zu Aufgabe 3

UART-Ausgaben benötigen Zeit und können Puffer füllen oder Wartezeiten erzeugen. Wenn im kritischen Ablauf zu viel gesendet wird, verändert das Timing und der Fehler kann verschwinden oder neu entstehen.
