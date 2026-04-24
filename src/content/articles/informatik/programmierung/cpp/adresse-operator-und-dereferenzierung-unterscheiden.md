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
  - Du liest Ausdrücke mit Adresse, Pointerwert und Zielwert sauber auseinander.
  - Du erkennst, wann ein Ausdruck eine Adresse liefert und wann er einen normalen Nutzwert liefert.
practiceIdeas:
  - Übersetze Zeilen mit <code>&amp;</code>, <code>p</code> und <code>*p</code> jeweils in klare Sprache.
  - Prüfe in kleinen Beispielen, ob gerade eine Adresse gespeichert, gelesen oder dereferenziert wird.
  - Ergänze zu jeder Pointer-Zeile bewusst die Frage: „Adresse oder Wert?“
commonMistakes:
  - <code>&amp;</code> in jeder Situation als logischen oder bitweisen Operator zu lesen.
  - <code>*</code> beim Dereferenzieren mit Multiplikation zu verwechseln.
  - <code>p</code> und <code>*p</code> so zu behandeln, als wäre beides dasselbe.
keyTakeaways:
  - <code>&amp;</code> liefert die Adresse einer Variable.
  - <code>p</code> ist der Pointerwert, also selbst eine gespeicherte Adresse.
  - <code>*p</code> greift auf den Wert zu, der an dieser Adresse liegt.
recognizeSignals:
  - Eine Adresse soll gespeichert oder an eine Funktion übergeben werden.
  - Ein Pointer soll gelesen oder verändert werden.
  - In einem Ausdruck mit <code>*</code> geht es nicht um Multiplikation, sondern um den Zielwert eines Pointers.
selfCheckPoints:
  - Kann ich sagen, wann <code>&amp;</code> eine Adresse liefert?
  - Kann ich den Unterschied zwischen <code>p</code> und <code>*p</code> erklären?
  - Kann ich in einem kleinen Beispiel benennen, welcher Ausdruck Adresse und welcher Ausdruck Wert ist?
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

Im Pointer-Kontext haben drei Dinge unterschiedliche Rollen:

- <code>&amp;x</code> liefert die Adresse von <code>x</code>,
- <code>p</code> speichert selbst eine Adresse,
- <code>*p</code> greift auf den Wert zu, der an dieser Adresse liegt.

Gerade weil die Zeichen so klein sind, werden hier oft drei verschiedene Ebenen vermischt. Für diese Seite reicht deshalb ein ruhiges Raster: **Adresse holen, Adresse speichern, Zielwert lesen**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Einmal von der Variablen zur Adresse und wieder zurück</h3>
  <p>Mit <code>p = &amp;zahl</code> wird die Adresse von <code>zahl</code> gespeichert. Mit <code>*p</code> liest oder verändert man danach den Wert, der genau an dieser Adresse liegt. Die Leserichtung kippt also an der Stelle mit dem Stern.</p>
</div>

## Drei Blickrichtungen statt "einfach Pointer"

<div class="compare-card">
  <p class="card-kicker">Kernunterscheidung</p>
  <h3>Adresse holen, Adresse speichern, Zielwert erreichen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>&amp;zahl</code></strong>
      <span>Dieser Ausdruck liefert die Adresse von <code>zahl</code>.</span>
    </div>
    <div class="compare-item">
      <strong><code>p</code></strong>
      <span>Der Pointer speichert diese Adresse als eigenen Wert.</span>
    </div>
    <div class="compare-item">
      <strong><code>*p</code></strong>
      <span>Die Dereferenzierung greift auf den Inhalt an dieser Adresse zu.</span>
    </div>
  </div>
</div>

## Eingebautes Mini-Beispiel

```cpp
int zahl = 100;
int *p = &zahl;
```

<div class="table-card">
  <p class="card-kicker">Leseraster</p>
  <h3>Wie liest du die vier typischen Ausdrücke?</h3>
  <table>
    <thead>
      <tr>
        <th>Ausdruck</th>
        <th>Gedankliche Lesart</th>
        <th>Ergebnisart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>zahl</code></td>
        <td>Welcher normale Wert steht in der Variablen?</td>
        <td>normaler Wert</td>
      </tr>
      <tr>
        <td><code>&amp;zahl</code></td>
        <td>Wo liegt <code>zahl</code> im Speicher?</td>
        <td>Adresse</td>
      </tr>
      <tr>
        <td><code>p</code></td>
        <td>Welche Adresse ist im Pointer gespeichert?</td>
        <td>Adresse</td>
      </tr>
      <tr>
        <td><code>*p</code></td>
        <td>Welcher Wert liegt an dieser Adresse?</td>
        <td>normaler Wert</td>
      </tr>
    </tbody>
  </table>
</div>

## Zusatzdemo: Gleicher Adresswert, trotzdem andere Rolle

```cpp
int zahl = 100;
int *p = &zahl;

cout << &zahl << "\n";
cout << p << "\n";
```

<pre><code>Gedankliche Ausgabe:
Adresse von zahl
Adresse von zahl</code></pre>

Gerade diese kleine Demo ist didaktisch wichtig: Die sichtbare Ausgabe kann gleich wirken, obwohl die Ausdrücke verschieden gelesen werden müssen.

<div class="table-card">
  <p class="card-kicker">Nicht nur auf den sichtbaren Wert schauen</p>
  <h3>Gleicher Adresswert heißt noch nicht gleiche Ausdrucksrolle</h3>
  <table>
    <thead>
      <tr>
        <th>Ausdruck</th>
        <th>Was passiert fachlich?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&amp;zahl</code></td>
        <td>Die Adresse wird aus der Variablen <code>zahl</code> gerade erst ermittelt.</td>
      </tr>
      <tr>
        <td><code>p</code></td>
        <td>Die schon gespeicherte Adresse wird aus der Pointer-Variable gelesen.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

