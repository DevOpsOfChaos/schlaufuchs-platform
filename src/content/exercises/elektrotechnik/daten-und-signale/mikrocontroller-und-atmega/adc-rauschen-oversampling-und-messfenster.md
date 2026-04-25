---
title: "ADC-Rauschen und Messfenster beurteilen"
description: "Übe den sicheren Umgang mit „ADC-Rauschen, Oversampling und Messfenster einordnen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "adc-rauschen-oversampling-und-messfenster"
taskId: "et-mc-v94-adc-rauschen"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "adc"
  - "rauschen"
  - "oversampling"
  - "mittelwert"
  - "messfenster"
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
reflectionPrompt: "Was war bei „ADC-Rauschen und Messfenster beurteilen“ der wichtigste Unterschied zwischen Vermutung und sauberer Begründung?"
level: "fortgeschritten"
draft: false
---
## Aufgabe 1: Fehlerbild lesen

Ein ADC-Wert schwankt bei konstantem Poti zwischen 508 und 513. Warum ist das nicht automatisch ein Codefehler?

## Aufgabe 2: Aufbau oder Ablauf begründen

Für eine Temperaturanzeige soll der Wert ruhig wirken. Begründe ein Messfenster über mehrere Werte.

## Aufgabe 3: Gegenprobe planen

Für eine schnelle Klopferkennung wird sehr stark gemittelt. Welcher Nachteil entsteht?
