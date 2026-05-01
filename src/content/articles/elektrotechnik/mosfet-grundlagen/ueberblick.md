---
title: "MOSFET-Grundlagen"
description: "Referenz zu MOSFETs als spannungsgesteuerte Halbleiterschalter: Anschlüsse, Kennlinie, Gate-Ansteuerung, Schaltmodelle und typische Fehler."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["mosfet-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Bauteile", "mosfet", "halbleiter", "schalter"]
draft: false
---
# MOSFET-Grundlagen

Ein MOSFET ist ein Feldeffekttransistor mit isoliertem Gate. In vielen Schaltungen wird er als spannungsgesteuerter Halbleiterschalter eingesetzt: Die Spannung zwischen Gate und Source steuert, wie gut die Strecke zwischen Drain und Source leitet.

## Definition und Grundidee

MOSFET steht für **Metal Oxide Semiconductor Field Effect Transistor**. Das Gate ist durch eine isolierende Oxidschicht vom leitenden Kanal getrennt. Deshalb fließt im statischen Zustand fast kein Gate-Strom. Beim Umschalten muss das Gate aber geladen oder entladen werden, weil es elektrisch wie eine kleine Kapazität wirkt.

Als Schalter betrachtet trennt der MOSFET zwei Rollen:

- **Steuerseite:** Gate gegen Source. Entscheidend ist die Gate-Source-Spannung `UGS`.
- **Lastseite:** Drain-Source-Strecke. Dort fließen Drainstrom `ID` und Laststrom.

Diese Trennung ist der Kern des Bauteils. Das Gate ist nicht der Weg für den Laststrom. Es legt nur den Zustand des leitenden Kanals fest.

## Einordnung

MOSFETs gehören zu den Halbleiterschaltern. Sie sind besonders wichtig, wenn Mikrocontroller, Logikbausteine oder kleine Treiber größere Lasten schalten sollen: LEDs, Relais, Motoren, Magnetventile, Heizungen oder Leistungsstufen.

Ein idealer Schalter wäre im ausgeschalteten Zustand vollständig offen und im eingeschalteten Zustand widerstandslos. Ein realer MOSFET erreicht das nicht. Er hat Grenzwerte für Spannung, Strom, Gate-Spannung, Verlustleistung, Temperatur, Schaltgeschwindigkeit und Body-Diode. Eine brauchbare MOSFET-Schaltung wird deshalb nicht nur nach dem Symbol, sondern nach Datenblattwerten und Strompfaden beurteilt.

## Zentrale Begriffe

- **Gate `G`:** Steuereingang. Die Gate-Ladung bestimmt beim Umschalten das dynamische Verhalten.
- **Source `S`:** Bezugspunkt für die Gate-Source-Spannung. Bei einem N-Kanal-Low-Side-Schalter liegt Source meist an Masse.
- **Drain `D`:** Anschluss der Lastseite, über den der geschaltete Strom typischerweise in den MOSFET hineinläuft.
- **Body-Diode:** parasitäre Diode im MOSFET. Sie kann bei falscher Polung oder ungeeigneter Schaltung ungewollte Strompfade ermöglichen.
- **`UGS`:** Gate-Source-Spannung. Sie steuert den Kanal; ein Gate-Pegel ist nur relativ zur Source aussagekräftig.
- **`UDS`:** Drain-Source-Spannung. Im leitenden Zustand soll sie bei Leistungsschaltern möglichst klein sein.
- **`ID`:** Drainstrom. Er muss zu Last, Temperatur, Kühlung und Betriebsart passen.
- **`RDS(on)`:** Einschaltwiderstand im leitenden Zustand. Er ist nur für angegebene `UGS`, Temperatur und Messbedingungen gültig.
- **Schwellspannung:** Gate-Source-Spannung, ab der ein kleiner definierter Strom messbar wird. Sie ist nicht die Spannung für einen vollständig eingeschalteten Leistungsschalter.

## N-Kanal und P-Kanal

Bei MOSFETs unterscheidet man unter anderem N-Kanal- und P-Kanal-Typen. Zusätzlich gibt es Anreicherungs- und Verarmungstypen. In einfachen Schaltanwendungen sind Anreicherungstypen besonders häufig, weil sie ohne passende Gate-Source-Spannung sperren.

- **N-Kanal-MOSFET:** Wird leitend, wenn `UGS` ausreichend positiv ist. Er eignet sich besonders einfach als Low-Side-Schalter.
- **P-Kanal-MOSFET:** Wird leitend, wenn das Gate gegenüber der Source ausreichend negativer wird. Er kann für High-Side-Schaltungen nützlich sein, ist aber in der Ansteuerung nicht einfach "ein N-Kanal-MOSFET anders herum".

