---
title: Musterlösung – Board und Minimalhardware ruhig vergleichen
description: Musterlösung zur Aufgabe ELE-MCU-GEN-102.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - entwicklungsboard-und-nackten-mikrocontroller-unterscheiden
  - board-und-minimalhardware-ruhig-vergleichen-loesung
taskId: ELE-MCU-GEN-102
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller/entwicklungsboard-und-nackten-mikrocontroller-unterscheiden/board-und-minimalhardware-ruhig-vergleichen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Ein Entwicklungsboard ist eine vorbereitete Umgebung um den Mikrocontrollerchip herum. Es bringt oft Versorgung, Reset, Programmierzugang und Testkomfort bereits mit. Der nackte Chip hat zwar seine internen Funktionen, braucht diese äußeren Rahmenbedingungen aber ebenfalls, nur eben nicht schon automatisch fertig angeschlossen.

## Aufgabe 2

Typische Zusatzfunktionen sind zum Beispiel:

- Spannungsversorgung oder Spannungsregler,
- Reset-Beschaltung,
- Taktquelle oder vorbereitete Taktanbindung,
- Programmier- oder USB-Schnittstelle,
- zusätzliche Test-LEDs oder Taster.

## Aufgabe 3

Das Blinkprogramm kann auf der Steckplatine aus vielen Hardwaregründen scheitern: falsche Versorgung, fehlende Reset-Beschaltung, unpassende Taktannahme oder Probleme beim Programmierzugang. Deshalb wäre es zu früh, sofort nur den Code zu verdächtigen.

## Aufgabe 4

Eine ruhige Leitfrage wäre zum Beispiel:

> Sind Versorgung, Reset, Takt und Programmierzugang in dieser Hardwareumgebung genauso sauber vorhanden wie auf dem Board?
