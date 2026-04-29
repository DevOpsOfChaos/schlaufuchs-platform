---
title: "Bash und POSIX sh"
description: "Bash und POSIX sh sind verwandte, aber nicht identische Shell-Umgebungen. Viele Skripte laufen in Bash, obwohl sie im Shebang nur sh versprechen."
subject: "linux"
section: "Shell"
topicPath: ["bash-und-posix-sh", "ueberblick"]
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
# Bash und POSIX sh

![Schaubild zu Bash und POSIX sh.](/schlaufuchs-platform/images/overviews/v150/bash-und-posix-sh.svg)

*Das Schaubild zeigt gemeinsame Basis und Bash-spezifische Erweiterungen.*



Bash und POSIX sh sind verwandte, aber nicht identische Shell-Umgebungen. Viele Skripte laufen
in Bash, obwohl sie im Shebang nur sh versprechen. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Shell zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- POSIX sh beschreibt einen kleineren gemeinsamen Sprachumfang.
- Bash bietet zusätzliche Funktionen wie Arrays, [[ ]] und erweiterte Expansionen.
- Der Shebang sollte zur verwendeten Syntax passen.
- Portabilität und Komfort stehen oft in Spannung.

## Beispiel im Zusammenhang

Ein Skript mit #!/bin/sh nutzt Bash-Arrays und funktioniert auf manchen Systemen nicht, weil sh
dort nicht Bash ist.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Bash ist eine Shell, POSIX sh eher ein Kompatibilitätsziel.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig wird jede Linux-Shell als Bash behandelt. Das führt zu schwer erkennbaren Skriptfehlern.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Bash und POSIX sh ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
