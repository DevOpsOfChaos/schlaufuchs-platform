---
title: "Quadratische Funktionen"
description: "Technische Referenz zu quadratischen Funktionen: Parabel, Scheitelpunkt, Nullstellen, Darstellungsformen und typische Fehler."
subject: "mathematik"
section: "Algebra"
topicPath: ["algebra", "quadratische-funktionen", "ueberblick", "grundlagen-quadratische-funktionen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["mathematik", "Algebra", "quadratische Funktionen", "Parabel", "Scheitelpunkt", "Nullstellen"]
draft: false
---
Eine quadratische Funktion ist eine Funktion, bei der die Variable in der höchsten Potenz mit dem Exponenten `2` vorkommt. Ihr Graph ist eine **Parabel**.

![Quadratische Funktion mit Scheitelpunkt und Nullstellen](/schlaufuchs-platform/illustrations/mathematik/quadratische-funktion-parabel-scheitel.svg)

## Definition und Grundidee

Die Normalform einer quadratischen Funktion lautet:

```text
f(x) = a * x^2 + b * x + c
```

Dabei gilt `a != 0`. Der Koeffizient `a` bestimmt Öffnung, Richtung und Breite der Parabel. Die weiteren Koeffizienten beeinflussen Lage, Nullstellen und Achsenschnittpunkte.

Quadratische Funktionen beschreiben Zusammenhänge, bei denen die Änderungsrate selbst linear wächst oder fällt. Deshalb ist der Graph nicht gerade, sondern gekrümmt.

## Einordnung

Quadratische Funktionen stehen zwischen linearen Funktionen und allgemeineren Polynomfunktionen. Sie sind das einfachste Funktionsmodell mit Krümmung und einem Extrempunkt.

Typische Anwendungen sind Wurfbewegungen, Flächenoptimierung, Bremswege, Erlös- und Kostenmodelle oder geometrische Aufgaben mit variabler Länge.

## Zentrale Begriffe

- **Parabel:** Graph einer quadratischen Funktion.
- **Öffnung:** Richtung der Parabel. Bei `a > 0` öffnet sie nach oben, bei `a < 0` nach unten.
- **Scheitelpunkt:** tiefster oder höchster Punkt der Parabel.
- **Symmetrieachse:** senkrechte Gerade durch den Scheitelpunkt.
- **Nullstellen:** x-Werte, bei denen `f(x) = 0` gilt.
- **y-Achsenabschnitt:** Wert bei `x = 0`; in der Normalform ist das `c`.

## Darstellungsformen

Quadratische Funktionen werden häufig in drei Formen gelesen:

```text
Normalform:        f(x) = a*x^2 + b*x + c
Scheitelpunktform: f(x) = a*(x - d)^2 + e
Faktorform:        f(x) = a*(x - x1)*(x - x2)
```

Die Normalform macht Koeffizienten und den y-Achsenabschnitt sichtbar. Die Scheitelpunktform zeigt den Scheitelpunkt `(d, e)`. Die Faktorform zeigt vorhandene Nullstellen `x1` und `x2`.

Keine Form ist grundsätzlich besser. Die passende Form hängt davon ab, welche Information gesucht wird.

## Scheitelpunkt

Der Scheitelpunkt ist der Extrempunkt der Parabel. In der Scheitelpunktform ist er direkt ablesbar:

```text
f(x) = a*(x - d)^2 + e
Scheitelpunkt: S(d | e)
```

In der Normalform kann die x-Koordinate des Scheitelpunkts über

```text
xS = -b / (2*a)
```

bestimmt werden. Der y-Wert entsteht durch Einsetzen in `f(x)`.

## Nullstellen

Nullstellen entstehen aus der Gleichung:

```text
f(x) = 0
```

Je nach Funktion kann es zwei, eine oder keine reellen Nullstelle geben. Eine Parabel mit zwei Nullstellen schneidet die x-Achse. Eine Parabel mit einer Nullstelle berührt die x-Achse im Scheitelpunkt. Ohne reelle Nullstelle liegt die Parabel vollständig oberhalb oder unterhalb der x-Achse.

Die Anzahl der reellen Nullstellen hängt von der Diskriminante ab, wenn die quadratische Lösungsformel verwendet wird.

## Parameterwirkung

Der Parameter `a` ist besonders wichtig:

- `a > 0`: Parabel öffnet nach oben.
- `a < 0`: Parabel öffnet nach unten.
- `|a| > 1`: Parabel wird schmaler.
- `0 < |a| < 1`: Parabel wird breiter.

Verschiebungen nach links, rechts, oben oder unten sind in der Scheitelpunktform leichter zu erkennen als in der Normalform.

## Abgrenzung

Lineare Funktionen besitzen eine konstante Änderungsrate und einen geraden Graphen. Quadratische Funktionen besitzen eine veränderliche Steigung und einen Scheitelpunkt.

Exponentialfunktionen wachsen mit einem Faktor pro Schritt. Quadratische Funktionen wachsen nicht mit einem festen Faktor, sondern mit einer Änderungsrate, die sich linear verändert.

## Typische Fehler

- **`a` als reine Streckung lesen:** Das Vorzeichen von `a` entscheidet auch über die Öffnungsrichtung.
- **Scheitelpunkt und y-Achsenabschnitt verwechseln:** Der y-Achsenabschnitt liegt bei `x = 0`; der Scheitelpunkt liegt im Allgemeinen woanders.
- **Faktorform ohne Nullstellen erzwingen:** Nicht jede quadratische Funktion hat reelle Nullstellen.
- **Nullstellen aus dem Graphen als exakt übernehmen:** Zeichnungen liefern oft nur Näherungen.
- **Vorzeichen in der Scheitelpunktform falsch lesen:** `f(x) = (x - 3)^2 + 2` hat den Scheitelpunkt bei `x = 3`, nicht bei `x = -3`.
- **Darstellungsformen blind umformen:** Vor dem Umformen sollte klar sein, ob Scheitelpunkt, Nullstellen oder Koeffizienten gesucht sind.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/mathematik/mathematik-quadratische-funktionen-taxonomy-source/mathematik_aufgaben_quadratische_funktionen.html` erweitert. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Datum 1.11.2022. Text, Struktur und Beispiele wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
