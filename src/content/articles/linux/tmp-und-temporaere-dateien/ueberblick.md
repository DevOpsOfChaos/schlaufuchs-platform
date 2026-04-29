---
title: "tmp und temporäre Dateien"
description: "Allgemeiner Überblick über temporäre Dateien und Verzeichnisse unter Linux."
subject: "linux"
section: "Dateisystem"
topicPath: ["tmp-und-temporaere-dateien", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateisystem"]
draft: false
---
# tmp und temporäre Dateien

Temporäre Dateien speichern Zwischenstände, Caches oder kurzlebige Daten.

Linux-Systeme nutzen Orte wie tmp, var/tmp oder dienstspezifische Laufzeitverzeichnisse für kurzlebige Daten.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

tmp kann beim Neustart geleert werden.

var/tmp ist häufig für länger lebende temporäre Daten gedacht.

Berechtigungen und zufällige Dateinamen sind wichtig, damit temporäre Dateien nicht missbraucht werden.

## Abgrenzung

Temporär bedeutet nicht automatisch unwichtig. Ein Programm kann während seiner Laufzeit stark davon abhängen.

## Beispiele und typische Situationen

Ein Editor legt Sicherungs- oder Zwischendateien an.

Ein Build-Prozess nutzt temporäre Verzeichnisse für generierte Dateien.

## Häufige Missverständnisse

Häufig werden temporäre Dateien gelöscht, ohne laufende Prozesse zu beachten.

## Kurz zusammengefasst

Temporäre Dateien sind Teil normaler Systemarbeit.
