---
title: "Atomare 16-Bit-Zugriffe am AVR sauber begründen"
description: "Begründe, warum gemeinsame 16-Bit-Werte zwischen Hauptprogramm und ISR am AVR eine eigene Schutzfrage haben."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-atomare-zugriffe-auf-16-bit-werte-verstehen", "atomare-16-bit-zugriffe-am-avr-sauber-begruenden"]
taskId: "ET-ATMEGA-ISR-403"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "fortgeschritten"
draft: false
---
## Aufgabe 1: Problemart benennen

Erkläre in 3 bis 5 Sätzen, warum ein gemeinsamer 16-Bit-Wert zwischen Hauptprogramm und ISR problematischer sein kann als ein gemeinsamer 8-Bit-Wert.

## Aufgabe 2: volatile kritisch einordnen

Bewerte diese Aussage:

> „Wenn die Variable volatile ist, ist bei 16-Bit-Zugriffen schon alles sauber gelöst.“

Erkläre kurz, warum diese Aussage zu grob ist.

## Aufgabe 3: Mischwert erklären

Beschreibe in eigenen Worten, wie ein gelesener Wert aus zwei Zeitpunkten zusammengesetzt wirken kann.

## Aufgabe 4: Mini-Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **volatile**, **atomar** und **Zugriffsfenster** alle sinnvoll vorkommen.
