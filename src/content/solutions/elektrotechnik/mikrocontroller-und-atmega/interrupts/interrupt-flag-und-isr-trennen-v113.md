---
title: "Lösung – Interrupt-Flag und ISR trennen"
description: "Musterlösung zu Interrupt-Flag und ISR trennen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "elektrotechnik"
section: "Feinstruktur Elektrotechnik"
topicPath:
  - "mikrocontroller-und-atmega"
  - "interrupts"
  - "interrupt-flag-und-isr-trennen-v113"
taskId: "v113-elektrotechnik-interrupt-flag-und-isr-trennen-v113"
relatedExercise: "elektrotechnik/mikrocontroller-und-atmega/interrupts/interrupt-flag-und-isr-trennen-v113"
tags:
  - "elektrotechnik"
  - "strukturcheck"
  - "unterthema"
  - "interrupt-flag-und-isr-trennen-v113"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Interrupt-Flag und ISR trennen**.

## Einordnung

Ein Ereignis wird ausgelöst, aber die ISR startet nicht. Entscheidend ist nicht der breite Fachbereich, sondern die konkrete Trennkante dieses Unterthemas.

## Abgrenzung

Die typische Verwechslung lautet: Flag, Freigabe und globale Interrupts werden vermischt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt und anschließend geprüft wird.

## Prüfschritt

Sind Flag, Einzelmaske und globale Freigabe passend gesetzt?

Dieser Schritt ist fachlich stärker als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie wahrscheinlich zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. So entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
