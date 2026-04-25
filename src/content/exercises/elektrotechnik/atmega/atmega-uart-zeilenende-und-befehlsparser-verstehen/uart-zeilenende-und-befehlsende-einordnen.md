---
title: UART-Zeilenende und Befehlsende einordnen
description: Erkläre am AVR, warum serielle Textbefehle oft erst nach einem Zeilenende ausgewertet werden.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - uart-und-serielle-schnittstellen
  - atmega-uart-zeilenende-und-befehlsparser-verstehen
  - uart-zeilenende-und-befehlsende-einordnen
taskId: ET-ATMEGA-UART-307
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
hintPoints:
  - Trenne Zeichenempfang und Befehlsauswertung.
  - Frage immer zuerst, woran das Ende des Kommandos erkannt wird.
selfCheckPoints:
  - Kannst du erklären, warum Enter strukturell wichtig sein kann?
  - Kannst du Ringpuffer und Parserrolle unterscheiden?
transferIdeas:
  - Übertrage die Logik auf serielle Menüs und einfache Textprotokolle.
reflectionPrompt: "Warum ist ein ruhiger Parser oft mehr eine Strukturfrage als eine Zeichenfrage?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum bei einem UART-Kommando wie `LED ON` nicht jedes Zeichen sofort die Hauptlogik auslösen sollte.

## Aufgabe 2

Welche Rolle spielt das Zeilenende in einfachen seriellen Textprotokollen?

## Aufgabe 3

Worin unterscheidet sich ein Ringpuffer von einem Zeilenpuffer oder Parser?

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, wann aus einem Zeichenstrom ein vollständiger Befehl wird.
