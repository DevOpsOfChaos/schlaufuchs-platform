---
title: "Design Tokens"
description: "Allgemeiner Überblick über Design Tokens als benannte Gestaltungswerte in digitalen Oberflächen."
subject: "web-development"
section: "Designsysteme"
topicPath: ["design-tokens", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "Designsysteme"]
draft: false
---
# Design Tokens

Design Tokens sind benannte Werte für wiederkehrende Gestaltungsentscheidungen, zum Beispiel Farben, Abstände, Schriftgrößen oder Radien.

Sie verbinden Design und Implementierung, indem abstrakte Entscheidungen nicht an vielen Stellen als Einzelwerte verstreut werden.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Tokens können semantisch benannt werden, etwa für Hintergrund, Text oder Warnung.
- Sie erleichtern Themes und konsistente Komponenten.
- Technisch können Tokens als CSS-Variablen, JSON oder Build-Artefakte erscheinen.

## Abgrenzung

Ein Token-System ist kein Ersatz für Gestaltung. Es dokumentiert Entscheidungen, aber die Entscheidungen selbst müssen sinnvoll getroffen werden.

## Beispiele

- `color-text-muted` beschreibt eine Rolle besser als ein zufälliger Grauwert.
- Ein einheitlicher Abstandstoken verhindert viele fast gleiche Pixelwerte.

## Häufiges Missverständnis

Häufig werden Tokens nur nach Rohwerten benannt. Dann bleibt unklar, wann welcher Wert verwendet werden soll.

## Kurz zusammengefasst

Design Tokens machen Gestaltung benennbar und wartbar. Sie helfen, Oberflächen konsistent weiterzuentwickeln.
