---
title: "Dateisystemprüfung"
description: "Überblick über Dateisystemprüfung, Inkonsistenzen und vorsichtige Reparatur beschädigter Dateisysteme."
subject: linux
section: "Dateisystem"
topicPath:
  - "dateisystem-pruefung"
  - "ueberblick"
learningGoals:
  - "Du kannst Dateisystemprüfung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein beschädigtes Dateisystem weiter zu beschreiben, bevor wichtige Daten gesichert oder ein Image erstellt wurde."
keyTakeaways:
  - "Prüfung sucht Konsistenzfehler im Dateisystem."
  - "Reparatur sollte vorsichtig und mit Backup erfolgen."
  - "Hardwareursachen müssen mitgeprüft werden."
recognizeSignals:
  - "Dateien verschwinden, Mounts schlagen fehl oder der Kernel meldet I/O-Fehler."
  - "Nach Absturz wird eine Prüfung verlangt."
selfCheckPoints:
  - "Kann ich Dateisystemprüfung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "dateisystem"
  - "fsck"
  - "reparatur"
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
