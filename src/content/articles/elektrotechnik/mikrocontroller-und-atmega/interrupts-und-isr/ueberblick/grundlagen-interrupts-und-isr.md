---
title: "Grundlagen: Interrupts und ISR"
description: "Allgemeiner Überblick über Interrupts, Interrupt-Service-Routinen, Ereignisse, Hauptprogramm und typische Vorsichtsregeln."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-isr
  - ueberblick
  - grundlagen-interrupts-und-isr
learningGoals:
  - "Du erklärst, warum Interrupts Ereignisse neben dem Hauptprogramm behandeln."
  - "Du beschreibst die Rolle einer Interrupt-Service-Routine."
  - "Du erkennst, warum ISR-Code kurz und eindeutig bleiben sollte."
practiceIdeas: []
commonMistakes:
  - "Interrupts als paralleles zweites Programm zu verstehen."
  - "In einer ISR lange Berechnungen oder blockierende Wartezeiten auszuführen."
  - "Gemeinsam genutzte Variablen ohne Vorsicht zu verwenden."
keyTakeaways:
  - "Interrupts reagieren auf Ereignisse, ohne ständig aktiv abfragen zu müssen."
  - "Eine ISR sollte kurz bleiben und nur das Nötige erledigen."
  - "Hauptprogramm und ISR müssen sauber über gemeinsame Zustände kommunizieren."
recognizeSignals: []
selfCheckPoints: []
level: mittel
tags:
  - elektrotechnik
  - mikrocontroller
  - interrupt
  - isr
draft: false
---

## Begriff

Ein **Interrupt** ist eine Unterbrechung des normalen Programmablaufs durch ein Ereignis. Dieses Ereignis kann zum Beispiel ein Timerüberlauf, ein externer Pinwechsel oder eine abgeschlossene Datenübertragung sein. Die zugehörige Funktion heißt **Interrupt-Service-Routine**, kurz ISR.

Interrupts sind wichtig, wenn ein Mikrocontroller auf Ereignisse reagieren soll, ohne im Hauptprogramm ständig aktiv nachfragen zu müssen.

## Hauptprogramm und Ereignis

Ohne Interrupt müsste ein Programm regelmäßig prüfen, ob etwas passiert ist. Das nennt man Polling. Bei einem Interrupt meldet die Hardware dagegen selbst, dass ein bestimmtes Ereignis eingetreten ist. Das Hauptprogramm wird kurz unterbrochen, die ISR läuft, danach geht es weiter.

## Aufgabe der ISR

Eine ISR sollte möglichst kurz sein. Häufig setzt sie nur ein Flag, speichert einen Messwert oder zählt ein Ereignis. Die eigentliche Auswertung kann danach im Hauptprogramm stattfinden.

Diese Trennung hält das System übersichtlich und verhindert, dass andere wichtige Ereignisse zu lange warten müssen.

## Typische Vorsichtsregeln

Wichtige Regeln sind:

- keine langen Warteschleifen in der ISR,
- keine unnötig umfangreichen Berechnungen,
- gemeinsam genutzte Variablen bewusst behandeln,
- Ereignis und Auswertung trennen.

## Warum Interrupts nicht automatisch einfacher sind

Interrupts können Programme reaktionsschneller machen. Sie machen den Ablauf aber auch weniger linear. Man muss dann verstehen, dass bestimmte Variablen außerhalb des normalen Hauptprogrammflusses verändert werden können.

## Abgrenzung

Einzelne Lernseiten können `volatile`, Timer-Interrupts, externe Interrupts oder konkrete Register behandeln. Diese Überblicksseite beschreibt den gemeinsamen Begriff und die Grundlogik.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Interrupt ist ein Ereignisruf der Hardware. Die ISR reagiert kurz darauf; die ruhige Verarbeitung gehört meist zurück ins Hauptprogramm.</p>
</div>
