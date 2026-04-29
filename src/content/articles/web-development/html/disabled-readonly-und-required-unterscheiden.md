---
title: "Disabled, Readonly und Required unterscheiden"
description: "Verstehe, wie diese Zustände Eingabefelder unterschiedlich begrenzen und warum ähnliche Optik nicht dieselbe Formularlogik bedeutet."
subject: "web-development"
section: "HTML"
topicPath: ["html", "disabled-readonly-und-required-unterscheiden"]
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

Formularfelder können ähnlich aussehen und trotzdem sehr verschiedene Regeln haben. Genau darum reicht es nicht, nur auf graue Farben oder kleine Pflichtmarkierungen zu schauen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Felder, drei verschiedene Regeln</h3>
  <p>Ein automatisch vergebener Nutzername soll sichtbar, aber nicht veränderbar sein. Ein Feld für eine spätere Freischaltung soll derzeit gar nicht nutzbar sein. Die E-Mail-Adresse muss dagegen verpflichtend ausgefüllt werden. Die sichtbare Boxform kann ähnlich sein – die Logik dahinter nicht.</p>
</div>

## Die drei Zustände im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong>disabled</strong>
    <span>Das Feld ist gerade nicht aktiv nutzbar.</span>
  </div>
  <div class="visual-item">
    <strong>readonly</strong>
    <span>Der Wert ist sichtbar, soll aber nicht verändert werden.</span>
  </div>
  <div class="visual-item">
    <strong>required</strong>
    <span>Die Eingabe ist notwendig, bevor das Formular sinnvoll abgeschlossen werden kann.</span>
  </div>
</div>

## Mini-Demo: gleiche Formularzeile, andere Handlungslogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Nicht die Farbe entscheidet, sondern was erlaubt oder nötig ist</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>disabled</strong></p>
      <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:12px; background:#e5e7eb; color:#64748b;">Freischaltung folgt später</div>
      <p style="margin:0.55rem 0 0;">Gerade nicht benutzbar.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>readonly</strong></p>
      <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:12px; background:white;">kunde-2048</div>
      <p style="margin:0.55rem 0 0;">Sichtbar und lesbar, aber nicht zum Verändern gedacht.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>required</strong></p>
      <div style="padding:0.75rem; border:1px solid #ef4444; border-radius:12px; background:white; color:#94a3b8;">E-Mail-Adresse *</div>
      <p style="margin:0.55rem 0 0;">Dieses Feld muss sinnvoll ausgefüllt werden.</p>
    </div>
  </div>
</div>

## Eine ruhige Unterscheidung

<div class="compare-card">
  <p class="card-kicker">Wichtige Fragen</p>
  <h3>Was darf der Nutzer gerade tun?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>disabled</strong>
      <span>Gerade nicht nutzen.</span>
    </div>
    <div class="compare-item">
      <strong>readonly</strong>
      <span>Wert sehen, aber nicht verändern.</span>
    </div>
    <div class="compare-item">
      <strong>required</strong>
      <span>Wert aktiv und verpflichtend eingeben.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Soll das Feld gerade nutzbar sein?
2. Wenn nein: soll der Wert trotzdem lesbar bleiben?
3. Wenn ja: ist die Eingabe verpflichtend?
4. Erst danach an Optik und Feinschliff denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Formularzustände sind vor allem Regeln für die Interaktion – nicht bloß Farbvarianten.</p>
</div>
