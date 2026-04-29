---
title: "Sensoren und Messsignale"
description: "Allgemeiner Überblick über Sensoren, elektrische Ausgangssignale und die Weiterverarbeitung von Messgrößen."
subject: "elektrotechnik"
section: "Mess- und Sensortechnik"
topicPath: ["sensoren-und-messsignale", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mess- und Sensortechnik"]
draft: false
---
# Sensoren und Messsignale

![Schaubild zu Sensoren und Messprinzipien.](/schlaufuchs-platform/images/overviews/v149/sensoren-und-messprinzipien.svg)

*Das Schaubild zeigt den Weg von einer physikalischen Größe zum Messwert.*



Sensoren wandeln eine physikalische Größe in ein elektrisches Signal um. Dieses Signal kann eine Spannung, ein Strom, ein Widerstandswert, eine Frequenz oder ein digitales Datenpaket sein.

## Bedeutung

Für die Auswertung ist nicht nur der Sensor selbst wichtig, sondern die gesamte Messkette. Dazu gehören Versorgung, Beschaltung, Signalbereich, Störeinflüsse, Abtastung, Umrechnung und Plausibilitätsprüfung.

## Typische Teilaspekte

- **Messgröße:** Temperatur, Licht, Abstand, Druck oder Drehzahl müssen zunächst elektrisch darstellbar werden.
- **Signalform:** Sensoren liefern analoge oder digitale Signale mit unterschiedlichen Anforderungen.
- **Kalibrierung:** Rohwerte müssen oft in sinnvolle Einheiten übersetzt und geprüft werden.
- **Störungen:** Rauschen, Leitungswiderstände, Masseführung und Versorgungsschwankungen können Messwerte beeinflussen.

## Beispiel

Ein Lichtsensor kann über einen Spannungsteiler an einen ADC angeschlossen werden. Der Mikrocontroller liest dann keinen Lux-Wert, sondern zunächst einen Rohwert, der interpretiert werden muss.

## Abgrenzung

Ein Sensorwert ist nicht automatisch eine exakte Wahrheit. Er ist ein Messsignal innerhalb eines bestimmten Bereichs und mit begrenzter Genauigkeit.

## Häufige Missverständnisse

Häufig werden Sensoren nur über Beispielcode verstanden. Dadurch bleiben Messbereich, Auflösung und Fehlerquellen unsichtbar.

## Einordnung im Gesamtzusammenhang

Sensoren und Messsignale bilden die Brücke zwischen realer Umgebung, Elektrotechnik und Softwarelogik im Mikrocontroller.