```cpp
cout << zahl << "\n";
cout << p << "\n";
cout << *p << "\n";
```

<pre><code>Gedankliche Ausgabe:
100
Adresse von zahl
100</code></pre>

Die echte Adresse sieht natürlich nicht wortwörtlich so aus. Für das Verstehen reicht hier die didaktische Lesart:

- <code>zahl</code> gibt den normalen Variablenwert aus,
- <code>p</code> gibt die gespeicherte Adresse aus,
- <code>*p</code> gibt den Zielwert an dieser Adresse aus.

## Lesen und Schreiben sauber trennen

```cpp
int zahl = 100;
int *p = &zahl;
*p = 250;
```

<div class="table-card">
  <p class="card-kicker">Was ändert sich wirklich?</p>
  <h3>Die Zuweisung trifft nicht den Pointer, sondern den Zielwert</h3>
  <table>
    <thead>
      <tr>
        <th>Teil</th>
        <th>Rolle</th>
        <th>Nach <code>*p = 250;</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>p</code></td>
        <td>gespeicherte Adresse</td>
        <td>bleibt dieselbe</td>
      </tr>
      <tr>
        <td><code>*p</code></td>
        <td>Zielwert an dieser Adresse</td>
        <td>wird zu <code>250</code></td>
      </tr>
      <tr>
        <td><code>zahl</code></td>
        <td>dieser Zielwert</td>
        <td>ist danach ebenfalls <code>250</code></td>
      </tr>
    </tbody>
  </table>
</div>

Genau an dieser Stelle entsteht oft der Kurzschluss „Dann wird doch der Pointer verändert“. Nein: Der Pointer bleibt Adressspeicher, der Stern öffnet nur den Weg zum Zielwert.

## Zweite Mini-Demo: Zielwert ändern oder Ziel wechseln

```cpp
int zahl = 100;
int andere = 7;
int *p = &zahl;

*p = 250;
p = &andere;
```

<div class="table-card">
  <p class="card-kicker">Zwei ähnliche Zeilen, zwei verschiedene Wirkungen</p>
  <h3>Einmal ändert sich der Zielwert, einmal die gespeicherte Adresse</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Was ändert sich?</th>
        <th>Was bleibt gleich?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>*p = 250;</code></td>
        <td>Der Zielwert von <code>zahl</code> wird zu <code>250</code>.</td>
        <td><code>p</code> speichert noch dieselbe Adresse wie vorher.</td>
      </tr>
      <tr>
        <td><code>p = &amp;andere;</code></td>
        <td><code>p</code> speichert jetzt die Adresse von <code>andere</code>.</td>
        <td>Die Werte in <code>zahl</code> und <code>andere</code> werden durch diese Zeile nicht automatisch verändert.</td>
      </tr>
    </tbody>
  </table>
</div>

Gerade diese Gegenüberstellung ist für den Einstieg wichtig: <code>*p = ...</code> arbeitet am aktuellen Zielwert, <code>p = ...</code> wechselt das Ziel selbst.

## Typische Verwechslungen

<div class="compare-card">
  <p class="card-kicker">Ruhig auseinanderhalten</p>
  <h3>Diese Paare klingen ähnlich, bedeuten aber nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>p</code> vs. <code>*p</code></strong>
      <span><code>p</code> ist die gespeicherte Adresse, <code>*p</code> der Zielwert an dieser Adresse.</span>
    </div>
    <div class="compare-item">
      <strong><code>&amp;zahl</code> vs. <code>zahl</code></strong>
      <span><code>&amp;zahl</code> liefert die Adresse, <code>zahl</code> den normalen Variablenwert.</span>
    </div>
    <div class="compare-item">
      <strong>Dereferenzierung vs. Multiplikation</strong>
      <span>Das Zeichen <code>*</code> sieht gleich aus, aber der Kontext entscheidet über seine Rolle.</span>
    </div>
  </div>
</div>

## Was diese Seite bewusst noch nicht prüft

<div class="compare-card">
  <p class="card-kicker">Seitengrenze</p>
  <h3>Bedeutung der Ausdrücke ist hier wichtiger als Zugriffssicherheit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Diese Seite</strong>
      <span>Sie klärt, was <code>&amp;zahl</code>, <code>p</code> und <code>*p</code> jeweils bedeuten.</span>
    </div>
    <div class="compare-item">
      <strong>Nachbarseite zu <code>nullptr</code></strong>
      <span>Dort geht es erst um die Sicherheitsfrage, ob ein Zugriff über <code>*p</code> in einer konkreten Situation überhaupt erlaubt ist.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ausdruck isolieren</strong>
    <span>Schau nicht auf die ganze Zeile, sondern zuerst nur auf <code>zahl</code>, <code>&amp;zahl</code>, <code>p</code> oder <code>*p</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Ergebnisart benennen</strong>
    <span>Entsteht hier eine Adresse oder ein normaler Nutzwert?</span>
  </div>
  <div class="step-item">
    <strong>3. Leserichtung prüfen</strong>
    <span>Geht der Blick von der Variablen zur Adresse oder von der Adresse zurück zum Inhalt?</span>
  </div>
  <div class="step-item">
    <strong>4. Schreibzugriff extra prüfen</strong>
    <span>Bei <code>*p = ...</code> verändert sich der Zielwert, nicht der Pointer selbst.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Die Grundseite zu <code>&amp;</code> und <code>*</code> fragt zuerst nach der <em>Bedeutung</em> eines Ausdrucks, noch nicht nach seiner <em>Sicherheit</em> in jeder Lage.</p>
</div>
