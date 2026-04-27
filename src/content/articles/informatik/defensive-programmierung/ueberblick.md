---
title: "Defensive Programmierung"
description: "Defensive Programmierung gestaltet Code so, dass unerwartete Eingaben, Zustände oder Fehler kontrolliert behandelt werden."
subject: informatik
section: "Programmierung"
topicPath:
  - "defensive-programmierung"
  - "ueberblick"
learningGoals:
  - "Du kannst Defensive Programmierung als allgemeinen Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte, typische Beispiele und wichtige Abgrenzungen."
  - "Du erkennst häufige Missverständnisse, bevor Spezialfälle oder Aufgaben folgen."
practiceIdeas: []
commonMistakes:
  - "Häufig werden Fehler still verschluckt. Das wirkt robust, macht Ursachen aber unsichtbar."
keyTakeaways:
  - "Defensive Programmierung gestaltet Code so, dass unerwartete Eingaben, Zustände oder Fehler kontrolliert behandelt werden."
  - "Ein guter Überblick trennt Begriff, Zweck, Einsatzgrenzen und typische Fehlerbilder."
  - "Spezialfälle werden verständlicher, wenn das allgemeine Konzept vorher klar ist."
recognizeSignals:
  - "Es geht um Defensive Programmierung, wenn Begriffe, Entscheidungen oder Fehlerbilder dieses Themas die Erklärung bestimmen."
  - "Viele Einzelfälle wirken unübersichtlich, solange der Grundbegriff fehlt."
selfCheckPoints:
  - "Kann ich Defensive Programmierung in eigenen Worten erklären?"
  - "Kann ich ein Beispiel, eine Grenze und ein typisches Missverständnis nennen?"
level: einfach
tags:
  - "informatik"
  - "fehlerbehandlung"
  - "robustheit"
draft: false
---

# Defensive Programmierung

Defensive Programmierung gestaltet Code so, dass unerwartete Eingaben, Zustände oder Fehler
kontrolliert behandelt werden. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Programmierung zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Vorbedingungen und Grenzen werden explizit geprüft.
- Fehlermeldungen sollen Diagnose ermöglichen.
- Nicht vertrauenswürdige Daten werden nie ungeprüft verarbeitet.
- Zu viel Defensive kann Code aber auch verdecken und verkomplizieren.

## Beispiel im Zusammenhang

Eine Funktion prüft, ob eine Liste leer ist, bevor sie auf das erste Element zugreift.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Defensive Programmierung ersetzt keine sauberen Schnittstellen und keine Tests.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden Fehler still verschluckt. Das wirkt robust, macht Ursachen aber unsichtbar.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Defensive Programmierung ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
