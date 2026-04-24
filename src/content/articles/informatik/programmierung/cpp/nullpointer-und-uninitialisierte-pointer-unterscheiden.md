---
title: Nullpointer und uninitialisierte Pointer unterscheiden
description: Verstehe den Unterschied zwischen einem bewusst leeren Pointer mit nullptr und einem Pointer, der noch gar keinen verlässlichen Startzustand hat.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - nullpointer-und-uninitialisierte-pointer-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen <code>nullptr</code> und einem uninitialisierten Pointer.
  - Du erkennst, warum „bewusst leer“ fachlich etwas anderes ist als „noch gar nicht vorbereitet“.
  - Du leitest eine ruhige Grundregel für die Initialisierung neuer Pointer ab.
practiceIdeas:
  - Vergleiche Deklarationen mit und ohne Initialisierung in klaren Sätzen.
  - Markiere in Beispielen, welcher Pointer einen definierten Startzustand hat.
  - Formuliere für neue Pointer bewusst eine sichere Initialisierungsregel.
commonMistakes:
  - Einen uninitialisierten Pointer so zu behandeln, als wäre er einfach nur „leer“.
  - Zu glauben, man könne einen uninitialisierten Pointer erst einmal gefahrlos stehen lassen.
  - Die Startzustandsfrage mit der späteren Zugriffsfrage zu vermischen.
keyTakeaways:
  - <code>nullptr</code> bedeutet bewusst: Dieser Pointer zeigt aktuell auf kein Objekt.
  - Ein uninitialisierter Pointer hat keinen verlässlichen Startzustand.
  - Diese Seite klärt den Anfangszustand, noch nicht die spätere Dereferenzierung.
recognizeSignals:
  - Es geht um Pointer-Deklarationen und ihren Anfangszustand.
  - Du sollst entscheiden, ob ein Pointer sauber vorbereitet oder noch fachlich unklar ist.
  - In Aufgaben tauchen <code>nullptr</code>, Initialisierung oder Startfehler auf.
selfCheckPoints:
  - Kann ich den Unterschied zwischen „bewusst leer“ und „gar nicht festgelegt“ erklären?
  - Kann ich sagen, warum <code>nullptr</code> ein sinnvoller Startwert ist?
  - Kann ich begründen, warum diese Frage noch vor jeder Dereferenzierung liegt?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - nullptr
draft: false
---

## Grundidee

Nicht jeder Pointer ohne gültiges Ziel ist gleich. Es gibt einen wichtigen Unterschied zwischen

- einem **bewusst leeren** Pointer mit <code>nullptr</code> und
- einem **uninitialisierten** Pointer, der noch gar keinen verlässlichen Startzustand hat.

Genau diese Trennung gehört an den Anfang. Bevor du über <code>*p</code> oder Sicherheitsabfragen nachdenkst, musst du zuerst klären, **in welchem Startzustand** der Pointer überhaupt vorliegt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Deklarationen, zwei sehr verschiedene Startlagen</h3>
  <p><code>int *a = nullptr;</code> sagt klar: Dieser Pointer zeigt im Moment bewusst auf nichts. <code>int *b;</code> sagt dagegen nur: Hier gibt es einen Pointer – aber noch keinen sauber festgelegten Anfangszustand, mit dem man ruhig weiterarbeiten sollte.</p>
</div>

## Der entscheidende Unterschied

<div class="compare-card">
  <p class="card-kicker">Nicht gleichsetzen</p>
  <h3>Bewusst leer ist etwas anderes als gar nicht vorbereitet</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>int *a = nullptr;</code></strong>
      <span>Der Pointer ist bewusst initialisiert. Sein aktueller Zustand ist klar und absichtlich gesetzt.</span>
    </div>
    <div class="compare-item">
      <strong><code>int *b;</code></strong>
      <span>Der Pointer wurde deklariert, aber nicht mit einem verlässlichen Startwert vorbereitet.</span>
    </div>
  </div>
</div>

## Eingebautes Mini-Beispiel

```cpp
int *a = nullptr;
int *b;
```

<div class="table-card">
  <p class="card-kicker">Leseraster</p>
  <h3>Was weißt du direkt nach der Deklaration?</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Was ist sicher gesagt?</th>
        <th>Didaktische Bewertung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *a = nullptr;</code></td>
        <td><code>a</code> ist bewusst auf „zeigt auf nichts“ gesetzt.</td>
        <td>Klarer, definierter Startzustand.</td>
      </tr>
      <tr>
        <td><code>int *b;</code></td>
        <td>Es existiert ein Pointer, aber kein sauber gesetzter Startwert.</td>
        <td>Als Anfangszustand fachlich unsauber.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>Gedanklicher Zustandsblick direkt nach der Deklaration:
a -> bewusst leer
b -> fachlich unklarer Startzustand</code></pre>

