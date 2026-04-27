---
title: "PWM und Tastverhältnis"
description: "Allgemeiner Überblick über Pulsweitenmodulation, Tastverhältnis und scheinbar analoge Wirkung digitaler Signale."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "pwm-und-tastverhaeltnis"
  - "ueberblick"
learningGoals:
  - "Du kennst PWM als schnelles Umschalten zwischen High und Low."
  - "Du kannst das Tastverhältnis als Anteil der Einschaltzeit einordnen."
  - "Du verstehst typische Anwendungen und Grenzen von PWM."
practiceIdeas: []
commonMistakes:
  - "PWM mit einer echten analogen Ausgangsspannung gleichzusetzen."
  - "Frequenz und Tastverhältnis zu verwechseln."
keyTakeaways:
  - "PWM erzeugt eine steuerbare mittlere Wirkung durch schnelles Schalten."
  - "Tastverhältnis und Frequenz bestimmen, wie das Signal wirkt und wahrgenommen wird."
recognizeSignals:
  - "Es geht um LED-Helligkeit, Motorleistung, Servos, Duty Cycle oder periodische Rechtecksignale."
selfCheckPoints:
  - "Kann ich erklären, was sich bei 25 %, 50 % und 75 % Tastverhältnis ändert?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "pwm"
  - "tastverhältnis"
draft: false
---

# PWM und Tastverhältnis

![Schaubild zu PWM, Pulsbreite und mittlerer Wirkung.](/schlaufuchs-platform/images/overviews/v148/pwm-und-tastverhaeltnis.svg)

*Das Schaubild verbindet Periode, Ein-Zeit und mittlere Wirkung einer PWM-Ausgabe.*


Pulsweitenmodulation, kurz PWM, ist ein Verfahren, bei dem ein digitales Signal schnell zwischen High und Low wechselt. Entscheidend ist nicht nur, dass geschaltet wird, sondern wie lange das Signal innerhalb einer Periode eingeschaltet bleibt. Dieser Anteil heißt Tastverhältnis oder Duty Cycle.

Ein Tastverhältnis von 50 Prozent bedeutet, dass das Signal die Hälfte der Zeit High und die andere Hälfte Low ist. Bei 25 Prozent ist die Einschaltzeit kürzer, bei 75 Prozent länger. Viele Verbraucher reagieren auf die mittlere Wirkung dieses schnellen Schaltens.

## Zweck

PWM wird verwendet, um mit digitalen Ausgängen scheinbar feinere Wirkungen zu erzielen. Eine LED kann heller oder dunkler wirken. Ein Motor kann mehr oder weniger Leistung erhalten. Mit Filterung kann aus PWM in manchen Anwendungen eine geglättete Spannung entstehen.

## Frequenz und Tastverhältnis

Die Frequenz beschreibt, wie oft die PWM-Periode pro Sekunde wiederholt wird. Das Tastverhältnis beschreibt den High-Anteil innerhalb einer Periode. Beide Größen sind verschieden. Eine hohe Frequenz kann Flackern vermeiden, ändert aber nicht automatisch das Tastverhältnis.

## Anwendungen

Bei LEDs nutzt PWM die Trägheit der Wahrnehmung. Bei Motoren beeinflusst die mittlere Leistung das Drehverhalten. Bei Servos ist die genaue Pulsbreite oft wichtiger als ein prozentuales Tastverhältnis. In Leistungsanwendungen sind Treiber, Freilaufpfade und Erwärmung wichtig.

## Abgrenzung

PWM ist nicht dasselbe wie ein echter Analogausgang. Das Signal bleibt digital und springt zwischen Pegeln. Nur die mittlere Wirkung oder eine nachgeschaltete Filterung kann analog erscheinen. Für empfindliche Mess- oder Audiosignale reicht eine einfache PWM oft nicht aus.

## Häufige Missverständnisse

Ein häufiger Fehler ist, PWM-Werte direkt als Spannung zu interpretieren. Ohne Last, Filter und Frequenzbetrachtung ist das zu grob. Ein anderer Fehler ist, sehr niedrige PWM-Frequenzen bei LEDs zu verwenden, was sichtbares Flackern verursachen kann.

## Kurz zusammengefasst

PWM steuert Wirkung durch schnelles digitales Schalten. Das Tastverhältnis bestimmt den Einschaltanteil, die Frequenz den zeitlichen Rhythmus. Zusammen ermöglichen sie viele einfache Steueraufgaben mit digitalen Pins.
