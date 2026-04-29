---
title: "Musterlösung – Sleep und Weckquellen am AVR ruhig planen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-SLEEP-214."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-sleep-und-wakeup-quellen-verstehen", "sleep-und-weckquellen-am-avr-ruhig-planen"]
taskId: "ET-ATMEGA-SLEEP-214"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-sleep-und-wakeup-quellen-verstehen/sleep-und-weckquellen-am-avr-ruhig-planen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Ein Sleep-Modus beschreibt nur die Ruhephase des Systems. Ohne passende Wake-up-Quelle bleibt aber offen, wodurch der AVR wieder reagieren darf. Genau deshalb gehören Energiesparen und Rückkehrweg didaktisch zusammen.

## Aufgabe 2

- Taster aktiviert das Gerät wieder → externer Taster oder Interrupt
- Gerät wird nach Wartezeit selbst wieder aktiv → Timer oder Watchdog
- internes Zeitereignis prüft regelmäßig → Timer- oder Watchdog-basierte Wecklogik

## Aufgabe 3

Wake-up bedeutet, dass der AVR aus einem Schlafzustand zurückkehrt. Reset bedeutet dagegen einen Neustart des Systems. Beide Vorgänge können nach außen wie „jetzt reagiert der Controller wieder“ aussehen, sind fachlich aber klar verschieden.

## Aufgabe 4

Die Aussage ist unruhig, weil sie nur die Ruhephase plant, aber nicht die Rückkehr. Ein Sleep-Konzept ohne Weckquelle ist technisch unvollständig. Erst der Rückkehrweg macht den Schlafmodus praktisch sinnvoll.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Sleep dient dem Energiesparen, wird aber erst mit einer passenden Wake-up-Quelle zu einem brauchbaren Konzept.
