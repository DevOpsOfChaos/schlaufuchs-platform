---
title: "Radio, Checkbox und Select unterscheiden"
description: "Verstehe, wie diese Formularelemente unterschiedliche Auswahlmodelle abbilden und warum die sichtbare Eingabeform zur Entscheidungslogik passen sollte."
subject: "web-development"
section: "HTML"
topicPath: ["html", "radio-checkbox-und-select-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Nicht jede Auswahl in einem Formular folgt derselben Logik. Manchmal darf genau eine Option gelten, manchmal mehrere und manchmal gibt es so viele Einträge, dass eine kompakte Liste sinnvoller wirkt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Bestellung mit drei Auswahlarten</h3>
  <p>Die Versandart soll genau einmal gewählt werden. Zusätzliche Benachrichtigungen können mehrfach aktiviert werden. Das Lieferland kommt aus einer langen Liste. Schon daran sieht man: Die sichtbare Auswahlform sollte zur Entscheidungsart passen.</p>
</div>

## Die drei Auswahlmodelle

<div class="visual-grid">
  <div class="visual-item">
    <strong>Radio</strong>
    <span>Genau eine Option aus einer sichtbaren Gruppe.</span>
  </div>
  <div class="visual-item">
    <strong>Checkbox</strong>
    <span>Mehrere Optionen dürfen gleichzeitig aktiv sein.</span>
  </div>
  <div class="visual-item">
    <strong>Select</strong>
    <span>Viele Optionen können kompakt zusammengefasst werden.</span>
  </div>
</div>

## Mini-Demo: gleiche Formularwelt, drei verschiedene Logiken

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was sich hier ändert, ist nicht nur die Darstellung, sondern das Entscheidungsmodell</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Radio – genau eine Versandart</strong></p>
      <div style="display:grid; gap:0.45rem; background:white; padding:0.8rem; border:1px solid #e2e8f0; border-radius:12px;">
        <div>◉ Standard</div>
        <div>○ Express</div>
        <div>○ Abholung</div>
      </div>
      <p style="margin:0.55rem 0 0;">Hier darf nicht alles gleichzeitig gelten.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Checkbox – mehrere Interessen</strong></p>
      <div style="display:grid; gap:0.45rem; background:white; padding:0.8rem; border:1px solid #e2e8f0; border-radius:12px;">
        <div>☑ HTML</div>
        <div>☑ CSS</div>
        <div>☐ JavaScript</div>
      </div>
      <p style="margin:0.55rem 0 0;">Mehrere Häkchen gleichzeitig sind hier fachlich sinnvoll.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Select – lange Länderliste</strong></p>
      <div style="background:white; padding:0.8rem; border:1px solid #e2e8f0; border-radius:12px;">Deutschland ▾</div>
      <p style="margin:0.55rem 0 0;">Viele Optionen müssen nicht alle gleichzeitig sichtbar auf der Seite liegen.</p>
    </div>
  </div>
</div>

## Eine ruhige Entscheidungslogik

<div class="compare-card">
  <p class="card-kicker">Entscheidungshilfe</p>
  <h3>Welche Frage stellt das Formular wirklich?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Genau eine Wahl</strong>
      <span>Dann spricht viel für Radios oder ein Select, je nach Sichtbarkeit und Menge der Optionen.</span>
    </div>
    <div class="compare-item">
      <strong>Mehrere gültige Wahlen</strong>
      <span>Dann sind Checkboxes die ruhigere und fachlich klarere Lösung.</span>
    </div>
    <div class="compare-item">
      <strong>Viele Optionen</strong>
      <span>Dann kann ein Select helfen, die Oberfläche kompakt zu halten.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Darf genau eine Option oder dürfen mehrere gelten?
2. Müssen alle Optionen sofort sichtbar sein?
3. Wie lang ist die Liste?
4. Erst danach an Design und Platzverbrauch denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Formulare zeigen nicht nur Optionen. Sie bilden die richtige <strong>Entscheidungslogik</strong> ab.</p>
</div>
