---
title: "Open-Collector-Ausgänge"
description: "Überblick über Open-Collector- und Open-Drain-Ausgänge als schaltende Ausgänge ohne aktiven High-Treiber."
subject: "elektrotechnik"
section: "Schnittstellen"
topicPath: ["open-collector-ausgaenge", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Schnittstellen"]
draft: false
---
# Open-Collector-Ausgänge

Ein Open-Collector-Ausgang kann eine Leitung aktiv nach Low ziehen, treibt sie aber nicht aktiv nach High. Der High-Pegel entsteht über einen Pull-up.

## Einordnung

Diese Ausgangsart ist nützlich, wenn mehrere Teilnehmer eine Leitung gemeinsam nutzen oder wenn Pegel über einen externen Pull-up angepasst werden. Das Prinzip findet sich auch als Open-Drain bei MOSFET-Ausgängen.

## Zentrale Aspekte

- Der Ausgang schaltet typischerweise gegen Masse.
- Der Pull-up bestimmt High-Pegel und Anstiegszeit.
- Mehrere Ausgänge können eine gemeinsame Leitung nach Low ziehen.
- Zu große Pull-up-Widerstände machen Flanken langsam.

## Beispiele und Zusammenhang

I²C-Leitungen arbeiten mit Open-Drain-Treibern und Pull-ups. Jeder Teilnehmer darf die Leitung auf Low ziehen; High entsteht passiv.

## Abgrenzung

Open-Collector ist kein normaler Push-Pull-Ausgang. Ohne Pull-up bleibt die Leitung undefiniert oder dauerhaft niedrig.

## Häufige Missverständnisse

Zu erwarten, dass ein Open-Collector-Ausgang selbst einen High-Pegel liefert.

## Kurz zusammengefasst

- Open-Collector-Ausgänge treiben aktiv nur eine Richtung.
- Pull-ups sind Teil der Funktion, nicht nur Zubehör.
- Gemeinsame Leitungen werden durch dieses Prinzip möglich.
