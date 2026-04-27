---
title: "Algorithmus"
description: "Allgemeiner Überblick über Algorithmen als endliche, eindeutige Verfahren zur Lösung von Problemen."
subject: informatik
section: "Grundlagen"
topicPath:
  - "algorithmus"
  - "ueberblick"
learningGoals:
  - "Du kennst einen Algorithmus als eindeutige Schrittfolge."
  - "Du kannst Eingabe, Verarbeitung und Ausgabe unterscheiden."
  - "Du verstehst, warum Korrektheit und Abbruch wichtig sind."
practiceIdeas: []
commonMistakes:
  - "Jede Idee schon als Algorithmus zu behandeln."
  - "Den Abbruchfall nicht festzulegen."
keyTakeaways:
  - "Ein Algorithmus beschreibt ein lösbares Verfahren in klaren Schritten."
  - "Wichtige Eigenschaften sind Eindeutigkeit, Endlichkeit, Korrektheit und passende Eingaben."
recognizeSignals:
  - "Es geht um Schrittfolgen, Sortieren, Suchen, Bedingungen, Wiederholungen oder Effizienz."
selfCheckPoints:
  - "Kann ich für ein Verfahren Eingabe, Ausgabe und Abbruchbedingung nennen?"
level: einfach
tags:
  - "informatik"
  - "algorithmus"
  - "grundlagen"
draft: false
---

# Algorithmus

![Schaubild zu einem Algorithmus als Schrittfolge.](/schlaufuchs-platform/images/overviews/v148/algorithmus.svg)

*Das Schaubild zeigt den Weg von Eingabe über Verarbeitung zur Ausgabe.*


Ein Algorithmus ist ein genau beschriebenes Verfahren zur Lösung einer Aufgabe. Er besteht aus einzelnen Schritten, die in einer bestimmten Reihenfolge ausgeführt werden. Zu einem Algorithmus gehören Eingaben, Verarbeitungsschritte, eine Ausgabe und eine Bedingung, unter der das Verfahren endet.

Algorithmen müssen nicht zwangsläufig als Programm vorliegen. Auch ein Kochrezept, eine Rechenvorschrift oder eine Sortieranleitung kann algorithmische Eigenschaften haben. In der Informatik werden Algorithmen jedoch besonders genau betrachtet, weil Computer nur eindeutige Anweisungen zuverlässig ausführen können.

## Eigenschaften

Ein Algorithmus sollte eindeutig sein. Jeder Schritt muss so beschrieben sein, dass klar ist, was zu tun ist. Er sollte endlich sein, also nach einer begrenzten Zahl von Schritten enden. Er sollte korrekt sein, also für die vorgesehenen Eingaben das richtige Ergebnis liefern. Außerdem sollte klar sein, für welche Eingaben er gedacht ist.

## Aufbau

Viele Algorithmen bestehen aus Sequenzen, Verzweigungen und Wiederholungen. Sequenzen führen Schritte nacheinander aus. Verzweigungen treffen Entscheidungen. Wiederholungen bearbeiten mehrere Fälle oder laufen, bis eine Bedingung erfüllt ist.

## Beispiele

Ein Suchalgorithmus prüft Elemente, bis ein gesuchter Wert gefunden wird oder klar ist, dass er nicht vorhanden ist. Ein Sortieralgorithmus bringt Werte in eine Reihenfolge. Ein Algorithmus zur größten gemeinsamen Teilung wiederholt Rechenschritte, bis ein Rest verschwindet.

## Abgrenzung

Eine grobe Idee ist noch kein Algorithmus. „Sortiere die Liste“ beschreibt ein Ziel, aber noch kein Verfahren. Erst wenn festgelegt ist, wie verglichen, getauscht, wiederholt und beendet wird, entsteht ein Algorithmus.

## Häufige Missverständnisse

Ein häufiger Fehler ist, nur den Normalfall zu beschreiben. Leere Eingaben, doppelte Werte, ungültige Daten oder bereits sortierte Listen gehören ebenfalls zur Betrachtung. Ein anderer Fehler ist eine Schleife ohne sichere Abbruchbedingung.

## Kurz zusammengefasst

Algorithmen sind präzise Lösungsverfahren. Sie machen Probleme ausführbar, prüfbar und vergleichbar. Ihre Qualität hängt nicht nur vom Ergebnis ab, sondern auch von Klarheit, Korrektheit, Abbruch und Effizienz.
