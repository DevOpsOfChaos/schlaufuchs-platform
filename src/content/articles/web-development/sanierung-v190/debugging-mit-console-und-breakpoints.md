---
title: "Debugging mit Console und Breakpoints"
description: "Verstehe fehler schrittweise eingrenzen als ruhigen Baustein für wartbare Frontend-Projekte."
subject: "web-development"
section: "javascript-vertiefung"
topicPath:
  - "javascript-vertiefung"
  - "debugging"
  - "debugging-mit-console-und-breakpoints"
learningGoals:
  - "Fehler schrittweise eingrenzen"
  - "typische Fehlerquellen erkennen"
  - "eine kleine Frontend-Entscheidung begründen"
practiceIdeas:
  - "Beschreibe eine Debugging-Reihenfolge für eine nicht reagierende Schaltfläche."
  - "Formuliere eine Mini-Checkliste für eine zweite ähnliche Oberfläche."
commonMistakes:
  - "Technik wird benutzt, ohne den Zweck zu klären."
  - "Fehlerfälle werden erst nachträglich betrachtet."
  - "HTML, CSS und JavaScript werden unnötig vermischt."
keyTakeaways:
  - "console-Ausgaben prüfen Annahmen, ersetzen aber keine Struktur."
  - "Kleine, klare Prüfschritte machen Frontend-Code wartbarer."
recognizeSignals:
  - "Das Thema taucht auf, wenn Verhalten, Daten oder Zustand einer Webseite bewusst gesteuert werden müssen."
selfCheckPoints:
  - "Kann ich Zweck, Daten und sichtbare Wirkung trennen?"
  - "Ist mindestens ein Fehlerfall genannt?"
  - "Bleibt die Lösung auch ohne Spezialwissen nachvollziehbar?"
level: "mittel"
tags:
  - "debugging"
  - "javascript"
  - "frontend"
  - "web-development"
draft: false
---

![Didaktische Skizze zu Debugging mit Console und Breakpoints](/schlaufuchs-platform/images/web-development/sanierung-v190/debugging-mit-console-und-breakpoints.svg)

Debugging mit Console und Breakpoints gehört zur JavaScript-Vertiefung im Web Development. Die Seite betrachtet das Thema nicht als isolierten Code-Trick, sondern als Entscheidungspunkt: Welche Aufgabe hat der Baustein, welche Daten oder Elemente sind beteiligt und wie bleibt die Lösung auch später verständlich?

## Worum es geht

Der Kern ist: **fehler schrittweise eingrenzen**. JavaScript wird schnell unübersichtlich, wenn jede Aktion sofort als Code umgesetzt wird. Ruhiger ist es, zuerst die beteiligten Informationen, Zustände und sichtbaren Wirkungen zu ordnen.

Wichtige Leitgedanken:

- console-Ausgaben prüfen Annahmen, ersetzen aber keine Struktur.
- Breakpoints zeigen Reihenfolge und Zwischenwerte.
- Eine Fehlerhypothese sollte vor dem Test formuliert werden.

## Typische Entscheidung

In der Praxis stellt sich meist nicht nur die Frage, welche Syntax funktioniert. Wichtiger ist, ob die Aufgabe klein genug geschnitten ist. Eine gute Lösung beschreibt deshalb zuerst den Zweck, dann die beteiligten Daten oder DOM-Elemente und erst danach die konkrete Umsetzung.

## Ruhiger Prüfweg

1. **Zweck klären:** Was soll für Nutzerinnen und Nutzer besser werden?
2. **Daten und Zustand trennen:** Welche Werte liegen vor, welcher Zustand gilt gerade?
3. **Wirkung beschreiben:** Was soll sich sichtbar ändern?
4. **Fehlerfall prüfen:** Was passiert bei leerer Eingabe, fehlendem Element oder unerwarteten Daten?
5. **Abnahme formulieren:** Woran erkennt man, dass die Lösung fertig ist?

## Mini-Beispiel

Ein kleines Frontend-Feature sollte immer so beschreibbar sein, dass eine zweite Person es prüfen kann. Statt „das Skript macht die Liste dynamisch“ ist besser: „Das Skript liest eine Datenliste, filtert sie nach Suchbegriff und rendert für leere Ergebnisse eine verständliche Meldung.“

## Merksatz

Debugging mit Console und Breakpoints ist dann sauber umgesetzt, wenn Zweck, Daten, Zustand, sichtbare Wirkung und Fehlerfall getrennt erkennbar bleiben.
