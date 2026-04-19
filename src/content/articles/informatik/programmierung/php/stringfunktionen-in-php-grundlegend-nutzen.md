---
title: Stringfunktionen in PHP grundlegend nutzen
description: Verstehe typische PHP-Stringfunktionen als kleine Werkzeuge zum Zerlegen, Suchen, Ersetzen und Umformen von Text.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - stringfunktionen-in-php-grundlegend-nutzen
learningGoals:
  - Du ordnest typische Stringfunktionen grob nach ihrem Zweck.
  - Du unterscheidest Suchen, Ersetzen, Zerlegen und Umformen bei Textwerten.
  - Du wählst für einfache Textaufgaben eine plausible Funktionsidee aus.
practiceIdeas:
  - Entscheide, ob ein Text eher gesucht, ersetzt oder zerlegt werden soll.
  - Vergleiche <code>explode</code>, <code>str_replace</code> und <code>strlen</code> fachlich.
  - Lies kleine Stringaufgaben als Frage nach dem Werkzeugtyp statt nach dem exakten Namen.
commonMistakes:
  - Alle Stringfunktionen als gleichartige Texttricks zu sehen.
  - Länge und Position zu verwechseln.
  - Einen Text zu zerlegen, obwohl eigentlich nur ersetzt werden soll.
keyTakeaways:
  - Stringfunktionen haben typische Rollen wie zählen, finden, ersetzen oder zerlegen.
  - Die ruhige Frage lautet zuerst: Was soll mit dem Text fachlich passieren?
  - Gute Funktionswahl beginnt mit dem Ziel, nicht mit dem Namen.
recognizeSignals:
  - Es geht um E-Mail-Adressen, Dateinamen, Trennzeichen oder Textbereinigung.
  - Im Code tauchen <code>strlen</code>, <code>strpos</code>, <code>explode</code>, <code>implode</code> oder <code>str_replace</code> auf.
  - Du sollst den Zweck einer Textbearbeitung erklären.
selfCheckPoints:
  - Kann ich Länge, Position und Teilung unterscheiden?
  - Kann ich sagen, wann <code>explode</code> fachlich passt?
  - Kann ich beschreiben, wann Ersetzen sinnvoller ist als Suchen?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - string
  - textverarbeitung
draft: false
---

## Grundidee

In PHP sind viele kleine Stringfunktionen keine Einzeltricks, sondern Werkzeuge für typische Textaufgaben. Wer zuerst die Aufgabe erkennt, findet meist auch die passende Funktion schneller.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Zählen</strong>
    <span><code>strlen</code> fragt nach der Länge eines Textes.</span>
  </div>
  <div class="visual-item">
    <strong>Suchen</strong>
    <span><code>strpos</code> fragt nach der Position eines Zeichens oder Teiltexts.</span>
  </div>
  <div class="visual-item">
    <strong>Ersetzen</strong>
    <span><code>str_replace</code> tauscht Textbestandteile aus.</span>
  </div>
  <div class="visual-item">
    <strong>Zerlegen / Zusammensetzen</strong>
    <span><code>explode</code> teilt, <code>implode</code> verbindet.</span>
  </div>
</div>

## Ein Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>E-Mail-Adresse und Listenwert lesen</h3>
  <p>Willst du bei <code>anna@example.com</code> das @ finden, dann suchst du. Willst du eine Liste wie <code>rot,grün,blau</code> in einzelne Werte teilen, dann zerlegst du. Willst du Leerzeichen oder Zeichen austauschen, dann ersetzt du.</p>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Vor der Funktionswahl hilft die Frage: zählen, suchen, ersetzen oder zerlegen?</p>
</div>
