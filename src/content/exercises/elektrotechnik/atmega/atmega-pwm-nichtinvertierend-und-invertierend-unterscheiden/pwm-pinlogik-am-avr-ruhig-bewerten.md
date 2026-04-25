---
title: PWM-Pinlogik am AVR ruhig bewerten
description: Begründe, warum derselbe Compare-Wert bei nichtinvertierender und invertierender PWM am ATmega unterschiedlich wirkt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-pwm
  - atmega-pwm-nichtinvertierend-und-invertierend-unterscheiden
  - pwm-pinlogik-am-avr-ruhig-bewerten
taskId: ET-ATMEGA-PWM-210
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - pwm
  - compare
hintPoints:
  - Trenne Vergleichspunkt im Timer und sichtbare Reaktion am Pin.
  - Frage nicht nur „welcher Wert?“, sondern auch „welche Logik?“.
selfCheckPoints:
  - Kannst du nichtinvertierende und invertierende PWM sicher unterscheiden?
  - Kannst du erklären, warum derselbe OCR-Wert verschieden wirken kann?
transferIdeas:
  - Übertrage die Idee auf LED-Treiber, aktive-Low-Ausgänge oder Leistungstreiber.
reflectionPrompt: "Was war für dich schwieriger zu trennen: der Zeitpunkt im Timer oder die sichtbare Logik am Pin?"
---

## Aufgabe 1

Erkläre in eigenen Worten den Unterschied zwischen **nichtinvertierender** und **invertierender** PWM am AVR.

## Aufgabe 2

Begründe in 3 bis 5 Sätzen, warum derselbe OCR-Wert nicht automatisch dieselbe sichtbare High-Zeit am Ausgangspin bedeutet.

## Aufgabe 3

Ordne diese beiden Aussagen jeweils richtig ein:

- „Der Timer vergleicht intern an derselben Stelle.“
- „Das Signal am Pin wirkt trotzdem gegensinnig.“

## Aufgabe 4

Ein Team sagt:

> „Mehr OCR heißt immer mehr High-Zeit.“

Erkläre, warum diese Aussage nur unter einer stillen Zusatzannahme stimmt.

## Aufgabe 5

Schreibe einen Merksatz, in dem die Wörter **Timer**, **Pinlogik** und **OCR** alle sinnvoll vorkommen.
