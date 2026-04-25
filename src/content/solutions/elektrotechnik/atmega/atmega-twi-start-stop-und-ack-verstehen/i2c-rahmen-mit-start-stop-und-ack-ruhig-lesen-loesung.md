---
title: Musterlösung – I²C-Rahmen mit Start, Stop und ACK ruhig lesen
description: Musterlösung zur Aufgabe ET-ATMEGA-I2C-202.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-start-stop-und-ack-verstehen
  - i2c-rahmen-mit-start-stop-und-ack-ruhig-lesen-loesung
taskId: ET-ATMEGA-I2C-202
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-twi-start-stop-und-ack-verstehen/i2c-rahmen-mit-start-stop-und-ack-ruhig-lesen.md
tags:
  - elektrotechnik
  - atmega
  - i2c
  - loesung
draft: false
---

## Aufgabe 1

Die Startbedingung markiert den Beginn des aktuellen Busrahmens. Danach folgt die Adresse, damit klar ist, welcher Buspartner gemeint ist. Das ACK zeigt, dass dieser Schritt bestätigt wurde. Anschließend wird ein Datenbyte übertragen und erneut bestätigt. Mit der Stopbedingung endet der Austausch sauber.

## Aufgabe 2

ACK ist fachlich wichtig, weil es zeigt, ob der vorangegangene Schritt angenommen wurde. Es ist also keine beliebige zusätzliche Nutzinformation, sondern ein Teil der Kommunikationslogik. Genau dadurch kann man den Ablauf ruhiger bewerten.

## Aufgabe 3

Ein NACK zeigt, dass der letzte Schritt nicht bestätigt wurde oder dass der Austausch an dieser Stelle endet. Fachlich liest man das also als Bestätigungsproblem oder sauberen Abschluss, nicht bloß als „fehlendes Bit“.

## Aufgabe 4

Ein möglicher Merksatz ist:

> Beim I²C-Bus tragen Adresse und Daten die Nutzinformation, Start/ACK/Stop rahmen und bestätigen den Austausch.
