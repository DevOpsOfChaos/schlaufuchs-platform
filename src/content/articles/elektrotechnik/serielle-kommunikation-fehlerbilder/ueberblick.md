---
title: "Fehlerbilder serieller Kommunikation"
description: "Überblick über typische Fehlerquellen bei serieller Kommunikation und ihre erkennbare Wirkung."
subject: "elektrotechnik"
section: "Kommunikation"
topicPath: ["serielle-kommunikation-fehlerbilder", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Kommunikation"]
draft: false
---
# Fehlerbilder serieller Kommunikation

Serielle Kommunikation überträgt Daten schrittweise über eine oder wenige Leitungen. Fehlerbilder entstehen durch falsche Pegel, Timing, Verdrahtung, Protokollannahmen oder Störungen.

## Einordnung

UART, I²C und SPI wirken im Code oft ähnlich einfach, haben aber unterschiedliche elektrische und zeitliche Anforderungen. Fehlersuche beginnt deshalb bei Verdrahtung, Pegeln und Protokollparametern.

## Zentrale Aspekte

- UART reagiert empfindlich auf Baudrate und Framing.
- I²C braucht passende Pull-ups und adressierte Teilnehmer.
- SPI benötigt klare Chip-Select-Signale und Taktphase.
- Logikanalysator und Oszilloskop machen viele Fehler sichtbar.

## Beispiele und Zusammenhang

Vertauschte UART-Leitungen liefern gar keine Daten. Eine falsche Baudrate liefert scheinbar zufällige Zeichen. Zu schwache I²C-Pull-ups erzeugen langsame Flanken.

## Abgrenzung

Ein Kommunikationsfehler ist nicht automatisch ein Softwarefehler. Elektrik, Timing und Protokoll müssen gemeinsam geprüft werden.

## Häufige Missverständnisse

Nur die Bibliothek zu wechseln, ohne Leitungen, Pegel und Protokollparameter zu messen.

## Kurz zusammengefasst

- Serielle Fehler haben oft erkennbare Muster.
- Pegel, Timing und Protokoll gehören zusammen.
- Messgeräte beschleunigen die Fehlersuche deutlich.
