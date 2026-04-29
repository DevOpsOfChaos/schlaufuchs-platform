---
title: "Watchdog-Reaktionsarten am AVR ruhig einordnen"
description: "Unterscheide am ATmega zwischen Watchdog-Reset und Watchdog-Interrupt als Reaktionsform."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-watchdog-reset-und-interrupt-unterscheiden", "watchdog-reaktionsarten-am-avr-ruhig-einordnen"]
taskId: "ET-ATMEGA-WDT-211"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1

Erkläre in eigenen Worten den Unterschied zwischen **Watchdog-Reset** und **Watchdog-Interrupt** am AVR.

## Aufgabe 2

Begründe in 3 bis 5 Sätzen, warum der Satz „Der Watchdog startet den Controller neu“ fachlich oft zu grob ist.

## Aufgabe 3

Ordne diese Situationen eher **Reset** oder eher **Interrupt** zu:

- Das System soll nach einem Hänger möglichst direkt in einen definierten Neustart gehen.
- Vor einer harten Reaktion soll noch eine ISR einen Zustand markieren oder ein System wecken.

## Aufgabe 4

Ein Team möchte einen AVR aus dem Sleep holen und spricht vom „Watchdog-Reset“.

Erkläre, warum hier die eigentliche Reaktionsart sauberer gelesen werden sollte.

## Aufgabe 5

Schreibe einen Merksatz, in dem die Wörter **Überwachung**, **Reaktion** und **Neustart** alle sinnvoll vorkommen.
