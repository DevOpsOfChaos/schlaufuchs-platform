---
title: "Filterfunktionen in PHP grundlegend nutzen"
description: "Verstehe, wie PHP-Eingaben validiert oder bereinigt werden können und warum validieren und sanitizen nicht dasselbe sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "filterfunktionen-in-php-grundlegend-nutzen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

PHP stellt Filterfunktionen bereit, um Eingaben zu prüfen oder zu bereinigen. Dabei ist die wichtigste Unterscheidung: Prüfe ich, ob etwas fachlich gültig ist, oder mache ich einen Wert nur weniger problematisch für die weitere Verarbeitung?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Validieren</p>
    <h3>Passt der Wert fachlich?</h3>
    <p>Hier wird geprüft, ob eine Eingabe ein erwartetes Format erfüllt, etwa eine E-Mail oder Zahl.</p>
  </section>
  <section>
    <p class="card-kicker">Sanitizen</p>
    <h3>Wert bereinigen</h3>
    <p>Hier werden problematische Zeichen oder Teile entfernt oder entschärft, damit der Wert sicherer weiterverwendet werden kann.</p>
  </section>
</div>

## Typische Funktionen grob lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong>filter_has_var</strong>
    <span>Prüft, ob eine Variable aus einer bestimmten Quelle vorhanden ist.</span>
  </div>
  <div class="visual-item">
    <strong>filter_var</strong>
    <span>Prüft oder bereinigt einen bereits vorliegenden Wert.</span>
  </div>
  <div class="visual-item">
    <strong>filter_input</strong>
    <span>Holt einen Wert direkt aus einer Eingabequelle und filtert ihn optional.</span>
  </div>
</div>

## Ein kleines Denkbeispiel

Jemand gibt eine E-Mail mit unerwarteten Zeichen ein.

- Beim **Validieren** fragst du: Ist das wirklich eine gültige E-Mail?
- Beim **Sanitizen** fragst du: Welche Teile kann ich bereinigen oder entschärfen?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein bereinigter Wert kann immer noch fachlich falsch sein. Bereinigung ersetzt also keine echte Prüfung.</p>
</div>
