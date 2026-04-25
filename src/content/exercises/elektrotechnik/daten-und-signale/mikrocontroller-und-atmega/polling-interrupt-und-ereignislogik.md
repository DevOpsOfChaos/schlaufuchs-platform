---
title: "Polling und Interrupt passend auswählen"
description: "Übe den sicheren Umgang mit „Polling, Interrupt und Ereignislogik unterscheiden“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "polling-interrupt-und-ereignislogik"
taskId: "et-mc-v94-polling-interrupt"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "polling"
  - "interrupt"
  - "isr"
  - "ereignis"
  - "softwarelogik"
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
reflectionPrompt: "Was war bei „Polling und Interrupt passend auswählen“ der wichtigste Unterschied zwischen Vermutung und sauberer Begründung?"
level: "mittel"
draft: false
---
## Aufgabe 1: Fehlerbild lesen

Ein Taster wird von Menschen gedrückt und die Hauptschleife läuft ohne Delay. Begründe, warum Polling genügen kann.

## Aufgabe 2: Aufbau oder Ablauf begründen

Ein kurzer Impuls von einem Sensor dauert nur wenige Mikrosekunden. Warum kann ein Interrupt sinnvoll sein?

## Aufgabe 3: Gegenprobe planen

Nenne zwei Dinge, die nicht in eine ISR gehören.
