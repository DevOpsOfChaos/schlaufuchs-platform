---
title: "JavaScript – Form Submit mit Fetch progressiv verbessern"
description: "Baue Formularlogik so, dass das Grundformular funktioniert und JavaScript die Rückmeldung nur verbessert statt alles zu ersetzen."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "dom-und-events", "form-submit-mit-fetch-progressive-enhancement"]
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

Ein Formular muss nicht vollständig von JavaScript abhängen. Gute progressive Verbesserung lässt den normalen Formularweg bestehen und ergänzt bessere Statusmeldungen, Ladezustände und Fehlerbehandlung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Kontaktformular ohne JavaScript</h3>
  <p>Ohne JavaScript wird das Formular normal abgeschickt. Mit JavaScript bleibt die Seite ruhig und zeigt eine Statusmeldung direkt im Formular.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v103-progressive-form.svg" alt="Schematische Lernillustration zu JavaScript – Form Submit mit Fetch progressiv verbessern." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "Wird gesendet ...";
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  });
  status.textContent = response.ok ? "Gesendet." : "Bitte später erneut versuchen.";
});
```

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Begründung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Das Formular hat keine echte `action` und funktioniert ohne JavaScript gar nicht.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>HTML trägt den Grundweg, JavaScript verbessert nur die Bedienung.</span>
    </div>
  </div>
</div>

