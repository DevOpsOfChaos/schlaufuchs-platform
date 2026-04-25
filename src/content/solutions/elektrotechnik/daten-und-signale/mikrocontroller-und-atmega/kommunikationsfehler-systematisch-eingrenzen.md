---
title: "Lösung – UART-, I²C- und SPI-Fehler systematisch untersuchen"
description: "Musterlösung zu „UART-, I²C- und SPI-Fehler systematisch untersuchen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "kommunikationsfehler-systematisch-eingrenzen"
taskId: "et-mc-v94-kommunikationsfehler"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/kommunikationsfehler-systematisch-eingrenzen"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "uart"
  - "i2c"
  - "spi"
  - "debugging"
  - "kommunikation"
  - "fehleranalyse"
draft: false
---
## Lösung zu Aufgabe 1

Zu prüfen sind Baudrate und realer Systemtakt, gemeinsame Masse, vertauschte TX/RX-Leitungen, Pegelverträglichkeit und Versorgung.

## Lösung zu Aufgabe 2

Zuerst Versorgung und Masse prüfen, dann Pull-ups und Pegel, danach SDA/SCL-Leitungen und Adresse, anschließend ein minimales Testprogramm verwenden.

## Lösung zu Aufgabe 3

Wenn mehrere Dinge gleichzeitig geändert werden, weiß man nicht, welche Änderung geholfen oder einen neuen Fehler erzeugt hat.
