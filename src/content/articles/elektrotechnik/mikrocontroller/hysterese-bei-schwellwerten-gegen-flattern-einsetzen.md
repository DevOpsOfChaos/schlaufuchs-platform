---
title: "Hysterese bei Schwellwerten gegen Flattern einsetzen"
description: "Verstehe, warum ein einzelner Grenzwert bei verrauschten Messsignalen oft unruhig ist und wie Hysterese stabile Zustandswechsel erzeugt."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "hysterese-bei-schwellwerten-gegen-flattern-einsetzen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller"]
draft: false
---
## Grundidee

Ein einzelner Grenzwert klingt zunächst einfach: Oberhalb davon ist an, darunter aus. In echten Messsystemen liegt das Signal aber oft nicht still, sondern schwankt in der Nähe des Grenzwerts. Genau dann wird Hysterese wichtig.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Die LED oder das Relais flattert am Schwellwert</h3><p>Ein ADC misst eine Temperatur oder Helligkeit. Liegt der Wert knapp am Grenzpunkt, schaltet die Ausgabe ständig hin und her. Das Problem ist dann oft nicht „zu wenig Genauigkeit“, sondern eine zu grobe Schwellwertlogik.</p></div>

## Ein Schwellwert gegen zwei Schwellwerte

<div class="compare-card"><p class="card-kicker">Grundidee</p><h3>Richtungen bewusst trennen</h3><div class="compare-grid"><div class="compare-item"><strong>Einzelner Grenzwert</strong><span>Ein und aus reagieren am selben Punkt – das fördert Flattern.</span></div><div class="compare-item"><strong>Hysterese</strong><span>Einschalten und Ausschalten haben bewusst verschiedene Schwellen.</span></div></div></div>

## Mini-Demo: ruhige Zustandswechsel

```text
ohne Hysterese:
  an ab an ab an ab

mit Hysterese:
  erst oberhalb 700 an,
  erst unterhalb 650 wieder aus
```

## Warum das mehr Logik als Messfehler ist

Rauschen oder kleine Schwankungen gehören in vielen realen Signalen dazu. Hysterese verhindert nicht das Rauschen selbst, sondern macht die Zustandsentscheidung robuster.

<div class="note-panel"><p><strong>Merke:</strong> Wenn eine Steuerung am Grenzwert flattert, hilft oft eine ruhigere Entscheidungslogik mehr als bloß ein „genauerer“ Einzelwert.</p></div>

