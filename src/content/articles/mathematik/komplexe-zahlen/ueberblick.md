---
title: "Komplexe Zahlen"
description: "Referenz zu komplexen Zahlen, kartesischer Form, Realteil, Imaginärteil, komplexer Ebene, Betrag, Argument und Polarform."
subject: "mathematik"
section: "Zahlen"
topicPath: ["komplexe-zahlen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["mathematik", "Zahlen", "komplexe-zahlen", "Polarform"]
draft: false
---
# Komplexe Zahlen

Komplexe Zahlen erweitern die reellen Zahlen um die imaginäre Einheit `i` mit

```text
i² = -1
```

Damit werden Gleichungen lösbar, die in den reellen Zahlen keine Lösung haben, zum Beispiel `x² + 1 = 0`. Die Lösungen sind `x = i` und `x = -i`.

Die Menge der komplexen Zahlen wird mit `C` bezeichnet. Jede reelle Zahl ist zugleich eine komplexe Zahl mit Imaginärteil `0`.

## Einordnung

Die reellen Zahlen liegen auf der Zahlengeraden. Komplexe Zahlen verwenden zusätzlich eine zweite Richtung. Dadurch entsteht kein einzelner neuer Sonderwert, sondern ein zweidimensionaler Zahlenbereich mit eigenen Rechenregeln.

Die Erweiterung kann als Kette gelesen werden:

```text
N ⊂ Z ⊂ Q ⊂ R ⊂ C
```

Wichtig ist dabei: Komplexe Zahlen ersetzen die reellen Zahlen nicht. Sie enthalten sie. Reelle Rechnungen bleiben gültig, solange der Imaginärteil `0` ist.

## Kartesische Form

Die Standardform einer komplexen Zahl lautet:

```text
z = a + bi
```

Dabei gilt:

- `a` ist der Realteil: `Re(z) = a`.
- `b` ist der Imaginärteil: `Im(z) = b`.
- `i` ist die imaginäre Einheit mit `i² = -1`.

Der Imaginärteil ist die Zahl vor `i`, nicht der komplette Term `bi`. Bei

```text
z = 3 - 4i
```

ist `Re(z) = 3` und `Im(z) = -4`.

In Technik und Elektrotechnik wird häufig `j` statt `i` geschrieben, damit keine Verwechslung mit der Stromstärke `i` entsteht:

```text
z = a + bj
j² = -1
```

Mathematisch ist das dieselbe Struktur. Die migrierte Aufgabe zu Addition, Subtraktion und Polarform verwendet diese technische Schreibweise mit `j`.

## Komplexe Ebene

Eine komplexe Zahl `z = a + bi` lässt sich als Punkt in der komplexen Ebene darstellen:

- Die horizontale Achse ist die reelle Achse.
- Die vertikale Achse ist die imaginäre Achse.
- Der Punkt hat die Koordinaten `(a, b)`.

Beispiel:

```text
z = 3 + 2i
```

liegt drei Einheiten in reeller Richtung und zwei Einheiten in imaginärer Richtung.

Diese Darstellung ähnelt einem Vektor in der Ebene, ist aber nicht dasselbe Thema. Komplexe Zahlen besitzen zusätzlich eine Multiplikation, die geometrisch als Streckung und Drehung gelesen werden kann.

## Betrag

Der Betrag einer komplexen Zahl ist ihr Abstand vom Ursprung der komplexen Ebene.

Für `z = a + bi` gilt:

```text
|z| = sqrt(a² + b²)
```

Beispiel:

```text
z = 3 + 4i
|z| = sqrt(3² + 4²) = 5
```

Der Betrag ist immer reell und nie negativ. Er beschreibt nicht den Realteil und nicht den Imaginärteil, sondern die Länge vom Ursprung zum Punkt `(a, b)`.

## Argument

Das Argument `arg(z)` ist der Winkel zwischen der positiven reellen Achse und der Verbindung vom Ursprung zu `z`.

Für `z = a + bi` wird der Winkel nicht zuverlässig allein durch `arctan(b / a)` bestimmt, weil dadurch der Quadrant verloren gehen kann. Robuster ist die zweistellige Winkelfunktion:

```text
φ = atan2(b, a)
```

`atan2(b, a)` berücksichtigt die Vorzeichen von Realteil und Imaginärteil. Das ist entscheidend bei Zahlen wie `-4 - 4i`: Der Quotient `b / a` ist positiv, der Punkt liegt aber im dritten Quadranten.

Eine häufige Konvention ist der Hauptwert

```text
-π < φ ≤ π
```

Andere Konventionen verwenden `0 ≤ φ < 2π`. Ohne vereinbarte Winkelkonvention ist eine Polarform unvollständig.

## Kartesische Form und Polarform

Die kartesische Form beschreibt eine komplexe Zahl durch Realteil und Imaginärteil:

```text
z = a + bi
```

Die Polarform beschreibt dieselbe Zahl durch Betrag und Argument:

```text
z = r ∠ φ
```

Dabei gilt:

```text
r = |z|
φ = arg(z)
```

Die trigonometrische Darstellung schreibt die Polarform aus:

```text
z = r · (cos φ + i · sin φ)
```

Der Zusammenhang zwischen beiden Formen lautet:

```text
a = r · cos φ
b = r · sin φ
r = sqrt(a² + b²)
φ = atan2(b, a)
```

Kartesische Form ist besonders bequem für Addition und Subtraktion. Polarform ist besonders bequem für Multiplikation, Division, Potenzen und Drehungen.

## Addition und Subtraktion

Bei Addition und Subtraktion werden Realteile und Imaginärteile getrennt verrechnet.

Für

```text
z1 = a + bi
z2 = c + di
```

gilt:

```text
z1 + z2 = (a + c) + (b + d)i
z1 - z2 = (a - c) + (b - d)i
```

Beispiel:

```text
(8 + 5i) + (2 + 2i) = 10 + 7i
```

Danach können Betrag und Argument des Ergebnisses bestimmt werden:

```text
|10 + 7i| = sqrt(10² + 7²) = sqrt(149)
arg(10 + 7i) = atan2(7, 10)
```

Die Polarform wird also nicht addiert, indem man Beträge und Winkel getrennt addiert. Erst wird kartesisch gerechnet, dann wird bei Bedarf umgerechnet.

## Multiplikation und Division

In kartesischer Form folgt die Multiplikation aus Ausmultiplizieren und `i² = -1`.

```text
(a + bi)(c + di)
= ac + adi + bci + bdi²
= (ac - bd) + (ad + bc)i
```

In Polarform ist dieselbe Operation geometrisch einfacher:

```text
(r1 ∠ φ1) · (r2 ∠ φ2) = (r1 · r2) ∠ (φ1 + φ2)
```

Für Division gilt entsprechend:

```text
(r1 ∠ φ1) / (r2 ∠ φ2) = (r1 / r2) ∠ (φ1 - φ2)
```

mit `r2 ≠ 0`.

In kartesischer Form wird Division meist über den konjugiert komplexen Nenner gerechnet. Zu

```text
z = a + bi
```

gehört die konjugiert komplexe Zahl

```text
conj(z) = a - bi
```

Dadurch wird der Nenner reell:

```text
(a + bi)(a - bi) = a² + b²
```

## Bezug zur migrierten Aufgabe

Die migrierte Aufgabe [Komplexe Zahlen addieren, subtrahieren und in Polarform angeben](/schlaufuchs-platform/aufgaben/mathematik/komplexe-zahlen/addition-subtraktion-und-polarform) prüft genau den Übergang zwischen kartesischer Rechnung und polarer Darstellung.

Der Kern ist:

- Gegebene Zahlen stehen in kartesischer Form mit `j` statt `i`.
- Addition und Subtraktion werden komponentenweise ausgeführt.
- Das Ergebnis wird über Betrag und Argument in Polarform übertragen.
- Beim Argument muss der Quadrant geprüft werden.
- Radiant und Grad werden als verschiedene Winkeleinheiten getrennt angegeben.

Ein typischer Fall aus diesem Muster ist:

```text
z1 = 1 + 2j
z2 = 5 + 6j
z3 = z1 - z2 = -4 - 4j
```

Der Betrag ist `sqrt(32)`. Das Argument liegt nicht bei `45°`, obwohl `(-4) / (-4) = 1` ist. Der Punkt liegt im dritten Quadranten. Mit der Hauptwertkonvention `-π < φ ≤ π` ist der passende Winkel `-135°` beziehungsweise `-3π / 4`.

## Typische Fehler

- `i` als gewöhnliche Variable lesen. `i` ist hier fest durch `i² = -1` definiert.
- Realteil und Imaginärteil verwechseln. Bei `3 - 4i` ist der Imaginärteil `-4`, nicht `4i`.
- Das Vorzeichen im Imaginärteil verlieren. `5 - i` bedeutet `5 + (-1)i`.
- Bei Subtraktion nur den Realteil subtrahieren und den Imaginärteil unverändert lassen.
- Das Argument nur mit `arctan(b / a)` berechnen und den Quadranten nicht prüfen.
- Bei `a < 0` den Winkel aus dem ersten oder vierten Quadranten übernehmen, obwohl der Punkt links der imaginären Achse liegt.
- Grad und Radiant vermischen. `π / 2` ist ein Radiant-Ausdruck; `90°` ist die Gradangabe.
- Polarform ohne Winkelkonvention oder Einheit notieren. `5 ∠ 30` ist unvollständig, wenn nicht klar ist, ob `30°` oder `30 rad` gemeint ist.
- Beträge und Winkel bei Addition oder Subtraktion direkt verrechnen. Das funktioniert in Polarform nicht.

## Abgrenzung

Reelle Zahlen sind der Spezialfall komplexer Zahlen mit Imaginärteil `0`. Sie liegen auf der reellen Achse der komplexen Ebene.

Vektoren in der Ebene verwenden ebenfalls zwei Koordinaten. Komplexe Zahlen können geometrisch wie Punkte oder Pfeile gezeichnet werden, sind aber ein Zahlbereich mit eigener Multiplikation und Division.

Die trigonometrische Darstellung ist keine dritte Zahlenart. Sie ist eine ausgeschriebene Polarform:

```text
z = r · (cos φ + i · sin φ)
```

Komplexe Funktionen betrachten Abbildungen von komplexen Zahlen auf komplexe Zahlen. Das ist ein eigenes weiterführendes Gebiet und gehört nicht zur Grundrechnung mit einzelnen komplexen Zahlen.

## Quellenhinweis

Diese Referenzseite wurde fachlich mit dem legacy Schlaufuchs-Material `legacy/selected/mathematik/tasks/komplexe_zahlen_i_06/aufgabe06.html` und `legacy/selected/mathematik/tasks/komplexe_zahlen_i_06/loesung06.html` abgeglichen und an die migrierte Aufgabe `src/content/exercises/mathematik/komplexe-zahlen/addition-subtraktion-und-polarform.md` angebunden. Die zugehörigen legacy Formelbilder unter `legacy/selected/mathematik/tasks/komplexe_zahlen_i_06/pictures/` wurden nur als Quelle für die mathematische Struktur geprüft und nicht als Produktionsassets übernommen. Ursprungs-URLs: `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/komplexe_zahlen/komplexe_zahlen_i_06/aufgabe06.html` und `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/komplexe_zahlen/komplexe_zahlen_i_06/loesung06.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; auf den legacy Seiten ist der Autorenmarker JW mit Erstellungsdatum 10.04.2025 angegeben. Text, Struktur, Formelschreibweise und fachliche Einordnung wurden für die aktuelle Plattform neu geschrieben und adaptiert; legacy HTML, alte Gestaltung und alte Formelbilder wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
