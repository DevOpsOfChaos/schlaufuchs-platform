---
title: "Exit-Codes"
description: "Einordnung von Exit-Codes als Rückmeldungen von Programmen in Shell und Skripten."
subject: "linux"
section: "Shell"
topicPath: ["exit-codes", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
# Exit-Codes

![Schaubild zu Exit-Codes.](/schlaufuchs-platform/images/overviews/v149/exit-codes.svg)

*Das Schaubild zeigt Erfolg oder Fehler als Rückmeldung eines Programms.*


## Begriff und Zweck

Ein Exit-Code ist die numerische Rückmeldung eines Programms nach seiner Ausführung. In Unix- und Linux-Umgebungen bedeutet `0` normalerweise Erfolg, andere Werte stehen für Fehler oder besondere Zustände. Shells und Skripte nutzen diese Rückmeldung, um weitere Schritte zu entscheiden.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- 0 als Erfolg
- Nicht-Null als Fehler oder Sonderfall
- $? als letzter Exit-Code
- Verkettung mit && und ||

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

`mkdir build && npm run build` führt den Build nur aus, wenn das Verzeichnis erfolgreich erstellt wurde. `grep` kann unterschiedliche Exit-Codes liefern, je nachdem ob Treffer gefunden wurden oder ein echter Fehler auftrat. In CI-Systemen entscheidet der Exit-Code häufig über grünen oder roten Status.

## Abgrenzung

Exit-Codes transportieren keine ausführliche Fehlermeldung. Sie müssen mit Ausgabe auf Standardausgabe oder Standardfehler kombiniert gelesen werden. Außerdem definieren Programme ihre Codes teilweise unterschiedlich.

## Häufige Missverständnisse

Ein häufiger Fehler ist, nur Textausgaben zu betrachten und den Exit-Code zu ignorieren. In Skripten führt das dazu, dass nach fehlgeschlagenen Schritten trotzdem weitergearbeitet wird. Robuste Skripte prüfen Rückgabewerte bewusst.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
