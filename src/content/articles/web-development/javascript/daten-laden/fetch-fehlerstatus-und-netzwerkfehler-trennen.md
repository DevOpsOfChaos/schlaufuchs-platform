---
title: "JavaScript – Fetch-Status und Netzwerkfehler trennen"
description: "Lerne, warum fetch bei HTTP-Fehlerstatus nicht automatisch in catch springt und wie du Rückmeldungen sauber planst."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "daten-laden"
  - "fetch-fehlerstatus-und-netzwerkfehler-trennen"
tags:
  - "web development"
  - "javascript"
  - "fetch"
  - "http"
  - "fehler"
learningGoals:
  - "Du unterscheidest Netzwerkfehler und HTTP-Statusfehler."
  - "Du prüfst response.ok bewusst."
  - "Du formulierst Fehlermeldungen abhängig vom Problem."
practiceIdeas:
  - "Übertrage das Muster auf eine kleine eigene Oberfläche."
  - "Prüfe den Fall mit Tastatur, kleinem Bildschirm oder Fehlermeldung."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "Zu erwarten, dass 404 oder 500 automatisch im catch landen."
  - "Allen Fehlern dieselbe Meldung zu geben."
  - "Fehlerstatus zu ignorieren und fehlerhafte Daten weiterzuverarbeiten."
keyTakeaways:
  - "Robuste Webentwicklung verbindet Struktur, Zustand und verständliche Rückmeldung."
  - "Eine gute Lösung bleibt auch bei Tastaturbedienung, Fehlern oder kleinen Bildschirmen nachvollziehbar."
  - "Saubere Projektpraxis bedeutet, Entscheidungen sichtbar und überprüfbar zu machen."
recognizeSignals:
  - "Eine Oberfläche funktioniert scheinbar, wird aber in Sonderfällen unklar."
  - "Nutzerinnen und Nutzer brauchen Orientierung, Status oder eine konkrete Korrekturmöglichkeit."
  - "HTML, CSS und JavaScript müssen gemeinsam statt isoliert betrachtet werden."
selfCheckPoints:
  - "Kann ich erklären, welcher Zustand gerade sichtbar gemacht wird?"
  - "Ist die Lösung auch ohne Maus, perfekte Verbindung oder großen Bildschirm verständlich?"
  - "Sind sichtbare Texte klar, deutsch und nah an der betroffenen Handlung formuliert?"
level: "mittel"
draft: false
---

## Grundidee

Lerne, warum fetch bei HTTP-Fehlerstatus nicht automatisch in catch springt und wie du Rückmeldungen sauber planst. Diese Seite behandelt das Thema als praktische Entscheidung im Webprojekt: Was sehen Nutzerinnen und Nutzer, was passiert technisch im Hintergrund und wie bleibt die Lösung später wartbar?

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

Die Demo ist bewusst klein. Sie zeigt nicht die gesamte fertige Anwendung, sondern den entscheidenden Gedanken: erst die Zuständigkeit klären, dann die technische Umsetzung passend wählen.

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
