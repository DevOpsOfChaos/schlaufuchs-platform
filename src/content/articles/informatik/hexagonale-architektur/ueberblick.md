---
title: "Hexagonale Architektur"
description: "Hexagonale Architektur trennt fachliche Kernlogik von technischen Außenanschlüssen wie Datenbanken, APIs oder Benutzeroberflächen."
subject: informatik
section: "Softwarearchitektur"
topicPath:
  - "hexagonale-architektur"
  - "ueberblick"
learningGoals:
  - "Du kannst Hexagonale Architektur als allgemeinen Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte, typische Beispiele und wichtige Abgrenzungen."
  - "Du erkennst häufige Missverständnisse, bevor Spezialfälle oder Aufgaben folgen."
practiceIdeas: []
commonMistakes:
  - "Häufig werden Adapter und Kern nur anders benannt, ohne technische Abhängigkeiten wirklich zu trennen."
keyTakeaways:
  - "Hexagonale Architektur trennt fachliche Kernlogik von technischen Außenanschlüssen wie Datenbanken, APIs oder Benutzeroberflächen."
  - "Ein guter Überblick trennt Begriff, Zweck, Einsatzgrenzen und typische Fehlerbilder."
  - "Spezialfälle werden verständlicher, wenn das allgemeine Konzept vorher klar ist."
recognizeSignals:
  - "Es geht um Hexagonale Architektur, wenn Begriffe, Entscheidungen oder Fehlerbilder dieses Themas die Erklärung bestimmen."
  - "Viele Einzelfälle wirken unübersichtlich, solange der Grundbegriff fehlt."
selfCheckPoints:
  - "Kann ich Hexagonale Architektur in eigenen Worten erklären?"
  - "Kann ich ein Beispiel, eine Grenze und ein typisches Missverständnis nennen?"
level: einfach
tags:
  - "informatik"
  - "architektur"
  - "ports"
draft: false
---

# Hexagonale Architektur

Hexagonale Architektur trennt fachliche Kernlogik von technischen Außenanschlüssen wie
Datenbanken, APIs oder Benutzeroberflächen. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Softwarearchitektur zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Der Kern definiert Ports, Adapter bedienen technische Details.
- Abhängigkeiten zeigen nach innen zur Fachlogik.
- Tests können Kernlogik ohne echte Infrastruktur prüfen.
- Die Architektur hilft besonders bei wechselnden Schnittstellen.

## Beispiel im Zusammenhang

Eine Bestelllogik kennt ein Repository-Interface, aber nicht die konkrete SQL-Datenbank.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Hexagonale Architektur ist kein Ordnernamen-Schema. Entscheidend ist die Richtung der
Abhängigkeiten.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden Adapter und Kern nur anders benannt, ohne technische Abhängigkeiten wirklich zu
trennen.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Hexagonale Architektur ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
