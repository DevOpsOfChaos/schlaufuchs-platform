---
title: "HTML – autocomplete und inputmode sinnvoll nutzen"
description: "Nutze Eingabehinweise so, dass Formulare auf Mobilgeräten, mit Passwortmanagern und für echte Nutzende leichter bedienbar werden."
subject: "web-development"
section: "HTML"
topicPath: ["html", "formulare-und-eingaben", "autocomplete-und-inputmode-sinnvoll-nutzen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Formularfelder sollen nicht nur Daten annehmen, sondern Menschen beim Eingeben unterstützen. `autocomplete` und `inputmode` helfen dabei, ohne JavaScript eine bessere Eingabesituation zu schaffen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Telefonnummer auf dem Smartphone</h3>
  <p>Ein Telefonnummernfeld kann eine passende Tastatur anzeigen, ohne die Eingabe künstlich auf ein starres Format zu zwingen.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v103-progressive-form.svg" alt="Schematische Lernillustration zu HTML – autocomplete und inputmode sinnvoll nutzen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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

```html
<label for="phone">Telefonnummer</label>
<input id="phone" name="phone" autocomplete="tel" inputmode="tel">
```

Die Demo ist bewusst klein. Sie zeigt nicht die einzig richtige Lösung, sondern die Denkbewegung: erst die Situation sauber lesen, dann Zuständigkeiten trennen und am Ende eine verständliche Rückmeldung ermöglichen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Begründung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Alle Felder sind einfache Textfelder ohne Namen, Zweck oder Eingabehilfe.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Felder haben eindeutige Namen, passende Autocomplete-Werte und eine sinnvolle Tastaturhilfe.</span>
    </div>
  </div>
</div>

## Prüffragen für eigene Seiten

- Ist die sichtbare Oberfläche auch mit Tastatur, Mobilgerät oder langsamem Laden verständlich?
- Wird die technische Entscheidung an einer klaren Stelle getroffen?
- Ist die Rückmeldung deutsch, konkret und nah an der betroffenen Aktion?
- Kann eine andere Person später erkennen, warum die Lösung so gebaut wurde?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Webentwicklung verbindet Technik und Nutzerführung. Eine Lösung ist erst dann wirklich sauber, wenn Struktur, Verhalten und sichtbare Rückmeldung dieselbe Geschichte erzählen.</p>
</div>
