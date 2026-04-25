---
title: SPI-Timing und Lesemoment ruhig einordnen
description: Erkläre beim AVR-SPI, warum Taktflanke und Sampling-Moment über stabile oder fehlerhafte Datenübernahme entscheiden.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-taktflanke-und-sampling-verstehen
  - spi-timing-und-lesemoment-ruhig-einordnen
taskId: ET-ATMEGA-SPI-304
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
hintPoints:
  - Trenne den Zeitpunkt des Änderns vom Zeitpunkt des Übernehmens.
  - Lies die Modusfrage zuerst als Timing-Frage und nicht nur als Nummer.
selfCheckPoints:
  - Kannst du erklären, warum ein stabiler Lesemoment wichtig ist?
  - Kannst du Verdrahtungsproblem und Timing-Problem unterscheiden?
transferIdeas:
  - Übertrage die Logik auf andere serielle Taktverfahren und auf unterschiedliche SPI-Modi.
reflectionPrompt: "Warum ist bei SPI oft der Zeitblick hilfreicher als das Auswendiglernen von Modusnummern?"
---

## Aufgabe 1: Zwei Zeitrollen erklären

Beschreibe in 3 bis 5 Sätzen den Unterschied zwischen

- dem Zeitpunkt, an dem ein Sender ein Bit ändert,
- und dem Zeitpunkt, an dem ein Empfänger dieses Bit übernimmt.

## Aufgabe 2: Fehlerbild deuten

Master und Slave sind korrekt verbunden. Trotzdem kommen instabile Werte an.

Erkläre, warum das auch dann noch ein Timing-Problem mit Taktflanke und Sampling sein kann.

## Aufgabe 3: Moduszahl einordnen

Begründe kurz, warum eine SPI-Moduszahl didaktisch erst dann wirklich sinnvoll wird, wenn man den zeitlichen Ablauf dahinter verstanden hat.

## Aufgabe 4: Mini-Merksatz formulieren

Schreibe einen Merksatz auf, in dem die Wörter **Flanke**, **stabil** und **übernehmen** alle sinnvoll vorkommen.
