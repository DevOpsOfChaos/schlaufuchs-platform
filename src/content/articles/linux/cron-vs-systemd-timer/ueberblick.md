---
title: "Cron und systemd Timer"
description: "Überblick über klassische Cronjobs und systemd Timer als zeitgesteuerte Ausführung."
subject: "linux"
section: "Zeitsteuerung"
topicPath: ["cron-vs-systemd-timer", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Zeitsteuerung"]
draft: false
---
# Cron und systemd Timer

Cron und systemd Timer starten Befehle oder Dienste zu bestimmten Zeiten oder Intervallen.

## Einordnung

Zeitgesteuerte Aufgaben reichen von Backups bis Logrotation. Cron ist einfach und weit verbreitet; systemd Timer integrieren sich stärker in Units, Logs und Abhängigkeiten.

## Zentrale Aspekte

- Cron nutzt Tabellen mit Zeitmustern.
- systemd Timer aktivieren Units.
- Timer können verpasste Läufe nachholen.
- Logs und Status sind bei systemd oft besser integriert.

## Beispiele und Zusammenhang

Ein tägliches kleines Skript kann als Cronjob reichen. Ein Dienst mit Abhängigkeiten, Logging und Statusabfrage passt oft besser als systemd Timer.

## Abgrenzung

Timer lösen nur die Zeitsteuerung. Fehlerbehandlung, Rechte, Arbeitsverzeichnis und Umgebung müssen trotzdem sauber definiert werden.

## Häufige Missverständnisse

Ein Skript interaktiv zu testen und dann als Cronjob zu erwarten, dass dieselben Umgebungsvariablen und Pfade gelten.

## Kurz zusammengefasst

- Cron ist einfach, systemd Timer sind stärker integriert.
- Umgebung und Arbeitsverzeichnis unterscheiden sich von interaktiven Shells.
- Zeitsteuerung braucht sichtbares Logging.
