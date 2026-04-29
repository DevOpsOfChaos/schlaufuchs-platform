---
title: "jq und JSON auf der Shell"
description: "jq ist ein Werkzeug zum Lesen, Filtern und Umformen von JSON-Daten auf der Kommandozeile."
subject: "linux"
section: "Textwerkzeuge"
topicPath: ["jq-und-json-auf-der-shell", "ueberblick"]
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
# jq und JSON auf der Shell

jq ist ein Werkzeug zum Lesen, Filtern und Umformen von JSON-Daten auf der Kommandozeile. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Textwerkzeuge zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- JSON sollte nicht mit einfachen Textspalten verwechselt werden.
- jq kann Felder auswählen, Arrays durchlaufen und Daten neu strukturieren.
- Quoting zwischen Shell und jq-Ausdruck braucht Aufmerksamkeit.
- APIs, Logs und Konfigurationsdateien liefern häufig JSON.

## Beispiel im Zusammenhang

Eine API-Antwort enthält viele Objekte. jq extrahiert nur Namen, Status und IDs.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

jq ist kein Ersatz für vollständige Programmlogik, aber sehr stark für kleine, überprüfbare
Datenoperationen.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig wird JSON mit grep und cut bearbeitet, wodurch verschachtelte oder maskierte Werte falsch
behandelt werden.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

jq und JSON auf der Shell ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
