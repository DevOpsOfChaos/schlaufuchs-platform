---
title: Debugging als Sichtbarkeitsproblem ruhig planen
description: Plane eine Mikrocontroller-Fehlersuche stufenweise über LED, UART und Messgerät und begründe die Reihenfolge deiner Diagnose.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - debugging-mit-led-uart-und-messgeraet-stufenweise-verstehen
  - debugging-als-sichtbarkeitsproblem-ruhig-planen
taskId: ELE-MCU-GEN-106
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - debugging
hintPoints:
  - Frage zuerst, welche Beobachtung noch fehlt.
  - Wähle das einfachste Werkzeug, das genau diese Frage beantworten kann.
selfCheckPoints:
  - Kannst du LED, UART und Messgerät als Diagnoseebenen trennen?
  - Kannst du deine Reihenfolge begründen?
transferIdeas:
  - Übertrage die Logik auf Timerprobleme, UART-Empfang oder ADC-Messfehler.
reflectionPrompt: "Welche Beobachtung würdest du in einem unbekannten System zuerst sichtbar machen?"
---

## Aufgabe 1: Drei Werkzeuge zuordnen

Ordne LED, UART und Messgerät jeweils der Frage zu, die sie besonders ruhig beantworten können.

## Aufgabe 2: Reihenfolge begründen

Ein Controller reagiert scheinbar nicht. Begründe in 4 bis 6 Sätzen, warum eine kurze LED-Diagnose oft vor einer komplexen Messung sinnvoll sein kann.

## Aufgabe 3: Mini-Plan schreiben

Formuliere einen dreistufigen Debug-Plan für diesen Fall:

- Taster soll eine LED steuern,
- zusätzlich soll später ein UART-Text erscheinen,
- aktuell passiert sichtbar nichts.

## Aufgabe 4: Fehlersatz korrigieren

Bewerte die Aussage:

> "Gutes Debugging heißt, sofort mit dem stärksten Messwerkzeug zu starten."

Erkläre kurz, warum diese Aussage zu grob ist.
