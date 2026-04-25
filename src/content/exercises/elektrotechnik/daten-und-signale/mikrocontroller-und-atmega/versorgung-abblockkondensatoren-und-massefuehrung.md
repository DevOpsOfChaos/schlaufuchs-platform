---
title: "Versorgung und Abblockung als Fehlerursache prüfen"
description: "Übe, zufällige Neustarts und springende Messwerte als mögliche Versorgungs- und Masseprobleme zu analysieren."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - versorgung-abblockkondensatoren-und-massefuehrung
selfCheckPoints:
  - "Habe ich Lastwechsel und Versorgung zusammen betrachtet?"
  - "Habe ich eine konkrete Messstelle genannt?"
  - "Habe ich Codeverdacht und Hardwareverdacht sauber getrennt?"
taskId: "et-mc-v92-versorgung-abblocken"
tags:
  - elektrotechnik
  - mikrocontroller
  - versorgung
  - abblockkondensator
  - masse
  - fehlersuche
hintPoints:
  - "Ein Reset beim Schalten einer Last ist ein starkes Hardware-Signal."
  - "Messe möglichst am VCC-Pin des Mikrocontrollers."
  - "Ein Kondensator wirkt am besten dort, wo die schnelle Stromspitze entsteht."
transferIdeas:
  - "Übertrage die Prüfung auf ein Relaismodul oder eine LED-Matrix."
  - "Formuliere eine kurze Checkliste für „Controller startet zufällig neu“."
reflectionPrompt: "Was würdest du künftig prüfen, bevor du den Programmcode änderst?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein ATmega liest einen Sensor und schaltet zusätzlich einen kleinen Motor. Ohne Motor sind die ADC-Werte ruhig. Beim Einschalten des Motors springt die Anzeige und das Board startet manchmal neu. Erkläre, warum das nicht zuerst nach einem reinen Softwarefehler aussieht.

## Aufgabe 2: Entscheidung begründen

Nenne drei konkrete Maßnahmen oder Prüfungen, mit denen du die Versorgungssituation verbessern oder bewerten würdest.

## Aufgabe 3: Prüfung formulieren

Formuliere eine kurze Prüfstrategie in vier Schritten, mit der du den Fehler eingrenzt, ohne sofort den gesamten Code umzubauen.
