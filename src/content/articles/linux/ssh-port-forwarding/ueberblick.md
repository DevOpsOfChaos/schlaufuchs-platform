---
title: "SSH-Port-Forwarding"
description: "Allgemeiner Überblick über ssh-port-forwarding und die wichtigsten Zusammenhänge."
subject: "linux"
section: "SSH"
topicPath: ["ssh-port-forwarding", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "SSH"]
draft: false
---
# SSH-Port-Forwarding

![Schaubild zu SSH-Port-Forwarding.](/schlaufuchs-platform/images/overviews/v149/ssh-port-forwarding.svg)

*Das Schaubild zeigt lokalen Port, SSH-Tunnel und entfernten Dienst.*


SSH-Port-Forwarding leitet Netzwerkverbindungen verschlüsselt durch eine SSH-Verbindung weiter.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Lokales Forwarding macht entfernte Dienste lokal erreichbar.
- Remote Forwarding stellt lokale Dienste auf der Gegenseite bereit.
- Dynamisches Forwarding kann als SOCKS-Proxy dienen.

## Abgrenzung

Port-Forwarding ist kein Ersatz für ein Berechtigungskonzept.

## Beispiele

- Eine Datenbank auf einem Server wird über einen lokalen Port erreichbar.
- Ein interner Webdienst wird kurzfristig über SSH geprüft.

## Häufiges Missverständnis

Häufig werden Forwardings offen gelassen oder zu breit gebunden.

## Kurz zusammengefasst

SSH-Port-Forwarding ist mächtig für Wartung und Diagnose, muss aber begrenzt werden.
