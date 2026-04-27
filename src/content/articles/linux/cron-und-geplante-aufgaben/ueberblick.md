---
title: "Cron und geplante Aufgaben"
description: "Allgemeiner Überblick über zeitgesteuerte Aufgaben unter Linux und typische Einsatzfälle."
subject: linux
section: "Systembetrieb"
topicPath:
  - "cron-und-geplante-aufgaben"
  - "ueberblick"
learningGoals:
  - "Du kannst Cron und geplante Aufgaben grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Cron und geplante Aufgaben nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Cron und geplante Aufgaben beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Cron und geplante Aufgaben, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Cron und geplante Aufgaben in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "linux"
  - "cron"
  - "automatisierung"
  - "dienste"
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
