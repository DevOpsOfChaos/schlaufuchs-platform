---
title: "Kopplung und Kohäsion"
description: "Kopplung beschreibt, wie stark Module voneinander abhängen. Kohäsion beschreibt, wie gut die Elemente eines Moduls fachlich zusammengehören."
subject: "informatik"
section: "Softwareentwurf"
topicPath: ["kopplung-und-kohaesion", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Softwareentwurf"]
draft: false
---
# Kopplung und Kohäsion

Kopplung beschreibt, wie stark Module voneinander abhängen. Kohäsion beschreibt, wie gut die
Elemente eines Moduls fachlich zusammengehören. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Softwareentwurf zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Geringe Kopplung erleichtert Austausch und Tests.
- Hohe Kohäsion macht Verantwortlichkeiten klarer.
- Zu starke Entkopplung kann unnötige Umwege erzeugen.
- Schnittstellen, Datenmodelle und Seiteneffekte beeinflussen beide Größen.

## Beispiel im Zusammenhang

Ein Modul für Rechnungslogik sollte nicht direkt UI-Elemente oder Datenbankdetails kennen
müssen.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Kopplung und Kohäsion sind Bewertungsbegriffe, keine einzelnen Programmiersprachenfunktionen.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Oft wird jede Abhängigkeit als schlecht betrachtet. Manche Abhängigkeiten sind sinnvoll, wenn
sie bewusst und stabil sind.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Kopplung und Kohäsion ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
