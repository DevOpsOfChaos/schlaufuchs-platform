---
title: Blockierende Delays am AVR ruhig bewerten
description: Bewerte Delay-Schleifen im Mikrocontroller-Programm als Strukturfrage und erkläre, wann Reaktivität darunter leidet.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstruktur-und-reaktivitaet
  - atmega-delay-schleifen-und-reaktivitaet-verstehen
  - blockierende-delays-am-avr-ruhig-bewerten
taskId: ET-ATMEGA-STRUKTUR-308
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - delay
hintPoints:
  - Frage zuerst, was während der Wartezeit gerade nicht bearbeitet wird.
  - Lies das Problem eher als Strukturfrage als als reine Geschwindigkeitsfrage.
selfCheckPoints:
  - Kannst du erklären, warum ein langes Delay die Hauptschleife blockiert?
  - Kannst du begründen, warum Reaktivität darunter leidet?
transferIdeas:
  - Übertrage die Logik auf Blinkprogramme, Menüsteuerungen und Tasterabfragen.
reflectionPrompt: "Warum ist „läuft doch“ oft eine zu grobe Bewertung für ein Mikrocontroller-Programm?"
---

## Aufgabe 1: Delay erklären

Erkläre in 2 bis 4 Sätzen, warum ein langes `_delay_ms(...)` in der Hauptschleife die Reaktionsfähigkeit verschlechtern kann.

## Aufgabe 2: Beispiel deuten

Ein AVR blinkt eine LED mit `500 ms` Delay und soll gleichzeitig einen Taster prüfen.

Beschreibe, warum sich der Taster trotzdem träge anfühlen kann.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Der Controller ist einfach zu langsam.“

Begründe, warum das oft eher eine zu grobe Deutung als die eigentliche Ursache ist.

## Aufgabe 4: Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Delay**, **Hauptschleife** und **Reaktion** alle sinnvoll vorkommen.
