---
title: "Dioden und Richtung"
description: "Referenz zu Dioden als richtungsabhängige Halbleiterbauteile: Aufbau, Durchlass- und Sperrbereich, Kennlinie, Strombegrenzung und typische Fehlinterpretationen."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["bauteile", "dioden-und-richtung", "ueberblick", "grundlagen-dioden-und-richtung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Bauteile", "dioden", "halbleiter", "kennlinie"]
draft: false
---
![Dioden und Richtung](/schlaufuchs-platform/images/overviews/v179/dioden-und-richtung.svg)

Eine Diode ist ein Halbleiterbauteil mit stark richtungsabhängigem Strom-Spannungs-Verhalten. In Durchlassrichtung kann sie ab einer passenden Vorwärtsspannung leitend werden. In Sperrrichtung fließt im normalen Betrieb nur ein sehr kleiner Sperrstrom, solange zulässige Grenzwerte nicht überschritten werden.

## Definition und Grundidee

Die Grundfunktion einer Diode ist nicht "Strom an oder aus", sondern ein nichtlinearer Zusammenhang zwischen Diodenspannung `UD` und Diodenstrom `ID`. Die Polung entscheidet, in welchem Bereich die Diode betrieben wird:

- **Durchlassrichtung:** Die Anode liegt gegenüber der Kathode positiver. Ab einem material- und stromabhängigen Bereich steigt der Strom stark an.
- **Sperrrichtung:** Die Kathode liegt gegenüber der Anode positiver. Die Diode sperrt weitgehend, bis Leckstrom, Durchbruchspannung oder Bauteilgrenzen relevant werden.
- **Nichtlinearität:** Eine Diode verhält sich nicht wie ein ohmscher Widerstand mit konstantem Quotienten aus Spannung und Strom.

Die Richtungsidee bleibt der Einstieg, reicht für technische Entscheidungen aber nicht aus. In realen Schaltungen zählen zusätzlich Strombegrenzung, Verlustleistung, Temperatur, Sperrspannung und das konkrete Diodenmodell.

## Einordnung

Dioden gehören zu den Halbleiterbauteilen. Sie stehen fachlich zwischen Grundlagen der Stromrichtung und konkreten Schutz- oder Gleichrichterschaltungen. Für die Produktstruktur ist das Thema ein Bauteil-Grundlagenknoten: Von hier aus lassen sich LED-Vorwiderstand, Gleichrichtung, Verpolschutz, Freilaufdiode, Z-Diode und Schutzdioden sauber abgrenzen.

In Schaltplänen wird eine Diode deshalb nicht nur über ihr Symbol gelesen. Entscheidend ist der Strompfad: Welche Seite ist Anode, welche Seite ist Kathode, welche Spannung liegt an, und welches Bauteil begrenzt den Strom?

## Zentrale Begriffe

- **Anode:** Anschluss, an dem bei Durchlassbetrieb der konventionelle Strom in die Diode eintritt.
- **Kathode:** Anschluss, an dem der konventionelle Strom bei Durchlassbetrieb aus der Diode austritt; am Bauteil oft durch einen Ring markiert.
- **Durchlassspannung:** Spannung über der Diode im leitenden Bereich. Sie ist kein fester Schalterwert, sondern hängt unter anderem von Strom, Temperatur und Diodentyp ab.
- **Sperrspannung:** Spannung über der Diode in Sperrrichtung. Sie darf die zulässige Grenze des Bauteils nicht überschreiten.
- **Diodenstrom `ID`:** Strom durch die Diode. In einer Reihenschaltung ist er gleich dem Strom durch den Serienwiderstand.
- **Diodenkennlinie `ID(UD)`:** Darstellung des Diodenstroms in Abhängigkeit von der Diodenspannung.
- **Gleichstromwiderstand `RD`:** Quotient `UD / ID` an einem konkreten Arbeitspunkt. Er ist bei einer Diode kein konstanter Bauteilwert.

## Aufbau und technisches Prinzip

Die klassische Siliziumdiode basiert auf einem pn-Übergang. Eine p-dotierte und eine n-dotierte Halbleiterzone bilden an ihrer Grenze eine Sperrschicht. Ohne äußere Spannung entsteht dort ein inneres elektrisches Feld, das den freien Ladungsträgerfluss zunächst hemmt.

Bei Vorwärtspolung wird diese Sperrwirkung kleiner. Ist die Spannung ausreichend und ein äußerer Strompfad vorhanden, können Ladungsträger den Übergang überwinden; der Strom steigt stark an. Bei Rückwärtspolung wird die Sperrzone vergrößert, sodass nur ein kleiner Sperrstrom fließt, solange kein Durchbruchbetrieb erreicht wird.

Eine Diode braucht im Durchlassbetrieb fast immer eine Strombegrenzung durch die restliche Schaltung. In der Messschaltung der zugehörigen Aufgabe übernimmt der Widerstand `R1` diese Rolle: Er schützt die Diode vor zu großem Strom und dient zugleich als Messwiderstand zur Berechnung von `ID`.

```text
ID = UR / R1
V1 = UR + UD
```

## Kennlinie und Verhalten

