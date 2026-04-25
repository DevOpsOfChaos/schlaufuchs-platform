---
title: PWM-Frequenz und Tastverhältnis ruhig trennen
description: Trenne Frequenz und Duty Cycle am AVR sauber und erkläre, warum gleiches Tastverhältnis nicht automatisch gleiches Zeitverhalten bedeutet.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitverhalten
  - atmega-pwm-frequenz-und-tastverhaeltnis-trennen
  - pwm-frequenz-und-tastverhaeltnis-ruhig-trennen
taskId: ET-ATMEGA-TIMER-307
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pwm
hintPoints:
  - Frage zuerst nach der Grundperiode und erst dann nach dem Ein-Anteil.
  - Lies eine PWM nicht sofort als Helligkeit, sondern als Zeitmuster.
selfCheckPoints:
  - Kannst du Frequenz und Tastverhältnis auseinanderhalten?
  - Kannst du erklären, warum zwei Signale mit 50 Prozent Duty Cycle unterschiedlich wirken können?
transferIdeas:
  - Übertrage die Logik auf LED-Dimmen, Motorsteuerung und einfache Summer-Ansteuerung.
reflectionPrompt: "Warum hilft das Wort „Zeitverhalten“ oft mehr als das Wort „Helligkeit“?"
---

## Aufgabe 1: Zwei Begriffe trennen

Erkläre in 2 bis 4 Sätzen den Unterschied zwischen PWM-Frequenz und Tastverhältnis.

## Aufgabe 2: Gleiches Tastverhältnis, anderes Signal

Warum können zwei PWM-Signale mit jeweils `50 %` Tastverhältnis trotzdem zeitlich verschieden wirken?

## Aufgabe 3: Fehlerbild deuten

Jemand sagt: „Ich habe den Duty Cycle geändert, also habe ich auch die Frequenz geändert.“

Erkläre, warum diese Aussage fachlich zu grob ist.

## Aufgabe 4: Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Periode**, **Frequenz** und **Tastverhältnis** alle sinnvoll vorkommen.
