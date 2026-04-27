---
title: "Prozesse und Signale"
description: "Allgemeiner Überblick über laufende Prozesse, Prozessverwaltung und Signale unter Linux."
subject: linux
section: "System"
topicPath:
  - "prozesse-und-signale"
  - "ueberblick"
learningGoals:
  - "Du kennst Prozesse als laufende Programme."
  - "Du kannst Signale als einfache Steuer- und Benachrichtigungsform einordnen."
  - "Du verstehst typische Werkzeuge zur Prozessbeobachtung."
practiceIdeas: []
commonMistakes:
  - "Ein Programmname und einen konkreten Prozess zu verwechseln."
  - "`kill` nur als hartes Beenden zu verstehen."
keyTakeaways:
  - "Ein Prozess ist eine laufende Instanz eines Programms mit eigener Prozess-ID."
  - "Signale informieren oder steuern Prozesse, vom sanften Beenden bis zum erzwungenen Abbruch."
recognizeSignals:
  - "Es geht um `ps`, `top`, `kill`, hängende Programme, Dienste oder Prozess-IDs."
selfCheckPoints:
  - "Kann ich den Unterschied zwischen Programmdatei und laufendem Prozess erklären?"
level: einfach
tags:
  - "linux"
  - "prozesse"
  - "signale"
  - "system"
draft: false
---

# Prozesse und Signale

![Schaubild zu Prozessen und Signalen.](/schlaufuchs-platform/images/overviews/v148/prozesse-und-signale.svg)

*Das Schaubild zeigt Prozesse als laufende Einheiten und Signale als Steuerimpulse.*


Ein Prozess ist eine laufende Instanz eines Programms. Wenn ein Programm gestartet wird, erzeugt das System einen Prozess mit eigener Prozess-ID, eigenem Zustand und bestimmten Ressourcen. Mehrere Prozesse können aus derselben Programmdatei entstehen, etwa mehrere geöffnete Shells oder mehrere Serverprozesse.

Signale sind einfache Nachrichten an Prozesse. Sie können einen Prozess auffordern, sich zu beenden, eine Konfiguration neu zu laden oder auf eine Unterbrechung zu reagieren. Der Befehl `kill` sendet Signale; er bedeutet nicht ausschließlich gewaltsames Beenden.

## Prozessverwaltung

Linux verwaltet Prozesse mit Informationen wie Prozess-ID, Elternprozess, Nutzer, CPU-Nutzung, Speicherverbrauch und Zustand. Werkzeuge wie `ps`, `top`, `htop` oder `pgrep` helfen dabei, laufende Prozesse zu beobachten und zu finden.

## Prozesszustände

Ein Prozess kann laufen, schlafen, auf Eingabe warten, beendet sein oder als Zombie kurzzeitig auf Aufräumarbeiten warten. Diese Zustände helfen bei der Fehlersuche. Ein hoher CPU-Verbrauch bedeutet etwas anderes als ein Prozess, der blockiert auf I/O wartet.

## Signale

`SIGTERM` fordert einen Prozess normalerweise zum Beenden auf. Der Prozess kann aufräumen und geordnet stoppen. `SIGKILL` beendet ihn sofort und kann nicht abgefangen werden. `SIGHUP` wird häufig verwendet, um Dienste zum Neuladen ihrer Konfiguration zu bewegen. `SIGINT` entsteht oft durch `Ctrl+C` im Terminal.

## Dienste und Prozesse

Viele Hintergrunddienste laufen als Prozesse. Systemd verwaltet sie über Units, aber darunter stehen weiterhin Prozesse. Bei Problemen ist deshalb oft beides wichtig: der Dienststatus und die konkreten Prozessinformationen.

## Häufige Missverständnisse

Ein häufiger Fehler ist, sofort `kill -9` zu verwenden. Das kann nötig sein, verhindert aber sauberes Aufräumen. Besser ist oft zuerst ein normales Beenden. Ein anderes Missverständnis ist, einen Programmnamen als eindeutigen Prozess zu behandeln, obwohl mehrere Instanzen laufen können.

## Kurz zusammengefasst

Prozesse sind laufende Programme, Signale sind einfache Steuerimpulse. Wer Prozess-IDs, Zustände und Signalarten versteht, kann Linux-Systeme gezielt beobachten und kontrolliert eingreifen.
