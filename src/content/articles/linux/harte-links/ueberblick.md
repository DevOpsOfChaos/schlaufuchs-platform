---
title: "Harte Links"
description: "Allgemeiner Überblick über harte Links, Dateinamen und gemeinsame Inodes in Linux-Dateisystemen."
subject: "linux"
section: "Dateisystem"
topicPath: ["harte-links", "ueberblick"]
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
# Harte Links

Ein harter Link ist ein zusätzlicher Name für dasselbe Dateiobjekt. Mehrere Verzeichniseinträge können auf denselben Inode zeigen.

## Einordnung

Harte Links erklären, warum eine Datei erst dann wirklich entfernt wird, wenn der letzte harte Link gelöscht und kein Prozess sie mehr offen hält.

## Zentrale Aspekte

- **Gleicher Inode:** Harte Links zeigen auf dasselbe Dateiobjekt.
- **Link-Zähler:** Das Dateisystem zählt die Namen zum Inode.
- **Grenzen:** Harte Links über Dateisystemgrenzen sind meist nicht erlaubt.
- **Gleichwertigkeit:** Keiner der Namen ist automatisch das Original.

## Beispiele und Zusammenhang

Wenn `datei-a` und `datei-b` harte Links auf denselben Inode sind, verändert Schreiben über einen Namen denselben Inhalt.

## Abgrenzung

Ein harter Link ist nicht dasselbe wie ein symbolischer Link. Ein Symlink enthält einen Pfad.

## Häufige Missverständnisse

Bei harten Links wird oft ein Original-Kopie-Verhältnis angenommen.

## Kurz zusammengefasst

- Harte Links sind mehrere Namen für denselben Inode.
- Der Inhalt bleibt bis zum letzten Link erhalten.
- Sie unterscheiden sich von symbolischen Links.
