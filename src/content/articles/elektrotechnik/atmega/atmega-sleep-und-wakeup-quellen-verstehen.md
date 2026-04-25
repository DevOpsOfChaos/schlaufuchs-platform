---
title: ATmega – Sleep und Wake-up-Quellen verstehen
description: Verstehe, warum Schlafmodi am AVR nur zusammen mit passenden Weckquellen sinnvoll geplant werden können.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-reaktivitaet
  - atmega-sleep-und-wakeup-quellen-verstehen
learningGoals:
  - Du erklärst die Grundidee von Sleep und Wake-up-Quellen am AVR.
  - Du beschreibst Energiesparen nicht nur als „schlafen“, sondern als Zusammenspiel aus Ruhemodus und Rückkehrweg.
  - Du liest einen Schlafmodus immer zusammen mit der Frage, wodurch das System wieder reagieren darf.
practiceIdeas:
  - Vergleiche verschiedene Weckquellen wie Taster, Watchdog oder Timer.
  - Prüfe Sleep-Fälle immer zusammen mit dem vorgesehenen Rückkehrsignal.
  - Lies Energiesparen nicht nur als Abschalten, sondern als geplante Reaktivierung.
commonMistakes:
  - Zu denken, Sleep sei allein schon das ganze Konzept.
  - Einen Schlafmodus zu wählen, ohne die Weckquelle mitzudenken.
  - Wake-up und Reset gleichzusetzen.
keyTakeaways:
  - Ein Sleep-Modus ist nur zusammen mit einer passenden Wake-up-Quelle sinnvoll.
  - Energiesparen und Reaktivierung gehören als Paar zusammen.
  - Wake-up ist nicht automatisch dasselbe wie ein Neustart.
recognizeSignals:
  - Es geht um Sleep-Modi, Energiesparen oder geplante Reaktivierung am AVR.
  - Du sollst erklären, wodurch ein Controller aus dem Ruhemodus zurückkehrt.
  - In Aufgaben wird zwischen Schlafzustand und Rückkehrsignal vermittelt.
selfCheckPoints:
  - Kann ich Sleep und Wake-up als zusammengehöriges Konzept erklären?
  - Kann ich Timer, Watchdog oder externe Ereignisse als Weckquelle einordnen?
  - Kann ich Wake-up und Reset fachlich sauber trennen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - sleep
  - wakeup
level: mittel
draft: false
---

## Grundidee

Ein AVR schläft nicht einfach nur „für Stromsparen“. Jeder Sleep-Modus ist nur dann sinnvoll, wenn auch klar ist, **wodurch der Controller wieder aufwachen darf**. Genau deshalb gehören **Sleep** und **Wake-up-Quelle** didaktisch zusammen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein batteriebetriebenes Messgerät</h3>
  <p>Das Gerät soll lange sparen, aber trotzdem reagieren können – etwa auf einen Taster, auf einen Watchdog-Zeitpunkt oder auf ein anderes Ereignis. Die eigentliche Frage lautet also nicht nur: „In welchen Schlafmodus gehen wir?“, sondern auch: „Welches Signal darf uns wieder zurückholen?“</p>
</div>

## Schlafen ohne Rückkehrweg ist kein Konzept

<div class="compare-card">
  <p class="card-kicker">Planungspaar</p>
  <h3>Ruhemodus und Weckquelle müssen zusammen gedacht werden</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sleep</strong>
      <span>Reduziert Aktivität und Energieverbrauch.</span>
    </div>
    <div class="compare-item">
      <strong>Wake-up-Quelle</strong>
      <span>Legt fest, durch welches Ereignis das System wieder reagieren darf.</span>
    </div>
  </div>
</div>

## Typische Wake-up-Quellen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Externer Taster oder Interrupt</strong>
    <span>Ein äußeres Ereignis holt den AVR zurück.</span>
  </div>
  <div class="visual-item">
    <strong>Timer oder Watchdog</strong>
    <span>Ein zeitlich geplantes Ereignis weckt das System nach einer Wartephase.</span>
  </div>
  <div class="visual-item">
    <strong>Andere Peripherieereignisse</strong>
    <span>Je nach Aufbau kann auch ein internes Ereignis als Rückkehrsignal dienen.</span>
  </div>
</div>

## Das ruhige Denkbild

<div class="figure-card">
  <p class="card-kicker">Systembild</p>
  <h3>Sleep ist die halbe Geschichte – Wake-up die andere Hälfte</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Aktivbetrieb</strong><span>Der AVR arbeitet normal.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Sleep-Modus</strong><span>Aktivität und Energieverbrauch werden reduziert.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Wake-up-Quelle</strong><span>Ein Taster, Timer oder Watchdog löst die Rückkehr aus.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Reaktivierung</strong><span>Das System arbeitet wieder weiter.</span></div>
  </div>
</div>

## Wake-up ist nicht dasselbe wie Reset

Das ist eine wichtige Trennkante. Ein **Wake-up** holt den AVR aus einem Ruhemodus zurück. Ein **Reset** startet das System neu. Beides kann nach außen wie „jetzt lebt der Controller wieder“ wirken, ist fachlich aber nicht dieselbe Geschichte.

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„Sleep spart Strom, also passt das schon“</h3>
    <p>Nein. Ohne passende Weckquelle ist der Ruhemodus nicht sinnvoll geplant.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„Wake-up heißt Neustart“</h3>
    <p>Nein. Wake-up bedeutet Rückkehr aus dem Schlaf, nicht automatisch Reset.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„Die Weckquelle ist nur Nebensache“</h3>
    <p>Nein. Sie entscheidet mit darüber, wie gut der Schlafmodus praktisch überhaupt nutzbar ist.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Ich will Energie sparen                  → Sleep-Modus planen
Ich will trotzdem wieder reagieren       → Wake-up-Quelle festlegen
Ich brauche keinen Neustart              → Wake-up ≠ Reset</code></pre>

## Eine ruhige Prüfstrategie

1. Warum soll das System schlafen?
2. Wodurch darf es wieder aufwachen?
3. Passt diese Weckquelle zum gewählten Verhalten?
4. Erst danach den Sleep-Fall bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Sleep am AVR ist kein Einzelthema. Er wird erst zusammen mit einer passenden Wake-up-Quelle zu einem sauberen Konzept.</p>
</div>
