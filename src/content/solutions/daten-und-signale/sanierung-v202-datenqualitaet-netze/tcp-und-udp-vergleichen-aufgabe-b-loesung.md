---
title: "Lösung: TCP und UDP vergleichen – Aufgabe B"
description: "Musterlösung zu tcp und udp vergleichen mit klarem Prüfweg."
subject: "daten-und-signale"
section: "netze"
topicPath: ["netzwerke-und-protokolle", "transport", "tcp-und-udp-vergleichen"]
taskId: "DS-V202-TCP-UND-UDP-VERGLEICHEN-B"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/tcp-und-udp-vergleichen-aufgabe-b"
tags: ["daten-und-signale", "netze", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **TCP und UDP vergleichen** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

TCP priorisiert Zuverlässigkeit, UDP niedrige Latenz und einfache Übertragung. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
