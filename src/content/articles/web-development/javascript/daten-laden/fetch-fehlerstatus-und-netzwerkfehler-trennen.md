---
title: "JavaScript – Fetch-Status und Netzwerkfehler trennen"
description: "Lerne, warum fetch bei HTTP-Fehlerstatus nicht automatisch in catch springt und wie du Rückmeldungen sauber planst."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "daten-laden", "fetch-fehlerstatus-und-netzwerkfehler-trennen"]
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

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>JavaScript – Fetch-Status und Netzwerkfehler trennen</h3>
  <p>Lerne, warum fetch bei HTTP-Fehlerstatus nicht automatisch in catch springt und wie du Rückmeldungen sauber planst.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Vom Problem zur prüfbaren Lösung</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/js-v102-error-flow.svg" alt="Schematische Lernillustration zu JavaScript – Fetch-Status und Netzwerkfehler trennen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

Viele Webprobleme entstehen nicht, weil ein einzelnes HTML-Element, eine CSS-Regel oder eine JavaScript-Funktion fehlt. Häufig ist die eigentliche Frage: **Welcher Zustand soll für wen verständlich werden?** Genau deshalb lohnt es sich, Struktur, Verhalten und Rückmeldung gemeinsam zu lesen.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Struktur</strong>
    <span>Welche Elemente, Bereiche oder Komponenten tragen die Bedeutung?</span>
  </div>
  <div class="visual-item">
    <strong>Zustand</strong>
    <span>Was ist geöffnet, fehlerhaft, geladen, leer, gespeichert oder noch unbestätigt?</span>
  </div>
  <div class="visual-item">
    <strong>Rückmeldung</strong>
    <span>Wie wird dieser Zustand sichtbar, bedienbar und verständlich erklärt?</span>
  </div>
</div>

## Mini-Demo

```js
const response = await fetch("/api/profile");
if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}
const data = await response.json();
```

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Prüfbarkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Die Oberfläche versucht JSON zu lesen, obwohl der Server einen Fehlerstatus geliefert hat.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Der Code trennt Verbindungsproblem, Serverstatus und verständliche Nutzer-Rückmeldung.</span>
    </div>
  </div>
</div>

## Prüffragen für eigene Projekte

- Ist klar, welcher Zustand gerade gemeint ist?
- Bleibt die Bedienung mit Tastatur, kleinem Bildschirm oder Fehlerfall verständlich?
- Ist die sichtbare Rückmeldung konkret genug, damit jemand handeln kann?
- Kann eine andere Person im Code wiederfinden, wo die Entscheidung getroffen wird?

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Weblösung ist nicht schon deshalb gut, weil sie im Normalfall funktioniert. Sie ist gut, wenn Struktur, Zustand und Rückmeldung auch in Randfällen dieselbe Geschichte erzählen.</p>
</div>
