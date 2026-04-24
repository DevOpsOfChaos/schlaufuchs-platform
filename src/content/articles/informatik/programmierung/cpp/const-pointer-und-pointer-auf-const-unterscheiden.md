---
title: Const-Pointer und Pointer auf const unterscheiden
description: Verstehe den Unterschied zwischen einem festen Pointer und einem Pointer, der nur lesend auf einen Wert zugreifen soll.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - const-pointer-und-pointer-auf-const-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen <code>int * const p</code> und <code>const int *p</code>.
  - Du erkennst, ob in einem Ausdruck die Adresse fest bleibt oder der Zielwert nicht verändert werden darf.
  - Du liest die beiden Schreibweisen systematischer statt sie nur optisch ähnlich zu finden.
practiceIdeas:
  - Sprich beide Deklarationen laut in klaren Worten aus.
  - "Markiere in kleinen Beispielen, was fest ist: die Adresse oder der Zielwert."
  - Vergleiche, welche Änderungen bei beiden Varianten erlaubt oder verboten sind.
commonMistakes:
  - Beide Schreibweisen nur als "irgendwas mit const" zu behandeln.
  - Zu übersehen, ob sich <code>const</code> auf den Pointer oder auf den Zielwert bezieht.
  - Zu glauben, beide Varianten hätten dieselbe praktische Wirkung.
keyTakeaways:
  - "<code>const int *p</code> bedeutet: Über <code>p</code> soll der Zielwert nicht verändert werden."
  - "<code>int * const p</code> bedeutet: Die gespeicherte Adresse in <code>p</code> bleibt fest."
  - Eine ruhige Lesestrategie macht die scheinbar ähnlichen Schreibweisen klar unterscheidbar.
recognizeSignals:
  - In einer Deklaration steht <code>const</code> direkt beim Grundtyp oder direkt beim Pointer.
  - Du sollst entscheiden, ob Umhängen oder Verändern des Zielwerts erlaubt ist.
  - In Aufgaben geht es um erlaubte und verbotene Änderungen bei Pointer-Deklarationen.
selfCheckPoints:
  - Kann ich sagen, was bei <code>const int *p</code> geschützt ist?
  - Kann ich sagen, was bei <code>int * const p</code> fest bleibt?
  - Kann ich beide Deklarationen in klare Alltagssprache übersetzen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - const
draft: false
---

## Grundidee

Bei Pointer-Deklarationen kann <code>const</code> an verschiedenen Stellen stehen. Genau deshalb reicht es nicht, nur das Wort zu sehen. Du musst ruhig lesen, **was eigentlich fest oder geschützt ist**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleiche Bausteine, andere Sperre</h3>
  <p><code>const int *p</code> und <code>int * const p</code> sehen fast gleich aus. Inhaltlich schützen sie aber Verschiedenes: einmal den Zielwert, einmal die gespeicherte Adresse im Pointer.</p>
</div>

## Zwei Fragen genügen

<div class="compare-card">
  <p class="card-kicker">Nicht nur optisch lesen</p>
  <h3>Was bleibt fest? Was darf ich noch ändern?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>const int *p</code></strong>
      <span>Der Pointer darf auf etwas zeigen, aber über ihn soll der Zielwert nicht verändert werden.</span>
    </div>
    <div class="compare-item">
      <strong><code>int * const p</code></strong>
      <span>Der Pointer selbst bleibt an dieselbe Adresse gebunden. Das Umhängen auf ein anderes Ziel ist nicht vorgesehen.</span>
    </div>
  </div>
</div>

## Eingebautes Mini-Beispiel

```cpp
int a = 5;
int b = 7;

const int *lesend = &a;
int * const fest = &a;

lesend = &b;   // erlaubt
//*lesend = 9; // nicht erlaubt

*fest = 9;     // erlaubt
//fest = &b;   // nicht erlaubt
```

<div class="table-card">
  <p class="card-kicker">Zeile für Zeile lesen</p>
  <h3>Welche Änderung ist hier erlaubt?</h3>
  <table>
    <thead>
      <tr>
        <th>Ausdruck</th>
        <th>Erlaubt?</th>
        <th>Warum?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>lesend = &amp;b;</code></td>
        <td>Ja</td>
        <td>Der Pointer darf umgehängt werden. Geschützt ist hier nicht die Adresse, sondern der Zielwert.</td>
      </tr>
      <tr>
        <td><code>*lesend = 9;</code></td>
        <td>Nein</td>
        <td>Über diesen Pointer soll der Zielwert nicht verändert werden.</td>
      </tr>
      <tr>
        <td><code>*fest = 9;</code></td>
        <td>Ja</td>
        <td>Der Zielwert ist nicht als <code>const</code> geschützt.</td>
      </tr>
      <tr>
        <td><code>fest = &amp;b;</code></td>
        <td>Nein</td>
        <td>Die gespeicherte Adresse im Pointer bleibt fest.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

```cpp
int a = 5;
const int *lesend = &a;
int * const fest = &a;

a = 11;
cout << *lesend << "\n";
cout << *fest << "\n";
```

<pre><code>Gedankliche Ausgabe:
11
11</code></pre>

Das wirkt zuerst überraschend. <code>const</code> friert hier nicht die Variable <code>a</code> insgesamt ein. Es regelt nur, **was über den jeweiligen Pointer erlaubt ist**:

- Über <code>lesend</code> soll der Zielwert nicht verändert werden.
- Bei <code>fest</code> soll die Adresse im Pointer fest bleiben.