Das ist der Qualitätskern dieser Seite: Nicht nur die Wörter kennen, sondern eine Deklaration **sofort ruhig lesen können**.

## Was dieses Beispiel noch nicht beantwortet


## Nicht mit Nachbarseiten vermischen

<div class="compare-card">
  <p class="card-kicker">Seitengrenze</p>
  <h3>Hier geht es um den Startzustand, nicht schon um den späteren Zugriff</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Diese Seite</strong>
      <span>Verglichen wird, ob ein Pointer bewusst leer und definiert startet oder ohne saubere Vorbereitung im Raum steht.</span>
    </div>
    <div class="compare-item">
      <strong><code>nullptr</code> vor Dereferenzierung prüfen</strong>
      <span>Dort beginnt die nächste Frage: Was muss vor einem Zugriff mit <code>*p</code> passieren?</span>
    </div>
    <div class="compare-item">
      <strong>Adressoperator und Dereferenzierung</strong>
      <span>Dort werden Ausdrucksrollen gelesen, nicht Startzustände von Pointervariablen.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Wichtig:</strong> Diese Seite beantwortet noch nicht, ob später <code>*a</code> oder <code>*b</code> benutzt werden darf. Sie klärt nur den Startzustand. Die Zugriffsfrage gehört auf die Nachbarseite zum Prüfen vor der Dereferenzierung.</p>
</div>

Gerade hier entstehen Doppelungen leicht. Deshalb hilft eine saubere Trennung:

- **Diese Seite:** In welchem Zustand startet der Pointer?
- **Andere Seite:** Darf jetzt dereferenziert werden oder nicht?

## Drei Fragen nicht vermischen

<div class="table-card">
  <p class="card-kicker">Auditblick</p>
  <h3>Drei ähnliche Pointer-Fragen, drei verschiedene Themen</h3>
  <table>
    <thead>
      <tr>
        <th>Frage</th>
        <th>Beispiel</th>
        <th>Gehört wohin?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wie startet die Variable?</td>
        <td><code>int *p = nullptr;</code> oder <code>int *p;</code></td>
        <td>Diese Seite</td>
      </tr>
      <tr>
        <td>Darf gerade zugegriffen werden?</td>
        <td><code>if (p != nullptr) { cout &lt;&lt; *p; }</code></td>
        <td>Nachbarseite zum Prüfen vor der Dereferenzierung</td>
      </tr>
      <tr>
        <td>Was bedeutet <code>*p</code> fachlich?</td>
        <td><code>*p = 7;</code> oder <code>cout &lt;&lt; *p;</code></td>
        <td>Seite zu Adressoperator und Dereferenzierung</td>
      </tr>
    </tbody>
  </table>
</div>

Diese Trennung hilft im Audit besonders: Eine gute Seite beantwortet hier nur die Startzustandsfrage und zieht nicht zusätzlich noch Ausdrucksrollen oder Zugriffsroutinen an sich.

## Eine ruhige Grundregel

<div class="figure-card">
  <p class="card-kicker">Merkschema</p>
  <h3>Erst Startzustand, dann Zugriff denken</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Deklaration lesen</strong><span>Wurde überhaupt initialisiert?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Zustand benennen</strong><span>bewusst leer oder fachlich unklar?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Erst danach weiterdenken</strong><span>Zugriff ist eine spätere Frage.</span></div>
  </div>
</div>

## Typischer Denkfehler

Ein uninitialisierter Pointer wird im Kopf oft zu schnell als „halt noch leer“ vereinfacht. Genau das ist didaktisch gefährlich. <code>nullptr</code> ist eine **bewusste Aussage**. Ein uninitialisierter Pointer ist gerade das Fehlen so einer Aussage.

## Mini-Demo mit späterer Vorbereitung

```cpp
int *p = nullptr;
int wert = 7;
p = &wert;
```

<div class="table-card">
  <p class="card-kicker">Ablauf lesen</p>
  <h3>Warum ist dieser Ablauf sauberer?</h3>
  <table>
    <thead>
      <tr>
        <th>Schritt</th>
        <th>Was passiert?</th>
        <th>Warum didaktisch sauber?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><code>p</code> startet mit <code>nullptr</code>.</td>
        <td>Der Anfangszustand ist klar lesbar.</td>
      </tr>
      <tr>
        <td>2</td>
        <td><code>wert</code> bekommt einen normalen Wert.</td>
        <td>Es gibt ein echtes Zielobjekt.</td>
      </tr>
      <tr>
        <td>3</td>
        <td><code>p = &amp;wert;</code></td>
        <td>Das Ziel wird bewusst und nachvollziehbar gesetzt.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Pointer-Deklarationen wirken nicht erst dann sicher, wenn später ein <code>if</code> auftaucht. Qualität beginnt schon beim klaren Startzustand.</p>
</div>
