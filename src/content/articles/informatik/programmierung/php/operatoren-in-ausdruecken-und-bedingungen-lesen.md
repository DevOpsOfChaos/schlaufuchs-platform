---
title: Operatoren in PHP-Ausdrücken und Bedingungen lesen
description: Verstehe, wie arithmetische, Vergleichs-, logische und bitweise Operatoren in PHP unterschiedliche Rollen spielen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - operatoren-in-ausdruecken-und-bedingungen-lesen
learningGoals:
  - Du ordnest Operatoren ihrer fachlichen Rolle zu.
  - Du unterscheidest Rechnen, Vergleichen und logisches Verknüpfen sauber.
  - Du liest einfache Bedingungen ruhiger statt nur Zeichenketten zu sehen.
practiceIdeas:
  - Sortiere Operatoren nach Rechnen, Vergleich, Logik oder Bit-Ebene.
  - Übersetze eine if-Bedingung in Alltagssprache.
  - Erkläre, warum bitweise Operatoren etwas anderes tun als logische Operatoren.
commonMistakes:
  - "&& und & gleichzusetzen."
  - == mit = zu verwechseln.
  - Bitoperatoren als allgemeine Bool-Operatoren zu lesen.
keyTakeaways:
  - Operatoren haben verschiedene Rollen.
  - Vergleich und Zuweisung sind nicht dasselbe.
  - Bitweise und logische Operatoren arbeiten auf verschiedenen Ebenen.
recognizeSignals:
  - Im Beispiel stehen viele Operatorzeichen nebeneinander.
  - Es geht um Bedingungen, Berechnungen oder Bits.
  - Du sollst Ausdruck und Bedeutung verbinden.
selfCheckPoints:
  - Kann ich = und == trennen?
  - "Kann ich && und & unterscheiden?"
  - Kann ich sagen, welche fachliche Rolle ein Operator hat?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - backend
  - web
  - grundlagen
draft: false
---
## Grundidee

Operatoren sehen oft wie kleine Zeichen aus, tragen aber sehr unterschiedliche Bedeutungen. Für ruhiges Lesen hilft deshalb zuerst die Frage: Rechnet der Ausdruck, vergleicht er etwas, verknüpft er Bedingungen oder arbeitet er direkt auf Bits?

<div class="visual-grid">
  <div class="visual-item"><strong>Arithmetisch</strong><span><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></span></div>
  <div class="visual-item"><strong>Vergleich</strong><span><code>==</code>, <code>===</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;=</code></span></div>
  <div class="visual-item"><strong>Logisch</strong><span><code>&&</code>, <code>||</code>, <code>!</code></span></div>
  <div class="visual-item"><strong>Bitweise</strong><span><code>&amp;</code>, <code>|</code>, <code>^</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code></span></div>
</div>

## Typischer Fehler

`=` weist zu, `==` vergleicht. Wer das verwechselt, liest Programmlogik falsch.

```php
<?php
if ($a == $b) {
  echo 'gleich';
}
```

<div class="note-panel">
  <p><strong>Merke:</strong> Logische Operatoren verbinden Aussagen. Bitoperatoren arbeiten dagegen direkt auf der Binärdarstellung von Werten.</p>
</div>
