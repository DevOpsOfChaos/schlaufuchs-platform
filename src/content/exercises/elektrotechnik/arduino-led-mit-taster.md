---
title: Arduino-LED mit Taster
description: Diese neu formulierte Bestandsaufgabe verbindet eine klassische Arduino-Grundschaltung mit ruhiger Logik und klarer Beobachtung.
subject: elektrotechnik
section: Mikrocontroller
level: einfach
draft: false
---

## Arbeitsauftrag

Diese Aufgabe greift eine typische klassische Einstiegssituation auf: Eine LED soll über einen Taster gesteuert werden. Ziel ist nicht nur Code, sondern auch das Verständnis der Grundidee hinter Ein- und Ausgängen.

## Ausgangssituation

Ein Arduino liest einen Taster ein. Wird der Taster gedrückt, soll eine LED leuchten. Wird der Taster nicht gedrückt, soll die LED aus sein.

## Aufgabe 1

Erkläre kurz:

1. Welche Rolle der Taster in dieser Schaltung hat.
2. Welche Rolle die LED hat.
3. Warum der Arduino hier sowohl Eingänge als auch Ausgänge verwendet.

## Aufgabe 2

Schreibe einen einfachen Arduino-Code, der:

- einen Eingangspin für den Taster definiert,
- einen Ausgangspin für die LED definiert,
- den Tasterzustand im `loop()` liest,
- die LED entsprechend ein- oder ausschaltet.

## Aufgabe 3

Verwende dabei sichtbar:

- `pinMode`,
- `digitalRead`,
- `digitalWrite`,
- eine `if`-Abfrage.

## Aufgabe 4

Erkläre in eigenen Worten:

1. Was im Programm fortlaufend im `loop()` passiert.
2. Warum die LED nur dann leuchten soll, wenn ein bestimmter Eingangszustand erkannt wird.

## Aufgabe 5

Beschreibe einen einfachen Praxistest:

- Was erwartest du, wenn der Taster gedrückt wird?
- Was erwartest du, wenn der Taster losgelassen wird?
- Woran würdest du erkennen, dass Verdrahtung oder Logik nicht stimmen?

## Hinweise

- Ein Mikrocontroller liest Zustände ein und reagiert darauf mit Ausgaben.
- Ein Taster ist ein klassischer digitaler Eingang.
- Eine LED ist ein klassischer digitaler Ausgang.
- Auch eine einfache Bestandsaufgabe wird besser, wenn Beobachtung und Erklärung mitgedacht werden.

## Selbstkontrolle

Diese Punkte sollten klar sein:

- Der Taster ist der Eingang.
- Die LED ist der Ausgang.
- Im `loop()` wird fortlaufend gelesen und reagiert.