Wenn sich <code>a</code> an anderer Stelle ändert, können beide Pointer den neuen Wert trotzdem sehen.

## Vier-Felder-Blick

<div class="table-card">
  <p class="card-kicker">Zwei Fragen genügen</p>
  <h3>Kann ich umhängen, und kann ich über den Pointer schreiben?</h3>
  <table>
    <thead>
      <tr>
        <th>Variante</th>
        <th>Umhängen erlaubt?</th>
        <th>Schreiben über den Pointer erlaubt?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>const int *lesend</code></td>
        <td>ja</td>
        <td>nein</td>
      </tr>
      <tr>
        <td><code>int * const fest</code></td>
        <td>nein</td>
        <td>ja</td>
      </tr>
    </tbody>
  </table>
</div>

Wenn du beide Fragen zusammen stellst, wirkt die ähnliche Syntax viel ruhiger: Einmal bleibt der Zielwert geschützt, einmal die Adresse im Pointer.

## Zweite Mini-Demo: <code>const</code> friert nicht automatisch das ganze Objekt ein

```cpp
int a = 5;
int *roh = &a;
const int *lesend = &a;

*roh = 12;
cout << *lesend << "\n";
```

<div class="table-card">
  <p class="card-kicker">Blick auf Alias-Zugriffe</p>
  <h3>Lesender Pointer heißt nicht unveränderliches Objekt</h3>
  <table>
    <thead>
      <tr>
        <th>Teil</th>
        <th>Rolle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>roh</code></td>
        <td>Kann den Wert von <code>a</code> direkt verändern.</td>
      </tr>
      <tr>
        <td><code>lesend</code></td>
        <td>Darf über sich selbst nicht schreiben, kann den später geänderten Wert aber lesen.</td>
      </tr>
    </tbody>
  </table>
</div>

Die gedankliche Ausgabe ist hier <code>12</code>. Das ist didaktisch wichtig: <code>const int *lesend</code> bedeutet nicht „<code>a</code> darf nirgendwo mehr verändert werden“, sondern nur „über <code>lesend</code> wird nicht geschrieben“.

## Zusatzdemo: Zwei Namen, zwei verschiedene Freiheiten

```cpp
int a = 5;
int b = 7;

const int *lesend = &a;
int * const fest = &a;

lesend = &b;
*fest = 9;

cout << *lesend << "\n";
cout << *fest << "\n";
```

<pre><code>Gedankliche Ausgabe:
7
9</code></pre>

Hier sieht man die Trennung besonders klar: <code>lesend</code> darf sein Ziel wechseln, <code>fest</code> darf das Ziel nicht wechseln, aber über genau diesen Namen den aktuellen Zielwert verändern.

<div class="table-card">
  <p class="card-kicker">Nicht nur erlaubte Zeilen merken</p>
  <h3>Beide Varianten behalten unterschiedliche Freiheiten</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Was bleibt erlaubt?</th>
        <th>Was bleibt gesperrt?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>lesend</code></td>
        <td>auf <code>&amp;b</code> umhängen</td>
        <td>über <code>*lesend</code> schreiben</td>
      </tr>
      <tr>
        <td><code>fest</code></td>
        <td>über <code>*fest</code> den aktuellen Zielwert ändern</td>
        <td>den Pointer selbst auf ein anderes Ziel umhängen</td>
      </tr>
    </tbody>
  </table>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Häufige Verwechslung</p>
  <h3><code>const</code> ist nicht automatisch immer dieselbe Sperre</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zu grob gelesen</strong>
      <span>"Da steht <code>const</code>, also darf man mit dem Pointer gar nichts ändern."</span>
    </div>
    <div class="compare-item">
      <strong>Sauber gelesen</strong>
      <span>Entscheidend ist, worauf sich <code>const</code> bezieht: auf den Zielwert oder auf den Pointer selbst.</span>
    </div>
  </div>
</div>

## Nicht mit der Array-Seite vermischen

<div class="compare-card">
  <p class="card-kicker">Seitengrenze</p>
  <h3>Hier geht es um Schutzregeln, nicht um Speicherstruktur</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Diese Seite</strong>
      <span>Sie fragt, ob der Zielwert geschützt ist oder ob die Adresse im Pointer fest bleibt.</span>
    </div>
    <div class="compare-item">
      <strong>Array und Pointer</strong>
      <span>Dort geht es darum, ob ein Ausdruck selbst einen festen Speicherbereich mitbringt oder nur eine Adresse speichert.</span>
    </div>
  </div>
</div>

## Eine ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Erst den Stern suchen</strong>
    <span>Wo beginnt der Pointer-Teil der Deklaration?</span>
  </div>
  <div class="step-item">
    <strong>2. Dann auf <code>const</code> schauen</strong>
    <span>Steht <code>const</code> beim Grundtyp oder direkt beim Pointer?</span>
  </div>
  <div class="step-item">
    <strong>3. Zwei Fragen stellen</strong>
    <span>Darf ich umhängen? Darf ich über den Pointer schreiben?</span>
  </div>
  <div class="step-item">
    <strong>4. Erst dann urteilen</strong>
    <span>So wird aus ähnlicher Syntax eine klare Unterscheidung.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Pointer-<code>const</code> hilft keine Merkhilfe ohne Denken. Entscheidend ist immer, <em>was</em> geschützt oder fest gemacht wird.</p>
</div>
