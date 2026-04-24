---
title: delete und delete[] unterscheiden
description: Verstehe, warum bei dynamisch reservierten Arrays eine andere Freigabeform nötig ist als bei einem einzelnen Objekt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - delete-und-delete-array-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen <code>delete</code> für ein einzelnes Objekt und <code>delete[]</code> für ein dynamisch reserviertes Array.
  - Du liest <code>new</code>/<code>new[]</code> und die passende Freigabe als zusammengehörige Paare.
  - Du vermeidest die typische Gleichsetzung „löschen ist immer delete“.
practiceIdeas:
  - Ordne kleinen Beispielen passende Freigabeformen zu.
  - Vergleiche ein einzelnes dynamisches Objekt mit einem dynamischen Array.
  - Formuliere zu jeder Reservierung sofort die passende Freigabe mit.
commonMistakes:
  - Für Arrays automatisch nur <code>delete</code> zu schreiben.
  - Die eckigen Klammern bei Reservierung oder Freigabe zu übersehen.
  - Einzelobjekt und Feldstruktur im Speicher gleich zu behandeln.
keyTakeaways:
  - <code>new T</code> gehört zu <code>delete</code>.
  - <code>new T[n]</code> gehört zu <code>delete[]</code>.
  - Die Freigabeform muss zur Reservierungsform passen.
recognizeSignals:
  - Im Beispiel stehen <code>new[]</code>, mehrere Elemente oder ein Feldzugriff wie <code>p[0]</code>.
  - Du sollst entscheiden, welche Freigabe fachlich passt.
  - Es geht um ein einzelnes Objekt versus mehrere zusammenhängende Elemente.
selfCheckPoints:
  - Kann ich Einzelobjekt und dynamisches Array sauber unterscheiden?
  - Kann ich erklären, wann <code>delete[]</code> nötig ist?
  - Kann ich Reservierung und Freigabe als Paar lesen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - speicher
  - delete
  - arrays
draft: false
---
## Grundidee

Diese Seite setzt voraus, dass dynamisch reservierter Speicher wieder freigegeben werden muss. Hier geht es nur noch um die engere Frage:

**Wurde ein einzelnes Objekt erzeugt – oder ein Feld mit mehreren Elementen?**

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Nicht vom Pointertyp ausgehen</h3>
  <p><code>int *a</code> und <code>int *b</code> können gleich aussehen. Trotzdem kann für <code>a</code> später <code>delete</code> und für <code>b</code> später <code>delete[]</code> nötig sein. Entscheidend ist die Erzeugungszeile, nicht die nackte Typzeile und auch nicht die spätere Zugriffssyntax.</p>
</div>

## Das Paar, das du dir merken musst

```cpp
int *einzeln = new int;
int *feld = new int[3];

delete einzeln;
delete[] feld;
```

<div class="table-card">
  <p class="card-kicker">Zuordnung</p>
  <h3>Immer Erzeugung und Freigabe zusammen lesen</h3>
  <table>
    <thead>
      <tr>
        <th>Erzeugung</th>
        <th>Struktur</th>
        <th>Passende Freigabe</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>new T</code></td>
        <td>ein einzelnes Objekt</td>
        <td><code>delete</code></td>
      </tr>
      <tr>
        <td><code>new T[n]</code></td>
        <td>mehrere zusammenhängende Elemente</td>
        <td><code>delete[]</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo A: gleicher Typ, andere Vergangenheit

```cpp
int *a = new int;
int *b = new int[2];
```

<div class="table-card">
  <p class="card-kicker">Nicht täuschen lassen</p>
  <h3>Beide heißen <code>int*</code>, aber nicht beide meinen ein Einzelobjekt</h3>
  <table>
    <thead>
      <tr>
        <th>Pointer</th>
        <th>Typ</th>
        <th>Entscheidende Erzeugung</th>
        <th>Passende Freigabe</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>a</code></td>
        <td><code>int *</code></td>
        <td><code>new int</code></td>
        <td><code>delete a;</code></td>
      </tr>
      <tr>
        <td><code>b</code></td>
        <td><code>int *</code></td>
        <td><code>new int[2]</code></td>
        <td><code>delete[] b;</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo B: Zugriffssyntax entscheidet nicht

