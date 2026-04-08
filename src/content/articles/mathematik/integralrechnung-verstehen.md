---
title: Integralrechnung verstehen
description: Die Integralrechnung ordnet Stammfunktionen, Flächeninhalte und den Zusammenhang zur Ableitung in einem ruhigen Überblick.
subject: mathematik
section: Analysis
level: mittel
tags:
  - Integralrechnung
  - Stammfunktion
  - Fläche
  - Analysis
draft: false
---

## Überblick

Die Integralrechnung ergänzt die Differentialrechnung. Während die Ableitung beschreibt, wie stark sich eine Funktion an einer Stelle verändert, fragt die Integralrechnung oft nach einer gesamten angesammelten Größe. Typische Beispiele sind Flächeninhalte unter einem Graphen, zurückgelegte Wege aus einer Geschwindigkeitsfunktion oder aufaddierte Mengen über ein Intervall.

## Stammfunktion und Ableitung

Eine Funktion **F** heißt Stammfunktion von **f**, wenn für alle betrachteten Stellen gilt:

- F'(x) = f(x)

Damit ist die Stammfunktion gewissermaßen die Umkehridee zur Ableitung. Zu einer Funktion können mehrere Stammfunktionen gehören, weil sich Konstante beim Ableiten aufheben. Deshalb schreibt man bei unbestimmten Integralen immer eine Konstante dazu.

## Unbestimmtes Integral

Das unbestimmte Integral beschreibt die Menge aller Stammfunktionen:

- ∫ f(x) dx = F(x) + C

Wichtige Grundmuster sind:

- ∫ x^n dx = (1 / (n + 1)) · x^(n + 1) + C für n ≠ -1
- ∫ a dx = a · x + C
- ∫ e^x dx = e^x + C
- ∫ sin(x) dx = -cos(x) + C
- ∫ cos(x) dx = sin(x) + C

## Bestimmtes Integral

Das bestimmte Integral vergleicht die Werte einer Stammfunktion an zwei Grenzen:

- ∫ von a bis b f(x) dx = F(b) - F(a)

Damit erhält man den orientierten Flächeninhalt zwischen dem Graphen von **f** und der x-Achse im Intervall **[a, b]**. Liegt der Graph unter der x-Achse, wird das Ergebnis negativ. Für geometrische Flächen muss das Vorzeichen deshalb immer bewusst geprüft werden.

## Zusammenhang zur Fläche

Das bestimmte Integral ist nicht einfach eine Formel zum Einsetzen, sondern eine Summe vieler kleiner Beiträge. Anschaulich wird ein Intervall in sehr schmale Streifen zerlegt. Jeder Streifen trägt eine kleine Fläche bei. Das Integral beschreibt den Grenzfall dieser Summe.

## Typisches Vorgehen

1. Funktion sorgfältig lesen und vereinfachen.
2. Eine passende Stammfunktion bestimmen.
3. Grenzen in die Stammfunktion einsetzen.
4. Ergebnis als Differenz F(b) - F(a) berechnen.
5. Prüfen, ob ein orientierter Wert oder ein reiner Flächeninhalt gefragt ist.

## Kurzes Beispiel

Gegeben ist f(x) = 2x + 1 im Intervall von 0 bis 3.

Eine Stammfunktion ist:

- F(x) = x^2 + x

Dann gilt:

- F(3) = 9 + 3 = 12
- F(0) = 0
- ∫ von 0 bis 3 (2x + 1) dx = 12

Das Ergebnis 12 beschreibt hier zugleich den Flächeninhalt, weil die Funktion im ganzen Intervall oberhalb der x-Achse liegt.

## Typische Fehler

- Die Konstante **C** beim unbestimmten Integral vergessen.
- Bei bestimmten Integralen erst ableiten statt eine Stammfunktion suchen.
- Grenzen direkt in die Ausgangsfunktion statt in die Stammfunktion einsetzen.
- Vorzeichen unterhalb der x-Achse nicht beachten.
- Stammfunktion mechanisch auswendig lernen, ohne den Zusammenhang zur Ableitung zu verstehen.

## Merksätze

- Ableiten und Integrieren gehören eng zusammen, sind aber nicht einfach spiegelgleich im Rechnen.
- Das bestimmte Integral liefert einen Gesamtwert über ein Intervall.
- Für geometrische Flächen muss das Vorzeichen immer bewusst geprüft werden.
