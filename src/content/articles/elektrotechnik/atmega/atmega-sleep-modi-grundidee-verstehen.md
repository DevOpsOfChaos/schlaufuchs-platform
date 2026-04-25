---
title: ATmega – Sleep-Modi als Grundidee verstehen
description: Verstehe, warum ein AVR nicht immer aktiv laufen muss und wie Sleep-Modi Strom sparen, ohne die gesamte Logik aufzugeben.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - robustheit-und-fehlersicherheit
  - atmega-sleep-modi-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von Sleep-Modi am AVR.
  - Du unterscheidest aktives Rechnen und wartendes Schlafen sauber.
  - Du liest Schlafmodi ruhiger als Energiestrategie statt als „nichts tun“.
practiceIdeas:
  - Vergleiche einen ständig laufenden AVR mit einem Controller, der nur bei Bedarf aufwacht.
  - Prüfe, welches Ereignis einen Schlafmodus wieder verlassen lässt.
  - Lies Sleep-Fälle über Aktivität, Energiebedarf und Aufweckquelle.
commonMistakes:
  - Sleep als komplettes Abschalten des Systems zu verstehen.
  - Zu denken, ein Controller müsse ständig voll aktiv bleiben, um korrekt zu arbeiten.
  - Aufweckquelle und Schlafzustand nicht zusammen zu lesen.
keyTakeaways:
  - Sleep-Modi sparen Energie, indem der AVR nicht permanent voll aktiv bleibt.
  - Entscheidend ist immer auch, wodurch der Controller wieder aufwacht.
  - Wer Aktivphase, Wartephase und Aufweckquelle trennt, versteht Schlafmodi deutlich ruhiger.
recognizeSignals:
  - Es geht um Stromsparen, Sleep, Wake-up oder wartende Mikrocontroller.
  - Du sollst erklären, warum ein AVR nicht durchgehend rechnen muss.
  - In Beispielen ist die Aufweckquelle wichtiger als der bloße Modusname.
selfCheckPoints:
  - Kann ich erklären, warum Sleep etwas anderes ist als „kaputt“ oder „aus“?
  - Kann ich eine passende Aufweckquelle mitdenken?
  - Kann ich Energiesparen als geordnete Strategie statt als Stillstand beschreiben?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - sleep
  - avr
level: einfach
draft: false
---

Ein AVR muss nicht immer voll aktiv rechnen. Gerade in batteriebetriebenen oder wartenden Systemen ist die ruhige Leitfrage:

**Muss der Controller jetzt wirklich aktiv arbeiten – oder wartet er nur auf ein Ereignis?**

Genau daraus entsteht die Grundidee von Sleep-Modi.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Sensorknoten misst nur alle paar Sekunden</h3>
  <p>Zwischen zwei Messungen muss der Controller nicht ständig alles weiterlaufen lassen. Er kann in einen Schlafmodus gehen und erst durch einen Timer oder ein äußeres Ereignis wieder aufwachen. So wird sichtbar: Sleep ist kein Ausfall, sondern eine Strategie für geordnetes Energiesparen.</p>
</div>

## Aktive Phase und Wartephase trennen

<div class="compare-card">
  <p class="card-kicker">Energie-Denkbild</p>
  <h3>Rechnen und Warten sind nicht dieselbe Betriebsart</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Aktivphase</strong>
      <span>Der Controller rechnet, verarbeitet Signale oder steuert Ausgänge.</span>
    </div>
    <div class="compare-item">
      <strong>Wartephase</strong>
      <span>Der Controller muss nicht dauernd aktiv bleiben, wenn nur auf das nächste Ereignis gewartet wird.</span>
    </div>
  </div>
</div>

## Mini-Demo: derselbe Ablauf mit Schlafphase

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Arbeiten, schlafen, aufwachen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Messen</strong><span>Der AVR liest Sensorwerte ein.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Speichern oder senden</strong><span>Die Information wird verarbeitet.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Sleep</strong><span>Der Controller spart Energie in der Wartephase.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Wake-up</strong><span>Timer oder externes Ereignis holen ihn zurück.</span></div>
  </div>
</div>

## Die Aufweckquelle ist didaktisch der wichtigste Teil

Ein Sleep-Modus wird erst dann verständlich, wenn du nicht nur fragst **„Wie schläft der AVR?“**, sondern auch:

**Wodurch wacht er wieder auf?**

Erst diese Aufweckquelle macht den Schlafmodus zu einer vollständigen Systemidee. Sonst bleibt nur das vage Bild vom „Controller tut gerade nichts“.

## Sleep ist nicht „aus“

Ein häufiger Denkfehler lautet: „Wenn der Controller schläft, ist er doch praktisch weg.“ Fachlich ruhiger ist:

- Der Controller bleibt Teil des Systems.
- Bestimmte Teile oder Funktionen können weiter relevant sein.
- Ein passendes Ereignis holt ihn wieder in die aktive Phase zurück.

## Eine ruhige Prüfstrategie

1. Gibt es gerade echte Rechenarbeit?
2. Oder wartet das System nur auf das nächste Ereignis?
3. Welche Energie lässt sich in dieser Wartephase sparen?
4. Wodurch wird der AVR wieder aufgeweckt?

<div class="note-panel">
  <p><strong>Merke:</strong> Sleep-Modi bedeuten am AVR nicht „nichts mehr können“, sondern geordnet Energie sparen und auf passende Weise wieder aufwachen.</p>
</div>
