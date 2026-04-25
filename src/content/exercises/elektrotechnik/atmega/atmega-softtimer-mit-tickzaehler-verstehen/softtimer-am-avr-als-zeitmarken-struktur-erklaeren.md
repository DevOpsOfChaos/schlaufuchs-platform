---
title: Softtimer am AVR als Zeitmarken-Struktur erklären
description: Erkläre, wie ein periodischer Tick am ATmega als Softtimer für mehrere Zeitaufgaben genutzt werden kann.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstruktur-und-reaktivitaet
  - atmega-softtimer-mit-tickzaehler-verstehen
  - softtimer-am-avr-als-zeitmarken-struktur-erklaeren
taskId: ET-ATMEGA-PRG-212
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - softtimer
  - reaktivitaet
hintPoints:
  - Trenne Tickquelle, Zähler und Zeitmarken-Aufgaben.
  - Lies den Softtimer als Software-Struktur und nicht als neues Hardwaremodul.
selfCheckPoints:
  - Kannst du erklären, warum ein Tickzähler mehrere Aufgaben tragen kann?
  - Kannst du Delay und Zeitmarken logisch unterscheiden?
transferIdeas:
  - Übertrage die Logik auf Blinker, zyklische Messung oder Entprellen ohne Blockieren.
reflectionPrompt: "Warum hilft ein gemeinsamer Tick oft mehr als viele kleine Delay-Schleifen?"
---

## Aufgabe 1: Tickquelle benennen

Erkläre kurz, welche Rolle der Hardware-Timer und welche Rolle der Tickzähler im Softtimer-Modell spielen.

## Aufgabe 2: Zwei Aufgaben einordnen

Warum kann ein einziger Tickzähler gleichzeitig für zwei Blinkaufgaben genutzt werden?

## Aufgabe 3: Delay vergleichen

Beschreibe in 2 bis 4 Sätzen, warum ein Softtimer mit Zeitmarken reaktiver ist als zwei blockierende Delay-Schleifen.

## Aufgabe 4: Denkfehler korrigieren

Jemand sagt: „Für jede Zeitaufgabe brauche ich einen eigenen Hardware-Timer.“

Formuliere eine ruhigere fachliche Antwort.
