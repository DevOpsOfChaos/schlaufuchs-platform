---
title: "Lösung – UART-Fehlerbilder aus Baudrate und Massebezug lesen"
description: "Musterlösung zur Aufgabe über UART-Debugging mit Begründung und Gegenprobe."
subject: "elektrotechnik"
section: "Kommunikation"
topicPath: ["mikrocontroller-und-atmega", "schnittstellen-und-fehlerbilder", "uart-fehlerbilder-aus-baudrate-und-massebezug-lesen"]
taskId: "v106-elektrotechnik-uart-fehlerbilder-aus-baudrate-und-massebezug-lesen"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/schnittstellen-und-fehlerbilder/uart-fehlerbilder-aus-baudrate-und-massebezug-lesen"
tags: ["elektrotechnik", "Kommunikation", "loesung"]
draft: false
---
## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **UART-Debugging**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Die elektrische Größe wird gemessen oder begründet, bevor aus dem Verhalten eine Ursache abgeleitet wird.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **nur Codefehler suchen**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- TX/RX prüfen
- GND verbinden
- Baudrate vergleichen
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
