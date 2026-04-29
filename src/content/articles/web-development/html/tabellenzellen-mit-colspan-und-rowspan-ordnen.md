---
title: "Tabellenzellen mit Colspan und Rowspan ordnen"
description: "Verstehe, wie zusammengefasste Tabellenzellen Struktur sichtbar machen und warum sie nur dort sinnvoll sind, wo echte Gruppenbeziehungen gezeigt werden sollen."
subject: "web-development"
section: "HTML"
topicPath: ["html", "tabellenzellen-mit-colspan-und-rowspan-ordnen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Nicht jede Tabelle ist ein reines Raster aus gleichartigen Kästchen. Manchmal haben mehrere Spalten oder Zeilen eine gemeinsame Bedeutung. Genau dafür gibt es `colspan` und `rowspan`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Wochenplan mit Morgen- und Nachmittagsblöcken</h3>
  <p>Wenn Montag und Dienstag unter derselben Oberkategorie „Woche 1“ zusammengefasst werden oder eine Bereichsbezeichnung für mehrere Zeilen gilt, hilft eine gemeinsame Zelle dabei, die Datenlogik sichtbarer zu machen.</p>
</div>

## Die beiden Ideen getrennt lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong>colspan</strong>
    <span>Eine Zelle spannt sich über mehrere Spalten und bündelt deren gemeinsame Überschrift.</span>
  </div>
  <div class="visual-item">
    <strong>rowspan</strong>
    <span>Eine Zelle spannt sich über mehrere Zeilen und markiert eine gemeinsame Zeilengruppe.</span>
  </div>
</div>

## Mini-Demo: Gruppenkopf statt Wiederholung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Hier wird sichtbar, warum eine Zusammenfassung manchmal sinnvoller ist</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(17rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne Gruppierung</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.35rem; padding:0.8rem; border-radius:12px; background:white; border:1px solid #e2e8f0;">
        <div style="padding:0.55rem; border-radius:8px; background:#dbeafe; font-weight:700; text-align:center;">Woche 1</div>
        <div style="padding:0.55rem; border-radius:8px; background:#dbeafe; font-weight:700; text-align:center;">Mo</div>
        <div style="padding:0.55rem; border-radius:8px; background:#dbeafe; font-weight:700; text-align:center;">Di</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Obergruppe muss unnötig wiederholt oder indirekt gedacht werden.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit colspan</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.35rem; padding:0.8rem; border-radius:12px; background:white; border:1px solid #e2e8f0;">
        <div style="grid-column:1 / span 3; padding:0.55rem; border-radius:8px; background:#fde68a; font-weight:700; text-align:center;">Woche 1</div>
        <div style="padding:0.55rem; border-radius:8px; background:#fef3c7; text-align:center;">Mo</div>
        <div style="padding:0.55rem; border-radius:8px; background:#fef3c7; text-align:center;">Di</div>
        <div style="padding:0.55rem; border-radius:8px; background:#fef3c7; text-align:center;">Mi</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die gemeinsame Gruppierung wird direkt sichtbar.</p>
    </div>
  </div>
</div>

```html
<th colspan="3">Woche 1</th>
```

## Wann colspan und rowspan sinnvoll sind

<div class="compare-card">
  <p class="card-kicker">Ruhige Entscheidung</p>
  <h3>Nur einsetzen, wenn echte Struktur sichtbar wird</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sinnvoll</strong>
      <span>Mehrere Datenbereiche teilen sich wirklich eine gemeinsame Überschrift oder Kategorie.</span>
    </div>
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Zellen werden nur zusammengezogen, damit die Tabelle grafisch interessanter aussieht.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Gibt es eine übergeordnete Gruppe über mehrere Spalten?
2. Gibt es eine wiederkehrende Zeilengruppe?
3. Macht die Zusammenfassung die Datenbeziehung klarer?
4. Erst danach an Feinlayout denken.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>colspan</code> und <code>rowspan</code> sind am stärksten, wenn sie <strong>echte Datenstruktur</strong> sichtbar machen.</p>
</div>
