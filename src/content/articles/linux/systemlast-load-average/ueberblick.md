---
title: "Systemlast und Load Average"
description: "Allgemeiner Überblick über Load Average und die Einordnung von Systemlast unter Linux."
subject: "linux"
section: "Systembeobachtung"
topicPath: ["systemlast-load-average", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Systembeobachtung"]
draft: false
---
# Systemlast und Load Average

Load Average beschreibt die durchschnittliche Zahl von Prozessen, die laufen wollen oder auf bestimmte Ressourcen warten, über mehrere Zeitfenster.

Die Werte wirken einfach, sind aber nur mit CPU-Anzahl, Prozesszuständen und I/O-Situation sinnvoll interpretierbar.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Die drei klassischen Werte zeigen meist kurze, mittlere und längere Zeitfenster.
- Ein hoher Wert kann CPU-Last, I/O-Warten oder viele blockierte Prozesse widerspiegeln.
- Die Zahl muss zur Anzahl verfügbarer CPU-Kerne ins Verhältnis gesetzt werden.

## Abgrenzung

Load Average ist nicht dasselbe wie CPU-Auslastung. Ein System kann hohe Last haben, obwohl die CPU nicht vollständig arbeitet.

## Beispiele

- Ein Ein-Kern-System mit Load 4 ist deutlich überlastet.
- Ein Server mit vielen Kernen kann Load 4 problemlos verarbeiten.

## Häufiges Missverständnis

Häufig wird jeder Load-Wert über 1 als kritisch betrachtet. Ohne Blick auf CPU-Anzahl und Ursache ist das irreführend.

## Kurz zusammengefasst

Load Average ist ein nützlicher Überblickswert, aber kein vollständiges Diagnosewerkzeug. Er braucht Kontext.
