---
title: "CSS – flüssige Typografie mit clamp planen"
description: "Plane Schriftgrößen so, dass sie zwischen kleinen und großen Viewports weich wachsen, ohne unlesbar klein oder übertrieben groß zu werden."
subject: "web-development"
section: "CSS"
topicPath: ["css", "responsive-layouts", "fluid-typography-mit-clamp-planen"]
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

Responsive Typografie besteht nicht nur aus Sprüngen an Breakpoints. Mit `clamp()` kann eine Schriftgröße zwischen einem Mindestwert, einem bevorzugten Verlauf und einem Höchstwert wachsen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Überschrift auf Handy und Desktop</h3>
  <p>Eine Überschrift soll auf kleinen Geräten lesbar bleiben und auf großen Bildschirmen stärker wirken, aber nicht aus dem Layout fallen.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v103-fluid-type.svg" alt="Schematische Lernillustration zu CSS – flüssige Typografie mit clamp planen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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
h1 {
  font-size: clamp(2rem, 5vw, 4.5rem);
  line-height: 1.05;
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
      <span>Die Schrift wird nur mit `vw` gesetzt und ist auf kleinen Geräten zu klein.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Mindestwert und Höchstwert begrenzen den flüssigen Bereich.</span>
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
