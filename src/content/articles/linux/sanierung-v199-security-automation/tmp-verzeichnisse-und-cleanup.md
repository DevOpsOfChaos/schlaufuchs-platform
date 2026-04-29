---
title: "tmp-Verzeichnisse und Cleanup"
description: "Temporäre Dateien brauchen klare Lebensdauer, Rechte und Bereinigung, damit sie nicht zum Sicherheits- oder Platzproblem werden."
subject: "linux"
section: "betrieb"
topicPath: ["betrieb-und-wartung", "tmp-cleanup"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "betrieb", "tmp-cleanup", "betrieb"]
draft: false
---
![tmp-Verzeichnisse und Cleanup](/schlaufuchs-platform/images/linux/sanierung-v199-security-automation/tmp-verzeichnisse-und-cleanup.svg)

Temporäre Dateien brauchen klare Lebensdauer, Rechte und Bereinigung, damit sie nicht zum Sicherheits- oder Platzproblem werden.

## Worum es geht

In Linux-Systemen greifen Sicherheit, Betrieb und Automatisierung ineinander. Dieses Thema hilft dir, nicht nur einen Befehl zu kennen, sondern den betroffenen Zusammenhang zu erkennen.

Wichtig ist die Frage: **Welche Ebene entscheidet gerade?** Das kann eine Datei, ein Dienst, ein Benutzer, ein Netzwerkpfad, ein Logsignal oder ein geplanter Ablauf sein.

## Ruhiger Prüfweg

1. Beschreibe zuerst den beobachtbaren Zustand.
2. Trenne Benutzer, Rechte, Dienst, Netzwerk und Daten voneinander.
3. Prüfe nur eine Annahme zur gleichen Zeit.
4. Dokumentiere, was geändert wurde und woran du Erfolg erkennst.

## Typische Abgrenzung

Nicht jedes Problem ist ein Rechteproblem. Nicht jeder offene Port ist ein Sicherheitsvorfall. Nicht jedes Log ist eine Ursache. Gute Administration entsteht, wenn du Befunde einordnest, bevor du Befehle ausführst.

## Mini-Beispiel

Ein Dienst startet nicht. Statt sofort Rechte zu ändern, prüfst du zuerst Unit-Status, Logauszug, Benutzerkontext, Dateipfade, Netzwerkabhängigkeiten und zuletzt die konkrete Änderung mit Rückweg.

## Merksatz

tmp-Verzeichnisse und Cleanup wird beherrschbar, wenn du Zustand, Ursache, Eingriff und Kontrolle sauber trennst.
