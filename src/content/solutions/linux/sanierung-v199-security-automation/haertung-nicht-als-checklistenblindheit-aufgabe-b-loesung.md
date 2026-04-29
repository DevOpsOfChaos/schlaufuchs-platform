---
title: "Lösung: Härtung ohne Checklistenblindheit – Aufgabe B"
description: "Musterlösung zu Härtung ohne Checklistenblindheit, Aufgabe B."
subject: "linux"
section: "security-grundlagen"
topicPath: ["security-und-betrieb", "haertung"]
taskId: "LINUX-V199-HAERTUNG_NICHT_ALS_CHECKLISTENBLINDHEIT-B"
relatedExercise: "linux/sanierung-v199-security-automation/haertung-nicht-als-checklistenblindheit-aufgabe-b"
tags: ["linux", "security-grundlagen", "loesung", "sanierung-v199"]
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

Bei **Härtung ohne Checklistenblindheit** zählt nicht der schnellste Befehl, sondern ein Prüfweg, der Zustand, Ursache, Eingriff und Kontrolle sichtbar macht.
