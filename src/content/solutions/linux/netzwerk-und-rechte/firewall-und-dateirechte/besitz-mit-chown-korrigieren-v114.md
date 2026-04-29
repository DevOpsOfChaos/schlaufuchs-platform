---
title: "Lösung – Besitz mit chown korrigieren"
description: "Musterlösung zur Aufgabe über Besitz mit chown korrigieren."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["netzwerk-und-rechte", "firewall-und-dateirechte", "besitz-mit-chown-korrigieren-v114"]
taskId: "v114-linux-besitz-mit-chown-korrigieren-v114"
relatedExercise: "linux/netzwerk-und-rechte/firewall-und-dateirechte/besitz-mit-chown-korrigieren-v114"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Besitz mit chown korrigieren**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Gehört die Datei dem richtigen Nutzer?

### 2. Begründung

Ein Dienst kann eine Datei nicht schreiben. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Nur chmod wird erhöht.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
