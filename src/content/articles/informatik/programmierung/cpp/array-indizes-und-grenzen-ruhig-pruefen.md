---
title: "Array-Indizes und Grenzen ruhig prüfen"
description: "Verstehe, warum bei Arrays die Indexgrenzen besonders sorgfältig gelesen werden müssen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-indizes-und-grenzen-ruhig-pruefen"]
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
