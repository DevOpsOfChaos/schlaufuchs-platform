---
title: "URL-Aufbau und relative Links verstehen"
description: "Verstehe, wie URLs aufgebaut sind und warum relative Verlinkung in Projekten oft sinnvoller ist als harte absolute Pfade."
subject: "web-development"
section: "HTML"
topicPath: ["html", "url-aufbau-und-relative-links-verstehen"]
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

Ein Link verweist nicht nur „irgendwohin“, sondern auf eine **adressierte Ressource**. Damit du Links ruhig lesen kannst, hilft eine Zerlegung in ihre Teile.

## Typischer URL-Aufbau

```text
Schema://Server[:Port][/Pfad...][Datei][#Anker][?Parameter]
```

Nicht jede URL nutzt alle Teile, aber die Denkstruktur hilft.

## Absolute und relative Links

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Externer Vollweg gegen Projektbezug</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>absolut</strong><span>Enthält die vollständige Adresse, z. B. <code>https://...</code>.</span></div>
    <div class="compare-item"><strong>relativ</strong><span>Beschreibt den Weg vom aktuellen Dokument aus, z. B. <code>../bilder/logo.png</code>.</span></div>
  </div>
</div>

## Anker sind Ziele im Dokument

Ein Anker hilft beim Springen zu einer markierten Stelle.

```html
<a id="kontakt">Kontakt</a>
<a href="#kontakt">Zum Kontaktbereich</a>
```

## Mini-Demo: drei Arten von Links

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gleiche Linkidee, andere Zielart</h3>
  <div style="display:grid; gap:0.5rem;">
    <div style="padding:0.75rem; border-radius:12px; background:#f8fafc; border:1px dashed #94a3b8;"><strong>Relativ:</strong> <code>../hilfe/start.html</code></div>
    <div style="padding:0.75rem; border-radius:12px; background:#f8fafc; border:1px dashed #94a3b8;"><strong>Absolut:</strong> <code>https://example.org/hilfe/start.html</code></div>
    <div style="padding:0.75rem; border-radius:12px; background:#f8fafc; border:1px dashed #94a3b8;"><strong>Anker:</strong> <code>#kontakt</code></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Zielart suchen</strong><span>Geht es zu einer externen Adresse, zu einer Projektdatei oder nur zu einer Stelle im Dokument?</span></div>
  <div class="step-item"><strong>2. Pfad lesen</strong><span>Von wo aus startet der relative Weg?</span></div>
  <div class="step-item"><strong>3. Zusätze trennen</strong><span>Was ist Anker, was ist Parameter, was ist eigentlicher Pfad?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> In Web-Projekten ist relative Verlinkung oft die ruhigere Wahl, solange das Ziel innerhalb des Projekts liegt.</p>
</div>
