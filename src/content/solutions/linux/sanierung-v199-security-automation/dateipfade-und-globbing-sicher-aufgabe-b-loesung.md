---
title: "Lösung: Dateipfade und Globbing sicher nutzen – Aufgabe B"
description: "Musterlösung zu Dateipfade und Globbing sicher nutzen, Aufgabe B."
subject: "linux"
section: "shell-automation"
topicPath: ["automatisierung-und-betrieb", "pfade-globbing"]
taskId: "LINUX-V199-DATEIPFADE_UND_GLOBBING_SICHER-B"
relatedExercise: "linux/sanierung-v199-security-automation/dateipfade-und-globbing-sicher-aufgabe-b"
tags: ["linux", "shell-automation", "loesung", "sanierung-v199"]
draft: false
---
## Musterlösung

Eine tragfähige Lösung beginnt mit einer Trennung der Ebenen.

### 1. Symptom

Beschreibe nur, was sichtbar ist: Dienststatus, Fehlermeldung, fehlender Zugriff, volle Partition, unerwarteter Netzwerkzustand oder auffällige Logzeile.

### 2. Mögliche Ursache

Leite daraus höchstens eine oder zwei konkrete Hypothesen ab. Beispiele sind falsche Rechte, fehlende Konfiguration, nicht erreichbarer Dienst, abgelaufenes Zertifikat, volle Platte oder ungeeignete Startreihenfolge.

### 3. Sicherer Prüfschritt

Der nächste Schritt soll Informationen liefern, aber keinen unnötigen Schaden verursachen. Gute Prüfschritte lesen Status, Logs, Rechte, Ports, Mounts oder Konfiguration, bevor sie Änderungen schreiben.

### 4. Kontrolle

Nach einer Änderung brauchst du einen klaren Nachweis: Dienst läuft, Logfehler verschwindet, Zugriff funktioniert, Speicher bleibt stabil oder Alarm ist nachvollziehbar geschlossen.

## Kurzfazit

Bei **Dateipfade und Globbing sicher nutzen** zählt nicht der schnellste Befehl, sondern ein Prüfweg, der Zustand, Ursache, Eingriff und Kontrolle sichtbar macht.
