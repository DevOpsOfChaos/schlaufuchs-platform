---
title: "Threat Modeling"
description: "Allgemeiner Überblick über Threat Modeling als strukturierte Betrachtung möglicher Angriffe und Risiken."
subject: informatik
section: "Sicherheit"
topicPath:
  - "threat-modeling"
  - "ueberblick"
learningGoals:
  - "Du kannst Threat Modeling als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Oft werden nur technische Schwachstellen gesucht und fachliche Missbrauchsmöglichkeiten übersehen."
keyTakeaways:
  - "Threat Modeling macht Risiken früh sichtbar."
  - "Schutzwerte, Angreifer und Vertrauensgrenzen stehen im Mittelpunkt."
  - "Sicherheit wird priorisierbarer."
recognizeSignals:
  - "Ein System verarbeitet sensible Daten oder kritische Aktionen."
  - "Vor dem Bau sollen Risiken geklärt werden."
selfCheckPoints:
  - "Kann ich Threat Modeling in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "sicherheit"
  - "threat modeling"
  - "risiko"
draft: false
---

# Threat Modeling

Threat Modeling ist eine strukturierte Methode, mögliche Bedrohungen für ein System zu erkennen und Gegenmaßnahmen zu priorisieren.

## Einordnung

Der Ansatz macht Sicherheit schon beim Entwurf sichtbar. Datenflüsse, Vertrauensgrenzen und kritische Funktionen werden bewusst betrachtet.

## Zentrale Aspekte

- **Schutzwerte:** Es wird geklärt, welche Daten oder Funktionen wichtig sind.
- **Angreiferperspektive:** Mögliche Ziele und Fähigkeiten werden betrachtet.
- **Vertrauensgrenzen:** Übergänge zwischen Systemteilen werden geprüft.
- **Maßnahmen:** Risiken werden reduziert, akzeptiert oder untersucht.

## Beispiele und Zusammenhang

Bei einer Login-Funktion zählen Passwörter, Sitzungen, Rate Limits, Fehlermeldungen und Wiederherstellungsprozesse zum Modell.

## Abgrenzung

Threat Modeling ist kein einzelner Sicherheitstest, sondern ein Denk- und Dokumentationsprozess.

## Häufige Missverständnisse

Oft werden nur technische Schwachstellen gesucht und fachliche Missbrauchsmöglichkeiten übersehen.

## Kurz zusammengefasst

- Threat Modeling macht Risiken früh sichtbar.
- Schutzwerte, Angreifer und Vertrauensgrenzen stehen im Mittelpunkt.
- Sicherheit wird priorisierbarer.
