---
title: "systemd Timer"
description: "Allgemeiner Überblick über systemd Timer als Alternative oder Ergänzung zu cron für geplante Aufgaben."
subject: linux
section: "Dienste"
topicPath:
  - "systemd-timer"
  - "ueberblick"
learningGoals:
  - "Du kannst systemd Timer als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Oft wird nur der Timer betrachtet, obwohl der Service die eigentliche Arbeit enthält."
keyTakeaways:
  - "systemd Timer planen den Start von Services."
  - "Timer und Service gehören zusammen."
  - "Journal und Unit-Status erleichtern Diagnose."
recognizeSignals:
  - "Eine geplante Aufgabe soll mit systemd verwaltet werden."
  - "`systemctl list-timers` zeigt aktive Zeitpläne."
selfCheckPoints:
  - "Kann ich systemd Timer in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "systemd"
  - "timer"
  - "automatisierung"
draft: false
---

# systemd Timer

systemd Timer starten Dienste zu bestimmten Zeiten oder nach Intervallen. Sie sind eine systemd-nahe Möglichkeit für geplante Aufgaben.

## Einordnung

Timer sind sinnvoll, wenn Aufgaben als systemd Services beschrieben werden sollen. Abhängigkeiten, Benutzerkontext und Logging lassen sich dadurch integrieren.

## Zentrale Aspekte

- **Timer-Unit:** Beschreibt, wann ausgelöst wird.
- **Service-Unit:** Beschreibt, was ausgeführt wird.
- **Kalenderausdruck:** Zeitpläne können mit OnCalendar formuliert werden.
- **Logging:** Ausgaben landen typischerweise im Journal.

## Beispiele und Zusammenhang

Ein tägliches Backup kann aus `backup.service` und `backup.timer` bestehen. Der Timer plant, der Service führt aus.

## Abgrenzung

systemd Timer sind nicht einfach cron mit anderer Syntax, sondern Teil des Unit-Modells.

## Häufige Missverständnisse

Oft wird nur der Timer betrachtet, obwohl der Service die eigentliche Arbeit enthält.

## Kurz zusammengefasst

- systemd Timer planen den Start von Services.
- Timer und Service gehören zusammen.
- Journal und Unit-Status erleichtern Diagnose.
