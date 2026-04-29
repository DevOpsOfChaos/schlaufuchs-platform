---
title: "Musterlösung – I²C-Leitungslogik mit Pull-ups ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-I2C-201."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-i2c-open-drain-und-pullup-verstehen", "i2c-leitungslogik-mit-pullups-ruhig-erklaeren"]
taskId: "ET-ATMEGA-I2C-201"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-twi-i2c-open-drain-und-pullup-verstehen/i2c-leitungslogik-mit-pullups-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

LOW entsteht auf dem I²C-Bus typischerweise aktiv, weil ein Teilnehmer die Leitung nach unten zieht. HIGH entsteht dagegen meist nicht durch aktives Treiben eines Teilnehmers, sondern dadurch, dass niemand LOW zieht und die Pull-up-Widerstände die Leitung anheben. Genau deshalb sind HIGH und LOW auf dem Bus elektrisch nicht einfach spiegelbildlich.

## Aufgabe 2

Ohne Pull-up-Widerstände gäbe es keinen sauberen HIGH-Ruhezustand. Die Leitung würde nach dem Loslassen nicht zuverlässig auf HIGH zurückkehren. Pull-ups sind daher Teil der Busfunktion und nicht bloß Zubehör.

## Aufgabe 3

Bei Push-Pull-Ausgängen könnte ein Teilnehmer HIGH und ein anderer gleichzeitig LOW treiben, was zu einem harten Konflikt führt. Beim I²C-Bus ziehen Teilnehmer im Kern nur LOW oder lassen los. HIGH wird gemeinsam über den Pull-up hergestellt. Dadurch ist die gemeinsame Leitung fachlich ruhiger beherrschbar.

## Aufgabe 4

Ein möglicher Merksatz ist:

> Auf dem I²C-Bus ziehen Teilnehmer aktiv nach LOW; HIGH entsteht, wenn niemand zieht und die Pull-ups die Leitung anheben.
