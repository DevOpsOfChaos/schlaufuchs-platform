---
title: "Grundlagen: 8-Bit- und 16-Bit-Timer"
description: "Allgemeiner Überblick über Timergröße, Zählbereich, Prescaler und Zeitbasis am Mikrocontroller."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - "mikrocontroller-und-atmega"
  - "timer-und-zeitbasis"
  - "8-bit-und-16-bit-timer"
learningGoals:
  - "Du ordnest das Thema ruhig in den elektrotechnischen Zusammenhang ein."
  - "Du unterscheidest Grundbegriffe, typische Teilaspekte und Grenzen."
  - "Du erkennst passende Detailseiten, Aufgaben und typische Fehlerquellen."
practiceIdeas:
  - "Lies zuerst die Überblicksseite und bearbeite danach eine passende Aufgabe."
  - "Markiere die wichtigsten Begriffe und erkläre sie mit eigenen Worten."
commonMistakes:
  - "Direkt mit Einzelfällen zu starten, ohne den allgemeinen Rahmen zu klären."
  - "Begriffe aus Schaltung, Code und Messung zu vermischen."
keyTakeaways:
  - "Eine gute Einordnung verbindet Begriff, Zweck, Zusammenhang und Abgrenzung."
recognizeSignals:
  - "Mehrere Detailseiten wirken ähnlich und brauchen einen gemeinsamen Rahmen."
  - "Eine Aufgabe setzt Begriffe voraus, die vorher allgemein geklärt werden sollten."
selfCheckPoints:
  - "Kann ich das Thema in zwei bis drei Sätzen allgemein erklären?"
  - "Kann ich typische Fehler oder Missverständnisse benennen?"
level: einfach
tags:
  - "elektrotechnik"
  - "timer"
  - "atmega"
  - "prescaler"
  - "zeitbasis"
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
