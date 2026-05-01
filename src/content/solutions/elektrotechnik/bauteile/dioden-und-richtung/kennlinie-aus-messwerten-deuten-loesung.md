---
title: "Lösung: Diodenkennlinie aus Messwerten deuten"
description: "Berechnete Lösung zur Diodenkennlinie mit Stromwerten, Kurvendeutung, linearer Näherung und Diodenwiderstand."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["bauteile", "dioden-und-richtung", "kennlinie-aus-messwerten-deuten"]
taskId: "elektrotechnik-diodenkennlinie-aus-messwerten-deuten"
relatedExercise: "src/content/exercises/elektrotechnik/bauteile/dioden-und-richtung/kennlinie-aus-messwerten-deuten"
tags: ["elektrotechnik", "Bauteile", "dioden", "messwerte", "kennlinie", "loesung"]
draft: false
---
## Messschaltung

R1 erfüllt zwei Funktionen:

- Er begrenzt den Strom durch die Diode. Ohne Serienwiderstand kann der Strom im Durchlassbereich sehr schnell zu groß werden.
- Er dient als Messwiderstand. Weil R1 bekannt ist, wird der Diodenstrom aus der gemessenen Widerstandsspannung berechnet.

Da R1 und D1 in Reihe liegen, ist der Strom durch beide Bauteile gleich:

```text
ID = UR / R1 = UR / 33 Ohm
```

Die Quellenspannung ergibt sich aus den beiden Teilspannungen:

```text
V1 = UR + UD
```

## Berechnete Werte

| UR in V | UD in V | ID in mA | RD in Ohm |
| ---: | ---: | ---: | ---: |
| 0,0000 | 0,110 | 0,00 | unendlich |
| 0,0000 | 0,436 | 0,00 | unendlich |
| 0,0007 | 0,600 | 0,02 | 28285,7 |
| 0,0036 | 0,645 | 0,11 | 5912,5 |
| 0,0245 | 0,697 | 0,74 | 938,8 |
| 0,0645 | 0,724 | 1,95 | 370,4 |
| 0,0995 | 0,737 | 3,02 | 244,4 |
| 0,1736 | 0,754 | 5,26 | 143,3 |
| 0,2420 | 0,763 | 7,33 | 104,0 |
| 0,4260 | 0,782 | 12,91 | 60,6 |
| 0,8300 | 0,803 | 25,15 | 31,9 |
| 1,1730 | 0,814 | 35,55 | 22,9 |
| 1,5020 | 0,823 | 45,52 | 18,1 |
| 2,0240 | 0,832 | 61,33 | 13,6 |
| 3,0300 | 0,845 | 91,82 | 9,2 |

Bei `UR = 0` ist auch `ID = 0`. Dann ist `RD = UD / ID` nicht als endlicher Widerstand berechenbar; für die Modellbetrachtung wird er als sehr groß bzw. unendlich behandelt.

## Kennlinie

![Diodenkennlinie ID in Abhängigkeit von UD](/schlaufuchs-platform/illustrations/elektrotechnik/dioden-kennlinie-id-ud.svg)

Die Kurve zeigt das typische Vorwärtsverhalten einer Siliziumdiode: Unterhalb von etwa `0,7 V` fließt nur ein sehr kleiner Strom. Zwischen etwa `0,75 V` und `0,85 V` steigt der Strom stark an. Die Diode ist deshalb kein ohmscher Widerstand mit konstanter Steigung.

Die Zuordnung `UD(UR)` ist keine Funktion im mathematischen Sinn, weil `UR = 0,0000 V` in der Messreihe zweimal vorkommt, aber mit zwei verschiedenen Diodenspannungen verknüpft ist: `0,110 V` und `0,436 V`.

## Lineare Näherung

Eine sinnvolle einfache Bereichsgrenze ist `UD = 0,8 V`. Links davon ist der Strom in dieser Messreihe gegenüber dem späteren Anstieg sehr klein. Rechts davon steigt die Kurve stark an.

Die erste Teilfunktion wird als waagerechte Gerade angesetzt:

```text
ID(UD) = 0 mA für UD < 0,8 V
```

Für den Durchlassbereich kann die Gerade durch die Punkte `(0,800 V | 0 mA)` und `(0,845 V | 91,82 mA)` gelegt werden:

```text
m = (91,82 mA - 0 mA) / (0,845 V - 0,800 V) = 2040 mA/V
ID(UD) = 2040 * UD - 1632 für UD >= 0,8 V
```

Damit lautet die zusammengesetzte Näherung:

```text
ID(UD) = 0                         für UD < 0,8 V
ID(UD) = 2040 * UD - 1632           für UD >= 0,8 V
```

`UD` wird dabei in Volt eingesetzt, das Ergebnis ist in Milliampere.

## Diodenwiderstand

![Diodenwiderstand RD in Abhängigkeit von UD](/schlaufuchs-platform/illustrations/elektrotechnik/dioden-kennlinie-rd-ud.svg)

Der berechnete Gleichstromwiderstand fällt stark ab: bei `UD = 0,600 V` liegt er noch bei rund `28,3 kOhm`, bei `UD = 0,803 V` nur noch bei rund `31,9 Ohm` und bei `UD = 0,845 V` bei rund `9,2 Ohm`. Das bestätigt die Kennliniendeutung: Mit steigender Vorwärtsspannung wird die Diode leitfähig, aber nicht linear wie ein konstanter Widerstand.

## Quellenhinweis

Fachliche Ausgangsdaten und Lösungsstruktur basieren auf dem legacy Schlaufuchs-Material `elektrotechnik/halbleiter_aufgaben/dioden/dioden_i_01` und `elektrotechnik/halbleiter_loesungen/dioden/dioden_i_01`, veröffentlicht unter CC BY-NC-SA 4.0 mit Autorenkürzel JW und Datum 30.8.2020. Text, Berechnungstabellen und SVG-Diagramme wurden für diese Plattform neu erstellt bzw. nachgezeichnet und adaptiert; das alte Layout und die alten Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
