---
title: Double Delete als Fehlerbild erkennen
description: Verstehe, warum dieselbe dynamische Reservierung nicht zweimal freigegeben werden darf und wie Alias-Pointer dieses Fehlerbild begünstigen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - double-delete-als-fehlerbild-erkennen
learningGoals:
  - Du erklärst, warum derselbe Speicherbereich nur einmal freigegeben werden darf.
  - Du erkennst Alias-Pointer als typischen Auslöser für Double Delete.
  - Du liest kleine Speicherabläufe systematisch statt nur einzelne <code>delete</code>-Zeilen zu betrachten.
practiceIdeas:
  - Markiere in kurzen Beispielen, welcher Pointer welchen Speicherbereich meint.
  - Prüfe, ob zwei Pointer auf dieselbe Adresse zeigen.
  - Lies jede Freigabe als Ereignis und frage danach, ob derselbe Speicher schon beendet wurde.
commonMistakes:
  - Zu glauben, jeder Pointer dürfe seine eigene Freigabe ausführen.
  - Alias-Pointer mit zwei verschiedenen Speicherbereichen zu verwechseln.
  - Nur auf Syntax zu schauen statt auf den gemeinsam gemeinten Speicher.
keyTakeaways:
  - Eine Reservierung darf nur einmal freigegeben werden.
  - Zwei Pointer können auf denselben Speicher zeigen, ohne dass dadurch zwei Freigaben erlaubt werden.
  - Bei Double Delete liegt der Fehler in der Ablauflogik, nicht nur in einer einzelnen Zeile.
recognizeSignals:
  - Ein Pointer wird kopiert oder einer zweiten Variable zugewiesen.
  - Mehrere <code>delete</code>-Stellen greifen scheinbar auf denselben Bereich zu.
  - Es geht um Alias-Pointer und gemeinsame Verantwortung für dieselbe Adresse.
selfCheckPoints:
  - Kann ich sagen, ob zwei Pointer denselben Speicher meinen?
  - Kann ich begründen, warum derselbe Bereich nur einmal freigegeben werden darf?
  - Kann ich Double Delete von fehlender Freigabe unterscheiden?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - speicher
  - double-delete
draft: false
---
## Grundidee

Double Delete bedeutet nicht einfach „im Code stehen zwei <code>delete</code>-Zeilen“. Die eigentliche Diagnose lautet:

**Ein und derselbe dynamische Bereich wird ein zweites Mal freigegeben.**

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Zwei Namen sind noch keine zwei Bereiche</h3>
  <p>Wenn ein Pointer kopiert wird, entstehen nicht automatisch zwei Reservierungen. Genau hier kippt das Denken oft: Zwei Variablennamen sehen nach zwei Zuständigkeiten aus, meinen aber vielleicht denselben Bereich.</p>
</div>

## Mini-Demo A: Alias-Pointer sauber lesen

```cpp
int *p = new int;
int *q = p;
delete p;
delete q;
```

<div class="table-card">
  <p class="card-kicker">Ablauflesung</p>
  <h3>Was passiert Zeile für Zeile?</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Wie viele echte Bereiche?</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *p = new int;</code></td>
        <td>ein Bereich</td>
        <td>Die Reservierung entsteht.</td>
      </tr>
      <tr>
        <td><code>int *q = p;</code></td>
        <td>weiterhin ein Bereich</td>
        <td><code>q</code> ist nur ein zweiter Name für dieselbe Adresse.</td>
      </tr>
      <tr>
        <td><code>delete p;</code></td>
        <td>kein gültiger Bereich mehr</td>
        <td>Der Bereich wird beendet.</td>
      </tr>
      <tr>
        <td><code>delete q;</code></td>
        <td>kein zweiter Bereich vorhanden</td>
        <td>Genau hier passiert Double Delete.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo B: zwei Pointer können auch zwei Bereiche meinen

```cpp
int *p = new int;
int *q = new int;
delete p;
delete q;
```