Die alte Abkürzung "PMOS" oder "NMOS" reicht nicht zur Bauteilauswahl. Entscheidend sind konkrete Datenblattwerte: zulässige `UDS`, zulässiger `ID`, `RDS(on)` bei vorhandener Gate-Spannung, Gate-Ladung, Verlustleistung und Temperaturbereich.

## Low-Side- und High-Side-Schalter

Bei einem **Low-Side-Schalter** liegt die Last an der positiven Versorgung. Der MOSFET schaltet die Verbindung der Last nach Masse. Mit einem N-Kanal-MOSFET ist diese Schaltung gut verständlich, weil Source nahe an Masse liegt und `UGS` direkt aus einem Logikpegel entstehen kann.

```text
+ Versorgung -- Last -- Drain MOSFET Source -- GND
                         Gate: Steuersignal gegen Source
```

Bei einem **High-Side-Schalter** liegt der Schalter zwischen Versorgung und Last. Die Last bleibt auf der anderen Seite an Masse. Diese Lage ist oft sinnvoll, aber die Gate-Ansteuerung ist anspruchsvoller: Source bewegt sich mit dem Lastknoten, und `UGS` muss trotzdem im zulässigen und wirksamen Bereich bleiben.

## Kennlinie, Schaltermodell und reale Grenzen

Für das Schaltermodell reichen drei Zustände als erste Näherung:

- **Sperrend:** Die Drain-Source-Strecke ist hochohmig. Es bleibt aber ein Leckstrom und eine zulässige Sperrspannung.
- **Übergangsbereich:** Mit steigender `UGS` bildet sich ein Kanal. `ID`, `UDS` und Verlustleistung können ungünstig zusammenfallen.
- **Leitend:** Die Drain-Source-Strecke verhält sich näherungsweise wie ein kleiner Widerstand `RDS(on)`.

Die Kennlinien aus der legacy Quelle zeigen genau diese Idee: Mit steigender `UGS` sinkt der Drain-Source-Widerstand stark, während der Drainstrom steigt und `UDS` kleiner wird. Ein dort gezeigter Simulationspunkt um `UGS = 2,5 V` gehört aber zur konkreten Simulation, nicht zu jedem MOSFET. In der Praxis muss im Datenblatt stehen, bei welcher Gate-Source-Spannung `RDS(on)` spezifiziert ist.

Die Verlustleistung im eingeschalteten Zustand lässt sich grob mit

```text
P = ID^2 * RDS(on)
```

abschätzen. Beim Umschalten können zusätzliche Verluste auftreten, weil Strom und Spannung kurz gleichzeitig relevant sind. Bei höheren Strömen, PWM, Motoren oder langen Leitungen wird das Schaltverhalten deshalb Teil der Auslegung.

## Gate-Strom und Laststrom

Ein MOSFET-Gate ist kein dauerhafter Strompfad. Im eingeschalteten statischen Zustand fließt idealisiert kein Gate-Strom. Beim Umschalten fließt aber kurz Strom, weil die Gate-Kapazität geladen oder entladen wird. Daraus folgen zwei praktische Punkte:

- Ein Mikrocontroller-Pin kann ein Gate oft direkt langsam schalten, wenn Spannung, Gate-Ladung und Schaltfrequenz passen.
- Bei schnellen Flanken, großer Gate-Ladung oder hohen Leistungen kann ein Gate-Treiber nötig sein.

Der Laststrom fließt nicht durch den Mikrocontroller-Pin. Er fließt durch Versorgung, Last, Drain-Source-Strecke und Rückweg. Wer Gate-Strom und Laststrom vermischt, versteht die Schaltung falsch und dimensioniert sie fast zwangsläufig schlecht.

## Gate-Widerstand, Pull-down und Pull-up

Ein Gate darf nicht undefiniert schweben. Ein schwebendes Gate kann durch Ladung, Störungen oder Einschaltvorgänge einen zufälligen Zustand annehmen.

- **Pull-down am N-Kanal-Low-Side-Schalter:** hält das Gate sicher auf Low, solange kein aktives Steuersignal anliegt.
- **Pull-up bei P-Kanal-High-Side-Schaltern:** kann das Gate im Ruhezustand auf Source-Nähe ziehen und den MOSFET sperren.
- **Gate-Widerstand:** begrenzt den kurzen Umladestrom, dämpft Schwingneigung und beeinflusst die Schaltflanke.

Der Gate-Widerstand ersetzt keinen Pull-down oder Pull-up. Er liegt meist in Reihe zum Steuersignal; der Pull-Widerstand legt dagegen den Ruhezustand fest.

## Induktive Lasten und Freilaufpfad

