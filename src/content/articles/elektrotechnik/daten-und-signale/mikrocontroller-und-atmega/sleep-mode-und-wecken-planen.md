---
title: "Mikrocontroller – Sleep-Mode und Wecken planen"
description: "Lerne, warum Energiesparen nicht nur „Sleep einschalten“ bedeutet, sondern ein bewusstes Konzept aus Schlafmodus, Weckquelle und Peripherie braucht."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - sleep-mode-und-wecken-planen
learningGoals:
  - "Du erklärst Sleep-Mode als geplanten Betriebszustand und nicht als Pause ohne Konzept."
  - "Du beschreibst, warum Weckquellen vor dem Schlafen sauber eingerichtet sein müssen."
  - "Du unterscheidest CPU-Schlaf, abgeschaltete Peripherie und tatsächlichen Stromverbrauch."
practiceIdeas:
  - "Plane für einen Sensor, wann er messen, senden und schlafen soll."
  - "Vergleiche Idle und Power-down auf konzeptioneller Ebene."
  - "Notiere, welche Peripherie im Schlaf noch laufen muss."
commonMistakes:
  - "Sleep-Mode einzuschalten, ohne eine sichere Weckquelle zu haben."
  - "Nur die CPU schlafen zu legen und stromhungrige Peripherie aktiv zu lassen."
  - "Nach dem Aufwachen nicht zu prüfen, warum der Controller geweckt wurde."
keyTakeaways:
  - "Sleep ist ein eigener Zustand im Ablaufplan."
  - "Weckquelle und Peripherie entscheiden, ob Energiesparen wirklich funktioniert."
  - "Ein gutes Energiesparkonzept denkt Messen, Rechnen, Senden und Schlafen zusammen."
recognizeSignals:
  - "Es geht um Batterie, Stromverbrauch, Power-down, Wake-up oder externe Interrupts."
  - "Ein Gerät soll nur gelegentlich messen oder senden."
  - "Eine Aufgabe fragt nach Weckquelle und aktiv bleibender Peripherie."
selfCheckPoints:
  - "Kann ich nennen, wodurch der Controller wieder aufwacht?"
  - "Kann ich erklären, welche Teile im Schlaf noch Strom verbrauchen?"
  - "Kann ich Sleep als Zustandsmaschine statt als delay-Ersatz lesen?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - sleep-mode
  - energie
  - interrupt
  - batterie
level: mittel
draft: false
---

## Grundidee

Sleep-Mode spart nur dann sinnvoll Energie, wenn klar ist, wann der Mikrocontroller schlafen darf und wodurch er wieder aufwacht. Der Schlafmodus ist also Teil der Ablaufplanung, nicht nur ein einzelner Befehl.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Batteriesensor soll alle zehn Minuten messen</h3>
  <p>Der Controller muss nicht ständig wach bleiben. Er kann schlafen, durch Timer oder externes Ereignis geweckt werden, kurz messen, Daten senden und wieder schlafen. Entscheidend ist, dass die Weckquelle zuverlässig eingerichtet ist und unnötige Peripherie wirklich abgeschaltet wird.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>Schlafmodus</strong>
    <span>Bestimmt, welche Teile des Controllers angehalten werden.</span>
  </div>
  <div class="visual-item">
    <strong>Weckquelle</strong>
    <span>Legt fest, welches Ereignis den Controller wieder aktiviert.</span>
  </div>
  <div class="visual-item">
    <strong>Peripherie</strong>
    <span>Sensoren, Regler, LEDs und Funkmodule können den Stromverbrauch dominieren.</span>
  </div>
</div>

## Mini-Demo: Energiesparen als Zyklus

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Messen, senden, schlafen, wecken</h3>
  <pre><code>Wach: Sensor einschalten
Messen: Wert erfassen
Senden: Daten kurz übertragen
Schlafen: Peripherie aus, Weckquelle aktiv
Wecken: Timer oder Interrupt</code></pre>
  <p>Der größte Fehler ist, nur den Controller schlafen zu legen, während Sensor, LED oder Funkmodul weiter Strom verbrauchen.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Sleep ist kein delay mit anderem Namen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Ich ersetze lange Wartezeiten einfach durch Sleep und bin fertig.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Ich plane Schlafzustand, Weckquelle und Peripherie gemeinsam als Ablauf.“</span>
    </div>
  </div>
</div>

## Praxisraster

Energiesparen beginnt mit einer Zustandsfrage: Was muss in welchem Zustand wirklich aktiv sein?

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Wann braucht das Gerät Rechenleistung und wann nicht?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Welche Weckquelle funktioniert im gewählten Schlafmodus?</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Schalte unnötige Peripherie bewusst ab oder versorge sie getrennt.</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Prüfe nach dem Wecken, welches Ereignis den nächsten Zustand auslöst.</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite erklärt die Ablaufidee von Sleep und Wake-up. Sie ersetzt keine vollständige Low-Power-Datenblattanleitung. Externe Interrupts, Timer und Zustandsmaschinen sind Nachbarseiten.

<div class="note-panel">
  <p><strong>Merke:</strong> Sleep-Mode spart Energie nur als durchdachter Zustand mit passender Weckquelle und ruhiger Peripherieplanung.</p>
</div>
