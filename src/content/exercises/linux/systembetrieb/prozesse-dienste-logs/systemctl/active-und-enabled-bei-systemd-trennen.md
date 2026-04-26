---
title: "Aufgabe – active und enabled bei systemd trennen"
description: "Übe systemd active/enabled mit Szenario, Trennkante und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath:
  - "systembetrieb"
  - "prozesse-dienste-logs"
  - "systemctl"
  - "active-und-enabled-bei-systemd-trennen"
taskId: "v111-linux-active-und-enabled-bei-systemd-trennen"
tags:
  - "linux"
  - "betrieb"
  - "unterthema"
  - "systembetrieb"
  - "prozesse-dienste-logs"
  - "active-und-enabled-bei-systemd-trennen"
hintPoints:
  - "Benenne zuerst das genaue Unterthema."
  - "Schreibe die typische Verwechslung ausdrücklich auf."
  - "Nutze einen konkreten Prüfschritt statt einer allgemeinen Erklärung."
selfCheckPoints:
  - "Ist die Lösung enger als ein breites Kapitel?"
  - "Wird ein Nachbarthema sauber ausgeschlossen?"
  - "Gibt es eine nachvollziehbare Gegenprobe?"
transferIdeas:
  - "Ändere einen Wert, Zustand oder Kontext und prüfe, ob die Begründung stabil bleibt."
  - "Formuliere eine zweite Aufgabe im gleichen Unterthema mit anderer Oberfläche."
reflectionPrompt: "Welche kleine Trennkante macht systemd active/enabled übersichtlicher als ein breiter Sammelbegriff?"
level: "einfach"
draft: false
---

## Aufgabe

Bearbeite das Szenario zu **systemd active/enabled**.

## Szenario

Ein Dienst läuft gerade, startet aber nach Reboot nicht.

## Arbeitsauftrag

1. Benenne das genaue Unterthema in einem Satz.
2. Erkläre, welche Verwechslung hier naheliegt.
3. Nutze diesen Prüfschritt: **Prüfe systemctl is-active und is-enabled getrennt.**
4. Formuliere eine kurze Gegenprobe mit einem veränderten Wert, Zustand oder Kontext.

## Erwartung

Die Antwort soll nicht nur einen Fachbegriff nennen, sondern zeigen, warum dieses kleine Unterthema besser passt als ein breites Sammelkapitel.
