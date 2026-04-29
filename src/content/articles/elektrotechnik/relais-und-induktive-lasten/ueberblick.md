---
title: "Relais und induktive Lasten"
description: "Einordnung von Relais, Spulen und Schutzmaßnahmen beim Schalten induktiver Lasten."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["relais-und-induktive-lasten", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Bauteile"]
draft: false
---
# Relais und induktive Lasten

## Begriff und Zweck

Ein Relais ist ein elektromagnetisch betätigter Schalter. Eine Spule erzeugt ein Magnetfeld und bewegt mechanische Kontakte. Dadurch können kleine Steuersignale größere oder getrennte Stromkreise schalten. Relais sind robust und anschaulich, bringen aber Besonderheiten mit: Sie brauchen Spulenstrom, schalten langsam und erzeugen beim Abschalten Spannungsspitzen.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Spulenstrom und Ansteuerung
- Kontaktbelastbarkeit
- galvanische Trennung
- Freilaufdiode oder Schutzbeschaltung

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Ein Mikrocontroller schaltet ein Relais meist nicht direkt, sondern über Transistor oder MOSFET. Parallel zur Relaisspule liegt häufig eine Freilaufdiode, damit die beim Abschalten entstehende Spannungsspitze begrenzt wird. Ähnliche Schutzfragen treten bei Motoren, Magnetventilen und anderen induktiven Lasten auf.

## Abgrenzung

Ein Relais trennt Steuer- und Lastkreis über die Kontakte, aber die Spule bleibt eine elektrische Last. Kontaktangaben gelten außerdem für bestimmte Spannungen, Stromarten und Lastarten. Wechselstrom, Gleichstrom und induktive Lasten belasten Kontakte unterschiedlich.

## Häufige Missverständnisse

Typische Fehler sind fehlende Freilaufdiode, zu schwache Transistoransteuerung oder falsche Kontaktbelastung. Auch das hörbare Klicken eines Relais bedeutet nicht automatisch, dass die Lastseite elektrisch korrekt und sicher ausgelegt ist.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
