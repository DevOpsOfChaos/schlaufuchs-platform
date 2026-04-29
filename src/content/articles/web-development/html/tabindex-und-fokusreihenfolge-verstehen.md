---
title: "Tabindex und Fokusreihenfolge verstehen"
description: "Verstehe, warum die Fokusreihenfolge einer Seite eine Bedienlogik ist und warum tabindex sparsam und bewusst eingesetzt werden sollte."
subject: "web-development"
section: "HTML"
topicPath: ["html", "tabindex-und-fokusreihenfolge-verstehen"]
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

Wer mit der Tab-Taste durch eine Seite geht, erlebt eine Reihenfolge. Diese Reihenfolge ist kein Zufall, sondern ein Teil der Bedienlogik. `tabindex` kann diese Logik beeinflussen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Formular springt plötzlich unlogisch</h3>
  <p>Oben steht zuerst das Namensfeld, dann die E-Mail, dann der Senden-Button. Beim Tabben springt der Fokus aber plötzlich erst auf den Button, dann zurück nach oben. Genau hier merkt man: Fokusreihenfolge ist Teil der Oberfläche selbst.</p>
</div>

## Was eine gute Fokusreihenfolge ausmacht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Vorhersehbar</strong>
    <span>Der Fokus bewegt sich in einer Reihenfolge, die zur sichtbaren Struktur passt.</span>
  </div>
  <div class="visual-item">
    <strong>Ruhig</strong>
    <span>Es gibt keine unerwarteten Sprünge zwischen weit entfernten Bereichen.</span>
  </div>
  <div class="visual-item">
    <strong>Bedienbar</strong>
    <span>Nutzende können die Oberfläche ohne Maus sinnvoll durchlaufen.</span>
  </div>
</div>

## Mini-Demo: gleiche Oberfläche, andere Fokuslogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Reihenfolge ist Teil der UI</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ruhige Reihenfolge</strong></p>
      <ol style="margin:0; padding-left:1.2rem;">
        <li>Name</li>
        <li>E-Mail</li>
        <li>Nachricht</li>
        <li>Senden</li>
      </ol>
      <p style="margin:0.6rem 0 0;">Die Tastaturnavigation folgt der sichtbaren Logik.</p>
    </div>
    <div style="padding:1rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Unruhige Reihenfolge</strong></p>
      <ol style="margin:0; padding-left:1.2rem;">
        <li>Senden</li>
        <li>Name</li>
        <li>Nachricht</li>
        <li>E-Mail</li>
      </ol>
      <p style="margin:0.6rem 0 0;">Die Oberfläche bleibt gleich, aber die Bedienlogik wird schwerer vorhersehbar.</p>
    </div>
  </div>
</div>

## Warum tabindex sparsam bleiben sollte

`tabindex` kann helfen, wenn ein Element bewusst erreichbar oder überspringbar gemacht werden soll. Zu viele manuelle Eingriffe machen die Reihenfolge aber schnell schwer nachvollziehbar.

```html
<button tabindex="0">Speichern</button>
```

## Eine ruhige Prüfstrategie

1. Passt die Fokusreihenfolge zur sichtbaren Reihenfolge?
2. Gibt es Sprünge, die man beim Lesen der Seite nicht erwarten würde?
3. Ist `tabindex` wirklich nötig oder soll eigentlich die Struktur verbessert werden?
4. Bleibt die Oberfläche auch ohne Maus verständlich bedienbar?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>tabindex</code> verändert nicht nur Erreichbarkeit, sondern oft auch die innere Bedienlogik einer Seite. Genau deshalb sollte er bewusst und sparsam eingesetzt werden.</p>
</div>
