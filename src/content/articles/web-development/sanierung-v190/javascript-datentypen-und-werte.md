---
title: "JavaScript-Datentypen und Werte"
description: "Verstehe werte bewusst unterscheiden als ruhigen Baustein für wartbare Frontend-Projekte."
subject: "web-development"
section: "javascript-vertiefung"
topicPath: ["sanierung-v190", "javascript-datentypen-und-werte"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "javascript-vertiefung"]
draft: false
---
![Didaktische Skizze zu JavaScript-Datentypen und Werte](/schlaufuchs-platform/images/web-development/sanierung-v190/javascript-datentypen-und-werte.svg)

JavaScript-Datentypen und Werte gehört zur JavaScript-Vertiefung im Web Development. Die Seite betrachtet das Thema nicht als isolierten Code-Trick, sondern als Entscheidungspunkt: Welche Aufgabe hat der Baustein, welche Daten oder Elemente sind beteiligt und wie bleibt die Lösung auch später verständlich?

## Worum es geht

Der Kern ist: **werte bewusst unterscheiden**. JavaScript wird schnell unübersichtlich, wenn jede Aktion sofort als Code umgesetzt wird. Ruhiger ist es, zuerst die beteiligten Informationen, Zustände und sichtbaren Wirkungen zu ordnen.

Wichtige Leitgedanken:

- String, Number, Boolean, null und undefined haben unterschiedliche Rollen.
- Eine Prüfung beginnt mit der Frage, welcher Wert wirklich vorliegt.
- Umwandlungen sollten sichtbar und begründet bleiben.

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

JavaScript-Datentypen und Werte ist dann sauber umgesetzt, wenn Zweck, Daten, Zustand, sichtbare Wirkung und Fehlerfall getrennt erkennbar bleiben.
