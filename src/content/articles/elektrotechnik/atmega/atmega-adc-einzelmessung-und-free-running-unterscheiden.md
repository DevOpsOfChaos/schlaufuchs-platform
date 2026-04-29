---
title: "ATmega – ADC-Einzelmessung und Free-Running unterscheiden"
description: "Verstehe, warum der AVR Analogwerte entweder einzeln auf Anforderung oder fortlaufend im Hintergrund messen kann."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-einzelmessung-und-free-running-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
## Grundidee

Beim ADC des AVR geht es nicht nur darum, **ob** gemessen wird, sondern auch **wie**. Manche Anwendungen brauchen nur ab und zu einen einzelnen Messwert. Andere wollen fortlaufend neue Werte. Genau diese Unterscheidung steckt hinter **Einzelmessung** und **Free-Running**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Temperatur nur abfragen oder ständig nachführen?</h3>
  <p>Ein Gerät zeigt die Temperatur nur auf Knopfdruck an. Ein anderes regelt fortlaufend einen Lüfter. Beide lesen denselben Sensor, brauchen aber nicht dieselbe Messstrategie. Genau deshalb ist ADC nicht nur Registertechnik, sondern auch eine Frage des Messkonzepts.</p>
</div>

## Zwei Strategien statt nur „ADC an“

<div class="compare-card">
  <p class="card-kicker">Messlogik</p>
  <h3>Gezielt messen oder laufend Werte erzeugen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Einzelmessung</strong>
      <span>Der AVR startet eine Messung bewusst, liest einen Wert und beendet diesen Messvorgang wieder.</span>
    </div>
    <div class="compare-item">
      <strong>Free-Running</strong>
      <span>Der ADC erzeugt fortlaufend neue Messwerte hintereinander, ohne dass jede Messung einzeln neu angestoßen werden muss.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe Quelle, andere Messidee

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Der Sensor bleibt gleich, die Strategie ändert sich</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Einzelmessung</strong></p>
      <p style="margin:0;">Taster gedrückt → Messung starten → Wert anzeigen</p>
      <p style="margin:0.6rem 0 0;">Die Messung ist an einen konkreten Anlass gebunden.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Free-Running</strong></p>
      <p style="margin:0;">ADC läuft → ständig neue Werte → Verlauf oder Regelung</p>
      <p style="margin:0.6rem 0 0;">Die Messung ist als fortlaufender Datenstrom gedacht.</p>
    </div>
  </div>
</div>

## Die eigentliche Fachfrage

Die ruhige Leitfrage ist nicht:

> „Welche Registereinstellung ist moderner?“

Sondern:

> „Brauche ich einen einzelnen Wert auf Anforderung oder einen laufenden Strom neuer Messwerte?“

Damit wird das Thema sofort verständlicher.

## Typische Fehlstarts

- Free-Running wird gewählt, obwohl nur selten ein einzelner Messwert gebraucht wird.
- Eine Einzelmessung wird als „zu einfach“ abgewertet, obwohl sie genau zum Problem passt.
- Man liest ADC-Code nur als Registerfolge und nicht als Messstrategie.

## Diagnose-Raster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Anlass prüfen</strong>
    <span>Wann soll überhaupt gemessen werden?</span>
  </div>
  <div class="step-item">
    <strong>2. Einzelwert oder Verlauf?</strong>
    <span>Reicht ein gezielter Messpunkt oder werden ständig neue Werte gebraucht?</span>
  </div>
  <div class="step-item">
    <strong>3. Folgeaufgabe prüfen</strong>
    <span>Geht es eher um Anzeigen auf Knopfdruck oder um fortlaufende Regelung und Beobachtung?</span>
  </div>
  <div class="step-item">
    <strong>4. Erst dann Register lesen</strong>
    <span>Die Registerwahl ergibt sich aus der Messidee und nicht umgekehrt.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Einzelmessung und Free-Running sind keine Konkurrenz nach dem Motto „besser oder schlechter“, sondern zwei unterschiedliche Antworten auf zwei unterschiedliche Messprobleme.</p>
</div>
