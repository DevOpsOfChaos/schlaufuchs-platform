---
title: "Root-Dateisystem und Home-Verzeichnisse"
description: "Überblick über `/`, Systembereiche und persönliche Daten unter `/home`."
subject: linux
section: "Dateisystem"
topicPath:
  - "root-dateisystem-und-home"
  - "ueberblick"
learningGoals:
  - "Du kannst Root-Dateisystem und Home-Verzeichnisse als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Nur `/home` zu sichern und wichtige Dienst- oder Konfigurationsdaten unter `/etc` und `/var` zu übersehen."
keyTakeaways:
  - "Der Linux-Verzeichnisbaum beginnt bei `/`."
  - "`/home` ist wichtig, aber nicht der einzige Datenort."
  - "System- und Nutzerdaten haben unterschiedliche Wartungsanforderungen."
recognizeSignals:
  - "Partitionierung, Backup oder Neuinstallation wird geplant."
  - "Pfade beginnen mit `/` oder verweisen auf Benutzerverzeichnisse."
selfCheckPoints:
  - "Kann ich Root-Dateisystem und Home-Verzeichnisse in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "dateisystem"
  - "home"
  - "backup"
draft: false
---

# Root-Dateisystem und Home-Verzeichnisse

Das Root-Dateisystem beginnt bei `/` und bildet die Wurzel des gesamten Verzeichnisbaums. Home-Verzeichnisse enthalten nutzerspezifische Daten und Konfiguration.

## Einordnung

Linux organisiert Systemdateien, Programme, temporäre Daten und Nutzerdateien in einem gemeinsamen Baum. Die Trennung hilft bei Backups, Rechtevergabe und Wartung.

## Zentrale Aspekte

- `/` ist die Wurzel aller Pfade.
- `/home` enthält persönliche Benutzerverzeichnisse.
- Systembereiche wie `/etc`, `/usr` und `/var` haben eigene Aufgaben.
- Getrennte Partitionen können Wartung und Wiederherstellung erleichtern.

## Beispiele und Zusammenhang

Ein System kann neu installiert werden, während eine separate `/home`-Partition erhalten bleibt, wenn Planung und Backup stimmen.

## Abgrenzung

Nicht alle persönlichen Daten liegen automatisch nur in `/home`. Dienste, Container oder Anwendungen können Daten auch in `/var` oder anderen Pfaden speichern.

## Häufige Missverständnisse

Nur `/home` zu sichern und wichtige Dienst- oder Konfigurationsdaten unter `/etc` und `/var` zu übersehen.

## Kurz zusammengefasst

- Der Linux-Verzeichnisbaum beginnt bei `/`.
- `/home` ist wichtig, aber nicht der einzige Datenort.
- System- und Nutzerdaten haben unterschiedliche Wartungsanforderungen.
