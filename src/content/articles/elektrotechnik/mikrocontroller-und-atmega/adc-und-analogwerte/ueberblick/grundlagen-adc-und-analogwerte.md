---
title: "Grundlagen: ADC und Analogwerte"
description: "Allgemeine Einordnung zu analoger Spannung, Referenz, Quantisierung und digitalem Messwert."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "adc-und-analogwerte", "ueberblick", "grundlagen-adc-und-analogwerte"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
Ein ADC wandelt eine analoge Spannung in einen digitalen Zahlenwert um. Dabei wird die Spannung nicht unendlich genau kopiert, sondern einer endlichen Stufe zugeordnet.

## Einordnung

Mikrocontroller nutzen ADCs, um Sensorwerte wie Helligkeit, Temperatur oder Batteriespannung auszuwerten. Der Code arbeitet danach mit Zahlen statt direkt mit kontinuierlichen Spannungen.

## Warum das Thema wichtig ist

## Zentrale Bestandteile

- **Analogwert:** Eine Spannung mit vielen möglichen Zwischenwerten.
- **Referenzspannung:** Der Bereich, auf den die ADC-Stufen verteilt werden.
- **Auflösung:** Die Anzahl unterscheidbarer Stufen.
- **Quantisierung:** Die Zuordnung einer Spannung zu einer digitalen Stufe.

## Grundprinzip

Das Thema wird zuerst über Begriffe, Zweck und typische Entscheidungen verstanden. Erst danach lohnt sich der Blick auf Spezialfälle, Codebeispiele, Messwerte oder Rechenschritte.

## Abgrenzung zu Detailseiten

Detailseiten erklären konkrete Methoden, Situationen oder Fehlerbilder. Diese Überblicksseite ist allgemeiner: Sie beschreibt, worum es im Themenfeld geht, warum es gebraucht wird und wie die folgenden Lernseiten eingeordnet werden können.

## Beispielhafte Anwendung

Ein ADC-Wert von 512 bedeutet nur mit bekannter Referenzspannung ungefähr die halbe Referenz. Ohne diesen Kontext ist die Zahl allein nicht ausreichend.

## Zusammenfassung

Eine gute Überblicksseite ersetzt keine Detailseite. Sie ordnet ein Thema so ein, dass einzelne Spezialfälle später verständlich werden. Wer zuerst Begriffe, Zweck und Grenzen kennt, kann Aufgaben und Beispiele deutlich ruhiger lesen.
