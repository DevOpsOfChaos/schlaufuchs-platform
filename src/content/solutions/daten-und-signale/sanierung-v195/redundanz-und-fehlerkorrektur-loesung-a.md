---
title: "Lösung: Redundanz und Fehlerkorrektur: Aufgabe A"
description: "Musterlösung zur Aufgabe daten-und-signale-v195-016a im Daten-und-Signale-Block v195."
subject: "daten-und-signale"
section: "signalverarbeitung-und-uebertragung"
topicPath:
  - "signalverarbeitung-und-uebertragung"
  - "fehler-und-robustheit"
  - "redundanz-und-fehlerkorrektur"
  - "loesung-a"

taskId: "daten-und-signale-v195-016a"
relatedExercise: "daten-und-signale/sanierung-v195/redundanz-und-fehlerkorrektur-aufgabe-a"
tags:
  - "redundanz"
  - "fehlerkorrektur"
  - "daten-und-signale"
  - "loesung"
  - "v195"

draft: false
---

## Musterlösung zu `daten-und-signale-v195-016a`

Ausgangsauftrag: Entscheide, wann Redundanz sinnvoller ist als bloßes Wiederholen.

Eine mögliche Lösung ist:

1. **Signal oder Datenquelle:** Es wird ausdrücklich benannt, welcher Wert betrachtet wird. Zum Beispiel Sensorwert, Textcodierung, Paketfolge, Audiosignal oder Diagrammverlauf.
2. **Darstellung:** Einheit, Abtastrate, Codierung, Zeitstempel oder Wertebereich werden nicht stillschweigend vorausgesetzt, sondern kurz festgehalten.
3. **Fehlerquelle:** Mindestens eine Unsicherheit wird genannt. Das kann Rauschen, Verzögerung, falsche Codierung, fehlende Metadaten oder ein zu grober Wertebereich sein.
4. **Kontrolle:** Die Lösung schlägt eine kleine Prüfung vor, etwa Vergleich mit Referenz, zweiter Messpunkt, Prüfsumme, Diagrammkontrolle oder erneute Auswertung mit klarem Zeitfenster.

## Warum das passt

Die Lösung bleibt ruhig und prüfbar. Sie macht keine größere Aussage, als die Daten erlauben, und trennt technische Beobachtung von Interpretation.

## Kontrollsatz

Eine gute Antwort zu Redundanz und Fehlerkorrektur sagt nicht nur, **was** gemessen oder übertragen wird, sondern auch, **wie sicher** diese Aussage unter den gegebenen Bedingungen ist.
