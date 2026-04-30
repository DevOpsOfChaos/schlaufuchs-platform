---
title: "Grundlagen: Transistoren und MOSFETs"
description: "Allgemeiner Überblick über Transistoren und MOSFETs als steuerbare Schalter in einfachen Schaltungen."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["bauteile", "transistoren-und-mosfets", "ueberblick", "grundlagen-transistoren-und-mosfets"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Bauteile"]
draft: false
---
## Begriff

Transistoren und MOSFETs werden häufig als **steuerbare Schalter** eingesetzt. Ein kleines Steuersignal kann dabei einen größeren Laststrom beeinflussen. Gerade für Mikrocontroller ist das wichtig, weil Pins nur begrenzte Ströme liefern können.

![Transistor und MOSFET als Schalter](/schlaufuchs-platform/images/overviews/elektrotechnik/transistoren-und-mosfets.svg)

## Warum braucht man Schaltstufen?

Ein Mikrocontrollerpin kann eine LED oft direkt oder über Vorwiderstand ansteuern. Größere Lasten wie Motoren, Relais, LED-Streifen oder Heizungen brauchen aber mehr Strom oder eine andere Spannungsebene. Eine Schaltstufe trennt dann Steuersignal und Lastpfad.

## Grundidee

Bei einer Transistorschaltung muss man drei Dinge unterscheiden:

- das **Steuersignal**,
- den **Laststrompfad**,
- die **Versorgung der Last**.

Erst wenn diese drei Ebenen sauber getrennt werden, lässt sich die Schaltung ruhig prüfen.

## MOSFET als Schalter

Ein MOSFET wird über seine Gate-Source-Spannung gesteuert. Wichtig ist also nicht nur „das Gate hat Spannung“, sondern welche Spannung zwischen Gate und Source anliegt. Außerdem muss der MOSFET zur Last, Spannung und zum gewünschten Strom passen.

## Häufige Missverständnisse

Ein häufiger Fehler ist, das Gate wie einen Laststrompfad zu behandeln. Ein anderer Fehler ist, den Mikrocontrollerpin direkt mit einer Last zu überfordern. Auch fehlende Freilaufdioden bei induktiven Lasten können problematisch sein.

## Abgrenzung

Diese Überblicksseite erklärt das Grundprinzip. Detailseiten können Bipolartransistoren, MOSFET-Typen, High-Side/Low-Side-Schaltungen, Gate-Widerstände oder Schutzbeschaltung behandeln.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Transistor ist in vielen Einstiegsschaltungen vor allem die Grenze zwischen Steuersignal und Laststrom.</p>
</div>
