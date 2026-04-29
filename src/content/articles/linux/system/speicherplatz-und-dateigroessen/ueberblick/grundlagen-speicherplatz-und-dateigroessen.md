---
title: "Grundlagen: Speicherplatz und Dateigrößen"
description: "Ein allgemeiner Überblick darüber, wie Linux Speicherplatz, Dateien und belegte Größen sichtbar macht."
subject: "linux"
section: "System"
topicPath: ["system", "speicherplatz-und-dateigroessen", "ueberblick", "grundlagen-speicherplatz-und-dateigroessen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "System"]
draft: false
---
## Begriff

**Speicherplatz** bezeichnet den Platz, den Dateien und Verzeichnisse auf einem Datenträger belegen. Unter Linux ist dabei wichtig, zwischen der logischen Dateigröße und dem tatsächlich belegten Platz im Dateisystem zu unterscheiden.

## Dateigröße

Die Dateigröße beschreibt, wie viele Nutzdaten eine Datei enthält. Eine Textdatei mit wenigen Zeilen ist klein, ein Video oder eine virtuelle Festplatte meist groß. Diese Größe ist für den Inhalt wichtig, erklärt aber nicht immer vollständig, wie viel Platz auf dem Datenträger belegt wird.

## Belegter Speicherplatz

Dateisysteme verwalten Speicher in Blöcken. Auch eine sehr kleine Datei belegt mindestens einen oder mehrere solcher Blöcke. Deshalb können viele kleine Dateien zusammen mehr Platz beanspruchen, als ihre reinen Inhalte erwarten lassen.

## Partitionen und Dateisysteme

Linux organisiert Datenträger über Partitionen und Einhängepunkte. Ein voller Bereich betrifft nicht automatisch das gesamte System. Es kann zum Beispiel sein, dass das Home-Verzeichnis Platz hat, aber eine Systempartition oder ein temporärer Bereich voll ist.

## Typische Werkzeuge

`df` zeigt, wie viel Platz auf eingehängten Dateisystemen frei oder belegt ist. `du` hilft dabei, den Platzverbrauch einzelner Verzeichnisse oder Dateien zu untersuchen. Beide Werkzeuge beantworten unterschiedliche Fragen und ergänzen sich.

## Sichere Einordnung

Speicherplatzprobleme sollten vorsichtig untersucht werden. Nicht jeder große Ordner ist unnötig, und nicht jede Datei darf gelöscht werden. Besonders Systemordner, Paket-Caches, Logs und Projektartefakte brauchen Kontext.
