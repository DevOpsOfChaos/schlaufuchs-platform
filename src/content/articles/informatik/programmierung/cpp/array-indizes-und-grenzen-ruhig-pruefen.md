---
title: Array-Indizes und Grenzen ruhig prüfen
description: Verstehe, warum bei Arrays die Indexgrenzen besonders sorgfältig gelesen werden müssen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - array-indizes-und-grenzen-ruhig-pruefen
learningGoals:
  - Du erklärst, warum Array-Indizes bei 0 beginnen und am letzten gültigen Platz enden.
  - Du erkennst typische Überlauf- und Unterlauffehler in Schleifenbedingungen.
  - Du liest Array-Zugriffe ruhiger über den Bereich der gültigen Indizes.
practiceIdeas:
  - Prüfe Schleifenbedingungen bewusst gegen die Anzahl der Array-Elemente.
  - Erkläre, warum <code>L &lt; 4</code> etwas anderes ist als <code>L &lt;= 4</code>.
  - Lies Array-Fehler über gültige und ungültige Positionen statt nur über Compilerverhalten.
commonMistakes:
  - Zu glauben, der letzte Index sei gleich der Anzahl der Elemente.
  - <code>&lt;</code> und <code>&lt;=</code> in Schleifen zu verwechseln.
  - Sich darauf zu verlassen, dass ein Compiler jeden Arrayfehler automatisch meldet.
keyTakeaways:
  - Bei vier Elementen sind nur die Indizes 0 bis 3 gültig.
  - Ein falscher Grenzvergleich kann über das Array hinaus zugreifen.
  - Ruhige Bereichsprüfung schützt vor schwer auffindbaren Fehlern.
recognizeSignals:
  - Es geht um Schleifen über Arrays, Indexfehler, Grenzen oder ungültige Speicherzugriffe.
  - Du sollst einen Fehler in einer Schleifenbedingung erklären.
  - In Beispielen musst du Anzahl der Elemente und letzten gültigen Index unterscheiden.
selfCheckPoints:
  - Kann ich aus der Elementanzahl den letzten gültigen Index bestimmen?
  - Kann ich erklären, warum <code>&lt;=</code> problematisch sein kann?
  - Kann ich Arraygrenzen vor einem Zugriff ruhig prüfen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - fehler
draft: false
---

## Grundidee

Arrayfehler entstehen oft nicht durch große Theorie, sondern durch kleine Grenzfehler. Gerade weil der Zugriff so einfach aussieht, lohnt sich eine ruhige Prüfung: Welche Positionen sind wirklich erlaubt?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vier Elemente heißen nicht Index 4</h3>
  <p>Ein Array mit vier Elementen hat die Plätze 0, 1, 2 und 3. Wer in einer Schleife bis <code>4</code> inklusive läuft, greift schon auf eine ungültige Position zu.</p>
</div>

## Die zentrale Denkregel

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Anzahl ist nicht letzter Index</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Anzahl der Elemente</strong>
      <span>Bei vier Elementen ist die Anzahl <code>4</code>.</span>
    </div>
    <div class="compare-item">
      <strong>Letzter gültiger Index</strong>
      <span>Der letzte gültige Platz ist dann <code>3</code>.</span>
    </div>
  </div>
</div>

## Typischer Fehler

```cpp
int A[] = {2, 4, 6, 8};
for (int L = 0; L <= 4; L++) {
  std::cout << A[L] << "
";
}
```

Der Fehler steckt in <code>L &lt;= 4</code>. Er erlaubt auch den Zugriff auf <code>A[4]</code>, obwohl es diesen gültigen Platz gar nicht gibt.

## Ruhige Prüfstrategie

1. Wie viele Elemente gibt es?
2. Welcher letzte Index folgt daraus?
3. Passt die Schleifenbedingung wirklich zu diesem Bereich?
4. Wird irgendwo ein Platz unter 0 oder über dem letzten Index angesprochen?

<div class="note-panel">
  <p><strong>Merke:</strong> Bei klassischen Arrays werden ungültige Zugriffe nicht immer als klarer Compilerfehler sichtbar. Genau deshalb ist die eigene Bereichsprüfung so wichtig.</p>
</div>
