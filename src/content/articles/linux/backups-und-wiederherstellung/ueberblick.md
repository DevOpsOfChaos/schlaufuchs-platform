---
title: "Backups und Wiederherstellung"
description: "Überblick über Backups als Schutz vor Datenverlust und über die Bedeutung getesteter Wiederherstellung."
subject: "linux"
section: "Betrieb"
topicPath: ["backups-und-wiederherstellung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Betrieb"]
draft: false
---
# Backups und Wiederherstellung

Ein Backup ist eine unabhängige Kopie wichtiger Daten, die nach Verlust, Fehler oder Angriff wiederhergestellt werden kann. Entscheidend ist nicht nur, dass Kopien existieren, sondern dass sie vollständig, aktuell, geschützt und tatsächlich wiederherstellbar sind.

## Einordnung

Backups gehören zu den wichtigsten Betriebsgrundlagen. Sie schützen vor versehentlichem Löschen, Hardwareausfall, fehlerhaften Deployments, Ransomware und Bedienfehlern. Ohne Wiederherstellungstest ist unklar, ob ein Backup im Ernstfall hilft.

## Zentrale Aspekte

- **Datenumfang und Ausschlüsse:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Backup-Frequenz und Aufbewahrung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **getrennte Speicherung und Zugriffsschutz:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **regelmäßige Restore-Tests:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Projekt kann Code über Git sichern, aber Datenbankinhalte, Uploads und Konfiguration brauchen eigene Backups. Ein tägliches Backup kann für manche Daten reichen, für andere ist der mögliche Verlust zu groß. Wiederherstellung sollte in einer Testumgebung geübt werden.

## Abgrenzung

Ein Sync ist nicht automatisch ein Backup. Wenn eine Datei lokal gelöscht und die Löschung sofort synchronisiert wird, ist sie auch am Ziel weg. Backups brauchen Versionierung oder Aufbewahrung alter Zustände.

## Häufige Missverständnisse

Häufig wird nur das Erstellen von Backups automatisiert, aber nie die Wiederherstellung getestet. Ein weiterer Fehler ist, Backups mit denselben Zugangsdaten erreichbar zu lassen wie das Produktivsystem.

## Kurz zusammengefasst

- Ein Backup ist erst wertvoll, wenn Wiederherstellung möglich ist.
- Synchronisation ersetzt keine versionierten Backups.
- Backups müssen geschützt und regelmäßig geprüft werden.
