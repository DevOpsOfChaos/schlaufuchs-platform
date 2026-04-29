---
title: "CSS – Font Loading und Layout Shift reduzieren"
description: "Plane Webfonts so, dass Text früh lesbar bleibt und spätere Schriftwechsel das Layout möglichst wenig verschieben."
subject: "web-development"
section: "CSS"
topicPath: ["css", "performance-und-laden", "font-loading-und-layout-shift-reduzieren"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Schöne Schriften helfen wenig, wenn Text unsichtbar bleibt oder die Seite beim Nachladen springt. Font Loading ist deshalb auch eine Frage von Nutzererfahrung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Text erscheint spät oder springt</h3>
  <p>Ein Fallback-Font zeigt Text sofort. Wenn der Webfont später sehr anders läuft, kann sich das Layout trotzdem sichtbar verschieben.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v103-quality-gate.svg" alt="Schematische Lernillustration zu CSS – Font Loading und Layout Shift reduzieren." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter.woff2") format("woff2");
  font-display: swap;
}
```

Die Demo ist bewusst klein. Sie zeigt nicht die einzig richtige Lösung, sondern die Denkbewegung: erst die Situation sauber lesen, dann Zuständigkeiten trennen und am Ende eine verständliche Rückmeldung ermöglichen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Begründung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Text bleibt beim Laden unsichtbar und springt danach stark um.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Fallback, `font-display` und ähnliche Metriken werden gemeinsam geplant.</span>
    </div>
  </div>
</div>

## Prüffragen für eigene Seiten

- Ist die sichtbare Oberfläche auch mit Tastatur, Mobilgerät oder langsamem Laden verständlich?
- Wird die technische Entscheidung an einer klaren Stelle getroffen?
- Ist die Rückmeldung deutsch, konkret und nah an der betroffenen Aktion?
- Kann eine andere Person später erkennen, warum die Lösung so gebaut wurde?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Webentwicklung verbindet Technik und Nutzerführung. Eine Lösung ist erst dann wirklich sauber, wenn Struktur, Verhalten und sichtbare Rückmeldung dieselbe Geschichte erzählen.</p>
</div>
