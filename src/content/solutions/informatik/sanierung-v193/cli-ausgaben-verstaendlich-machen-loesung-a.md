---
title: "Lösung: CLI-Ausgaben verständlich machen: Aufgabe A"
description: "Musterlösung zur Aufgabe informatik-v193-026a im Informatikblock v193."
subject: "informatik"
section: "softwarequalitaet-und-datenpraxis"
topicPath:
  - "softwarequalitaet-und-datenpraxis"
  - "projektstruktur-und-codepflege"
  - "cli-ausgaben-verstaendlich-machen"
  - "loesung-a"
taskId: "informatik-v193-026a"
relatedExercise: "informatik/sanierung-v193/cli-ausgaben-verstaendlich-machen-aufgabe-a"
tags:
  - "cli"
  - "ausgaben"
  - "verstaendlich"
  - "machen"
  - "informatik"
  - "softwarequalitaet"
  - "loesung"
  - "v193"
draft: false
---

## Musterlösung zu `informatik-v193-026a`

Ausgangsauftrag: Verbessere eine unklare CLI-Ausgabe für einen fehlgeschlagenen Scan.

Eine mögliche Lösung ist:

1. **Ausgangslage:** Der betrachtete Code oder Ablauf wird auf einen kleinen Ausschnitt begrenzt. Es wird benannt, welche Eingabe, Datenstruktur oder Schnittstelle beteiligt ist.
2. **Erwartung:** Korrektes Verhalten wird beobachtbar formuliert, zum Beispiel als Rückgabewert, sichtbare Ausgabe, gespeicherter Zustand oder ausgelöster Fehlerfall.
3. **Prüfung:** Ein kleiner Test oder ein Minimalbeispiel deckt genau diese Erwartung ab. Der Test enthält normale Eingaben und mindestens einen Randfall.
4. **Bewertung:** Die Entscheidung bleibt klein: entweder wird die Annahme bestätigt, die Fehlerhypothese verworfen oder ein gezielter Fix vorbereitet.

## Beispielhafte Antwort

Für **CLI-Ausgaben verständlich machen** würde ich zuerst nicht den ganzen Code umbauen. Ich würde ein kleines Beispiel wählen, das die wichtigste Annahme sichtbar macht. Danach prüfe ich, ob die gewählte Struktur und der Test wirklich zum erwarteten Verhalten passen.

## Kontrollpunkte

- Erwartung und Beobachtung sind getrennt.
- Die Prüfung ist kleiner als die spätere Änderung.
- Der Fehlerfall wird nicht verschwiegen.
- Die Lösung kann später als Regressionstest oder Dokumentationsnotiz dienen.

## Kurzfazit

Die Lösung ist tragfähig, wenn sie Verhalten, Daten und Kontrolle nachvollziehbar verbindet.
