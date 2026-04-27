---
title: "Schnittstellen und APIs"
description: "Allgemeiner Überblick über Schnittstellen, APIs und klare Verträge zwischen Softwareteilen."
subject: informatik
section: "Softwareentwicklung"
topicPath:
  - "schnittstellen-und-apis"
  - "ueberblick"
learningGoals:
  - "Du kannst Schnittstellen und APIs grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Schnittstellen und APIs nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Schnittstellen und APIs beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Schnittstellen und APIs, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Schnittstellen und APIs in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "informatik"
  - "api"
  - "schnittstellen"
  - "software"
draft: false
---
# Schnittstellen und APIs

Eine Schnittstelle beschreibt, wie zwei Systeme, Module oder Programme miteinander kommunizieren. Eine API ist eine solche Schnittstelle für Softwarezugriffe.

## Bedeutung

Gute Schnittstellen verstecken innere Details und machen Erwartungen sichtbar. Dazu gehören Eingaben, Ausgaben, Fehlerfälle, Formate, Versionen und Nebenwirkungen.

## Typische Teilaspekte

- **Vertrag:** Eine API legt fest, was aufgerufen werden kann und welche Antwort zu erwarten ist.
- **Abstraktion:** Nutzende müssen nicht die interne Umsetzung kennen.
- **Stabilität:** Änderungen an Schnittstellen können abhängige Systeme brechen.
- **Fehlerfälle:** Gute APIs beschreiben nicht nur Erfolg, sondern auch Scheitern.

## Beispiel

Eine Wetter-API kann eine Stadt als Parameter erwarten und eine strukturierte JSON-Antwort mit Temperatur und Beschreibung liefern.

## Abgrenzung

Eine API ist nicht automatisch ein Webdienst. Auch Bibliotheken, Betriebssystemfunktionen oder Klassen können Schnittstellen besitzen.

## Häufige Missverständnisse

Häufig wird nur der erfolgreiche Beispielaufruf betrachtet. Für robuste Software sind Fehlercodes, leere Antworten und Versionierung genauso wichtig.

## Einordnung im Gesamtzusammenhang

Schnittstellen verbinden Softwarearchitektur, Datenformate, Tests, Dokumentation und Wartbarkeit.
