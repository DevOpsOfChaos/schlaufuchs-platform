---
title: I²C-Leitungslogik mit Pull-ups ruhig erklären
description: Begründe an kleinen Busfällen, warum I²C-Leitungen über Pull-ups auf HIGH gehen und Teilnehmer sie vor allem nach LOW ziehen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-i2c-open-drain-und-pullup-verstehen
  - i2c-leitungslogik-mit-pullups-ruhig-erklaeren
taskId: ET-ATMEGA-I2C-201
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - i2c
  - aufgabe
hintPoints:
  - Trenne aktives LOW-Ziehen und passives HIGH-Werden bewusst.
  - Denke die Pull-up-Widerstände als Teil der Busfunktion mit.
selfCheckPoints:
  - Kannst du HIGH und LOW auf dem I²C-Bus elektrisch sauber erklären?
  - Kannst du begründen, warum mehrere Teilnehmer dieselbe Leitung teilen können?
transferIdeas:
  - Übertrage die Logik auf Arbitration, Clock Stretching oder einfache Sensorbusse.
reflectionPrompt: "Was hilft dir hier mehr: „Wer sendet HIGH?“ oder „Wer zieht LOW?“"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum auf einer I²C-Leitung HIGH und LOW nicht symmetrisch entstehen.

## Aufgabe 2

Warum sind Pull-up-Widerstände auf SDA und SCL kein Zusatz, sondern Teil der Grundlogik?

## Aufgabe 3

Beschreibe kurz, warum zwei Teilnehmer auf derselben I²C-Leitung nicht dieselbe Art Konflikt erzeugen wie zwei gegeneinander arbeitende Push-Pull-Ausgänge.

## Aufgabe 4

Formuliere einen ruhigen Merksatz für die Leitungslogik des I²C-Busses.
