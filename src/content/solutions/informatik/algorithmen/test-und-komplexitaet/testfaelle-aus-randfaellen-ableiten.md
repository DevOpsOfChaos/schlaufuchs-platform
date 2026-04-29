---
title: "Lösung – Testfälle aus Randfällen ableiten"
description: "Musterlösung zur Aufgabe über Testfälle mit Begründung und Gegenprobe."
subject: "informatik"
section: "Algorithmen"
topicPath: ["algorithmen", "test-und-komplexitaet", "testfaelle-aus-randfaellen-ableiten"]
taskId: "v106-informatik-testfaelle-aus-randfaellen-ableiten"
relatedExercise: "informatik/algorithmen/test-und-komplexitaet/testfaelle-aus-randfaellen-ableiten"
tags: ["informatik", "Algorithmen", "loesung"]
draft: false
---
## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **Testfälle**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Die Daten- oder Algorithmusentscheidung wird aus dem Zugriffsmuster und den Randfällen abgeleitet.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **nur schöne Beispieldaten nutzen**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- Normalfall wählen
- leeren Fall prüfen
- Grenze treffen
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
