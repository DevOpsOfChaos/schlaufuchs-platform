---
title: "Hashing"
description: "Einordnung von Hashing als Verfahren zur schnellen Zuordnung und Wiedererkennung von Daten."
subject: "informatik"
section: "Datenstrukturen"
topicPath: ["hashing", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Datenstrukturen"]
draft: false
---
# Hashing

## Begriff und Zweck

Hashing bildet Daten auf einen meist kürzeren Wert ab, den Hash. In Datenstrukturen wie Hash-Tabellen dient dieser Wert dazu, Speicherplätze schnell zu finden. In anderen Kontexten helfen Hashes, Daten wiederzuerkennen oder Integrität zu prüfen. Der Grundgedanke ist eine berechenbare Kurzrepräsentation.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Hashfunktion
- Kollisionen
- Hash-Tabellen
- kryptografische und nicht-kryptografische Hashes

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Eine Map kann Schlüssel über Hashing schnell Werten zuordnen. Eine Prüfsumme kann anzeigen, ob eine Datei wahrscheinlich unverändert ist. Passwörter werden nicht im Klartext gespeichert, sondern mit speziellen Verfahren gehasht, wobei Salt und geeignete Algorithmen wichtig sind.

## Abgrenzung

Nicht jeder Hash ist für Sicherheit geeignet. Hashes für Datenstrukturen sollen schnell und gleichmäßig verteilen. Kryptografische Hashes müssen zusätzliche Eigenschaften erfüllen. Für Passwörter braucht man spezielle langsame Verfahren, nicht nur einen allgemeinen Hash.

## Häufige Missverständnisse

Ein häufiger Fehler ist, Hashing mit Verschlüsselung zu verwechseln. Hashes sind normalerweise nicht zum Zurückrechnen gedacht. Ein weiterer Fehler ist, Kollisionen zu ignorieren: Verschiedene Eingaben können denselben Hashwert erzeugen.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
