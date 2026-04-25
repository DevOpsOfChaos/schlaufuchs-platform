---
title: ATmega – Externe Interrupts und Pin-Change-Interrupts verstehen
description: Verstehe, warum es am AVR verschiedene Interruptarten für Eingangssignale gibt und welche Frage jeweils im Vordergrund steht.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-externe-interrupts-und-pin-change-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen externen Interrupts und Pin-Change-Interrupts grundlegend.
  - Du liest Eingangssignale eher über Ereignisart als nur über Registernamen.
  - Du unterscheidest gezielte Ereignisreaktion und allgemeine Pinänderung fachlich sauber.
practiceIdeas:
  - Vergleiche einen Tasterfall mit genauer Flankenauswertung und einen Fall mit bloßer Pegeländerung.
  - Lies kleine AVR-Beispiele zuerst als Ereignisfrage und dann als Vektor oder Registerkonfiguration.
  - Prüfe, ob das System wirklich eine bestimmte Flanke braucht oder nur auf Änderungen reagieren soll.
commonMistakes:
  - Externe Interrupts und Pin-Change-Interrupts als völlig identisch zu betrachten.
  - Zu denken, jeder Eingangswechsel sei automatisch gleich präzise spezifiziert.
  - Nur den Vektornamen zu lernen, aber die Ereignislogik dahinter nicht mitzudenken.
keyTakeaways:
  - Externe Interrupts passen gut zu gezielt beschriebenen Ereignissen wie Flanken oder Pegeln an bestimmten Quellen.
  - Pin-Change-Interrupts reagieren allgemeiner auf Änderungen an überwachten Pins.
  - Wer zuerst die Ereignisfrage klärt, liest die Interruptart deutlich ruhiger.
recognizeSignals:
  - Es geht um INT0, INT1, Pin-Change oder unterschiedliche Eingangsevents.
  - Du sollst erklären, warum nicht jede Eingangssignaländerung dieselbe Art von Interrupt braucht.
  - In Aufgaben wird zwischen genauer Ereignisdefinition und allgemeiner Zustandsänderung unterschieden.
selfCheckPoints:
  - Kann ich gezielte Flankenreaktion und allgemeine Pinänderung trennen?
  - Kann ich erklären, warum die Wahl der Interruptart von der Ereignisfrage abhängt?
  - Kann ich einen Tasterfall fachlich passend einordnen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - interrupt
  - pin-change
level: mittel
draft: false
---

Am AVR gibt es nicht nur „Interrupt für Pin-Ereignisse“, sondern verschiedene Arten von Interruptquellen. Besonders wichtig ist die ruhige Trennung zwischen **externen Interrupts** und **Pin-Change-Interrupts**. Die entscheidende Frage ist dabei: **Brauche ich ein klar definiertes Ereignis oder reicht mir jede Änderung an einem überwachten Pin?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Genau definierte Flanke oder bloße Zustandsänderung?</h3>
  <p>Ein Taster soll eine Reaktion auslösen. In manchen Fällen ist wichtig, ob die fallende oder steigende Flanke erkannt wird. In anderen Fällen reicht die Information: „An diesem Pin hat sich etwas geändert.“ Genau diese Trennung entscheidet darüber, welche Interruptart ruhiger passt.</p>
</div>

## Zwei verschiedene Ereignisfragen

<div class="compare-card">
  <p class="card-kicker">Ereignislogik</p>
  <h3>Präziser Eventtyp oder allgemeine Änderung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Externer Interrupt</strong>
      <span>Passt, wenn ein gezielt beschriebener Pegel oder eine bestimmte Flanke im Vordergrund steht.</span>
    </div>
    <div class="compare-item">
      <strong>Pin-Change-Interrupt</strong>
      <span>Passt, wenn eine Änderung an einem überwachten Pin allgemein als Ereignis genügt.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe Taste, andere Lesart

<pre><code>Fall A: „Reagiere genau auf die fallende Flanke von INT0.“
Fall B: „Merke einfach, dass sich ein überwachter Pin geändert hat.“</code></pre>

Die ruhige Lesart ist:

- Fall A fragt nach einer präzisen Ereignisdefinition,
- Fall B fragt allgemeiner nach einer Zustandsänderung,
- beide Fälle klingen ähnlich, brauchen aber nicht dieselbe Interruptart.

## Nicht nur auf den Namen schauen

Ein häufiger Fehlstart ist, nur die Namen `INT0` oder `PCINT` auswendig zu lernen. Fachlich ruhiger ist zuerst diese Frage:

> Will ich eine bestimmte Flanke oder reicht mir jede erkennbare Änderung?

## Mini-Konsole im Kopf

<pre><code>Brauche ich ein genau beschriebenes Eingangsereignis?
→ eher externer Interrupt
Brauche ich nur die Information „hier hat sich etwas geändert“?
→ eher Pin-Change-Interrupt</code></pre>

## Diese Seite behandelt bewusst die Grundwahl, nicht schon komplette Registerrezepte

Hier geht es um die **ruhige Interrupt-Wahl nach Ereignisart**. Die genaue Registerkonfiguration einzelner Quellen baut darauf auf und gehört in eigene Rezepte oder Vertiefungen.

## Eine ruhige Prüfstrategie

1. Welches Ereignis soll das Programm wirklich erkennen?
2. Reicht eine allgemeine Pinänderung oder ist eine bestimmte Flanke wichtig?
3. Ist der Pin Teil einer allgemeinen Überwachungsgruppe oder einer gezielten Quelle?
4. Erst danach die konkrete AVR-Konfiguration bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Externe Interrupts und Pin-Change-Interrupts sind nicht einfach doppelte Namen. Die Wahl hängt davon ab, ob du ein präzises Eingangsereignis oder nur eine allgemeine Zustandsänderung brauchst.</p>
</div>
