---
title: "Kirchhoffsche Regeln"
description: "Allgemeiner Überblick über Knotenregel, Maschenregel und die Bilanzierung elektrischer Schaltungen."
subject: "elektrotechnik"
section: "Grundlagen"
topicPath: ["kirchhoffsche-regeln", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Grundlagen"]
draft: false
---
# Kirchhoffsche Regeln

![Schaubild zu den Kirchhoffschen Regeln.](/schlaufuchs-platform/images/overviews/v149/kirchhoffsche-regeln.svg)

*Das Schaubild zeigt Knotenregel und Maschenregel als Erhaltungsprinzipien.*


Die Kirchhoffschen Regeln beschreiben, wie Strom und Spannung in elektrischen Netzwerken zusammenhängen. Sie sind Bilanzregeln: Was an einem Knoten an Strom hineinfließt, muss wieder herausfließen; Spannungen in einer geschlossenen Masche summieren sich mit Vorzeichen zu null.

## Bedeutung

Diese Regeln machen Schaltungen systematisch berechenbar. Statt nur einzelne Formeln auswendig zu verwenden, wird eine Schaltung in Knoten, Zweige und Maschen zerlegt. Dadurch lassen sich auch Netzwerke mit mehreren Bauteilen und Spannungsquellen analysieren.

## Typische Teilaspekte

- **Knotenregel:** Die Summe zufließender und abfließender Ströme an einem Knoten ist ausgeglichen.
- **Maschenregel:** In einem geschlossenen Umlauf gleichen sich Spannungsquellen und Spannungsabfälle aus.
- **Vorzeichen:** Eine konsistente Richtung ist wichtiger als die zunächst gewählte Richtung.
- **Modellgrenzen:** Die Regeln gelten im üblichen Schaltungsmodell; bei sehr hohen Frequenzen können Leitungen selbst relevant werden.

## Beispiel

In einer LED-Schaltung kann die Maschenregel erklären, warum Versorgungsspannung, LED-Spannung und Vorwiderstandsspannung zusammenpassen müssen. Die Knotenregel erklärt, wie sich Strom bei parallelen Zweigen aufteilt.

## Abgrenzung

Kirchhoffsche Regeln ersetzen nicht die Bauteilgesetze. Sie liefern die Bilanzstruktur; Ohmsches Gesetz, Diodenkennlinie oder Transistormodell beschreiben zusätzlich das Verhalten einzelner Bauteile.

## Häufige Missverständnisse

Viele Fehler entstehen durch wechselnde Vorzeichen oder unklare Pfeilrichtungen. Ein negatives Ergebnis bedeutet nicht automatisch einen Rechenfehler, sondern oft nur, dass der tatsächliche Strom entgegen der angenommenen Richtung fließt.

## Einordnung im Gesamtzusammenhang

Kirchhoffsche Regeln verbinden Grundlagen wie Spannung, Strom und Widerstand mit komplexeren Themen wie Netzwerkanalyse, Messfehlersuche und Schaltungssimulation.
