---
title: "Globbing und Wildcards"
description: "Allgemeiner Überblick über Muster wie Sternchen und Fragezeichen in der Shell."
subject: linux
section: "Shell"
topicPath:
  - "globbing-und-wildcards"
  - "ueberblick"
learningGoals:
  - "Du kannst Globbing und Wildcards grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Globbing und Wildcards nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Globbing und Wildcards beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Globbing und Wildcards, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Globbing und Wildcards in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "linux"
  - "shell"
  - "globbing"
  - "wildcards"
draft: false
---
# Globbing und Wildcards

Globbing bezeichnet die Musterauflösung der Shell für Dateinamen. Zeichen wie `*` oder `?` werden vor dem Programmstart durch passende Dateinamen ersetzt.

## Bedeutung

Dieses Verhalten ist praktisch, weil Befehle auf Gruppen von Dateien angewendet werden können. Gleichzeitig ist wichtig zu wissen, dass meist die Shell und nicht das gestartete Programm die Muster auflöst.

## Typische Teilaspekte

- **Sternchen:** `*` steht für beliebig viele Zeichen in einem Dateinamen.
- **Fragezeichen:** `?` steht für genau ein Zeichen.
- **Zeichenklassen:** Klammerausdrücke können bestimmte Zeichenbereiche erfassen.
- **Quoting:** Anführungszeichen verhindern oder verändern die Musterauflösung.

## Beispiel

`ls *.md` listet Markdown-Dateien, weil die Shell das Muster vorher in passende Namen übersetzt.

## Abgrenzung

Globbing ist nicht dasselbe wie reguläre Ausdrücke. Die Syntax ist einfacher und bezieht sich direkt auf Dateinamen.

## Häufige Missverständnisse

Ein häufiger Fehler ist das unbedachte Verwenden von Wildcards bei Löschbefehlen. Eine zu breite Auswahl kann viele Dateien betreffen.

## Einordnung im Gesamtzusammenhang

Globbing verbindet Shell-Bedienung, Dateisystemverständnis, Automatisierung und sichere Befehlsausführung.
