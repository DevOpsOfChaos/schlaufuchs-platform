---
title: "Lösung: Fehlende Werte sauber behandeln – Aufgabe A"
description: "Musterlösung zu fehlende werte sauber behandeln mit klarem Prüfweg."
subject: "daten-und-signale"
section: "datenqualitaet"
topicPath: ["datenqualitaet-und-netze", "datenqualitaet", "fehlende-werte"]
taskId: "DS-V202-FEHLENDE-WERTE-A"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/fehlende-werte-aufgabe-a"
tags: ["daten-und-signale", "datenqualitaet", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Fehlende Werte sauber behandeln** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Lücken sind Information: sie zeigen Ausfall, Filterung oder Übertragungsprobleme. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
