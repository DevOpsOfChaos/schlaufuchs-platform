---
title: "Aufgabe: Stromzeiger in einer RC-Parallelschaltung bestimmen"
description: "Berechne Zweigströme, Blindwiderstand, Gesamtstrom und Phasenlage einer RC-Parallelschaltung bei sinusförmiger Wechselspannung."
subject: "elektrotechnik"
section: "Wechselstrom"
topicPath: ["wechselstrom", "rcl-schaltungen-und-zeigerdiagramme", "stromzeiger-in-rc-parallelschaltung-bestimmen"]
taskId: "elektrotechnik-rc-parallelschaltung-stromzeiger"
tags: ["elektrotechnik", "Wechselstrom", "RC-Schaltung", "Zeigerdiagramm", "aufgabe"]
hintPoints: ["Der Widerstandsstrom ist zur Spannung phasengleich.", "Der Kondensatorstrom eilt der Spannung um 90 Grad voraus.", "Bei parallelen Zweigen werden die Stromzeiger addiert."]
selfCheckPoints: ["Wurde omega aus f = 50 Hz als 100 pi 1/s bestimmt?", "Sind alle Stromamplituden in derselben Einheit eingesetzt?", "Ist die Phasenverschiebung positiv, weil der kapazitive Strom voraus eilt?"]
transferIdeas: []
level: "mittel"
draft: false
---
Eine RC-Parallelschaltung liegt an einer sinusförmigen Wechselspannung:

```text
vAC(t) = 6 V * sin(omega * t)
f = 50 Hz
R = 22 Ohm
C = 47 µF
```

![RC-Parallelschaltung an Wechselspannung](/schlaufuchs-platform/illustrations/elektrotechnik/rc-parallelschaltung-wechselstrom.svg)

Der Gesamtstrom `iges(t)` ergibt sich aus der Addition des Widerstandsstroms `iR(t)` und des Kondensatorstroms `iC(t)`. Für den kapazitiven Blindwiderstand gilt:

```text
XC = 1 / (omega * C)
```

## Aufgaben

1. Bestimme `omega` aus der Frequenz.
2. Berechne die Amplitude des Widerstandsstroms `ÎR` und gib `iR(t)` an.
3. Berechne den kapazitiven Blindwiderstand `XC`, die Amplitude des Kondensatorstroms `ÎC` und gib `iC(t)` an.
4. Beschreibe, wie `iR(t)` und `iC(t)` im Zeitdiagramm zueinander liegen.
5. Zeichne ein maßstäbliches Zeigerdiagramm der Ströme. Der Spannungszeiger `vAC` liegt horizontal.
6. Bestimme aus dem Zeigerdiagramm oder rechnerisch die Amplitude `Îges` des Gesamtstroms und die Phasenverschiebung `phi` bezogen auf `vAC(t)`.

## Quellenhinweis

Fachliche Ausgangsdaten und Aufgabenstruktur basieren auf dem legacy Schlaufuchs-Material `elektrotechnik/wechselstrom_aufgaben/rcl_schaltungen/rcl_i_01`, insbesondere `aufgabe01.html`, `loesung01.html` und den zugehörigen Diagrammquellen. Das legacy Material wurde unter CC BY-NC-SA 4.0 mit Autorenkürzel JW und Datumsangaben 27.11.2021 bzw. 30.11.2021 beobachtet. Text, Formeldarstellung und SVG-Diagramm wurden für diese Plattform neu erstellt bzw. nachgezeichnet und adaptiert; das alte Layout und die alten Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
