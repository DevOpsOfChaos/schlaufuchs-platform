---
title: "Browser – Accessibility Tree in DevTools prüfen"
description: "Nutze DevTools nicht nur für Layout und Netzwerk, sondern auch zum Prüfen von Name, Rolle und Zustand interaktiver Elemente."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "debugging-und-diagnose"
  - "accessibility-tree-in-devtools-pruefen"
tags:
  - "web development"
  - "browser"
  - "devtools"
  - "accessibility"
  - "debugging"
learningGoals:
  - "Du erklärst, was Name, Rolle und Zustand für interaktive Elemente bedeuten."
  - "Du nutzt DevTools als Prüfhilfe, nicht als Ersatz für echtes Testen."
  - "Du findest typische Fehler wie namenlose Buttons oder falsche Rollen."
practiceIdeas:
  - "Übertrage die Idee auf eine kleine eigene Seite."
  - "Prüfe die Bedienung einmal mit Tastatur und einmal mit Maus."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "Nur visuell zu prüfen, ob ein Button gut aussieht."
  - "aria-label und sichtbaren Text widersprüchlich zu formulieren."
  - "Automatische Tools als vollständige Barrierefreiheitsprüfung zu behandeln."
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

Nutze DevTools nicht nur für Layout und Netzwerk, sondern auch zum Prüfen von Name, Rolle und Zustand interaktiver Elemente. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Accessibility Tree in DevTools prüfen</h3>
  <p>Nutze DevTools nicht nur für Layout und Netzwerk, sondern auch zum Prüfen von Name, Rolle und Zustand interaktiver Elemente.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v101-landmarks-skiplink.svg" alt="Schematische Lernillustration zu Browser – Accessibility Tree in DevTools prüfen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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

```js
<button aria-label="Menü öffnen">☰</button>
<!-- Prüfen: Name = Menü öffnen, Rolle = button -->
```

Die Demo ist bewusst klein. Sie zeigt nicht die einzig richtige Lösung, sondern die Denkbewegung: erst die Situation sauber lesen, dann Zuständigkeiten trennen und am Ende eine verständliche Rückmeldung ermöglichen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Zuständigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Ein Icon-Button sieht klar aus, hat aber keinen verständlichen zugänglichen Namen.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Der sichtbare Zweck und der Accessibility Tree erzählen dieselbe Bediengeschichte.</span>
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
