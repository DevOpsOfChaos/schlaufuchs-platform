---
title: "JavaScript – Fehlergrenzen in UI-Komponenten planen"
description: "Plane, welche Teile einer Oberfläche bei Fehlern ausfallen dürfen und welche Rückmeldung trotzdem sichtbar bleiben muss."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "module-und-struktur", "fehlergrenzen-in-ui-komponenten-planen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "JavaScript"]
draft: false
---
## Grundidee

Nicht jeder Fehler darf die ganze Oberfläche unbrauchbar machen. Fehlergrenzen helfen, betroffene Bereiche klar zu isolieren und den Rest der Seite verständlich nutzbar zu halten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Empfehlungsbox lädt nicht</h3>
  <p>Wenn eine optionale Empfehlungsbox fehlschlägt, sollte der Hauptinhalt weiter lesbar bleiben. Die Box selbst kann eine ruhige Ersatzmeldung zeigen.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v103-quality-gate.svg" alt="Schematische Lernillustration zu JavaScript – Fehlergrenzen in UI-Komponenten planen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

Bei diesem Thema geht es nicht darum, einen einzelnen Trick auswendig zu lernen. Entscheidend ist, welche Aufgabe der Baustein in einer echten Seite übernimmt: Er soll Struktur klären, Verhalten nachvollziehbar machen oder eine bessere Rückmeldung ermöglichen.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Situation lesen</strong>
    <span>Welche HTML-, CSS- oder JavaScript-Situation liegt wirklich vor?</span>
  </div>
  <div class="visual-item">
    <strong>Entscheidung treffen</strong>
    <span>Welche Verantwortung gehört in Markup, Gestaltung oder Verhalten?</span>
  </div>
  <div class="visual-item">
    <strong>Rückmeldung prüfen</strong>
    <span>Was sehen, hören oder merken Nutzerinnen und Nutzer am Ende?</span>
  </div>
</div>

## Mini-Demo

```js
try {
  renderRecommendations(data);
} catch (error) {
  recommendations.innerHTML = "<p>Empfehlungen sind gerade nicht verfügbar.</p>";
  console.error(error);
}
```

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Begründung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Ein Fehler in einem Zusatzbereich verhindert die Anzeige der gesamten Seite.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Der betroffene Bereich zeigt eine Ersatzmeldung, während Hauptinhalt und Navigation erhalten bleiben.</span>
    </div>
  </div>
</div>

