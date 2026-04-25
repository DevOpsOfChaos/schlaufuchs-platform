---
title: Sleep und Weckquellen am AVR ruhig planen
description: Plane am ATmega einen Sleep-Fall immer zusammen mit einer passenden Wake-up-Quelle.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-reaktivitaet
  - atmega-sleep-und-wakeup-quellen-verstehen
  - sleep-und-weckquellen-am-avr-ruhig-planen
taskId: ET-ATMEGA-SLEEP-214
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - sleep
  - wakeup
hintPoints:
  - Frage nicht nur, warum geschlafen wird, sondern auch, wodurch die Rückkehr erfolgen soll.
  - Trenne Wake-up und Reset bewusst.
selfCheckPoints:
  - Kannst du Sleep und Weckquelle als zusammengehöriges Konzept erklären?
  - Kannst du Timer, Watchdog und externe Ereignisse als Weckquellen einordnen?
transferIdeas:
  - Übertrage die Logik auf batteriebetriebene Messgeräte, Funkknoten oder Tastergeräte.
reflectionPrompt: "Was würdest du eher vergessen – den Schlafmodus oder den Weg zurück?"
---

## Aufgabe 1

Erkläre in eigenen Worten, warum ein Sleep-Modus am AVR ohne passende Wake-up-Quelle didaktisch unvollständig beschrieben wäre.

## Aufgabe 2

Ordne diese Fälle jeweils einer plausiblen Wake-up-Quelle zu:

- Ein Taster soll das Gerät wieder aktivieren.
- Das Gerät soll nach einer Wartezeit selbst wieder aktiv werden.
- Ein internes Zeitereignis soll kurz prüfen, ob etwas zu tun ist.

## Aufgabe 3

Begründe in 3 bis 5 Sätzen, warum **Wake-up** und **Reset** nicht dieselbe Geschichte erzählen.

## Aufgabe 4

Ein Team sagt:

> „Wir schicken den AVR in den Sleep. Wie er wiederkommt, sehen wir später.“

Erkläre, warum das fachlich keine ruhige Planung ist.

## Aufgabe 5

Schreibe einen Merksatz, in dem die Wörter **Sleep**, **Wake-up** und **Energiesparen** alle sinnvoll vorkommen.
