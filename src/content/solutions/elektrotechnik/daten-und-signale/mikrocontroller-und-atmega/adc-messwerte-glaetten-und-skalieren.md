---
title: "Lösung – ADC-Messwerte beruhigen und sinnvoll deuten"
description: "Musterlösung zur Bewertung, Mittelwertbildung und Einordnung geglätteter ADC-Werte."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "adc-messwerte-glaetten-und-skalieren"]
taskId: "et-mc-adc-glaetten-skalieren"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/adc-messwerte-glaetten-und-skalieren"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Die Werte liegen nur wenige Stufen auseinander. Es gibt keinen großen Sprung, sondern eine kleine Streuung um ungefähr <code>512</code>. Das passt zu normalem Messrauschen, Quantisierung oder kleinen elektrischen Schwankungen.

## Lösung zu Aufgabe 2

Die Summe ist <code>4098</code>. Der Mittelwert ist <code>4098 / 8 = 512,25</code>. Für eine Anzeige würde man daraus ungefähr <code>512</code> machen. Dieser Wert wirkt ruhiger, weil einzelne kleine Ausreißer nicht sofort sichtbar werden.

## Lösung zu Aufgabe 3

Vorteile: Die Anzeige springt weniger und einzelne kleine Messschwankungen fallen weniger stark ins Gewicht.

Nachteile: Echte schnelle Änderungen werden später sichtbar. Außerdem kann Glättung ein elektrisches Problem verdecken, statt die Ursache zu beheben.
