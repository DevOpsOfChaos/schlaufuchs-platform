---
title: "Blockierende Delays am AVR ruhig bewerten"
description: "Bewerte Delay-Schleifen im Mikrocontroller-Programm als Strukturfrage und erkläre, wann Reaktivität darunter leidet."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-delay-schleifen-und-reaktivitaet-verstehen", "blockierende-delays-am-avr-ruhig-bewerten"]
taskId: "ET-ATMEGA-STRUKTUR-308"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
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
