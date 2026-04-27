---
title: "SOLID-Prinzipien"
description: "SOLID-Prinzipien sind Entwurfsregeln für objektorientierte Software, die Verständlichkeit, Erweiterbarkeit und Austauschbarkeit fördern sollen."
subject: informatik
section: "Softwareentwurf"
topicPath:
  - "solid-prinzipien"
  - "ueberblick"
learningGoals:
  - "Du kannst SOLID-Prinzipien als allgemeinen Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte, typische Beispiele und wichtige Abgrenzungen."
  - "Du erkennst häufige Missverständnisse, bevor Spezialfälle oder Aufgaben folgen."
practiceIdeas: []
commonMistakes:
  - "Häufig werden Prinzipien dogmatisch angewendet, wodurch unnötige Abstraktionen entstehen."
keyTakeaways:
  - "SOLID-Prinzipien sind Entwurfsregeln für objektorientierte Software, die Verständlichkeit, Erweiterbarkeit und Austauschbarkeit fördern sollen."
  - "Ein guter Überblick trennt Begriff, Zweck, Einsatzgrenzen und typische Fehlerbilder."
  - "Spezialfälle werden verständlicher, wenn das allgemeine Konzept vorher klar ist."
recognizeSignals:
  - "Es geht um SOLID-Prinzipien, wenn Begriffe, Entscheidungen oder Fehlerbilder dieses Themas die Erklärung bestimmen."
  - "Viele Einzelfälle wirken unübersichtlich, solange der Grundbegriff fehlt."
selfCheckPoints:
  - "Kann ich SOLID-Prinzipien in eigenen Worten erklären?"
  - "Kann ich ein Beispiel, eine Grenze und ein typisches Missverständnis nennen?"
level: einfach
tags:
  - "informatik"
  - "softwaredesign"
  - "wartbarkeit"
draft: false
---

# SOLID-Prinzipien

SOLID-Prinzipien sind Entwurfsregeln für objektorientierte Software, die Verständlichkeit,
Erweiterbarkeit und Austauschbarkeit fördern sollen. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Softwareentwurf zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Single Responsibility trennt Verantwortlichkeiten.
- Open/Closed fordert Erweiterbarkeit ohne ständiges Ändern bestehender Teile.
- Liskov, Interface Segregation und Dependency Inversion betreffen Austauschbarkeit und Abhängigkeiten.
- Prinzipien sind Orientierung, keine mechanische Checkliste.

## Beispiel im Zusammenhang

Eine Klasse liest Dateien, validiert Daten und schreibt Berichte. Eine SOLID-nahe Betrachtung
trennt diese Verantwortlichkeiten.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

SOLID garantiert keine gute Architektur und ersetzt keine fachliche Modellierung.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden Prinzipien dogmatisch angewendet, wodurch unnötige Abstraktionen entstehen.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

SOLID-Prinzipien ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
