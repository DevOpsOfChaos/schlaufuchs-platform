---
title: "CSS – prefers-reduced-motion und Animationen rücksichtsvoll planen"
description: "Plane Animationen so, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht stören."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "performance-und-laden"
  - "prefers-reduced-motion-und-animationen-ruecksichtsvoll-planen"
tags:
  - "web development"
  - "css"
  - "animation"
  - "reduced motion"
  - "accessibility"
learningGoals:
  - "Du erklärst, warum Animation nicht nur Dekoration ist."
  - "Du nutzt prefers-reduced-motion als Rücksicht auf Nutzereinstellungen."
  - "Du unterscheidest hilfreiche Bewegung und unnötige Unruhe."
practiceIdeas:
  - "Übertrage die Idee auf eine kleine eigene Seite."
  - "Prüfe die Bedienung einmal mit Tastatur und einmal mit Maus."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "Animationen ohne Ausweichzustand zu erzwingen."
  - "Wichtige Informationen ausschließlich über Bewegung zu vermitteln."
  - "Sehr lange oder großflächige Bewegungen als Standard zu setzen."
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

Plane Animationen so, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht stören. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>prefers-reduced-motion und Animationen rücksichtsvoll planen</h3>
  <p>Plane Animationen so, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht stören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v101-quality-loop.svg" alt="Schematische Lernillustration zu CSS – prefers-reduced-motion und Animationen rücksichtsvoll planen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    scroll-behavior: auto;
  }
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
      <span>Alle Übergänge bleiben aktiv, egal welche Systemeinstellung Nutzerinnen gewählt haben.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Bewegung unterstützt Orientierung, lässt sich aber über reduced motion deutlich beruhigen.</span>
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
