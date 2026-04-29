---
title: "Parallelität und Race Condition – Überblick"
description: "Ein ruhiger Informatik-Überblick zu Parallelität und Race Condition: Ziel, Daten, Entscheidung und Kontrolle werden getrennt aufgebaut."
subject: "informatik"
section: "systeme"
topicPath: ["systeme", "parallelitaet-und-race-condition"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "systeme", "parallelitaet-und-race-condition", "systemdesign", "v210"]
draft: false
---
![Parallelität und Race Condition](/schlaufuchs-platform/images/informatik/sanierung-v210-algorithmen-systemdesign/parallelitaet-und-race-condition.svg)

## Worum es hier geht

**Parallelität und Race Condition** ist ein Baustein, um Informatik nicht als Sammlung einzelner Befehle zu lesen, sondern als geordneten Denkweg. Wichtig ist, Eingaben, Regeln, Zustände, Schnittstellen und Kontrollen bewusst voneinander zu trennen.

## Grundidee

Viele Informatikfehler entstehen an Übergängen: Eine Funktion bekommt unklare Eingaben, eine Datenstruktur passt nicht zum Zugriffsmuster, ein Test deckt den Randfall nicht ab oder eine Schnittstelle ist nicht sauber beschrieben. Dieses Thema hilft, solche Übergänge sichtbar zu machen.

## Ruhiger Prüfweg

1. **Ziel klären:** Welche Aufgabe soll das System oder der Algorithmus erfüllen?
2. **Daten lesen:** Welche Informationen gehen hinein, welche kommen heraus?
3. **Entscheidung begründen:** Warum passt diese Datenstruktur, Schnittstelle oder Strategie?
4. **Fehlerfall prüfen:** Was passiert bei leeren, falschen, doppelten oder sehr großen Eingaben?
5. **Wartbarkeit bewerten:** Kann ein anderer Mensch den Weg später verstehen?

## Typische Signale

- Eine Aufgabe verlangt nicht nur Code, sondern eine Begründung.
- Es gibt mehrere mögliche Datenstrukturen oder Abläufe.
- Ein Randfall verändert das Ergebnis.
- Ein Fehler tritt nur bei bestimmten Eingaben auf.
- Eine Schnittstelle muss stabil bleiben, obwohl sich die Implementierung ändern kann.

## Häufige Fehler

- Sofort implementieren, ohne Eingaben und Ausgaben zu benennen.
- Den Normalfall testen, aber den Randfall vergessen.
- Datenstruktur nach Gewohnheit wählen statt nach Zugriffsmuster.
- Fehlerbehandlung als Zusatz behandeln, obwohl sie Teil des Entwurfs ist.

## Merksatz

Parallelität und Race Condition wird verständlich, wenn Ablauf, Daten, Entscheidung und Kontrolle getrennt beschrieben werden.