Relais, Magnetventile, Motoren und Spulen speichern Energie im Magnetfeld. Beim Abschalten kann der Strom nicht schlagartig verschwinden. Fehlt ein Freilaufpfad, steigt die Spannung so lange, bis irgendwo ein Strompfad entsteht: über den MOSFET, über Schutzstrukturen oder als Störung.

Bei einfachen DC-Low-Side-Schaltungen liegt deshalb oft eine Freilaufdiode parallel zur Spule. Sie ist im Normalbetrieb gesperrt und wird beim Abschalten leitend. Bei PWM, schnellen Abschaltzeiten oder H-Brücken können andere Schutz- und Freilaufkonzepte nötig sein; die Grundfrage bleibt aber gleich: Wo fließt der induktive Strom nach dem Abschalten weiter?

## Open-Drain und Open-Collector

Ein einzelner N-Kanal-MOSFET, der eine Leitung nur aktiv nach Masse zieht, bildet das Prinzip eines Open-Drain-Ausgangs. Der High-Pegel entsteht nicht durch den MOSFET, sondern über einen Pull-up-Widerstand. Wenn mehrere Teilnehmer dieselbe Leitung verwenden, kann jeder Teilnehmer Low erzwingen; High liegt nur an, wenn keiner zieht.

Open-Collector ist das verwandte Prinzip mit einem Bipolartransistor. Beide Begriffe beschreiben keine normale Push-Pull-Ausgangsstufe. Ohne Pull-up gibt es keinen definierten High-Pegel.

## Typische Fehler und Missverständnisse

- **Gate als Laststrompfad lesen:** Das Gate steuert den Kanal, trägt aber nicht den Laststrom.
- **Source und Drain gedankenlos vertauschen:** Die Body-Diode und die Bezugsspannung `UGS` machen die Richtung praktisch relevant.
- **Schwellspannung als Einschaltspannung verwenden:** `VGS(th)` zeigt nur einen kleinen Teststrom. Für niedrige Verluste zählt `RDS(on)` bei der real verfügbaren Gate-Spannung.
- **Logic-Level-Aufdruck überschätzen:** Auch ein Logic-Level-MOSFET muss zur Last, Temperatur und Gate-Spannung passen.
- **Gate ohne definierten Ruhezustand lassen:** Ein fehlender Pull-down oder Pull-up kann beim Einschalten oder bei hochohmigen Steuerpins ungewolltes Schalten auslösen.
- **Gate-Widerstand vergessen oder falsch deuten:** Er beeinflusst Umladestrom und Flanken, ersetzt aber keine saubere Pegeldefinition.
- **Keinen Freilaufpfad für induktive Lasten vorsehen:** Die Abschaltenergie sucht sich sonst einen schädlichen Weg.
- **Verlustleistung ignorieren:** Auch kleine Widerstände erzeugen bei hohem Strom relevante Wärme.

## Abgrenzung und verwandte Themen

Diese Seite behandelt MOSFETs als grundlegende Halbleiterschalter. Vertiefungen und Nachbarthemen:

- [Logic-Level-MOSFET](/schlaufuchs-platform/wissen/elektrotechnik/logic-level-mosfet/ueberblick): Auswahl nach realer Gate-Spannung statt nach Schwellspannung.
- [MOSFET-Gate-Ansteuerung](/schlaufuchs-platform/wissen/elektrotechnik/mosfet-gate-ansteuerung/ueberblick): Gate-Ladung, Pull-Widerstände, Gate-Widerstand und Treiber.
- [Transistor als Schalter](/schlaufuchs-platform/wissen/elektrotechnik/transistor-als-schalter/ueberblick): gemeinsamer Rahmen für Bipolartransistor und MOSFET als Schaltelement.
- [Open-Drain und Open-Collector](/schlaufuchs-platform/wissen/elektrotechnik/open-drain-und-open-collector/ueberblick): Ausgangsstufen, Pull-up und gemeinsame Leitungen.
- [Bauteilkennlinie](/schlaufuchs-platform/wissen/elektrotechnik/bauteilkennlinie/ueberblick): Kennlinien als Werkzeug zur Einordnung realer Bauteile.
- [Relais und induktive Lasten](/schlaufuchs-platform/wissen/elektrotechnik/relais-und-induktive-lasten/ueberblick): Freilaufpfad und Schutz beim Abschalten von Spulen.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/elektrotechnik/topic-sources/mosfets/mosfets_allgemein.html` erweitert. Die beobachtete Ursprungs-URL ist `https://c-arts-modelle.de/schlaufuchs_web/elektrotechnik/digitaltechnik_lernmaterial/halbleiterschalter/mosfets/mosfets_allgemein.html`. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Aktualisierungsdatum 12.06.2025. Text, Struktur und fachliche Einordnung wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
