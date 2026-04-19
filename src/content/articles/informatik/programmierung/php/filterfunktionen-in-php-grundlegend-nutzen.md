---
title: Filterfunktionen in PHP grundlegend nutzen
description: Verstehe, wie PHP-Eingaben validiert oder bereinigt werden können und warum validieren und sanitizen nicht dasselbe sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filterfunktionen-in-php-grundlegend-nutzen
learningGoals:
  - Du unterscheidest Validieren und Bereinigen.
  - Du erklärst die Grundidee von filter_var und filter_input.
  - Du liest Filterbeispiele fachlich als Prüfung oder Säuberung statt nur als Funktionsnamen.
practiceIdeas:
  - Prüfe eine E-Mail einmal auf Gültigkeit und bereinige sie danach in einem zweiten Schritt.
  - Erkläre, warum ein bereinigter Wert nicht automatisch fachlich gültig sein muss.
  - Lies ein Beispiel mit INPUT_POST und beschreibe, woher der Wert kommt.
commonMistakes:
  - Validieren und Sanitizen gleichzusetzen.
  - Zu glauben, ein bereinigter Wert sei automatisch korrekt.
  - Filterfunktionen nur als Syntax statt als Sicherheits- und Qualitätslogik zu sehen.
keyTakeaways:
  - Validieren prüft, ob etwas passt.
  - Sanitizen bereinigt oder entschärft Eingaben.
  - Vor dem Weiterverarbeiten ist oft beides sinnvoll.
recognizeSignals:
  - Ein Beispiel nutzt filter_var, filter_input oder filter_has_var.
  - Es geht um E-Mail, URL, Zahl oder Text aus Anwenderdaten.
  - Du sollst entscheiden, ob eher geprüft oder eher bereinigt wird.
selfCheckPoints:
  - Kann ich Validieren und Bereinigen sauber unterscheiden?
  - Kann ich erklären, was filter_var grob macht?
  - Kann ich sagen, warum ein bereinigter Wert noch nicht automatisch fachlich richtig sein muss?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - filter
  - validierung
  - sanitize
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
