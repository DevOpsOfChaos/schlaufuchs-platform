---
title: "Grundlagen: ADC und Sensorwerte"
description: "Allgemeiner Überblick darüber, wie Mikrocontroller analoge Sensorspannungen als digitale Werte auswerten."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "adc-und-sensorwerte", "ueberblick", "grundlagen-adc-und-sensorwerte"]
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
## Begriff

Ein **ADC** wandelt eine analoge Spannung in einen digitalen Zahlenwert um. Für Mikrocontroller ist das wichtig, weil viele Sensoren keine fertigen Zahlen liefern, sondern eine Spannung, die erst gemessen und eingeordnet werden muss.

![ADC und Sensorwerte](/schlaufuchs-platform/images/overviews/elektrotechnik/adc-und-sensorwerte.svg)

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

<div class="note-panel">
  <p><strong>Merke:</strong> Ein ADC-Wert ist eine geordnete Messstufe, keine direkte Aussage über die reale Welt.</p>
</div>
