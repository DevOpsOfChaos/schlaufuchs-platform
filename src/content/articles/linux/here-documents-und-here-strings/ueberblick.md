---
title: "Here-Documents und Here-Strings"
description: "Allgemeiner Überblick über Here-Documents und Here-Strings als Eingabeformen in der Shell."
subject: "linux"
section: "Shell"
topicPath: ["here-documents-und-here-strings", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Shell"]
draft: false
---
# Here-Documents und Here-Strings

Here-Documents und Here-Strings geben Text direkt aus einem Skript oder Befehl an die Standardeingabe eines Programms weiter.

Sie sind nützlich, wenn Programme Eingabe erwarten, Konfigurationsblöcke erzeugt werden oder mehrzeiliger Text kontrolliert übergeben werden soll.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Here-Documents eignen sich für mehrzeilige Eingaben.
- Quoting des Begrenzers entscheidet, ob Variablen im Text expandiert werden.
- Here-Strings geben kurze Zeichenketten direkt an einen Befehl.

## Abgrenzung

Here-Documents sind kein Ersatz für saubere Konfigurationsdateien, wenn Inhalte groß, wiederverwendbar oder sicherheitskritisch werden.

## Beispiele

- Ein Skript kann eine kleine Konfigurationsdatei aus einer Vorlage erzeugen.
- Ein Test kann einem Programm mehrere Eingabezeilen übergeben.

## Häufiges Missverständnis

Häufig wird übersehen, dass Variablen im Here-Document expandieren können. Dadurch entstehen ungewollte Ersetzungen oder Sicherheitsprobleme.

## Kurz zusammengefasst

Here-Documents und Here-Strings sind praktische Shell-Werkzeuge für kontrollierte Eingaben. Wichtig ist, Expansion und Quoting bewusst zu wählen.
