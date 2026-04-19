---
title: Filter und Validierung für GET und POST trennen
description: Verstehe, dass Herkunft, Existenzprüfung und inhaltliche Prüfung unterschiedliche Schritte sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filter-und-validierung-fuer-get-und-post-trennen
learningGoals:
  - Du unterscheidest Eingabequelle, Existenzprüfung und inhaltliche Validierung.
  - Du erklärst die Rolle von GET und POST für die Herkunft von Daten.
  - Du liest Filterbeispiele als Ablauf aus Quelle, Prüfung und Weiterverarbeitung.
practiceIdeas:
  - Vergleiche denselben Feldnamen einmal in GET und einmal in POST.
  - Ordne Existenzprüfung, Validierung und spätere Nutzung in eine sinnvolle Reihenfolge.
  - Erkläre, warum dieselbe Fachregel unabhängig von der Quelle gelten kann.
commonMistakes:
  - Quelle und Inhalt derselben Eingabe zu vermischen.
  - Nur zu prüfen, dass ein Feld existiert, aber nicht, dass es fachlich passt.
  - GET und POST als „sicher“ bzw. „unsicher“ zu grob zu vereinfachen.
keyTakeaways:
  - GET und POST beschreiben erst einmal die Herkunft der Daten.
  - Existenzprüfung und Inhaltsprüfung sind zwei getrennte Schritte.
  - Gute Verarbeitung beginnt mit einer klaren Ablauftrennung.
recognizeSignals:
  - Es geht um filter_has_var, filter_input, $_GET oder $_POST.
  - Ein Beispiel fragt, ob ein Feld vorhanden und gültig ist.
  - Du sollst Ablauf und Quelle zusammen erklären.
selfCheckPoints:
  - Kann ich Quelle, Existenz und Inhalt sauber trennen?
  - Kann ich GET und POST als Eingabequellen beschreiben?
  - Kann ich begründen, warum eine vorhandene Variable noch nicht automatisch gültig ist?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - get
  - post
  - filter
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
