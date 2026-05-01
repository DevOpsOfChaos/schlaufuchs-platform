---
title: "RC-Parallelschaltung im Wechselstrom"
description: "Technische Referenz zu RC-Parallelschaltungen bei sinusförmiger Wechselspannung: Zweigströme, kapazitiver Blindwiderstand, Zeigeraddition, Gesamtstrom und Phasenwinkel."
subject: "elektrotechnik"
section: "Wechselstrom"
topicPath: ["wechselstrom", "rcl-schaltungen-und-zeigerdiagramme"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Wechselstrom", "RC-Schaltung", "RCL-Schaltung", "Zeigerdiagramm", "Impedanz"]
draft: false
---
Eine RC-Parallelschaltung im Wechselstrom besteht aus einem ohmschen Widerstand und einem Kondensator, die an derselben sinusförmigen Spannung liegen. Die Spannung ist in beiden Zweigen gleich; die Ströme unterscheiden sich nach Betrag und Phasenlage.

![RC-Parallelschaltung an Wechselspannung](/schlaufuchs-platform/illustrations/elektrotechnik/rc-parallelschaltung-wechselstrom.svg)

## Definition und Grundidee

Bei sinusförmiger Wechselspannung wird eine RC-Parallelschaltung nicht durch eine einzelne Stromstärke beschrieben. Der Widerstandszweig liefert einen Stromanteil in Phase zur Spannung. Der Kondensatorzweig liefert einen kapazitiven Blindstrom, der der Spannung um `90°` voraus eilt. Der Gesamtstrom entsteht aus der geometrischen Addition dieser beiden Stromzeiger.

Für eine Spannung

```text
u(t) = Û * sin(omega * t)
```

gelten die Größen:

- **Scheitelwert `Û`:** maximale Spannung der Sinusschwingung.
- **Effektivwert `U`:** Gleichwert für Leistung und Messgeräteanzeige bei sinusförmigen Größen; `U = Û / sqrt(2)`.
- **Kreisfrequenz `omega`:** Winkelgeschwindigkeit der Schwingung; `omega = 2 * pi * f`.
- **Phasenverschiebung `phi`:** Winkel, um den ein Stromzeiger gegenüber dem Spannungszeiger vor- oder nacheilt.

Scheitelwerte und Effektivwerte dürfen in einer Rechnung verwendet werden, aber nicht gemischt. Wird mit `Û` gerechnet, entstehen Stromscheitelwerte. Wird mit `U` gerechnet, entstehen Effektivwerte.

## Einordnung

Die RC-Parallelschaltung gehört zu den Wechselstromschaltungen mit Blindanteil. Sie steht zwischen den Grundbegriffen von Wechselstrom und allgemeineren RCL- bzw. RLC-Schaltungen. In einer Parallelschaltung ist die Spannung über allen Zweigen identisch; die Zweigströme werden addiert.

Der Widerstand ist der **Wirkwiderstand**. Er setzt elektrische Energie in Wärme um und erzeugt einen Wirkstromanteil. Der Kondensator besitzt einen frequenzabhängigen **kapazitiven Blindwiderstand**. Er speichert Energie im elektrischen Feld und gibt sie im Verlauf der Periode wieder zurück.

Für die Produktstruktur ist dieses Thema der Referenzknoten für Aufgaben, in denen Stromzeiger, Blindstrom, Gesamtstrom und Phasenwinkel in einer RC-Parallelschaltung bestimmt werden. Allgemeine Seiten zu Wechselstrom, Frequenz und Impedanz liefern den Rahmen; diese Seite behandelt den konkreten Parallelfall.

## Zentrale Begriffe

- **Momentanwert:** Wert einer Spannung oder eines Stroms zu einem bestimmten Zeitpunkt, etwa `u(t)` oder `i(t)`.
- **Zeigerwert:** Darstellung einer sinusförmigen Größe durch Betrag und Phase bei gleicher Frequenz.
- **Scheitelwert:** maximale Amplitude, etwa `Û`, `ÎR`, `ÎC` oder `Îges`.
- **Effektivwert:** quadratischer Mittelwert einer Wechselgröße; bei Sinusgrößen `Scheitelwert / sqrt(2)`.
- **Kreisfrequenz:** `omega = 2 * pi * f`; sie wird in `1/s` angegeben und steht im Argument der Sinusfunktion.
- **Phasenverschiebung:** Winkel zwischen zwei sinusförmigen Größen gleicher Frequenz.
- **Blindstrom:** Stromanteil, der durch Speicherwirkung entsteht und nicht dauerhaft Wirkleistung umsetzt.
- **Wirkwiderstand:** ohmscher Widerstand `R`, dessen Strom zur Spannung phasengleich ist.
- **Kapazitiver Blindwiderstand:** `XC = 1 / (omega * C)`; er wird mit steigender Frequenz kleiner.
- **Impedanz:** komplexer Wechselstromwiderstand einer Schaltung. Bei der RC-Parallelschaltung ist die Admittanz oft der direktere Rechenweg: `Y = 1 / R + j * omega * C`, daraus folgt `Z = 1 / Y`.

## Strom im Widerstand

Am ohmschen Widerstand gilt auch bei sinusförmiger Wechselspannung das ohmsche Gesetz für den Momentanwert:

```text
iR(t) = u(t) / R
```

Mit `u(t) = Û * sin(omega * t)` folgt:

```text
iR(t) = (Û / R) * sin(omega * t)
ÎR = Û / R
```

Der Widerstandsstrom ist zur Spannung phasengleich. Im Zeigerdiagramm liegt `IR` deshalb auf derselben Achse wie der Spannungszeiger.

## Strom im Kondensator

Für den Kondensator gilt:

```text
iC(t) = C * du(t) / dt
```

Aus der Ableitung der Sinusspannung entsteht ein Kosinusverlauf:

```text
u(t) = Û * sin(omega * t)
iC(t) = omega * C * Û * cos(omega * t)
```

Da `cos(x) = sin(x + pi / 2)` gilt:

```text
iC(t) = ÎC * sin(omega * t + pi / 2)
ÎC = omega * C * Û = Û / XC
XC = 1 / (omega * C)
```

Der Kondensatorstrom eilt der Spannung um `90°` bzw. `pi/2` voraus. Ursache ist nicht eine formale Rechenkonvention, sondern die Bauteilgleichung: Strom fließt dort, wo sich die Kondensatorspannung ändert. Bei maximaler Spannungsänderung ist die Spannung selbst gerade im Nulldurchgang; bei maximaler Spannung ist die momentane Änderung null.

## Zeigerdiagramm und geometrische Addition

In einer Parallelschaltung werden die Zweigströme addiert. Bei Wechselstrom bedeutet das bei gleicher Frequenz eine vektorielle Addition der Zeiger, nicht eine arithmetische Addition der Beträge.

![Stromzeiger der RC-Parallelschaltung](/schlaufuchs-platform/illustrations/elektrotechnik/rc-parallelschaltung-stromzeiger.svg)

Mit dem Spannungszeiger als horizontalem Bezug gilt:

```text
IR = IR * angle 0°
IC = IC * angle +90°
Iges = IR + IC
```

Für Beträge entsteht ein rechtwinkliges Zeigerdreieck:

```text
Iges = sqrt(IR^2 + IC^2)
phi = arctan(IC / IR)
```

Das Vorzeichen ist im kapazitiven Parallelfall positiv, wenn der Gesamtstrom bezogen auf die Spannung voraus eilt. Wird die entgegengesetzte Vorzeichenkonvention verwendet, muss sie ausdrücklich benannt und durchgängig angewendet werden.

## Gesamtstrom und Phasenwinkel

Der Gesamtstrom besitzt einen Wirkanteil aus dem Widerstandszweig und einen kapazitiven Blindanteil aus dem Kondensatorzweig. Im Zeitbereich kann er wieder als Sinusgröße mit eigener Amplitude und Phase geschrieben werden:

```text
iges(t) = Îges * sin(omega * t + phi)
```

Für die Impedanzbetrachtung gilt bei Effektivwerten:

```text
|Z| = U / Iges
Y = 1 / Z = 1 / R + j * omega * C
```

Die Parallelschaltung wird bei steigender Frequenz stromstärker, weil `XC` kleiner wird und der Kondensatorzweig mehr Strom führt. Der Widerstandszweig bleibt bei gleicher Spannung unverändert.

## Bezug zur RC-Parallelschaltungs-Aufgabe

Die zugehörige Übung [Stromzeiger in einer RC-Parallelschaltung bestimmen](/schlaufuchs-platform/aufgaben/elektrotechnik/wechselstrom/rcl-schaltungen-und-zeigerdiagramme/stromzeiger-in-rc-parallelschaltung-bestimmen) verwendet:

```text
vAC(t) = 6 V * sin(omega * t)
f = 50 Hz
R = 22 Ohm
C = 47 µF
```

Die Aufgabe ist ein direkter Anwendungsfall dieser Referenz:

- Aus `f` wird `omega = 2 * pi * f` bestimmt.
- Aus `Û / R` entsteht der Stromscheitelwert im Widerstandszweig.
- Aus `XC = 1 / (omega * C)` und `Û / XC` entsteht der Stromscheitelwert im Kondensatorzweig.
- `iC(t)` wird mit `+pi/2` gegenüber der Spannung angesetzt.
- `Îges` und `phi` werden aus dem rechtwinkligen Zeigerdreieck bestimmt.

## Typische Fehler

- **Momentanwerte und Zeigerwerte vermischen:** `i(t)` ist ein zeitabhängiger Verlauf; `I` oder `Î` ist ein Betrag im Zeigermodell. Beide Darstellungen gehören zusammen, sind aber nicht dieselbe Schreibweise.
- **Grad und Radiant verwechseln:** In Funktionsgleichungen steht die Phase häufig in Radiant, etwa `pi/2` oder `0,314`. Winkelangaben wie `18°` müssen vor dem Einsetzen in trigonometrische Funktionen passend umgerechnet werden.
- **Vorzeichen der Phasenlage falsch wählen:** Beim Kondensator eilt der Strom der Spannung voraus. Für die hier verwendete Konvention ist der kapazitive Winkel positiv.
- **Effektivwert und Scheitelwert verwechseln:** Eine Spannung `6 V * sin(...)` enthält einen Scheitelwert von `6 V`. Der zugehörige Effektivwert beträgt `6 V / sqrt(2)`.
- **Ströme in Parallelschaltung arithmetisch addieren:** `IR + IC` als Zeigersumme ist richtig; `|IR| + |IC|` als Betragssumme ist im Allgemeinen falsch.
- **Blindwiderstand als konstanten Widerstand behandeln:** `XC` hängt von Frequenz und Kapazität ab. Eine andere Frequenz verändert den Kondensatorstrom.

## Abgrenzung

Diese Seite behandelt den sinusförmigen stationären Wechselstromfall einer RC-Parallelschaltung. Sie ist nicht dasselbe wie:

- **Reihen-RLC:** In einer Reihenschaltung ist der Strom überall gleich; die Spannungen an `R`, `L` und `C` werden als Zeiger addiert.
- **Resonanzbetrachtung:** Resonanz entsteht aus dem Zusammenspiel von Induktivität und Kapazität. Eine reine RC-Parallelschaltung besitzt keine LC-Resonanz.
- **Gleichstrombetrachtung:** Im eingeschwungenen Gleichstromfall sperrt ein idealer Kondensator; bei Wechselstrom ist gerade die zeitliche Änderung der Spannung maßgeblich.
- **Einschaltvorgang und RC-Zeitverhalten:** Transiente Lade- und Entladevorgänge werden im Zeitbereich mit Exponentialfunktionen beschrieben. Die Zeigermethode gilt für sinusförmige Größen gleicher Frequenz im stationären Zustand.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/elektrotechnik/tasks/rcl_i_01/aufgabe01.html` und `legacy/selected/elektrotechnik/tasks/rcl_i_01/loesung01.html` erweitert. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Datumsangaben 27.11.2021 sowie 30.11.2021. Text, Struktur, technische Einordnung und Formeldarstellung wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Die eingebundenen SVG-Diagramme wurden bereits für die migrierte Aufgabe neu gezeichnet und enthalten eigene Quellenhinweise im SVG. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
