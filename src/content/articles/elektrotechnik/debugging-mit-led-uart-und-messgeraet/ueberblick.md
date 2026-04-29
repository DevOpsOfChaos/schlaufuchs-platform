---
title: "Debugging mit LED, UART und Messgerät"
description: "Überblick über einfache Debugging-Methoden in Mikrocontroller-Schaltungen."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["debugging-mit-led-uart-und-messgeraet", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# Debugging mit LED, UART und Messgerät

## Grundgedanke
Debugging in Mikrocontroller-Projekten bedeutet, Verhalten sichtbar zu machen. Da ein Mikrocontroller intern schnell und unsichtbar arbeitet, braucht man Beobachtungspunkte. LED, UART-Ausgabe und Messgerät sind einfache Werkzeuge, die unterschiedliche Fragen beantworten.

## LED
Eine LED eignet sich für grobe Zustandsanzeigen. Sie kann zeigen, ob ein Programm gestartet ist, ob eine Schleife durchlaufen wird oder ob ein Fehlerzustand erreicht wurde. Sie ist aber langsam, zeigt keine feinen Zeitverläufe und kann komplexe Daten nur stark vereinfacht darstellen.

## UART
UART-Ausgaben liefern Text oder Zahlen. Damit lassen sich Zustände, Messwerte, Zählerstände oder Fehlermeldungen ausgeben. UART-Debugging ist besonders hilfreich, wenn ein Programm logisch läuft, aber falsche Entscheidungen trifft. Es kann jedoch Timing beeinflussen, wenn sehr viele Ausgaben erzeugt werden.

## Messgerät
Ein Multimeter oder Oszilloskop betrachtet die elektrische Ebene. Damit werden Versorgung, Pegel, Spannungseinbrüche, Takt, PWM oder Signalflanken sichtbar. Ein Messgerät beantwortet Fragen, die Softwareausgaben nicht beantworten können, zum Beispiel ob ein Pin tatsächlich die erwartete Spannung führt.

## Systematik
Gutes Debugging beginnt mit einer Hypothese: Was erwarte ich an diesem Punkt? Danach wird gezielt geprüft. Wer nur zufällig LEDs setzt oder blind Werte ausgibt, findet Fehler langsamer. Besonders wichtig ist die Trennung zwischen Programmlogik, elektrischer Verdrahtung und äußeren Bauteilen.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
