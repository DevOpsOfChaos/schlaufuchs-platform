---
title: "JavaScript – fetch, async/await und Fehlerzustand"
description: "Lerne, Daten aus einer Quelle zu laden, Wartezeiten sichtbar zu machen und Fehler als UI-Zustand zu behandeln."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "daten-laden", "fetch-async-await-und-fehlerzustand"]
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

Lerne, Daten aus einer Quelle zu laden, Wartezeiten sichtbar zu machen und Fehler als UI-Zustand zu behandeln. Im Mittelpunkt steht nicht ein einzelner Trick, sondern eine ruhige Entscheidung: Was passiert im Browser, was sieht der Mensch und welche Stelle im Code ist dafür zuständig?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>fetch, async/await und Fehlerzustand</h3>
  <p>Ein gutes Beispiel bleibt klein: Es zeigt genau eine Interaktion, eine Datenbewegung oder einen Zustand. Dadurch wird sichtbar, welche Rolle JavaScript übernimmt und welche Aufgabe weiterhin HTML oder CSS gehört.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Vom sichtbaren Verhalten zur sauberen Codeentscheidung</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/js-fetch-async-flow.svg" alt="Schematische Lernillustration zu JavaScript – fetch, async/await und Fehlerzustand." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

JavaScript wirkt auf Anfängerinnen und Anfänger oft wie eine Sammlung einzelner Tricks. Ruhiger wird es, wenn du immer dieselbe Frage stellst: **Welche Aufgabe übernimmt dieser Code im Browser?** Erst danach lohnt sich der Blick auf Syntaxdetails.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Ausgangspunkt</strong>
    <span>Welche HTML-Struktur, welches Formular oder welcher sichtbare Zustand ist bereits vorhanden?</span>
  </div>
  <div class="visual-item">
    <strong>Aktion</strong>
    <span>Welche Auswahl, welches Ereignis, welcher Datentransfer oder welche Zustandsänderung passiert?</span>
  </div>
  <div class="visual-item">
    <strong>Rückmeldung</strong>
    <span>Was sehen Nutzerinnen und Nutzer danach, und bleibt die Bedienung nachvollziehbar?</span>
  </div>
</div>

## Mini-Demo

```js
async function loadItems() {
  showLoading();
  try {
    const response = await fetch("/api/items.json");
    if (!response.ok) throw new Error("HTTP-Fehler");
    renderItems(await response.json());
  } catch (error) {
    showError();
  }
}
```

Der Code ist am besten lesbar, wenn Auswahl, Entscheidung und Wirkung nicht unnötig vermischt werden. Gerade im Browser ist das wichtig, weil fehlende Elemente, langsame Netzwerke oder ungültige Eingaben jederzeit vorkommen können.

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Nicht nur „funktioniert“, sondern verständlich prüfen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Der Code wartet auf Daten und zeigt bei Fehlern einfach gar nichts an.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Die UI zeigt Laden, Erfolg oder Fehler als erkennbare Zustände.</span>
    </div>
  </div>
</div>

## Typische Prüffragen

- Ist klar, welches Element, welche Datenquelle oder welcher Zustand gemeint ist?
- Gibt es einen sichtbaren Umgang mit Fehlern, leeren Werten oder fehlenden Elementen?
- Bleibt die HTML-Basis sinnvoll, oder hängt alles unnötig an JavaScript?
- Kann jemand den Code später ändern, ohne die ganze Seite neu zu verstehen?

## Abgrenzung

Diese Seite erklärt bewusst einen einzelnen Browser-Baustein. Sie ersetzt keine vollständige JavaScript-Einführung und keine Framework-Schulung. Der Schwerpunkt liegt darauf, kleine DOM-, Formular-, Daten- und Zustandsentscheidungen stabil zu lesen.

<div class="note-panel">
  <p><strong>Merke:</strong> Guter JavaScript-Code im Browser ist nicht nur syntaktisch korrekt. Er erklärt durch seine Struktur, worauf reagiert wird, was passieren soll und wie Nutzerinnen und Nutzer Rückmeldung bekommen.</p>
</div>
