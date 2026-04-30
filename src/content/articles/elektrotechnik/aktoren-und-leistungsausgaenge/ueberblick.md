---
title: "Aktoren und Leistungsausgänge"
description: "Allgemeiner Überblick über Aktoren, Lasten und die elektrische Ansteuerung durch Mikrocontroller."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["aktoren-und-leistungsausgaenge", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# Aktoren und Leistungsausgänge

![Schaubild zu Aktoren und Leistungsausgängen.](/schlaufuchs-platform/images/overviews/v149/aktoren-und-leistungsausgaenge.svg)

*Das Schaubild ordnet Steuersignal, Treiber und Lastwirkung ein.*


Aktoren sind Bauteile, die elektrische Signale in eine Wirkung umsetzen. Dazu gehören LEDs, Relais, Motoren, Summer, Ventile, Heizungen oder Displays.

## Bedeutung

Ein Mikrocontroller-Pin kann meist nur kleine Ströme schalten. Viele Aktoren benötigen deshalb Treiberstufen, Transistoren, MOSFETs, Relais oder spezielle Treiber-ICs. Entscheidend ist, dass Signalebene und Leistungsebene getrennt betrachtet werden.

## Typische Teilaspekte

- **Lastart:** Ohmsche, induktive und kapazitive Lasten verhalten sich beim Schalten unterschiedlich.
- **Treiber:** Transistoren und MOSFETs verstärken nicht die Spannung im einfachen Sinn, sondern schalten größere Ströme.
- **Schutz:** Induktive Lasten benötigen Freilaufpfade oder andere Schutzmaßnahmen.
- **Versorgung:** Aktoren können eigene Spannungs- und Stromversorgungen benötigen.

## Beispiel

Ein Motor wird nicht direkt an einen GPIO-Pin angeschlossen. Der Pin steuert einen Transistor oder Treiber, der den Motorstrom aus einer passenden Versorgung schaltet.

## Abgrenzung

Ein Ausgangssignal ist nicht automatisch ein Leistungsausgang. High und Low beschreiben zunächst logische Pegel, nicht die Fähigkeit, eine beliebige Last zu betreiben.

## Häufige Missverständnisse

Ein häufiger Fehler ist das direkte Anschließen großer Lasten an Mikrocontroller-Pins. Das kann zu Reset-Problemen, beschädigten Pins oder instabiler Versorgung führen.

## Einordnung im Gesamtzusammenhang

Aktoren verbinden digitale Steuerung mit sichtbarer oder mechanischer Wirkung und gehören deshalb zu den wichtigsten Schnittstellen zwischen Software und Hardware.
