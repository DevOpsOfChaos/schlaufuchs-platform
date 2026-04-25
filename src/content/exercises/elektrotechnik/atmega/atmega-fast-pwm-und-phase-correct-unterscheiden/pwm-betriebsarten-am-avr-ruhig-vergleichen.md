---
title: PWM-Betriebsarten am AVR ruhig vergleichen
description: Vergleiche Fast PWM und Phase Correct PWM am ATmega über Zählverlauf und Zeitbild.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-pwm
  - atmega-fast-pwm-und-phase-correct-unterscheiden
  - pwm-betriebsarten-am-avr-ruhig-vergleichen
taskId: ET-ATMEGA-PWM-209
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - pwm
  - timer
hintPoints:
  - Starte nicht beim Tastgrad, sondern beim Zählverlauf.
  - Trenne Symmetrie und bloße Signalhöhe bewusst.
selfCheckPoints:
  - Kannst du Fast PWM und Phase Correct über den Timerverlauf erklären?
  - Kannst du sagen, warum derselbe Tastgrad nicht alles erklärt?
transferIdeas:
  - Übertrage die Idee auf Lüftersteuerung, Motoransteuerung oder LED-Dimmung.
reflectionPrompt: "Was hättest du früher vorschnell als „doch eigentlich dasselbe“ gelesen?"
---

## Aufgabe 1

Beschreibe in eigenen Worten, wie der Timer bei **Fast PWM** zählt und wie er bei **Phase Correct PWM** zählt.

## Aufgabe 2

Erkläre in 3 bis 5 Sätzen, warum derselbe Tastgrad in beiden Modi nicht automatisch dasselbe Zeitbild bedeutet.

## Aufgabe 3

Ordne diese Aussagen dem passenden Modus zu:

- „Der Timer zählt hoch und startet dann neu.“
- „Der Timer zählt hoch und danach wieder herunter.“
- „Das Signal wirkt zeitlich symmetrischer.“
- „Die Periode ergibt sich direkter aus einem Aufwärtszählen.“

## Aufgabe 4

Ein Team sagt: „Wir haben doch in beiden Fällen ungefähr 50 Prozent Tastgrad, also ist die Wahl des PWM-Modus egal.“

Begründe, warum diese Aussage zu grob ist.

## Aufgabe 5

Schreibe einen kurzen Merksatz, in dem die Wörter **Zählverlauf**, **Symmetrie** und **PWM** alle sinnvoll vorkommen.
