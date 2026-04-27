---
title: "Deployment und statisches Hosting"
description: "Überblick über Deployment, Build-Artefakte und statisches Hosting für Webprojekte."
subject: web-development
section: "Grundlagen"
topicPath:
  - "deployment-und-statisches-hosting"
  - "ueberblick"
learningGoals:
  - "Du kannst Deployment und statisches Hosting als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Pfade funktionieren lokal, aber im veröffentlichten Unterverzeichnis nicht."
keyTakeaways:
  - "Deployment veröffentlicht gebaute Dateien."
  - "Statisches Hosting eignet sich für viele Inhaltsseiten."
  - "Build, Pfade und Automatisierung müssen zusammenpassen."
recognizeSignals:
  - "Eine Seite funktioniert lokal, aber nicht auf GitHub Pages."
  - "Es geht um `dist`, Workflow, Base Path oder Veröffentlichung."
selfCheckPoints:
  - "Kann ich Deployment und statisches Hosting in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "deployment"
  - "hosting"
  - "static"
draft: false
---

# Deployment und statisches Hosting

Deployment bringt ein Webprojekt aus der Entwicklung in eine öffentlich nutzbare Umgebung. Bei statischem Hosting werden gebaute Dateien ausgeliefert.

## Einordnung

Der Begriff trennt Quellcode, Build und Veröffentlichung. Nach dem Build entsteht ein Ausgabeordner, der nicht dasselbe ist wie das Repository.

## Zentrale Aspekte

- **Build-Artefakt:** Der Build erzeugt die veröffentlichten Dateien.
- **Hosting-Ziel:** GitHub Pages, CDNs oder Speicher können statische Dateien ausliefern.
- **Base Path:** Unterverzeichnisse beeinflussen Links und Assets.
- **Automatisierung:** CI/CD veröffentlicht nach Tests oder Builds automatisch.

## Beispiele und Zusammenhang

Bei GitHub Pages kann ein Workflow nach jedem Push auf `main` bauen und den Inhalt von `dist` veröffentlichen.

## Abgrenzung

Deployment ist nicht dasselbe wie ein lokaler Entwicklungsserver. Deployment soll reproduzierbare Ausgabedateien erzeugen.

## Häufige Missverständnisse

Pfade funktionieren lokal, aber im veröffentlichten Unterverzeichnis nicht.

## Kurz zusammengefasst

- Deployment veröffentlicht gebaute Dateien.
- Statisches Hosting eignet sich für viele Inhaltsseiten.
- Build, Pfade und Automatisierung müssen zusammenpassen.
