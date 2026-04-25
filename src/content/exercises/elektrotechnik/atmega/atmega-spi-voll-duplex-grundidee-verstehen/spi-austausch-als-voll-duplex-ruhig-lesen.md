---
title: SPI-Austausch als Voll-Duplex ruhig lesen
description: Erkläre am ATmega, warum ein SPI-Lesevorgang zugleich auch ein Sendevorgang ist und warum der Takt beide Richtungen koppelt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-voll-duplex-grundidee-verstehen
  - spi-austausch-als-voll-duplex-ruhig-lesen
taskId: ET-ATMEGA-SPI-301
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - spi
  - voll-duplex
hintPoints:
  - Denke MOSI, MISO und SCK immer gemeinsam.
  - Frage zuerst, was pro Takt in beide Richtungen passiert.
selfCheckPoints:
  - Kannst du SPI von einer rein einseitigen Datenvorstellung trennen?
  - Kannst du erklären, warum der Master zum Lesen trotzdem selbst senden muss?
transferIdeas:
  - Übertrage die Idee auf Sensorabfragen oder Schieberegister.
reflectionPrompt: "Welche ruhige Leitfrage hilft dir bei SPI mehr: Welches Byte will ich lesen oder was passiert bei jedem Takt in beide Richtungen?"
---

Gegeben ist dieses Denkbild:

<pre><code>Master sendet gleichzeitig Dummy-Byte
Slave sendet gleichzeitig Messwert
8 Takte später hat der Master den Rückwert gelesen</code></pre>

## Aufgabe 1

Erkläre in eigenen Worten, warum SPI als Voll-Duplex bezeichnet wird.

## Aufgabe 2

Beschreibe, warum der Master zum Empfangen trotzdem selbst takten und etwas senden muss.

## Aufgabe 3

Erkläre den Unterschied zwischen dieser SPI-Idee und der ruhigeren Grundvorstellung von UART-Senden und UART-Empfangen.

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, was bei jedem SPI-Takt gleichzeitig passiert.

## Aufgabe 5

Ein Lernender sagt: „Der AVR liest nur, also sendet er gerade gar nichts.“ Erkläre, warum das für SPI zu grob ist.
