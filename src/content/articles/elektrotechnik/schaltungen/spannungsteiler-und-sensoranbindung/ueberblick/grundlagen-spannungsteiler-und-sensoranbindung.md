---
title: "Spannungsteiler und Sensoranbindung – Überblick"
description: "Eine allgemeine Einführung in Spannungsteiler, Messpunkte und den Anschluss einfacher Sensoren an Auswerteschaltungen."
subject: "elektrotechnik"
section: "Schaltungen"
topicPath: ["schaltungen", "spannungsteiler-und-sensoranbindung", "ueberblick", "grundlagen-spannungsteiler-und-sensoranbindung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Schaltungen"]
draft: false
---
## Begriff und Grundidee

Ein Spannungsteiler ist eine einfache Schaltung, mit der aus einer vorhandenen Spannung eine kleinere Teilspannung gewonnen werden kann. Meist besteht er aus zwei Widerständen, die in Reihe zwischen Versorgungsspannung und Masse liegen. Zwischen den beiden Widerständen befindet sich ein Messpunkt.

Die Spannung an diesem Messpunkt hängt davon ab, wie sich die beiden Widerstände zueinander verhalten. Genau deshalb ist der Spannungsteiler in der Sensorik so nützlich: Wenn einer der Widerstände durch einen Sensor ersetzt wird, verändert sich die Messspannung mit der gemessenen Größe.

## Spannungsteiler als Prinzip

Ein Spannungsteiler ist kein einzelnes spezielles Bauteil, sondern ein Schaltungsprinzip. Zwei Widerstände teilen die Versorgungsspannung auf. Je nachdem, wie groß die Widerstände sind, fällt an jedem Widerstand ein anderer Anteil der Spannung ab.

Wichtig ist der Abgriff zwischen den Widerständen. Dort entsteht die Spannung, die eine nachfolgende Schaltung auswerten kann. Ohne diesen Messpunkt wäre der Spannungsteiler nur eine Reihenschaltung aus Widerständen.

## Sensoren als veränderliche Widerstände

Viele einfache Sensoren verändern ihren elektrischen Widerstand. Ein LDR reagiert auf Licht, ein NTC auf Temperatur, ein Potentiometer auf eine mechanische Stellung. Wird ein solcher Sensor in einen Spannungsteiler eingebaut, entsteht aus der Widerstandsänderung eine Spannungsänderung.

Ein Mikrocontroller misst dann nicht direkt Licht, Temperatur oder Drehwinkel. Er misst eine Spannung, die durch die Sensorschaltung beeinflusst wurde. Diese Unterscheidung ist wichtig, weil sie erklärt, warum Schaltung, Referenzspannung und Auswertung zusammen betrachtet werden müssen.

## Warum der Eingang mitgedacht werden muss

Ein Spannungsteiler liefert eine Spannung nur dann sinnvoll, wenn die nachfolgende Schaltung sie passend auswerten kann. Bei einem ADC muss die Spannung im erlaubten Messbereich liegen. Bei einem digitalen Eingang muss sie eindeutig als High oder Low erkannt werden. Bei sehr hochohmigen oder belastenden Eingängen kann der Spannungsteiler außerdem anders wirken als erwartet.

Die praktische Frage lautet daher nicht nur: Welche Teilspannung entsteht? Sondern auch: Was macht die Auswertung mit dieser Spannung?

## Abgrenzung zu einzelnen Lernseiten

Konkrete Lernseiten können Berechnungen, ADC-Anbindung, LDR-Schaltungen, NTC-Auswertung oder Pegelgrenzen behandeln. Diese Überblicksseite erklärt zuerst das gemeinsame Prinzip: Ein Spannungsteiler macht aus Widerstandsverhältnissen eine messbare Spannung.

## Merksatz

Ein Spannungsteiler übersetzt ein Widerstandsverhältnis in eine Spannung. In der Sensoranbindung wird daraus oft der erste Schritt von einer physikalischen Größe zu einem auswertbaren Signal.
