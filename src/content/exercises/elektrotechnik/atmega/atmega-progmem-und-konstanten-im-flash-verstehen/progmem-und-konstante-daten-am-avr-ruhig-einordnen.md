---
title: PROGMEM und konstante Daten am AVR ruhig einordnen
description: Ordne konstante Tabellen, Flash und SRAM am AVR sauber zueinander und erkläre die Rolle von PROGMEM.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - speicher-und-programmdaten
  - atmega-progmem-und-konstanten-im-flash-verstehen
  - progmem-und-konstante-daten-am-avr-ruhig-einordnen
taskId: ET-ATMEGA-MEM-404
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - progmem
hintPoints:
  - Frage zuerst, ob sich die Daten überhaupt ändern.
  - Trenne Programmspeicher und Laufzeitspeicher bewusst.
selfCheckPoints:
  - Kannst du erklären, warum PROGMEM mehr ist als bloß ein Makro?
  - Kannst du konstante Daten und veränderliche Laufzeitdaten sauber trennen?
transferIdeas:
  - Übertrage die Logik auf Texttabellen, Menüs und Lookup-Werte.
reflectionPrompt: "Warum ist die ruhige Frage nach der Datenrolle oft wichtiger als die konkrete Syntax?"
---

## Aufgabe 1: Datenrolle benennen

Erkläre in 3 bis 5 Sätzen, warum eine feste Lookup-Tabelle am AVR fachlich anders behandelt werden sollte als ein Zählerwert, der sich ständig ändert.

## Aufgabe 2: Flash und SRAM trennen

Ordne die beiden Speicherrollen kurz zu:

- Flash
- SRAM

Welche Rolle passt eher zu konstanten Texten oder Tabellen?

## Aufgabe 3: PROGMEM in Worte fassen

Formuliere in einem Satz, was PROGMEM fachlich leistet.

## Aufgabe 4: Denkfehler prüfen

Bewerte diese Aussage:

> „Wenn Daten im Programm stehen, ist doch egal, in welchem Speicher sie später landen.“

Erkläre kurz, warum diese Aussage zu grob ist.
