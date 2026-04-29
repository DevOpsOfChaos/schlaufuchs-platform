---
title: "systemd-journald"
description: "Überblick über systemd-journald als zentrale Protokollierung vieler Linux-Systeme."
subject: "linux"
section: "Systemdienste"
topicPath: ["systemd-journald-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Systemdienste"]
draft: false
---
# systemd-journald

systemd-journald sammelt Logmeldungen von Diensten, Kernel und Systemkomponenten in einem strukturierten Journal.

## Einordnung

Auf modernen Distributionen ist journald oft die erste Anlaufstelle bei Dienstproblemen. Es speichert nicht nur Text, sondern auch Metadaten wie Unit, Prozess, Zeitpunkt und Priorität.

## Zentrale Aspekte

- `journalctl` liest und filtert das Journal.
- Logs können flüchtig oder dauerhaft gespeichert werden.
- Units, Bootvorgänge und Prioritäten lassen sich gezielt auswählen.
- Zeitstempel und Metadaten helfen beim Korrelieren von Ereignissen.

## Beispiele und Zusammenhang

Nach einem fehlgeschlagenen Dienststart zeigt `journalctl -u dienstname` die Meldungen genau dieser Unit.

## Abgrenzung

journald ist nicht dasselbe wie klassische Textdateien unter `/var/log`. Beide Systeme können nebeneinander existieren.

## Häufige Missverständnisse

Nur eine einzelne Fehlermeldung zu lesen und den zeitlichen Kontext davor und danach zu ignorieren.

## Kurz zusammengefasst

- journald sammelt strukturierte Systemlogs.
- `journalctl` filtert nach Unit, Zeit und Priorität.
- Persistenz und Aufbewahrung müssen konfiguriert sein.
