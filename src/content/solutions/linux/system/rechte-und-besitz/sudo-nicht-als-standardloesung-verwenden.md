---
title: "Lösung – sudo nicht als Standardlösung verwenden"
description: "Musterlösung zur Aufgabe über Rechteentscheidung mit Begründung und Gegenprobe."
subject: "linux"
section: "Rechte"
topicPath: ["system", "rechte-und-besitz", "sudo-nicht-als-standardloesung-verwenden"]
taskId: "v106-linux-sudo-nicht-als-standardloesung-verwenden"
relatedExercise: "src/content/exercises/linux/system/rechte-und-besitz/sudo-nicht-als-standardloesung-verwenden"
tags: ["linux", "Rechte", "loesung"]
draft: false
---
## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **Rechteentscheidung**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Vor einem Eingriff wird beobachtet, eingegrenzt und die Wirkung des Befehls geprüft.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **jeden Fehler mit sudo wiederholen**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- Fehlertext lesen
- Besitz prüfen
- Recht prüfen
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
