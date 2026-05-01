---
title: "Lösung: Stromzeiger in einer RC-Parallelschaltung bestimmen"
description: "Berechnete Lösung zur RC-Parallelschaltung mit Zweigströmen, Blindwiderstand, Stromzeigeraddition und Phasenlage."
subject: "elektrotechnik"
section: "Wechselstrom"
topicPath: ["wechselstrom", "rcl-schaltungen-und-zeigerdiagramme", "stromzeiger-in-rc-parallelschaltung-bestimmen"]
taskId: "elektrotechnik-rc-parallelschaltung-stromzeiger"
relatedExercise: "src/content/exercises/elektrotechnik/wechselstrom/rcl-schaltungen-und-zeigerdiagramme/stromzeiger-in-rc-parallelschaltung-bestimmen"
tags: ["elektrotechnik", "Wechselstrom", "RC-Schaltung", "Zeigerdiagramm", "loesung"]
draft: false
---
## Gegebene Werte

```text
vAC(t) = 6 V * sin(omega * t)
f = 50 Hz
R = 22 Ohm
C = 47 µF
```

Die Kreisfrequenz lautet:

```text
omega = 2 * pi * f = 2 * pi * 50 1/s = 100 pi 1/s
```

## Widerstandszweig

Am ohmschen Widerstand ist der Strom zur Spannung phasengleich:

```text
ÎR = Û / R = 6 V / 22 Ohm = 0,2727 A = 273 mA
iR(t) = 273 mA * sin(100 pi 1/s * t)
```

## Kondensatorzweig

Der kapazitive Blindwiderstand beträgt:

```text
XC = 1 / (omega * C)
XC = 1 / (100 pi 1/s * 47 µF)
XC = 67,7 Ohm
```

Daraus folgt für die Stromamplitude:

```text
ÎC = Û / XC = 6 V / 67,7 Ohm = 0,0886 A = 88,6 mA
```

Der Kondensatorstrom eilt der Spannung um `90°` bzw. `pi/2` voraus:

```text
iC(t) = 88,6 mA * sin(100 pi 1/s * t + pi/2)
```

Gleichwertig kann der Verlauf auch als Kosinus geschrieben werden:

```text
iC(t) = 88,6 mA * cos(100 pi 1/s * t)
```

## Zeitliche Lage

`iR(t)` hat seine Nulldurchgänge und Maxima an denselben Phasenlagen wie `vAC(t)`. `iC(t)` liegt um ein Viertel der Periodendauer davor. Bei `f = 50 Hz` ist die Periodendauer `T = 20 ms`; ein Viertel davon sind `5 ms`.

## Zeigeraddition

Im Zeigerdiagramm liegt der Spannungszeiger horizontal. Der Widerstandsstrom liegt in derselben Richtung. Der Kondensatorstrom steht dazu senkrecht nach oben, weil er der Spannung um `90°` voraus eilt.

![Stromzeiger der RC-Parallelschaltung](/schlaufuchs-platform/illustrations/elektrotechnik/rc-parallelschaltung-stromzeiger.svg)

Die Amplitude des Gesamtstroms ergibt sich aus dem rechtwinkligen Zeigerdreieck:

```text
Îges = sqrt(ÎR^2 + ÎC^2)
Îges = sqrt((273 mA)^2 + (88,6 mA)^2)
Îges = 287 mA
```

Die Phasenverschiebung bezogen auf die Spannung ist:

```text
phi = arctan(ÎC / ÎR)
phi = arctan(88,6 mA / 273 mA)
phi = 18,0° = 0,314 rad ≈ 0,10 pi
```

Damit kann der Gesamtstrom näherungsweise geschrieben werden als:

```text
iges(t) = 287 mA * sin(100 pi 1/s * t + 0,314)
```

Der Gesamtstrom eilt der Eingangsspannung voraus. Das ist kein Vorzeichenfehler, sondern die Folge des kapazitiven Parallelzweigs.

## Quellenhinweis

Fachliche Ausgangsdaten und Lösungsstruktur basieren auf dem legacy Schlaufuchs-Material `elektrotechnik/wechselstrom_aufgaben/rcl_schaltungen/rcl_i_01`, insbesondere `aufgabe01.html`, `loesung01.html` und den zugehörigen Diagrammquellen. Das legacy Material wurde unter CC BY-NC-SA 4.0 mit Autorenkürzel JW und Datumsangaben 27.11.2021 bzw. 30.11.2021 beobachtet. Text, Berechnungen und SVG-Diagramme wurden für diese Plattform neu erstellt bzw. nachgezeichnet und adaptiert; das alte Layout und die alten Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
