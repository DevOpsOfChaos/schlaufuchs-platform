---
title: "Abtastung und Sampling"
description: "Überblick über Abtastung, Abtastrate und die Umwandlung zeitveränderlicher Signale in digitale Messwerte."
subject: elektrotechnik
section: "Signale"
topicPath:
  - "abtastung-und-sampling"
  - "ueberblick"
learningGoals:
  - "Du kannst Abtastung und Sampling als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein typischer Fehler ist, nur auf die ADC-Bitbreite zu achten und die zeitliche Abtastung zu ignorieren."
keyTakeaways:
  - "Abtastung macht aus einem zeitlichen Verlauf einzelne Messwerte."
  - "Die Abtastrate bestimmt, welche Änderungen sichtbar bleiben."
  - "Zu langsames Sampling kann Signale verfälschen."
recognizeSignals:
  - "Es geht um Messpunkte, ADC-Zyklen oder zeitliche Auflösung."
  - "Ein Messwert muss zum passenden Zeitpunkt entstehen."
selfCheckPoints:
  - "Kann ich Abtastung und Sampling in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "elektrotechnik"
  - "sampling"
  - "adc"
  - "signale"
draft: false
---

# Abtastung und Sampling

Abtastung bedeutet, ein zeitveränderliches Signal zu bestimmten Zeitpunkten zu messen. Aus einem kontinuierlichen Verlauf werden einzelne Messpunkte.

## Einordnung

Sampling ist Grundlage für Sensordaten, Audio, Oszilloskope und Mikrocontroller-Messungen. Es entscheidet, welche Änderungen sichtbar bleiben und welche zwischen zwei Messzeitpunkten verloren gehen.

## Zentrale Aspekte

- **Abtastrate:** Sie gibt an, wie oft pro Sekunde gemessen wird.
- **Zeitliche Auflösung:** Schnelle Änderungen brauchen häufigere Messungen.
- **Alias-Effekte:** Zu seltene Messungen können ein falsches Bild erzeugen.
- **Vorfilterung:** Filter begrenzen schnelle Signalanteile vor der Messung.

## Beispiele und Zusammenhang

Eine Temperatur kann langsam gemessen werden. Ein Audiosignal oder ein kurzer Störimpuls braucht eine deutlich höhere Abtastrate, damit wichtige Details nicht verschwinden.

## Abgrenzung

Abtastung ist nicht dasselbe wie Spannungsauflösung. Eine Messung kann häufig, aber ungenau sein, oder selten, aber mit vielen Bits erfolgen.

## Häufige Missverständnisse

Ein typischer Fehler ist, nur auf die ADC-Bitbreite zu achten und die zeitliche Abtastung zu ignorieren.

## Kurz zusammengefasst

- Abtastung macht aus einem zeitlichen Verlauf einzelne Messwerte.
- Die Abtastrate bestimmt, welche Änderungen sichtbar bleiben.
- Zu langsames Sampling kann Signale verfälschen.
