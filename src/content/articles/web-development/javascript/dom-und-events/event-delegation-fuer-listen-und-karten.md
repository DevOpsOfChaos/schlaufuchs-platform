---
title: "JavaScript – Event Delegation für Listen und Karten"
description: "Verstehe, warum ein Listener am Container oft robuster ist als viele einzelne Listener an dynamischen Einträgen."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "dom-und-events", "event-delegation-fuer-listen-und-karten"]
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

Verstehe, warum ein Listener am Container oft robuster ist als viele einzelne Listener an dynamischen Einträgen. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Event Delegation für Listen und Karten</h3>
  <p>Verstehe, warum ein Listener am Container oft robuster ist als viele einzelne Listener an dynamischen Einträgen.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/js-v101-event-delegation.svg" alt="Schematische Lernillustration zu JavaScript – Event Delegation für Listen und Karten." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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
const list = document.querySelector(".todo-list");
list?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;
  button.closest("li")?.remove();
});
```

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Zuständigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Neue Listeneinträge funktionieren nicht, weil nur die beim Start vorhandenen Buttons Listener bekommen haben.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Der Container hört mit, prüft das Ziel und funktioniert auch für später hinzugefügte Einträge.</span>
    </div>
  </div>
</div>

