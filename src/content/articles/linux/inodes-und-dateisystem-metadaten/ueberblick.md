---
title: "Inodes und Dateisystem-Metadaten"
description: "Überblick über Inodes, Metadaten und die interne Verwaltung von Dateien in Linux-Dateisystemen."
subject: "linux"
section: "Dateisystem"
topicPath: ["inodes-und-dateisystem-metadaten", "ueberblick"]
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
# Inodes und Dateisystem-Metadaten

Ein Inode ist eine Datenstruktur, die Metadaten über eine Datei speichert. Der Dateiname liegt dagegen in einem Verzeichniseintrag, der auf einen Inode zeigt.

## Einordnung

Inodes erklären harte Links, gelöschte aber offene Dateien und Dateisysteme mit freien Bytes, aber ohne freie Inodes.

## Zentrale Aspekte

- **Metadaten:** Inodes speichern Rechte, Besitzer, Zeiten und Blockverweise.
- **Verzeichniseintrag:** Ein Name verbindet ein Verzeichnis mit einem Inode.
- **Harte Links:** Mehrere Namen können auf denselben Inode zeigen.
- **Offene Dateien:** Gelöschte Dateien können weiter Speicher belegen.

## Beispiele und Zusammenhang

Wenn eine Logdatei gelöscht wird, während ein Dienst sie offen hält, wird Speicher oft erst frei, wenn der Prozess die Datei schließt.

## Abgrenzung

Ein Inode ist nicht der Dateiname. Der Name verweist nur auf das Dateiobjekt.

## Häufige Missverständnisse

Gelöschte Dateien werden oft für sofort frei gehalten, obwohl Prozesse sie noch offen halten.

## Kurz zusammengefasst

- Inodes speichern Dateimetadaten.
- Namen und Dateiobjekte sind getrennte Konzepte.
- Harte Links und offene gelöschte Dateien werden dadurch verständlich.
