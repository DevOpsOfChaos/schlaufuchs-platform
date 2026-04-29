---
title: "Readiness und Liveness – Lösung B"
description: "Musterlösung zur Aufgabe B über Readiness und Liveness."
subject: "linux"
section: "service-qualitaet"
topicPath: ["service-qualitaet", "readiness-und-liveness"]
taskId: "LINUX-V205-070-B"
relatedExercise: "linux/sanierung-v205-linux-container-betrieb/readiness-und-liveness-aufgabe-b"
tags: ["linux", "betrieb", "loesung", "v205"]
draft: false
---
## Musterlösung

Eine gute Betriebsnotiz zu **Readiness und Liveness** macht Absicht, Risiko und Kontrolle sichtbar.

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

