---
title: "SPI-Austausch als Voll-Duplex ruhig lesen"
description: "Erkläre am ATmega, warum ein SPI-Lesevorgang zugleich auch ein Sendevorgang ist und warum der Takt beide Richtungen koppelt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-voll-duplex-grundidee-verstehen", "spi-austausch-als-voll-duplex-ruhig-lesen"]
taskId: "ET-ATMEGA-SPI-301"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
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
