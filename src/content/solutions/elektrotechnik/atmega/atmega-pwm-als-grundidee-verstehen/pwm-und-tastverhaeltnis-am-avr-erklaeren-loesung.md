---
title: "Musterlösung – PWM und Tastverhältnis am AVR erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-PWM-209."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-pwm-als-grundidee-verstehen", "pwm-und-tastverhaeltnis-am-avr-erklaeren"]
taskId: "ET-ATMEGA-PWM-209"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-pwm-als-grundidee-verstehen/pwm-und-tastverhaeltnis-am-avr-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

**Fall B** hat das größere Tastverhältnis, weil der Ein-Zustand innerhalb derselben Periodenstruktur länger anhält als in Fall A.

### Aufgabe 2

Bei Fall B ist der Ausgang innerhalb jeder Periode länger im aktiven Zustand. Dadurch ist die mittlere Wirkung größer. Eine LED kann deshalb heller wirken, obwohl der Pin weiterhin nur zwischen zwei digitalen Zuständen umschaltet.

### Aufgabe 3

PWM kann digital bleiben, weil der Ausgang nur zwischen niedrig und hoch wechselt. Die Wirkung entsteht aus dem zeitlichen Verhältnis dieser Zustände, nicht daraus, dass der Pin eine echte stufenlose Analogspannung erzeugt.

### Aufgabe 4

Die Aussage ist zu grob, weil PWM nicht einfach „mehr Spannung ausgibt“, sondern die Ein-Zeit innerhalb der Periode verändert. Der Pegel am Pin bleibt digital. Geändert wird das zeitliche Verhältnis, aus dem sich eine andere mittlere Wirkung ergibt.

### Aufgabe 5

Die **Frequenz** beschreibt, wie oft sich das gesamte PWM-Muster pro Sekunde wiederholt; das **Tastverhältnis** beschreibt, welcher Anteil einer einzelnen Periode im Ein-Zustand liegt.
