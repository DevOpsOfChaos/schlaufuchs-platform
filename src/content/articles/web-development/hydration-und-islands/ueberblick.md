---
title: "Hydration und Islands"
description: "Allgemeiner Überblick über Hydration, interaktive Inseln und sparsamen JavaScript-Einsatz im Web."
subject: "web-development"
section: "Grundlagen"
topicPath: ["hydration-und-islands", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Grundlagen"]
draft: false
---
# Hydration und Islands

Hydration verbindet bereits ausgeliefertes HTML im Browser mit JavaScript-Verhalten. Das Islands-Prinzip aktiviert nur einzelne interaktive Bereiche einer ansonsten statischen Seite.

## Einordnung

Der Begriff ist wichtig, weil moderne Seiten oft zwischen Inhalt und Anwendung liegen. Nicht jeder Absatz braucht JavaScript; Suche, Filter oder Modus-Schalter dagegen schon.

## Zentrale Aspekte

- **HTML zuerst:** Inhalte können sichtbar sein, bevor JavaScript vollständig geladen ist.
- **Interaktive Inseln:** Nur bestimmte Bereiche werden als Komponenten aktiviert.
- **Performance:** Weniger JavaScript senkt Ladezeit und Komplexität.
- **Robustheit:** Statische Inhalte bleiben nutzbar, wenn Skripte verzögert laden.

## Beispiele und Zusammenhang

Eine Lernseite kann als statisches HTML erscheinen, während nur ein Suchfeld oder ein Lernmodus-Schalter hydriert wird.

## Abgrenzung

Hydration ist nicht normales Laden einer Webseite, sondern die nachträgliche Verbindung von HTML und Komponentenlogik.

## Häufige Missverständnisse

Oft wird eine ganze Seite als App hydriert, obwohl nur wenige Elemente interaktiv sind.

## Kurz zusammengefasst

- Hydration macht vorhandenes HTML interaktiv.
- Islands begrenzen JavaScript auf notwendige Bereiche.
- Sparsames JavaScript verbessert Performance und Wartbarkeit.
