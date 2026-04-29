---
title: "include und require ruhig unterscheiden"
description: "Verstehe, wie PHP Dateien einbindet und warum include und require aehnlich wirken, aber unterschiedlich streng reagieren."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "include-und-require-ruhig-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

PHP Dateien werden oft in kleinere Teile zerlegt, damit Kopfbereiche, Funktionen oder Konfigurationen nicht immer neu geschrieben werden muessen. Beim Einbinden solcher Dateien tauchen haeufig <code>include</code> und <code>require</code> auf.

Die wichtigste Leitfrage ist dabei:

**Wie schlimm waere es, wenn diese Datei fehlt?**

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Optionale Hilfe oder unverzichtbarer Baustein?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>include</strong>
      <span>Passt eher zu Teilen, deren Fehlen stoerend, aber nicht unbedingt vollstaendig blockierend gedacht wird.</span>
    </div>
    <div class="compare-item">
      <strong>require</strong>
      <span>Passt eher zu Teilen, ohne die die Seite oder Logik nicht sinnvoll weiterlaufen soll.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Konfiguration ist nicht dasselbe wie eine optionale Infobox</h3>
  <p>Wenn eine Konfigurationsdatei mit Datenbankzugang fehlt, ist das fuer die Anwendung meist kritisch. Eine kleine optionale Zusatzbox ist dagegen oft weniger zentral. Genau aus dieser Wichtigkeit entsteht die ruhigste Trennung zwischen <code>include</code> und <code>require</code>.</p>
</div>

## Mini-Demo: gleiche Idee, andere Strenge

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Einbindungen werden ueber Bedeutung lesbar</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <strong>include</strong>
      <p style="margin:0.55rem 0 0;">Eine Zusatzdatei mit optionalen Seitentipps fehlt. Das ist unruhig, aber nicht automatisch das Ende der gesamten Programmlogik.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <strong>require</strong>
      <p style="margin:0.55rem 0 0;">Eine zentrale Konfigurationsdatei fehlt. Ohne sie soll die Anwendung nicht sinnvoll weiterlaufen.</p>
    </div>
  </div>
</div>

## Diese Seite behandelt bewusst Einbindestrenge und nicht Session oder Formulardaten

Hier geht es um die Struktur von PHP Dateien und ihre Wichtigkeit im Ablauf. GET, POST oder Sessions sind andere Ebenen und gehoeren zu Request und Zustandslogik.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Dateirolle benennen</strong>
    <span>Ist die eingebundene Datei optional oder zentral?</span>
  </div>
  <div class="step-item">
    <strong>2. Ausfall denken</strong>
    <span>Kann das Programm sinnvoll ohne diese Datei weitermachen?</span>
  </div>
  <div class="step-item">
    <strong>3. Strenge waehlen</strong>
    <span>Danach wird include oder require fachlich deutlich ruhiger.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> include und require werden erst dann klar, wenn du die Wichtigkeit der eingebundenen Datei fuer das ganze Programm mitdenkst.</p>
</div>
