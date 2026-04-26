---
title: "Lösung: I2C-Adresse sicher unterscheiden"
description: "Musterlösung zu I2C-Adresse sicher unterscheiden mit Trennkante und Gegenprobe."
subject: elektrotechnik
section: "Feinstruktur Elektrotechnik"
topicPath:
  - "signale-stoerungen-v115"
  - "kommunikation-robust"
  - "i2c-adresse-sicher-unterscheiden-v115"
taskId: "elektrotechnik-i2c-adresse-sicher-unterscheiden-v115"
relatedExercise: "elektrotechnik/signale-stoerungen-v115/kommunikation-robust/i2c-adresse-sicher-unterscheiden-v115"
tags:
  - "elektrotechnik"
  - "feinstruktur"
  - "unterthema"
  - "signale und störungen"
  - "kommunikation robust machen"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **I2C-Adresse sicher unterscheiden**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> 7-Bit- und 8-Bit-Schreibweise werden vermischt.

Fachlich ruhiger ist dagegen:

> Die Entscheidung folgt aus Messpunkt, Bezug, Pegel und Bauteilfunktion, nicht aus bloßem Bauteilnamen.

## Begründung

Die zentrale Prüffrage war:

> Welche Adressdarstellung nutzt die Bibliothek?

Eine passende Antwort ist: Zuerst werden Messbezug, Strompfad und Bauteilrolle festgelegt. Danach lässt sich erkennen, ob der beobachtete Effekt zur Schaltung passt oder ein Fehlerbild ist.

## Gegenprobe

Die Entscheidung würde kippen, wenn der Messbezug oder der Strompfad anders liegt. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
