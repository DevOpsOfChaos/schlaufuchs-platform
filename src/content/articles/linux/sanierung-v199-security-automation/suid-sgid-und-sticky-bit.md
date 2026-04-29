---
title: "SUID, SGID und Sticky Bit"
description: "Sonderrechte lösen reale Praxisprobleme, können aber falsche Privilegien erzeugen."
subject: "linux"
section: "dateirechte"
topicPath: ["security-und-betrieb", "sonderrechte"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "dateirechte", "sonderrechte", "betrieb"]
draft: false
---
![SUID, SGID und Sticky Bit](/schlaufuchs-platform/images/linux/sanierung-v199-security-automation/suid-sgid-und-sticky-bit.svg)

Sonderrechte lösen reale Praxisprobleme, können aber falsche Privilegien erzeugen.

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

SUID, SGID und Sticky Bit wird beherrschbar, wenn du Zustand, Ursache, Eingriff und Kontrolle sauber trennst.
