---
title: "Bootprozess und Systemstart"
description: "Allgemeiner Überblick über den Linux-Bootprozess vom Firmwarestart bis zum laufenden System."
subject: "linux"
section: "System"
topicPath: ["bootprozess-und-systemstart", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "System"]
draft: false
---
# Bootprozess und Systemstart

![Schaubild zum Bootprozess.](/schlaufuchs-platform/images/overviews/v150/bootprozess-und-systemstart.svg)

*Das Schaubild zeigt Firmware, Bootloader, Kernel und Userspace als Startkette.*


Der Bootprozess beschreibt, wie ein System schrittweise zu einem laufenden Linux-System wird. Firmware, Bootloader, Kernel, Initramfs und Init-System übernehmen nacheinander Aufgaben.

## Einordnung

Der Systemstart ist wichtig für Fehlersuche und Betrieb. Wenn ein System nicht startet, hängt die Diagnose davon ab, in welcher Phase der Fehler auftritt.

## Zentrale Aspekte

- **Firmware:** BIOS oder UEFI initialisiert Hardware.
- **Bootloader:** Er lädt Kernel und Startparameter.
- **Kernel:** Er initialisiert Treiber und Grundfunktionen.
- **Init-System:** systemd startet Dienste und Zielzustände.

## Beispiele und Zusammenhang

Ein Bootloader-Fehler sieht anders aus als ein fehlerhafter Dienst. Ein System kann den Kernel laden, aber später beim Mounten scheitern.

## Abgrenzung

Booten ist nicht nur das Starten von Diensten. Es beginnt bereits vor dem Linux-Kernel.

## Häufige Missverständnisse

Jeder Startfehler wird oft als systemd-Problem eingeordnet, obwohl er früher entstehen kann.

## Kurz zusammengefasst

- Der Linux-Start besteht aus mehreren Phasen.
- Fehlerdiagnose hängt von der Phase ab.
- Bootloader, Kernel und Init-System haben unterschiedliche Aufgaben.
