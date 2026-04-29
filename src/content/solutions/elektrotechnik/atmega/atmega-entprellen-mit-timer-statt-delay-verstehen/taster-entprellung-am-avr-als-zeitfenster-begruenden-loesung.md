---
title: "Musterlösung – Taster-Entprellung am AVR als Zeitfenster begründen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-REAKT-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-entprellen-mit-timer-statt-delay-verstehen", "taster-entprellung-am-avr-als-zeitfenster-begruenden"]
taskId: "ET-ATMEGA-REAKT-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-entprellen-mit-timer-statt-delay-verstehen/taster-entprellung-am-avr-als-zeitfenster-begruenden.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Ein Taster kann beim Umschalten kurz mehrere schnelle Pegelwechsel liefern. Ohne Entprellung wird das vom Programm leicht als mehrere Betätigungen statt als einen einzigen Tastendruck gelesen.

### Aufgabe 2

Bei einer Delay-Entprellung wird nach einer Erkennung einfach kurz gewartet. Bei einer zeitgestützten Entprellung prüft das Programm ruhiger, ob der Zustand über eine gewisse Zeit stabil geblieben ist. Genau diese zweite Denkweise blockiert das restliche Programm oft weniger.

### Aufgabe 3

Wenn der AVR gleichzeitig noch blinken und UART empfangen soll, hält ein blockierendes Delay die Hauptschleife unnötig an. Andere Aufgaben reagieren dann verspätet oder ruckartig. Eine zeitgestützte Entprellung hält die Struktur meist reaktiver.

### Aufgabe 4

Ein stabiles Zeitfenster bedeutet, dass ein neuer Tastenzustand nicht sofort als gültig übernommen wird, sondern erst dann, wenn er über eine kleine Zeitspanne bestehen bleibt. Genau dadurch wird aus einem flatternden Umschaltmoment ein ruhiger, bestätigter Zustand.

### Aufgabe 5

Eine mögliche Entscheidungsregel lautet:

> Sobald während der Entprellzeit noch andere Aufgaben sinnvoll weiterlaufen sollen, ist zeitgestütztes Entprellen am AVR oft ruhiger als ein starres Delay.
