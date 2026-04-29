---
title: "Aufgabe – journalctl -u zur Dienstdiagnose nutzen"
description: "Übe journalctl -u zur Dienstdiagnose nutzen mit Einordnung, Abgrenzung, Prüfschritt und Gegenprobe."
subject: "linux"
section: "Systembetrieb"
topicPath: ["systembetrieb", "prozesse-dienste-logs", "v110-teil-2", "journalctl-u-zur-dienstdiagnose-nutzen"]
taskId: "v110-linux-journalctl-u-zur-dienstdiagnose-nutzen"
tags: ["linux", "Systembetrieb", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe

Bearbeite das Szenario zu **journalctl -u zur Dienstdiagnose nutzen**.

## Szenario

Ein Dienst startet nicht und die Ursache steht im Journal.

## Arbeitsauftrag

1. Ordne die Situation dem genauen Unterthema zu.
2. Erkläre die naheliegende Verwechslung: Logs werden global durchsucht, ohne den Dienst einzugrenzen.
3. Nutze diesen Prüfschritt: Filtere zuerst mit journalctl -u DIENSTNAME.
4. Formuliere eine Gegenprobe, bei der sich ein Wert, Zustand oder Kontext ändert.

## Erwartete Abgabe

- eine klare Einordnung,
- eine fachliche Abgrenzung,
- ein konkreter Prüfschritt,
- eine kurze Gegenprobe.
