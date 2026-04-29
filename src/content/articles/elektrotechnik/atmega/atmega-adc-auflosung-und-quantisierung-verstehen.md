---
title: "ATmega – ADC-Auflösung und Quantisierung verstehen"
description: "Verstehe, warum der AVR eine analoge Spannung nur stufig erfassen kann und wie Referenzspannung, Bitzahl und Schrittweite zusammenhängen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-auflosung-und-quantisierung-verstehen"]
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

Eine analoge Spannung kann beim AVR nicht unendlich fein gespeichert werden. Der ADC ordnet den Eingangswert stattdessen einer **endlichen Zahl von Stufen** zu. Genau dieser Übergang von einer kontinuierlichen Spannung zu einem stufigen Zahlenwert heißt **Quantisierung**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>1,001 Volt und 1,003 Volt können denselben Messwert liefern</h3>
  <p>Wenn zwei Spannungen innerhalb derselben ADC-Stufe liegen, erscheint am Ende derselbe Digitalwert. Dann ist nicht „der ADC kaputt“, sondern die Quantisierung arbeitet genau so, wie sie arbeiten soll.</p>
</div>

## Auflösung heißt: Wie fein ist das Stufenraster?

Ein 10-Bit-ADC kann deutlich mehr Stufen unterscheiden als ein 8-Bit-ADC. Trotzdem reicht die Bitzahl allein nicht aus, um die praktische Feinheit zu verstehen.

<div class="compare-card">
  <p class="card-kicker">Zwei Größen gehören zusammen</p>
  <h3>Bitzahl und Referenzspannung ergeben gemeinsam die Schrittweite</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Bitzahl</strong>
      <span>Bestimmt, wie viele Stufen grundsätzlich unterschieden werden können.</span>
    </div>
    <div class="compare-item">
      <strong>Referenzspannung</strong>
      <span>Bestimmt, über welchen Spannungsbereich diese Stufen verteilt werden.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleiche Bitzahl, andere Feinheit

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Stufengröße hängt nicht nur am ADC, sondern auch am Referenzbereich</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>10 Bit bei 5 V Referenz</strong></p>
      <p style="margin:0;">Viele Stufen über einen größeren Spannungsbereich verteilt.</p>
      <p style="margin:0.6rem 0 0;">Eine einzelne Stufe deckt grob einen größeren Spannungsabschnitt ab als bei kleinerer Referenz.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>10 Bit bei 1,1 V Referenz</strong></p>
      <p style="margin:0;">Dieselbe Stufenzahl auf kleinerem Spannungsbereich.</p>
      <p style="margin:0.6rem 0 0;">Dadurch wird jede einzelne Stufe feiner.</p>
    </div>
  </div>
</div>

## Ruhige Lesart eines ADC-Werts

Wenn der AVR zum Beispiel den Wert `512` liefert, dann bedeutet das nicht direkt „2,5 V“ oder „genau die halbe Realität“. Fachlich ruhiger ist:

1. Welche Referenzspannung gilt?
2. Wie viele Stufen hat der ADC?
3. In welche Stufe fällt die gemessene Spannung?

## Quantisierung ist keine Schwäche, sondern das Grundprinzip

Der ADC muss eine kontinuierliche Größe in ein endliches Zahlenraster übersetzen. Dass zwei nahe Spannungen manchmal denselben Zahlenwert liefern, ist deshalb kein Sonderfall, sondern Teil des Systems.

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Kontinuierlich messen wäre etwas anderes als stufig zuordnen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Analoge Spannung</strong>
      <span>Kann in Gedanken kontinuierlich viele Zwischenwerte annehmen.</span>
    </div>
    <div class="compare-item">
      <strong>ADC-Ausgabe</strong>
      <span>Ordnet diese Spannung einer endlichen digitalen Stufe zu.</span>
    </div>
  </div>
</div>

## Diese Seite erklärt bewusst die Stufenlogik, nicht den Registerweg

Hier geht es um **Auflösung und Quantisierung**. Die Frage, wie `ADMUX`, `ADCSRA` oder Free-Running-Messung arbeiten, gehört auf die anderen ADC-Seiten. So bleibt getrennt:

- **Auflösung** = Wie fein ist das Raster?
- **Registerlogik** = Wie wird die Messung konfiguriert?

## Eine ruhige Prüfstrategie

1. Welcher Spannungsbereich wird durch die Referenz festgelegt?
2. Wie viele Stufen stehen durch die Bitzahl zur Verfügung?
3. Wie groß ist grob die Schrittweite einer Stufe?
4. Bedeutet ein ADC-Wert „exakte Spannung“ oder nur „Zuordnung zu einer Stufe“?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein ADC-Wert ist kein perfektes Abbild einer analogen Spannung, sondern die digitale Zuordnung zu einer Stufe im Messbereich.</p>
</div>
