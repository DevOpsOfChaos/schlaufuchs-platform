---
title: "Lösung – Logs mit journalctl und grep eingrenzen"
description: "Musterlösung zur Aufgabe über Loganalyse mit Begründung und Gegenprobe."
subject: "linux"
section: "Shell"
topicPath: ["shell", "log-analyse-und-fehler", "logs-mit-journalctl-und-grep-eingrenzen"]
taskId: "v106-linux-logs-mit-journalctl-und-grep-eingrenzen"
relatedExercise: "linux/shell/log-analyse-und-fehler/logs-mit-journalctl-und-grep-eingrenzen"
tags: ["linux", "Shell", "loesung"]
draft: false
---
## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **Loganalyse**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Vor einem Eingriff wird beobachtet, eingegrenzt und die Wirkung des Befehls geprüft.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **komplettes Log von oben lesen**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- Zeitraum setzen
- Dienst wählen
- Suchwort prüfen
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
