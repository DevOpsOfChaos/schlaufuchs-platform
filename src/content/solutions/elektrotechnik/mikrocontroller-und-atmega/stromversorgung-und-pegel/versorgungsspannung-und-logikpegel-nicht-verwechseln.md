---
title: "Lösung – Versorgungsspannung und Logikpegel nicht verwechseln"
description: "Musterlösung zur Aufgabe über Logikpegel mit Begründung und Gegenprobe."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath:
  - "mikrocontroller-und-atmega"
  - "stromversorgung-und-pegel"
  - "versorgungsspannung-und-logikpegel-nicht-verwechseln"
taskId: "v106-elektrotechnik-versorgungsspannung-und-logikpegel-nicht-verwechseln"
relatedExercise: "elektrotechnik/mikrocontroller-und-atmega/stromversorgung-und-pegel/versorgungsspannung-und-logikpegel-nicht-verwechseln"
tags:
  - "elektrotechnik"
  - "messen"
  - "mikrocontroller"
  - "signale"
  - "logikpegel"
  - "mikrocontroller-und-atmega"
  - "stromversorgung-und-pegel"
draft: false
---

## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **Logikpegel**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Die elektrische Größe wird gemessen oder begründet, bevor aus dem Verhalten eine Ursache abgeleitet wird.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **High immer als 5 V annehmen**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- VCC prüfen
- Signalpegel messen
- Eingangsschwelle lesen
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
