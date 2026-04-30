---
title: "Lösung – Shellskripte mit set -eu und Prüfungen härten"
description: "Musterlösung zur Aufgabe über Skriptrobustheit mit Begründung und Gegenprobe."
subject: "linux"
section: "Shellskripte"
topicPath: ["shellskripte", "robuste-skripte", "shellskripte-mit-set-eu-und-pruefungen-haerten"]
taskId: "v106-linux-shellskripte-mit-set-eu-und-pruefungen-haerten"
relatedExercise: "src/content/exercises/linux/shellskripte/robuste-skripte/shellskripte-mit-set-eu-und-pruefungen-haerten"
tags: ["linux", "Shellskripte", "loesung"]
draft: false
---
## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **Skriptrobustheit**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Vor einem Eingriff wird beobachtet, eingegrenzt und die Wirkung des Befehls geprüft.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **rm mit leerer Variable riskieren**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- Eingabe prüfen
- set -eu setzen
- Pfad zitieren
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
