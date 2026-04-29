---
title: "Nebenläufigkeit und Parallelität"
description: "Allgemeiner Überblick über gleichzeitige Abläufe, Parallelität und typische Denkfehler."
subject: "informatik"
section: "Systeme"
topicPath: ["nebenlaeufigkeit-und-parallelitaet", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Systeme"]
draft: false
---
# Nebenläufigkeit und Parallelität

Nebenläufigkeit beschreibt, dass mehrere Abläufe in überlappender Zeit organisiert werden. Parallelität bedeutet, dass mehrere Abläufe tatsächlich gleichzeitig auf mehreren Recheneinheiten laufen.

## Bedeutung

Diese Unterscheidung ist wichtig, weil Programme gleichzeitig reagieren können, ohne zwingend echte parallele Ausführung zu besitzen. Gleichzeitig entstehen neue Fehlerklassen, wenn Zustände gemeinsam genutzt werden.

## Typische Teilaspekte

- **Nebenläufigkeit:** Abläufe werden so strukturiert, dass sie sich zeitlich überlappen können.
- **Parallelität:** Abläufe laufen tatsächlich gleichzeitig auf mehreren Kernen oder Geräten.
- **Gemeinsamer Zustand:** Geteilte Daten können Race Conditions erzeugen.
- **Synchronisation:** Locks, Queues oder Nachrichten koordinieren Zugriffe.

## Beispiel

Ein Webserver bearbeitet viele Anfragen nebenläufig. Ob Teile davon parallel laufen, hängt von Laufzeitmodell und Hardware ab.

## Abgrenzung

Nebenläufigkeit ist nicht automatisch schneller. Koordination, Kontextwechsel und Sperren können Aufwand erzeugen.

## Häufige Missverständnisse

Häufig werden sporadische Fehler nicht als Nebenläufigkeitsproblem erkannt, weil sie nur bei bestimmten Zeitabläufen auftreten.

## Einordnung im Gesamtzusammenhang

Nebenläufigkeit verbindet Betriebssysteme, Server, Benutzeroberflächen, Datenbanken und verteilte Systeme.
