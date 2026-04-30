---
title: "Analog und digital"
description: "Allgemeiner Überblick über analoge und digitale Signale, ihre Unterschiede und typische Übergänge in elektronischen Systemen."
subject: "elektrotechnik"
section: "Signale"
topicPath: ["analog-und-digital", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Signale"]
draft: false
---
# Analog und digital

![Schaubild zum Unterschied zwischen analog und digital.](/schlaufuchs-platform/images/overviews/v149/analog-und-digital.svg)

*Das Schaubild zeigt den Weg von kontinuierlichen zu diskreten Darstellungen.*


Analog und digital beschreiben zwei unterschiedliche Arten, Informationen technisch darzustellen. Ein analoges Signal kann innerhalb eines Bereichs viele Zwischenwerte annehmen, ein digitales Signal wird dagegen in unterscheidbare Zustände eingeteilt.

## Einordnung

Die Unterscheidung erklärt, warum Sensorwerte, Taster, Kommunikationsleitungen und Mikrocontroller-Eingänge unterschiedlich behandelt werden. Zwischen beiden Welten vermitteln Schaltungen wie Komparatoren, ADCs, DACs und Pegelwandler.

## Zentrale Aspekte

- **Signalbereich:** Analoge Signale werden als kontinuierlicher Verlauf betrachtet.
- **Schwellwerte:** Digitale Eingänge entscheiden anhand definierter Pegelbereiche.
- **Wandlung:** ADC und DAC verbinden Messgrößen mit digitaler Verarbeitung.
- **Störungen:** Rauschen und Leitungsfehler wirken sich je nach Signalart unterschiedlich aus.

## Beispiele und Zusammenhang

Ein Mikrocontroller kann einen Taster digital einlesen und gleichzeitig einen Lichtsensor analog über einen ADC messen. Die Software sieht einen Wahr/Falsch-Zustand und einen Zahlenwert, obwohl beide Informationen als elektrische Spannungen entstehen.

## Abgrenzung

Digital bedeutet nicht automatisch störungsfrei, analog nicht automatisch ungenau. Digital vereinfacht die Entscheidung, analog macht feinere Abstufungen sichtbar.

## Häufige Missverständnisse

Häufig wird angenommen, ein digitales Signal springe ideal und ohne Übergangszeit von 0 auf 1.

## Kurz zusammengefasst

- Analog und digital sind zwei Sichtweisen auf Signale.
- Digitale Pegel beruhen auf analogen Spannungen und Schwellwerten.
- Wandlung und Pegeldefinition verbinden beide Welten.
