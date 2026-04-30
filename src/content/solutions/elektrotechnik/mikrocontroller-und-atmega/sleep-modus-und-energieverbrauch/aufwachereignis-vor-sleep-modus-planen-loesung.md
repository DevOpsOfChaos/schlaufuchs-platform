---
title: "Lösung – Aufwachereignis vor Sleep-Modus planen"
description: "Musterlösung zur Aufgabe: Aufwachereignis vor Sleep-Modus planen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "sleep-modus-und-energieverbrauch", "aufwachereignis-vor-sleep-modus-planen"]
taskId: "ET-V182-014"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/sleep-modus-und-energieverbrauch/aufwachereignis-vor-sleep-modus-planen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
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

Bei dieser Aufgabe ist eine gute Antwort, dass **plane, welche Bedingung ein schlafendes System wieder aktivieren soll.** nicht isoliert bewertet wird. Zuerst wird der Normalzustand beschrieben: Welche Verbindung, welcher Pegel, welcher Strompfad oder welcher Messwert wäre plausibel?

Danach wird der Fehlerfall abgegrenzt. Ein typischer Irrtum wäre: Nur den Mikrocontroller zu betrachten und externe Verbraucher zu vergessen. Deshalb sollte die Erklärung immer den Zusammenhang aus Schaltung, Messung und technischer Rolle nennen.

### Teil 3 – Gegenprobe formulieren

Eine brauchbare Gegenprobe nennt einen konkreten Prüfpunkt:

1. erwarteten Zustand notieren,
2. Messpunkt oder Beobachtung festlegen,
3. Ergebnis mit der Hypothese vergleichen,
4. nur eine Einflussgröße gleichzeitig ändern.

Damit wird aus einer Vermutung eine prüfbare Aussage.

### Teil 4 – Merksatz

Ein möglicher Merksatz lautet:

> Energieverbrauch ist eine Systemeigenschaft.

Dieser Merksatz ist gut, weil er das Thema nicht nur als einzelnes Bauteil oder Einzelproblem beschreibt, sondern als überprüfbaren technischen Zusammenhang.
