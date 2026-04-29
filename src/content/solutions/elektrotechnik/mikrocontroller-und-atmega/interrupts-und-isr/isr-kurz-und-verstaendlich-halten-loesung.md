---
title: "Lösung – ISR kurz und verständlich halten"
description: "Musterlösung zur Aufgabe ISR kurz und verständlich halten."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-isr
taskId: ET-V181-017
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/interrupts-und-isr/isr-kurz-und-verstaendlich-halten.md
tags:
  - elektrotechnik
  - interrupts-und-isr
  - loesung
draft: false
---

## Musterlösung

### Teil 1 – Begriffe ordnen

Eine sinnvolle Ordnung ist:

- **Ursache oder Eingang:** der Zustand, das Signal oder die Versorgung, von der die Betrachtung ausgeht.
- **Wirkung oder Ausgang:** das Verhalten, das dadurch in der Schaltung sichtbar wird.
- **Grenze oder Schutzbedingung:** ein Wert oder Zustand, der nicht beliebig überschritten werden darf.
- **Typische Fehlerquelle:** eine Annahme, die ohne Prüfung leicht falsch sein kann.

Bei **Interrupts und ISR** ist wichtig, dass diese Rollen nicht vermischt werden. Ein Bauteilname allein erklärt noch nicht, welche Aufgabe das Bauteil im konkreten Zusammenhang erfüllt.

### Teil 2 – Situation prüfen

Der erwartete Normalfall wird zuerst beschrieben. Danach wird geprüft, was passieren kann, wenn eine Grenze, ein Bezugspunkt, ein Zeitverhalten oder eine elektrische Voraussetzung nicht stimmt.

Eine gute Antwort nennt nicht nur „das funktioniert“ oder „das funktioniert nicht“, sondern beschreibt den Zusammenhang:

- welcher Zustand erwartet wird,
- welche Abweichung auftreten kann,
- warum diese Abweichung technisch relevant ist.

### Teil 3 – Gegenprobe

Eine passende Gegenprobe ist eine einfache, nachvollziehbare Prüfung. Je nach Situation kann das sein:

- eine Spannungsmessung gegen den richtigen Bezugspunkt,
- ein Vergleich von Normalfall und Fehlerfall,
- eine Kontrolle von Strompfad oder Versorgung,
- eine Beobachtung des zeitlichen Verhaltens.

Die Gegenprobe sollte zur Fragestellung passen. Es reicht nicht, irgendeinen Wert zu messen, wenn dadurch die eigentliche Annahme nicht geprüft wird.

### Teil 4 – Merksatz

Ein möglicher Merksatz lautet:

> Interrupts reagieren auf Ereignisse.

Damit ist die Aufgabe erfüllt, wenn der Zusammenhang ruhig erklärt und nicht nur ein einzelnes Schlagwort genannt wurde.
