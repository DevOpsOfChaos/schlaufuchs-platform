---
title: "Symbolische Links"
description: "Allgemeiner Überblick über symbolische Links und ihre Rolle im Linux-Dateisystem."
subject: linux
section: "Dateisystem"
topicPath:
  - "symbolische-links"
  - "ueberblick"
learningGoals:
  - "Du kannst Symbolische Links als Grundbegriff einordnen."
  - "Du kennst zentrale Eigenschaften und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse zu diesem Thema erkennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird ein Symlink wie eine Kopie behandelt. Änderungen am Ziel betreffen alle Zugriffe über den Link."
keyTakeaways:
  - "Symbolische Links machen Pfade flexibler, verlangen aber Verständnis für Zielpfade."
  - "Symbolische Links sollte immer im fachlichen Zusammenhang betrachtet werden."
recognizeSignals:
  - "Es geht um Grundlagen, typische Begriffe oder Abgrenzungen rund um Symbolische Links."
selfCheckPoints:
  - "Kann ich erklären, woran man Symbolische Links erkennt und wovon es abzugrenzen ist?"
level: einfach
tags:
  - "linux"
  - "symlinks"
  - "dateisystem"
  - "pfade"
draft: false
---

# Symbolische Links

Ein symbolischer Link ist ein Dateisystemeintrag, der auf einen anderen Pfad verweist.

Symbolische Links werden genutzt, um Dateien an mehreren Orten erreichbar zu machen oder Versionen umzuschalten.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Ein Symlink enthält einen Zielpfad und nicht die Datei selbst.

Das Ziel kann absolut oder relativ angegeben sein.

Wenn das Ziel gelöscht oder verschoben wird, bleibt der Link zurück, zeigt aber ins Leere.

## Abgrenzung

Symbolische Links sind nicht dasselbe wie harte Links. Harte Links zeigen auf denselben Dateieintrag.

## Beispiele und typische Situationen

usr/bin enthält häufig Links auf tatsächliche Programmdateien.

Ein Projekt kann current als Link auf eine konkrete Versionsmappe verwenden.

## Häufige Missverständnisse

Häufig wird ein Symlink wie eine Kopie behandelt. Änderungen am Ziel betreffen alle Zugriffe über den Link.

## Kurz zusammengefasst

Symbolische Links machen Pfade flexibler, verlangen aber Verständnis für Zielpfade.
