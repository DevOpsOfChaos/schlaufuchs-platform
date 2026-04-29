---
title: "Datenstruktur"
description: "Allgemeiner Überblick über Datenstrukturen als organisierte Formen zur Speicherung und Nutzung von Daten."
subject: "informatik"
section: "Grundlagen"
topicPath: ["datenstruktur", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Grundlagen"]
draft: false
---
# Datenstruktur

![Schaubild zu typischen Datenstrukturen.](/schlaufuchs-platform/images/overviews/v148/datenstruktur.svg)

*Das Schaubild ordnet typische Datenstrukturen nach Grundidee ein.*


Eine Datenstruktur beschreibt, wie Daten organisiert werden. Sie legt fest, wie Werte gespeichert, gefunden, eingefügt, entfernt oder miteinander verknüpft werden. Die Wahl einer Datenstruktur beeinflusst, wie einfach ein Programm geschrieben werden kann und wie effizient es arbeitet.

Datenstrukturen sind nicht nur technische Details. Sie bilden oft fachliche Zusammenhänge ab: eine Liste von Aufgaben, eine Menge eindeutiger Rollen, eine Zuordnung von Nutzern zu Profilen oder eine Warteschlange von Anfragen.

## Zweck

Programme verarbeiten Daten. Ohne geeignete Struktur werden diese Daten unübersichtlich oder langsam zugänglich. Eine passende Datenstruktur macht typische Operationen einfach: das nächste Element nehmen, einen Schlüssel nachschlagen, doppelte Werte vermeiden oder eine Reihenfolge erhalten.

## Beispiele

Arrays und Listen speichern mehrere Elemente in einer Reihenfolge. Sets speichern eindeutige Werte. Maps ordnen Schlüsseln Werte zu. Queues arbeiten nach dem Prinzip zuerst hinein, zuerst heraus. Stacks arbeiten nach dem Prinzip zuletzt hinein, zuerst heraus. Bäume bilden hierarchische Beziehungen ab.

## Auswahlkriterien

Die passende Struktur hängt von Fragen ab: Muss die Reihenfolge erhalten bleiben? Werden Elemente oft gesucht? Sind doppelte Werte erlaubt? Wird häufig am Anfang, am Ende oder in der Mitte eingefügt? Muss über Schlüssel direkt zugegriffen werden?

## Abgrenzung zum Algorithmus

Algorithmus und Datenstruktur gehören zusammen, sind aber nicht dasselbe. Der Algorithmus beschreibt die Schritte. Die Datenstruktur beschreibt die Organisation der Daten, auf denen diese Schritte arbeiten. Ein guter Algorithmus kann durch eine unpassende Datenstruktur langsam oder kompliziert werden.

## Häufige Missverständnisse

Ein häufiger Fehler ist, immer dieselbe Struktur zu verwenden, etwa eine Liste für alles. Das funktioniert anfangs, führt aber bei Suche, Eindeutigkeit oder Zuordnung schnell zu zusätzlichem Aufwand. Ein anderer Fehler ist, die fachliche Bedeutung direkt mit der Speicherform gleichzusetzen.

## Kurz zusammengefasst

Datenstrukturen geben Daten eine nutzbare Form. Sie bestimmen, welche Operationen einfach, schnell und verständlich sind. Gute Programme wählen Datenstrukturen passend zum Problem, nicht nur passend zur Gewohnheit.