Die Diodenkennlinie ist die wichtigste Darstellung für reales Diodenverhalten. Bei einer Siliziumdiode bleibt der Strom bei kleinen Vorwärtsspannungen zunächst sehr gering. In der Nähe des leitenden Bereichs steigt er dann stark an; kleine zusätzliche Spannungsänderungen können große Stromänderungen auslösen.

Aus der gemessenen Kennlinie einer einfachen Siliziumdiode ergibt sich deshalb:

- Unterhalb des leitenden Bereichs ist `ID` sehr klein oder im Messaufbau nicht sinnvoll aufgelöst.
- Im Durchlassbereich ist `UD` relativ eng begrenzt, während `ID` stark wächst.
- Der Quotient `RD = UD / ID` fällt mit steigendem Strom deutlich ab.
- Eine lineare Näherung kann für einen begrenzten Arbeitsbereich nützlich sein, ersetzt aber nicht die Kennlinie.

Für die Auslegung heißt das: Eine Diode darf nicht direkt an eine Spannungsquelle gelegt werden, nur weil die Durchlassspannung ungefähr bekannt ist. Ohne passenden Serienwiderstand oder eine andere Strombegrenzung kann der Strom zu groß werden.

## Konkrete fachliche Beispiele

**Kennlinienmessung:** Eine Siliziumdiode liegt in Reihe mit einem bekannten Widerstand. Aus der gemessenen Widerstandsspannung `UR` wird mit `ID = UR / R1` der Diodenstrom berechnet. Die Diodenspannung `UD` wird separat gemessen. Aus den Wertepaaren entsteht die Kennlinie `ID(UD)`.

**LED mit Vorwiderstand:** Eine LED ist ebenfalls eine Diode, aber mit anderer Durchlassspannung und optischer Funktion. Der Vorwiderstand legt zusammen mit Versorgungsspannung und LED-Spannung den Strom fest. Die Helligkeit wird dadurch nicht zuverlässig "über die Spannung geraten", sondern über den Strom dimensioniert.

**Verpolschutz:** Eine Diode kann verhindern, dass bei falsch angeschlossener Versorgung ein gefährlicher Strompfad entsteht. Die konkrete Schaltung entscheidet, ob eine Seriendiode, eine parallel geschaltete Schutzdiode oder ein MOSFET-Verpolschutz sinnvoll ist.

**Freilaufdiode:** Bei Spulen wird eine Diode oft so eingesetzt, dass sie im normalen Betrieb sperrt und erst beim Abschalten einen Strompfad für die gespeicherte Energie bereitstellt. Sie ist dort kein normaler Betriebsleiter, sondern ein Schutzpfad für den Abschaltmoment.

## Typische Fehler und Missverständnisse

- **Diode als idealen Schalter lesen:** Eine reale Diode hat Spannungsabfall, Leckstrom, Grenzwerte und Verlustleistung.
- **Durchlassspannung als festen Wert behandeln:** Der oft genannte Bereich um `0,7 V` bei Silizium ist eine grobe Orientierung, kein universeller Grenzwert.
- **Strombegrenzung vergessen:** Gerade im Durchlassbereich steigt der Strom stark. Eine Spannungsquelle allein ist kein geeignetes Stromlimit.
- **Anode und Kathode nur auswendig lernen:** Entscheidend ist der tatsächliche Strompfad im Schaltplan und im eingebauten Bauteil.
- **Gleichstromwiderstand mit ohmschem Widerstand verwechseln:** `RD = UD / ID` beschreibt einen Arbeitspunkt. Er ist nicht der konstante Widerstand eines linearen Bauteils.
- **Schutzdiode und Betriebsdiode vermischen:** Eine Freilauf- oder Schutzdiode kann im Normalzustand sperren und trotzdem für den Fehler- oder Abschaltfall entscheidend sein.

## Abgrenzung und verwandte Themen

Dioden und Richtung behandelt das Grundverhalten des Bauteils. Spezialthemen setzen darauf auf:

- **Bauteilkennlinie:** allgemeiner Rahmen für nichtlineare Strom-Spannungs-Zusammenhänge.
- **LED-Vorwiderstand:** konkrete Stromauslegung für Leuchtdioden.
- **Gleichrichtung:** Nutzung der Durchlass- und Sperrrichtung zur Umformung von Wechselspannung.
- **Z-Diode:** definierter Betrieb im Sperr- bzw. Durchbruchbereich zur Spannungsbegrenzung.
- **Schutzdioden und TVS-Dioden:** Ableiten oder Begrenzen gefährlicher Spannungen.
- **Freilaufdiode:** Schutzpfad bei induktiven Lasten.

Die passende Übung zur Kennliniendeutung ist [Diodenkennlinie aus Messwerten deuten](/schlaufuchs-platform/aufgaben/elektrotechnik/bauteile/dioden-und-richtung/kennlinie-aus-messwerten-deuten). Sie nutzt Messwerte einer Reihenschaltung aus Diode und Widerstand und führt von `UR` über `ID` zur Kennlinie und zum spannungsabhängigen Diodenwiderstand.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/elektrotechnik/tasks/dioden_i_01/aufgabe/dioden_i_01.html` und `legacy/selected/elektrotechnik/tasks/dioden_i_01/loesung/dioden_i_01_lsg.html` erweitert. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Erstellungsdatum 30.8.2020. Text, Struktur und fachliche Einordnung wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
