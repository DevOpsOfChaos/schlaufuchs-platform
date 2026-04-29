---
title: "systemd Units"
description: "Allgemeiner Überblick über systemd Units als Verwaltungseinheiten moderner Linux-Systeme."
subject: "linux"
section: "Dienste"
topicPath: ["systemd-units", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dienste"]
draft: false
---
# systemd Units

![Schaubild zu systemd und Units.](/schlaufuchs-platform/images/overviews/v149/systemd-und-units.svg)

*Das Schaubild zeigt Konfiguration, Start und Überwachung eines Dienstes.*



systemd organisiert viele Systemfunktionen über Units. Eine Unit beschreibt eine verwaltete Einheit, etwa einen Dienst, einen Timer, einen Mountpunkt oder ein Ziel. Dadurch lassen sich Start, Stopp, Abhängigkeiten und Status systematisch kontrollieren.

## Einordnung

Für viele Linux-Systeme ist systemd die zentrale Schicht zwischen Bootprozess, Diensten und Administration. Wer Dienste betreibt, muss nicht nur den eigentlichen Prozess kennen, sondern auch die Unit-Datei und ihre Abhängigkeiten verstehen.

## Zentrale Aspekte

- **Service-Units für Dienste:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Timer-Units als geplante Ausführung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Targets als Gruppierung von Systemzuständen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Abhängigkeiten und Reihenfolge:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

`systemctl status nginx` zeigt den Zustand einer Service-Unit. Eine Timer-Unit kann eine Aufgabe regelmäßig auslösen, ohne Cron zu verwenden. Unit-Dateien legen fest, welcher Befehl gestartet wird, unter welchem Benutzer er läuft und wann ein Neustart erfolgt.

## Abgrenzung

systemd ist nicht nur ein Startskript-Ersatz. Es überwacht Prozesse, sammelt Statusinformationen und integriert Logs. Gleichzeitig bedeutet ein grüner Unit-Status nicht automatisch, dass die Anwendung fachlich korrekt funktioniert.

## Häufige Missverständnisse

Häufig wird nur der Prozess betrachtet und die Unit-Konfiguration ignoriert. Dann bleiben automatische Neustarts, Umgebungsvariablen oder Arbeitsverzeichnisse unklar. Ein weiterer Fehler ist, Änderungen an Unit-Dateien ohne `daemon-reload` zu erwarten.

## Kurz zusammengefasst

- systemd Units beschreiben verwaltete Systemeinheiten.
- Dienste bestehen aus Prozess und Unit-Konfiguration.
- Status, Logs und Abhängigkeiten gehören zusammen.
