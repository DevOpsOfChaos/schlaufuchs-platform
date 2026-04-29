---
title: "Blue-Green-Deployment – Lösung A"
description: "Musterlösung zur Aufgabe A über Blue-Green-Deployment."
subject: "linux"
section: "deployment-betrieb"
topicPath: ["deployment-betrieb", "blue-green-deployment"]
taskId: "LINUX-V205-030-A"
relatedExercise: "linux/sanierung-v205-linux-container-betrieb/blue-green-deployment-aufgabe-a"
tags: ["linux", "betrieb", "loesung", "v205"]
draft: false
---
## Musterlösung

Eine sinnvolle Diagnose zu **Blue-Green-Deployment** beginnt mit Beobachtung statt mit Reparaturversuchen.

## Möglicher Lösungsweg

1. Zuerst wird festgehalten, welcher Dienst betroffen ist und welcher Zustand erwartet wird.
2. Danach werden Status, Logs und letzte Änderungen geprüft.
3. Anschließend werden Ressourcen wie Speicher, CPU, Netzwerk oder Dateirechte betrachtet.
4. Eine kleine Maßnahme wird erst geplant, wenn eine plausible Hypothese vorliegt.
5. Der Rückfallweg wird vor der Änderung notiert.

## Beispielhafte Bewertung

Beruhigend wäre, wenn Dienststatus, Logs und Konfiguration zusammenpassen und keine kritischen Ressourcen knapp sind. Kritisch wäre, wenn der Dienst wiederholt neu startet, neue Fehlermeldungen auftauchen oder unklar ist, welche Änderung den Zustand ausgelöst hat.

## Merksatz

Eine gute Diagnose macht den nächsten Schritt kleiner und sicherer.

