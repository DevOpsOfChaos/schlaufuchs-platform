---
title: "Strombudget von Mikrocontroller-Schaltungen grob abschätzen"
description: "Verstehe, wie man die Stromaufnahme einer kleinen Mikrocontroller-Schaltung überschlägt, statt nur auf Einzelbauteile zu schauen."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "strombudget-von-mikrocontroller-schaltungen-grob-abschaetzen"]
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

Viele Mikrocontroller-Schaltungen scheitern nicht an einem komplizierten Algorithmus, sondern an einer zu knapp gedachten Versorgung. Ein grobes Strombudget hilft, Schaltungen früh ruhiger zu planen.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Mit jeder Zusatzfunktion wird die Schaltung instabiler</h3><p>Ein Board läuft mit einer LED und einem Sensor problemlos. Sobald Funkmodul und Relais dazukommen, treten Resets oder Spannungsabfälle auf. Genau hier hilft ein Strombudget mehr als bloßes Hoffen.</p></div>

## Drei Ebenen sauber trennen

<div class="visual-grid"><div class="visual-item"><strong>Pin-Grenzen</strong><span>Was darf an einem einzelnen Pin fließen?</span></div><div class="visual-item"><strong>Schaltungs-Gesamtstrom</strong><span>Was ziehen alle Verbraucher zusammen?</span></div><div class="visual-item"><strong>Versorgungsreserve</strong><span>Was kann Netzteil oder Regler mit Reserve stabil liefern?</span></div></div>

## Mini-Demo: Überschlagsdenken statt Schätzgefühl

```text
Mikrocontroller   20 mA
2 LEDs             8 mA
Sensor            12 mA
Funkmodul         80 mA
------------------------
Summe            120 mA
```

Selbst wenn jede Einzelkomponente harmlos wirkt, entsteht zusammen eine relevante Last.

## Dauerlast und Spitze nicht mischen

Ein Funkmodul, ein Relais oder mehrere LEDs können kurzzeitig deutlich mehr ziehen als im Mittel. Deshalb ist „im Durchschnitt passt es“ oft zu knapp gedacht.

<div class="note-panel"><p><strong>Merke:</strong> Ein Strombudget muss nicht milliampergenau sein. Schon eine grobe, aber saubere Lastübersicht verhindert viele Versorgungsfehler.</p></div>

