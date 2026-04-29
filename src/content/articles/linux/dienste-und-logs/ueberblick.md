---
title: "Dienste und Logs"
description: "Überblick über Linux-Dienste, ihren Zustand und Logs als Grundlage für Betrieb und Fehlersuche."
subject: "linux"
section: "Systempflege"
topicPath: ["dienste-und-logs", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Systempflege"]
draft: false
---
# Dienste und Logs

![Schaubild zu Diensten und Logs.](/schlaufuchs-platform/images/overviews/v148/dienste-und-logs.svg)

*Das Schaubild zeigt, wie Dienste laufen und wie Logs bei der Fehlersuche helfen.*



## Dienste
Dienste sind Programme, die im Hintergrund Funktionen bereitstellen. Beispiele sind Webserver, Datenbanken, SSH-Server oder Zeitdienste. Sie werden häufig durch systemd verwaltet. Ein Dienst kann aktiv, fehlgeschlagen, deaktiviert oder nur bei Bedarf gestartet sein.

## Status
Der Dienststatus zeigt, ob ein Dienst läuft und wie er zuletzt gestartet wurde. Er ersetzt aber nicht die fachliche Prüfung. Ein Webserver kann laufen und trotzdem falsch konfiguriert sein. Eine Datenbank kann aktiv sein und dennoch Verbindungen ablehnen.

## Logs
Logs protokollieren Ereignisse, Warnungen und Fehler. Sie zeigen Startmeldungen, Konfigurationsprobleme, Zugriffe oder Abstürze. journalctl und klassische Logdateien sind zentrale Werkzeuge, um zeitliche Abläufe zu verstehen.

## Fehlersuche
Gute Fehlersuche verbindet Status, Logs und Konfiguration. Zuerst wird geprüft, was erwartet wurde. Dann zeigt der Status, ob der Dienst grundsätzlich aktiv ist. Logs erklären häufig, warum ein Start scheitert oder warum ein Dienst kurz nach dem Start wieder endet.

## Missverständnisse
Logs sind nicht nur dann nützlich, wenn etwas rot markiert ist. Auch normale Startmeldungen helfen, Pfade, Ports, Nutzerrechte und geladene Konfigurationen zu erkennen. Wer Logs ignoriert, rät oft länger als nötig.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
