---
title: "MOSFET-Schalter und Freilaufdiode beurteilen"
description: "Übe den sicheren Umgang mit „MOSFET-Low-Side-Schalter und Freilaufdiode verstehen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "mosfet-low-side-schalter-und-freilaufdiode"
taskId: "et-mc-v94-mosfet-low-side"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "mosfet"
  - "transistor"
  - "freilaufdiode"
  - "relais"
  - "motor"
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
reflectionPrompt: "Was war bei „MOSFET-Schalter und Freilaufdiode beurteilen“ der wichtigste Unterschied zwischen Vermutung und sauberer Begründung?"
level: "mittel"
draft: false
---
## Aufgabe 1: Fehlerbild lesen

Ein kleines Relais ist direkt zwischen GPIO-Pin und Masse angeschlossen. Erkläre, warum diese Schaltung riskant ist.

## Aufgabe 2: Aufbau oder Ablauf begründen

Beschreibe eine bessere Low-Side-Schaltung mit MOSFET und Freilaufdiode. Nenne dabei Steuerpfad und Lastpfad.

## Aufgabe 3: Gegenprobe planen

Nach dem Abschalten eines Relais startet der Mikrocontroller manchmal neu. Plane zwei sinnvolle Gegenprüfungen.
