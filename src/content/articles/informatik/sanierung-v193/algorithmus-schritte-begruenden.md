---
title: "Algorithmus-Schritte begründen"
description: "Verstehe nicht nur was passiert, sondern warum es passiert erklären als ruhigen Informatik-Baustein für Qualität, Tests und nachvollziehbare Änderungen."
subject: "informatik"
section: "softwarequalitaet-und-datenpraxis"
topicPath:
  - "softwarequalitaet-und-datenpraxis"
  - "datenstrukturen-und-algorithmen"
  - "algorithmus-schritte-begruenden"
learningGoals:
  - "Nicht nur was passiert, sondern warum es passiert erklären"
  - "Beobachtung, Entscheidung und Prüfung klar trennen"
  - "einen kleinen überprüfbaren nächsten Schritt formulieren"
practiceIdeas:
  - "Beschreibe einen Suchalgorithmus mit Start, Schritt und Abbruch."
  - "Formuliere einen zweiten Prüfpunkt, der ohne große Umstellung auskommt."
commonMistakes:
  - "Es wird direkt geändert, bevor Verhalten und Erwartung klar sind."
  - "Tests prüfen zu viele Dinge auf einmal."
  - "Datenstruktur, Schnittstelle oder Fehlerfall bleiben unausgesprochen."
keyTakeaways:
  - "Ein Algorithmus besteht aus Zuständen und Übergängen."
  - "Jeder Schritt sollte ein Ziel haben."
  - "Abbruchbedingungen verhindern Endlosschleifen."
recognizeSignals:
  - "Das Thema taucht auf, wenn Code wachsen, getestet, umgebaut oder erklärt werden muss."
selfCheckPoints:
  - "Kann ich das erwartete Verhalten in einem Satz beschreiben?"
  - "Ist klar, welche Daten, Schnittstellen oder Zustände betroffen sind?"
  - "Gibt es einen kleinen Test oder Kontrollpunkt nach der Änderung?"
level: "mittel"
tags:
  - "algorithmus"
  - "schritte"
  - "begruenden"
  - "informatik"
  - "softwarequalitaet"
  - "v193"
draft: false
---

![Didaktische Skizze zu Algorithmus-Schritte begründen](/schlaufuchs-platform/images/informatik/sanierung-v193/algorithmus-schritte-begruenden.svg)

Algorithmus-Schritte begründen gehört zur Informatik-Sanierung v193. Die Seite behandelt das Thema nicht als isolierten Programmiertrick, sondern als Qualitätsentscheidung: Was soll der Code leisten, woran erkennt man korrektes Verhalten und wie bleibt die Änderung später verständlich?

## Worum es geht

Der Kern ist: **nicht nur was passiert, sondern warum es passiert erklären**. Gute Informatik-Praxis beginnt damit, ein Problem klein genug zu beschreiben, damit es geprüft werden kann. Danach werden Daten, Zustände, Fehlerfälle und Schnittstellen bewusst benannt.

Wichtige Leitgedanken:

- Ein Algorithmus besteht aus Zuständen und Übergängen.\n- Jeder Schritt sollte ein Ziel haben.\n- Abbruchbedingungen verhindern Endlosschleifen.\n
## Arbeitsweise

Gehe ruhig in vier Schritten vor:

1. **Erwartung klären:** Was soll am Ende beobachtbar stimmen?
2. **Daten lesen:** Welche Eingaben, Zustände oder Strukturen sind beteiligt?
3. **Risiko benennen:** Was könnte beim Ändern, Testen oder Umbauen brechen?
4. **Kontrolle planen:** Welcher kleine Test zeigt, ob die Entscheidung trägt?

## Typische Fehlerstelle

Viele Fehler entstehen nicht durch fehlendes Wissen, sondern durch zu große Schritte. Wenn Anforderung, Datenstruktur, Testfall und Änderung gleichzeitig unscharf bleiben, wird Fehlersuche schnell zufällig.

## Mini-Beispiel

Statt „die Suche ist kaputt“ ist hilfreicher:

- Welche Eingabe wurde verwendet?
- Welches Ergebnis wurde erwartet?
- Welches Ergebnis kam wirklich zurück?
- Welche kleinste Änderung oder welcher kleinste Test kann die Vermutung prüfen?

## Merksatz

Informatik wird stabiler, wenn Verhalten, Daten und Prüfung klein genug sind, um sie gemeinsam zu verstehen.
