---
title: "Graceful Degradation"
description: "Graceful Degradation beschreibt, dass ein System bei Teilproblemen eingeschränkt, aber kontrolliert weiterarbeitet."
subject: "informatik"
section: "Robustheit"
topicPath: ["graceful-degradation", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Robustheit"]
draft: false
---
# Graceful Degradation

Graceful Degradation beschreibt, dass ein System bei Teilproblemen eingeschränkt, aber
kontrolliert weiterarbeitet. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Robustheit zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Nicht kritische Funktionen können ausfallen, während Kernfunktionen bleiben.
- Fallbacks müssen vorher definiert werden.
- Monitoring sollte degradierte Zustände sichtbar machen.
- Nutzerkommunikation ist Teil der Robustheit.

## Beispiel im Zusammenhang

Ein Shop zeigt Produkte weiter an, auch wenn Empfehlungen vorübergehend nicht geladen werden
können.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Graceful Degradation ist nicht dasselbe wie Fehler ignorieren. Einschränkungen müssen
kontrolliert und beobachtbar sein.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden Fallbacks erst nach einem Ausfall improvisiert.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Graceful Degradation ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
