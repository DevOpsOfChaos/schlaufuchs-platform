---
title: EEPROM-Schreibhäufigkeit ruhig bewerten
description: Begründe, warum EEPROM-Zugriffe gezielt statt dauernd erfolgen sollten und wie Persistenz und Schreibhäufigkeit zusammen gedacht werden.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - speicher-und-persistenz
  - atmega-eeprom-schreibzyklen-und-verschleiss-verstehen
  - eeprom-schreibhaeufigkeit-ruhig-bewerten
taskId: ET-ATMEGA-MEM-302
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - eeprom
  - verschleiss
hintPoints:
  - Frage nicht nur, ob ein Wert wichtig ist, sondern auch wie oft er geändert wird.
  - Trenne bewusst Endstand und Zwischenschritt.
selfCheckPoints:
  - Kannst du erklären, warum ständiges Schreiben unruhig ist?
  - Kannst du einen sinnvolleren Speichermoment beschreiben?
transferIdeas:
  - Übertrage die Logik auf Menüs, Betriebszähler oder Kalibrierwerte.
reflectionPrompt: "Welche Leitfrage hilft dir am meisten, EEPROM nicht wie ein Dauerprotokoll zu behandeln?"
---

## Aufgabe 1

Warum ist diese Idee technisch zu grob:

> „Immer wenn sich ein Wert ändert, speichere ich ihn sofort im EEPROM.“

## Aufgabe 2

Eine Helligkeitseinstellung wird mit Tasterdruck in kleinen Schritten verändert.

Erkläre, warum es oft ruhiger ist, den endgültigen Wert statt jeden Zwischenschritt zu speichern.

## Aufgabe 3

Formuliere in 2 bis 4 Sätzen, wie Persistenz und Schreibhäufigkeit zusammen betrachtet werden sollten.

## Aufgabe 4

Nenne ein Beispiel für einen EEPROM-Wert, der gut passt, und ein Beispiel für einen Wert, der eher kein guter Kandidat für ständiges Speichern ist. Begründe beide kurz.
