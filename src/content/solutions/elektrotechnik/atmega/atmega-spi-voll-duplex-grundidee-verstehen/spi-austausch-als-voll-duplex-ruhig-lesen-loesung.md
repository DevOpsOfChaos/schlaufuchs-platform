---
title: "Musterlösung – SPI-Austausch als Voll-Duplex ruhig lesen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-SPI-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-voll-duplex-grundidee-verstehen", "spi-austausch-als-voll-duplex-ruhig-lesen"]
taskId: "ET-ATMEGA-SPI-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-spi-voll-duplex-grundidee-verstehen/spi-austausch-als-voll-duplex-ruhig-lesen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

SPI heißt Voll-Duplex, weil bei jedem Takt gleichzeitig Daten in beide Richtungen verschoben werden können. Der Master sendet über MOSI und empfängt im selben Takt über MISO.

### Aufgabe 2

Der Master muss takten, weil ohne seinen Takt keine Bits übertragen werden. Gleichzeitig schiebt er meist ein eigenes Byte oder ein Dummy-Byte hinaus. Genau dadurch kann der Slave synchron seine Antwort zurückgeben.

### Aufgabe 3

Bei UART werden Senden und Empfangen didaktisch oft als zwei Richtungen derselben Schnittstelle getrennt gelesen. Bei SPI ist der Austausch pro Takt viel enger gekoppelt. Lesen und Senden laufen dort typischerweise gleichzeitig im selben Rahmen.

### Aufgabe 4

Ein möglicher Merksatz lautet:

> Bei jedem SPI-Takt wird gleichzeitig ein Bit hinausgeschoben und ein Bit zurückgeschoben.

### Aufgabe 5

Die Aussage ist zu grob, weil der Master bei SPI für das Lesen trotzdem takten und in der Regel gleichzeitig selbst Bits senden muss. Ein SPI-Lesevorgang ist also nicht einfach nur passives Empfangen.
