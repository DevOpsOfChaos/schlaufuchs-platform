---
title: Adressoperator und Dereferenzierung unterscheiden
description: Verstehe den Unterschied zwischen dem Ermitteln einer Adresse mit & und dem Zugriff auf den Zielwert mit *.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - adresse-operator-und-dereferenzierung-unterscheiden
learningGoals:
  - Du erklärst die Rollen von <code>&amp;</code> und <code>*</code> im Pointer-Kontext.
  - Du liest Ausdrücke mit Adresse und Zielwert ruhig auseinander.
  - Du erkennst, wann mit Adresse und wann mit referenziertem Wert gearbeitet wird.
practiceIdeas:
  - Übersetze Zeilen mit <code>&amp;</code> und <code>*</code> jeweils in klare Sprache.
  - Vergleiche eine Adresseingabe mit einer Dereferenzierung Zeile für Zeile.
  - Markiere in einem kleinen Beispiel, ob das Ergebnis eine Adresse oder ein Wert ist.
commonMistakes:
  - <code>&amp;</code> in jeder Situation als logischen oder bitweisen Operator zu lesen.
  - <code>*</code> beim Dereferenzieren mit Multiplikation zu verwechseln.
  - Nicht zu trennen, ob der Ausdruck eine Adresse oder einen Inhalt liefert.
keyTakeaways:
  - <code>&amp;</code> liefert die Adresse einer Variable.
  - <code>*</code> greift auf den Wert zu, auf den ein Pointer zeigt.
  - Beide Zeichen sind im Pointer-Kontext nur verständlich, wenn ihre Rolle mitgedacht wird.
recognizeSignals:
  - Eine Adresse soll gespeichert oder an eine Funktion übergeben werden.
  - Ein Pointer soll gelesen oder verändert werden.
  - In einem Ausdruck mit <code>*</code> geht es nicht um Multiplikation, sondern um den Zielwert eines Pointers.
selfCheckPoints:
  - Kann ich sagen, wann <code>&amp;</code> eine Adresse liefert?
  - Kann ich erklären, was <code>*pointer</code> bedeutet?
  - Kann ich Adresse und Zielwert in einem Beispiel klar benennen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - dereferenzierung
draft: false
---

## Grundidee

Im Pointer-Kontext haben zwei Zeichen eine besonders wichtige Rolle:

- <code>&amp;</code> liefert eine Adresse,
- <code>*</code> greift über einen Pointer wieder auf den Zielwert zu.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vom Wert zur Adresse und zurück</h3>
  <p>Mit <code>p = &amp;x</code> wird die Adresse von <code>x</code> gespeichert. Mit <code>*p</code> liest man danach wieder den Wert, der an genau dieser Adresse liegt. Die beiden Zeichen arbeiten also in entgegengesetzter Richtung.</p>
</div>

## Zwei Rollen, zwei Blickrichtungen

<div class="compare-card">
  <p class="card-kicker">Richtungswechsel</p>
  <h3>Adresse holen oder Inhalt lesen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>&amp;x</code></strong>
      <span>Der Ausdruck fragt: Wo liegt <code>x</code> im Speicher?</span>
    </div>
    <div class="compare-item">
      <strong><code>*p</code></strong>
      <span>Der Ausdruck fragt: Welcher Wert liegt an der Adresse, die in <code>p</code> gespeichert ist?</span>
    </div>
  </div>
</div>

## Typisches Zusammenspiel

```cpp
int zahl = 100;
int *p = &zahl;
cout << *p;
```

- <code>&amp;zahl</code> liefert die Adresse von <code>zahl</code>,
- <code>p</code> speichert diese Adresse,
- <code>*p</code> greift wieder auf den Wert <code>100</code> zu.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Kontext prüfen</strong>
    <span>Geht es gerade um Pointer? Dann haben <code>&amp;</code> und <code>*</code> eine spezielle Rolle.</span>
  </div>
  <div class="step-item">
    <strong>2. Blickrichtung bestimmen</strong>
    <span>Geht der Ausdruck von der Variable zur Adresse oder von der Adresse zurück zum Wert?</span>
  </div>
  <div class="step-item">
    <strong>3. Ergebnis benennen</strong>
    <span>Entsteht eine Adresse oder ein normaler Nutzwert?</span>
  </div>
  <div class="step-item">
    <strong>4. Nicht mit anderen Rollen verwechseln</strong>
    <span><code>*</code> kann auch Multiplikation bedeuten, <code>&amp;</code> auch bitweise oder logische Rollen haben. Der Kontext entscheidet.</span>
  </div>
</div>
