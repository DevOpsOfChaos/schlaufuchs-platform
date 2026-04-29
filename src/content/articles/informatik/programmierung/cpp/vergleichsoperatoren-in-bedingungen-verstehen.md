---
title: "Vergleichsoperatoren in Bedingungen verstehen"
description: "Verstehe, wie Bedingungen mit ==, !=, <, >, <= und >= Entscheidungen im C++-Code steuern."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "vergleichsoperatoren-in-bedingungen-verstehen"]
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

Kontrollstrukturen brauchen oft eine Bedingung. Damit das Programm entscheiden kann, muss etwas **verglichen** werden. Genau dafür dienen Vergleichsoperatoren.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nur dann eine Meldung anzeigen</h3>
  <p>Ein Programm soll nur dann „Treffer“ ausgeben, wenn <code>punkte &gt;= 50</code> gilt. Der Vergleich entscheidet also, ob der Programmzweig betreten wird oder nicht.</p>
</div>

## Wichtige Vergleichsoperatoren

<div class="visual-grid">
  <div class="visual-item">
    <strong>==</strong>
    <span>prüft auf Gleichheit</span>
  </div>
  <div class="visual-item">
    <strong>!=</strong>
    <span>prüft auf Ungleichheit</span>
  </div>
  <div class="visual-item">
    <strong>&lt; und &gt;</strong>
    <span>prüfen kleiner oder größer</span>
  </div>
  <div class="visual-item">
    <strong>&lt;= und &gt;=</strong>
    <span>schließen Gleichheit mit ein</span>
  </div>
</div>

## Aus Vergleich wird Entscheidung

```cpp
if (punkte >= 50) {
  cout << "Bestanden" << endl;
}
```

So kannst du diese Bedingung lesen:

- Vergleiche den Wert von <code>punkte</code> mit 50.
- Ist der Wert mindestens 50, ist die Bedingung wahr.
- Nur dann wird die Ausgabe ausgeführt.

## = und == nicht verwechseln

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3><code>x == 5</code></h3>
    <p>Hier wird gefragt, ob <code>x</code> den Wert 5 hat.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3><code>x = 5</code></h3>
    <p>Das ist keine Vergleichsfrage, sondern eine Zuweisung.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Bedingung liest du am besten zuerst in Worten. So merkst du schneller, ob du wirklich vergleichst oder aus Versehen zuweist.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Was wird verglichen?</strong>
    <span>Suche die beiden Vergleichsseiten.</span>
  </div>
  <div class="step-item">
    <strong>2. Welche Art von Vergleich?</strong>
    <span>Gleichheit, Ungleichheit oder Größenvergleich?</span>
  </div>
  <div class="step-item">
    <strong>3. Wann ist es wahr?</strong>
    <span>Formuliere die Bedingung in Worten.</span>
  </div>
  <div class="step-item">
    <strong>4. Welche Folge hat das?</strong>
    <span>Prüfe, welcher Programmteil dann ausgeführt wird.</span>
  </div>
</div>
