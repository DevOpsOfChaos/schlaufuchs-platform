---
title: Hysterese bei Schwellwerten gegen Flattern einsetzen
description: Verstehe, warum ein einzelner Grenzwert bei verrauschten Messsignalen oft unruhig ist und wie Hysterese stabile Zustandswechsel erzeugt.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - hysterese-bei-schwellwerten-gegen-flattern-einsetzen
learningGoals:
  - Du erklärst, warum ein einzelner Schwellwert bei verrauschten Signalen zu Flattern führen kann.
  - Du beschreibst Hysterese als zwei getrennte Umschaltschwellen für verschiedene Richtungen.
  - Du liest stabile Zustandswechsel eher als Logikproblem statt nur als Messproblem.
practiceIdeas:
  - Vergleiche eine Lüfter- oder LED-Steuerung mit einem Schwellwert und mit Hysterese.
  - Ordne Einschalt- und Ausschaltschwelle sauber verschiedenen Richtungen zu.
  - Begründe, warum Rauschen nahe am Grenzwert Zustandswechsel auslösen kann.
commonMistakes:
  - Zu denken, ein genauerer einzelner Grenzwert löse Flattern automatisch.
  - Ein- und Ausschaltschwelle gleich zu setzen.
  - Rauschen nur als Sensorfehler zu sehen, nicht als Logikproblem am Grenzwert.
keyTakeaways:
  - Hysterese stabilisiert Zustände in der Nähe eines Grenzwerts.
  - Ein- und Ausschaltschwelle dürfen bewusst verschieden sein.
  - Viele „zitternde“ Schaltungen werden logischer, nicht nur analoger, korrigiert.
recognizeSignals:
  - Es geht um Schwellenwerte, ADC-Werte, Lüfter, Relais oder LEDs mit unruhigem Umschalten.
  - Ein Signal pendelt um einen Grenzwert herum.
  - Eine Steuerung schaltet schnell hin und her, obwohl der Mittelwert fast konstant ist.
selfCheckPoints:
  - Kann ich die technische Hauptfrage dieser Schaltung ruhig benennen?
  - Kann ich Ursache, Wirkung und Schutz- oder Hilfsmaßnahme sauber trennen?
  - Kann ich das Thema auf einen ähnlichen Mikrocontroller-Fall übertragen?
tags:
  - elektrotechnik
  - mikrocontroller
  - embedded
level: mittel
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

