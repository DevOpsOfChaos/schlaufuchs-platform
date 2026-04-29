---
title: "Logs korrelieren"
description: "Überblick über das Zusammenführen von Logmeldungen über Dienste, Zeiten und Systeme hinweg."
subject: "linux"
section: "Logging"
topicPath: ["logs-korrelieren", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Logging"]
draft: false
---
# Logs korrelieren

Logs korrelieren bedeutet, Meldungen aus verschiedenen Quellen anhand von Zeit, Anfrage, Prozess oder Ereignis zusammenzubringen.

## Einordnung

Fehler entstehen oft nicht in einem einzelnen Dienst. Webserver, Datenbank, Systemdienst und Netzwerk können zusammen ein Bild ergeben. Korrelation macht Zusammenhänge sichtbar.

## Zentrale Aspekte

- Zeitstempel müssen vergleichbar sein.
- Request-IDs verbinden Ereignisse über Dienste hinweg.
- Zeitzonen und Uhrensynchronisation sind wichtig.
- Rauschen und Folgefehler müssen von Ursachen getrennt werden.

## Beispiele und Zusammenhang

Ein HTTP-Fehler im Webserverlog passt zeitlich zu einer Datenbankmeldung und einem kurzen Ressourcenengpass.

## Abgrenzung

Korrelation beweist nicht automatisch Ursache. Sie liefert Hinweise, die mit weiteren Daten geprüft werden müssen.

## Häufige Missverständnisse

Die lauteste oder späteste Fehlermeldung als Ursache zu nehmen, obwohl sie nur Folge eines früheren Problems ist.

## Kurz zusammengefasst

- Logkorrelation verbindet verstreute Hinweise.
- Zeit, IDs und Kontext sind entscheidend.
- Korrelation ist Hinweis, nicht endgültiger Beweis.
