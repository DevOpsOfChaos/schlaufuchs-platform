---
title: "Versorgung und Entkopplung mehrerer Module"
description: "Überblick über gemeinsame Versorgung, lokale Pufferung und gegenseitige Beeinflussung mehrerer Baugruppen."
subject: "elektrotechnik"
section: "Versorgung"
topicPath: ["versorgung-entkopplung-mehrerer-module", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Versorgung"]
draft: false
---
# Versorgung und Entkopplung mehrerer Module

Wenn mehrere Module an einer Versorgung hängen, teilen sie sich Strompfade, Massebezüge und Störungen. Entkopplung sorgt dafür, dass schnelle Lastwechsel lokal abgefangen werden.

## Einordnung

Mikrocontroller, Sensoren, Funkmodule und Motorstufen können sich gegenseitig beeinflussen. Eine saubere Versorgung trennt nicht zwingend alles, macht aber Stromwege und lokale Puffer bewusst.

## Zentrale Aspekte

- Jedes Modul erzeugt eigene Lastwechsel.
- Abblockkondensatoren liegen möglichst nahe an den Versorgungspins.
- Leistungsstufen und empfindliche Sensoren sollten nicht dieselben dünnen Rückwege erzwingen.
- Sternförmige oder klar geführte Versorgungspunkte erleichtern die Fehlersuche.

## Beispiele und Zusammenhang

Ein Funkmodul kann beim Senden kurz viel Strom ziehen. Ohne lokale Pufferung bricht die Versorgung eines danebenliegenden Mikrocontrollers ein.

## Abgrenzung

Entkopplung ist keine Reparatur für ein zu schwaches Netzteil. Sie ergänzt die Versorgungsauslegung, ersetzt sie aber nicht.

## Häufige Missverständnisse

Alle Module einfach parallel anzuschließen und Versorgung nur als ideal konstante Spannung zu betrachten.

## Kurz zusammengefasst

- Mehrere Module teilen sich reale Strompfade.
- Lokale Entkopplung reduziert gegenseitige Störungen.
- Versorgungstopologie ist ein Teil der Signalqualität.
