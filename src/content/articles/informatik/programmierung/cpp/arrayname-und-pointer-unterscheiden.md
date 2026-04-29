---
title: "Arrayname und Pointer unterscheiden"
description: "Verstehe, warum Arrayname und Pointer in C++ eng verwandt wirken, aber nicht einfach dasselbe sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "arrayname-und-pointer-unterscheiden"]
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

Arrayname und Pointer können in kleinen Beispielen ähnlich aussehen. Für die fachliche Trennung reicht aber schon eine ruhigere Leitfrage:

**Ist das hier selbst der Speicherbereich – oder nur eine Variable, die auf einen Bereich zeigt?**

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Ähnliche Nutzung, andere Bauart</h3>
  <p>Ein Array wie <code>int zahlen[3]</code> bringt drei zusammenhängende Elemente direkt mit. Ein Pointer wie <code>int *p</code> bringt diesen Bereich nicht mit, sondern speichert nur eine Adresse auf einen Bereich.</p>
</div>

## Mini-Demo A: gleicher Start, andere Rolle

```cpp
int zahlen[3] = {1, 2, 3};
int *p = zahlen;
```

<div class="table-card">
  <p class="card-kicker">Strukturblick</p>
  <h3>Wer ist Bereich, wer ist Zeiger darauf?</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Was liegt hier vor?</th>
        <th>Didaktische Kernlesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>zahlen</code></td>
        <td>Array</td>
        <td>Der Speicherbereich mit drei Elementen ist direkt Teil von <code>zahlen</code>.</td>
      </tr>
      <tr>
        <td><code>p</code></td>
        <td>Pointervariable</td>
        <td><code>p</code> speichert nur eine Adresse auf einen Bereich.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo B: gleicher Indexzugriff, trotzdem nicht gleich

```cpp
zahlen[0] = 10;
p[0] = 10;
```

<div class="compare-card">
  <p class="card-kicker">Typische Fehlspur</p>
  <h3>Gleiche Oberfläche beweist noch keine gleiche Struktur</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>zahlen[0]</code></strong>
      <span>Der Zugriff geht auf das erste Element des festen Arrays.</span>
    </div>
    <div class="compare-item">
      <strong><code>p[0]</code></strong>
      <span>Der Zugriff geht über eine gespeicherte Adresse auf ein Ziel.</span>
    </div>
  </div>
</div>

Die gemeinsame Indexschreibweise ist also nur eine ähnliche Nutzungsform. Sie beantwortet noch nicht die Strukturfrage.

## Mini-Demo C: Umhängen macht den Unterschied sichtbar

```cpp
int zahlen[3] = {1, 2, 3};
int andere[3] = {4, 5, 6};
int *p = zahlen;

p = andere;
```

<div class="table-card">
  <p class="card-kicker">Kippstelle</p>
  <h3>Was darf auf ein anderes Ziel zeigen?</h3>
  <table>
    <thead>
      <tr>
        <th>Ausdruck</th>
        <th>Lesart</th>
        <th>Didaktische Folgerung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>p = andere;</code></td>
        <td>Der Pointer bekommt eine neue Zieladresse.</td>
        <td>Ein Pointer ist als eigene Variable umhängbar.</td>
      </tr>
      <tr>
        <td><code>zahlen = andere;</code></td>
        <td>So soll das Array selbst umgebogen werden.</td>
        <td>Genau daran merkt man: Das Array ist nicht bloß ein normaler frei umhängbarer Pointername.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo D: <code>sizeof</code> fragt nach der Bauart

```cpp
int zahlen[3] = {1, 2, 3};
int *p = zahlen;
```

<div class="table-card">
  <p class="card-kicker">Diagnoseblick</p>
  <h3>Worauf schaut <code>sizeof</code> hier?</h3>
  <table>
    <thead>
      <tr>
        <th>Ausdruck</th>
        <th>Didaktische Frage</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>sizeof(zahlen)</code></td>
        <td>Wie groß ist der gesamte feste Bereich?</td>
        <td>Hier sieht man das Array als zusammengehörigen Speicherblock.</td>
      </tr>
      <tr>
        <td><code>sizeof(p)</code></td>
        <td>Wie groß ist die Pointervariable selbst?</td>
        <td>Hier sieht man nur die Adressvariable, nicht den Zielbereich.</td>
      </tr>
    </tbody>
  </table>
</div>

## Eingebautes Leseraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Erst die Bauart prüfen</strong>
    <span>Liegt ein Array vor oder eine Pointervariable?</span>
  </div>
  <div class="step-item">
    <strong>2. Dann die Nutzung lesen</strong>
    <span>Indexzugriff allein ist zu oberflächlich, um beide gleichzusetzen.</span>
  </div>
  <div class="step-item">
    <strong>3. Umhängbarkeit testen</strong>
    <span>Kann der Name auf ein anderes Ziel zeigen oder nicht?</span>
  </div>
  <div class="step-item">
    <strong>4. Diagnosebeispiel suchen</strong>
    <span><code>sizeof</code> oder ein Umhängen trennen beide Rollen oft klarer als bloße Zugriffssyntax.</span>
  </div>
</div>

## Seitengrenze zu den Nachbarseiten

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage sauber wählen</p>
  <h3>Diese Seite bleibt bei Struktur und Besitz des Bereichs</h3>
  <table>
    <thead>
      <tr>
        <th>Mini-Beispiel</th>
        <th>Erste Fachfrage</th>
        <th>Einordnung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int zahlen[3]; int *p = zahlen;</code></td>
        <td>Wer ist Bereich, wer zeigt nur darauf?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>p = &amp;zahl;</code></td>
        <td>Was bedeutet <code>&amp;</code> im Ausdruck?</td>
        <td>Nein – zuerst Adressoperator und Dereferenzierung.</td>
      </tr>
      <tr>
        <td><code>void f(int *p)</code> vs. <code>void f(int &amp;r)</code></td>
        <td>Wie sieht der Funktionsvertrag aus?</td>
        <td>Nein – zuerst Pointerparameter vs. Referenzparameter.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. Ist der Name selbst der Bereich?
2. Oder speichert die Variable nur eine Adresse?
3. Indexzugriff nicht überbewerten.
4. Mit Umhängen oder sizeof die Bauart sichtbar machen.</code></pre>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Arrayname kann in manchen Ausdrücken pointerähnlich wirken. Trotzdem bleibt das Array der feste Bereich – und der Pointer die eigene Adressvariable.</p>
</div>
