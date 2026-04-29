---
title: "Grundlagen: ADC und Sensorwerte"
description: "Allgemeiner Überblick darüber, wie Mikrocontroller analoge Sensorspannungen als digitale Werte auswerten."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-sensorwerte
  - ueberblick
learningGoals:
  - "Du erklärst die Grundidee des Themas allgemein und ohne Spezialfall-Abhängigkeit."
  - "Du ordnest typische Begriffe und Teilaspekte fachlich sauber ein."
  - "Du erkennst, welche Detailseiten oder Aufgaben danach sinnvoll anschließen."
practiceIdeas:
  - "Lies die Überblicksseite und formuliere danach die drei wichtigsten Begriffe in eigenen Worten."
  - "Ordne eine Beispielaufgabe dem passenden Teilaspekt des Themas zu."
commonMistakes:
  - "Einen einzelnen Spezialfall für die ganze Themenlogik zu halten."
  - "Begriffe aus Schaltung, Messung und Programmcode zu vermischen."
  - "Direkt mit Rechnungen oder Code zu beginnen, bevor der Zusammenhang klar ist."
keyTakeaways:
  - "Die Seite gibt zuerst Orientierung, bevor Detailfälle oder Aufgaben bearbeitet werden."
  - "Wichtige Begriffe werden getrennt und danach wieder in Zusammenhang gesetzt."
  - "Gute Einordnung verhindert typische Fehlannahmen beim Weiterlernen."
recognizeSignals:
  - "Du suchst eine allgemeine Einordnung statt einer einzelnen Problemsituation."
  - "Mehrere Detailseiten wirken ähnlich und brauchen einen gemeinsamen Rahmen."
selfCheckPoints:
  - "Kann ich das Thema in zwei bis drei Sätzen allgemein erklären?"
  - "Kann ich zentrale Begriffe voneinander unterscheiden?"
level: einfach
tags:
  - elektrotechnik
  - mikrocontroller
  - adc
  - sensorwerte
draft: false
---

## Begriff

Ein **ADC** wandelt eine analoge Spannung in einen digitalen Zahlenwert um. Für Mikrocontroller ist das wichtig, weil viele Sensoren keine fertigen Zahlen liefern, sondern eine Spannung, die erst gemessen und eingeordnet werden muss.

![ADC und Sensorwerte](/schlaufuchs-platform/images/overviews/v180/adc-und-sensorwerte.svg)

## Warum das Thema wichtig ist

Ein ADC-Wert ist nie nur „der Sensorwert“. Er hängt von der Eingangsspannung, der Referenzspannung, der Auflösung und oft auch von Rauschen oder Beschaltung ab. Wer diese Zusammenhänge nicht trennt, liest Zahlen zu direkt und übersieht Messgrenzen.

## Zentrale Begriffe

- **Analogspannung:** kann viele Zwischenwerte annehmen.
- **Referenzspannung:** legt den Messbereich fest.
- **Auflösung:** beschreibt, wie viele Stufen unterschieden werden.
- **Quantisierung:** ordnet eine reale Spannung einer digitalen Stufe zu.
- **Sensorwert:** ist erst nach Deutung und Kalibrierung fachlich nutzbar.

## Typische Beispiele

Ein Lichtsensor, ein Potentiometer oder ein Temperatursensor kann eine Spannung liefern. Der Mikrocontroller liest daraus einen ADC-Wert. Dieser Wert muss dann mit dem Messbereich verglichen werden, bevor daraus eine Aussage wie „hell“, „warm“ oder „zu niedrig“ entsteht.

## Häufige Missverständnisse

Ein häufiger Fehler ist, den ADC-Wert als absolut genaue Wahrheit zu behandeln. Ebenso problematisch ist es, den Wert ohne Referenzspannung zu interpretieren. Ein Wert von 512 bedeutet bei einem 10-Bit-ADC ungefähr die Mitte des Messbereichs, aber nicht automatisch eine feste Spannung ohne Kontext.

## Abgrenzung

Diese Seite erklärt den allgemeinen Rahmen. Detailseiten können sich danach mit Referenzspannung, Sensorbeschaltung, Glättung, Kalibrierung oder konkreten AVR-Registern beschäftigen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein ADC-Wert ist eine geordnete Messstufe, keine direkte Aussage über die reale Welt.</p>
</div>
