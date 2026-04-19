---
title: Funktionen in PHP mit Argumenten und Rückgabe verstehen
description: Verstehe, wie PHP-Funktionen Werte entgegennehmen, verarbeiten und ein Ergebnis zurückgeben.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - funktionen-in-php-mit-argumenten-und-rueckgabe-verstehen
learningGoals:
  - Du erklärst Pflichtargumente und Rückgabe in einfachen Funktionen.
  - Du liest einen Funktionsaufruf mit Argumenten ruhig.
  - Du verstehst return als Rückkehr mit Ergebnis.
practiceIdeas:
  - Ordne Funktionsname, Argumente und Rückgabe in einem Beispiel zu.
  - Erkläre, warum eine Funktion ohne Rückgabe anders eingesetzt wird.
  - Lies einen geschachtelten Funktionsaufruf schrittweise.
commonMistakes:
  - Funktionsdefinition und Funktionsaufruf zu verwechseln.
  - Zu glauben, jede Funktion müsse immer etwas ausgeben statt zurückzugeben.
  - return nur als Abbruch statt auch als Ergebnisrückgabe zu sehen.
keyTakeaways:
  - Funktionen kapseln Teilaufgaben.
  - Argumente liefern Eingangsdaten.
  - return gibt ein Ergebnis an die Aufrufstelle zurück.
recognizeSignals:
  - Es geht um function, Argumente, Rückgabe oder Aufruf.
  - Eine Funktion wird in einem Ausdruck verwendet.
  - Du sollst beschreiben, was an die Funktion hinein- und herausgeht.
selfCheckPoints:
  - Kann ich Definition und Aufruf trennen?
  - Kann ich return fachlich erklären?
  - Kann ich sagen, welche Daten die Funktion erhält?
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

Eine Funktion übernimmt eine Teilaufgabe. Sie bekommt Daten als Argumente, bearbeitet sie und kann ein Ergebnis zurückgeben.

```php
<?php
function machWas($wort, $pos, $anz = 1) {
  for ($i = $pos; $i < $pos + $anz; $i++) {
    $wort[$i] = strtoupper($wort[$i]);
  }
  return $wort;
}
```

## Was ist hier was?

<div class="visual-grid">
  <div class="visual-item"><strong>Funktionsname</strong><span><code>machWas</code> benennt die Teilaufgabe.</span></div>
  <div class="visual-item"><strong>Argumente</strong><span><code>$wort</code>, <code>$pos</code> und optional <code>$anz</code> liefern Eingangsdaten.</span></div>
  <div class="visual-item"><strong>Rückgabe</strong><span><code>return $wort;</code> schickt das Ergebnis zurück.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ausgeben und Zurückgeben sind nicht dasselbe. Eine Funktion kann einen Wert zurückliefern, ohne ihn direkt auf der Seite anzuzeigen.</p>
</div>
