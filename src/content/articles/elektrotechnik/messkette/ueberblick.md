---
title: "Messkette"
description: "Überblick über Sensor, Signalaufbereitung, Wandlung, Auswertung und Anzeige als zusammenhängende Messkette."
subject: elektrotechnik
section: "Messtechnik"
topicPath:
  - "messkette"
learningGoals:
  - "Du kennst die Stufen einer Messkette."
  - "Du verstehst, warum jede Stufe die Messqualität beeinflusst."
  - "Du kannst Messfehler entlang der Kette einordnen."
practiceIdeas: []
commonMistakes:
  - "Nur den Sensor als Fehlerquelle zu betrachten."
  - "Auflösung, Genauigkeit und Kalibrierung zu vermischen."
keyTakeaways:
  - "Eine Messkette besteht aus mehreren Stufen, die gemeinsam das Messergebnis bestimmen."
  - "Fehler können in jeder Stufe entstehen und sich fortpflanzen."
recognizeSignals:
  - "Es geht um Sensorwerte, ADC, Anzeige, Messfehler oder Kalibrierung."
selfCheckPoints:
  - "Kann ich erklären, warum ein genauer Sensor allein noch kein genaues Messsystem garantiert?"
level: einfach
tags:
  - "elektrotechnik"
  - "messtechnik"
  - "sensor"
  - "messkette"
draft: false
---
# Messkette

Eine Messkette beschreibt den gesamten Weg von einer physikalischen Größe bis zu einem angezeigten oder gespeicherten Messwert. Sie beginnt nicht erst am Mikrocontroller und endet nicht beim Sensor. Zwischen Ursache und Anzeige liegen mehrere Stufen, die das Ergebnis beeinflussen.

![Messkette von der physikalischen Größe bis zum dargestellten Messwert.](/schlaufuchs-platform/images/overviews/v146/messkette.svg)

*Messkette von der physikalischen Größe bis zum dargestellten Messwert.*

## Grundidee

Typische Stufen sind Sensor, Signalaufbereitung, Analog-Digital-Wandlung, digitale Verarbeitung und Darstellung. Der Sensor wandelt eine Größe wie Temperatur, Licht oder Druck in ein elektrisches Signal um. Die Signalaufbereitung kann filtern, verstärken, begrenzen oder an einen Eingangsbereich anpassen. Der ADC macht daraus Zahlenwerte, die anschließend berechnet, gespeichert oder angezeigt werden.

## Bedeutung im Zusammenhang

Jede Stufe hat eigene Grenzen. Ein Sensor kann nichtlinear sein, ein Verstärker kann rauschen, ein ADC kann quantisieren, eine Software kann falsch skalieren und eine Anzeige kann runden. Deshalb genügt es nicht, nur eine einzelne Komponente zu beurteilen. Die Messqualität entsteht aus dem Zusammenspiel der gesamten Kette.

## Typische Anwendung

Für die Praxis ist wichtig, Messpunkte entlang der Kette zu kennen. Wer nur den Endwert sieht, kann schwer entscheiden, ob ein Fehler am Sensor, in der Versorgung, in der Referenzspannung, im Code oder in der Darstellung liegt. Eine gute Messkette ist deshalb nicht nur genau, sondern auch prüfbar.

## Abgrenzung

Häufig wird Auflösung mit Genauigkeit verwechselt. Eine Messkette kann viele Nachkommastellen anzeigen und trotzdem ungenau sein, wenn Sensor, Referenz oder Kalibrierung nicht passen.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
