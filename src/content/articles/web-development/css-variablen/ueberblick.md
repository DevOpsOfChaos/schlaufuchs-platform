---
title: "CSS-Variablen"
description: "Überblick über CSS Custom Properties als wiederverwendbare Werte im Stylesheet."
subject: "web-development"
section: "CSS"
topicPath: ["css-variablen", "ueberblick"]
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
# CSS-Variablen

CSS-Variablen, offiziell Custom Properties, speichern Werte direkt im CSS. Sie beginnen meist mit `--` und werden mit `var()` verwendet. Dadurch lassen sich Farben, Abstände, Schriftgrößen oder andere wiederkehrende Werte zentraler und flexibler definieren.

## Einordnung

Custom Properties sind besonders nützlich für Designsysteme, Themes und konsistente Gestaltung. Anders als viele Präprozessorvariablen wirken sie zur Laufzeit im Browser und folgen der Kaskade. Dadurch können Werte abhängig von Kontext, Media Query oder Theme überschrieben werden.

## Zentrale Aspekte

- **Definition auf `:root` oder einem Container:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Verwendung mit `var(--name)`:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Fallback-Werte:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Vererbung und Kaskade:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Farbsystem kann Variablen wie `--color-primary` oder `--surface` nutzen. Ein Dark Mode überschreibt dieselben Variablen in einem anderen Kontext. Komponenten verwenden dann die Bedeutungsvariablen statt feste Einzelwerte.

## Abgrenzung

CSS-Variablen lösen nicht automatisch Strukturprobleme im CSS. Schlechte Namen, zu viele Sonderfälle oder unklare Verantwortlichkeiten können weiterhin zu schwer wartbaren Stylesheets führen.

## Häufige Missverständnisse

Häufig werden Variablen nach konkreten Farben statt nach Bedeutung benannt. `--blue` ist weniger flexibel als `--color-link` oder `--accent`. Ein weiterer Fehler ist, die Kaskade zu vergessen und sich über unerwartete Überschreibungen zu wundern.

## Kurz zusammengefasst

- CSS-Variablen machen wiederkehrende Werte zentral nutzbar.
- Sie folgen Kaskade und Vererbung.
- Gute Namen beschreiben Bedeutung statt nur Aussehen.
