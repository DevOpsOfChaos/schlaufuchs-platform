---
title: "Unit of Work"
description: "Unit of Work bündelt mehrere Änderungen zu einer zusammenhängenden Arbeitseinheit, die gemeinsam bestätigt oder verworfen wird."
subject: "informatik"
section: "Daten und Architektur"
topicPath: ["unit-of-work", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Daten und Architektur"]
draft: false
---
# Unit of Work

Unit of Work bündelt mehrere Änderungen zu einer zusammenhängenden Arbeitseinheit, die gemeinsam
bestätigt oder verworfen wird. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Daten und Architektur zu den Begriffen, die viele spätere
Spezialfälle verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen
Zusammenhang: Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen
spielen hinein und wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Änderungen werden gesammelt und koordiniert gespeichert.
- Transaktionen und Konsistenzgrenzen hängen eng damit zusammen.
- Fehlerbehandlung muss entscheiden, was zurückgerollt wird.
- Das Muster ist besonders bei mehreren Repositories oder Aggregaten relevant.

## Beispiel im Zusammenhang

Eine Bestellung wird angelegt, Lagerbestand reduziert und ein Zahlungseintrag erzeugt. Diese
Änderungen sollen gemeinsam konsistent bleiben.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Unit of Work ist nicht dasselbe wie ein einzelner Datenbankbefehl, sondern ein
Koordinationskonzept.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden zusammengehörige Änderungen verteilt gespeichert, wodurch halbfertige Zustände
entstehen.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Unit of Work ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
