---
title: "Lösung – Baudrate und Taktfehler zusammen denken"
description: "Musterlösung zur Aufgabe: Baudrate und Taktfehler zusammen denken."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - taktquelle-und-timing-genauigkeit
taskId: ET-V182-012
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/taktquelle-und-timing-genauigkeit/baudrate-und-taktfehler-zusammen-denken.md
tags:
  - elektrotechnik
  - taktquelle-und-timing-genauigkeit
  - loesung
  - sanierung-v182
draft: false
---

## Musterlösung

### Teil 1 – Begriffe ordnen

Eine sinnvolle Ordnung beginnt nicht mit einer fertigen Lösung, sondern mit den Rollen im System.

- **Beobachtung oder Symptom:** Was ist sichtbar, messbar oder auffällig?
- **Ursache oder Eingang:** Welcher Zustand könnte das Verhalten auslösen?
- **Wirkung oder Ausgang:** Was verändert sich dadurch an Signal, Strom, Spannung oder Funktion?
- **Grenze oder Schutzbedingung:** Welcher Wert oder Zustand darf nicht überschritten werden?
- **Fehlerquelle:** Welche Annahme könnte falsch sein?

Wichtig ist, dass ein Symptom noch keine bewiesene Ursache ist.

### Teil 2 – Situation prüfen

Bei dieser Aufgabe ist eine gute Antwort, dass **erkläre, warum Kommunikationsfehler auch durch Timing entstehen können.** nicht isoliert bewertet wird. Zuerst wird der Normalzustand beschrieben: Welche Verbindung, welcher Pegel, welcher Strompfad oder welcher Messwert wäre plausibel?

Danach wird der Fehlerfall abgegrenzt. Ein typischer Irrtum wäre: Jeden Mikrocontroller-Takt als exakt zu behandeln. Deshalb sollte die Erklärung immer den Zusammenhang aus Schaltung, Messung und technischer Rolle nennen.

### Teil 3 – Gegenprobe formulieren

Eine brauchbare Gegenprobe nennt einen konkreten Prüfpunkt:

1. erwarteten Zustand notieren,
2. Messpunkt oder Beobachtung festlegen,
3. Ergebnis mit der Hypothese vergleichen,
4. nur eine Einflussgröße gleichzeitig ändern.

Damit wird aus einer Vermutung eine prüfbare Aussage.

### Teil 4 – Merksatz

Ein möglicher Merksatz lautet:

> Die Taktquelle bestimmt die Zeitbasis des Systems.

Dieser Merksatz ist gut, weil er das Thema nicht nur als einzelnes Bauteil oder Einzelproblem beschreibt, sondern als überprüfbaren technischen Zusammenhang.
