---
title: "less und Pager"
description: "Allgemeiner Überblick über Pager wie less zum Lesen langer Ausgaben."
subject: linux
section: "Shell"
topicPath:
  - "less-und-pager"
  - "ueberblick"
learningGoals:
  - "Du kannst less und Pager als Grundbegriff einordnen."
  - "Du kennst zentrale Eigenschaften und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse zu diesem Thema erkennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird lange Ausgabe direkt ins Terminal geschrieben. Dadurch gehen Anfang und Kontext schnell verloren."
keyTakeaways:
  - "Pager wie less machen lange Texte kontrollierbar."
  - "less und Pager sollte immer im fachlichen Zusammenhang betrachtet werden."
recognizeSignals:
  - "Es geht um Grundlagen, typische Begriffe oder Abgrenzungen rund um less und Pager."
selfCheckPoints:
  - "Kann ich erklären, woran man less und Pager erkennt und wovon es abzugrenzen ist?"
level: einfach
tags:
  - "linux"
  - "less"
  - "pager"
  - "shell"
draft: false
---

# less und Pager

Ein Pager zeigt lange Texte seitenweise an, ohne sie vollständig durch das Terminal laufen zu lassen.

Viele Befehle, Logs und Dokumentationen erzeugen mehr Ausgabe, als auf einen Bildschirm passt.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Mit Tastaturbefehlen kann vorwärts, rückwärts und zu bestimmten Stellen gesprungen werden.

Suchen innerhalb des Textes hilft bei Logs und Dokumentation.

Pager verändern normalerweise nicht die Datei, die sie anzeigen.

## Abgrenzung

Ein Pager ist kein Editor. Er dient zum Lesen und Suchen, nicht zum Bearbeiten.

## Beispiele und typische Situationen

less /var/log/syslog öffnet eine Logdatei seitenweise.

Man-Pages werden typischerweise in einem Pager angezeigt.

## Häufige Missverständnisse

Häufig wird lange Ausgabe direkt ins Terminal geschrieben. Dadurch gehen Anfang und Kontext schnell verloren.

## Kurz zusammengefasst

Pager wie less machen lange Texte kontrollierbar.
