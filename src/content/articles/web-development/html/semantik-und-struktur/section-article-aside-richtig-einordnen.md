---
title: "HTML – section, article und aside richtig einordnen"
description: "Ordne semantische Bereiche so ein, dass Seitenstruktur, Inhalt und Zusatzinformationen klar voneinander getrennt bleiben."
subject: "web-development"
section: "HTML"
topicPath: ["html", "semantik-und-struktur", "section-article-aside-richtig-einordnen"]
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

Eine Seite wirkt oft nur deshalb unübersichtlich, weil alle Bereiche gleich behandelt werden. Semantische HTML-Elemente helfen, Hauptinhalt, eigenständige Beiträge und ergänzende Hinweise klarer zu unterscheiden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Artikel mit Zusatzkasten</h3>
  <p>Ein Blogbeitrag gehört in einen eigenständigen Inhaltsbereich. Eine Infobox mit verwandten Links ist dagegen eher Ergänzung als Hauptaussage.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v103-semantics-layout.svg" alt="Schematische Lernillustration zu HTML – section, article und aside richtig einordnen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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

```html
<main>
  <article>
    <h1>Leitfaden zur Fehlersuche</h1>
    <section>
      <h2>Erster Prüfschritt</h2>
      <p>...</p>
    </section>
  </article>
  <aside>
    <h2>Weitere Hilfen</h2>
    <p>...</p>
  </aside>
</main>
```

Die Demo ist bewusst klein. Sie zeigt nicht die einzig richtige Lösung, sondern die Denkbewegung: erst die Situation sauber lesen, dann Zuständigkeiten trennen und am Ende eine verständliche Rückmeldung ermöglichen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Begründung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Alles wird in verschachtelte `div`-Container gelegt, ohne erkennbare Bedeutung.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Die Struktur zeigt, was Hauptinhalt, Abschnitt und ergänzende Information ist.</span>
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
