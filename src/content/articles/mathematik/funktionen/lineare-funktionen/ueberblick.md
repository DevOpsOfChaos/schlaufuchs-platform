---
title: "Lineare Funktionen"
description: "Technische Referenz zu linearen Funktionen: Steigung, y-Achsenabschnitt, Darstellungsformen, Schnittpunkte und typische Fehler."
subject: "mathematik"
section: "Funktionen"
topicPath: ["funktionen", "lineare-funktionen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["mathematik", "Funktionen", "lineare Funktionen", "Steigung", "Geraden"]
draft: false
---
Eine lineare Funktion beschreibt einen Zusammenhang mit **konstanter Änderungsrate**. Ihr Graph ist eine Gerade. Jede gleiche Änderung der Eingangsgröße führt zu derselben Änderung der Funktionswerte.

![Lineare Funktion mit Steigung und Startwert](/schlaufuchs-platform/illustrations/mathematik/lineare-funktion-steigung-startwert.svg)

## Definition und Grundidee

Eine lineare Funktion hat in der Schule meistens die Form:

```text
f(x) = m * x + b
```

Dabei ist `m` die **Steigung** und `b` der **y-Achsenabschnitt**. Der y-Achsenabschnitt ist der Funktionswert bei `x = 0`; die Steigung beschreibt, wie stark sich `f(x)` verändert, wenn `x` um eine Einheit wächst.

Eine Gerade ist also nicht nur eine gezeichnete Linie. Sie ist die graphische Darstellung einer festen Rechenregel: Startwert plus gleichmäßige Veränderung.

## Einordnung

Lineare Funktionen gehören zu den Grundmodellen für proportionale und affine Zusammenhänge. Sie stehen zwischen einfachen Zuordnungen und komplexeren Funktionsarten wie quadratischen oder exponentiellen Funktionen.

Typische Anwendungen sind Kostenmodelle mit Grundgebühr, Temperaturumrechnungen, gleichförmige Bewegung, Füllstände mit konstanter Rate oder einfache technische Kennlinien in einem begrenzten Bereich.

## Zentrale Begriffe

- **Funktionswert:** Ergebnis `f(x)` zu einem eingesetzten Wert `x`.
- **Steigung `m`:** Änderung des Funktionswerts pro Änderung der Eingangsgröße.
- **y-Achsenabschnitt `b`:** Wert der Funktion bei `x = 0`.
- **Nullstelle:** Stelle, an der `f(x) = 0` gilt.
- **Schnittpunkt zweier Geraden:** Punkt, an dem beide Funktionen denselben x- und y-Wert besitzen.
- **Proportionale Funktion:** Sonderfall `f(x) = m * x` mit `b = 0`; der Graph geht durch den Ursprung.

## Steigung

Die Steigung kann aus zwei Punkten berechnet werden:

```text
m = (y2 - y1) / (x2 - x1)
```

Der Zähler beschreibt die Änderung in y-Richtung, der Nenner die Änderung in x-Richtung. Deshalb ist die Einheit der Steigung oft eine zusammengesetzte Einheit, etwa `Euro pro Monat`, `Meter pro Sekunde` oder `Volt pro Ampere`.

Eine positive Steigung bedeutet steigende Gerade. Eine negative Steigung bedeutet fallende Gerade. Bei `m = 0` ist die Funktion konstant.

## y-Achsenabschnitt und Funktionsgleichung

Wenn die Steigung und ein Punkt bekannt sind, kann die Gleichung bestimmt werden. Aus `f(x) = m * x + b` folgt mit einem bekannten Punkt `(x1, y1)`:

```text
y1 = m * x1 + b
b = y1 - m * x1
```

Der y-Achsenabschnitt ist nicht immer ein sinnvoller realer Startwert. In einem Sachmodell kann `x = 0` außerhalb des betrachteten Bereichs liegen. Dann bleibt `b` mathematisch korrekt, muss aber fachlich vorsichtig interpretiert werden.

## Darstellungsformen

Lineare Zusammenhänge können als Tabelle, Graph, Gleichung oder Text beschrieben werden. Alle Darstellungen müssen dieselbe Steigung und denselben Startwert ergeben.

Eine Tabelle zeigt lineares Verhalten, wenn die Differenzen der Funktionswerte bei gleichen x-Schritten konstant sind. Ein Graph zeigt lineares Verhalten durch eine Gerade. Eine Gleichung zeigt es über die Form `m * x + b`.

## Schnittpunkte und Nullstellen

Die Nullstelle einer linearen Funktion erhält man durch:

```text
0 = m * x + b
x = -b / m
```

Diese Formel gilt nur für `m != 0`. Bei `m = 0` ist die Gerade horizontal: Entweder hat sie keine Nullstelle oder jeder Punkt ist eine Nullstelle, wenn `b = 0` gilt.

Der Schnittpunkt zweier Geraden wird bestimmt, indem ihre Funktionsterme gleichgesetzt werden:

```text
m1 * x + b1 = m2 * x + b2
```

Der gefundene x-Wert wird anschließend in eine der beiden Funktionen eingesetzt, um den y-Wert zu erhalten.

## Abgrenzung

Lineare Funktionen haben eine konstante Änderungsrate. Quadratische Funktionen haben eine sich ändernde Steigung und eine Parabel als Graph. Exponentialfunktionen wachsen mit einem konstanten Faktor statt mit einer konstanten Differenz.

Proportionale Funktionen sind nur ein Sonderfall der linearen Funktionen. Jede proportionale Funktion ist linear, aber nicht jede lineare Funktion ist proportional.

## Typische Fehler

- **Steigung und y-Achsenabschnitt vertauschen:** `m` steuert die Änderung, `b` den Wert bei `x = 0`.
- **Differenzen falsch herum bilden:** In der Steigungsformel müssen y- und x-Differenzen zur gleichen Punktreihenfolge gehören.
- **Proportional und linear gleichsetzen:** Eine Gerade mit `b != 0` ist linear, aber nicht proportional.
- **Einheiten der Steigung ignorieren:** Die Steigung trägt oft eine fachliche Einheit und ist nicht nur eine Zahl.
- **Graphisch abgelesene Werte als exakt behandeln:** Werte aus einer Zeichnung können gerundet sein; rechnerische Ergebnisse sind genauer.
- **Schnittpunkt nur über y-Werte prüfen:** Ein Schnittpunkt braucht denselben x- und y-Wert in beiden Funktionen.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/mathematik/mathematik-lineare-funktionen-taxonomy-source/mathematik_aufgaben_lineare_funktionen.html` erweitert. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Datum 1.11.2022. Text, Struktur und Beispiele wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
