---
title: "Lösung – Watchdog als Sicherheitsnetz begründen"
description: "Musterlösung zur Aufgabe Watchdog als Sicherheitsnetz begründen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "reset-watchdog-und-brownout", "watchdog-als-sicherheitsnetz-begruenden"]
taskId: "ET-V181-012"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/reset-watchdog-und-brownout/watchdog-als-sicherheitsnetz-begruenden.md"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Musterlösung

### Teil 1 – Begriffe ordnen

Eine sinnvolle Ordnung ist:

- **Ursache oder Eingang:** der Zustand, das Signal oder die Versorgung, von der die Betrachtung ausgeht.
- **Wirkung oder Ausgang:** das Verhalten, das dadurch in der Schaltung sichtbar wird.
- **Grenze oder Schutzbedingung:** ein Wert oder Zustand, der nicht beliebig überschritten werden darf.
- **Typische Fehlerquelle:** eine Annahme, die ohne Prüfung leicht falsch sein kann.

Bei **Reset, Watchdog und Brown-out** ist wichtig, dass diese Rollen nicht vermischt werden. Ein Bauteilname allein erklärt noch nicht, welche Aufgabe das Bauteil im konkreten Zusammenhang erfüllt.

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

> Reset schafft einen definierten Start.

Damit ist die Aufgabe erfüllt, wenn der Zusammenhang ruhig erklärt und nicht nur ein einzelnes Schlagwort genannt wurde.
