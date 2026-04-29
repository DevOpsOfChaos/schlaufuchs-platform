---
title: "Linux Capabilities"
description: "Überblick über Linux Capabilities als feinere Aufteilung klassischer Root-Rechte."
subject: "linux"
section: "Sicherheit"
topicPath: ["linux-capabilities", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Sicherheit"]
draft: false
---
# Linux Capabilities

Linux Capabilities teilen klassische Root-Rechte in kleinere Berechtigungen auf. Ein Prozess kann gezielt nur bestimmte Fähigkeiten erhalten.

## Einordnung

Sie sind wichtig für sicherere Dienste und Container. Sie reduzieren das Alles-oder-nichts-Modell, ersetzen aber keine Sicherheitsarchitektur.

## Zentrale Aspekte

- **Feingranularität:** Administrative Fähigkeiten werden getrennt vergeben.
- **Prozessbezug:** Capabilities wirken auf Prozesse oder Dateien.
- **Container:** Laufzeiten entfernen oder vergeben Capabilities gezielt.
- **Risiko:** Zu großzügige Capabilities können fast Root-ähnlich wirken.

## Beispiele und Zusammenhang

Ein Webserver kann unter Umständen privilegierte Ports binden, ohne vollständig als Root zu laufen.

## Abgrenzung

Capabilities sind nicht dasselbe wie Dateirechte. Sie betreffen besondere Kernel-Berechtigungen.

## Häufige Missverständnisse

Capabilities werden oft als harmlos betrachtet, nur weil sie feiner sind als Root.

## Kurz zusammengefasst

- Capabilities teilen Root-Rechte in kleinere Fähigkeiten.
- Sie können Dienste mit weniger Gesamtprivilegien betreiben.
- Jede Capability muss begründet sein.
