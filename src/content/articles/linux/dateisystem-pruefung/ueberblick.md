---
title: "Dateisystemprüfung"
description: "Überblick über Dateisystemprüfung, Inkonsistenzen und vorsichtige Reparatur beschädigter Dateisysteme."
subject: "linux"
section: "Dateisystem"
topicPath: ["dateisystem-pruefung", "ueberblick"]
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
# Dateisystemprüfung

Dateisystemprüfung untersucht, ob Metadaten, Verzeichnisse und Belegungsinformationen eines Dateisystems konsistent sind.

## Einordnung

Stromausfälle, defekte Datenträger oder harte Abstürze können Inkonsistenzen erzeugen. Werkzeuge wie `fsck` prüfen und reparieren abhängig vom Dateisystem.

## Zentrale Aspekte

- Viele Prüfungen erfordern ein ausgehängtes Dateisystem.
- Journaling reduziert, aber verhindert nicht alle Probleme.
- Backups sind vor Reparaturen besonders wichtig.
- SMART-Werte und Kernel-Logs helfen bei Hardwareverdacht.

## Beispiele und Zusammenhang

Nach einem unerwarteten Ausschalten kann ein System beim Booten eine automatische Prüfung anstoßen oder eine manuelle Reparatur verlangen.

## Abgrenzung

Dateisystemprüfung repariert keine defekte Hardware. Wiederkehrende Fehler deuten oft auf Datenträger-, Kabel- oder Stromprobleme hin.

## Häufige Missverständnisse

Ein beschädigtes Dateisystem weiter zu beschreiben, bevor wichtige Daten gesichert oder ein Image erstellt wurde.

## Kurz zusammengefasst

- Prüfung sucht Konsistenzfehler im Dateisystem.
- Reparatur sollte vorsichtig und mit Backup erfolgen.
- Hardwareursachen müssen mitgeprüft werden.
