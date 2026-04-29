---
title: "scp und sftp"
description: "Allgemeiner Überblick über Dateiübertragung mit scp und sftp."
subject: "linux"
section: "SSH"
topicPath: ["scp-und-sftp", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "SSH"]
draft: false
---
# scp und sftp

scp und sftp übertragen Dateien über SSH-Verbindungen.

Beim Arbeiten mit Servern müssen Konfigurationsdateien, Artefakte, Logs oder Backups oft sicher bewegt werden.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

scp wirkt wie ein Kopierbefehl zwischen lokalen und entfernten Pfaden.

sftp bietet eine interaktive oder skriptbare Dateiübertragungssitzung.

Pfadangaben, Nutzername und Host folgen der SSH-Logik.

## Abgrenzung

Dateitransfer ist nicht dasselbe wie Synchronisation. Für wiederholte Abgleiche ist rsync oft geeigneter.

## Beispiele und typische Situationen

Eine Logdatei kann vom Server auf den lokalen Rechner kopiert werden.

Ein Build-Artefakt kann auf einen Testserver übertragen werden.

## Häufige Missverständnisse

Häufig werden lokale und entfernte Pfade verwechselt. Ein falscher Zielpfad kopiert Dateien an unerwartete Orte.

## Kurz zusammengefasst

Scp und sftp sind einfache Wege für sichere Dateiübertragung über SSH.
