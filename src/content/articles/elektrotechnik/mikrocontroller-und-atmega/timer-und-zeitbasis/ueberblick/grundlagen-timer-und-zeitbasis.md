---
title: "Grundlagen: Timer und Zeitbasis"
description: "Allgemeine Einordnung zu Mikrocontroller-Timern, Prescaler, Überlauf und periodischen Abläufen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "timer-und-zeitbasis", "ueberblick", "grundlagen-timer-und-zeitbasis"]
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
Ein Timer ist ein Zählwerk im Mikrocontroller, das aus einem Takt eine messbare oder nutzbare Zeitbasis erzeugt. Er zählt nicht Zeit im Alltagssinn, sondern Taktimpulse.

## Einordnung

Timer werden für Blinken, Messen, PWM, Abtastraten und regelmäßige Programmteile genutzt. Sie verbinden digitale Zähllogik mit realer Zeit.

## Warum das Thema wichtig ist

Ohne Überblick wirken Detailseiten schnell wie voneinander getrennte Einzelfälle. Diese Seite erklärt deshalb zuerst den allgemeinen Zusammenhang, bevor konkrete Situationen, Aufgaben oder Fehlerbilder behandelt werden.

## Zentrale Bestandteile

- **Systemtakt:** Die Grundgeschwindigkeit des Controllers.
- **Prescaler:** Ein Teiler, der den Timer-Takt verlangsamt.
- **Zählbereich:** Die Anzahl möglicher Zählerstände.
- **Compare Match:** Ein Ereignis bei einem festgelegten Zählerwert.

## Grundprinzip

Das Thema wird zuerst über Begriffe, Zweck und typische Entscheidungen verstanden. Erst danach lohnt sich der Blick auf Spezialfälle, Codebeispiele, Messwerte oder Rechenschritte.

## Abgrenzung zu Detailseiten

Detailseiten erklären konkrete Methoden, Situationen oder Fehlerbilder. Diese Überblicksseite ist allgemeiner: Sie beschreibt, worum es im Themenfeld geht, warum es gebraucht wird und wie die folgenden Lernseiten eingeordnet werden können.

## Beispielhafte Anwendung

Eine blinkende LED kann über einen Timer gesteuert werden, ohne dass das Hauptprogramm mit blockierenden Wartezeiten angehalten wird.

## Zusammenfassung

Eine gute Überblicksseite ersetzt keine Detailseite. Sie ordnet ein Thema so ein, dass einzelne Spezialfälle später verständlich werden. Wer zuerst Begriffe, Zweck und Grenzen kennt, kann Aufgaben und Beispiele deutlich ruhiger lesen.
