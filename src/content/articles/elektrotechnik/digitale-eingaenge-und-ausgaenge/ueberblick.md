---
title: "Digitale Eingänge und Ausgänge"
description: "Allgemeiner Überblick über digitale Ein- und Ausgänge als Schnittstelle zwischen Mikrocontroller und Außenwelt."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "digitale-eingaenge-und-ausgaenge"
  - "ueberblick"
learningGoals:
  - "Du kennst die Grundidee digitaler Ein- und Ausgänge."
  - "Du kannst Eingänge und Ausgänge als Schnittstellen einordnen."
  - "Du erkennst typische Grenzen digitaler Signale."
practiceIdeas: []
commonMistakes:
  - "Digitale Signale als beliebig genaue Spannungen zu behandeln."
  - "Eingänge, Ausgänge und Versorgungsspannung gedanklich zu vermischen."
keyTakeaways:
  - "Digitale Ein- und Ausgänge verbinden Logiksignale mit realer Hardware."
  - "Ein digitaler Pin kennt Pegelbereiche, Belastungsgrenzen und zeitliches Verhalten."
recognizeSignals:
  - "Es geht um High/Low, Pin-Zustände, Taster, LEDs, Sensoren oder Relais."
selfCheckPoints:
  - "Kann ich erklären, warum ein digitaler Eingang nicht automatisch ein stabiles Signal liefert?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "digitale eingänge"
  - "digitale ausgänge"
draft: false
---

# Digitale Eingänge und Ausgänge
Digitale Eingänge und Ausgänge bilden die einfache, aber zentrale Verbindung zwischen einem Mikrocontroller und seiner Umgebung. Ein Eingang nimmt einen elektrischen Zustand auf, ein Ausgang gibt einen elektrischen Zustand aus. In beiden Fällen wird die reale elektrische Welt auf eine logische Unterscheidung reduziert: meistens `High` oder `Low`.

Diese Unterscheidung wirkt auf den ersten Blick eindeutig. In der Praxis ist sie aber an Spannungsbereiche, Stromgrenzen, Schaltzeiten und Störeinflüsse gebunden. Ein digitaler Pin ist deshalb nicht nur eine abstrakte Variable im Programm, sondern ein elektrischer Anschluss mit klaren Eigenschaften.

## Einordnung

Ein digitaler Eingang wird verwendet, wenn ein Mikrocontroller etwas erkennen soll: einen Tastendruck, den Zustand eines Schalters, ein Signal eines Sensors oder einen Pegel aus einer anderen Schaltung. Der Eingang misst dabei nicht beliebig genau die Spannung, sondern entscheidet anhand definierter Bereiche, ob der Zustand als logisch `0` oder logisch `1` gilt.

Ein digitaler Ausgang wird verwendet, wenn ein Mikrocontroller etwas steuern soll: eine LED, einen Transistor, einen Treibereingang, ein Relaismodul oder ein anderes digitales Bauteil. Der Ausgang stellt einen Pegel bereit, kann aber nur begrenzt Strom liefern oder aufnehmen. Größere Lasten werden deshalb meist über Treiberstufen geschaltet.

## Wichtige Teilaspekte

Zu digitalen Pins gehören mehrere Themen, die häufig getrennt betrachtet werden müssen. Pegel beschreiben, welche Spannungen als High oder Low erkannt werden. Pull-up- und Pull-down-Widerstände sorgen dafür, dass ein Eingang nicht undefiniert schwebt. Entprellung stabilisiert mechanische Schalter. Register und Bitmasken ermöglichen die gezielte Konfiguration einzelner Pins. Zeitliches Verhalten entscheidet darüber, ob ein Signal sicher gelesen oder ausgegeben werden kann.

## Beispiele

Ein Taster an einem Eingang liefert nicht automatisch ein sauberes Signal. Ohne Pull-up oder Pull-down kann der Pin unbestimmt sein. Beim Schalten kann der Kontakt außerdem prellen, also in kurzer Zeit mehrmals wechseln. Eine LED an einem Ausgang benötigt dagegen einen geeigneten Vorwiderstand und darf den Pin nicht überlasten.

## Häufige Missverständnisse

Ein häufiger Fehler ist die Annahme, dass digitale Signale perfekt und sofort stabil sind. In Wirklichkeit liegen sie in einer analogen Umgebung. Spannung, Strom, Leitungslänge, Kontaktqualität und Störungen beeinflussen das Verhalten. Ebenso falsch ist die Vorstellung, ein Ausgang könne jede Last direkt schalten.

## Kurz zusammengefasst

Digitale Eingänge und Ausgänge sind einfache logische Schnittstellen mit realen elektrischen Grenzen. Wer sie zuverlässig nutzt, betrachtet Logik, Pegel, Strombelastung, Stabilisierung und Timing gemeinsam.
