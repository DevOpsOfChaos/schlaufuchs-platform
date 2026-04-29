---
title: "Zustand und Seiteneffekte – Überblick"
description: "Ein ruhiger Informatik-Überblick zu Zustand und Seiteneffekte: Ziel, Daten, Entscheidung und Kontrolle werden getrennt aufgebaut."
subject: "informatik"
section: "softwareentwurf"
topicPath: ["softwareentwurf", "zustand-und-seiteneffekte"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "softwareentwurf", "zustand-und-seiteneffekte", "systemdesign", "v210"]
draft: false
---
![Zustand und Seiteneffekte](/schlaufuchs-platform/images/informatik/sanierung-v210-algorithmen-systemdesign/zustand-und-seiteneffekte.svg)

## Worum es hier geht

**Zustand und Seiteneffekte** ist ein Baustein, um Informatik nicht als Sammlung einzelner Befehle zu lesen, sondern als geordneten Denkweg. Wichtig ist, Eingaben, Regeln, Zustände, Schnittstellen und Kontrollen bewusst voneinander zu trennen.

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

Zustand und Seiteneffekte wird verständlich, wenn Ablauf, Daten, Entscheidung und Kontrolle getrennt beschrieben werden.
