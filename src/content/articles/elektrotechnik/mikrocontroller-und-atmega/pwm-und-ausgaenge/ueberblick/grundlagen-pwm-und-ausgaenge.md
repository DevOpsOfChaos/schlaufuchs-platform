---
title: "Grundlagen: PWM und Ausgänge"
description: "Allgemeiner Überblick über Pulsweitenmodulation, Tastverhältnis und die Wirkung digitaler Ausgänge."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "pwm-und-ausgaenge", "ueberblick", "grundlagen-pwm-und-ausgaenge"]
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
## Begriff

**PWM** steht für Pulsweitenmodulation. Dabei wird ein digitaler Ausgang schnell ein- und ausgeschaltet. Entscheidend ist nicht nur, dass der Ausgang High oder Low ist, sondern wie lange er innerhalb eines Zeitfensters High bleibt.

![PWM und Ausgänge](/schlaufuchs-platform/images/overviews/elektrotechnik/pwm-und-ausgaenge.svg)

## Tastverhältnis

Das Tastverhältnis beschreibt den Anteil der High-Zeit an einer Periode. Bei 50 Prozent ist der Ausgang ungefähr genauso lange High wie Low. Bei 10 Prozent ist er nur kurz High, bei 90 Prozent fast die ganze Zeit.

## Warum PWM nützlich ist

PWM wird oft genutzt, wenn ein digitaler Ausgang eine scheinbar abgestufte Wirkung erzeugen soll. Typische Beispiele sind LED-Helligkeit, Motordrehzahl oder einfache Leistungssteuerung. Die Wirkung entsteht über das zeitliche Mittel, nicht dadurch, dass der Pin eine echte Analogspannung erzeugt.

## Frequenz und Wirkung

Neben dem Tastverhältnis ist auch die Frequenz wichtig. Bei LEDs kann eine zu niedrige Frequenz flackern. Bei Motoren kann sie Geräusche oder unruhiges Verhalten erzeugen. Bei Messungen muss man wissen, ob man den momentanen Pegel oder den zeitlichen Mittelwert betrachtet.

## Häufige Missverständnisse

PWM ist keine echte Analogausgabe. Außerdem bedeutet ein größeres Tastverhältnis nicht in jeder Schaltung automatisch „besser“. Last, Treiber, Frequenz und thermische Grenzen müssen mitgedacht werden.

## Abgrenzung

Diese Überblicksseite erklärt PWM als Grundprinzip. Detailseiten können Timerregister, Prescaler, Compare-Werte, Motoransteuerung oder Filterung behandeln.

<div class="note-panel">
  <p><strong>Merke:</strong> PWM steuert Wirkung über Zeitanteile. Der Ausgang bleibt elektrisch digital.</p>
</div>
