---
title: "Lösung: SUID, SGID und Sticky Bit – Aufgabe A"
description: "Musterlösung zu SUID, SGID und Sticky Bit, Aufgabe A."
subject: "linux"
section: "dateirechte"
topicPath: ["security-und-betrieb", "sonderrechte"]
taskId: "LINUX-V199-SUID_SGID_UND_STICKY_BIT-A"
relatedExercise: "linux/sanierung-v199-security-automation/suid-sgid-und-sticky-bit-aufgabe-a"
tags: ["linux", "dateirechte", "loesung", "sanierung-v199"]
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

Bei **SUID, SGID und Sticky Bit** zählt nicht der schnellste Befehl, sondern ein Prüfweg, der Zustand, Ursache, Eingriff und Kontrolle sichtbar macht.
