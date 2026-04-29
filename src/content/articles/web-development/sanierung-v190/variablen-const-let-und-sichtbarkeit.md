---
title: "Variablen, const, let und Sichtbarkeit"
description: "Verstehe zustand begrenzt benennen als ruhigen Baustein für wartbare Frontend-Projekte."
subject: "web-development"
section: "javascript-vertiefung"
topicPath:
  - "javascript-vertiefung"
  - "werte-und-typen"
  - "variablen-const-let-und-sichtbarkeit"
learningGoals:
  - "Zustand begrenzt benennen"
  - "typische Fehlerquellen erkennen"
  - "eine kleine Frontend-Entscheidung begründen"
practiceIdeas:
  - "Entscheide für drei Zwischenergebnisse, ob const oder let sinnvoller ist."
  - "Formuliere eine Mini-Checkliste für eine zweite ähnliche Oberfläche."
commonMistakes:
  - "Technik wird benutzt, ohne den Zweck zu klären."
  - "Fehlerfälle werden erst nachträglich betrachtet."
  - "HTML, CSS und JavaScript werden unnötig vermischt."
keyTakeaways:
  - "const schützt die Bindung, nicht automatisch jedes Objekt."
  - "Kleine, klare Prüfschritte machen Frontend-Code wartbarer."
recognizeSignals:
  - "Das Thema taucht auf, wenn Verhalten, Daten oder Zustand einer Webseite bewusst gesteuert werden müssen."
selfCheckPoints:
  - "Kann ich Zweck, Daten und sichtbare Wirkung trennen?"
  - "Ist mindestens ein Fehlerfall genannt?"
  - "Bleibt die Lösung auch ohne Spezialwissen nachvollziehbar?"
level: "mittel"
tags:
  - "werte-und-typen"
  - "variablen"
  - "javascript"
  - "frontend"
  - "web-development"
draft: false
---

![Didaktische Skizze zu Variablen, const, let und Sichtbarkeit](/schlaufuchs-platform/images/web-development/sanierung-v190/variablen-const-let-und-sichtbarkeit.svg)

Variablen, const, let und Sichtbarkeit gehört zur JavaScript-Vertiefung im Web Development. Die Seite betrachtet das Thema nicht als isolierten Code-Trick, sondern als Entscheidungspunkt: Welche Aufgabe hat der Baustein, welche Daten oder Elemente sind beteiligt und wie bleibt die Lösung auch später verständlich?

## Worum es geht

Der Kern ist: **zustand begrenzt benennen**. JavaScript wird schnell unübersichtlich, wenn jede Aktion sofort als Code umgesetzt wird. Ruhiger ist es, zuerst die beteiligten Informationen, Zustände und sichtbaren Wirkungen zu ordnen.

Wichtige Leitgedanken:

- const schützt die Bindung, nicht automatisch jedes Objekt.
- let eignet sich für bewusst veränderliche Zwischenstände.
- Sichtbarkeit verhindert, dass Zustände ungeordnet durch das ganze Skript laufen.

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

Variablen, const, let und Sichtbarkeit ist dann sauber umgesetzt, wenn Zweck, Daten, Zustand, sichtbare Wirkung und Fehlerfall getrennt erkennbar bleiben.