```cpp
int *feld = new int[3];
*feld = 1;
feld[1] = 2;
```

<div class="compare-card">
  <p class="card-kicker">Typische Fehlspur</p>
  <h3>Einzelzugriff oder Indexzugriff ändern die Speicherform nicht</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>*feld = 1;</code></strong>
      <span>Hier wird nur das erste Element des Feldes genutzt.</span>
    </div>
    <div class="compare-item">
      <strong><code>feld[1] = 2;</code></strong>
      <span>Hier wird ein weiteres Element desselben Feldes genutzt.</span>
    </div>
  </div>
</div>

Beide Zeilen sagen etwas über die Nutzung aus, aber nichts Neues über die Erzeugungsform. Die wurde schon mit <code>new int[3]</code> festgelegt.

## Mini-Demo C: Erst rückwärts zur Erzeugung gehen

```cpp
int *daten = new int[4];

/* viele Zeilen später */

delete[] daten;
```

<div class="table-card">
  <p class="card-kicker">Diagnoseweg</p>
  <h3>Welche Zeile muss man zuerst suchen?</h3>
  <table>
    <thead>
      <tr>
        <th>Frage</th>
        <th>Falscher erster Blick</th>
        <th>Richtiger erster Blick</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ist <code>delete[]</code> richtig?</td>
        <td>Nur auf den Typ <code>int *</code> schauen</td>
        <td>Zur Erzeugungszeile <code>new int[4]</code> zurückgehen</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo D: fast gleiche Freigabezeile, andere Rückfrage

```cpp
delete a;
delete[] b;
```

<div class="table-card">
  <p class="card-kicker">Zwei Rückfragen genügen</p>
  <h3>Welche Freigabeform passt?</h3>
  <table>
    <thead>
      <tr>
        <th>Freigabezeile</th>
        <th>Rückfrage</th>
        <th>Saubere Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>delete a;</code></td>
        <td>Kam <code>a</code> aus <code>new T</code>?</td>
        <td>Dann passt <code>delete</code>.</td>
      </tr>
      <tr>
        <td><code>delete[] b;</code></td>
        <td>Kam <code>b</code> aus <code>new T[n]</code>?</td>
        <td>Dann passt <code>delete[]</code>.</td>
      </tr>
    </tbody>
  </table>
</div>

## Viererschritt für die richtige Freigabe

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zur Erzeugung zurückgehen</strong>
    <span>Die entscheidende Information steckt in <code>new</code> oder <code>new[]</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Einzelobjekt oder Feld?</strong>
    <span>Diese Strukturfrage entscheidet die Freigabeform.</span>
  </div>
  <div class="step-item">
    <strong>3. Zugriffssyntax ignorieren</strong>
    <span><code>*p</code> oder <code>p[i]</code> sagen nichts Neues über die Reservierungsform.</span>
  </div>
  <div class="step-item">
    <strong>4. Paar vollständig lesen</strong>
    <span><code>new T</code> gehört zu <code>delete</code>, <code>new T[n]</code> zu <code>delete[]</code>.</span>
  </div>
</div>

## Seitengrenze zu den Nachbarseiten

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage sauber wählen</p>
  <h3>Diese Seite bleibt bei der Paarung von Erzeugung und Freigabe</h3>
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
        <td><code>int *p = new int[3]; delete[] p;</code></td>
        <td>Welche Freigabe gehört zur Erzeugung?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>int *p = new int; delete p; delete p;</code></td>
        <td>Wird derselbe Bereich doppelt freigegeben?</td>
        <td>Nein – zuerst Double Delete.</td>
      </tr>
      <tr>
        <td><code>int *p = new int; p = new int;</code></td>
        <td>Geht ein früherer Bereich verloren?</td>
        <td>Nein – zuerst Speicherleck durch fehlende Freigabe.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. Nicht beim Typ stehen bleiben.
2. Zur Erzeugung zurückgehen.
3. Einzelobjekt oder Feld klären.
4. Erst dann delete oder delete[] schreiben.</code></pre>

<div class="note-panel">
  <p><strong>Merke:</strong> Die Freigabeform wird nicht durch die spätere Nutzung bestimmt, sondern durch die ursprüngliche Reservierungsform.</p>
</div>
