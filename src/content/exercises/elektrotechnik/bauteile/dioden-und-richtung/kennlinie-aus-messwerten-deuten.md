---
title: "Aufgabe: Diodenkennlinie aus Messwerten deuten"
description: "Ermittle aus Messwerten einer Diodenschaltung Strom, Kennlinie und spannungsabhängigen Diodenwiderstand."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["bauteile", "dioden-und-richtung", "kennlinie-aus-messwerten-deuten"]
taskId: "elektrotechnik-diodenkennlinie-aus-messwerten-deuten"
tags: ["elektrotechnik", "Bauteile", "dioden", "messwerte", "kennlinie", "aufgabe"]
hintPoints: ["Der Strom durch R1 und D1 ist derselbe Serienstrom.", "UR ist die Spannung am 33-Ohm-Widerstand.", "Ein sehr kleiner Strom macht den Quotienten UD / ID sehr groß."]
selfCheckPoints: ["Stimmen Stromwerte und Einheiten zu R1 = 33 Ohm?", "Steigt ID erst spät und dann stark an?", "Sind Punkte mit ID = 0 beim Widerstand sauber behandelt?"]
transferIdeas: []
level: "mittel"
draft: false
---
Mit der folgenden Reihenschaltung wird die Kennlinie einer Siliziumdiode aufgenommen. R1 hat den Wert `33 Ohm`. MES1 misst die Spannung `UR` am Widerstand, MES2 misst die Spannung `UD` an der Diode.

![Messschaltung zur Aufnahme einer Diodenkennlinie](/schlaufuchs-platform/illustrations/elektrotechnik/dioden-kennlinie-messschaltung.svg)

## Messwerte

| UR in V | UD in V |
| ---: | ---: |
| 0,0000 | 0,110 |
| 0,0000 | 0,436 |
| 0,0007 | 0,600 |
| 0,0036 | 0,645 |
| 0,0245 | 0,697 |
| 0,0645 | 0,724 |
| 0,0995 | 0,737 |
| 0,1736 | 0,754 |
| 0,2420 | 0,763 |
| 0,4260 | 0,782 |
| 0,8300 | 0,803 |
| 1,1730 | 0,814 |
| 1,5020 | 0,823 |
| 2,0240 | 0,832 |
| 3,0300 | 0,845 |

## Aufgaben

1. Erkläre zwei Funktionen von R1 in dieser Messschaltung.
2. Gib die Formel an, mit der aus `UR` der Diodenstrom `ID` berechnet wird.
3. Gib an, wie sich die Quellenspannung `V1` aus den beiden gemessenen Spannungen ergibt.
4. Berechne `ID` für alle Messpunkte in Milliampere und stelle die Kennlinie `ID(UD)` in einem geeigneten Diagramm dar.
5. Begründe, warum die Zuordnung `UD(UR)` aus den Messwerten keine Funktion im mathematischen Sinn ist.
6. Nähere `ID(UD)` durch zwei lineare Teilfunktionen an. Wähle eine sinnvolle Bereichsgrenze und begründe sie.
7. Bestimme die beiden Funktionsgleichungen der Näherung. Gib die Grenze mit an.
8. Berechne für alle Punkte mit `ID > 0` den Gleichstromwiderstand `RD = UD / ID` und stelle `RD(UD)` dar. Behandle die Punkte mit `ID = 0` ausdrücklich.

## Quellenhinweis

Fachliche Ausgangsdaten und Aufgabenstruktur basieren auf dem legacy Schlaufuchs-Material `elektrotechnik/halbleiter_aufgaben/dioden/dioden_i_01` und `elektrotechnik/halbleiter_loesungen/dioden/dioden_i_01`, veröffentlicht unter CC BY-NC-SA 4.0 mit Autorenkürzel JW und Datum 30.8.2020. Text, Tabellenfassung und SVG-Diagramm wurden für diese Plattform neu erstellt bzw. nachgezeichnet und adaptiert; das alte Layout und die alten Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
