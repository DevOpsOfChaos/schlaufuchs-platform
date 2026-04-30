---
title: "Blockgeräte und Partitionen"
description: "Blockgeräte stellen Speicher in adressierbaren Blöcken bereit. Partitionen teilen ein solches Gerät in Bereiche, die Dateisysteme oder andere Strukturen enthalten..."
subject: "linux"
section: "Dateisysteme"
topicPath: ["blockgeraete-und-partitionen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateisysteme"]
draft: false
---
# Blockgeräte und Partitionen

![Schaubild zu Blockgeräten und Partitionen.](/schlaufuchs-platform/images/overviews/v150/blockgeraete-und-partitionen.svg)

*Das Schaubild ordnet Datenträger, Partition und Dateisystem ein.*


Blockgeräte stellen Speicher in adressierbaren Blöcken bereit. Partitionen teilen ein solches
Gerät in Bereiche, die Dateisysteme oder andere Strukturen enthalten können. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Dateisysteme zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- lsblk zeigt Geräte, Partitionen und Mountpoints übersichtlich.
- Partitionstabelle und Dateisystem sind unterschiedliche Ebenen.
- Mounten macht ein Dateisystem im Verzeichnisbaum zugänglich.
- Fehlerhafte Gerätewahl kann Daten überschreiben.

## Beispiel im Zusammenhang

Eine SSD erscheint als Blockgerät, darauf liegen mehrere Partitionen, von denen eine als /home
eingehängt ist.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Eine Partition ist noch kein nutzbares Dateisystem. Sie ist zunächst nur ein Bereich auf einem
Gerät.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden Gerätepfade wie /dev/sdb blind verwendet, ohne sie vor gefährlichen
Schreibaktionen zu prüfen.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Blockgeräte und Partitionen ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
