---
title: "Speicherplatz, Alarme und logrotate"
description: "Volle Dateisysteme sind Betriebsfehler. Rotation, Alarme und Aufräumregeln verhindern stille Ausfälle."
subject: "linux"
section: "betrieb"
topicPath: ["betrieb-und-wartung", "speicherplatz"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "betrieb", "speicherplatz", "betrieb"]
draft: false
---
![Speicherplatz, Alarme und logrotate](/schlaufuchs-platform/images/linux/sanierung-v199-security-automation/speicherplatz-alarme-und-logrotate.svg)

Volle Dateisysteme sind Betriebsfehler. Rotation, Alarme und Aufräumregeln verhindern stille Ausfälle.

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

Speicherplatz, Alarme und logrotate wird beherrschbar, wenn du Zustand, Ursache, Eingriff und Kontrolle sauber trennst.
