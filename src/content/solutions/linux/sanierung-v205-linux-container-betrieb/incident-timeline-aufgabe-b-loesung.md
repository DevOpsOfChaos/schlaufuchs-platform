---
title: "Incident-Timeline – Lösung B"
description: "Musterlösung zur Aufgabe B über Incident-Timeline."
subject: "linux"
section: "beobachtbarkeit"
topicPath: ["beobachtbarkeit", "incident-timeline"]
taskId: "LINUX-V205-026-B"
relatedExercise: "linux/sanierung-v205-linux-container-betrieb/incident-timeline-aufgabe-b"
tags: ["linux", "betrieb", "loesung", "v205"]
draft: false
---
## Musterlösung

Eine gute Betriebsnotiz zu **Incident-Timeline** macht Absicht, Risiko und Kontrolle sichtbar.

## Beispielstruktur

- Ziel: Die Änderung soll einen klar benannten Zustand herstellen.
- Annahme: Die betroffene Komponente verhält sich wie in der Testumgebung.
- Vorabprüfung: Status, Konfiguration und letzte Logs werden geprüft.
- Smoke-Test: Nach dem Ausrollen wird ein kritischer Nutzungsweg oder eine zentrale technische Prüfung ausgeführt.
- Rückfallpunkt: Die vorherige Version, Konfiguration oder ein Snapshot ist bekannt und erreichbar.

## Warum das reicht

Die Notiz ist kurz, aber handlungsfähig. Sie verhindert, dass ein Teammitglied nur einen Befehl kopiert, ohne Ziel und Risiko zu verstehen.

## Merksatz

Eine Änderung ist erst dann betriebssicher, wenn Prüfung und Rückweg mitgeplant sind.

