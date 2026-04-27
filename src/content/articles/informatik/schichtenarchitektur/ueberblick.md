---
title: "Schichtenarchitektur"
description: "Allgemeiner Überblick über Schichtenarchitektur und die Trennung von Verantwortlichkeiten in Softwaresystemen."
subject: informatik
section: "Softwaredesign"
topicPath:
  - "schichtenarchitektur"
  - "ueberblick"
learningGoals:
  - "Du kannst Schichtenarchitektur als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Schichten werden oft benannt, aber überall durch Querverbindungen umgangen."
keyTakeaways:
  - "Schichten trennen Verantwortlichkeiten."
  - "Klare Abhängigkeiten erleichtern Änderungen."
  - "Das Modell muss praktisch eingehalten werden."
recognizeSignals:
  - "UI, Fachregeln und Datenzugriff vermischen sich."
  - "Änderungen an einer Stelle erzwingen unerwartete Anpassungen."
selfCheckPoints:
  - "Kann ich Schichtenarchitektur in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "architektur"
  - "schichten"
draft: false
---

# Schichtenarchitektur

Schichtenarchitektur ordnet Software in Ebenen mit unterschiedlichen Verantwortlichkeiten, etwa Darstellung, Anwendung, Fachlogik und Datenzugriff.

## Einordnung

Das Modell hilft, Abhängigkeiten zu ordnen. Eine Änderung an der Datenbank soll nicht direkt die Oberfläche betreffen.

## Zentrale Aspekte

- **Darstellung:** Ausgabe und Bedienung.
- **Anwendung:** Koordination von Abläufen.
- **Fachlogik:** Regeln und Begriffe des Problems.
- **Infrastruktur:** Datenbank, Dateisystem und Netzwerk werden gekapselt.

## Beispiele und Zusammenhang

In einer Aufgabenplattform kann die Anzeige einer Aufgabe getrennt sein von der Logik, die passende Aufgaben auswählt.

## Abgrenzung

Schichtenarchitektur bedeutet nicht automatisch viele Ordner, sondern klare Verantwortungen und Abhängigkeiten.

## Häufige Missverständnisse

Schichten werden oft benannt, aber überall durch Querverbindungen umgangen.

## Kurz zusammengefasst

- Schichten trennen Verantwortlichkeiten.
- Klare Abhängigkeiten erleichtern Änderungen.
- Das Modell muss praktisch eingehalten werden.
