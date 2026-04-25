---
title: Strombudget von Mikrocontroller-Schaltungen grob abschätzen
description: Verstehe, wie man die Stromaufnahme einer kleinen Mikrocontroller-Schaltung überschlägt, statt nur auf Einzelbauteile zu schauen.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - strombudget-von-mikrocontroller-schaltungen-grob-abschaetzen
learningGoals:
  - Du beschreibst Stromaufnahme als Summe mehrerer Verbraucher in einer Schaltung.
  - Du trennst Pin-Strom, Gesamtstrom und Reserven des Netzteils oder Reglers.
  - Du liest kleine Schaltungen ruhiger über grobe Lastabschätzung statt über Einzelgefühle.
practiceIdeas:
  - Schätze bei einer kleinen Schaltung LED, Sensor, Funkmodul und Mikrocontroller grob zusammen.
  - Trenne Dauerlast und kurzzeitige Lastspitzen.
  - Begründe, warum ein USB-Port oder Spannungsregler nicht nur „irgendwie Strom liefert“.
commonMistakes:
  - Nur den Mikrocontroller selbst zu betrachten, aber nicht die Peripherie.
  - Einzelgrenzen pro Pin mit Gesamtgrenzen der Versorgung zu verwechseln.
  - Zu knapp zu dimensionieren, weil eine Schaltung „im Mittel“ schon passen werde.
keyTakeaways:
  - Ein Strombudget ist eine grobe, aber sehr hilfreiche Sicherheitsabschätzung.
  - Pin-Grenzen, Schaltungs-Gesamtstrom und Versorgungsreserve sind verschiedene Ebenen.
  - Schon eine einfache Überschlagsrechnung verhindert viele Aufbaufehler.
recognizeSignals:
  - Es geht um Netzteil, Spannungsregler, USB-Versorgung oder Gesamtstrom.
  - Mehrere Verbraucher hängen an derselben Schaltung.
  - Eine Schaltung wird warm, instabil oder fällt beim Zuschalten weiterer Lasten aus.
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

