---
title: "Lösung: I2C und gemeinsame Leitungen – Aufgabe B"
description: "Musterlösung zu i2c und gemeinsame leitungen – Aufgabe B."
subject: "elektrotechnik"
section: "Digitale Praxis"
topicPath: ["digitale-praxis", "i2c"]
taskId: "ET-V201-I2C_UND_GEMEINSAME_LEITUNGEN-B"
relatedExercise: "elektrotechnik/sanierung-v201-energie-regelung/i2c-und-gemeinsame-leitungen-aufgabe-b"
tags: ["elektrotechnik", "sanierung-v201", "digitaltechnik", "digitale-praxis", "i2c"]
draft: false
---
## Musterlösung

Die zweite Aussage ist tragfähiger: Ein Messwert allein beweist noch nicht, dass eine Schaltung korrekt arbeitet.

Zwei fachliche Argumente:

- Ein Wert ist nur aussagekräftig, wenn Messpunkt und Bezugspunkt klar sind.
- Die Bewertung hängt von Last, Betriebszustand und zulässigen Grenzen ab.

Eine passende Kontrollfrage lautet zum Beispiel:

> Passt dieser Messwert zum erwarteten Verhalten der Schaltung und zu den Grenzen der beteiligten Bauteile?

Ohne diese Frage kann ein typischer Fehler entstehen: Ein zufällig plausibel wirkender Wert wird übernommen, obwohl er unter anderer Last, an einem falschen Bezugspunkt oder außerhalb der sicheren Grenze gemessen wurde.

## Kurzfazit

Bei i2c und gemeinsame leitungen zählt nicht nur der vorhandene Messwert, sondern seine begründete Einordnung.
