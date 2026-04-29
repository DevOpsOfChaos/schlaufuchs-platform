---
title: "Lösung: Aliasing alltagsnah erkennen – Aufgabe A"
description: "Musterlösung zu aliasing alltagsnah erkennen mit klarem Prüfweg."
subject: "daten-und-signale"
section: "datenqualitaet"
topicPath: ["datenqualitaet-und-netze", "abtastung", "aliasing-alltagsnah"]
taskId: "DS-V202-ALIASING-ALLTAGSNAH-A"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/aliasing-alltagsnah-aufgabe-a"
tags: ["daten-und-signale", "datenqualitaet", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Aliasing alltagsnah erkennen** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Zu seltene Abtastung kann ein Signal erzeugen, das plausibel aussieht und trotzdem falsch ist. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
