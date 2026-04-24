---
title: Pointerparameter und Referenzparameter unterscheiden
description: Verstehe, warum Pointer- und Referenzparameter beide auf Originaldaten wirken können, aber unterschiedlich gelesen und verwendet werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - pointerparameter-und-referenzparameter-unterscheiden
learningGoals:
  - Du beschreibst den Unterschied zwischen Pointerparametern und Referenzparametern.
  - Du erkennst, warum beide auf Originaldaten wirken können, aber verschieden aufgerufen werden.
  - Du leitest ruhig ab, wann ein Pointer und wann eine Referenz didaktisch besser passt.
practiceIdeas:
  - Vergleiche denselben Funktionszweck einmal mit Pointer und einmal mit Referenz.
  - Markiere bei Funktionsaufrufen, ob eine Adresse übergeben werden muss.
  - Formuliere in Worten, ob ein Parameter optional oder als sicher vorhanden gedacht ist.
commonMistakes:
  - Zu glauben, Pointerparameter und Referenzparameter seien nur zwei Schreibweisen ohne Unterschied.
  - Bei Pointerparametern den Adressoperator am Aufruf zu vergessen.
  - Nicht zu beachten, dass ein Pointer auch bewusst auf kein Objekt zeigen kann, eine Referenz aber auf ein vorhandenes Objekt bezogen gelesen wird.
keyTakeaways:
  - Beide Parameterarten können auf Originaldaten wirken.
  - Pointerparameter arbeiten mit einer Adresse und werden mit <code>&amp;</code> oder <code>nullptr</code> gedacht.
  - Referenzparameter lesen sich direkter, weil mit dem Originalobjekt gearbeitet wird.
recognizeSignals:
  - Eine Funktion soll Daten direkt verändern.
  - Im Vergleich tauchen <code>int*</code> und <code>int&amp;</code> nebeneinander auf.
  - Du sollst erklären, wann eine Adresse explizit übergeben wird und wann nicht.
selfCheckPoints:
  - Kann ich Pointer- und Referenzparameter am Funktionskopf unterscheiden?
  - Kann ich den Unterschied beim Funktionsaufruf erklären?
  - Kann ich begründen, wann Pointer und wann Referenz klarer wirkt?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - referenz
draft: false
---
## Grundidee

Pointerparameter und Referenzparameter können beide auf Originaldaten wirken. Die wichtige Trennlinie liegt deshalb **nicht zuerst im Ergebnis**, sondern in der Schnittstelle:

- Wird eine **Adresse sichtbar übergeben**?
- Arbeitet die Funktion mit einem **bereits vorhandenen Objekt**?
- Darf das Ziel auch **fehlen**?

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Gleiche Wirkung möglich, anderer Vertrag</h3>
  <p>Zwei Funktionen können beide eine Zahl verändern und trotzdem fachlich etwas anderes ausdrücken. Der Pointerparameter macht den Weg über eine Adresse sichtbar. Der Referenzparameter liest sich direkter, weil mit einem vorhandenen Objekt gearbeitet wird.</p>
</div>

## Mini-Demo A: gleicher Zweck, zwei Schnittstellen

```cpp
void erhoehePointer(int *wert);
void erhoeheReferenz(int &wert);
```

<div class="table-card">
  <p class="card-kicker">Schnittstellenblick</p>
  <h3>Nicht zuerst auf die Wirkung, sondern auf den Vertrag schauen</h3>
  <table>
    <thead>
      <tr>
        <th>Funktionskopf</th>
        <th>Was wird sichtbar übergeben?</th>
        <th>Didaktische Grundlesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *wert</code></td>
        <td>eine Adresse</td>
        <td>Die Funktion bekommt einen Zielpfad und muss indirekt arbeiten.</td>
      </tr>
      <tr>
        <td><code>int &amp;wert</code></td>
        <td>ein vorhandenes Objekt direkt gebunden</td>
        <td>Die Funktion arbeitet mit einem Ziel, das in der Grundlesart bereits vorhanden ist.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo B: das Aufrufbild macht den Unterschied sichtbar

```cpp
int zahl = 5;

erhoehePointer(&zahl);
erhoeheReferenz(zahl);
```

