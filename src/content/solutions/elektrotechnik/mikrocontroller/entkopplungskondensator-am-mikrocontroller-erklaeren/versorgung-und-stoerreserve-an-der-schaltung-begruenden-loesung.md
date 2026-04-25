---
title: Musterlösung – Versorgung und Störreserve an der Schaltung begründen
description: Musterlösung zur Aufgabe ELE-MCU-GEN-107.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - entkopplungskondensator-am-mikrocontroller-erklaeren
  - versorgung-und-stoerreserve-an-der-schaltung-begruenden-loesung
taskId: ELE-MCU-GEN-107
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller/entkopplungskondensator-am-mikrocontroller-erklaeren/versorgung-und-stoerreserve-an-der-schaltung-begruenden.md
tags:
  - elektrotechnik
  - mikrocontroller
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Die Hauptfrage lautet hier, wie die Versorgung **direkt am Mikrocontroller** ruhig gehalten wird. Der Entkopplungskondensator stellt lokal eine schnelle kleine Ladungsreserve bereit und federt kurze Stromspitzen ab. Gerade dadurch hilft er gegen sporadische Resets oder Störungen, die auf den ersten Blick wie Softwarefehler wirken können.

## Aufgabe 2

- **Ursache / Ausgangslage:** Der Mikrocontroller schaltet intern und extern Lasten um und braucht kurzzeitig zusätzliche Stromspitzen.
- **Kritischer Punkt:** Über Leitungen und Versorgungspfade kann die Spannung lokal kurz einbrechen oder Störungen einkoppeln.
- **Passende Maßnahme:** Ein kleiner Keramikkondensator sitzt nahe an den Versorgungspins des IC und stützt die Versorgung lokal.

## Aufgabe 3

Ein typischer Fehlersatz wäre: „Ein Kondensator im Netzteil reicht doch, also ist direkt am Controller keiner nötig.“ Das ist zu grob, weil der lokale Effekt am IC entscheidend ist. Ein weiter entfernter Kondensator übernimmt nicht automatisch dieselbe schnelle Stützfunktion direkt an den Pins.

## Aufgabe 4

Dieselbe Denkweise hilft auch bei Funkmodulen oder ADC-Schaltungen. Wenn Störungen nur beim Senden oder bei schnellen Schaltvorgängen auftreten, sollte man Versorgung und lokale Entkopplung früh mitprüfen statt nur im Programm zu suchen.
