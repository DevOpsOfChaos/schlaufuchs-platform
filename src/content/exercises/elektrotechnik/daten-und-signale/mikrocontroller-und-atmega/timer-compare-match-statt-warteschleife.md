---
title: "Compare Match als Timerereignis erklären"
description: "Übe, Timerstand, Vergleichswert, Flag und Programmaktion sauber voneinander zu trennen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - timer-compare-match-statt-warteschleife
selfCheckPoints:
  - "Habe ich Beobachtung, Ursache und Lösung sauber getrennt?"
  - "Habe ich mindestens einen typischen Denkfehler vermieden?"
  - "Kann ich meine Antwort ohne reine Schlagwörter begründen?"
taskId: "et-mc-timer-compare-match"
tags:
  - elektrotechnik
  - mikrocontroller
  - timer
  - compare-match
  - zeitbasis
hintPoints:
  - "Compare Match entsteht durch Gleichheit von Timerstand und Vergleichswert."
  - "Das Ereignis ist noch nicht die eigentliche Aktion."
  - "Trenne Überlauf und Compare Match bewusst."
transferIdeas:
  - "Übertrage die Idee auf ein zweites Bauteil oder einen anderen Sensor."
  - "Formuliere eine kurze Checkliste, die du bei echter Fehlersuche nutzen würdest."
reflectionPrompt: "Welche Stelle war eher ein Verständnisproblem als ein reines Codeproblem?"
level: mittel
draft: false
---


## Aufgabe 1: Ereignis beschreiben

Ein Timer zählt von 0 aufwärts. In einem Vergleichsregister steht der Wert 200. Erkläre, was bei Compare Match passiert.

## Aufgabe 2: Überlauf abgrenzen

Erkläre den Unterschied zwischen Compare Match und Timerüberlauf in zwei bis vier Sätzen.

## Aufgabe 3: Warteschleife ersetzen

Ein Programm blinkt eine LED über eine handgeschriebene Warteschleife. Sobald UART-Code ergänzt wird, blinkt die LED unregelmäßiger. Erkläre, warum ein Timer mit Compare Match sauberer sein kann.
