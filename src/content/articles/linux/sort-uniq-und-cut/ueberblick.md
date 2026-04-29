---
title: "sort, uniq und cut"
description: "sort, uniq und cut sind klassische Textwerkzeuge, um Zeilen zu ordnen, Duplikate zusammenzufassen und Spalten oder Zeichenbereiche auszuschneiden."
subject: "linux"
section: "Textwerkzeuge"
topicPath: ["sort-uniq-und-cut", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Textwerkzeuge"]
draft: false
---
# sort, uniq und cut

sort, uniq und cut sind klassische Textwerkzeuge, um Zeilen zu ordnen, Duplikate
zusammenzufassen und Spalten oder Zeichenbereiche auszuschneiden. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Textwerkzeuge zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- sort bringt gleiche Zeilen in Nachbarschaft und ermöglicht Auswertung.
- uniq erkennt nur benachbarte Duplikate zuverlässig.
- cut trennt einfache Felder, ist aber kein vollwertiger CSV-Parser.
- Pipelines kombinieren kleine Werkzeuge zu lesbaren Analysen.

## Beispiel im Zusammenhang

Eine Logdatei enthält viele Statuscodes. cut extrahiert die Spalte, sort ordnet sie, uniq -c
zählt Häufigkeiten.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Diese Werkzeuge arbeiten zeilenorientiert. Für verschachtelte Daten wie JSON sind spezialisierte
Werkzeuge sinnvoller.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Oft wird uniq ohne vorheriges sort genutzt und dadurch nur ein Teil der Duplikate erkannt.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

sort, uniq und cut ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
