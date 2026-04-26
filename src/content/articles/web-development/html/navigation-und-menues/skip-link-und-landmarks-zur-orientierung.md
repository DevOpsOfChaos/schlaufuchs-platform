---
title: "HTML – Skip-Link und Landmarks zur Orientierung"
description: "Plane Seitenbereiche so, dass Tastatur- und Screenreader-Nutzung schnell zum Hauptinhalt findet."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "navigation-und-menues"
  - "skip-link-und-landmarks-zur-orientierung"
tags:
  - "web development"
  - "html"
  - "accessibility"
  - "landmarks"
  - "skip link"
learningGoals:
  - "Du erklärst, warum Skip-Links nicht nur ein Detail für Screenreader sind."
  - "Du unterscheidest sichtbare Seitenbereiche und semantische Orientierungspunkte."
  - "Du prüfst, ob eine Seite per Tastatur schnell zum Hauptinhalt führt."
practiceIdeas:
  - "Übertrage die Idee auf eine kleine eigene Seite."
  - "Prüfe die Bedienung einmal mit Tastatur und einmal mit Maus."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "Nur optisch sichtbare Bereiche zu bauen und semantische Orientierung zu vergessen."
  - "Skip-Links so zu verstecken, dass sie beim Fokus nicht sichtbar werden."
  - "Mehrere main-Bereiche oder unklare Landmark-Strukturen zu erzeugen."
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

Plane Seitenbereiche so, dass Tastatur- und Screenreader-Nutzung schnell zum Hauptinhalt findet. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Skip-Link und Landmarks zur Orientierung</h3>
  <p>Plane Seitenbereiche so, dass Tastatur- und Screenreader-Nutzung schnell zum Hauptinhalt findet.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v101-landmarks-skiplink.svg" alt="Schematische Lernillustration zu HTML – Skip-Link und Landmarks zur Orientierung." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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

```html
<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
<header>...</header>
<main id="inhalt">...</main>
<footer>...</footer>
```

Die Demo ist bewusst klein. Sie zeigt nicht die einzig richtige Lösung, sondern die Denkbewegung: erst die Situation sauber lesen, dann Zuständigkeiten trennen und am Ende eine verständliche Rückmeldung ermöglichen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Zuständigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Die Seite sieht gegliedert aus, bietet aber keine klare Tastatur-Abkürzung zum Hauptinhalt.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Die sichtbare Struktur und die semantischen Bereiche führen zur gleichen Orientierung.</span>
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
