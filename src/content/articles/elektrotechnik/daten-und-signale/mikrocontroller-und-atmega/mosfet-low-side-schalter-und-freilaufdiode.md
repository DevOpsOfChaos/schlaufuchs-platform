---
title: "Mikrocontroller – MOSFET-Low-Side-Schalter und Freilaufdiode verstehen"
description: "Verstehe, warum Motoren, Relais und größere Lasten nicht direkt am Mikrocontroller-Pin hängen und wie ein Low-Side-Schalter den Pin entlastet."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "mosfet-low-side-schalter-und-freilaufdiode"
learningGoals:
  - "Du erklärst den MOSFET als Schalter zwischen Last und Masse."
  - "Du unterscheidest Signalstrom am Gate und Laststrom durch Motor oder Relais."
  - "Du begründest, warum induktive Lasten eine Freilaufdiode brauchen."
practiceIdeas:
  - "Skizziere Steuerpfad und Lastpfad getrennt."
  - "Prüfe, ob Lastversorgung und Controller eine gemeinsame Masse haben."
  - "Vergleiche LED, Relais und Motor nach Strombedarf."
commonMistakes:
  - "Den Motorstrom direkt aus dem GPIO ziehen zu wollen."
  - "Gate-Signal und Laststrom zu vermischen."
  - "Die Freilaufdiode bei einer Spule zu vergessen."
keyTakeaways:
  - "Der GPIO steuert nur das Gate."
  - "Der MOSFET trägt den größeren Laststrom."
  - "Die Freilaufdiode schützt beim Abschalten induktiver Lasten."
recognizeSignals:
  - "Relais, Motor, Magnetventil oder größere Last tauchen auf."
  - "Ein Pin soll mehr Strom liefern als plausibel ist."
  - "Beim Abschalten treten Reset-Probleme auf."
selfCheckPoints:
  - "Kann ich Steuerpfad und Lastpfad zeigen?"
  - "Kann ich die Freilaufdiode begründen?"
  - "Kann ich gemeinsame Masse erklären?"
level: "mittel"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "mosfet"
  - "transistor"
  - "freilaufdiode"
  - "relais"
  - "motor"
draft: false
---
Ein Mikrocontroller-Pin ist ein Steuersignal, keine Leistungsquelle. Sobald Motor, Relais oder Magnetventil ins Spiel kommen, braucht die Last einen eigenen Strompfad und der Controller nur noch eine kontrollierte Schaltaufgabe.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Pin sagt „einschalten“, der MOSFET trägt die Last</h3>
  <p>Der ATmega setzt ein Gate auf High. Dadurch wird der MOSFET leitend und die Last bekommt ihren Strom aus der Versorgung. Der GPIO selbst liefert dabei nur das Steuersignal.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Sichtmodell</p>
  <h3>Steuersignal und Laststrom getrennt sehen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/mosfet-low-side-schalter.svg" alt="Schematische Darstellung eines Mikrocontrollers, eines MOSFET-Low-Side-Schalters, einer Last und einer Freilaufdiode." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
  <p>Das Bild trennt bewusst den schwachen Steuerpfad vom stärkeren Lastpfad. Genau diese Trennung verhindert viele typische Anfängerfehler.</p>
</div>

## Die drei Fragen der Seite

<div class="visual-grid">
  <div class="visual-item"><strong>GPIO</strong><span>liefert ein Logiksignal für das Gate.</span></div>
  <div class="visual-item"><strong>MOSFET</strong><span>schaltet den Strompfad der Last gegen Masse.</span></div>
  <div class="visual-item"><strong>Freilaufdiode</strong><span>nimmt die Abschaltenergie einer Spule auf.</span></div>
</div>

## Mini-Demo: ruhig statt hektisch lesen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Nicht der Pin treibt den Motor, sondern der Lastpfad</h3>

```text
ATmega-Pin ── Gate
Versorgung ── Last ── MOSFET ── GND
Spule aus  → Freilaufdiode begrenzt Spannungsspitze
```

  <p>Wenn man diese drei Zeilen sauber trennt, wird klar, warum der Mikrocontroller nicht direkt belastet wird.</p>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Steuern ist nicht dasselbe wie Versorgen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Steuersignal</strong><span>kleiner Strom, logische Aussage, kommt vom Mikrocontroller.</span></div>
    <div class="compare-item"><strong>Laststrom</strong><span>größerer Strom, versorgt Motor oder Relais, läuft über die Leistungsstufe.</span></div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Last erkennen</strong><span>Ist es nur eine LED oder bereits eine induktive oder stromhungrige Last?</span></div>
  <div class="step-item"><strong>2. Strompfad zeichnen</strong><span>Wo fließt der reale Laststrom von Plus nach Masse?</span></div>
  <div class="step-item"><strong>3. Schaltelement prüfen</strong><span>Kann der MOSFET mit dem vorhandenen Gate-Pegel sicher schalten?</span></div>
  <div class="step-item"><strong>4. Schutz ergänzen</strong><span>Bei Spulen eine Freilaufdiode oder passende Schutzbeschaltung einplanen.</span></div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite konzentriert sich auf den Schaltpfad. MOSFET-Verlustleistung, Gate-Ladung und Treiber-ICs gehören in eine spätere Vertiefung.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein GPIO darf eine Last steuern, aber nicht automatisch selbst versorgen.</p>
</div>