<div class="compare-card">
  <p class="card-kicker">Wichtiger Gegenfall</p>
  <h3>Zwei delete-Zeilen sind allein noch kein Beweis</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Alias-Fall</strong>
      <span><code>q = p</code> kopiert nur die Adresse. Beide Namen meinen denselben Bereich.</span>
    </div>
    <div class="compare-item">
      <strong>Zwei-new-Fall</strong>
      <span>Zwei getrennte <code>new</code>-Zeilen erzeugen auch zwei getrennte Bereiche.</span>
    </div>
  </div>
</div>

## Mini-Demo C: gleiches Problemfeld, aber andere Erstdiagnose

```cpp
int *p = new int;
delete p;
cout << *p;
```

<div class="table-card">
  <p class="card-kicker">Grenze zur Nachbarseite</p>
  <h3>Hier kippt der Fehler nicht bei der zweiten Freigabe</h3>
  <table>
    <thead>
      <tr>
        <th>Frage</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wird derselbe Bereich ein zweites Mal freigegeben?</td>
        <td>Nein.</td>
      </tr>
      <tr>
        <td>Wird ein beendeter Bereich noch benutzt?</td>
        <td>Ja.</td>
      </tr>
    </tbody>
  </table>
</div>

Damit gehört dieses Beispiel zuerst zur Dangling-Pointer-Seite und nicht zuerst zu Double Delete.

## Mini-Demo D: Eigentum statt Namen prüfen

```cpp
int *p = new int;
int *q = p;
q = nullptr;
delete p;
```

<div class="table-card">
  <p class="card-kicker">Verantwortungsblick</p>
  <h3>Ein zweiter Name verschwindet – der Bereich war trotzdem nur einmal da</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Didaktische Bedeutung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *q = p;</code></td>
        <td>Es entsteht kein zweiter Bereich.</td>
      </tr>
      <tr>
        <td><code>q = nullptr;</code></td>
        <td>Nur der zweite Name zeigt nicht mehr auf den Bereich.</td>
      </tr>
      <tr>
        <td><code>delete p;</code></td>
        <td>Die eine echte Reservierung wird genau einmal beendet.</td>
      </tr>
    </tbody>
  </table>
</div>

## Diagnose-Raster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Bereiche zählen</strong>
    <span>Wie viele echte <code>new</code>-Ereignisse gab es?</span>
  </div>
  <div class="step-item">
    <strong>2. Alias prüfen</strong>
    <span>Wurden nur Adressen kopiert oder wirklich neue Bereiche erzeugt?</span>
  </div>
  <div class="step-item">
    <strong>3. Erste Freigabe markieren</strong>
    <span>Ab hier ist der Bereich bereits beendet.</span>
  </div>
  <div class="step-item">
    <strong>4. Zweite Freigabe suchen</strong>
    <span>Nur wenn derselbe Bereich noch einmal freigegeben wird, liegt Double Delete vor.</span>
  </div>
</div>

## Seitengrenze zu den Nachbarseiten

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage sauber wählen</p>
  <h3>Diese Seite bleibt bei doppelter Freigabe desselben Bereichs</h3>
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
        <td><code>int *q = p; delete p; delete q;</code></td>
        <td>Wird derselbe Bereich zweimal beendet?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>delete p; cout &lt;&lt; *p;</code></td>
        <td>Wird ein beendeter Bereich noch benutzt?</td>
        <td>Nein – zuerst Dangling Pointer.</td>
      </tr>
      <tr>
        <td><code>int *p = new int; p = new int;</code></td>
        <td>Geht eine frühere Reservierung verloren?</td>
        <td>Nein – zuerst Speicherleck.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. Wie viele echte new-Ereignisse?
2. Sind zwei Namen nur Alias?
3. Wo endet der Bereich zum ersten Mal?
4. Kommt danach noch ein delete auf denselben Bereich?</code></pre>

<div class="note-panel">
  <p><strong>Merke:</strong> Double Delete ist ein Ablaufproblem. Nicht die Anzahl der Variablennamen zählt, sondern ob derselbe reservierte Bereich ein zweites Mal freigegeben wird.</p>
</div>
