---
title: "Grundlagen: 8-Bit- und 16-Bit-Timer"
description: "Allgemeiner Überblick über Timergröße, Zählbereich, Prescaler und Zeitbasis am Mikrocontroller."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "timer-und-zeitbasis", "ueberblick", "grundlagen-8-bit-und-16-bit-timer"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
![Grundlagen: 8-Bit- und 16-Bit-Timer](/schlaufuchs-platform/images/overviews/v179/atmega-timer.svg)

Timer gehören zu den wichtigsten internen Bausteinen eines Mikrocontrollers. Sie zählen Takte, erzeugen Zeitbezüge und helfen bei wiederholbaren Abläufen. Der Unterschied zwischen 8-Bit- und 16-Bit-Timern betrifft vor allem den Zählbereich.

## Grundidee

Ein Timer zählt nicht „Sekunden“, sondern Schritte eines Takts. Wie schnell gezählt wird, hängt vom Systemtakt und oft von einem Prescaler ab. Der Prescaler teilt den Takt, damit der Timer langsamer zählt und längere Zeitfenster erreichbar werden.

## 8 Bit und 16 Bit

Ein 8-Bit-Timer kann typischerweise 256 verschiedene Zählstände darstellen. Ein 16-Bit-Timer hat deutlich mehr mögliche Zählstände. Dadurch kann er längere Zeiträume oder feinere Vergleichswerte abdecken.

Das bedeutet aber nicht automatisch, dass ein 16-Bit-Timer immer besser ist. Für einfache Blinkaufgaben, kurze Wartefenster oder einfache PWM kann ein 8-Bit-Timer völlig ausreichen.

## Wichtige Teilaspekte

- Zählbereich
- Prescaler
- Overflow
- Compare Match
- gewünschtes Zeitfenster
- benötigte Auflösung

## Typisches Missverständnis

Viele Lernende wählen den größeren Timer nur, weil er „mehr kann“. Sinnvoller ist die Frage: Welcher Timer deckt das benötigte Zeitfenster und die gewünschte Genauigkeit ruhig ab?

## Abgrenzung

Diese Seite erklärt die Einordnung. Detailseiten können danach konkrete Register, AVR-Namen, PWM-Modi oder Rechenwege behandeln.
