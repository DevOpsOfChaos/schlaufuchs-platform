---
title: "Analogsensor, Spannungsteiler und ADC zusammen denken"
description: "Verstehe, wie Sensor, Spannungsteiler, Referenz und ADC zusammenwirken und warum Messwerte nicht nur vom Code abhängen."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "analogsensor-spannungsteiler-und-adc-zusammen-denken"]
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

Ein ADC liefert keinen „Temperaturwert“ und auch keinen „Lichtwert“. Er liefert zuerst einen digitalen Wert zu einer gemessenen Spannung – bezogen auf eine Referenz. Genau deshalb müssen Sensor, Beschaltung und ADC zusammen gedacht werden.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Der Sensor scheint zu stimmen – die Messung trotzdem nicht</h3><p>Ein NTC oder LDR ist korrekt angeschlossen, aber die ADC-Werte wirken unplausibel. Der Fehler liegt dann oft nicht im Sensor allein, sondern in der Kette aus Sensor, Spannungsteiler und Referenzbezug.</p></div>

## Messkette statt Einzelbauteil

<div class="signal-flow"><div class="flow-node"><strong>Sensor</strong><span>liefert einen spannungsabhängigen Zustand</span></div><div class="flow-arrow">→</div><div class="flow-node"><strong>Beschaltung</strong><span>skaliert und bildet eine Eingangsspannung</span></div><div class="flow-arrow">→</div><div class="flow-node"><strong>ADC</strong><span>wandelt Spannung gegen Referenz in einen Zahlenwert</span></div></div>

## Zwei häufige Denkfehler

<div class="compare-card"><p class="card-kicker">Vergleich</p><h3>Physikalische Größe und ADC-Wert nicht gleichsetzen</h3><div class="compare-grid"><div class="compare-item"><strong>Zu schnell</strong><span>„1023 bedeutet direkt die physikalische Maximalgröße.“</span></div><div class="compare-item"><strong>Ruhiger</strong><span>„1023 bedeutet: Die Eingangsspannung liegt nahe an der gewählten Referenz.“</span></div></div></div>

## Mini-Demo: gleiche Sensorspannung, andere Referenz

```text
Sensor an ADC, Referenz 5,0 V   → kleinerer Rohwert
Sensor an ADC, Referenz 1,1 V   → größerer Rohwert
```

Der Sensor ist derselbe. Was sich ändert, ist die Skala des ADC.

<div class="note-panel"><p><strong>Merke:</strong> Wer analoge Messungen ruhig lesen will, trennt Sensor, Beschaltung, Referenz und ADC-Wert konsequent voneinander.</p></div>

