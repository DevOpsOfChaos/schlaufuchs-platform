---
title: "Operatoren überladen – Grundidee verstehen"
description: "Verstehe, warum selbstdefinierte Typen in C++ bekannte Operatoren wie + oder == mit eigener Logik verwenden können."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "operatoren-ueberladen-grundidee-verstehen"]
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

In C++ können bekannte Operatoren wie <code>+</code>, <code>==</code> oder <code>&lt;&lt;</code> auch für eigene Typen definiert werden. Dadurch lässt sich ein selbst gebauter Datentyp oft lesbarer verwenden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Vektoren addieren</h3>
  <p>Wenn ein eigener Typ einen mathematischen Vektor beschreibt, wirkt <code>a + b</code> häufig verständlicher als eine Hilfsfunktion wie <code>addiereVektoren(a, b)</code>. Genau hier setzt Operatorüberladung an: Die bekannte Schreibweise bleibt, aber ihre Bedeutung wird für den eigenen Typ sauber festgelegt.</p>
</div>

## Was dabei erlaubt ist – und was nicht

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Erlaubt</p>
    <h3>Bekannte Operatoren für eigene Typen sinnvoll nutzen</h3>
    <p>Zum Beispiel kann ein selbstdefinierter Bruch-, Punkt- oder Vektor-Typ einen passenden <code>+</code>-Operator erhalten.</p>
  </section>
  <section>
    <p class="card-kicker">Nicht die Idee</p>
    <h3>Völlig neue Rechenwelt erfinden</h3>
    <p>Du kannst keine neuen Operatorsymbole erzeugen und auch die Priorität bestehender Operatoren nicht umschreiben.</p>
  </section>
</div>

## Drei wichtige Grenzen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Keine neuen Symbole</strong>
    <span>Es können nur bereits existierende C++-Operatoren überladen werden.</span>
  </div>
  <div class="visual-item">
    <strong>Priorität bleibt gleich</strong>
    <span><code>*</code> bleibt zum Beispiel weiterhin stärker als <code>+</code>.</span>
  </div>
  <div class="visual-item">
    <strong>Nicht nur für Basistypen</strong>
    <span>Mindestens ein Operand muss ein nutzerdefinierter Typ sein.</span>
  </div>
</div>

## Ein kleines Beispiel

```cpp
Vec2 operator+(Vec2 a, Vec2 b) {
  return {a.x + b.x, a.y + b.y};
}
```

Fachlich bedeutet das:

- Es gibt einen eigenen Typ <code>Vec2</code>.
- Für zwei Objekte dieses Typs wird die Schreibweise <code>a + b</code> definiert.
- Der Operator bleibt derselbe, aber seine konkrete Logik wird für diesen Typ beschrieben.

## Gute Operatorüberladung ist lesbar und erwartbar

<div class="compare-card">
  <p class="card-kicker">Qualitätsfrage</p>
  <h3>Lesbarkeit gewinnt nur mit klarer Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Gut</strong>
      <span><code>punktA == punktB</code> oder <code>vektorA + vektorB</code> wirkt fachlich naheliegend.</span>
    </div>
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Wenn ein Operator etwas völlig Unerwartetes tut, wird der Code schwerer statt leichter lesbar.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Liegt mindestens ein eigener Typ vor?
2. Passt der bekannte Operator fachlich wirklich zu dieser Bedeutung?
3. Bleibt das Verhalten erwartbar?
4. Wird Lesbarkeit besser oder nur die Syntax kürzer?

<div class="note-panel">
  <p><strong>Merke:</strong> Operatorüberladung ist kein Freifahrtschein für Tricks. Sie ist sinnvoll, wenn bekannte Schreibweisen bei eigenen Typen wirklich klarer werden.</p>
</div>
