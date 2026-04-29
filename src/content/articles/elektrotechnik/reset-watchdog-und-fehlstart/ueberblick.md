---
title: "Reset, Watchdog und Fehlstart"
description: "Einordnung von Reset, Watchdog und typischen Fehlstarts in Mikrocontroller-Systemen."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["reset-watchdog-und-fehlstart", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# Reset, Watchdog und Fehlstart

![Schaubild zu Reset, Fehlstart und Watchdog.](/schlaufuchs-platform/images/overviews/v148/reset-watchdog-und-fehlstart.svg)

*Das Schaubild ordnet Resetpfad, Startphase und Watchdog als Sicherheitsnetz ein.*



## Reset
Ein Reset setzt den Mikrocontroller in einen definierten Startzustand zurück. Dabei werden Register, Programmzähler und Peripherie in Anfangszustände gebracht. Reset kann durch Einschalten, externe Reset-Pins, Brown-out-Erkennung, Software oder Watchdog ausgelöst werden.

## Fehlstart
Ein Fehlstart liegt vor, wenn das System nach dem Einschalten nicht zuverlässig in den vorgesehenen Zustand gelangt. Ursachen können zu langsam ansteigende Versorgung, instabiler Takt, falsche Fuse- oder Boot-Einstellungen, nicht initialisierte Pins oder externe Baugruppen sein, die noch nicht bereit sind.

## Watchdog
Ein Watchdog ist ein Überwachungsmechanismus. Die Software muss ihn regelmäßig zurücksetzen. Geschieht das nicht, nimmt die Hardware an, dass das Programm hängt, und löst einen Reset aus. Das ist nützlich in Systemen, die ohne Bedienperson weiterlaufen sollen.

## Robuste Einordnung
Watchdog und Reset sind Sicherheitsmechanismen, keine Reparatur für schlechte Struktur. Ein System sollte nach einem Reset kontrolliert initialisieren, Fehlerzustände erkennen und gefährliche Ausgänge zunächst in sichere Zustände bringen. Besonders bei Motoren, Relais oder Heizungen ist das wichtig.

## Missverständnisse
Ein Watchdog kann ein System wieder startfähig machen, aber er erklärt nicht, warum das Programm hängen blieb. Wer nur den Watchdog aktiviert, ohne Logik, Versorgung und Randfälle zu prüfen, kann Fehler verdecken statt lösen.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
