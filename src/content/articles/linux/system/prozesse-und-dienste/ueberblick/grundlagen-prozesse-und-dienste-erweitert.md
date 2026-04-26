---
title: "Grundlagen: Prozesse und Dienste"
description: "Allgemeiner Überblick über laufende Programme, Hintergrunddienste, Prozesszustände und typische Verwaltungsfragen unter Linux."
subject: linux
section: "System"
topicPath:
  - system
  - prozesse-und-dienste
  - grundlagen-prozesse-und-dienste-erweitert
learningGoals:
  - "Du erklärst Prozesse als laufende Programminstanzen."
  - "Du beschreibst Dienste als dauerhaft oder im Hintergrund laufende Aufgaben."
  - "Du ordnest Prozessverwaltung als Beobachten, Starten, Stoppen und Prüfen ein."
practiceIdeas: []
commonMistakes:
  - "Programmdatei und laufenden Prozess zu verwechseln."
  - "Jeden Hintergrundprozess automatisch für einen Dienst zu halten."
  - "Einen Dienst zu stoppen, ohne Abhängigkeiten oder Zweck zu prüfen."
keyTakeaways:
  - "Ein Prozess ist ein laufendes Programm mit eigener Prozess-ID."
  - "Dienste stellen häufig dauerhaft Systemfunktionen bereit."
  - "Werkzeuge wie ps, top, systemctl und journalctl zeigen unterschiedliche Blickwinkel."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "linux"
  - "prozesse"
  - "dienste"
  - "systemd"
draft: false
---

## Begriff

Ein **Prozess** ist ein laufendes Programm. Während eine Programmdatei auf der Festplatte liegt, befindet sich ein Prozess in Ausführung und besitzt eine Prozess-ID, Speicher, Rechte und einen Zustand. Ein **Dienst** ist eine Aufgabe, die häufig im Hintergrund läuft und eine Funktion des Systems bereitstellt.

Linux-Systeme bestehen aus vielen gleichzeitig laufenden Prozessen. Einige gehören zu Benutzerprogrammen, andere zu Systemdiensten.

## Prozesse

Ein Prozess kann kurzlebig sein, etwa ein einzelner Shell-Befehl. Er kann aber auch lange laufen, etwa ein Editor, ein Webserver oder ein Datenbankprozess. Prozesse können weitere Prozesse starten. Dadurch entsteht eine Prozesshierarchie mit Eltern- und Kindprozessen.

Werkzeuge wie ps oder top zeigen laufende Prozesse. Sie helfen dabei, Auslastung, Prozess-ID und Benutzerkontext zu prüfen.

## Dienste

Dienste laufen oft im Hintergrund und stellen Funktionen bereit, zum Beispiel Netzwerk, Zeitabgleich, Webserver, Drucksystem oder Anmeldung. Auf vielen Linux-Systemen werden Dienste mit systemd verwaltet. Befehle wie systemctl zeigen Status, starten oder stoppen Dienste.

Ein Dienst ist nicht nur ein Prozessname. Zu einem Dienst gehören Konfiguration, Startverhalten, Abhängigkeiten und Protokollausgaben.

## Beobachtung und Fehlersuche

Wenn ein Dienst nicht funktioniert, reicht es selten, nur zu fragen, ob ein Prozess läuft. Wichtig sind Status, Logs, Konfiguration, Netzwerkports und Berechtigungen. journalctl kann Protokolle anzeigen, während systemctl den Dienstzustand zusammenfasst.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Befehle oder typische Fehlerbilder. Diese Überblicksseite erklärt den allgemeinen Rahmen: Prozesse sind laufende Programme, Dienste sind verwaltete Hintergrundfunktionen mit Systemrolle.

<div class="note-panel">
  <p><strong>Merke:</strong> Nicht jeder Prozess ist ein Dienst, aber jeder Dienst wird letztlich durch einen oder mehrere Prozesse sichtbar.</p>
</div>
