---
title: Speicherrollen am AVR sauber zuordnen
description: Ordne Programmlogik, Laufdaten und dauerhafte Werte den passenden AVR-Speicherarten zu.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - speicher-und-daten
  - atmega-flash-sram-und-eeprom-unterscheiden
  - speicherrollen-am-avr-sauber-zuordnen
taskId: ET-ATMEGA-MEM-306
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - speicher
  - avr
hintPoints:
  - Frage zuerst, welche Rolle die Information im System hat.
  - Trenne flüchtige Laufdaten und dauerhafte Werte bewusst.
selfCheckPoints:
  - Kannst du erklären, warum ein Zähler nicht in denselben Speicher gehört wie ein Programmtext?
  - Kannst du sagen, welcher Wert einen Neustart überstehen soll?
transferIdeas:
  - Übertrage die Logik auf Menüs, Kalibrierwerte oder Messdaten.
reflectionPrompt: "Welche Leitfrage hilft dir mehr als das bloße Merken der Speichernamen?"
---

## Aufgabe 1

Ordne die folgenden Dinge dem passenden Speicher zu:

- das Programm selbst,
- ein laufender Tastenzähler,
- ein Kalibrierwert, der nach dem Ausschalten erhalten bleiben soll.

## Aufgabe 2

Erkläre in 2 bis 4 Sätzen, warum SRAM nicht die richtige erste Wahl für dauerhafte Einstellwerte ist.

## Aufgabe 3

Beschreibe, warum EEPROM nicht einfach wie gewöhnlicher schneller Laufzeitspeicher gedacht werden sollte.

## Aufgabe 4

Formuliere eine kurze Merkhilfe, die Flash, SRAM und EEPROM in einem einzigen ruhigen Satz sinnvoll trennt.
