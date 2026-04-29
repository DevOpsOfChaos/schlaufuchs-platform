---
title: "Kirchhoffsche Regeln"
description: "Die Kirchhoffschen Regeln helfen dabei, Ströme und Spannungen in elektrischen Netzwerken systematisch zu analysieren."
subject: "elektrotechnik"
section: "Schaltungstechnik"
topicPath: ["kirchhoffsche-regeln"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Schaltungstechnik"]
draft: false
---
## Überblick

Sobald Schaltungen mehr als nur einen einfachen Widerstand enthalten, reichen einzelne Formeln oft nicht mehr aus. Dann helfen die Kirchhoffschen Regeln. Sie beschreiben grundlegende Erhaltungssätze in elektrischen Netzwerken und sind eine zentrale Basis für die Schaltungsanalyse.

## Knotenregel

Die Knotenregel betrachtet einen Verzweigungspunkt in einer Schaltung. Sie lautet sinngemäß:

- Die Summe der zufließenden Ströme ist gleich der Summe der abfließenden Ströme.

Der Hintergrund ist einfach: Ladung verschwindet an einem Knoten nicht plötzlich und entsteht dort auch nicht aus dem Nichts.

Ein typisches Beispiel ist:

- I1 = I2 + I3

Wenn 5 A in einen Knoten hineinfließen und 2 A über einen Zweig abfließen, müssen über den anderen Zweig 3 A abfließen.

## Maschenregel

Die Maschenregel betrachtet eine geschlossene Schleife in einer Schaltung. Sie lautet sinngemäß:

- In einer geschlossenen Masche ist die Summe aller Spannungen gleich null.

Anders formuliert: Spannungsquellen und Spannungsabfälle gleichen sich in einer Runde genau aus.

## Warum beide Regeln wichtig sind

Die Knotenregel hilft vor allem bei der Stromverteilung. Die Maschenregel hilft vor allem beim Erfassen von Spannungsabfällen entlang eines geschlossenen Weges. Zusammen mit dem Ohmschen Gesetz entstehen daraus oft die nötigen Gleichungen zur Berechnung unbekannter Größen.

## Kleines Beispiel zur Maschenregel

Eine Spannungsquelle von 12 V versorgt zwei Widerstände in Reihe. Über dem ersten Widerstand fallen 4 V ab. Dann müssen über dem zweiten Widerstand 8 V abfallen, damit die Maschenregel erfüllt ist.

## Typische Fehler

- Knoten und Masche verwechseln.
- Strom- und Spannungsgleichungen durcheinanderbringen.
- Vorzeichen in der Maschenregel unsauber setzen.
- Das Ohmsche Gesetz nicht mit den Kirchhoffschen Regeln verbinden.

## Merksätze

- Die Knotenregel gehört zu den Strömen.
- Die Maschenregel gehört zu den Spannungen.
- Kirchhoff beschreibt Erhaltung in elektrischen Netzwerken.
- In komplexeren Schaltungen werden beide Regeln meist gemeinsam genutzt.
