---
title: "Dangling Pointer nach delete verstehen"
description: "Verstehe, warum ein Pointer nach dem Freigeben des Zielspeichers noch existieren kann, aber nicht mehr sicher auf ein nutzbares Objekt zeigt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "dangling-pointer-nach-delete-verstehen"]
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

Ein Dangling Pointer ist kein Speicherleck und auch nicht schon die spätere Rettungsfrage <code>p = nullptr;</code>. Der Speicher wurde bereits beendet – aber ein Pointername trägt die alte Adresse noch weiter mit sich herum. Kritisch wird der Zustand dann, wenn später erneut über ihn zugegriffen wird.

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Der Name bleibt, das sichere Ziel nicht</h3>
  <p>Nach <code>delete p;</code> kann <code>p</code> als Variable noch sichtbar sein. Genau das verführt leicht zum Denkfehler, die frühere Zielbeziehung sei damit auch noch gültig.</p>
</div>

## Kernbeispiel

```cpp
int *p = new int;
*p = 7;
delete p;
cout << *p;
```

<div class="table-card">
  <p class="card-kicker">Zeitpunkte trennen</p>
  <h3>Wo liegt der Problemzustand, wo der Folgefehler?</h3>
  <table>
    <thead>
      <tr>
        <th>Zeitpunkt</th>
        <th>Was stimmt noch?</th>
        <th>Was stimmt nicht mehr?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vor <code>delete p;</code></td>
        <td>Der Bereich ist reserviert und über <code>p</code> nutzbar.</td>
        <td>Es gibt hier noch keinen Dangling-Zustand.</td>
      </tr>
      <tr>
        <td>Direkt nach <code>delete p;</code></td>
        <td><code>p</code> existiert noch als Variable.</td>
        <td>Das frühere Ziel ist nicht mehr sicher nutzbar.</td>
      </tr>
      <tr>
        <td>Bei <code>cout &lt;&lt; *p;</code></td>
        <td>Der Name <code>p</code> ist immer noch syntaktisch lesbar.</td>
        <td>Jetzt wird der alte Restzustand tatsächlich benutzt.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Speicherprotokoll

<div class="table-card">
  <p class="card-kicker">So kannst du den Zustand lesen</p>
  <h3>Name, Adresse, Ziel nicht vermischen</h3>
  <table>
    <thead>
      <tr>
        <th>Frage</th>
        <th>Vor <code>delete</code></th>
        <th>Nach <code>delete</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Gibt es die Variable <code>p</code> noch?</td>
        <td>Ja</td>
        <td>Ja</td>
      </tr>
      <tr>
        <td>Ist das frühere Ziel noch sicher nutzbar?</td>
        <td>Ja</td>
        <td>Nein</td>
      </tr>
      <tr>
        <td>Ist ein späteres <code>*p</code> unkritisch?</td>
        <td>Ja, solange der Bereich gültig ist.</td>
        <td>Nein, genau das ist die Folgegefahr.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. Bereich freigeben.
2. Pointername nicht mitlöschen.
3. Früheres Ziel als unsicher markieren.
4. Nächsten Zugriff besonders kritisch lesen.</code></pre>

## Mini-Demo mit Alias-Pointer

```cpp
int *p = new int;
int *q = p;
delete p;
```

<div class="table-card">
  <p class="card-kicker">Nicht nur ein Name kann alt werden</p>
  <h3>Was bleibt nach <code>delete p;</code> bei <code>p</code> und <code>q</code> übrig?</h3>
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Lesart nach <code>delete p;</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>p</code></td>
        <td>Der Name existiert noch, sein früheres Ziel ist aber nicht mehr sicher nutzbar.</td>
      </tr>
      <tr>
        <td><code>q</code></td>
        <td>Auch dieser zweite Name trägt die alte Adresse weiter. Das Problem hängt also nicht nur an einer einzigen Variablen.</td>
      </tr>
    </tbody>
  </table>
</div>

## Zweite Mini-Demo: Zustand und Folgefehler zeitlich trennen

<div class="table-card">
  <p class="card-kicker">Zeitpunktfrage</p>
  <h3>Die riskante Lage beginnt oft früher als der sichtbare Folgezugriff</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Was passiert?</th>
        <th>Welche Fachfrage gehört hierhin?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>delete p;</code></td>
        <td>Der frühere Bereich ist beendet, <code>p</code> trägt die alte Adresse aber noch mit.</td>
        <td>Hier entsteht der problematische Zustand.</td>
      </tr>
      <tr>
        <td><code>... später ...</code></td>
        <td>Der Code kann zunächst noch harmlos aussehen.</td>
        <td>Der Zustand bleibt trotzdem kritisch.</td>
      </tr>
      <tr>
        <td><code>cout &lt;&lt; *p;</code></td>
        <td>Jetzt wird aus dem Zustand ein konkreter Folgezugriff.</td>
        <td>Hier wird das Risiko sichtbar benutzt.</td>
      </tr>
    </tbody>
  </table>
</div>

## Eingebautes Gegenbeispiel

```cpp
int *p = new int;
delete p;
p = nullptr;
```

<div class="compare-card">
  <p class="card-kicker">Seitengrenze</p>
  <h3>Diagnose zuerst, Nachmaßnahme später</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Diese Seite</strong>
      <span>Beschreibt den problematischen Zustand direkt nach der Freigabe und fragt nach riskanten Folgezugriffen.</span>
    </div>
    <div class="compare-item">
      <strong>Nachbarseite</strong>
      <span>Fragt erst danach, was ein zusätzliches <code>p = nullptr;</code> lokal verbessert und wo seine Grenze bleibt.</span>
    </div>
  </div>
</div>

## Schneller Seitencheck

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage treffen</p>
  <h3>Woran du die Seite sofort erkennst</h3>
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
        <td><code>delete p; cout &lt;&lt; *p;</code></td>
        <td>Warum ist der Folgezugriff über den alten Rest gefährlich?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>delete p; p = nullptr;</code></td>
        <td>Was verbessert das bewusste Leersetzen danach lokal?</td>
        <td>Nein – das ist zuerst die Nullsetzen-Seite.</td>
      </tr>
      <tr>
        <td><code>int *q = p; delete p; delete q;</code></td>
        <td>Wird derselbe Bereich ein zweites Mal freigegeben?</td>
        <td>Nein – das ist zuerst die Double-Delete-Seite.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Dangling Pointer ist zuerst ein Zustandsproblem: Der Name ist noch da, das frühere Ziel aber nicht mehr sicher. Der eigentliche Folgefehler wird oft erst in der nächsten Zugriffzeile sichtbar.</p>
</div>
