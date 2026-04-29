---
title: "Lösung: DNS als Namenssystem – Aufgabe B"
description: "Musterlösung zu dns als namenssystem mit klarem Prüfweg."
subject: "daten-und-signale"
section: "netze"
topicPath: ["netzwerke-und-protokolle", "dienste", "dns-als-namenssystem"]
taskId: "DS-V202-DNS-ALS-NAMENSSYSTEM-B"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/dns-als-namenssystem-aufgabe-b"
tags: ["daten-und-signale", "netze", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **DNS als Namenssystem** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

DNS verbindet Namen mit technischen Adressen und ist ein zentraler Leseschritt bei Webfehlern. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
