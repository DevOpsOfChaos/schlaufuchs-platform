---
title: "Lösung – ISR ohne blockierende Wartezeit schreiben"
description: "Musterlösung zu ISR ohne blockierende Wartezeit schreiben mit Einordnung, Abgrenzung und Gegenprobe."
subject: "elektrotechnik"
section: "Feinstruktur Elektrotechnik"
topicPath:
  - "mikrocontroller-und-atmega"
  - "interrupts"
  - "isr-ohne-blockierende-wartezeit-schreiben-v113"
taskId: "v113-elektrotechnik-isr-ohne-blockierende-wartezeit-schreiben-v113"
relatedExercise: "elektrotechnik/mikrocontroller-und-atmega/interrupts/isr-ohne-blockierende-wartezeit-schreiben-v113"
tags:
  - "elektrotechnik"
  - "strukturcheck"
  - "unterthema"
  - "isr-ohne-blockierende-wartezeit-schreiben-v113"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **ISR ohne blockierende Wartezeit schreiben**.

## Einordnung

In einer ISR wird eine lange Verzögerung eingebaut. Entscheidend ist nicht der breite Fachbereich, sondern die konkrete Trennkante dieses Unterthemas.

## Abgrenzung

Die typische Verwechslung lautet: ISR wird wie eine normale Hauptprogrammfunktion behandelt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt und anschließend geprüft wird.

## Prüfschritt

Blockiert die ISR andere zeitkritische Ereignisse?

Dieser Schritt ist fachlich stärker als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie wahrscheinlich zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. So entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
