---
title: UART-Richtung am AVR sauber erklären
description: Erkläre an kleinen UART-Fällen, wann der AVR sendet und wann er empfängt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - uart-und-serielle-schnittstellen
  - atmega-uart-senden-und-empfangen-trennen
  - uart-richtung-am-avr-sauber-erklaeren
taskId: ET-ATMEGA-UART-305
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - uart
  - avr
hintPoints:
  - Frage immer zuerst, wo das Zeichen startet.
  - Lies TX und RX als Richtung relativ zum Controller.
selfCheckPoints:
  - Kannst du erklären, wann der AVR Daten hinausschickt?
  - Kannst du beschreiben, wann Daten von außen hereinkommen?
transferIdeas:
  - Übertrage die Logik auf Terminal, Sensor oder Funkmodul.
reflectionPrompt: "Welche einfache Leitfrage verhindert bei UART die meisten Denkfehler?"
---

## Aufgabe 1

Ein AVR schreibt das Zeichen `A` in ein UART-Datenregister, damit ein PC es sehen kann.

Erkläre, warum das ein Sende-Fall ist.

## Aufgabe 2

Ein PC schickt ein Zeichen an den AVR, und das Hauptprogramm liest es später ein.

Erkläre, warum das ein Empfangs-Fall ist.

## Aufgabe 3

Formuliere in 2 bis 4 Sätzen den Unterschied zwischen TX und RX aus Sicht des Controllers.

## Aufgabe 4

Schreibe eine kurze Merkhilfe für die Frage auf, mit der du bei UART zuerst die Datenrichtung klärst.
