---
title: "Dateien und Verzeichnisse"
description: "Allgemeiner Überblick über Dateien, Verzeichnisse und Pfade in Linux-Systemen."
subject: "linux"
section: "Dateisystem"
topicPath: ["dateien-und-verzeichnisse", "ueberblick"]
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
# Dateien und Verzeichnisse

![Schaubild zu Dateien und Verzeichnissen.](/schlaufuchs-platform/images/overviews/v148/dateien-und-verzeichnisse.svg)

*Das Schaubild ordnet Wurzelverzeichnis, Ordner, Datei und Pfad ein.*


Dateien und Verzeichnisse bilden die sichtbare Grundstruktur eines Linux-Systems. Eine Datei enthält Daten, ein Verzeichnis ordnet Dateien und weitere Verzeichnisse. Zusammen ergeben sie eine hierarchische Struktur, die bei der Wurzel `/` beginnt.

Ein Pfad beschreibt den Ort einer Datei oder eines Verzeichnisses. Absolute Pfade beginnen bei `/` und sind unabhängig vom aktuellen Arbeitsverzeichnis. Relative Pfade beginnen im aktuellen Verzeichnis und hängen deshalb vom Kontext ab.

## Zweck

Das Dateisystem organisiert nicht nur persönliche Dokumente. In Linux erscheinen auch Konfigurationen, Programme, Geräteinformationen, Logs und Systemzustände als Dateien oder dateiähnliche Einträge. Wer Pfade versteht, kann Systeminformationen gezielt finden und Änderungen besser einordnen.

## Wichtige Orte

`/home` enthält typischerweise Nutzerverzeichnisse. `/etc` enthält viele Konfigurationsdateien. `/var` enthält veränderliche Daten wie Logs oder Caches. `/usr` enthält viele installierte Programme und Ressourcen. Diese Einteilung ist nicht nur Ordnung, sondern hilft bei der Fehlersuche.

## Dateinamen und Typen

Linux verlässt sich nicht ausschließlich auf Dateiendungen. Eine Datei kann eine Endung haben, muss aber nicht. Ausführbarkeit hängt von Rechten ab, nicht nur vom Namen. Versteckte Dateien beginnen mit einem Punkt und werden in normalen Listen oft ausgeblendet.

## Arbeiten mit Pfaden

Befehle wie `pwd`, `ls`, `cd`, `cp`, `mv` und `rm` beziehen sich auf Pfade. Besonders bei schreibenden oder löschenden Befehlen ist entscheidend, ob der Pfad auf das erwartete Ziel zeigt. Ein fehlender Punkt, ein falscher Slash oder ein unerwartetes Arbeitsverzeichnis kann die Wirkung stark verändern.

## Häufige Missverständnisse

Ein häufiger Fehler ist die Annahme, dass ein relativer Pfad immer dasselbe bedeutet. Er bedeutet nur dasselbe, wenn das aktuelle Verzeichnis gleich ist. Ebenso wird manchmal eine Dateiendung mit dem tatsächlichen Inhalt verwechselt.

## Kurz zusammengefasst

Dateien, Verzeichnisse und Pfade sind die Landkarte eines Linux-Systems. Wer sie sicher liest, versteht Befehle besser, findet Informationen schneller und vermeidet riskante Änderungen am falschen Ort.
