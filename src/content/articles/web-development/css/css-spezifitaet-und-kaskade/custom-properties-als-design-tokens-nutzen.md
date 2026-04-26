---
title: "CSS – Custom Properties als Design-Tokens nutzen"
description: "Nutze CSS-Variablen nicht nur als Abkürzung, sondern als bewusstes System für Farben, Abstände und Zustände."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "css-spezifitaet-und-kaskade"
  - "custom-properties-als-design-tokens-nutzen"
tags:
  - "web development"
  - "css"
  - "custom properties"
  - "design tokens"
  - "kaskade"
learningGoals:
  - "Du erklärst, warum Design-Tokens Entscheidungen bündeln."
  - "Du unterscheidest globale Tokens und komponentennahe Variablen."
  - "Du nutzt die Kaskade kontrolliert statt zufällig."
practiceIdeas:
  - "Übertrage die Idee auf eine kleine eigene Seite."
  - "Prüfe die Bedienung einmal mit Tastatur und einmal mit Maus."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "Jeden Wert einzeln zu wiederholen."
  - "Variablennamen nach Farbe statt nach Bedeutung zu wählen."
  - "Komponentenvariablen ohne Fallback oder klare Zuständigkeit einzusetzen."
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

Nutze CSS-Variablen nicht nur als Abkürzung, sondern als bewusstes System für Farben, Abstände und Zustände. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Custom Properties als Design-Tokens nutzen</h3>
  <p>Nutze CSS-Variablen nicht nur als Abkürzung, sondern als bewusstes System für Farben, Abstände und Zustände.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/css-v101-design-token-flow.svg" alt="Schematische Lernillustration zu CSS – Custom Properties als Design-Tokens nutzen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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
:root {
  --color-accent: #2563eb;
  --space-card: 1rem;
}
.card {
  border-color: var(--color-accent);
  padding: var(--space-card);
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
      <span>Farben und Abstände werden an vielen Stellen direkt kopiert.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Wichtige Gestaltungsentscheidungen liegen an wenigen benannten Stellen und bleiben änderbar.</span>
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
