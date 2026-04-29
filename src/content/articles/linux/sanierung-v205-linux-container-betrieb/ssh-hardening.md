---
title: "SSH-Hardening"
description: "SSH wird sicherer durch Schlüssel, eingeschränkte Benutzer und reduzierte Angriffsfläche."
subject: "linux"
section: "netzwerk-sicherheit"
topicPath: ["netzwerk-sicherheit", "ssh-hardening"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "betrieb", "container", "v205", "ssh"]
draft: false
---
![SSH-Hardening](/schlaufuchs-platform/images/linux/sanierung-v205-linux-container-betrieb/ssh-hardening.svg)

## Worum es geht

SSH wird sicherer durch Schlüssel, eingeschränkte Benutzer und reduzierte Angriffsfläche. Im Linux- und Containerbetrieb ist das Thema wichtig, weil kleine Unterschiede zwischen Entwicklung, Test und Produktion schnell echte Auswirkungen haben.

Eine ruhige Herangehensweise trennt drei Fragen:

- Was ist der gewünschte Zustand?
- Was ist aktuell messbar?
- Welche Änderung ist klein genug, um sie sicher zu prüfen?

## Einordnung

Der Themenblock gehört zu **Netzwerk Sicherheit**. Er verbindet technische Grundlagen mit praktischer Betriebsarbeit. Dabei geht es nicht darum, möglichst viele Befehle auswendig zu können, sondern um eine belastbare Denkweise.

Typische Situationen sind:

- ein Dienst startet nicht zuverlässig,
- ein Container verhält sich lokal anders als im Betrieb,
- Logs zeigen Symptome, aber noch keine Ursache,
- eine Änderung soll ohne unnötiges Risiko ausgerollt werden.

## Prüfschritte

1. Beschreibe zuerst den betroffenen Dienst und seine Aufgabe.
2. Prüfe, ob der Dienst läuft, erreichbar ist und erwartete Ressourcen hat.
3. Vergleiche Konfiguration, Umgebung und Abhängigkeiten mit dem Sollzustand.
4. Notiere jede Maßnahme so, dass sie wiederholt oder zurückgenommen werden kann.
5. Bewerte danach, ob die beobachtete Wirkung wirklich zur Hypothese passt.

## Merksatz

SSH-Hardening wird beherrschbar, wenn Zielzustand, Beobachtung, Änderung und Rückfallweg getrennt betrachtet werden.
