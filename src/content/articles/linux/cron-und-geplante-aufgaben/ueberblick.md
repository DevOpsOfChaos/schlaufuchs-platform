---
title: "Cron und geplante Aufgaben"
description: "Allgemeiner Überblick über zeitgesteuerte Aufgaben unter Linux und typische Einsatzfälle."
subject: "linux"
section: "Systembetrieb"
topicPath: ["cron-und-geplante-aufgaben", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Systembetrieb"]
draft: false
---
# Cron und geplante Aufgaben

![Schaubild zu cron und geplanten Aufgaben.](/schlaufuchs-platform/images/overviews/v150/cron-und-geplante-aufgaben.svg)

*Das Schaubild zeigt Zeitplan, Job und protokollierte Ausführung.*



Cron ist ein klassisches System für zeitgesteuerte Aufgaben. Es startet Befehle oder Skripte zu festgelegten Zeiten, zum Beispiel täglich, stündlich oder an bestimmten Wochentagen.

## Bedeutung

Geplante Aufgaben sind nützlich für Backups, Wartung, Datenabgleich, Berichte oder regelmäßige Prüfungen. Dabei unterscheiden sich interaktive Shell-Umgebung und automatischer Lauf oft deutlich.

## Typische Teilaspekte

- **Zeitmuster:** Cron-Ausdrücke beschreiben Minute, Stunde, Tag, Monat und Wochentag.
- **Umgebung:** Cron-Jobs haben häufig weniger Umgebungsvariablen als eine Login-Shell.
- **Ausgabe:** Ausgaben sollten bewusst geloggt oder weitergeleitet werden.
- **Alternativen:** Systemd-Timer können in modernen Systemen ähnliche Aufgaben übernehmen.

## Beispiel

Ein tägliches Backupskript kann nachts laufen und sein Ergebnis in eine Logdatei schreiben.

## Abgrenzung

Cron ist kein dauerhaft laufender Dienst für jede Aufgabe. Es startet Programme zu Zeitpunkten, überwacht sie aber nicht automatisch wie ein Service-Manager.

## Häufige Missverständnisse

Häufig funktionieren Befehle im Terminal, aber nicht im Cron-Job, weil Pfade oder Umgebungsvariablen fehlen.

## Einordnung im Gesamtzusammenhang

Geplante Aufgaben verbinden Shell-Skripte, Logs, Systembetrieb und zuverlässige Wartungsabläufe.
