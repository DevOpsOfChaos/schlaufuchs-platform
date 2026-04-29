---
title: "Rekursion"
description: "Allgemeiner Überblick über Rekursion als Methode, Probleme über kleinere Teilprobleme zu beschreiben."
subject: "informatik"
section: "Algorithmen"
topicPath: ["rekursion", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Algorithmen"]
draft: false
---
# Rekursion

## Begriff und Zweck

Rekursion bedeutet, dass eine Funktion oder Definition auf sich selbst zurückgreift. Das ist sinnvoll, wenn ein Problem natürlich aus ähnlichen kleineren Problemen besteht. Entscheidend ist, dass es einen Abbruchfall gibt und jeder rekursive Schritt dem Abbruch näherkommt.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Abbruchfall
- rekursiver Schritt
- Aufrufstapel
- Teilproblem und Rückgabe

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Fakultät, Baumdurchläufe, Ordnerstrukturen oder Teile von Sortierverfahren lassen sich rekursiv beschreiben. Bei einem Verzeichnisbaum kann dieselbe Logik für jeden Unterordner gelten: Inhalt prüfen und für Unterordner erneut anwenden.

## Abgrenzung

Rekursion ist kein Selbstzweck. Viele Probleme lassen sich auch iterativ lösen. Rekursion kann eleganter sein, aber durch tiefe Aufrufe Speicher belasten oder schwerer zu verfolgen sein.

## Häufige Missverständnisse

Häufig fehlt der klare Abbruchfall oder der rekursive Schritt verändert das Problem nicht ausreichend. Dann entsteht eine Endlosrekursion. Ein weiterer Fehler ist, jeden Schleifenfall künstlich rekursiv zu formulieren, obwohl eine Schleife einfacher wäre.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
