---
title: "ADC und Analogwerte"
description: "Allgemeiner Überblick über Analog-Digital-Wandler, Messwerte und die Interpretation analoger Signale im Mikrocontroller."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "adc-und-analogwerte"
  - "ueberblick"
learningGoals:
  - "Du kennst den ADC als Übersetzer analoger Spannungen in digitale Werte."
  - "Du kannst Auflösung, Referenzspannung und Messbereich einordnen."
  - "Du verstehst typische Grenzen analoger Messungen."
practiceIdeas: []
commonMistakes:
  - "ADC-Werte als absolut perfekte Messwerte zu betrachten."
  - "Referenzspannung und Auflösung bei der Umrechnung zu ignorieren."
keyTakeaways:
  - "Ein ADC bildet einen Spannungsbereich auf diskrete Zahlenwerte ab."
  - "Messwerte hängen von Referenz, Auflösung, Beschaltung und Störungen ab."
recognizeSignals:
  - "Es geht um Sensorwerte, Spannungsteiler, Messbereich, Rauschen oder digitale Rohwerte."
selfCheckPoints:
  - "Kann ich erklären, welche Spannung einem ADC-Rohwert ungefähr entspricht?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "adc"
  - "analogwerte"
draft: false
---

# ADC und Analogwerte

![Schaubild zu ADC und Analogwerten.](/schlaufuchs-platform/images/overviews/v148/adc-und-analogwerte.svg)

*Das Schaubild zeigt den Weg vom analogen Signal zur digitalen Zahl und Auswertung.*


Ein Analog-Digital-Wandler, kurz ADC, übersetzt eine analoge Spannung in einen digitalen Zahlenwert. Damit kann ein Mikrocontroller Größen verarbeiten, die nicht nur zwei Zustände besitzen. Beispiele sind Helligkeit, Temperatur, Potentiometerstellung, Batteriespannung oder Sensorsignale.

Der ADC misst nicht eine beliebig genaue Spannung. Er teilt einen Spannungsbereich in endlich viele Stufen ein. Die Anzahl dieser Stufen hängt von der Auflösung ab. Ein 10-Bit-ADC besitzt zum Beispiel 1024 mögliche Werte. Welche Spannung zu welchem Wert gehört, hängt von der Referenzspannung ab.

## Zweck

Analoge Messungen verbinden reale physikalische Größen mit digitaler Verarbeitung. Ein Sensor liefert eine Spannung oder einen Strom, eine Beschaltung passt dieses Signal an, der ADC liefert einen Rohwert, und das Programm interpretiert diesen Wert.

## Referenz und Auflösung

Die Referenzspannung legt den oberen Bezugspunkt des Messbereichs fest. Liegt die Referenz bei 5 Volt, wird der Bereich von 0 bis 5 Volt auf die verfügbaren ADC-Stufen verteilt. Bei 3,3 Volt ist derselbe Zahlenwert einer anderen Spannung zugeordnet. Die Auflösung beschreibt, wie fein dieser Bereich unterteilt wird.

## Messgrenzen

ADC-Messungen sind empfindlich gegenüber Rauschen, Versorgungsschwankungen, Quellwiderständen, falscher Beschaltung und zu schnellen Änderungen. Auch die Abtastzeit spielt eine Rolle. Ein einzelner Messwert sollte deshalb nicht automatisch als exakte Wahrheit verstanden werden.

## Typische Auswertung

Häufig wird ein Rohwert zunächst geglättet, skaliert oder in eine physikalische Einheit umgerechnet. Bei einem Spannungsteiler kann aus dem gemessenen Verhältnis eine Eingangsspannung berechnet werden. Bei einem Sensor kann eine Kennlinie nötig sein.

## Häufige Missverständnisse

Ein häufiger Fehler ist, ADC-Werte direkt als Prozentwerte oder reale Einheiten zu lesen. Ohne Referenzspannung, Auflösung und Beschaltung ist der Rohwert nur eine Zahl. Ein anderer Fehler ist, Störungen nur als Softwareproblem zu betrachten, obwohl sie oft aus der Schaltung kommen.

## Kurz zusammengefasst

ADC und Analogwerte machen kontinuierliche Signale für digitale Programme nutzbar. Zuverlässige Messung entsteht erst durch passende Referenz, saubere Beschaltung, sinnvolle Auswertung und realistische Genauigkeitserwartung.
