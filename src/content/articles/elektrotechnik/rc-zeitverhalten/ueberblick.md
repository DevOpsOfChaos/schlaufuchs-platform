---
title: "RC-Zeitverhalten"
description: "Allgemeiner Überblick über Widerstand-Kondensator-Schaltungen, Ladeverhalten und Zeitkonstanten."
subject: "elektrotechnik"
section: "Grundlagen"
topicPath: ["rc-zeitverhalten", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Grundlagen"]
draft: false
---
# RC-Zeitverhalten

![Schaubild zum RC-Zeitverhalten.](/schlaufuchs-platform/images/overviews/v149/rc-zeitverhalten.svg)

*Das Schaubild zeigt Laden, Entladen und Zeitkonstante eines RC-Glieds.*



RC-Zeitverhalten beschreibt das zeitliche Laden und Entladen eines Kondensators über einen Widerstand. Es zeigt, dass elektrische Zustände nicht immer schlagartig wechseln, sondern abhängig von Bauteilwerten eine charakteristische Verzögerung besitzen.

## Bedeutung

Die zentrale Größe ist die Zeitkonstante. Sie hängt vom Widerstand und der Kapazität ab und beschreibt, wie schnell sich die Kondensatorspannung einem neuen Endwert annähert. Das Verhalten ist typisch exponentiell und nähert sich dem Endzustand nur schrittweise.

## Typische Teilaspekte

- **Laden:** Beim Laden steigt die Kondensatorspannung allmählich in Richtung Versorgungsspannung.
- **Entladen:** Beim Entladen fällt die Spannung allmählich gegen null oder gegen ein neues Potential.
- **Zeitkonstante:** Die Zeitkonstante ist ein Maß für die Geschwindigkeit der Änderung.
- **Filterwirkung:** RC-Schaltungen können schnelle Änderungen dämpfen und langsame Änderungen passieren lassen.

## Beispiel

Ein Tastereingang mit Kondensator kann kurze Prellimpulse glätten. Auch einfache Tiefpassfilter, Einschaltverzögerungen und Reset-Schaltungen nutzen RC-Zeitverhalten.

## Abgrenzung

Ein Kondensator ist keine Batterie im üblichen Sinn. Er speichert elektrische Ladung, aber sein Spannungsverlauf hängt stark von Schaltung, Strompfad und Last ab.

## Häufige Missverständnisse

Ein häufiger Irrtum ist die Annahme, dass ein Kondensator nach einer Zeitkonstante vollständig geladen sei. Tatsächlich ist er dann nur zu einem großen Teil in Richtung Endwert gelaufen; vollständige Annäherung ist ein Grenzprozess.

## Einordnung im Gesamtzusammenhang

RC-Zeitverhalten verbindet Bauteilgrundlagen mit Entprellung, Analogfiltern, Reset-Schaltungen, Signalformung und Messungen am Oszilloskop.
