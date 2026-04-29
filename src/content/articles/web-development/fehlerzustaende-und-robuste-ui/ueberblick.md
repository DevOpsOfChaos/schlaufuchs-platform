---
title: "Fehlerzustände und robuste UI"
description: "Überblick über robuste Benutzeroberflächen, die Ladezustände, Fehler und leere Ergebnisse verständlich behandeln."
subject: "web-development"
section: "Qualität und Betrieb"
topicPath: ["fehlerzustaende-und-robuste-ui", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Qualität und Betrieb"]
draft: false
---
# Fehlerzustände und robuste UI

## Grundidee
Eine robuste Benutzeroberfläche funktioniert nicht nur im Erfolgsfall. Sie zeigt verständlich, was passiert, wenn Daten noch laden, nichts gefunden wurde, eine Eingabe ungültig ist oder ein Netzwerkfehler auftritt. Dadurch bleibt die Anwendung bedienbar und vertrauenswürdig.

## Zustände
Typische UI-Zustände sind Laden, Erfolg, leerer Zustand, Fehler und teilweise geladene Daten. Jeder Zustand braucht eine passende Darstellung. Ein leerer Zustand ist kein Fehler, sondern eine Information. Ein Ladezustand sollte Orientierung geben, ohne dauerhafte Unsicherheit zu erzeugen.

## Fehlermeldungen
Gute Fehlermeldungen sind konkret und handlungsorientiert. Sie sagen, was nicht geklappt hat, was die Folge ist und was Nutzende tun können. Interne Stacktraces, Statuscodes ohne Erklärung oder vage Meldungen wie „Fehler“ helfen selten weiter.

## Robustheit
Robuste UI verhindert auch Fehlbedienung. Buttons können während eines laufenden Vorgangs gesperrt werden, Formulare behalten eingegebene Daten, Wiederholen wird angeboten und kritische Aktionen werden klar bestätigt. Ziel ist nicht, Fehler unsichtbar zu machen, sondern sie kontrollierbar zu machen.

## Abgrenzung
Robuste UI ist kein rein visuelles Thema. Sie hängt mit Datenmodell, Netzwerklogik, Validierung und Barrierefreiheit zusammen. Wer Fehlerzustände erst am Ende ergänzt, merkt oft, dass die Anwendung intern keine klaren Zustände unterscheidet.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
