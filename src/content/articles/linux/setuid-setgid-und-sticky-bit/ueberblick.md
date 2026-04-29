---
title: "Setuid, Setgid und Sticky Bit"
description: "Überblick über spezielle Linux-Rechtebits und ihre Wirkung auf Programme, Verzeichnisse und gemeinsame Ablagen."
subject: "linux"
section: "Rechte"
topicPath: ["setuid-setgid-und-sticky-bit", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Rechte"]
draft: false
---
# Setuid, Setgid und Sticky Bit

Setuid, Setgid und Sticky Bit sind spezielle Rechtebits, die über normale Lesen-, Schreiben- und Ausführen-Rechte hinausgehen.

## Einordnung

Sie beeinflussen Komfort und Sicherheit. Manche Systemprogramme brauchen vorübergehend besondere Rechte, gemeinsame Verzeichnisse brauchen Schutzregeln.

## Zentrale Aspekte

- **Setuid:** Ein Programm läuft mit Rechten des Dateibesitzers.
- **Setgid:** Programme oder Verzeichnisse übernehmen Gruppenverhalten.
- **Sticky Bit:** In gemeinsamen Verzeichnissen löschen Nutzer meist nur eigene Dateien.
- **Sicherheitsrisiko:** Falsch gesetzte Spezialrechte ermöglichen Rechteausweitung.

## Beispiele und Zusammenhang

Das Sticky Bit auf `/tmp` verhindert, dass Nutzer fremde Dateien löschen. Setuid-Programme müssen besonders sorgfältig geschrieben sein.

## Abgrenzung

Spezialbits ersetzen keine normale Rechteplanung, sondern erweitern sie für bestimmte Fälle.

## Häufige Missverständnisse

Setuid wird manchmal auf eigene Skripte gesetzt, ohne die Sicherheitsfolgen zu verstehen.

## Kurz zusammengefasst

- Spezielle Rechtebits verändern Standardrechte.
- Sticky Bit schützt gemeinsame Verzeichnisse.
- Setuid und Setgid müssen vorsichtig verwendet werden.
