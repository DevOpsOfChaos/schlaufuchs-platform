---
title: "df du und Inodes – Überblick"
description: "Ein ruhiger Linux-Überblick zu df du und Inodes: Zustand, Signal, Aktion, Kontrolle und Rückfallweg werden getrennt."
subject: "linux"
section: "speicher-dateisysteme-und-kapazitaet"
topicPath: ["speicher-dateisysteme-und-kapazitaet", "df-du-und-inodes"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["linux", "speicher-dateisysteme-und-kapazitaet", "df-du-und-inodes", "betrieb", "recovery", "v212"]
draft: false
---
![df du und Inodes](/schlaufuchs-platform/images/linux/sanierung-v212-betrieb-recovery/df-du-und-inodes.svg)

## Worum es hier geht

**df du und Inodes** ist ein Linux-Betriebsthema. Ziel ist eine ruhige Vorgehensweise: erst Zustand erfassen, dann ein belastbares Signal wählen, danach klein ändern und am Ende Kontrolle und Rückfallweg dokumentieren.

## Grundidee

Linux-Administration wird stabiler, wenn nicht sofort repariert wird. Ein Dienst, ein Log, ein Backup, ein Netzwerkpfad oder ein Rechteproblem muss zuerst eingeordnet werden. Wichtig ist, ob Nutzer betroffen sind, Daten gefährdet sind und welche Änderung sicher rückgängig gemacht werden kann.

## Prüfweg

1. Istzustand und Auswirkung notieren.
2. Passendes Kommando, Log oder Metrik als Beleg wählen.
3. Risiko der Änderung begrenzen.
4. Nur eine kleine Aktion durchführen.
5. Ergebnis prüfen und Rückfallweg festhalten.

## Häufige Fehler

- Neustart ohne Diagnose.
- Logs ohne Zeitfenster lesen.
- Backup mit erfolgreichem Restore verwechseln.
- Änderungen ohne Betriebsnotiz hinterlassen.

## Merksatz

df du und Inodes ist sauber bearbeitet, wenn Zustand, Signal, Aktion, Kontrolle und Recovery getrennt sichtbar sind.
