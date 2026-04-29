---
title: "Member-Operatoren und freie Funktionen vergleichen"
description: "Verstehe, warum Operatoren in C++ entweder als Member-Funktion oder als freie Hilfsfunktion umgesetzt werden und was das für die linke Seite bedeutet."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "member-operatoren-und-freie-funktionen-vergleichen"]
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

Ein Operator für einen eigenen Typ kann in C++ entweder als Member-Funktion in der Klasse selbst oder als freie Hilfsfunktion außerhalb umgesetzt werden. Beide Varianten beschreiben denselben Operator, aber sie verteilen die Rollen unterschiedlich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die linke Seite ist nicht neutral</h3>
  <p>Bei einer Member-Funktion steckt das linke Objekt bereits in <code>this</code>. Das verändert, wie du über die Operanden nachdenkst: Die linke Seite ist dann nicht einfach nur „auch ein Parameter“, sondern das Objekt, auf dem die Funktion aufgerufen wird.</p>
</div>

## Zwei Implementierungsarten im Vergleich

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Member-Funktion</p>
    <h3>Die linke Seite ist <code>this</code></h3>
    <p>Ein Ausdruck wie <code>a + b</code> wird als Methode von <code>a</code> gedacht. Die rechte Seite kommt als Argument dazu.</p>
  </section>
  <section>
    <p class="card-kicker">Freie Funktion</p>
    <h3>Beide Seiten kommen als Argumente</h3>
    <p>Hier werden linke und rechte Seite explizit an eine Hilfsfunktion übergeben. Das wirkt oft symmetrischer.</p>
  </section>
</div>

## Ein kleines Beispiel

```cpp
struct Vec2 {
  int x;
  int y;

  Vec2 operator+(const Vec2& rhs) const {
    return {x + rhs.x, y + rhs.y};
  }
};
```

Hier ist <code>this</code> die linke Seite. Der Ausdruck <code>a + b</code> liest sich also wie: „nimm <code>a</code> und addiere <code>b</code> dazu“.

## Wann freie Funktionen näherliegen

```cpp
std::ostream& operator<<(std::ostream& out, const Vec2& v) {
  return out << '(' << v.x << ", " << v.y << ')';
}
```

Beim Ausgabestream ist eine freie Funktion oft näherliegend, weil links der Stream steht und rechts das auszugebende Objekt. Hier wirkt eine Member-Lösung am eigenen Typ meist nicht natürlich.

## Welche Operatoren nur als Member erlaubt sind

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>=</code></strong>
    <span>Der Zuweisungsoperator muss als Member umgesetzt werden.</span>
  </div>
  <div class="visual-item">
    <strong><code>[]</code></strong>
    <span>Auch der Indexoperator gehört zur Klasse selbst.</span>
  </div>
  <div class="visual-item">
    <strong><code>()</code></strong>
    <span>Der Funktionsaufrufoperator ist ebenfalls ein Member-Operator.</span>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Wer ist die linke Seite des Ausdrucks?
2. Soll diese linke Seite als <code>this</code> natürlich mitgedacht werden?
3. Oder ist eine symmetrische freie Funktion verständlicher?
4. Gehört der Operator zu den Fällen, die nur als Member erlaubt sind?

<div class="note-panel">
  <p><strong>Merke:</strong> Der Unterschied liegt nicht nur in der Syntax. Member und freie Funktion ändern, wie du die Rollen von linker Seite, rechter Seite und Kontext denkst.</p>
</div>
