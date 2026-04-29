---
title: "UART-Baudrate und Taktbasis ruhig zuordnen"
description: "Ordne Ziel-Baudrate, Taktbasis und UBRR-Wert am AVR sauber zueinander und erkläre typische Zeitbasisfehler."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-baudrate-und-ubrr-verstehen", "uart-baudrate-und-taktbasis-ruhig-zuordnen"]
taskId: "ET-ATMEGA-UART-301"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Zielwert und Registerwert trennen

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen einer gewünschten Baudrate und dem UBRR-Registerwert.

## Aufgabe 2: Zwei Projekte vergleichen

Projekt A arbeitet mit `F_CPU = 8 MHz`, Projekt B mit `F_CPU = 16 MHz`. Beide sollen mit `9600 Baud` senden.

Erkläre, warum trotzdem nicht automatisch derselbe Registerwert sinnvoll ist.

## Aufgabe 3: Fehlerbild deuten

Ein Projekt sendet eigentlich einfache Textmeldungen. Im Terminal erscheint aber Zeichenmüll.

Begründe, warum das oft eher auf ein Zeitbasisproblem als auf einen inhaltlichen Textfehler hinweist.

## Aufgabe 4: Mini-Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Takt**, **Baudrate** und **UBRR** alle sinnvoll vorkommen.
