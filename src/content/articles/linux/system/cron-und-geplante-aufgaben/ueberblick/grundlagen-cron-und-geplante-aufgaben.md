---
title: "Cron und geplante Aufgaben – Überblick"
description: "Ein allgemeiner Überblick über geplante Aufgaben unter Linux und die Rolle von Cron bei wiederkehrenden Abläufen."
subject: linux
section: "System"
topicPath:
  - system
  - cron-und-geplante-aufgaben
  - ueberblick
learningGoals:
  - Du kennst Cron als Dienst für geplante Aufgaben.
  - Du verstehst den Unterschied zwischen manuellem Befehl und Zeitplan.
  - Du erkennst typische Fehlerquellen bei Cronjobs.
practiceIdeas:
  - Beschreibe einen wiederkehrenden Systemablauf als Cronjob.
  - Prüfe, welche Ausgabe ein Cronjob protokollieren sollte.
commonMistakes:
  - Cronjobs ohne vollständige Pfade zu schreiben.
  - Fehlerausgaben nicht sichtbar zu machen.
keyTakeaways:
  - Cron startet Befehle nach einem Zeitplan.
  - Gute Cronjobs sind kontrollierbar und protokolliert.
recognizeSignals:
  - Es geht um regelmäßige Aufgaben, Backups, Logs oder Automatisierung.
selfCheckPoints:
  - Kann ich erklären, was Cron auslöst?
  - Kann ich sagen, warum Logs bei Cronjobs wichtig sind?
tags:
  - linux
  - cron
  - automatisierung
  - system
level: mittel
draft: false
---

# Cron und geplante Aufgaben

**Cron** ist ein klassischer Dienst unter Linux, mit dem Aufgaben automatisch zu bestimmten Zeiten ausgeführt werden können. Solche Aufgaben heißen oft Cronjobs.

## Zweck

Viele Systemarbeiten sollen regelmäßig und ohne manuelles Eingreifen laufen. Beispiele sind Backups, Aufräumskripte, Log-Auswertungen oder Prüfungen von Diensten. Cron übernimmt die zeitliche Auslösung solcher Befehle.

## Grundprinzip

Ein Cronjob besteht aus einer Zeitangabe und einem Befehl. Die Zeitangabe beschreibt Minute, Stunde, Tag, Monat und Wochentag. Wenn der Zeitpunkt passt, führt Cron den hinterlegten Befehl aus.

## Umgebung und Pfade

Cronjobs laufen oft in einer anderen Umgebung als eine interaktive Shell. Variablen, Arbeitsverzeichnis und `PATH` können anders sein. Deshalb sollten Befehle möglichst mit vollständigen Pfaden und klarer Ausgabeumleitung geschrieben werden.

## Merksatz

Cron startet Befehle nach Zeitplan. Gute Cronjobs sind nicht nur geplant, sondern auch kontrollierbar und verständlich protokolliert.
