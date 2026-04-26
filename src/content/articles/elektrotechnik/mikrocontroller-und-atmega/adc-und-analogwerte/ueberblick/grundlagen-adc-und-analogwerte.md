---
title: "Grundlagen: ADC und Analogwerte"
description: "Allgemeine Einordnung zu analoger Spannung, Referenz, Quantisierung und digitalem Messwert."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - "mikrocontroller-und-atmega"
  - "adc-und-analogwerte"
  - "ueberblick"
learningGoals:
  - "Du kennst die Grundidee des Themas und kannst sie in eigenen Worten erklären."
  - "Du kannst typische Begriffe einordnen, ohne sofort in Spezialfälle zu springen."
  - "Du erkennst, welche Detailseiten zu welchem Teilaspekt gehören."
practiceIdeas:
  - "Lies zuerst diese Überblicksseite und danach eine passende Detailseite."
  - "Notiere drei zentrale Begriffe und formuliere zu jedem eine kurze Erklärung."
  - "Ordne eine konkrete Aufgabe dem passenden Teilaspekt des Themas zu."
commonMistakes:
  - "Direkt mit Spezialfällen zu beginnen, bevor die Grundidee klar ist."
  - "Ähnliche Begriffe zu vermischen, obwohl sie verschiedene Rollen haben."
  - "Ein einzelnes Beispiel für das gesamte Thema zu halten."
keyTakeaways:
  - "Die Überblicksseite erklärt den allgemeinen Zusammenhang des Themas."
  - "Detailseiten behandeln danach konkrete Situationen, Methoden oder Fehlerbilder."
  - "Gute Orientierung entsteht durch Definition, Zweck, Aufbau und Abgrenzung."
recognizeSignals:
  - "Du suchst zuerst eine allgemeine Einordnung statt einer einzelnen Übungssituation."
  - "Mehrere Detailseiten wirken ähnlich und sollen fachlich sortiert werden."
  - "Ein Thema braucht eine ruhige Erklärung, bevor Beispiele sinnvoll werden."
selfCheckPoints:
  - "Kann ich das Thema in zwei bis drei Sätzen allgemein erklären?"
  - "Kann ich die wichtigsten Unterbegriffe voneinander unterscheiden?"
  - "Weiß ich, welche Detailseite ich als Nächstes lesen würde?"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "adc"
  - "analogwerte"
level: einfach
draft: false
---

Ein ADC wandelt eine analoge Spannung in einen digitalen Zahlenwert um. Dabei wird die Spannung nicht unendlich genau kopiert, sondern einer endlichen Stufe zugeordnet.

## Einordnung

Mikrocontroller nutzen ADCs, um Sensorwerte wie Helligkeit, Temperatur oder Batteriespannung auszuwerten. Der Code arbeitet danach mit Zahlen statt direkt mit kontinuierlichen Spannungen.

## Warum das Thema wichtig ist

Ohne Überblick wirken Detailseiten schnell wie voneinander getrennte Einzelfälle. Diese Seite erklärt deshalb zuerst den allgemeinen Zusammenhang, bevor konkrete Situationen, Aufgaben oder Fehlerbilder behandelt werden.

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
