---
title: "Responsive Images und srcset"
description: "Überblick über responsive Bilder, srcset, Größenangaben und performante Bildauslieferung."
subject: web-development
section: "Medien"
topicPath:
  - "responsive-images-und-srcset"
  - "ueberblick"
learningGoals:
  - "Du kannst Responsive Images und srcset als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "`srcset` wird definiert, aber `sizes` fehlt oder passt nicht zum Layout."
keyTakeaways:
  - "Responsive Bilder sparen Daten und verbessern Schärfe."
  - "Der Browser braucht Varianten und Layoutinformationen."
  - "Bildgröße, Format und Layoutstabilität gehören zusammen."
recognizeSignals:
  - "Bilder laden langsam oder sind unscharf."
  - "Eine Seite nutzt große Bilder in responsiven Layouts."
selfCheckPoints:
  - "Kann ich Responsive Images und srcset in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "bilder"
  - "responsive"
  - "performance"
draft: false
---

# Responsive Images und srcset

Responsive Images sorgen dafür, dass Browser je nach Gerät, Bildschirmdichte und Layout passende Bilddateien laden können.

## Einordnung

Bilder sind oft große Ressourcen. Ein einziges großes Bild verschwendet Daten auf kleinen Displays, zu kleine Bilder wirken unscharf.

## Zentrale Aspekte

- **srcset:** Bietet mehrere Bildbreiten oder Pixeldichten an.
- **sizes:** Beschreibt die erwartete Anzeigegröße im Layout.
- **Formatwahl:** Moderne Formate senken Dateigröße, brauchen aber Fallbacks.
- **Layoutstabilität:** Breite und Höhe vermeiden Sprünge beim Laden.

## Beispiele und Zusammenhang

Ein Hero-Bild kann Varianten für Mobilgeräte, Tablet und Desktop haben. Der Browser wählt eine passende Datei statt automatisch die größte zu laden.

## Abgrenzung

Responsive Bilder sind nicht CSS-Skalierung. CSS kann ein großes Bild kleiner anzeigen, aber die Daten wurden trotzdem geladen.

## Häufige Missverständnisse

`srcset` wird definiert, aber `sizes` fehlt oder passt nicht zum Layout.

## Kurz zusammengefasst

- Responsive Bilder sparen Daten und verbessern Schärfe.
- Der Browser braucht Varianten und Layoutinformationen.
- Bildgröße, Format und Layoutstabilität gehören zusammen.