<div class="compare-card">
  <p class="card-kicker">Aufrufkontrast</p>
  <h3>Hier sieht man die Schnittstelle deutlicher als im Ergebnis</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>erhoehePointer(&amp;zahl)</code></strong>
      <span>Die Adresse wird ausdrücklich übergeben.</span>
    </div>
    <div class="compare-item">
      <strong><code>erhoeheReferenz(zahl)</code></strong>
      <span>Das vorhandene Objekt wird direkt an die Funktion gebunden.</span>
    </div>
  </div>
</div>

## Mini-Demo C: optionales Ziel trennt beide besonders klar

```cpp
void pruefePointer(int *wert);
void pruefeReferenz(int &wert);

pruefePointer(&zahl);
pruefePointer(nullptr);
```

<div class="table-card">
  <p class="card-kicker">Vertragsfrage</p>
  <h3>Wann ist „kein Ziel“ Teil der Schnittstelle?</h3>
  <table>
    <thead>
      <tr>
        <th>Variante</th>
        <th>Kann bewusst „kein Ziel“ vorkommen?</th>
        <th>Didaktische Folgerung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pointerparameter</td>
        <td>ja, etwa mit <code>nullptr</code></td>
        <td>Die Schnittstelle kann optionales oder fehlendes Ziel ausdrücklich mitdenken.</td>
      </tr>
      <tr>
        <td>Referenzparameter</td>
        <td>in der Grundlesart nein</td>
        <td>Die Schnittstelle liest sich so, als müsse ein echtes Objekt vorhanden sein.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo D: gleicher Endeffekt, trotzdem anderer Denkweg

```cpp
void setzeNullPointer(int *wert) {
  *wert = 0;
}

void setzeNullReferenz(int &wert) {
  wert = 0;
}
```

<div class="table-card">
  <p class="card-kicker">Rumpfblick</p>
  <h3>Im Funktionskörper sieht man den Unterschied weiter</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>*wert = 0;</code></td>
        <td>Erst über einen Pointer zum Zielwert gehen, dann schreiben.</td>
      </tr>
      <tr>
        <td><code>wert = 0;</code></td>
        <td>Direkt mit dem gebundenen Ziel arbeiten.</td>
      </tr>
    </tbody>
  </table>
</div>

## Drei schnelle Leitfragen

<div class="step-grid">
  <div class="step-item">
    <strong>1. Wie sieht der Aufruf aus?</strong>
    <span>Muss ich eine Adresse mit <code>&amp;</code> übergeben oder nicht?</span>
  </div>
  <div class="step-item">
    <strong>2. Darf das Ziel fehlen?</strong>
    <span>Wenn <code>nullptr</code> als sinnvoller Fall mitgedacht wird, spricht das für einen Pointerparameter.</span>
  </div>
  <div class="step-item">
    <strong>3. Wie liest sich der Vertrag?</strong>
    <span>Geht es um einen Zielpfad oder um ein vorhandenes Objekt direkt?</span>
  </div>
</div>

## Seitengrenze zu den Nachbarseiten

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage sauber wählen</p>
  <h3>Diese Seite bleibt bei Funktionsverträgen</h3>
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
        <td><code>void f(int *p)</code> vs. <code>void f(int &amp;r)</code></td>
        <td>Wie sieht die Schnittstelle aus?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>int *p = &amp;x; cout &lt;&lt; *p;</code></td>
        <td>Was bedeuten <code>&amp;</code> und <code>*</code> im Ausdruck?</td>
        <td>Nein – zuerst Adressoperator und Dereferenzierung.</td>
      </tr>
      <tr>
        <td><code>if (p != nullptr) cout &lt;&lt; *p;</code></td>
        <td>Welche Prüfung muss vor dem Zugriff passieren?</td>
        <td>Nein – zuerst nullptr vor Dereferenzierung prüfen.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. Sieh zuerst auf den Funktionskopf.
2. Prüfe den Aufruf: Adresse sichtbar oder nicht?
3. Frage dann: darf das Ziel fehlen?
4. Erst danach die Wirkung im Rumpf lesen.</code></pre>

<div class="note-panel">
  <p><strong>Merke:</strong> Pointerparameter und Referenzparameter können ähnlich wirken. Fachlich sauber trennst du sie aber über Vertrag, Aufrufbild und Option „kein Ziel“.</p>
</div>
