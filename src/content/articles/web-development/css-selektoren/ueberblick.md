---
title: "CSS-Selektoren"
description: "Allgemeiner Überblick über CSS-Selektoren, ihre Bedeutung und den gezielten Zugriff auf HTML-Elemente."
subject: "web-development"
section: "CSS"
topicPath: ["css-selektoren", "ueberblick"]
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
# CSS-Selektoren

CSS-Selektoren bestimmen, auf welche HTML-Elemente eine Gestaltungsregel angewendet wird. Sie bilden die Verbindung zwischen der Struktur eines Dokuments und seiner Darstellung.

## Bedeutung

Ein Selektor kann sehr allgemein oder sehr gezielt sein. Dadurch lassen sich Grundstile für ganze Elementgruppen, Varianten für Klassen oder Zustände für interaktive Elemente formulieren. Gute Selektoren halten CSS wartbar und vorhersehbar.

## Typische Teilaspekte

- **Elementselektor:** Spricht alle Elemente eines Typs an, etwa alle Absätze.
- **Klassenselektor:** Beschreibt wiederverwendbare Varianten und Komponenten.
- **Kombinatoren:** Beschreiben Beziehungen zwischen Elementen, etwa Nachfahren oder direkte Kinder.
- **Pseudoklassen:** Erfassen Zustände wie Hover, Fokus oder erstes Kind.

## Beispiel

Eine Navigationsliste kann allgemeine Listenstile besitzen, während Links innerhalb der Navigation gezielt andere Abstände und Fokuszustände erhalten.

## Abgrenzung

Selektoren sind nicht dasselbe wie Semantik. Eine Klasse kann Gestaltung erleichtern, ersetzt aber keine sinnvolle HTML-Struktur.

## Häufige Missverständnisse

Häufig werden Selektoren zu lang und abhängig von zufälliger Verschachtelung. Kleine HTML-Änderungen brechen dann unerwartet das Styling.

## Einordnung im Gesamtzusammenhang

CSS-Selektoren stehen in engem Zusammenhang mit Kaskade, Spezifität, Komponentenstruktur und Barrierefreiheit.
