---
title: Lösung – Berechtigungen für Schlüssel prüfen
description: Musterlösung zur Aufgabe über Berechtigungen für Schlüssel prüfen.
subject: linux
section: Feinstruktur Linux
topicPath:
- netzwerk-und-rechte
- ssh-und-schluessel
- berechtigungen-fuer-schluessel-pruefen-v114
taskId: v114-linux-berechtigungen-fuer-schluessel-pruefen-v114
relatedExercise: linux/netzwerk-und-rechte/ssh-und-schluessel/berechtigungen-fuer-schluessel-pruefen-v114
tags:
- linux
- v114
- loesung
- netzwerk-und-rechte
- ssh-und-schluessel
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Berechtigungen für Schlüssel prüfen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Sind die Rechte zu offen?

### 2. Begründung

SSH verweigert einen privaten Schlüssel. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Der Schlüsselinhalt wird für falsch gehalten.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
