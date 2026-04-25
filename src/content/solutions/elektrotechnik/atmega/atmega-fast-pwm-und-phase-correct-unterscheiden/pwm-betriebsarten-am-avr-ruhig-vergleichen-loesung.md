---
title: Musterlösung – PWM-Betriebsarten am AVR ruhig vergleichen
description: Musterlösung zur Aufgabe ET-ATMEGA-PWM-209.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-pwm
  - atmega-fast-pwm-und-phase-correct-unterscheiden
  - pwm-betriebsarten-am-avr-ruhig-vergleichen-loesung
taskId: ET-ATMEGA-PWM-209
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-fast-pwm-und-phase-correct-unterscheiden/pwm-betriebsarten-am-avr-ruhig-vergleichen.md
tags:
  - elektrotechnik
  - atmega
  - pwm
  - loesung
draft: false
---

## Aufgabe 1

Bei **Fast PWM** zählt der Timer typischerweise nur aufwärts bis zum oberen Wert und startet dann wieder neu. Bei **Phase Correct PWM** zählt der Timer aufwärts und danach wieder abwärts. Genau dieser Unterschied prägt das Zeitbild des PWM-Signals.

## Aufgabe 2

Der Tastgrad beschreibt nur das Verhältnis von Ein- zu Aus-Zeit. Er beschreibt aber nicht allein, wie diese Zeiten innerhalb der Periode verteilt sind. Bei Fast PWM entsteht das Signal aus einem anderen Zählverlauf als bei Phase Correct PWM. Deshalb können zwei Signale mit ähnlichem Tastgrad dennoch unterschiedlich eingeordnet werden.

## Aufgabe 3

- „Der Timer zählt hoch und startet dann neu.“ → **Fast PWM**
- „Der Timer zählt hoch und danach wieder herunter.“ → **Phase Correct PWM**
- „Das Signal wirkt zeitlich symmetrischer.“ → **Phase Correct PWM**
- „Die Periode ergibt sich direkter aus einem Aufwärtszählen.“ → **Fast PWM**

## Aufgabe 4

Die Aussage ist zu grob, weil der PWM-Modus mehr bestimmt als nur den ungefähren Tastgrad. Auch der Zählverlauf des Timers und die zeitliche Symmetrie gehören zur technischen Einordnung. Gerade deshalb ist die Moduswahl nicht bloß eine Namensfrage.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Bei PWM entscheidet der Zählverlauf des Timers mit darüber, wie symmetrisch das Signal wirkt.
