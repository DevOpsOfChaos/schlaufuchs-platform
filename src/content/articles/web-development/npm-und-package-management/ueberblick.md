---
title: "npm und Package Management"
description: "Allgemeiner Überblick über npm, package.json, Lockfiles und Abhängigkeiten in Webprojekten."
subject: "web-development"
section: "Werkzeuge"
topicPath: ["npm-und-package-management", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Werkzeuge"]
draft: false
---
# npm und Package Management

npm ist ein Paketmanager für JavaScript-Projekte. Er installiert Abhängigkeiten, führt Skripte aus und nutzt `package.json` sowie Lockfiles.

## Einordnung

Moderne Webprojekte bestehen aus Frameworks, Build-Tools und Bibliotheken. Dadurch entstehen Komfort, aber auch Verantwortung für Versionen, Updates und Sicherheit.

## Zentrale Aspekte

- **package.json:** Beschreibt Skripte, Abhängigkeiten und Metadaten.
- **Lockfile:** Fixiert konkrete Versionen für reproduzierbare Installationen.
- **Scripts:** Befehle wie `npm run build` kapseln Projektaufgaben.
- **Updates:** Abhängigkeiten müssen getestet statt blind übernommen werden.

## Beispiele und Zusammenhang

Ein Projekt kann Astro als Abhängigkeit und `npm run build` als Buildbefehl definieren. Das Lockfile hält konkrete Paketversionen fest.

## Abgrenzung

`package.json` beschreibt gewünschte Bereiche, das Lockfile konkrete Auflösungen.

## Häufige Missverständnisse

`package.json` wird geändert, ohne das Lockfile passend zu aktualisieren.

## Kurz zusammengefasst

- npm verwaltet Abhängigkeiten und Skripte.
- Lockfiles machen Installationen reproduzierbarer.
- Updates sollten gebaut und getestet werden.
