---
title: PWM und Tastverhältnis am AVR erklären
description: Erkläre die Grundidee von PWM über Zeitverhältnis, Frequenz und mittlere Wirkung.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - pwm-und-signalerzeugung
  - atmega-pwm-als-grundidee-verstehen
  - pwm-und-tastverhaeltnis-am-avr-erklaeren
taskId: ET-ATMEGA-PWM-209
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - pwm
  - timer
hintPoints:
  - Trenne Frequenz und Tastverhältnis bewusst.
  - Lies PWM zuerst als Zeitmuster und erst dann als Wirkung auf LED oder Motor.
selfCheckPoints:
  - Kannst du erklären, warum PWM digital bleibt?
  - Kannst du eine größere Ein-Zeit als größere mittlere Wirkung deuten?
transferIdeas:
  - Übertrage die Logik auf LED-Helligkeit oder Motoransteuerung.
reflectionPrompt: "Welchen Denkfehler würdest du machen, wenn du PWM sofort als Analogspannung bezeichnen würdest?"
---

Gegeben sind diese beiden PWM-Muster:

```text
Fall A
Ein | Aus | Aus | Aus
```

```text
Fall B
Ein | Ein | Ein | Aus
```

Die Frequenz sei in beiden Fällen gleich.

## Aufgabe 1

Erkläre, welcher Fall das größere Tastverhältnis hat.

## Aufgabe 2

Beschreibe in 2 bis 4 Sätzen, warum eine LED bei Fall B typischerweise heller wirken kann als bei Fall A.

## Aufgabe 3

Erkläre kurz, warum PWM trotzdem ein digitales Signal bleiben kann.

## Aufgabe 4

Jemand sagt:

> „Wenn die PWM heller wirkt, dann gibt der Pin eben mehr Spannung aus.“

Erkläre, warum diese Aussage zu grob ist.

## Aufgabe 5

Formuliere in einem Satz den Unterschied zwischen Frequenz und Tastverhältnis.
