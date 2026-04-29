---
title: "Filter und Validierung für GET und POST trennen"
description: "Verstehe, dass Herkunft, Existenzprüfung und inhaltliche Prüfung unterschiedliche Schritte sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "filter-und-validierung-fuer-get-und-post-trennen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Wenn Anwenderdaten verarbeitet werden, sind mindestens drei Fragen sinnvoll:

1. Aus **welcher Quelle** kommt der Wert?
2. **Existiert** der Wert überhaupt?
3. Ist der Inhalt **fachlich gültig**?

Gerade bei GET und POST hilft es, diese Ebenen nicht zu vermischen.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Quelle</p>
    <h3>Woher kommt der Wert?</h3>
    <p>Typisch sind GET-Parameter aus der URL oder POST-Daten aus einem Formular.</p>
  </section>
  <section>
    <p class="card-kicker">Existenz</p>
    <h3>Gibt es den Wert überhaupt?</h3>
    <p>Ein Feld kann erwartet sein, aber trotzdem fehlen.</p>
  </section>
  <section>
    <p class="card-kicker">Inhalt</p>
    <h3>Passt der Wert fachlich?</h3>
    <p>Erst danach wird geprüft, ob etwa Zahl, E-Mail oder Bereich stimmen.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein vorhandener Wert aus der richtigen Quelle ist noch nicht automatisch ein fachlich gültiger Wert.</p>
</div>
