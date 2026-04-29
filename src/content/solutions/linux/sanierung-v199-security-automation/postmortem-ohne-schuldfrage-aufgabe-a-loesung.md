---
title: "Lösung: Postmortem ohne Schuldfrage – Aufgabe A"
description: "Musterlösung zu Postmortem ohne Schuldfrage, Aufgabe A."
subject: "linux"
section: "incident"
topicPath: ["betrieb-und-wartung", "postmortem"]
taskId: "LINUX-V199-POSTMORTEM_OHNE_SCHULDFRAGE-A"
relatedExercise: "linux/sanierung-v199-security-automation/postmortem-ohne-schuldfrage-aufgabe-a"
tags: ["linux", "incident", "loesung", "sanierung-v199"]
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

Bei **Postmortem ohne Schuldfrage** zählt nicht der schnellste Befehl, sondern ein Prüfweg, der Zustand, Ursache, Eingriff und Kontrolle sichtbar macht.
