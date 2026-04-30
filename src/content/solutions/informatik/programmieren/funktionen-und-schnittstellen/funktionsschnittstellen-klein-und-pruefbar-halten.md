---
title: "Lösung – Funktionsschnittstellen klein und prüfbar halten"
description: "Musterlösung zur Aufgabe über Funktionsdesign mit Begründung und Gegenprobe."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmieren", "funktionen-und-schnittstellen", "funktionsschnittstellen-klein-und-pruefbar-halten"]
taskId: "v106-informatik-funktionsschnittstellen-klein-und-pruefbar-halten"
relatedExercise: "src/content/exercises/informatik/programmieren/funktionen-und-schnittstellen/funktionsschnittstellen-klein-und-pruefbar-halten"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterlösung

### 1. Beobachtung

Im Szenario geht es nicht um ein breites Sammelthema, sondern um **Funktionsdesign**. Entscheidend ist, die konkrete Situation sauber zu beschreiben, bevor eine Regel angewendet wird.

### 2. Entscheidung

Eine passende Entscheidung lautet:

> Die Daten- oder Algorithmusentscheidung wird aus dem Zugriffsmuster und den Randfällen abgeleitet.

Diese Entscheidung ist sinnvoll, weil sie die kleine Kernfrage löst und nicht unnötig in Nachbarthemen ausweicht.

### 3. Typische Fehlergefahr

Eine typische Stolperstelle wäre: **globale Variablen heimlich ändern**. Dadurch würde die Lösung zwar vielleicht technisch klingen, aber die eigentliche Abgrenzung des Unterthemas verlieren.

### 4. Gegenprobe

Eine gute Gegenprobe ist:

```text
- Eingaben zählen
- Ausgabe benennen
- Nebenwirkung prüfen
```

Wenn diese Gegenprobe fehlschlägt, muss die Begründung überarbeitet werden. Wenn sie gelingt, ist die Lösung fachlich plausibel und für andere nachvollziehbar.
