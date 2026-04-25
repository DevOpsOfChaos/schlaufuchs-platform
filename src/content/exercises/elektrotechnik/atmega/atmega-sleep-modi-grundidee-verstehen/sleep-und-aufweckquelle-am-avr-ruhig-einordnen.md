---
title: Sleep und Aufweckquelle am AVR ruhig einordnen
description: Erkläre an kleinen Mikrocontroller-Fällen, warum Sleep am AVR eine Energiestrategie ist und nicht bloß Stillstand.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - robustheit-und-fehlersicherheit
  - atmega-sleep-modi-grundidee-verstehen
  - sleep-und-aufweckquelle-am-avr-ruhig-einordnen
taskId: ET-ATMEGA-SLEEP-301
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - sleep
  - avr
hintPoints:
  - Trenne Aktivphase, Wartephase und Aufweckquelle bewusst.
  - Lies Sleep nicht als „aus“, sondern als geordnete Energiestrategie.
selfCheckPoints:
  - Kannst du erklären, warum der Controller nicht ständig aktiv sein muss?
  - Kannst du eine sinnvolle Aufweckquelle mitdenken?
transferIdeas:
  - Übertrage die Logik auf Sensorknoten, Messgeräte oder Batteriebetrieb.
reflectionPrompt: "Welche Leitfrage verhindert bei Sleep-Modi die meisten Denkfehler?"
---

## Aufgabe 1

Ein AVR misst nur alle fünf Sekunden einen Sensorwert.

Erkläre, warum zwischen zwei Messungen ein Sleep-Modus sinnvoll sein kann.

## Aufgabe 2

Warum wäre die Aussage „Sleep bedeutet einfach aus“ fachlich zu grob?

## Aufgabe 3

Nenne zwei typische Arten von Aufweckquellen und erkläre kurz, warum sie zum Sleep-Gedanken dazugehören.

## Aufgabe 4

Schreibe eine kurze Merkhilfe auf, mit der du Aktivphase, Wartephase und Aufweckquelle sauber trennst.
