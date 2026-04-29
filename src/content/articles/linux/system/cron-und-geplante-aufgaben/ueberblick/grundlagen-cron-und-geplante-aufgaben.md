---
title: "Cron und geplante Aufgaben – Überblick"
description: "Ein allgemeiner Überblick über geplante Aufgaben unter Linux und die Rolle von Cron bei wiederkehrenden Abläufen."
subject: "linux"
section: "System"
topicPath: ["system", "cron-und-geplante-aufgaben", "ueberblick", "grundlagen-cron-und-geplante-aufgaben"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "System"]
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
