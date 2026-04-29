---
title: "Lösung: Paket und Nutzdaten unterscheiden – Aufgabe A"
description: "Musterlösung zu paket und nutzdaten unterscheiden mit klarem Prüfweg."
subject: "daten-und-signale"
section: "netze"
topicPath: ["netzwerke-und-protokolle", "grundlagen", "paket-und-nutzdaten"]
taskId: "DS-V202-PAKET-UND-NUTZDATEN-A"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/paket-und-nutzdaten-aufgabe-a"
tags: ["daten-und-signale", "netze", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Paket und Nutzdaten unterscheiden** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Ein Paket enthält nicht nur Daten, sondern auch Adressen, Steuerinformationen und Prüffelder. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
