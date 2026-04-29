---
title: "Terminal-Multiplexer"
description: "Allgemeiner Überblick über Terminal-Multiplexer wie tmux oder screen."
subject: "linux"
section: "Terminal"
topicPath: ["terminal-multiplexer", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Terminal"]
draft: false
---
# Terminal-Multiplexer

Ein Terminal-Multiplexer verwaltet mehrere Shell-Sitzungen innerhalb eines Terminals und kann Sitzungen vom aktuellen Fenster entkoppeln.

Bei Serverarbeit, langen Prozessen oder parallelen Aufgaben ist es hilfreich, mehrere Shells stabil und wiederaufnehmbar zu organisieren.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Sitzungen können bestehen bleiben, auch wenn die Verbindung getrennt wird.
- Fenster und Bereiche ordnen mehrere Arbeitskontexte.
- Multiplexer erleichtern reproduzierbare Terminal-Arbeitsumgebungen.

## Abgrenzung

Ein Multiplexer ersetzt kein Prozessmanagement. Kritische Dienste sollten weiterhin als Dienste laufen, nicht nur in einer tmux-Sitzung.

## Beispiele

- Ein langer Build läuft weiter, während eine SSH-Verbindung kurz ausfällt.
- Mehrere Logs und Shells werden in einer Sitzung parallel beobachtet.

## Häufiges Missverständnis

Häufig werden produktive Dienste dauerhaft in Terminal-Sitzungen gestartet. Für Betrieb, Neustart und Monitoring sind systemd oder andere Dienstmanager besser geeignet.

## Kurz zusammengefasst

Terminal-Multiplexer verbessern interaktive Arbeit auf Linux-Systemen. Sie stabilisieren Sitzungen, sind aber kein Ersatz für echte Dienste.
