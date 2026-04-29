---
title: "CSS-Architektur und Namenskonventionen"
description: "Allgemeiner Überblick über CSS-Architektur, Benennung und wartbare Stylesheets."
subject: "web-development"
section: "CSS"
topicPath: ["css-architektur-und-namenskonventionen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
draft: false
---
# CSS-Architektur und Namenskonventionen

CSS-Architektur beschreibt, wie Stylesheets so aufgebaut werden, dass Regeln verständlich, wiederverwendbar und langfristig änderbar bleiben.

In wachsenden Projekten entstehen ohne Struktur schnell Konflikte, Überschreibungen und schwer nachvollziehbare Abhängigkeiten.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Namenskonventionen machen deutlich, wofür eine Klasse gedacht ist.

Komponentenorientierte Strukturen begrenzen die Reichweite von Regeln.

Utilities, Komponentenklassen und globale Basisregeln sollten klar getrennt sein.

## Abgrenzung

CSS-Architektur ist kein einzelnes Framework, sondern ein Satz von Ordnungsprinzipien.

## Beispiele und typische Situationen

Eine Kartenklasse sollte nicht unbemerkt globale Layoutregeln verändern.

Einheitliche Präfixe können Komponenten, Zustände oder Hilfsklassen sichtbar machen.

## Häufige Missverständnisse

Häufig wird jedes Problem mit höherer Spezifität gelöst. Dadurch entstehen riskante Überschreibungsketten.

## Kurz zusammengefasst

Gute CSS-Architektur macht sichtbar, welche Regel wofür verantwortlich ist.
