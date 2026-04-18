---
title: Operatoren überladen – Grundidee verstehen
description: Verstehe, warum selbstdefinierte Typen in C++ bekannte Operatoren wie + oder == mit eigener Logik verwenden können.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - operatoren-und-klassen
  - operatoren-ueberladen-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee des Überladens von Operatoren.
  - Du erkennst, warum Operatoren für eigene Typen lesbarer gemacht werden können.
  - Du beschreibst wichtige Grenzen: keine neuen Symbole, keine geänderte Priorität, kein Überladen nur für Basistypen.
practiceIdeas:
  - Erkläre an einem Punkt- oder Vektor-Typ, warum <code>a + b</code> lesbarer sein kann als eine Hilfsfunktion mit langem Namen.
  - Prüfe Beispiele darauf, ob wirklich ein eigener Typ beteiligt ist.
  - Vergleiche gute und schlechte Ideen für Operatorüberladung.
commonMistakes:
  - Zu glauben, man könne völlig neue Operatorzeichen erfinden.
  - Zu glauben, die Rechenregeln oder Prioritäten würden sich dadurch ändern.
  - Operatorüberladung mit "alles darf jetzt alles" zu verwechseln.
keyTakeaways:
  - Operatorüberladung macht bekannte Schreibweisen für eigene Typen nutzbar.
  - Mindestens ein Operand muss ein nutzerdefinierter Typ sein.
  - Gute Operatorüberladung verbessert Lesbarkeit, schlechte macht Verhalten unklar.
recognizeSignals:
  - Es geht um Klassen, selbstdefinierte Typen, operator-Funktionen oder lesbare Syntax für eigene Objekte.
  - In Beispielen musst du zwischen erlaubter und nicht erlaubter Überladung unterscheiden.
  - Du sollst nicht nur Syntax wiederholen, sondern den Zweck und die Grenzen erklären.
selfCheckPoints:
  - Kann ich erklären, warum Operatorüberladung für eigene Typen sinnvoll sein kann?
  - Kann ich zentrale Grenzen nennen?
  - Kann ich gute und unpassende Einsätze unterscheiden?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - operatoren
  - klassen
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
