---
title: "CSS – focus-visible und Tastaturfokus gestalten"
description: "Gestalte Fokuszustände so, dass Tastaturnutzung sichtbar bleibt, ohne Mausinteraktion unnötig zu stören."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "selektoren"
  - "focus-visible-und-tastaturfokus-gestalten"
tags:
  - "web development"
  - "css"
  - "focus-visible"
  - "accessibility"
  - "tastatur"
learningGoals:
  - "Du unterscheidest :focus und :focus-visible."
  - "Du erklärst, warum outline nicht einfach entfernt werden darf."
  - "Du gestaltest Fokuszustände als Teil der Bedienbarkeit."
practiceIdeas:
  - "Übertrage die Idee auf eine kleine eigene Seite."
  - "Prüfe die Bedienung einmal mit Tastatur und einmal mit Maus."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "outline: none ohne Ersatz zu verwenden."
  - "Fokuszustände nur für Links, aber nicht für Buttons oder Formulare zu planen."
  - "Tastaturbedienung erst am Ende zufällig zu testen."
keyTakeaways:
  - "Struktur, Zustand und Rückmeldung müssen zusammenpassen."
  - "Sichtbare Nutzerführung ist Teil der technischen Lösung."
  - "Saubere Webentwicklung prüft auch Fehlerfälle und Sonderwege."
recognizeSignals:
  - "Eine Oberfläche soll verständlicher, robuster oder zugänglicher werden."
  - "HTML, CSS und JavaScript müssen gemeinsam gelesen werden."
  - "Es gibt einen Zustand, der sichtbar gemacht oder kontrolliert werden muss."
selfCheckPoints:
  - "Kann ich die Entscheidung in einem Satz erklären?"
  - "Bleibt die Lösung bei Fehlern oder Tastaturbedienung verständlich?"
  - "Sind sichtbare Texte klar und deutsch formuliert?"
level: "mittel"
draft: false
---

## Grundidee

Gestalte Fokuszustände so, dass Tastaturnutzung sichtbar bleibt, ohne Mausinteraktion unnötig zu stören. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>focus-visible und Tastaturfokus gestalten</h3>
  <p>Gestalte Fokuszustände so, dass Tastaturnutzung sichtbar bleibt, ohne Mausinteraktion unnötig zu stören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v101-quality-loop.svg" alt="Schematische Lernillustration zu CSS – focus-visible und Tastaturfokus gestalten." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

Gute Weboberflächen entstehen selten durch eine einzelne Eigenschaft. Meist müssen Struktur, Zustand und Rückmeldung zusammenpassen. Die technische Lösung ist dann gut, wenn sie für Nutzerinnen und Nutzer nachvollziehbar bleibt und später im Code wiedergefunden werden kann.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Struktur lesen</strong>
    <span>Welche HTML- oder Komponentenstruktur ist wirklich vorhanden?</span>
  </div>
  <div class="visual-item">
    <strong>Zustand benennen</strong>
    <span>Was ist gerade aktiv, fehlerhaft, leer, geladen oder noch unbestätigt?</span>
  </div>
  <div class="visual-item">
    <strong>Rückmeldung planen</strong>
    <span>Wie erfahren Nutzerinnen und Nutzer, was passiert ist oder was als Nächstes möglich ist?</span>
  </div>
</div>

## Mini-Demo

```css
button:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 4px;
}
```

Die Demo ist bewusst klein. Sie zeigt nicht die einzig richtige Lösung, sondern die Denkbewegung: erst die Situation sauber lesen, dann Zuständigkeiten trennen und am Ende eine verständliche Rückmeldung ermöglichen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Zuständigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Der Fokus wird entfernt, damit die Seite mit der Maus ruhiger aussieht.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Der Fokus bleibt für Tastaturnutzung deutlich sichtbar und passt optisch zur Komponente.</span>
    </div>
  </div>
</div>

## Prüffragen für eigene Seiten

- Ist die sichtbare Oberfläche auch mit Tastatur, Fehlermeldung oder langsamem Laden verständlich?
- Wird die technische Entscheidung an einer klaren Stelle getroffen?
- Ist die Rückmeldung deutsch, konkret und nah an der betroffenen Aktion?
- Kann eine andere Person später erkennen, warum die Lösung so gebaut wurde?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Webentwicklung verbindet Technik und Nutzerführung. Eine Lösung ist erst dann wirklich sauber, wenn Zustand, Bedienung und Code dieselbe Geschichte erzählen.</p>
</div>
