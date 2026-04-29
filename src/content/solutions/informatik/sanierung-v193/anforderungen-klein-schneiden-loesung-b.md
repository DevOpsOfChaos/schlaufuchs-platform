---
title: "Lösung: Anforderungen klein schneiden: Aufgabe B"
description: "Musterlösung zur Aufgabe informatik-v193-002b im Informatikblock v193."
subject: "informatik"
section: "softwarequalitaet-und-datenpraxis"
topicPath:
  - "softwarequalitaet-und-datenpraxis"
  - "qualitaet-und-wartbarkeit"
  - "anforderungen-klein-schneiden"
  - "loesung-b"
taskId: "informatik-v193-002b"
relatedExercise: "informatik/sanierung-v193/anforderungen-klein-schneiden-aufgabe-b"
tags:
  - "anforderungen"
  - "klein"
  - "schneiden"
  - "informatik"
  - "softwarequalitaet"
  - "loesung"
  - "v193"
draft: false
---

## Musterlösung zu `informatik-v193-002b`

Ausgangsauftrag: Übertrage das Thema Anforderungen klein schneiden auf ein zweites Beispiel und prüfe, wo ein Fehlerfall entstehen kann.

Eine mögliche Lösung ist:

1. **Ausgangslage:** Der betrachtete Code oder Ablauf wird auf einen kleinen Ausschnitt begrenzt. Es wird benannt, welche Eingabe, Datenstruktur oder Schnittstelle beteiligt ist.
2. **Erwartung:** Korrektes Verhalten wird beobachtbar formuliert, zum Beispiel als Rückgabewert, sichtbare Ausgabe, gespeicherter Zustand oder ausgelöster Fehlerfall.
3. **Prüfung:** Ein kleiner Test oder ein Minimalbeispiel deckt genau diese Erwartung ab. Der Test enthält normale Eingaben und mindestens einen Randfall.
4. **Bewertung:** Die Entscheidung bleibt klein: entweder wird die Annahme bestätigt, die Fehlerhypothese verworfen oder ein gezielter Fix vorbereitet.

## Beispielhafte Antwort

Für **Anforderungen klein schneiden** würde ich zuerst nicht den ganzen Code umbauen. Ich würde ein kleines Beispiel wählen, das die wichtigste Annahme sichtbar macht. Danach prüfe ich, ob die gewählte Struktur und der Test wirklich zum erwarteten Verhalten passen.

## Kontrollpunkte

- Erwartung und Beobachtung sind getrennt.
- Die Prüfung ist kleiner als die spätere Änderung.
- Der Fehlerfall wird nicht verschwiegen.
- Die Lösung kann später als Regressionstest oder Dokumentationsnotiz dienen.

## Kurzfazit

Die Lösung ist tragfähig, wenn sie Verhalten, Daten und Kontrolle nachvollziehbar verbindet.
