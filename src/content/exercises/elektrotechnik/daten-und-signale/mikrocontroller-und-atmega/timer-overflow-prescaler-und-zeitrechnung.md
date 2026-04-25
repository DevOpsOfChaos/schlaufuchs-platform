---
title: "Timer-Overflow und Prescaler zeitlich einordnen"
description: "Übe den sicheren Umgang mit „Timer-Overflow, Prescaler und Zeitrechnung verbinden“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "timer-overflow-prescaler-und-zeitrechnung"
taskId: "et-mc-v94-timer-overflow-prescaler"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "timer"
  - "overflow"
  - "prescaler"
  - "takt"
  - "zeitrechnung"
hintPoints:
  - "Lies zuerst das beobachtbare Fehlerbild, nicht sofort die vermutete Ursache."
  - "Trenne elektrische Ebene, Codeebene und didaktische Begründung."
  - "Begründe deine Entscheidung mit einem konkreten Prüfschritt."
selfCheckPoints:
  - "Habe ich den Ausgangs- oder Ruhezustand sauber benannt?"
  - "Habe ich mindestens eine Gegenprobe formuliert?"
  - "Ist klar, welche Aussage meine Lösung wirklich beweist?"
transferIdeas:
  - "Übertrage die Prüflogik auf ein anderes Modul oder eine andere Schnittstelle."
  - "Formuliere aus der Lösung eine kurze Checkliste für den nächsten Aufbau."
reflectionPrompt: "Was war bei „Timer-Overflow und Prescaler zeitlich einordnen“ der wichtigste Unterschied zwischen Vermutung und sauberer Begründung?"
level: "mittel"
draft: false
---
## Aufgabe 1: Fehlerbild lesen

Ein Timer läuft achtmal langsamer als erwartet. Nenne zwei mögliche Ursachen.

## Aufgabe 2: Aufbau oder Ablauf begründen

Erkläre, warum ein 8-Bit-Overflow bei gleichem Prescaler früher kommt als ein 16-Bit-Overflow.

## Aufgabe 3: Gegenprobe planen

Wann ist Compare Match didaktisch sauberer als nur auf Overflow zu warten?
