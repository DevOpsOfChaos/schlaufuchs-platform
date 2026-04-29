---
title: "Lösung: Datenmodell für Zeitreihen – Aufgabe B"
description: "Musterlösung zu datenmodell für zeitreihen mit klarem Prüfweg."
subject: "daten-und-signale"
section: "betrieb"
topicPath: ["auswertung-und-betrieb", "datenmodell", "datenmodell-fuer-zeitreihen"]
taskId: "DS-V202-DATENMODELL-FUER-ZEITREIHEN-B"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/datenmodell-fuer-zeitreihen-aufgabe-b"
tags: ["daten-und-signale", "betrieb", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Datenmodell für Zeitreihen** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Zeitreihen brauchen Zeit, Wert, Quelle, Einheit und Qualitätsstatus. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
