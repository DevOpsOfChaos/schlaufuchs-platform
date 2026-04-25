---
title: Watchdog als Sicherheitsnetz ruhig erklären
description: Erkläre an kleinen AVR-Fällen, warum der Watchdog eher Überwachung als normales Zeitmessen bedeutet.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - robustheit-und-fehlersicherheit
  - atmega-watchdog-grundidee-verstehen
  - watchdog-als-sicherheitsnetz-ruhig-erklaeren
taskId: ET-ATMEGA-WDT-301
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - watchdog
  - avr
hintPoints:
  - Trenne Zeitmessung und Überwachung bewusst.
  - Lies den Reset hier als Schutzreaktion und nicht vorschnell als Hardwaredefekt.
selfCheckPoints:
  - Kannst du Timer und Watchdog sauber unterscheiden?
  - Kannst du erklären, warum ein Reset in diesem Fall sinnvoll sein kann?
transferIdeas:
  - Übertrage die Logik auf robuste Sensorknoten oder Steuergeräte.
reflectionPrompt: "Welche Leitfrage verhindert beim Watchdog die meisten Denkfehler?"
---

## Aufgabe 1

Ein AVR-Hauptprogramm soll regelmäßig eine Lebenszeichen-Funktion aufrufen. Bleibt es in einem Fehlerfall hängen, passiert das nicht mehr.

Erkläre, warum genau hier ein Watchdog sinnvoll ist.

## Aufgabe 2

Warum wäre die Aussage „Der Watchdog ist einfach ein Timer für Verzögerungen“ fachlich zu grob?

## Aufgabe 3

Beschreibe in 2 bis 4 Sätzen, was ein Watchdog-Reset in so einem Fall bedeutet.

## Aufgabe 4

Schreibe eine kurze Merkhilfe auf, mit der du Timer und Watchdog zuerst auseinanderhältst.
