---
title: "Lösung – PWM-Tastverhältnis zeichnen und Wirkung erklären"
description: "Musterlösung zu PWM-Zeitbild, LED-Wirkung und Trennung von Frequenz und Tastverhältnis."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "pwm-tastverhaeltnis-und-mittelwert"]
taskId: "et-mc-pwm-duty-cycle"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/pwm-tastverhaeltnis-und-mittelwert"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Ein mögliches Textbild:

~~~text
25 %: HIGH ____ LOW ____________
50 %: HIGH ________ LOW ________
75 %: HIGH ____________ LOW ____
~~~

Wichtig ist: Je größer das Tastverhältnis, desto länger ist der High-Anteil innerhalb derselben Periode.

## Lösung zu Aufgabe 2

Der Pin ist zu jedem Zeitpunkt Low oder High. Bei 50 % PWM ist er nur ungefähr die Hälfte der Zeit High. Die LED und das Auge mitteln diese schnellen Wechsel. Darum wirkt die LED dunkler.

## Lösung zu Aufgabe 3

Ein höheres Tastverhältnis erhöht den High-Anteil und damit die mittlere Wirkung. Eine höhere Frequenz macht die Wechsel schneller. Solange das Tastverhältnis gleich bleibt, bleibt der Zeitanteil von High und Low grundsätzlich gleich.
